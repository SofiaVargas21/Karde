/* global React, Icon, Card, Button, Field, AlertBanner, LineChart, BarChart, classifyTension, SubHeader, SectionTitle, ProgressBar */
const { useState: useStateM4 } = React;

// ─────────────────────────────────────────────────────────────
// HISTORY SCREEN
// ─────────────────────────────────────────────────────────────
function HistoryScreen({ state, go }) {
  const [period, setPeriod] = useStateM4('week');
  const [metric, setMetric] = useStateM4('tension');

  return (
    <div style={{ paddingBottom: 90, background: 'var(--bg)' }}>
      <div style={{ padding: '14px 16px 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div className="serif" style={{ fontSize: 28, letterSpacing: '-.02em' }}>Historial</div>
        <button style={{ width: 36, height: 36, borderRadius: 12, background: 'var(--surface)', border: '1px solid var(--border-soft)' }}>
          <Icon name="calendar" size={18} />
        </button>
      </div>

      {/* Period switch */}
      <div style={{ padding: '0 16px' }}>
        <div style={{ display: 'flex', background: 'var(--surface)', borderRadius: 12, padding: 4, border: '1px solid var(--border-soft)' }}>
          {[{k:'day',l:'Día'},{k:'week',l:'Semana'},{k:'month',l:'Mes'},{k:'year',l:'Año'}].map(p => (
            <button key={p.k} onClick={() => setPeriod(p.k)} style={{
              flex: 1, padding: '9px 0', border: 0,
              background: period === p.k ? 'var(--hibiscus)' : 'transparent',
              color: period === p.k ? '#FFFEFB' : 'var(--ink-2)',
              borderRadius: 10, fontWeight: 600, fontSize: 12.5,
            }}>{p.l}</button>
          ))}
        </div>

        {/* Metric tabs */}
        <div style={{ display: 'flex', gap: 8, marginTop: 14, overflowX: 'auto' }} className="hscroll">
          {[
            { k:'tension', l:'Tensión', i:'heart', c:'var(--hibiscus)' },
            { k:'imc', l:'IMC', i:'scale', c:'var(--sage-deep)' },
            { k:'water', l:'Agua', i:'drop', c:'#2F5C70' },
            { k:'pulse', l:'Pulso', i:'pulse', c:'var(--terracotta)' },
          ].map(m => {
            const on = metric === m.k;
            return (
              <button key={m.k} onClick={() => setMetric(m.k)} style={{
                padding: '8px 14px', borderRadius: 999, border: 'none',
                background: on ? m.c : 'var(--surface)',
                color: on ? '#FFFEFB' : 'var(--ink-2)',
                fontSize: 12.5, fontWeight: 600,
                display: 'inline-flex', alignItems: 'center', gap: 6,
                whiteSpace: 'nowrap', flexShrink: 0,
                border: on ? 'none' : '1px solid var(--border-soft)',
              }}>
                <Icon name={m.i} size={14} color={on ? '#FFFEFB' : m.c} /> {m.l}
              </button>
            );
          })}
        </div>

        {/* Main chart */}
        <div style={{ marginTop: 16 }}>
          {metric === 'tension' && <TensionHistory state={state} />}
          {metric === 'imc' && <IMCHistory state={state} />}
          {metric === 'water' && <WaterHistory state={state} />}
          {metric === 'pulse' && <PulseHistory state={state} />}
        </div>

        {/* Records list */}
        <div style={{ marginTop: 20 }}>
          <SectionTitle subtitle="Detalle" title="Mediciones recientes" />
          <Card style={{ padding: 0 }}>
            {state.history.records.map((r, i, arr) => {
              const cls = classifyTension(r.sys, r.dia);
              return (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 12, padding: '14px',
                  borderBottom: i < arr.length - 1 ? '1px solid var(--border-soft)' : 'none',
                }}>
                  <div style={{ width: 44, textAlign: 'center' }}>
                    <div className="serif tnum" style={{ fontSize: 18, lineHeight: 1, color: 'var(--hibiscus)' }}>{r.day}</div>
                    <div style={{ fontSize: 9, color: 'var(--muted)', letterSpacing: '.08em', fontWeight: 700 }}>{r.month}</div>
                  </div>
                  <div style={{ width: 4, height: 36, borderRadius: 4, background: cls.color }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 14 }} className="tnum">{r.sys}/{r.dia} mmHg</div>
                    <div style={{ fontSize: 11, color: 'var(--muted)' }}>{r.when} · {r.pulse} bpm</div>
                  </div>
                  <span style={{ padding: '2px 8px', borderRadius: 999, background: cls.soft, color: cls.color, fontSize: 10.5, fontWeight: 700 }}>{cls.short}</span>
                </div>
              );
            })}
          </Card>
        </div>
      </div>
    </div>
  );
}

