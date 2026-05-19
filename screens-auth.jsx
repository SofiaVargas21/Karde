/* global React, Icon, Card, Button, Field, AlertBanner */
const { useState: useStateAuth } = React;

function OnboardingScreen({ onComplete, onGoLogin }) {
  const [step, setStep] = useStateAuth(0);
  const [data, setData] = useStateAuth({
    nombre: '', correo: '', password: '',
    sexo: 'F', edad: 32, peso: 68, altura: 1.65,
  });
  const set = (k, v) => setData(d => ({ ...d, [k]: v }));

  const next = () => {
    if (step < 2) setStep(step + 1);
    else onComplete(data);
  };
  const back = () => step > 0 ? setStep(step - 1) : null;

  return (
    <div style={{
      padding: '20px 20px 24px', minHeight: '100%', display: 'flex', flexDirection: 'column',
      background: 'linear-gradient(180deg, var(--hibiscus-tint) 0%, var(--bg) 38%)'
    }}>
      {/* Top */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={back} disabled={step === 0} style={{
          width: 36, height: 36, borderRadius: 999, border: 0,
          background: step === 0 ? 'transparent' : 'var(--surface)',
          color: step === 0 ? 'transparent' : 'var(--ink)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}><Icon name="arrowL" size={18} /></button>
        <div style={{ display: 'flex', gap: 6 }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{
              width: i === step ? 22 : 6, height: 6, borderRadius: 999,
              background: i <= step ? 'var(--hibiscus)' : 'var(--border)',
              transition: 'width .25s',
            }} />
          ))}
        </div>
        <button onClick={onGoLogin} style={{ border: 0, background: 'transparent', fontSize: 12, color: 'var(--muted)', fontWeight: 600 }}>Saltar</button>
      </div>

      {/* Brand */}
      <div style={{ marginTop: 26, textAlign: 'center' }}>
        <BrandMark />
        <div className="serif" style={{ fontSize: 38, lineHeight: 1, marginTop: 14, letterSpacing: '-.02em' }}>
          {step === 0 && 'Bienvenida a Kardé'}
          {step === 1 && 'Cuéntanos de ti'}
          {step === 2 && 'Casi listo'}
        </div>
        <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 8, maxWidth: 280, marginInline: 'auto', lineHeight: 1.45 }}>
          {step === 0 && 'Tu acompañante de hábitos cardiovasculares. Mide, observa y mejora.'}
          {step === 1 && 'Usaremos tus datos para personalizar tus mediciones y recomendaciones.'}
          {step === 2 && 'Crea tu acceso. Tus datos viven en tu dispositivo.'}
        </div>
      </div>

      {/* Steps */}
      <div style={{ marginTop: 26, flex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}>
        {step === 0 && <Welcome />}
        {step === 1 && <ProfileStep data={data} set={set} />}
        {step === 2 && <CredentialsStep data={data} set={set} />}
      </div>

      {/* Bottom */}
      <div style={{ marginTop: 18 }}>
        {step === 2 && (
          <div style={{ fontSize: 10.5, color: 'var(--muted)', lineHeight: 1.5, marginBottom: 12, padding: '10px 12px', background: 'var(--surface-warm)', borderRadius: 12 }}>
            <strong style={{ color: 'var(--ink-2)' }}>Aviso médico.</strong> Esta aplicación es una herramienta de seguimiento y no sustituye el diagnóstico ni tratamiento médico profesional. Ante cualquier emergencia, acuda a su médico o a urgencias.
          </div>
        )}
        <Button full size="lg" onClick={next}>
          {step === 0 ? 'Empezar' : (step === 2 ? 'Crear cuenta' : 'Continuar')}
        </Button>
        {step === 0 && (
          <button onClick={onGoLogin} style={{ border: 0, background: 'transparent', display: 'block', margin: '12px auto 0', color: 'var(--muted)', fontSize: 13 }}>
            ¿Ya tienes cuenta? <span style={{ color: 'var(--hibiscus)', fontWeight: 700 }}>Inicia sesión</span>
          </button>
        )}
      </div>
    </div>
  );
}

function BrandMark() {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 14px',
      background: 'var(--surface)', borderRadius: 999, boxShadow: '0 6px 18px rgba(155,45,63,.10)'
    }}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 4c2 2 4 4 4 7a4 4 0 1 1-8 0c0-3 2-5 4-7Z" fill="#9B2D3F" />
        <circle cx="12" cy="11" r="1.4" fill="#FFFEFB" />
        <path d="M5 18c2-1 5-1.5 7-1.5s5 .5 7 1.5" stroke="#4A6B5C" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
      <span style={{ fontWeight: 700, letterSpacing: '.04em' }}>VITA<span style={{ color: 'var(--hibiscus)' }}>·</span>CONTROL</span>
    </div>
  );
}

