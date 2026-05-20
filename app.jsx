/* global React, ReactDOM, AndroidDevice,
   TweaksPanel, TweakSection, TweakSlider, TweakToggle, TweakRadio, TweakSelect, TweakButton, useTweaks,
   OnboardingScreen, LoginScreen, DashboardScreen, IMCScreen, TensionScreen,
   WaterScreen, HealthScreen, HistoryScreen, ProfileScreen, NotificationsScreen,
   TabBar, classifyTension, classifyIMC */
var { useState, useEffect, useMemo } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "sys": 138,
  "dia": 88,
  "pulse": 78,
  "imc": 24.7,
  "scenario": "Saludable",
  "dashboardLayout": "hero",
  "gaugeVariant": "arc",
  "alertVariant": "modal"
}/*EDITMODE-END*/;

const SCENARIOS = {
  'Saludable': { sys: 118, dia: 76, pulse: 68, imc: 22.4 },
  'Pre-hipertensión': { sys: 126, dia: 79, pulse: 74, imc: 26.1 },
  'Hipertensión 1': { sys: 138, dia: 88, pulse: 78, imc: 28.3 },
  'Hipertensión 2': { sys: 152, dia: 96, pulse: 84, imc: 31.5 },
  'Crisis': { sys: 188, dia: 122, pulse: 92, imc: 33.8 },
};

// ─────────────────────────────────────────────────────────────
// Seed data factory
// ─────────────────────────────────────────────────────────────
function makeSeed(sys, dia, pulse, imc) {
  // Generate plausible history around the current values
  const rand = (n) => Math.round((Math.random() - 0.5) * n);
  const sysHist = Array.from({length: 14}, (_, i) => sys - 6 + Math.round(Math.sin(i*0.6) * 5) + rand(4));
  const diaHist = Array.from({length: 14}, (_, i) => dia - 3 + Math.round(Math.sin(i*0.6 + 1) * 3) + rand(3));
  const imcHist = Array.from({length: 8}, (_, i) => +(imc - 0.4 + Math.cos(i*0.5)*0.3 + (Math.random()-.5)*0.2).toFixed(1));
  const waterHist = [6, 8, 7, 8, 5, 4, 6];
  const months = ['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'];
  const now = new Date();
  const records = Array.from({length: 6}, (_, i) => {
    const d = new Date(now);
    d.setDate(now.getDate() - i);
    const s = sys + rand(10), di = dia + rand(6);
    return {
      sys: s, dia: di, pulse: pulse + rand(8),
      when: i === 0 ? 'Hoy · 09:24' : i === 1 ? 'Ayer · 20:10' : `${d.getDate()}/${d.getMonth()+1} · ${8 + (i%3)*4}:${(i*7)%59}`.padEnd(0),
      day: d.getDate(),
      month: months[d.getMonth()],
    };
  });

  return {
    profile: { peso: 68, altura: 1.65 },
    lastTension: { sys, dia, pulse },
    lastIMC: imc,
    water: { value: 5, goal: 8, reminder: '2h' },
    jamaica: 1,
    history: {
      sys: sysHist,
      dia: diaHist,
      imc: imcHist,
      water: waterHist,
      records,
    },
  };
}

