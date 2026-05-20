/* global React, Icon, Card, Button, Field, AlertBanner, IMCGauge, TensionIndicator, LineChart, classifyIMC, classifyTension, SubHeader, MiniSpark, SectionTitle, Toast */
const { useState: useStateM2, useMemo: useMemoM2 } = React;

// ─────────────────────────────────────────────────────────────
// IMC SCREEN
// ─────────────────────────────────────────────────────────────
function IMCScreen({ state, setIMC, go, gaugeVariant = 'arc' }) {
  const [peso, setPeso] = useStateM2(state.profile.peso);
  const [altura, setAltura] = useStateM2(state.profile.altura);
  const [toast, setToast] = useStateM2(false);
  const calc = (peso && altura) ? peso / (altura * altura) : state.lastIMC;
  const cls = classifyIMC(calc);

  const save = () => {
    setIMC(calc);
    setToast(true);
    setTimeout(() => setToast(false), 2200);
  };

  return (
    <div style={{ paddingBottom: 90, background: 'var(--bg)' }}>
      <SubHeader title="Índice de Masa Corporal" onBack={() => go('home')} action={<button style={{ border:0, background:'transparent', color:'var(--muted)' }}><Icon name="info" size={20} /></button>} />
      {toast && <Toast>IMC guardado</Toast>}

      <div style={{ padding: '0 16px 0' }}>
        {/* Gauge card */}
        <Card style={{ padding: '12px 14px 14px', textAlign: 'center', overflow: 'hidden' }} accent={cls.color}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <IMCGauge value={calc} variant={gaugeVariant} size={gaugeVariant === 'ring' ? 180 : 200} />
          </div>
          <div style={{ marginTop: 8, fontSize: 12, color: 'var(--ink-2)', lineHeight: 1.45 }}>{cls.tip}</div>
        </Card>

        {/* Inputs */}
        <Card style={{ marginTop: 10, padding: 12 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <Field label="Peso" value={peso} onChange={v => setPeso(Number(v) || 0)} type="number" suffix="kg" icon="scale" />
            <Field label="Altura" value={altura} onChange={v => setAltura(Number(v) || 0)} type="number" suffix="m" />
          </div>
        </Card>

        <div style={{ marginTop: 10 }}>
          <Button full size="lg" onClick={save}>Calcular y guardar</Button>
        </div>

        {/* Range legend */}
        <div style={{ marginTop: 18 }}>
          <SectionTitle subtitle="Categorías" title="¿Qué significa tu IMC?" />
          <Card style={{ padding: 0, overflow: 'hidden' }}>
            {[
              { label: 'Bajo peso', range: '< 18.5', color: 'var(--st-elevated)' },
              { label: 'Normal', range: '18.5 – 24.9', color: 'var(--st-normal)' },
              { label: 'Sobrepeso', range: '25 – 29.9', color: '#D9B25A' },
              { label: 'Obesidad I', range: '30 – 34.9', color: 'var(--st-htn1)' },
              { label: 'Obesidad II+', range: '≥ 35', color: 'var(--st-crisis)' },
            ].map((r, i, arr) => {
              const on = cls.label === r.label || (cls.label === 'Obesidad II+' && r.label === 'Obesidad II+');
              return (
                <div key={r.label} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '12px 14px',
                  borderBottom: i < arr.length - 1 ? '1px solid var(--border-soft)' : 'none',
                  background: on ? 'var(--surface-warm)' : 'transparent',
                }}>
                  <div style={{ width: 8, height: 30, borderRadius: 4, background: r.color }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: on ? 700 : 600, fontSize: 13.5 }}>{r.label}</div>
                    <div className="tnum" style={{ fontSize: 11.5, color: 'var(--muted)' }}>{r.range}</div>
                  </div>
                  {on && <span style={{ padding: '2px 8px', borderRadius: 999, background: r.color, color: '#FFFEFB', fontSize: 10, fontWeight: 700 }}>TÚ</span>}
                </div>
              );
            })}
          </Card>
        </div>

        {/* Evolution */}
        <div style={{ marginTop: 20 }}>
          <SectionTitle subtitle="Esta semana" title="Evolución del IMC" />
          <Card>
            <LineChart 
              series={[{ data: state.history.imc.slice(-7), color: 'var(--hibiscus)' }]} 
              width={320} height={140} 
              yMin={Math.min(...state.history.imc.slice(-7)) - 1.5} 
              yMax={Math.max(...state.history.imc.slice(-7)) + 1.5} 
              fill 
              labels={['L', 'M', 'M', 'J', 'V', 'S', 'D']}
            />
          </Card>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// TENSION SCREEN
// ─────────────────────────────────────────────────────────────
function TensionScreen({ state, setTension, go, alertVariant = 'modal' }) {
  const [sys, setSys] = useStateM2(state.lastTension.sys);
  const [dia, setDia] = useStateM2(state.lastTension.dia);
  const [pulse, setPulse] = useStateM2(state.lastTension.pulse);
  const [showAlert, setShowAlert] = useStateM2(null);
  const [toast, setToast] = useStateM2(false);
  const cls = classifyTension(sys, dia);

  const save = () => {
    setTension({ sys, dia, pulse });
    if (cls.key === 'crisis' || cls.key === 'htn2') {
      setShowAlert(cls);
    } else {
      setToast(true);
      setTimeout(() => setToast(false), 2200);
    }
  };

  return (
    <div style={{ paddingBottom: 90, background: 'var(--bg)', position: 'relative' }}>
      <SubHeader title="Tensión arterial" onBack={() => go('home')} action={<button style={{ border:0, background:'transparent', color:'var(--muted)' }}><Icon name="info" size={20} /></button>} />
      {toast && <Toast>Medición registrada</Toast>}

      <div style={{ padding: '6px 16px 0' }}>
        {/* Big BP card */}
        <Card style={{
          padding: 22, textAlign: 'center', position: 'relative', overflow: 'hidden',
          background: `linear-gradient(180deg, ${cls.soft} 0%, var(--surface) 60%)`,
        }} accent={cls.color}>
          <div style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '.16em', fontWeight: 700 }}>ÚLTIMA MEDICIÓN</div>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 10, marginTop: 10 }}>
            <span className="serif tnum" style={{ fontSize: 80, lineHeight: 1, letterSpacing: '-.03em', color: cls.color }}>{sys}</span>
            <span style={{ fontSize: 36, color: 'var(--muted-2)', fontWeight: 300 }}>/</span>
            <span className="serif tnum" style={{ fontSize: 50, lineHeight: 1, color: 'var(--ink-2)' }}>{dia}</span>
          </div>
          <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 4, fontWeight: 600, letterSpacing: '.06em' }}>mmHg</div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 12px', borderRadius: 999, marginTop: 12, background: 'var(--surface)', border: `1px solid ${cls.color}33` }}>
            <span style={{ width: 8, height: 8, borderRadius: 999, background: cls.color }} />
            <span style={{ fontSize: 12.5, fontWeight: 700, color: cls.color }}>{cls.label}</span>
          </div>
          <div style={{ marginTop: 18 }}>
            <TensionIndicator sys={sys} dia={dia} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 16, gap: 8 }}>
            <Stat label="Pulso" value={pulse} suffix="bpm" />
            <div style={{ width: 1, background: 'var(--border-soft)' }} />
            <Stat label="Hace" value="2" suffix="horas" />
            <div style={{ width: 1, background: 'var(--border-soft)' }} />
            <Stat label="Promedio 7d" value="124/82" small />
          </div>
        </Card>

        {/* New measurement */}
        <div style={{ marginTop: 20 }}>
          <SectionTitle subtitle="Nueva medición" title="Registra tu lectura" />
          <Card>
            <NumberRow label="Sistólica" value={sys} onChange={setSys} min={70} max={220} suffix="mmHg" color="var(--hibiscus)" />
            <div style={{ height: 1, background: 'var(--border-soft)', margin: '8px 0' }} />
            <NumberRow label="Diastólica" value={dia} onChange={setDia} min={40} max={140} suffix="mmHg" color="var(--ink-2)" />
            <div style={{ height: 1, background: 'var(--border-soft)', margin: '8px 0' }} />
            <NumberRow label="Pulso (opcional)" value={pulse} onChange={setPulse} min={40} max={200} suffix="bpm" color="var(--sage)" />
            <div style={{ marginTop: 14 }}>
              <Button full size="lg" onClick={save}>Guardar medición</Button>
            </div>
          </Card>
        </div>

        {/* Trend chart */}
        <div style={{ marginTop: 20 }}>
          <SectionTitle subtitle="Esta semana" title="Evolución" action={
            <button style={{ border: 0, background: 'transparent', fontSize: 12, color: 'var(--hibiscus)', fontWeight: 700 }} onClick={() => go('history')}>Ver todo →</button>
          } />
          <Card>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 10, fontSize: 11 }}>
              <Legend color="var(--hibiscus)" label="Sistólica" />
              <Legend color="var(--sage)" label="Diastólica" />
            </div>
            <LineChart
              series={[
                { data: state.history.sys.slice(-7), color: 'var(--hibiscus)' },
                { data: state.history.dia.slice(-7), color: 'var(--sage)' },
              ]}
              width={320} height={150} yMin={60} yMax={170} fill
              labels={['L', 'M', 'M', 'J', 'V', 'S', 'D']}
            />
          </Card>
        </div>

        {/* Latest measurements list */}
        <div style={{ marginTop: 20 }}>
          <SectionTitle subtitle="Recientes" title="Mediciones" />
          <Card style={{ padding: 0 }}>
            {state.history.records.slice(0, 4).map((r, i, arr) => {
              const rcls = classifyTension(r.sys, r.dia);
              return (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px',
                  borderBottom: i < arr.length - 1 ? '1px solid var(--border-soft)' : 'none',
                }}>
                  <div style={{ width: 4, height: 36, borderRadius: 4, background: rcls.color }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 14 }} className="tnum">{r.sys}/{r.dia} <span style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 500 }}>· {r.pulse} bpm</span></div>
                    <div style={{ fontSize: 11, color: 'var(--muted)' }}>{r.when}</div>
                  </div>
                  <span style={{ padding: '2px 8px', borderRadius: 999, background: rcls.soft, color: rcls.color, fontSize: 10.5, fontWeight: 700 }}>{rcls.short}</span>
                </div>
              );
            })}
          </Card>
        </div>
      </div>

      {/* Alert overlay */}
      {showAlert && (
        <AlertOverlay cls={showAlert} variant={alertVariant} onDismiss={() => setShowAlert(null)} onGoHealth={() => { setShowAlert(null); go('health'); }} />
      )}
    </div>
  );
}

