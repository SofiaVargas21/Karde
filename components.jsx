/* global React */
const { useState, useEffect, useMemo, useRef } = React;

// ─────────────────────────────────────────────────────────────
// Icons (line-style, original)
// ─────────────────────────────────────────────────────────────
const Icon = ({ name, size = 22, stroke = 1.6, color = 'currentColor' }) => {
  const props = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: stroke, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'home': return <svg {...props}><path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v10h14V10"/><path d="M10 20v-5h4v5"/></svg>;
    case 'history': return <svg {...props}><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/><path d="M12 7v5l3 2"/></svg>;
    case 'shield': return <svg {...props}><path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></svg>;
    case 'user': return <svg {...props}><circle cx="12" cy="8" r="4"/><path d="M3.5 20.5c1.5-3.5 5-5.5 8.5-5.5s7 2 8.5 5.5"/></svg>;
    case 'heart': return <svg {...props}><path d="M12 20s-7-4.5-9.2-9.2C1.4 7.7 3.8 4.5 7 4.8c2 .2 3.4 1.4 5 3.2 1.6-1.8 3-3 5-3.2 3.2-.3 5.6 2.9 4.2 6C19 15.5 12 20 12 20Z"/></svg>;
    case 'pulse': return <svg {...props}><path d="M3 12h4l2-5 3 10 2-7 2 4h5"/></svg>;
    case 'drop': return <svg {...props}><path d="M12 3s7 7.5 7 12a7 7 0 0 1-14 0c0-4.5 7-12 7-12Z"/></svg>;
    case 'scale': return <svg {...props}><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M9 11h6"/><path d="M12 11v4"/></svg>;
    case 'calendar': return <svg {...props}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></svg>;
    case 'chevronR': return <svg {...props}><path d="m9 6 6 6-6 6"/></svg>;
    case 'chevronL': return <svg {...props}><path d="m15 6-6 6 6 6"/></svg>;
    case 'chevronD': return <svg {...props}><path d="m6 9 6 6 6-6"/></svg>;
    case 'plus': return <svg {...props}><path d="M12 5v14M5 12h14"/></svg>;
    case 'minus': return <svg {...props}><path d="M5 12h14"/></svg>;
    case 'bell': return <svg {...props}><path d="M6 8a6 6 0 1 1 12 0c0 7 3 7 3 9H3c0-2 3-2 3-9Z"/><path d="M10 21a2 2 0 0 0 4 0"/></svg>;
    case 'check': return <svg {...props}><path d="m5 12 4 4 10-10"/></svg>;
    case 'alert': return <svg {...props}><path d="M12 3 2 21h20L12 3Z"/><path d="M12 10v5M12 18v.5"/></svg>;
    case 'info': return <svg {...props}><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8v.5"/></svg>;
    case 'leaf': return <svg {...props}><path d="M20 4c-9 0-15 6-15 13 0 1 .2 2 .5 3 7 0 13-6 13-15 .7-.3 1-.5 1.5-1Z"/><path d="M6 20c1-5 4-9 9-12"/></svg>;
    case 'flame': return <svg {...props}><path d="M12 3c0 4-4 5-4 9a4 4 0 0 0 8 0c0-2-1-3-1-5 2 1 3 3 3 5a6 6 0 0 1-12 0c0-5 6-6 6-9Z"/></svg>;
    case 'settings': return <svg {...props}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/></svg>;
    case 'logout': return <svg {...props}><path d="M15 4h4v16h-4"/><path d="M10 8l-4 4 4 4"/><path d="M6 12h12"/></svg>;
    case 'arrowL': return <svg {...props}><path d="M19 12H5M11 6l-6 6 6 6"/></svg>;
    case 'edit': return <svg {...props}><path d="M4 20h4l10-10-4-4L4 16v4Z"/><path d="m13 7 4 4"/></svg>;
    case 'eye': return <svg {...props}><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>;
    case 'lock': return <svg {...props}><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 1 1 8 0v3"/></svg>;
    case 'mail': return <svg {...props}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 7 9-7"/></svg>;
    case 'sparkle': return <svg {...props}><path d="M12 3v6M12 15v6M3 12h6M15 12h6"/><path d="m6 6 3 3M15 15l3 3M6 18l3-3M15 9l3-3"/></svg>;
    case 'play': return <svg {...props}><path d="M6 4v16l14-8L6 4Z"/></svg>;
    case 'lung': return <svg {...props}><path d="M12 3v10"/><path d="M9 6c-3 2-5 6-5 11 0 2 2 4 4 4s3-2 3-4V8c0-1-1-2-2-2Z"/><path d="M15 6c3 2 5 6 5 11 0 2-2 4-4 4s-3-2-3-4V8c0-1 1-2 2-2Z"/></svg>;
    default: return <svg {...props}><circle cx="12" cy="12" r="9"/></svg>;
  }
};

