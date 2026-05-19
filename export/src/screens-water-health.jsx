/* global React, Icon, Card, Button, AlertBanner, WaterRing, BarChart, LineChart, classifyIMC, classifyTension, SubHeader, SectionTitle, ProgressBar, PlaceholderImg, Stepper */
const { useState: useStateM3 } = React;

// ─────────────────────────────────────────────────────────────
// WATER + JAMAICA SCREEN
// ─────────────────────────────────────────────────────────────
function WaterScreen({ state, setWater, addJamaica, go }) {
  const w = state.water;
  const j = state.jamaica;
  const pct = Math.min(100, Math.round((w.value / w.goal) * 100));

  return (
    <div style={{ paddingBottom: 90, background: 'var(--bg)' }}>
      <SubHeader title="Hidratación" onBack={() => go('home')} />

      <div style={{ padding: '6px 16px 0' }}>
        {/* Ring card */}
        <Card style={{ padding: 22, textAlign: 'center', background: 'linear-gradient(180deg, #EAF2F6 0%, var(--surface) 60%)' }} accent="#2F5C70">
          <div style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '.16em', fontWeight: 700 }}>AGUA — HOY</div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14 }}>
            <WaterRing value={w.value} goal={w.goal} size={200} accent="#2F5C70" />
          </div>
          <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 6 }}>
            {pct >= 100 ? '¡Meta alcanzada! 🎉' : `Faltan ${w.goal - w.value} vasos · ~${((w.goal - w.value) * 0.25).toFixed(1)} L`}
          </div>
          <div style={{ marginTop: 18 }}>
            <Stepper value={w.value} onChange={v => setWater({ ...w, value: v })} min={0} max={20} label="vasos de 250 ml" />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 14, flexWrap: 'wrap' }}>
            {Array.from({ length: w.goal }).map((_, i) => (
              <div key={i} style={{
                width: 22, height: 28, borderRadius: '4px 4px 12px 12px',
                background: i < w.value ? '#2F5C70' : 'var(--bg-deep)',
                border: '1px solid rgba(0,0,0,.06)',
                boxShadow: i < w.value ? 'inset 0 2px 4px rgba(255,255,255,.25)' : 'none',
              }} />
            ))}
          </div>
        </Card>

        {/* Reminders */}
        <div style={{ marginTop: 20 }}>
          <SectionTitle subtitle="Recordatorios" title="Frecuencia" />
          <Card style={{ padding: 14 }}>
            <div style={{ display: 'flex', gap: 8 }}>
              {[
                { k: '1h', l: 'Cada 1 h' },
                { k: '2h', l: 'Cada 2 h' },
                { k: '3h', l: 'Cada 3 h' },
              ].map(o => {
                const on = w.reminder === o.k;
                return (
                  <button key={o.k} onClick={() => setWater({ ...w, reminder: o.k })} style={{
                    flex: 1, padding: '12px 6px', border: on ? '1px solid var(--sage)' : '1px solid var(--border)',
                    background: on ? 'var(--sage-soft)' : 'var(--surface-2)', borderRadius: 12,
                    fontWeight: 600, fontSize: 12.5, color: on ? 'var(--sage-deep)' : 'var(--ink-2)',
                  }}>{o.l}</button>
                );
              })}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 10, fontSize: 12, color: 'var(--muted)' }}>
              <Icon name="bell" size={14} /> Próximo recordatorio en 47 min
            </div>
          </Card>
        </div>

        {/* Jamaica */}
        <div style={{ marginTop: 20 }}>
          <SectionTitle subtitle="Infusión natural" title="Agua de jamaica" action={
            <span style={{ fontSize: 10.5, color: 'var(--hibiscus)', letterSpacing: '.08em', fontWeight: 700 }}>OPCIONAL</span>
          } />
          <Card style={{ padding: 16, background: 'linear-gradient(135deg, var(--hibiscus-tint) 0%, var(--surface) 70%)' }}>
            <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--hibiscus)' }}>
                <Icon name="leaf" size={28} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 14 }}>{j} tazas hoy</div>
                <div style={{ fontSize: 11.5, color: 'var(--muted)', marginTop: 2 }}>Rica en antioxidantes</div>
              </div>
              <button onClick={() => addJamaica(j + 1)} style={{
                border: 0, background: 'var(--hibiscus)', color: '#FFFEFB',
                width: 40, height: 40, borderRadius: 999,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 6px 14px rgba(155,45,63,.3)'
              }}><Icon name="plus" size={18} color="#FFFEFB" /></button>
            </div>
          </Card>
        </div>

        {/* Weekly chart */}
        <div style={{ marginTop: 20 }}>
          <SectionTitle subtitle="Esta semana" title="Tu consumo diario" />
          <Card>
            <BarChart data={state.history.water} labels={['L','M','M','J','V','S','D']} width={320} height={130} color="#2F5C70" goal={8} />
            <div style={{ display: 'flex', gap: 12, fontSize: 11, color: 'var(--muted)', marginTop: 6 }}>
              <span><span style={{ display: 'inline-block', width: 10, height: 3, background: '#C76E4A', verticalAlign: 'middle', marginRight: 4 }} />Meta 8 vasos</span>
              <span style={{ marginLeft: 'auto' }}>Promedio: {(state.history.water.reduce((a,b)=>a+b,0) / state.history.water.length).toFixed(1)} vasos</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// HEALTH RECOMMENDATIONS SCREEN