function TensionHistory({ state }) {
  const sys = state.history.sys;
  const dia = state.history.dia;
  const avgS = Math.round(sys.reduce((a,b)=>a+b,0) / sys.length);
  const avgD = Math.round(dia.reduce((a,b)=>a+b,0) / dia.length);
  return (
    <Card style={{ padding: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div>
          <div style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '.1em', fontWeight: 700 }}>PROMEDIO</div>
          <div className="serif tnum" style={{ fontSize: 38, lineHeight: 1, marginTop: 2 }}>{avgS}<span style={{ color: 'var(--muted-2)', fontSize: 22 }}>/</span>{avgD}</div>
          <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 2 }}>mmHg · 14 lecturas</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '3px 8px', borderRadius: 999, background: 'var(--st-normal-soft)', color: 'var(--st-normal)', fontSize: 11, fontWeight: 700 }}>
            ↓ 4 mmHg
          </div>
          <div style={{ fontSize: 10.5, color: 'var(--muted)', marginTop: 4 }}>vs. semana previa</div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 14, marginTop: 12, fontSize: 11 }}>
        <Legend2 color="var(--hibiscus)" label="Sistólica" />
        <Legend2 color="var(--sage)" label="Diastólica" />
      </div>
      <LineChart
        series={[
          { data: sys, color: 'var(--hibiscus)' },
          { data: dia, color: 'var(--sage)' },
        ]}
        width={320} height={180} yMin={60} yMax={160} fill
      />
    </Card>
  );
}

function IMCHistory({ state }) {
  return (
    <Card style={{ padding: 16 }}>
      <div style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '.1em', fontWeight: 700 }}>ACTUAL</div>
      <div className="serif tnum" style={{ fontSize: 38, marginTop: 2 }}>{state.lastIMC.toFixed(1)}</div>
      <LineChart
        series={[{ data: state.history.imc, color: 'var(--hibiscus)' }]}
        width={320} height={160} fill
      />
    </Card>
  );
}

function WaterHistory({ state }) {
  return (
    <Card style={{ padding: 16 }}>
      <div style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '.1em', fontWeight: 700 }}>PROMEDIO SEMANAL</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <div className="serif tnum" style={{ fontSize: 38, marginTop: 2 }}>{(state.history.water.reduce((a,b)=>a+b,0)/7).toFixed(1)}</div>
        <span style={{ fontSize: 14, color: 'var(--muted)' }}>vasos/día</span>
      </div>
      <BarChart data={state.history.water} labels={['L','M','M','J','V','S','D']} width={320} height={140} color="#2F5C70" goal={8} />
    </Card>
  );
}

function PulseHistory({ state }) {
  const data = state.history.records.map(r => r.pulse).reverse();
  return (
    <Card style={{ padding: 16 }}>
      <div style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '.1em', fontWeight: 700 }}>PULSO PROMEDIO</div>
      <div className="serif tnum" style={{ fontSize: 38, marginTop: 2 }}>{Math.round(data.reduce((a,b)=>a+b,0)/data.length)}<span style={{ fontSize: 14, color: 'var(--muted)', marginLeft: 4 }}>bpm</span></div>
      <LineChart series={[{ data, color: 'var(--terracotta)' }]} width={320} height={160} fill />
    </Card>
  );
}

function Legend2({ color, label }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--ink-2)' }}>
      <span style={{ width: 18, height: 3, borderRadius: 999, background: color }} />
      <span style={{ fontWeight: 600 }}>{label}</span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// PROFILE SCREEN