// ─────────────────────────────────────────────────────────────
// IMC classification + tension classification
// ─────────────────────────────────────────────────────────────
const classifyIMC = (imc) => {
  if (imc < 18.5) return { key: 'low', label: 'Bajo peso', color: 'var(--st-elevated)', soft: 'var(--st-elevated-soft)', tip: 'Tu IMC está por debajo del rango saludable. Considera mejorar tu alimentación.' };
  if (imc < 25) return { key: 'normal', label: 'Normal', color: 'var(--st-normal)', soft: 'var(--st-normal-soft)', tip: 'Estás en el rango saludable. ¡Mantén tus hábitos!' };
  if (imc < 30) return { key: 'over', label: 'Sobrepeso', color: 'var(--st-elevated)', soft: 'var(--st-elevated-soft)', tip: 'Hay margen para ajustar la alimentación y aumentar actividad.' };
  if (imc < 35) return { key: 'ob1', label: 'Obesidad I', color: 'var(--st-htn1)', soft: 'var(--st-htn1-soft)', tip: 'Te recomendamos un plan combinado de alimentación y ejercicio.' };
  return { key: 'ob2', label: 'Obesidad II+', color: 'var(--st-crisis)', soft: 'var(--st-crisis-soft)', tip: 'Consulta con un profesional para un plan personalizado.' };
};

const classifyTension = (sys, dia) => {
  if (sys > 180 || dia > 120) return { key: 'crisis', label: 'Crisis hipertensiva', short: 'CRISIS', color: 'var(--st-crisis)', soft: 'var(--st-crisis-soft)', emoji: '⚠️', message: 'Tu tensión está en niveles de crisis. Consulta a un médico de inmediato.' };
  if (sys >= 140 || dia >= 90) return { key: 'htn2', label: 'Hipertensión etapa 2', short: 'HTN-2', color: 'var(--st-htn2)', soft: 'var(--st-htn2-soft)', emoji: '🟠', message: 'Tu tensión está alta. Toma tus medicamentos y descansa.' };
  if (sys >= 130 || dia >= 80) return { key: 'htn1', label: 'Hipertensión etapa 1', short: 'HTN-1', color: 'var(--st-htn1)', soft: 'var(--st-htn1-soft)', emoji: '🟡', message: 'Mantén seguimiento; ajusta alimentación y reduce sodio.' };
  if (sys >= 120) return { key: 'elev', label: 'Elevada', short: 'ELEV', color: 'var(--st-elevated)', soft: 'var(--st-elevated-soft)', emoji: '🟢', message: 'Vigila tus mediciones y reduce el estrés.' };
  return { key: 'normal', label: 'Normal', short: 'NORMAL', color: 'var(--st-normal)', soft: 'var(--st-normal-soft)', emoji: '✅', message: 'Tu tensión está en rango óptimo.' };
};

// ─────────────────────────────────────────────────────────────
// Gauge — IMC (3 variations)
// ─────────────────────────────────────────────────────────────
function IMCGauge({ value = 24, variant = 'arc', size = 260 }) {
  const cls = classifyIMC(value);
  // Map value 12 → 40 to 0..1
  const min = 12, max = 40;
  const t = Math.max(0, Math.min(1, (value - min) / (max - min)));

  if (variant === 'arc') {
    return <IMCArcGauge value={value} t={t} cls={cls} size={size} />;
  }
  if (variant === 'bar') {
    return <IMCBarGauge value={value} t={t} cls={cls} />;
  }
  if (variant === 'ring') {
    return <IMCRingGauge value={value} t={t} cls={cls} size={size} />;
  }
  return null;
}