function Stat({ label, value, suffix, small }) {
  return (
    <div style={{ flex: 1, textAlign: 'center' }}>
      <div className="serif tnum" style={{ fontSize: small ? 18 : 24, lineHeight: 1 }}>
        {value}{suffix && <span style={{ fontSize: 11, color: 'var(--muted)', marginLeft: 2 }}>{suffix}</span>}
      </div>
      <div style={{ fontSize: 10, color: 'var(--muted)', marginTop: 4, letterSpacing: '.06em', textTransform: 'uppercase', fontWeight: 600 }}>{label}</div>
    </div>
  );
}

function NumberRow({ label, value, onChange, min, max, suffix, color }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 0' }}>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 11.5, color: 'var(--muted)', fontWeight: 600 }}>{label}</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
          <span className="serif tnum" style={{ fontSize: 32, lineHeight: 1, color }}>{value}</span>
          <span style={{ fontSize: 11, color: 'var(--muted)' }}>{suffix}</span>
        </div>
      </div>
      <button onClick={() => onChange(Math.max(min, value - 1))} style={{
        width: 36, height: 36, borderRadius: 999, border: '1px solid var(--border)',
        background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}><Icon name="minus" size={16} /></button>
      <button onClick={() => onChange(Math.min(max, value + 1))} style={{
        width: 36, height: 36, borderRadius: 999, border: 0,
        background: color, color: '#FFFEFB',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}><Icon name="plus" size={16} color="#FFFEFB" /></button>
    </div>
  );
}

function Legend({ color, label }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--ink-2)' }}>
      <span style={{ width: 18, height: 3, borderRadius: 999, background: color, display: 'inline-block' }} />
      <span style={{ fontWeight: 600 }}>{label}</span>
    </div>
  );
}