// ─────────────────────────────────────────────────────────────
function ProfileScreen({ state, user, setUser, go }) {
  return (
    <div style={{ paddingBottom: 90, background: 'var(--bg)' }}>
      {/* Header */}
      <div className="curve-bottom petal-bg" style={{
        background: 'linear-gradient(180deg, var(--hibiscus-tint) 0%, var(--bg) 100%)',
        padding: '20px 16px 28px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="serif" style={{ fontSize: 28, letterSpacing: '-.02em' }}>Perfil</div>
          <button style={{ width: 36, height: 36, borderRadius: 12, background: 'var(--surface)', border: '1px solid var(--border-soft)' }}>
            <Icon name="settings" size={18} />
          </button>
        </div>
        <div style={{ display: 'flex', gap: 14, marginTop: 22, alignItems: 'center' }}>
          <div style={{
            width: 72, height: 72, borderRadius: 999,
            background: 'radial-gradient(circle at 30% 30%, #F4D5DA, #C03A4D)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#FFFEFB', fontSize: 26, fontWeight: 700,
            boxShadow: '0 8px 20px rgba(155,45,63,.25)',
          }}>
            {user.nombre.split(' ').map(w => w[0]).slice(0,2).join('')}
          </div>
          <div style={{ flex: 1 }}>
            <div className="serif" style={{ fontSize: 22, letterSpacing: '-.01em' }}>{user.nombre}</div>
            <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{user.correo}</div>
            <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
              <Tag>{user.edad} años</Tag>
              <Tag>{user.peso} kg</Tag>
              <Tag>{user.altura} m</Tag>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: '0 16px' }}>
        {/* Quick stats */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginTop: -16 }}>
          <StatCard label="Mediciones" value={state.history.records.length + 12} />
          <StatCard label="Racha" value="7" suffix="días" />
          <StatCard label="Adherencia" value="86" suffix="%" />
        </div>

        {/* Editable info */}
        <SectionPad2>
          <SectionTitle subtitle="Información" title="Datos personales" action={
            <button style={{ border: 0, background: 'transparent', color: 'var(--hibiscus)', fontWeight: 700, fontSize: 12 }}>Editar</button>
          } />
          <Card style={{ padding: 0 }}>
            <Row label="Nombre" value={user.nombre} />
            <Row label="Correo" value={user.correo} />
            <Row label="Sexo" value={{F:'Femenino',M:'Masculino',O:'Otro'}[user.sexo] || 'Otro'} />
            <Row label="Edad" value={`${user.edad} años`} />
            <Row label="Peso" value={`${user.peso} kg`} />
            <Row label="Altura" value={`${user.altura} m`} />
          </Card>
        </SectionPad2>

        {/* Reminders */}
        <SectionPad2>
          <SectionTitle subtitle="Frecuencia" title="Recordatorios" />
          <Card style={{ padding: 0 }}>
            <ReminderRow icon="heart" tint="var(--hibiscus-tint)" color="var(--hibiscus)"
              title="Tensión arterial" sub="Lun · Mié · Vie a las 8:00" toggle />
            <ReminderRow icon="scale" tint="var(--sage-soft)" color="var(--sage-deep)"
              title="Peso e IMC" sub="Lunes 8:00" toggle />
            <ReminderRow icon="drop" tint="#D5E8F0" color="#2F5C70"
              title="Agua" sub="Cada 2 horas · 8:00-22:00" toggle />
            <ReminderRow icon="leaf" tint="var(--hibiscus-tint)" color="var(--hibiscus)"
              title="Infusión de jamaica" sub="14:00" toggle={false} />
          </Card>
        </SectionPad2>

        {/* Recommendations basis */}
        <SectionPad2>
          <SectionTitle subtitle="Ajustes médicos" title="Plan de medición" />
          <Card style={{ padding: 14 }}>
            <div style={{ fontSize: 12, color: 'var(--ink-2)', lineHeight: 1.5 }}>
              Según las guías de la <strong>AHA</strong>, mides tu tensión <strong>3 veces por semana</strong>. ¿Tienes hipertensión diagnosticada?
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
              <button style={{ flex: 1, padding: '10px', border: '1px solid var(--border)', background: 'var(--surface)', borderRadius: 10, fontWeight: 600, fontSize: 12.5 }}>No</button>
              <button style={{ flex: 1, padding: '10px', border: '1px solid var(--hibiscus)', background: 'var(--hibiscus-tint)', color: 'var(--hibiscus)', borderRadius: 10, fontWeight: 700, fontSize: 12.5 }}>Sí — pasar a 2x/día</button>
            </div>
          </Card>
        </SectionPad2>

        {/* Other */}
        <SectionPad2>
          <Card style={{ padding: 0 }}>
            <MenuRow icon="info" label="Aviso médico y privacidad" />
            <MenuRow icon="sparkle" label="Sobre VitaControl" />
            <MenuRow icon="logout" label="Cerrar sesión" danger onClick={() => go('login')} />
          </Card>
        </SectionPad2>
      </div>
    </div>
  );
}

function Tag({ children }) { return <span style={{ padding: '3px 9px', background: 'var(--surface)', borderRadius: 999, fontSize: 11, fontWeight: 600, color: 'var(--ink-2)', border: '1px solid var(--border-soft)' }}>{children}</span>; }
function SectionPad2({ children }) { return <div style={{ marginTop: 22 }}>{children}</div>; }

function StatCard({ label, value, suffix }) {
  return (
    <div style={{ background: 'var(--surface)', borderRadius: 16, padding: '12px 10px', textAlign: 'center', border: '1px solid var(--border-soft)' }}>
      <div className="serif tnum" style={{ fontSize: 26, lineHeight: 1 }}>{value}<span style={{ fontSize: 13, color: 'var(--muted)', marginLeft: 2 }}>{suffix}</span></div>
      <div style={{ fontSize: 10.5, color: 'var(--muted)', marginTop: 2, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase' }}>{label}</div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', borderBottom: '1px solid var(--border-soft)' }}>
      <span style={{ fontSize: 13, color: 'var(--muted)' }}>{label}</span>
      <span style={{ fontSize: 13.5, fontWeight: 600 }}>{value}</span>
    </div>
  );
}