function IMCArcGauge({ value, t, cls, size = 260 }) {
  // Semicircle gauge. Angle range: 180° (left) to 0° (right).
  const r = size / 2 - 16;
  const cx = size / 2, cy = size / 2 + 6;
  const polar = (angDeg, rad) => {
    const a = (Math.PI * angDeg) / 180;
    return [cx + rad * Math.cos(a), cy - rad * Math.sin(a)];
  };
  // Segments by IMC ranges, mapped to angle 180..0
  const segs = [
    { from: 12, to: 18.5, color: '#C99A3E' },
    { from: 18.5, to: 25, color: '#4F7A5A' },
    { from: 25, to: 30, color: '#D9B25A' },
    { from: 30, to: 35, color: '#C76E4A' },
    { from: 35, to: 40, color: '#8E2A2A' },
  ];
  const valToAng = (v) => 180 - ((v - 12) / 28) * 180;

  const arcPath = (a1, a2, rad) => {
    const [x1, y1] = polar(a1, rad);
    const [x2, y2] = polar(a2, rad);
    const large = Math.abs(a1 - a2) > 180 ? 1 : 0;
    return `M ${x1} ${y1} A ${rad} ${rad} 0 ${large} 1 ${x2} ${y2}`;
  };

  // Needle
  const angle = valToAng(Math.max(12, Math.min(40, value)));
  const [nx, ny] = polar(angle, r - 18);

  return (
    <div style={{ width: size, position: 'relative' }}>
      <svg width={size} height={size / 2 + 32} viewBox={`0 0 ${size} ${size / 2 + 32}`}>
        {/* Track */}
        <path d={arcPath(180, 0, r)} stroke="#EFE3CF" strokeWidth="22" fill="none" strokeLinecap="round" />
        {/* Colored segments */}
        {segs.map((s, i) => {
          const a1 = valToAng(s.from);
          const a2 = valToAng(s.to);
          return <path key={i} d={arcPath(a1, a2, r)} stroke={s.color} strokeWidth="22" fill="none" strokeLinecap="butt" opacity="0.85" />;
        })}
        {/* Tick marks */}
        {[18.5, 25, 30, 35].map((v, i) => {
          const a = valToAng(v);
          const [x1, y1] = polar(a, r - 14);
          const [x2, y2] = polar(a, r + 14);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#FFFEFB" strokeWidth="2" />;
        })}
        {/* Number labels */}
        {[18.5, 25, 30, 35].map((v, i) => {
          const a = valToAng(v);
          const [x, y] = polar(a, r + 26);
          return (
            <text key={i} x={x} y={y} fontFamily="Manrope" fontSize="10" fill="#8A7969" textAnchor="middle" dominantBaseline="middle">{v}</text>
          );
        })}
        {/* Needle */}
        <line x1={cx} y1={cy} x2={nx} y2={ny} stroke="#2A1F1A" strokeWidth="3" strokeLinecap="round" />
        <circle cx={cx} cy={cy} r="9" fill="#FFFEFB" stroke="#2A1F1A" strokeWidth="2.5" />
      </svg>
      <div style={{ textAlign: 'center', marginTop: -8 }}>
        <div className="serif" style={{ fontSize: 56, lineHeight: 1, letterSpacing: '-0.02em' }}>{value.toFixed(1)}</div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '4px 10px', borderRadius: 999, marginTop: 8,
          background: cls.soft, color: cls.color, fontSize: 12, fontWeight: 600, letterSpacing: '.02em'
        }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: cls.color }} />
          {cls.label}
        </div>
      </div>
    </div>
  );
}