// ─────────────────────────────────────────────────────────────
// App
// ─────────────────────────────────────────────────────────────
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // When scenario changes, apply preset numbers
  const lastScenario = React.useRef(t.scenario);
  useEffect(() => {
    if (t.scenario !== lastScenario.current && SCENARIOS[t.scenario]) {
      const s = SCENARIOS[t.scenario];
      setTweak({ sys: s.sys, dia: s.dia, pulse: s.pulse, imc: s.imc });
      lastScenario.current = t.scenario;
    }
  }, [t.scenario]);

  const [route, setRoute] = useState('onboarding');
  const [tab, setTab] = useState('home');
  const [user, setUser] = useState({
    nombre: 'Ana López',
    correo: 'ana@karde.health',
    sexo: 'F', edad: 32, peso: 68, altura: 1.65,
  });

  // Build seed from tweaks
  const state = useMemo(() => makeSeed(t.sys, t.dia, t.pulse, t.imc), [t.sys, t.dia, t.pulse, t.imc]);
  // Mutable overrides for in-app actions (water/jamaica) — keep simple via state holder
  const [overrides, setOverrides] = useState({});
  const merged = { ...state, ...overrides, water: overrides.water || state.water, jamaica: overrides.jamaica ?? state.jamaica };

  const go = (r) => {
    if (['home','history','health','profile'].includes(r)) {
      setTab(r);
      setRoute('main');
    } else {
      setRoute(r);
    }
  };

  // ── Routing ──
  let screen;
  if (route === 'onboarding') {
    screen = <OnboardingScreen onComplete={(d) => { setUser(d); setRoute('main'); setTab('home'); }} onGoLogin={() => setRoute('login')} />;
  } else if (route === 'login') {
    screen = <LoginScreen onLogin={(d) => { setUser({ ...user, ...d }); setRoute('main'); setTab('home'); }} onGoSignup={() => setRoute('onboarding')} />;
  } else if (route === 'tension') {
    screen = <TensionScreen state={merged} setTension={(v) => setTweak({ sys: v.sys, dia: v.dia, pulse: v.pulse })} go={go} alertVariant={t.alertVariant} />;
  } else if (route === 'imc') {
    screen = <IMCScreen state={merged} setIMC={(v) => setTweak('imc', +v.toFixed(1))} go={go} gaugeVariant={t.gaugeVariant} />;
  } else if (route === 'water') {
    screen = <WaterScreen state={merged} setWater={(w) => setOverrides(o => ({ ...o, water: w }))} addJamaica={(v) => setOverrides(o => ({ ...o, jamaica: v }))} go={go} />;
  } else if (route === 'notifications') {
    screen = <NotificationsScreen go={go} />;
  } else if (route === 'calendar') {
    screen = <CalendarScreen go={go} />;
  } else {
    // main with tabs
    if (tab === 'home') {
      screen = <DashboardScreen user={user} state={merged} go={go} layout={t.dashboardLayout} />;
    } else if (tab === 'history') {
      screen = <HistoryScreen state={merged} go={go} />;
    } else if (tab === 'health') {
      screen = <HealthScreen state={merged} go={go} />;
    } else if (tab === 'profile') {
      screen = <ProfileScreen state={merged} user={user} setUser={setUser} go={go} />;
    }
  }

  const showTabs = route === 'main' || ['tension','imc','water'].includes(route);

  return (
    <div className="stage">
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <PhoneFrame>
          <div className="phone-scroll" style={{ height: '100%', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1 }}>{screen}</div>
            {showTabs && <TabBar active={tab} onChange={(t) => { setTab(t); setRoute('main'); }} />}
          </div>
        </PhoneFrame>
      </div>

      <TweaksPanel>
        <TweakSection label="Escenario" />
        <TweakSelect label="Estado del paciente" value={t.scenario}
          options={Object.keys(SCENARIOS)}
          onChange={(v) => setTweak('scenario', v)} />
        <TweakSlider label="Sistólica" value={t.sys} min={90} max={200} unit="mmHg"
          onChange={(v) => setTweak('sys', v)} />
        <TweakSlider label="Diastólica" value={t.dia} min={50} max={130} unit="mmHg"
          onChange={(v) => setTweak('dia', v)} />
        <TweakSlider label="Pulso" value={t.pulse} min={45} max={140} unit="bpm"
          onChange={(v) => setTweak('pulse', v)} />
        <TweakSlider label="IMC" value={t.imc} min={15} max={42} step={0.1} unit=""
          onChange={(v) => setTweak('imc', v)} />

        <TweakSection label="Variaciones" />
        <TweakRadio label="Dashboard" value={t.dashboardLayout}
          options={['hero','cards','stack']}
          onChange={(v) => setTweak('dashboardLayout', v)} />
        <TweakRadio label="Gauge IMC" value={t.gaugeVariant}
          options={['arc','bar','ring']}
          onChange={(v) => setTweak('gaugeVariant', v)} />
        <TweakRadio label="Alerta crisis" value={t.alertVariant}
          options={['modal','banner','inline']}
          onChange={(v) => setTweak('alertVariant', v)} />

        <TweakSection label="Navegar" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
          {[
            ['Onboarding', 'onboarding'],
            ['Login', 'login'],
            ['Dashboard', 'home'],
            ['Tensión', 'tension'],
            ['IMC', 'imc'],
            ['Agua', 'water'],
            ['Salud', 'health'],
            ['Historial', 'history'],
            ['Perfil', 'profile'],
            ['Notif.', 'notifications'],
          ].map(([l, r]) => (
            <TweakButton key={r} onClick={() => go(r)}>{l}</TweakButton>
          ))}
        </div>
      </TweaksPanel>
    </div>
  );
}

