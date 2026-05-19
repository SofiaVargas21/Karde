/* global React, Icon, Card, Button, Field, AlertBanner, DateStrip, IMCGauge, TensionIndicator, WaterRing, LineChart, BarChart, classifyIMC, classifyTension, Stepper, PlaceholderImg */
const { useState: useStateMain, useMemo: useMemoMain } = React;

// ─────────────────────────────────────────────────────────────
// DASHBOARD
// ─────────────────────────────────────────────────────────────
function DashboardScreen({ user, state, go, layout = 'cards' }) {
  const [selDate, setSelDate] = useStateMain(new Date().toDateString());
  const tCls = classifyTension(state.lastTension.sys, state.lastTension.dia);
  const iCls = classifyIMC(state.lastIMC);

  const greeting = (() => {
    const h = new Date().getHours();
    if (h < 12) return 'Buenos días';
    if (h < 19) return 'Buenas tardes';
    return 'Buenas noches';
  })();

  return (
    <div style={{ paddingBottom: 90, background: 'var(--bg)' }}>
      {/* Header */}
      <div className="curve-bottom petal-bg" style={{
        background: 'linear-gradient(180deg, var(--surface-warm) 0%, var(--bg) 100%)',
        padding: '14px 18px 20px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 12, color: 'var(--muted)', letterSpacing: '.04em' }}>{greeting}</div>
            <div className="serif" style={{ fontSize: 28, lineHeight: 1.1, marginTop: 2, letterSpacing: '-.02em' }}>
              Hola, <span style={{ color: 'var(--hibiscus)' }}>{user.nombre.split(' ')[0]}</span>
            </div>
          </div>
          <button onClick={() => go('notifications')} style={{
            width: 40, height: 40, borderRadius: 999, background: 'var(--surface)',
            border: '1px solid var(--border-soft)', position: 'relative',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Icon name="bell" size={20} />
            <span style={{ position: 'absolute', top: 8, right: 9, width: 8, height: 8, borderRadius: 999, background: 'var(--hibiscus)', boxShadow: '0 0 0 2px var(--surface)' }} />
          </button>
        </div>
        <div style={{ marginTop: 16 }}>
          <DateStrip selected={selDate} onSelect={setSelDate} onOpenCalendar={() => go('calendar')} />
        </div>
      </div>

      {/* Highlights */}
      <div style={{ padding: '16px 16px 0' }}>
        {layout === 'hero' && <HeroLayout state={state} go={go} tCls={tCls} iCls={iCls} />}
        {layout === 'cards' && <CardsLayout state={state} go={go} tCls={tCls} iCls={iCls} />}
        {layout === 'stack' && <StackLayout state={state} go={go} tCls={tCls} iCls={iCls} />}
      </div>

      {/* Today's tips */}
      <div style={{ padding: '20px 16px 0' }}>
        <SectionTitle title="Hoy" subtitle="Tu pulso diario" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Card style={{ display: 'flex', gap: 12, alignItems: 'center', padding: 14 }}>
            <div style={{ width: 44, height: 44, borderRadius: 14, background: 'var(--sage-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--sage-deep)' }}>
              <Icon name="lung" size={22} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 13.5 }}>3 minutos de respiración guiada</div>
              <div style={{ fontSize: 11.5, color: 'var(--muted)', marginTop: 2 }}>Bajan la tensión hasta 4 mmHg</div>
            </div>
            <Icon name="chevronR" size={18} color="var(--muted)" />
          </Card>
          <Card style={{ display: 'flex', gap: 12, alignItems: 'center', padding: 14 }} onClick={() => go('health')}>
            <div style={{ width: 44, height: 44, borderRadius: 14, background: 'var(--hibiscus-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--hibiscus)' }}>
              <Icon name="leaf" size={22} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 13.5 }}>Tip cardiovascular</div>
              <div style={{ fontSize: 11.5, color: 'var(--muted)', marginTop: 2 }}>El hibisco (jamaica) es rico en antioxidantes</div>
            </div>
            <Icon name="chevronR" size={18} color="var(--muted)" />
          </Card>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ title, subtitle, action }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 12 }}>
      <div>
        <div style={{ fontSize: 10.5, color: 'var(--muted)', letterSpacing: '.14em', fontWeight: 700, textTransform: 'uppercase' }}>{subtitle}</div>
        <div className="serif" style={{ fontSize: 22, letterSpacing: '-.01em', marginTop: 2 }}>{title}</div>
      </div>
      {action}
    </div>
  );
}