// Three alert variants for crisis
function AlertOverlay({ cls, onDismiss, onGoHealth, variant = 'modal' }) {
  const isCrisis = cls.key === 'crisis';
  if (variant === 'banner') {
    return (
      <div style={{ position: 'absolute', left: 12, right: 12, top: 64, zIndex: 60, animation: 'fadeUp .35s ease both' }}>
        <div style={{
          background: cls.color, color: '#FFFEFB', borderRadius: 18, padding: 16,
          boxShadow: '0 20px 50px rgba(142,42,42,.45)',
        }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <div className={isCrisis ? 'pulse-ring' : ''} style={{
              width: 36, height: 36, borderRadius: 999, background: 'rgba(255,255,255,.18)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}><Icon name="alert" size={20} color="#FFFEFB" /></div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 14, letterSpacing: '.02em' }}>{isCrisis ? '⚠️ ALERTA — Crisis hipertensiva' : 'Tensión muy alta'}</div>
              <div style={{ fontSize: 12.5, marginTop: 4, lineHeight: 1.4, opacity: .95 }}>{cls.message}</div>
              <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
                <button onClick={onGoHealth} style={{ flex: 1, background: '#FFFEFB', color: cls.color, border: 0, borderRadius: 10, padding: '9px 12px', fontSize: 12, fontWeight: 700 }}>Ver acciones</button>
                <button onClick={onDismiss} style={{ background: 'rgba(255,255,255,.18)', color: '#FFFEFB', border: 0, borderRadius: 10, padding: '9px 14px', fontSize: 12, fontWeight: 700 }}>Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === 'inline') {
    return (
      <div style={{ position: 'absolute', left: 16, right: 16, bottom: 80, zIndex: 60, animation: 'fadeUp .35s ease both' }}>
        <div style={{
          background: 'var(--surface)', borderRadius: 18, padding: 14,
          border: `2px solid ${cls.color}`,
          boxShadow: '0 20px 50px rgba(0,0,0,.18)',
        }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <div style={{ width: 36, height: 36, borderRadius: 999, background: cls.soft, color: cls.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icon name="alert" size={20} />
            </div>
            <div style={{ flex: 1, fontSize: 12.5, lineHeight: 1.4 }}>
              <strong style={{ color: cls.color }}>{cls.label}.</strong> {cls.message}
            </div>
            <button onClick={onDismiss} style={{ border: 0, background: 'transparent', color: 'var(--muted)', padding: 4 }}>✕</button>
          </div>
        </div>
      </div>
    );
  }
  // modal
  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 60,
      background: 'rgba(35,20,15,.55)',
      backdropFilter: 'blur(6px)',
      display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
      animation: 'fadeUp .25s ease both',
    }} onClick={onDismiss}>
      <div onClick={e => e.stopPropagation()} style={{
        background: 'var(--surface)', borderTopLeftRadius: 28, borderTopRightRadius: 28,
        width: '100%', padding: '20px 22px 28px',
        animation: 'fadeUp .35s ease both',
      }}>
        <div style={{ width: 44, height: 4, borderRadius: 999, background: 'var(--border)', margin: '0 auto 16px' }} />
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
          <div className={isCrisis ? 'pulse-ring' : ''} style={{
            width: 64, height: 64, borderRadius: 999, background: cls.soft,
            color: cls.color, display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Icon name="alert" size={32} />
          </div>
        </div>
        <div className="serif" style={{ fontSize: 26, textAlign: 'center', letterSpacing: '-.01em', color: cls.color }}>
          {isCrisis ? 'Crisis hipertensiva' : 'Hipertensión etapa 2'}
        </div>
        <div style={{ fontSize: 13.5, color: 'var(--ink-2)', textAlign: 'center', marginTop: 8, lineHeight: 1.5 }}>
          {cls.message}
        </div>
        {isCrisis && (
          <div style={{ background: 'var(--st-crisis-soft)', color: 'var(--st-crisis)', borderRadius: 14, padding: 12, marginTop: 14, fontSize: 12, lineHeight: 1.45 }}>
            <strong>Recomendación inmediata:</strong> siéntate, respira profundo, no manejes. Si presentas dolor en el pecho, mareo o visión borrosa, llama al <strong>911</strong>.
          </div>
        )}
        <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
          <Button variant="secondary" full onClick={onDismiss}>Después</Button>
          <Button variant={isCrisis ? 'danger' : 'primary'} full onClick={onGoHealth} icon={isCrisis ? 'alert' : 'shield'}>
            {isCrisis ? 'Llamar emergencia' : 'Ver acciones'}
          </Button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { IMCScreen, TensionScreen });