// Phone frame wrapper (uses AndroidDevice from starter, with status bar but no app bar)
function PhoneFrame({ children }) {
  return (
    <AndroidDevice width={412} height={892}>
      <div style={{ height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', background: 'var(--bg)' }}>
        {children}
      </div>
    </AndroidDevice>
  );
}

function CalendarScreen({ go }) {
  const [sel, setSel] = useState(new Date());
  const month = sel.getMonth();
  const year = sel.getFullYear();
  const first = new Date(year, month, 1);
  const startWeekday = (first.getDay() + 6) % 7; // Monday-first
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();
  const isToday = (d) => d === today.getDate() && month === today.getMonth() && year === today.getFullYear();
  const monthName = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'][month];

  // Fake measurement dots
  const measureDays = [3, 5, 8, 10, 12, 14, today.getDate()];

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100%' }}>
      <div style={{ padding: '14px 16px 10px', display: 'flex', alignItems: 'center', gap: 6 }}>
        <button onClick={() => go('home')} style={{ border: 0, background: 'var(--surface)', width: 36, height: 36, borderRadius: 12 }}>
          <Icon name="arrowL" size={18} />
        </button>
        <div style={{ flex: 1, marginLeft: 6 }} className="serif" >
          <div style={{ fontSize: 24, letterSpacing: '-.01em' }}>{monthName} {year}</div>
        </div>
        <button style={{ border: 0, background: 'var(--surface)', width: 36, height: 36, borderRadius: 12 }}>
          <Icon name="chevronL" size={18} />
        </button>
        <button style={{ border: 0, background: 'var(--surface)', width: 36, height: 36, borderRadius: 12 }}>
          <Icon name="chevronR" size={18} />
        </button>
      </div>

      <div style={{ padding: '8px 16px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4, fontSize: 11, color: 'var(--muted)', textAlign: 'center', fontWeight: 700, letterSpacing: '.08em', marginBottom: 6 }}>
          {['L','M','M','J','V','S','D'].map((d,i) => <div key={i}>{d}</div>)}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
          {Array.from({length: startWeekday}).map((_, i) => <div key={`pad${i}`} />)}
          {Array.from({length: daysInMonth}).map((_, i) => {
            const d = i + 1;
            const td = isToday(d);
            const hasM = measureDays.includes(d);
            const isSel = d === sel.getDate();
            return (
              <button key={d} onClick={() => setSel(new Date(year, month, d))} style={{
                aspectRatio: '1/1', border: 0, padding: 0,
                background: isSel ? 'var(--hibiscus)' : (td ? 'var(--surface)' : 'transparent'),
                color: isSel ? '#FFFEFB' : (td ? 'var(--hibiscus)' : 'var(--ink)'),
                borderRadius: 12, fontWeight: td || isSel ? 700 : 500,
                position: 'relative',
              }} className="tnum">
                {d}
                {hasM && <span style={{ position: 'absolute', bottom: 4, left: '50%', transform: 'translateX(-50%)', width: 4, height: 4, borderRadius: 999, background: isSel ? '#FFFEFB' : 'var(--hibiscus)' }} />}
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ padding: '20px 16px' }}>
        <div style={{ fontSize: 11, letterSpacing: '.1em', color: 'var(--muted)', fontWeight: 700 }}>EN ESTE DÍA</div>
        <div className="serif" style={{ fontSize: 22, marginTop: 4 }}>3 mediciones</div>
        <div style={{ marginTop: 12, background: 'var(--surface)', borderRadius: 16, padding: 14, border: '1px solid var(--border-soft)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 4, height: 28, borderRadius: 4, background: 'var(--st-htn1)' }} />
            <div style={{ flex: 1 }}>
              <div className="tnum" style={{ fontWeight: 700 }}>138/88 mmHg</div>
              <div style={{ fontSize: 11, color: 'var(--muted)' }}>09:24 · pulso 78</div>
            </div>
            <span style={{ fontSize: 10.5, padding: '2px 8px', borderRadius: 999, background: 'var(--st-htn1-soft)', color: 'var(--st-htn1)', fontWeight: 700 }}>HTN-1</span>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