// Layout A — hero tension + small cards
function HeroLayout({ state, go, tCls, iCls }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div onClick={() => go('tension')} className="tap" style={{
        background: 'var(--surface)', borderRadius: 22, padding: 18,
        border: '1px solid var(--border-soft)',
        boxShadow: '0 8px 24px rgba(110,70,40,.08)',
        position: 'relative', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', right: -30, top: -30, width: 140, height: 140, borderRadius: 999, background: `radial-gradient(circle, ${state.lastTension.sys >= 140 ? 'var(--st-htn1-soft)' : 'var(--hibiscus-tint)'} 0%, transparent 70%)` }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'var(--muted)', fontWeight: 600 }}>
            <Icon name="heart" size={14} color="var(--hibiscus)" /> TENSIÓN ARTERIAL
          </div>
          <Icon name="chevronR" size={18} color="var(--muted)" />
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 10 }}>
          <span className="serif tnum" style={{ fontSize: 62, lineHeight: 1, letterSpacing: '-.02em' }}>{state.lastTension.sys}</span>
          <span style={{ fontSize: 22, color: 'var(--muted-2)' }}>/</span>
          <span className="serif tnum" style={{ fontSize: 36, lineHeight: 1, color: 'var(--ink-2)' }}>{state.lastTension.dia}</span>
          <span style={{ fontSize: 11, color: 'var(--muted)', marginLeft: 4 }}>mmHg</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8 }}>
          <span style={{
            display: 'inline-flex', padding: '3px 10px', borderRadius: 999,
            background: tCls.soft, color: tCls.color,
            fontSize: 11, fontWeight: 700, letterSpacing: '.04em'
          }}>{tCls.label}</span>
          <span style={{ fontSize: 11, color: 'var(--muted)' }}>hace 2h · pulso {state.lastTension.pulse}</span>
        </div>
        <div style={{ marginTop: 14 }}>
          <TensionIndicator sys={state.lastTension.sys} dia={state.lastTension.dia} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <MiniCard
          onClick={() => go('imc')}
          icon="scale" tint="var(--sage-soft)" iconColor="var(--sage-deep)"
          label="IMC"
          value={state.lastIMC.toFixed(1)}
          pillLabel={iCls.label} pillColor={iCls.color} pillBg={iCls.soft}
        />
        <MiniCard
          onClick={() => go('water')}
          icon="drop" tint="#D5E8F0" iconColor="#2F5C70"
          label="AGUA HOY"
          value={state.water.value}
          suffix={`/${state.water.goal}`}
          extra={<ProgressBar value={state.water.value/state.water.goal} color="#2F5C70" />}
        />
      </div>
    </div>
  );
}

// Layout B — equal cards grid
function CardsLayout({ state, go, tCls, iCls }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
      <BigCard onClick={() => go('imc')} style={{ gridColumn: 'span 2' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, color: 'var(--muted)', fontWeight: 700, letterSpacing: '.1em' }}>
            <Icon name="heart" size={14} color="var(--hibiscus)" /> TENSIÓN ARTERIAL
          </div>
          <Icon name="chevronR" size={18} color="var(--muted)" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginTop: 12 }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
              <span className="serif tnum" style={{ fontSize: 54, lineHeight: 1 }}>{state.lastTension.sys}</span>
              <span style={{ fontSize: 20, color: 'var(--muted-2)' }}>/</span>
              <span className="serif tnum" style={{ fontSize: 30, lineHeight: 1, color: 'var(--ink-2)' }}>{state.lastTension.dia}</span>
            </div>
            <div style={{ marginTop: 6, fontSize: 11, color: 'var(--muted)' }}>mmHg · pulso {state.lastTension.pulse} bpm</div>
            <div style={{ marginTop: 8 }}>
              <span style={{ padding: '3px 10px', borderRadius: 999, background: tCls.soft, color: tCls.color, fontSize: 11, fontWeight: 700 }}>{tCls.label}</span>
            </div>
          </div>
          <MiniSpark data={state.history.sys.slice(-7)} color="var(--hibiscus)" />
        </div>
      </BigCard>

      <BigCard onClick={() => go('imc')}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: 'var(--muted)', fontWeight: 700, letterSpacing: '.1em' }}>
          <Icon name="scale" size={13} color="var(--sage-deep)" /> IMC
        </div>
        <div className="serif tnum" style={{ fontSize: 44, lineHeight: 1, marginTop: 8 }}>{state.lastIMC.toFixed(1)}</div>
        <div style={{ marginTop: 6 }}>
          <span style={{ padding: '2px 8px', borderRadius: 999, background: iCls.soft, color: iCls.color, fontSize: 10.5, fontWeight: 700 }}>{iCls.label}</span>
        </div>
      </BigCard>

      <BigCard onClick={() => go('water')}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: 'var(--muted)', fontWeight: 700, letterSpacing: '.1em' }}>
          <Icon name="drop" size={13} color="#2F5C70" /> AGUA HOY
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 8 }}>
          <span className="serif tnum" style={{ fontSize: 44, lineHeight: 1 }}>{state.water.value}</span>
          <span style={{ fontSize: 16, color: 'var(--muted)' }}>/{state.water.goal}</span>
        </div>
        <div style={{ marginTop: 8 }}><ProgressBar value={state.water.value/state.water.goal} color="#2F5C70" /></div>
      </BigCard>
    </div>
  );
}