function IMCBarGauge({ value, t, cls }) {
  const stops = [
    { v: 12, label: '12' },
    { v: 18.5, label: '18.5' },
    { v: 25, label: '25' },
    { v: 30, label: '30' },
    { v: 35, label: '35' },
    { v: 40, label: '40' },
  ];
  return (
    <div style={{ width: '100%' }}>
      <div style={{ textAlign: 'center', marginBottom: 18 }}>
        <div className="serif tnum" style={{ fontSize: 64, lineHeight: 1 }}>{value.toFixed(1)}</div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 10px',
          borderRadius: 999, marginTop: 8, background: cls.soft, color: cls.color,
          fontSize: 12, fontWeight: 600, letterSpacing: '.02em'
        }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: cls.color }} />
          {cls.label}
        </div>
      </div>
      <div style={{ position: 'relative', height: 22, borderRadius: 12, overflow: 'hidden',
        background: 'linear-gradient(90deg, #C99A3E 0%, #C99A3E 23%, #4F7A5A 23%, #4F7A5A 46%, #D9B25A 46%, #D9B25A 64%, #C76E4A 64%, #C76E4A 82%, #8E2A2A 82%, #8E2A2A 100%)',
        boxShadow: 'inset 0 1px 2px rgba(0,0,0,.1)'
      }}>
        <div style={{
          position: 'absolute', top: -6, bottom: -6,
          left: `calc(${t * 100}% - 3px)`, width: 6, borderRadius: 6,
          background: '#FFFEFB', boxShadow: '0 0 0 2px #2A1F1A, 0 4px 10px rgba(0,0,0,.2)'
        }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontSize: 10, color: 'var(--muted)' }}>
        {stops.map(s => <span key={s.v} className="tnum">{s.label}</span>)}
      </div>
    </div>
  );
}

function IMCRingGauge({ value, t, cls, size = 240 }) {
  // 3/4 circle gauge with conic gradient
  const stroke = 22;
  const radius = size / 2 - stroke / 2 - 4;
  const C = 2 * Math.PI * radius;
  const sweep = 0.75; // 270°
  const visible = C * sweep;
  const offset = C - visible * t;
  return (
    <div style={{ width: size, height: size, position: 'relative' }}>
      <svg width={size} height={size} style={{ transform: 'rotate(135deg)' }}>
        <defs>
          <linearGradient id="imcgrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#C99A3E" />
            <stop offset="25%" stopColor="#4F7A5A" />
            <stop offset="55%" stopColor="#D9B25A" />
            <stop offset="80%" stopColor="#C76E4A" />
            <stop offset="100%" stopColor="#8E2A2A" />
          </linearGradient>
        </defs>
        <circle cx={size/2} cy={size/2} r={radius} stroke="#EFE3CF" strokeWidth={stroke} fill="none"
          strokeDasharray={`${visible} ${C}`} strokeLinecap="round" />
        <circle cx={size/2} cy={size/2} r={radius} stroke="url(#imcgrad)" strokeWidth={stroke} fill="none"
          strokeDasharray={`${visible} ${C}`} strokeDashoffset={C - visible * t} strokeLinecap="round" />
      </svg>
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center'
      }}>
        <div style={{ fontSize: 10, letterSpacing: '.18em', color: 'var(--muted)', textTransform: 'uppercase' }}>Tu IMC</div>
        <div className="serif tnum" style={{ fontSize: 72, lineHeight: 1, margin: '2px 0' }}>{value.toFixed(1)}</div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 10px',
          borderRadius: 999, background: cls.soft, color: cls.color,
          fontSize: 12, fontWeight: 600
        }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: cls.color }} />
          {cls.label}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Tension visual (vertical-ish gauge)