// ─────────────────────────────────────────────────────────────
function HealthScreen({ state, go }) {
  const tCls = classifyTension(state.lastTension.sys, state.lastTension.dia);
  const iCls = classifyIMC(state.lastIMC);
  const severity = tCls.key === 'crisis' || tCls.key === 'htn2' ? 'high'
    : (tCls.key === 'htn1' || tCls.key === 'elev') ? 'mid' : 'low';

  return (
    <div style={{ paddingBottom: 90, background: 'var(--bg)' }}>
      <SubHeader title="Salud" onBack={() => go('home')} />

      <div style={{ padding: '6px 16px 0' }}>
        {/* Summary */}
        <Card style={{ background: severity === 'high' ? 'var(--st-htn1-soft)' : 'var(--sage-soft)', border: `1px solid ${severity === 'high' ? 'var(--st-htn1)' : 'var(--sage)'}33` }} accent={severity === 'high' ? 'var(--st-htn1)' : 'var(--sage)'}>
          <div style={{ fontSize: 10.5, letterSpacing: '.14em', fontWeight: 700, color: 'var(--muted)' }}>TU ESTADO ACTUAL</div>
          <div className="serif" style={{ fontSize: 24, marginTop: 4, letterSpacing: '-.01em' }}>
            {severity === 'high' && 'Necesitas tomar acción'}
            {severity === 'mid' && 'Mantén la vigilancia'}
            {severity === 'low' && 'Excelente, sigue así'}
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
            <Pill label={`Tensión: ${tCls.label}`} color={tCls.color} bg={tCls.soft} />
            <Pill label={`IMC: ${iCls.label}`} color={iCls.color} bg={iCls.soft} />
          </div>
        </Card>

        {/* High severity */}
        {severity === 'high' && (
          <>
            <SectionPad>
              <SectionTitle subtitle="Prioridad" title="Consulta a tu médico" />
              <Card style={{ borderColor: 'var(--st-crisis)' }} accent="var(--st-crisis)">
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: 'var(--st-crisis-soft)', color: 'var(--st-crisis)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon name="alert" size={20} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>Bandera roja</div>
                    <div style={{ fontSize: 12.5, color: 'var(--ink-2)', marginTop: 4, lineHeight: 1.5 }}>
                      Tu tensión está en niveles que requieren atención médica. La jamaica puede ser un complemento, pero no sustituye tu tratamiento.
                    </div>
                    <Button size="sm" variant="danger" style={{ marginTop: 10 }}>Llamar a mi médico</Button>
                  </div>
                </div>
              </Card>
            </SectionPad>

            <SectionPad>
              <SectionTitle subtitle="Acción inmediata" title="Respiración 4-7-8" />
              <BreathingCard />
            </SectionPad>
          </>
        )}

        {/* Hibiscus (only mid/low — subtle on low) */}
        {severity === 'mid' && (
          <SectionPad>
            <SectionTitle subtitle="Recomendación destacada" title="Hibisco (jamaica)" />
            <JamaicaCard featured />
          </SectionPad>
        )}

        {/* Exercise */}
        <SectionPad>
          <SectionTitle subtitle={severity === 'high' ? 'Después de estabilizar' : 'Movimiento'} title="Ejercicio recomendado" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <ExerciseCard
              title="Caminar suave"
              minutes={30}
              tag="Cardio ligero"
              tint="var(--sage-soft)"
              icon="play"
            />
            <ExerciseCard
              title="Nadar"
              minutes={20}
              tag="Bajo impacto"
              tint="#D5E8F0"
              icon="play"
            />
            <ExerciseCard
              title="Yoga restaurativo"
              minutes={15}
              tag="Reduce estrés"
              tint="var(--hibiscus-tint)"
              icon="play"
            />
            <ExerciseCard
              title="Respiración"
              minutes={5}
              tag="Calma"
              tint="#EBE3D5"
              icon="lung"
            />
          </div>
        </SectionPad>

        {/* Nutrition */}
        <SectionPad>
          <SectionTitle subtitle="Alimentación" title="Plan bajo en sodio" />
          <Card style={{ padding: 0, overflow: 'hidden' }}>
            {[
              { ok: true, t: 'Frutas frescas y verduras de hoja verde', s: 'Ricas en potasio' },
              { ok: true, t: 'Granos integrales y legumbres', s: 'Fibra y proteína vegetal' },
              { ok: true, t: 'Pescados grasos (2x/semana)', s: 'Omega-3' },
              { ok: false, t: 'Embutidos y enlatados', s: 'Alto sodio' },
              { ok: false, t: 'Bebidas azucaradas', s: 'Picos de presión' },
            ].map((row, i, arr) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px',
                borderBottom: i < arr.length - 1 ? '1px solid var(--border-soft)' : 'none',
              }}>
                <div style={{
                  width: 26, height: 26, borderRadius: 999,
                  background: row.ok ? 'var(--st-normal-soft)' : 'var(--st-htn1-soft)',
                  color: row.ok ? 'var(--st-normal)' : 'var(--st-htn1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}><Icon name={row.ok ? 'check' : 'minus'} size={14} /></div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 13 }}>{row.t}</div>
                  <div style={{ fontSize: 11, color: 'var(--muted)' }}>{row.s}</div>
                </div>
              </div>
            ))}
          </Card>
        </SectionPad>

        {/* Hibiscus (low — subtle at end) */}
        {severity === 'low' && (
          <SectionPad>
            <SectionTitle subtitle="Tip natural" title="Una infusión para tu rutina" />
            <JamaicaCard />
          </SectionPad>
        )}

        {/* Routine */}
        <SectionPad>
          <SectionTitle subtitle="Mañana" title="Tu rutina sugerida" />
          <Card style={{ padding: 0 }}>
            {[
              { h: '07:00', t: '1 vaso de agua tibia con limón' },
              { h: '07:30', t: '20 min de caminata suave' },
              { h: '08:15', t: 'Desayuno alto en fibra' },
              { h: '15:00', t: 'Taza de agua de jamaica' },
              { h: '21:30', t: 'Respiración 4-7-8 (5 min)' },
            ].map((r, i, arr) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px',
                borderBottom: i < arr.length - 1 ? '1px solid var(--border-soft)' : 'none',
              }}>
                <div className="serif tnum" style={{ fontSize: 18, color: 'var(--hibiscus)', minWidth: 50 }}>{r.h}</div>
                <div style={{ flex: 1, fontSize: 13.5 }}>{r.t}</div>
                <Icon name="check" size={16} color="var(--muted-2)" />
              </div>
            ))}
          </Card>
        </SectionPad>
      </div>
    </div>
  );
}