// Layout C — stack with full bleed
function StackLayout({ state, go, tCls, iCls }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <StackRow onClick={() => go('tension')} tint="var(--hibiscus-tint)" color="var(--hibiscus)" icon="heart" label="Tensión arterial" status={tCls.label} statusColor={tCls.color}>
        <span className="serif tnum" style={{ fontSize: 32 }}>{state.lastTension.sys}<span style={{ color: 'var(--muted-2)', fontSize: 18 }}>/</span>{state.lastTension.dia}</span>
      </StackRow>
      <StackRow onClick={() => go('imc')} tint="var(--sage-soft)" color="var(--sage-deep)" icon="scale" label="IMC" status={iCls.label} statusColor={iCls.color}>
        <span className="serif tnum" style={{ fontSize: 32 }}>{state.lastIMC.toFixed(1)}</span>
      </StackRow>
      <StackRow onClick={() => go('water')} tint="#D5E8F0" color="#2F5C70" icon="drop" label="Agua hoy" status={`${Math.round(state.water.value/state.water.goal*100)}%`} statusColor="#2F5C70">
        <span className="serif tnum" style={{ fontSize: 32 }}>{state.water.value}<span style={{ color: 'var(--muted-2)', fontSize: 18 }}>/{state.water.goal}</span></span>
      </StackRow>
    </div>
  );
}

function StackRow({ onClick, tint, color, icon, label, status, statusColor, children }) {
  return (
    <div className="tap" onClick={onClick} style={{
      background: 'var(--surface)', borderRadius: 18, padding: '14px 16px',
      border: '1px solid var(--border-soft)',
      display: 'flex', alignItems: 'center', gap: 14,
    }}>
      <div style={{ width: 50, height: 50, borderRadius: 16, background: tint, display: 'flex', alignItems: 'center', justifyContent: 'center', color }}>
        <Icon name={icon} size={22} />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 11.5, color: 'var(--muted)', fontWeight: 600, letterSpacing: '.04em' }}>{label}</div>
        <div style={{ marginTop: 2 }}>{children}</div>
      </div>
      <div style={{ textAlign: 'right' }}>
        <span style={{ padding: '3px 10px', borderRadius: 999, background: 'var(--surface-2)', color: statusColor, fontSize: 11, fontWeight: 700 }}>{status}</span>
      </div>
    </div>
  );
}

function MiniCard({ onClick, icon, tint, iconColor, label, value, suffix, extra, pillLabel, pillColor, pillBg }) {
  return (
    <div className="tap" onClick={onClick} style={{
      background: 'var(--surface)', borderRadius: 22, padding: 16,
      border: '1px solid var(--border-soft)',
      boxShadow: '0 6px 16px rgba(110,70,40,.06)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: 32, height: 32, borderRadius: 10, background: tint, display: 'flex', alignItems: 'center', justifyContent: 'center', color: iconColor }}>
          <Icon name={icon} size={16} />
        </div>
        <Icon name="chevronR" size={14} color="var(--muted)" />
      </div>
      <div style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 700, letterSpacing: '.08em', marginTop: 10 }}>{label}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 4 }}>
        <span className="serif tnum" style={{ fontSize: 30, lineHeight: 1 }}>{value}</span>
        {suffix && <span style={{ fontSize: 13, color: 'var(--muted)' }}>{suffix}</span>}
      </div>
      {pillLabel && (
        <div style={{ marginTop: 6 }}>
          <span style={{ padding: '2px 8px', borderRadius: 999, background: pillBg, color: pillColor, fontSize: 10.5, fontWeight: 700 }}>{pillLabel}</span>
        </div>
      )}
      {extra && <div style={{ marginTop: 8 }}>{extra}</div>}
    </div>
  );
}

function BigCard({ children, onClick, style }) {
  return (
    <div className="tap" onClick={onClick} style={{
      background: 'var(--surface)', borderRadius: 20, padding: 16,
      border: '1px solid var(--border-soft)',
      boxShadow: '0 6px 16px rgba(110,70,40,.06)',
      ...style,
    }}>{children}</div>
  );
}

function ProgressBar({ value = 0, color = 'var(--hibiscus)' }) {
  return (
    <div style={{ height: 6, borderRadius: 999, background: 'var(--bg-deep)', overflow: 'hidden' }}>
      <div style={{ height: '100%', width: `${Math.min(100, value * 100)}%`, background: color, borderRadius: 999, transition: 'width .35s' }} />
    </div>
  );
}

function MiniSpark({ data, color }) {
  if (!data || data.length === 0) return null;
  const w = 90, h = 50;
  const mn = Math.min(...data), mx = Math.max(...data);
  const range = Math.max(1, mx - mn);
  const path = data.map((v, i) => {
    const x = (i / (data.length - 1)) * (w - 4) + 2;
    const y = h - 4 - ((v - mn) / range) * (h - 8);
    return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(' ');
  return (
    <svg width={w} height={h}>
      <path d={path + ` L ${w-2} ${h} L 2 ${h} Z`} fill={color} fillOpacity="0.1" />
      <path d={path} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

Object.assign(window, { DashboardScreen, MiniSpark, SectionTitle, ProgressBar });