// ─────────────────────────────────────────────────────────────
function TensionIndicator({ sys, dia, compact = false }) {
  const cls = classifyTension(sys, dia);
  // Map sys [90..200] to position
  const t = Math.max(0, Math.min(1, (sys - 90) / 110));
  const stops = [
    { range: [90, 120], color: '#4F7A5A', label: 'NORM' },
    { range: [120, 130], color: '#C99A3E', label: 'ELEV' },
    { range: [130, 140], color: '#D9B25A', label: 'HTN1' },
    { range: [140, 180], color: '#C76E4A', label: 'HTN2' },
    { range: [180, 200], color: '#8E2A2A', label: 'CRISIS' },
  ];
  if (compact) {
    return (
      <div style={{ width: '100%' }}>
        <div style={{ position: 'relative', height: 10, borderRadius: 999, overflow: 'hidden',
          background: 'linear-gradient(90deg, #4F7A5A 0%, #4F7A5A 27%, #C99A3E 27%, #C99A3E 36%, #D9B25A 36%, #D9B25A 45%, #C76E4A 45%, #C76E4A 82%, #8E2A2A 82%)',
        }}>
          <div style={{ position: 'absolute', top: -4, bottom: -4, left: `calc(${t*100}% - 2px)`, width: 4, borderRadius: 4, background: '#FFFEFB', boxShadow: '0 0 0 2px #2A1F1A' }} />
        </div>
      </div>
    );
  }
  return (
    <div style={{ width: '100%' }}>
      <div style={{ position: 'relative', height: 16, borderRadius: 999, overflow: 'hidden',
        background: 'linear-gradient(90deg, #4F7A5A 0%, #4F7A5A 27%, #C99A3E 27%, #C99A3E 36%, #D9B25A 36%, #D9B25A 45%, #C76E4A 45%, #C76E4A 82%, #8E2A2A 82%)',
      }}>
        <div style={{ position: 'absolute', top: -4, bottom: -4, left: `calc(${t*100}% - 3px)`, width: 6, borderRadius: 6, background: '#FFFEFB', boxShadow: '0 0 0 2px #2A1F1A, 0 4px 10px rgba(0,0,0,.18)' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontSize: 9, fontWeight: 600, color: 'var(--muted)', letterSpacing: '.08em' }}>
        {stops.map(s => <span key={s.label}>{s.label}</span>)}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Water progress ring
// ─────────────────────────────────────────────────────────────
function WaterRing({ value = 5, goal = 8, size = 180, accent = 'var(--sage)' }) {
  const stroke = 14;
  const radius = size / 2 - stroke / 2 - 2;
  const C = 2 * Math.PI * radius;
  const t = Math.min(1, value / goal);
  return (
    <div style={{ width: size, height: size, position: 'relative' }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size/2} cy={size/2} r={radius} stroke="#EFE3CF" strokeWidth={stroke} fill="none" />
        <circle cx={size/2} cy={size/2} r={radius} stroke={accent} strokeWidth={stroke} fill="none"
          strokeDasharray={`${C * t} ${C}`} strokeLinecap="round" />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div className="serif tnum" style={{ fontSize: 48, lineHeight: 1 }}>{value}</div>
        <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 4 }}>de {goal} vasos</div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Sparkline / Line chart
// ─────────────────────────────────────────────────────────────
function LineChart({ series = [], width = 320, height = 140, yMin, yMax, showAxis = true, fill = false }) {
  // series: [{ data: [..], color: '#...', label: '...' }]
  const allVals = series.flatMap(s => s.data);
  const mn = yMin ?? Math.min(...allVals) - 5;
  const mx = yMax ?? Math.max(...allVals) + 5;
  const n = series[0]?.data.length || 1;
  const pad = { l: 28, r: 8, t: 8, b: 18 };
  const w = width - pad.l - pad.r;
  const h = height - pad.t - pad.b;
  const xAt = (i) => pad.l + (i / Math.max(1, n - 1)) * w;
  const yAt = (v) => pad.t + (1 - (v - mn) / (mx - mn)) * h;

  const path = (data) => data.map((v, i) => `${i === 0 ? 'M' : 'L'} ${xAt(i)} ${yAt(v)}`).join(' ');
  const area = (data) => `${path(data)} L ${xAt(n-1)} ${pad.t + h} L ${xAt(0)} ${pad.t + h} Z`;

  const ticks = [mn, (mn+mx)/2, mx];
  return (
    <svg width={width} height={height}>
      {showAxis && ticks.map((t, i) => (
        <g key={i}>
          <line x1={pad.l} x2={width - pad.r} y1={yAt(t)} y2={yAt(t)} stroke="#EFE3CF" strokeDasharray="2 4" />
          <text x={pad.l - 4} y={yAt(t)} fontSize="9" fill="#8A7969" textAnchor="end" dominantBaseline="middle">{Math.round(t)}</text>
        </g>
      ))}
      {series.map((s, i) => (
        <g key={i}>
          {fill && (
            <path d={area(s.data)} fill={s.color} fillOpacity="0.08" />
          )}
          <path d={path(s.data)} fill="none" stroke={s.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          {s.data.map((v, j) => (
            <circle key={j} cx={xAt(j)} cy={yAt(v)} r="2.5" fill="#FFFEFB" stroke={s.color} strokeWidth="1.5" />
          ))}
        </g>
      ))}
    </svg>
  );
}

function BarChart({ data = [], labels = [], width = 320, height = 120, color = 'var(--sage)', goal }) {
  const mx = Math.max(...data, goal ?? 0, 1);
  const pad = { l: 8, r: 8, t: 8, b: 18 };
  const w = width - pad.l - pad.r;
  const h = height - pad.t - pad.b;
  const bw = w / data.length;
  return (
    <svg width={width} height={height}>
      {goal && (() => {
        const y = pad.t + (1 - goal/mx) * h;
        return <line x1={pad.l} x2={width-pad.r} y1={y} y2={y} stroke="#C76E4A" strokeDasharray="3 4" strokeWidth="1" />;
      })()}
      {data.map((v, i) => {
        const bh = (v / mx) * h;
        const x = pad.l + i * bw + bw * 0.18;
        const y = pad.t + h - bh;
        const ww = bw * 0.64;
        return (
          <g key={i}>
            <rect x={x} y={pad.t} width={ww} height={h} rx="3" fill="#EFE3CF" />
            <rect x={x} y={y} width={ww} height={bh} rx="3" fill={color} />
            <text x={x + ww/2} y={height - 4} fontSize="9" fill="#8A7969" textAnchor="middle">{labels[i]}</text>
          </g>
        );
      })}
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// Bottom tab bar
// ─────────────────────────────────────────────────────────────
function TabBar({ active, onChange }) {
  const tabs = [
    { id: 'home', label: 'Inicio', icon: 'home' },
    { id: 'history', label: 'Historial', icon: 'history' },
    { id: 'health', label: 'Salud', icon: 'shield' },
    { id: 'profile', label: 'Perfil', icon: 'user' },
  ];
  return (
    <div style={{
      position: 'sticky', bottom: 0, background: 'var(--surface)',
      borderTop: '1px solid var(--border-soft)',
      display: 'flex', justifyContent: 'space-around', padding: '8px 8px 12px',
      zIndex: 5,
    }}>
      {tabs.map(t => {
        const on = active === t.id;
        return (
          <button key={t.id} onClick={() => onChange(t.id)} className="tap"
            style={{
              flex: 1, border: 0, background: 'transparent',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
              color: on ? 'var(--hibiscus)' : 'var(--muted)',
              padding: '6px 4px', borderRadius: 12,
            }}>
            <div style={{
              padding: '4px 14px', borderRadius: 999,
              background: on ? 'var(--hibiscus-tint)' : 'transparent',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Icon name={t.icon} size={22} stroke={on ? 2 : 1.6} />
            </div>
            <span style={{ fontSize: 10.5, fontWeight: on ? 700 : 500, letterSpacing: '.02em' }}>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Sub-page header (back, title, action)
// ─────────────────────────────────────────────────────────────
function SubHeader({ title, onBack, action }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '14px 16px 10px', gap: 6 }}>
      <button onClick={onBack} className="tap" style={{
        border: 0, background: 'var(--surface)', width: 36, height: 36, borderRadius: 12,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 1px 3px rgba(110,70,40,.08)'
      }}><Icon name="arrowL" size={18} /></button>
      <div style={{ flex: 1, fontSize: 16, fontWeight: 600, marginLeft: 6 }}>{title}</div>
      {action}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Card
// ─────────────────────────────────────────────────────────────
function Card({ children, style, onClick, accent }) {
  return (
    <div onClick={onClick} className={onClick ? 'tap' : ''}
      style={{
        background: 'var(--surface)', borderRadius: 20,
        border: '1px solid var(--border-soft)',
        padding: 16,
        boxShadow: '0 1px 0 rgba(255,255,255,.7) inset, 0 6px 16px rgba(110,70,40,.06)',
        position: 'relative',
        ...style,
      }}>
      {accent && (
        <div style={{ position: 'absolute', top: 0, left: 16, right: 16, height: 3, borderRadius: 999, background: accent, opacity: .9 }} />
      )}
      {children}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Date strip
// ─────────────────────────────────────────────────────────────
function DateStrip({ selected, onSelect, onOpenCalendar }) {
  const today = new Date();
  const days = [];
  for (let i = 4; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    days.push(d);
  }
  const dayName = (d) => ['DOM','LUN','MAR','MIÉ','JUE','VIE','SÁB'][d.getDay()];
  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'stretch' }}>
      {days.map((d, i) => {
        const key = d.toDateString();
        const isToday = key === today.toDateString();
        const on = selected === key;
        return (
          <button key={key} className="tap" onClick={() => onSelect(key)} style={{
            flex: 1, border: 'none', borderRadius: 14,
            padding: '10px 0',
            background: on ? 'var(--hibiscus)' : (isToday ? 'var(--surface)' : 'transparent'),
            color: on ? '#FFFEFB' : 'var(--ink)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
            border: on ? 'none' : '1px solid var(--border-soft)',
            boxShadow: on ? '0 6px 16px rgba(155,45,63,.25)' : 'none',
          }}>
            <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.06em', opacity: on ? .85 : .55 }}>{dayName(d)}</span>
            <span className="serif tnum" style={{ fontSize: 22, lineHeight: 1 }}>{d.getDate()}</span>
          </button>
        );
      })}
      <button onClick={onOpenCalendar} className="tap" style={{
        width: 44, borderRadius: 14, background: 'var(--surface)', border: '1px solid var(--border-soft)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        color: 'var(--muted)', gap: 2,
      }}>
        <Icon name="calendar" size={16} />
        <span style={{ fontSize: 9, fontWeight: 600 }}>MÁS</span>
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Alert banner
// ─────────────────────────────────────────────────────────────
function AlertBanner({ tone = 'info', title, body, action, variant = 'soft' }) {
  const tones = {
    info: { fg: 'var(--sage-deep)', bg: 'var(--sage-soft)', icon: 'info' },
    success: { fg: 'var(--st-normal)', bg: 'var(--st-normal-soft)', icon: 'check' },
    warning: { fg: 'var(--st-elevated)', bg: 'var(--st-elevated-soft)', icon: 'alert' },
    danger: { fg: 'var(--st-htn1)', bg: 'var(--st-htn1-soft)', icon: 'alert' },
    crisis: { fg: 'var(--st-crisis)', bg: 'var(--st-crisis-soft)', icon: 'alert' },
  };
  const t = tones[tone];
  if (variant === 'bold') {
    return (
      <div style={{
        background: t.fg, color: '#FFFEFB', borderRadius: 18, padding: 16,
        display: 'flex', gap: 12,
      }}>
        <div className={tone === 'crisis' ? 'pulse-ring' : ''} style={{
          width: 36, height: 36, borderRadius: 999, background: 'rgba(255,255,255,.18)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}><Icon name={t.icon} size={20} color="#FFFEFB" /></div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 14 }}>{title}</div>
          {body && <div style={{ fontSize: 12.5, marginTop: 4, opacity: .92, lineHeight: 1.45 }}>{body}</div>}
          {action && <div style={{ marginTop: 10 }}>{action}</div>}
        </div>
      </div>
    );
  }
  return (
    <div style={{
      background: t.bg, color: t.fg, borderRadius: 16, padding: 14,
      display: 'flex', gap: 12, border: `1px solid ${t.fg}22`,
    }}>
      <Icon name={t.icon} size={20} />
      <div style={{ flex: 1, color: 'var(--ink-2)' }}>
        <div style={{ fontWeight: 700, fontSize: 13, color: t.fg }}>{title}</div>
        {body && <div style={{ fontSize: 12, marginTop: 4, lineHeight: 1.45 }}>{body}</div>}
        {action && <div style={{ marginTop: 8 }}>{action}</div>}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Number stepper
// ─────────────────────────────────────────────────────────────
function Stepper({ value, onChange, min = 0, max = 99, label, suffix }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
      <button className="tap" onClick={() => onChange(Math.max(min, value - 1))} style={{
        width: 44, height: 44, borderRadius: 999, border: '1px solid var(--border)',
        background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}><Icon name="minus" size={18} /></button>
      <div style={{ flex: 1, textAlign: 'center' }}>
        <div className="serif tnum" style={{ fontSize: 44, lineHeight: 1 }}>{value}<span style={{ fontSize: 18, color: 'var(--muted)', marginLeft: 4 }}>{suffix}</span></div>
        {label && <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 2 }}>{label}</div>}
      </div>
      <button className="tap" onClick={() => onChange(Math.min(max, value + 1))} style={{
        width: 44, height: 44, borderRadius: 999, border: '1px solid var(--hibiscus)',
        background: 'var(--hibiscus)', color: '#FFFEFB',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}><Icon name="plus" size={18} color="#FFFEFB" /></button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Primary button
// ─────────────────────────────────────────────────────────────
function Button({ children, onClick, variant = 'primary', icon, full, size = 'md', style }) {
  const base = {
    border: 0, borderRadius: 14, cursor: 'pointer',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    fontWeight: 600, letterSpacing: '.01em',
    width: full ? '100%' : 'auto',
    padding: size === 'sm' ? '8px 14px' : (size === 'lg' ? '16px 22px' : '12px 18px'),
    fontSize: size === 'sm' ? 12.5 : (size === 'lg' ? 15 : 14),
    transition: 'transform .12s, background .15s',
  };
  const variants = {
    primary: { background: 'var(--hibiscus)', color: '#FFFEFB', boxShadow: '0 6px 16px rgba(155,45,63,.28)' },
    secondary: { background: 'var(--surface)', color: 'var(--ink)', border: '1px solid var(--border)' },
    sage: { background: 'var(--sage)', color: '#FFFEFB' },
    ghost: { background: 'transparent', color: 'var(--ink)' },
    danger: { background: 'var(--st-crisis)', color: '#FFFEFB' },
  };
  return (
    <button className="tap" onClick={onClick} style={{ ...base, ...variants[variant], ...style }}>
      {icon && <Icon name={icon} size={16} />}
      {children}
    </button>
  );
}

// ─────────────────────────────────────────────────────────────
// Text input
// ─────────────────────────────────────────────────────────────
function Field({ label, value, onChange, placeholder, type = 'text', suffix, icon }) {
  return (
    <label style={{ display: 'block' }}>
      {label && <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink-2)', marginBottom: 6 }}>{label}</div>}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '12px 14px', borderRadius: 14,
        background: 'var(--surface)', border: '1px solid var(--border-soft)',
      }}>
        {icon && <Icon name={icon} size={18} color="var(--muted)" />}
        <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
          style={{
            flex: 1, border: 0, outline: 'none', background: 'transparent',
            fontSize: 15, color: 'var(--ink)', fontFamily: 'inherit', minWidth: 0,
          }} />
        {suffix && <span style={{ fontSize: 12, color: 'var(--muted)' }}>{suffix}</span>}
      </div>
    </label>
  );
}

// ─────────────────────────────────────────────────────────────
// Image placeholder (subtly striped)
// ─────────────────────────────────────────────────────────────
function PlaceholderImg({ label, height = 80, color = 'var(--terracotta-soft)' }) {
  return (
    <div style={{
      height, borderRadius: 14,
      backgroundImage: `repeating-linear-gradient(135deg, ${color} 0 12px, rgba(255,255,255,.5) 12px 24px)`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      border: '1px dashed rgba(199,110,74,.5)',
    }}>
      <span className="mono" style={{ fontSize: 10, color: 'var(--ink-2)', background: 'rgba(255,254,251,.85)', padding: '2px 8px', borderRadius: 6 }}>{label}</span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Toast
// ─────────────────────────────────────────────────────────────
function Toast({ children, tone = 'success' }) {
  const fg = tone === 'success' ? 'var(--st-normal)' : 'var(--hibiscus)';
  return (
    <div style={{
      position: 'absolute', top: 70, left: 16, right: 16, zIndex: 50,
      background: 'var(--surface)', borderRadius: 14, padding: '12px 14px',
      boxShadow: '0 10px 28px rgba(0,0,0,.18)',
      display: 'flex', alignItems: 'center', gap: 10, animation: 'fadeUp .3s ease both'
    }}>
      <div style={{ width: 28, height: 28, borderRadius: 999, background: 'var(--st-normal-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon name="check" size={16} color={fg} />
      </div>
      <div style={{ fontSize: 13, fontWeight: 600 }}>{children}</div>
    </div>
  );
}

Object.assign(window, {
  Icon, classifyIMC, classifyTension,
  IMCGauge, IMCArcGauge, IMCBarGauge, IMCRingGauge,
  TensionIndicator, WaterRing, LineChart, BarChart,
  TabBar, SubHeader, Card, DateStrip, AlertBanner, Stepper, Button, Field, PlaceholderImg, Toast,
});