function ReminderRow({ icon, tint, color, title, sub, toggle }) {
  const [on, setOn] = useStateM4(!!toggle);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderBottom: '1px solid var(--border-soft)' }}>
      <div style={{ width: 38, height: 38, borderRadius: 12, background: tint, color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon name={icon} size={18} />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 600, fontSize: 13.5 }}>{title}</div>
        <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 2 }}>{sub}</div>
      </div>
      <button onClick={() => setOn(!on)} style={{
        width: 44, height: 26, borderRadius: 999, border: 0,
        background: on ? 'var(--hibiscus)' : 'var(--bg-deep)',
        position: 'relative', padding: 0, transition: 'background .2s',
      }}>
        <span style={{
          position: 'absolute', top: 3, left: on ? 21 : 3, width: 20, height: 20,
          borderRadius: 999, background: '#FFFEFB',
          boxShadow: '0 2px 4px rgba(0,0,0,.18)', transition: 'left .2s',
        }} />
      </button>
    </div>
  );
}

function MenuRow({ icon, label, danger, onClick }) {
  return (
    <button onClick={onClick} className="tap" style={{
      width: '100%', display: 'flex', alignItems: 'center', gap: 12,
      padding: '14px', border: 0, background: 'transparent', textAlign: 'left',
      color: danger ? 'var(--st-crisis)' : 'var(--ink)',
      borderBottom: '1px solid var(--border-soft)',
    }}>
      <Icon name={icon} size={18} />
      <span style={{ flex: 1, fontWeight: 600, fontSize: 13.5 }}>{label}</span>
      <Icon name="chevronR" size={16} color="var(--muted)" />
    </button>
  );
}

// ─────────────────────────────────────────────────────────────
// NOTIFICATIONS DROPDOWN (small modal)
// ─────────────────────────────────────────────────────────────
function NotificationsScreen({ go }) {
  return (
    <div style={{ paddingBottom: 90, background: 'var(--bg)' }}>
      <SubHeader title="Notificaciones" onBack={() => go('home')} />
      <div style={{ padding: '6px 16px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <Notif tone="crisis" icon="alert" title="Crisis hipertensiva detectada"
          body="Tu última medición fue 185/115. Consulta un médico." when="hace 5 min" unread />
        <Notif tone="warn" icon="bell" title="Tu medición de tensión está pendiente"
          body="Hoy es miércoles — ¿tomamos tu lectura?" when="hace 1 h" />
        <Notif tone="info" icon="drop" title="¡Buen trabajo con el agua!"
          body="Vas en 6 de 8 vasos." when="hace 3 h" />
        <Notif tone="success" icon="check" title="Resumen semanal"
          body="Promedio: 124/82. Tendencia a la baja." when="ayer" />
        <Notif tone="hibiscus" icon="leaf" title="Tu infusión de la tarde"
          body="Tip: prepárala fría con un toque de canela." when="ayer" />
      </div>
    </div>
  );
}

function Notif({ tone, icon, title, body, when, unread }) {
  const tones = {
    crisis: { bg: 'var(--st-crisis-soft)', fg: 'var(--st-crisis)' },
    warn: { bg: 'var(--st-elevated-soft)', fg: 'var(--st-elevated)' },
    info: { bg: 'var(--sage-soft)', fg: 'var(--sage-deep)' },
    success: { bg: 'var(--st-normal-soft)', fg: 'var(--st-normal)' },
    hibiscus: { bg: 'var(--hibiscus-tint)', fg: 'var(--hibiscus)' },
  };
  const t = tones[tone];
  return (
    <div style={{
      background: 'var(--surface)', borderRadius: 16, padding: 14,
      border: unread ? `1px solid ${t.fg}55` : '1px solid var(--border-soft)',
      display: 'flex', gap: 12,
    }}>
      <div style={{ width: 40, height: 40, borderRadius: 12, background: t.bg, color: t.fg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <Icon name={icon} size={20} />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontWeight: 700, fontSize: 13.5 }}>{title}</span>
          {unread && <span style={{ width: 7, height: 7, borderRadius: 999, background: t.fg }} />}
        </div>
        <div style={{ fontSize: 12, color: 'var(--ink-2)', marginTop: 3, lineHeight: 1.45 }}>{body}</div>
        <div style={{ fontSize: 10.5, color: 'var(--muted)', marginTop: 6, letterSpacing: '.04em' }}>{when}</div>
      </div>
    </div>
  );
}

Object.assign(window, { HistoryScreen, ProfileScreen, NotificationsScreen });