function Pill({ label, color, bg }) {
  return <span style={{ padding: '4px 10px', borderRadius: 999, background: bg, color, fontSize: 11, fontWeight: 700, letterSpacing: '.02em' }}>{label}</span>;
}

function SectionPad({ children }) { return <div style={{ marginTop: 22 }}>{children}</div>; }

function JamaicaCard({ featured }) {
  return (
    <Card style={{
      padding: 0, overflow: 'hidden',
      background: featured ? 'linear-gradient(135deg, var(--hibiscus-tint) 0%, var(--surface) 70%)' : 'var(--surface)',
      border: featured ? '1px solid var(--hibiscus)33' : '1px solid var(--border-soft)',
    }}>
      <div style={{ padding: 16, display: 'flex', gap: 14 }}>
        <div style={{
          width: 70, height: 70, borderRadius: 18,
          background: 'radial-gradient(circle at 30% 30%, #C03A4D 0%, #6E1F2C 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#FFFEFB', flexShrink: 0,
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,.2), 0 6px 16px rgba(155,45,63,.25)',
        }}>
          <Icon name="leaf" size={32} color="#FFFEFB" />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 15 }}>Hibisco (jamaica) 🌺</div>
          <div style={{ fontSize: 12, color: 'var(--ink-2)', marginTop: 4, lineHeight: 1.5 }}>
            Estudios sugieren que el consumo regular de hibisco puede contribuir a reducir la presión arterial de forma natural.
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid var(--border-soft)', padding: 12, display: 'flex', gap: 8, fontSize: 11 }}>
        <span style={{ padding: '4px 10px', background: 'var(--surface-warm)', borderRadius: 999, fontWeight: 600 }}>2-3 tazas/día</span>
        <span style={{ padding: '4px 10px', background: 'var(--surface-warm)', borderRadius: 999, fontWeight: 600 }}>Sin azúcar</span>
        <span style={{ padding: '4px 10px', background: 'var(--surface-warm)', borderRadius: 999, fontWeight: 600 }}>Antioxidantes</span>
      </div>
      <div style={{ padding: '10px 14px', background: 'var(--surface-warm)', fontSize: 10.5, color: 'var(--muted)', lineHeight: 1.4 }}>
        <Icon name="info" size={11} /> McKay et al. (2010), <em>Journal of Nutrition</em>: el té de hibisco redujo la sistólica ~7.2 mmHg en pre-hipertensión.
      </div>
    </Card>
  );
}