function Welcome() {
  const features = [
    { icon: 'heart', title: 'Tensión arterial', body: 'Registro guiado, clasificación AHA y alertas inteligentes.' },
    { icon: 'scale', title: 'IMC visual', body: 'Gauge a color, evolución y recomendaciones personalizadas.' },
    { icon: 'drop', title: 'Agua e infusiones', body: 'Cumple tu meta diaria. Recordatorios suaves.' },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {features.map(f => (
        <div key={f.title} style={{
          display: 'flex', gap: 14, alignItems: 'flex-start',
          background: 'var(--surface)', padding: 14, borderRadius: 16,
          border: '1px solid var(--border-soft)',
        }}>
          <div style={{ width: 40, height: 40, borderRadius: 12, background: 'var(--hibiscus-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--hibiscus)' }}>
            <Icon name={f.icon} size={20} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 14 }}>{f.title}</div>
            <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2, lineHeight: 1.45 }}>{f.body}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ProfileStep({ data, set }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div>
        <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink-2)', marginBottom: 8 }}>Sexo</div>
        <div style={{ display: 'flex', gap: 8 }}>
          {[{ k: 'F', l: 'Femenino' }, { k: 'M', l: 'Masculino' }, { k: 'O', l: 'Otro' }].map(o => {
            const on = data.sexo === o.k;
            return (
              <button key={o.k} onClick={() => set('sexo', o.k)} style={{
                flex: 1, padding: '12px 8px', border: on ? '1px solid var(--hibiscus)' : '1px solid var(--border)',
                background: on ? 'var(--hibiscus-tint)' : 'var(--surface)', borderRadius: 12,
                fontWeight: 600, fontSize: 13, color: on ? 'var(--hibiscus)' : 'var(--ink-2)',
              }}>{o.l}</button>
            );
          })}
        </div>
      </div>
      <Field label="Edad" value={data.edad} onChange={v => set('edad', Number(v) || 0)} type="number" suffix="años" />
      <div style={{ display: 'flex', gap: 12 }}>
        <div style={{ flex: 1 }}><Field label="Peso" value={data.peso} onChange={v => set('peso', Number(v) || 0)} type="number" suffix="kg" /></div>
        <div style={{ flex: 1 }}><Field label="Altura" value={data.altura} onChange={v => set('altura', Number(v) || 0)} type="number" suffix="m" /></div>
      </div>
    </div>
  );
}

function CredentialsStep({ data, set }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Field label="Nombre" value={data.nombre} onChange={v => set('nombre', v)} placeholder="Ej. Ana López" icon="user" />
      <Field label="Correo electrónico" value={data.correo} onChange={v => set('correo', v)} placeholder="tu@correo.com" icon="mail" />
      <Field label="Contraseña" value={data.password} onChange={v => set('password', v)} placeholder="••••••••" type="password" icon="lock" />
    </div>
  );
}

function LoginScreen({ onLogin, onGoSignup }) {
  const [email, setEmail] = useStateAuth('ana@vita.health');
  const [pass, setPass] = useStateAuth('');
  return (
    <div style={{
      padding: 20, minHeight: '100%', display: 'flex', flexDirection: 'column',
      background: 'linear-gradient(180deg, var(--hibiscus-tint) 0%, var(--bg) 40%)'
    }}>
      <div style={{ paddingTop: 40, textAlign: 'center' }}>
        <BrandMark />
        <div className="serif" style={{ fontSize: 38, marginTop: 18, letterSpacing: '-.02em' }}>Hola de nuevo</div>
        <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 6 }}>Inicia sesión para continuar</div>
      </div>
      <div style={{ marginTop: 30, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Field label="Correo" value={email} onChange={setEmail} icon="mail" />
        <Field label="Contraseña" value={pass} onChange={setPass} placeholder="••••••••" type="password" icon="lock" />
        <button style={{ alignSelf: 'flex-end', border: 0, background: 'transparent', fontSize: 12, color: 'var(--hibiscus)', fontWeight: 600 }}>¿Olvidaste la contraseña?</button>
      </div>
      <div style={{ flex: 1 }} />
      <Button full size="lg" onClick={() => onLogin({ correo: email })}>Entrar</Button>
      <button onClick={onGoSignup} style={{ border: 0, background: 'transparent', margin: '14px auto 0', color: 'var(--muted)', fontSize: 13 }}>
        ¿Nuevo en VitaControl? <span style={{ color: 'var(--hibiscus)', fontWeight: 700 }}>Crea tu cuenta</span>
      </button>
    </div>
  );
}

Object.assign(window, { OnboardingScreen, LoginScreen, BrandMark });