function ExerciseCard({ title, minutes, tag, tint, icon }) {
  return (
    <Card style={{ padding: 14 }}>
      <div style={{
        height: 80, borderRadius: 12, background: tint,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 10, position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          backgroundImage: `repeating-linear-gradient(135deg, rgba(255,255,255,.35) 0 8px, transparent 8px 16px)`,
          position: 'absolute', inset: 0,
        }} />
        <div style={{
          width: 36, height: 36, borderRadius: 999,
          background: 'rgba(255,254,251,.85)', position: 'relative',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--ink)',
        }}><Icon name={icon} size={16} /></div>
      </div>
      <div style={{ fontWeight: 700, fontSize: 13.5 }}>{title}</div>
      <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 2 }}>{minutes} min · {tag}</div>
    </Card>
  );
}

function BreathingCard() {
  const [running, setRunning] = useStateM3(false);
  return (
    <Card style={{ padding: 18, textAlign: 'center', background: 'linear-gradient(180deg, var(--sage-soft) 0%, var(--surface) 70%)' }} accent="var(--sage)">
      <div style={{ display: 'flex', justifyContent: 'center', margin: '4px 0 12px' }}>
        <div style={{
          width: 120, height: 120, borderRadius: 999, background: 'var(--surface)',
          border: '4px solid var(--sage)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--sage-deep)',
          animation: running ? 'pulse-ring 4s ease-in-out infinite' : 'none',
          transform: running ? 'scale(1.04)' : 'scale(1)',
          transition: 'transform 1.5s ease',
        }}>
          <div style={{ textAlign: 'center' }}>
            <div className="serif" style={{ fontSize: 26, lineHeight: 1 }}>{running ? 'Inhala' : '4·7·8'}</div>
            <div style={{ fontSize: 10, color: 'var(--muted)', marginTop: 4, letterSpacing: '.1em' }}>{running ? '4 segundos' : 'TÉCNICA'}</div>
          </div>
        </div>
      </div>
      <div style={{ fontSize: 12.5, color: 'var(--ink-2)', marginBottom: 12, lineHeight: 1.45 }}>
        Inhala 4s, retén 7s, exhala 8s. Reduce la frecuencia cardíaca en minutos.
      </div>
      <Button variant="sage" full size="md" icon={running ? 'check' : 'play'} onClick={() => setRunning(!running)}>
        {running ? 'Detener' : 'Empezar 5 minutos'}
      </Button>
    </Card>
  );
}

Object.assign(window, { WaterScreen, HealthScreen });
