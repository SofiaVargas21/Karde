"use strict";

// Android.jsx — Simplified Android (Material 3) device frame
// Status bar + top app bar + content + gesture nav + keyboard.
// Based on Figma M3 spec. No dependencies, no image assets.

const MD_C = {
  surface: '#f4fbf8',
  surfaceVariant: '#dae5e1',
  inverseOnSurface: '#ecf2ef',
  secondaryContainer: '#cde8e1',
  primaryFixedDim: '#83d5c6',
  onSurface: '#171d1b',
  onSurfaceVar: '#49454f',
  onPrimaryContainer: '#00201c',
  primary: '#006a60',
  frameBorder: 'rgba(116,119,117,0.5)'
};

// ─────────────────────────────────────────────────────────────
// Status bar (time left, wifi/cell/battery right)
// ─────────────────────────────────────────────────────────────
function AndroidStatusBar({
  dark = false
}) {
  const c = dark ? '#fff' : MD_C.onSurface;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px',
      position: 'relative',
      fontFamily: 'Roboto, system-ui, sans-serif'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 128,
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: 0.25,
      lineHeight: '20px',
      color: c
    }
  }, "9:30")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: 8,
      transform: 'translateX(-50%)',
      width: 24,
      height: 24,
      borderRadius: 100,
      background: '#2e2e2e'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      paddingRight: 2
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    style: {
      marginRight: -2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 13.3L.67 5.97a10.37 10.37 0 0114.66 0L8 13.3z",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    style: {
      marginRight: -2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14.67 14.67V1.33L1.33 14.67h13.34z",
    fill: c
  }))), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3.75",
    y: "2",
    width: "8.5",
    height: "13",
    rx: "1.5",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "5.5",
    y: "0.9",
    width: "5",
    height: "2",
    rx: "0.5",
    fill: c
  }))));
}

// ─────────────────────────────────────────────────────────────
// Top app bar (Material 3 small/medium)
// ─────────────────────────────────────────────────────────────
function AndroidAppBar({
  title = 'Title',
  large = false
}) {
  const iconDot = /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: MD_C.onSurfaceVar,
      opacity: 0.3
    }
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: MD_C.surface,
      padding: '4px 4px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, iconDot, !large && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 22,
      fontWeight: 400,
      color: MD_C.onSurface,
      fontFamily: 'Roboto, system-ui, sans-serif'
    }
  }, title), large && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), iconDot), large && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 16px 20px',
      fontSize: 28,
      fontWeight: 400,
      color: MD_C.onSurface,
      fontFamily: 'Roboto, system-ui, sans-serif'
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// List item (Material 3)
// ─────────────────────────────────────────────────────────────
function AndroidListItem({
  headline,
  supporting,
  leading
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '12px 16px',
      minHeight: 56,
      boxSizing: 'border-box',
      fontFamily: 'Roboto, system-ui, sans-serif'
    }
  }, leading && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: MD_C.primary,
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18,
      fontWeight: 500,
      flexShrink: 0
    }
  }, leading), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: MD_C.onSurface,
      lineHeight: '24px'
    }
  }, headline), supporting && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: MD_C.onSurfaceVar,
      lineHeight: '20px'
    }
  }, supporting)));
}

// ─────────────────────────────────────────────────────────────
// Gesture nav bar (pill)
// ─────────────────────────────────────────────────────────────
function AndroidNavBar({
  dark = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 24,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 108,
      height: 4,
      borderRadius: 2,
      background: dark ? '#fff' : MD_C.onSurface,
      opacity: 0.4
    }
  }));
}

// ─────────────────────────────────────────────────────────────
// Device frame — wraps everything
// ─────────────────────────────────────────────────────────────
function AndroidDevice({
  children,
  width = 412,
  height = 892,
  dark = false,
  title,
  large = false,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 18,
      overflow: 'hidden',
      background: dark ? '#1d1b20' : MD_C.surface,
      border: `8px solid ${MD_C.frameBorder}`,
      boxShadow: '0 30px 80px rgba(0,0,0,0.25)',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement(AndroidStatusBar, {
    dark: dark
  }), title !== undefined && /*#__PURE__*/React.createElement(AndroidAppBar, {
    title: title,
    large: large
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(AndroidKeyboard, null), /*#__PURE__*/React.createElement(AndroidNavBar, {
    dark: dark
  }));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — Gboard (Material 3)
// ─────────────────────────────────────────────────────────────
function AndroidKeyboard() {
  let _k = 0;
  const key = (l, {
    flex = 1,
    bg = MD_C.surface,
    r = 6,
    minW,
    fs = 21
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: _k++,
    style: {
      height: 46,
      borderRadius: r,
      flex,
      minWidth: minW,
      background: bg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Roboto, system-ui',
      fontSize: fs,
      color: MD_C.onPrimaryContainer
    }
  }, l);
  const row = (keys, style = {}) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      justifyContent: 'center',
      ...style
    }
  }, keys.map(l => key(l)));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: MD_C.inverseOnSurface,
      padding: '0 8px 8px',
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], {
    padding: '0 20px'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, key('', {
    bg: MD_C.surfaceVariant
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flex: 7,
      minWidth: 274
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l))), key('', {
    bg: MD_C.surfaceVariant
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, key('?123', {
    bg: MD_C.secondaryContainer,
    r: 100,
    minW: 58,
    fs: 14
  }), key(',', {
    bg: MD_C.surfaceVariant
  }), key('', {
    flex: 3,
    minW: 154
  }), key('.', {
    bg: MD_C.surfaceVariant
  }), key('', {
    bg: MD_C.primaryFixedDim,
    r: 100,
    minW: 58
  }))));
}
Object.assign(window, {
  AndroidDevice,
  AndroidStatusBar,
  AndroidAppBar,
  AndroidListItem,
  AndroidNavBar,
  AndroidKeyboard
});
"use strict";

/* global React, ReactDOM, AndroidDevice,
   TweaksPanel, TweakSection, TweakSlider, TweakToggle, TweakRadio, TweakSelect, TweakButton, useTweaks,
   OnboardingScreen, LoginScreen, DashboardScreen, IMCScreen, TensionScreen,
   WaterScreen, HealthScreen, HistoryScreen, ProfileScreen, NotificationsScreen,
   TabBar, classifyTension, classifyIMC */
var {
  useState,
  useEffect,
  useMemo
} = React;
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "sys": 138,
  "dia": 88,
  "pulse": 78,
  "imc": 24.7,
  "scenario": "Saludable",
  "dashboardLayout": "hero",
  "gaugeVariant": "arc",
  "alertVariant": "modal"
} /*EDITMODE-END*/;
const SCENARIOS = {
  'Saludable': {
    sys: 118,
    dia: 76,
    pulse: 68,
    imc: 22.4
  },
  'Pre-hipertensión': {
    sys: 126,
    dia: 79,
    pulse: 74,
    imc: 26.1
  },
  'Hipertensión 1': {
    sys: 138,
    dia: 88,
    pulse: 78,
    imc: 28.3
  },
  'Hipertensión 2': {
    sys: 152,
    dia: 96,
    pulse: 84,
    imc: 31.5
  },
  'Crisis': {
    sys: 188,
    dia: 122,
    pulse: 92,
    imc: 33.8
  }
};

// ─────────────────────────────────────────────────────────────
// Seed data factory
// ─────────────────────────────────────────────────────────────
function makeSeed(sys, dia, pulse, imc) {
  // Generate plausible history around the current values
  const rand = n => Math.round((Math.random() - 0.5) * n);
  const sysHist = Array.from({
    length: 14
  }, (_, i) => sys - 6 + Math.round(Math.sin(i * 0.6) * 5) + rand(4));
  const diaHist = Array.from({
    length: 14
  }, (_, i) => dia - 3 + Math.round(Math.sin(i * 0.6 + 1) * 3) + rand(3));
  const imcHist = Array.from({
    length: 8
  }, (_, i) => +(imc - 0.4 + Math.cos(i * 0.5) * 0.3 + (Math.random() - .5) * 0.2).toFixed(1));
  const waterHist = [6, 8, 7, 8, 5, 4, 6];
  const months = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
  const now = new Date();
  const records = Array.from({
    length: 6
  }, (_, i) => {
    const d = new Date(now);
    d.setDate(now.getDate() - i);
    const s = sys + rand(10),
      di = dia + rand(6);
    return {
      sys: s,
      dia: di,
      pulse: pulse + rand(8),
      when: i === 0 ? 'Hoy · 09:24' : i === 1 ? 'Ayer · 20:10' : `${d.getDate()}/${d.getMonth() + 1} · ${8 + i % 3 * 4}:${i * 7 % 59}`.padEnd(0),
      day: d.getDate(),
      month: months[d.getMonth()]
    };
  });
  return {
    profile: {
      peso: 68,
      altura: 1.65
    },
    lastTension: {
      sys,
      dia,
      pulse
    },
    lastIMC: imc,
    water: {
      value: 5,
      goal: 8,
      reminder: '2h'
    },
    jamaica: 1,
    history: {
      sys: sysHist,
      dia: diaHist,
      imc: imcHist,
      water: waterHist,
      records
    }
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
      setTweak({
        sys: s.sys,
        dia: s.dia,
        pulse: s.pulse,
        imc: s.imc
      });
      lastScenario.current = t.scenario;
    }
  }, [t.scenario]);
  const [route, setRoute] = useState('onboarding');
  const [tab, setTab] = useState('home');
  const [user, setUser] = useState({
    nombre: 'Ana López',
    correo: 'ana@karde.health',
    sexo: 'F',
    edad: 32,
    peso: 68,
    altura: 1.65
  });

  // Build seed from tweaks
  const state = useMemo(() => makeSeed(t.sys, t.dia, t.pulse, t.imc), [t.sys, t.dia, t.pulse, t.imc]);
  // Mutable overrides for in-app actions (water/jamaica) — keep simple via state holder
  const [overrides, setOverrides] = useState({});
  const merged = {
    ...state,
    ...overrides,
    water: overrides.water || state.water,
    jamaica: overrides.jamaica ?? state.jamaica
  };
  const go = r => {
    if (['home', 'history', 'health', 'profile'].includes(r)) {
      setTab(r);
      setRoute('main');
    } else {
      setRoute(r);
    }
  };

  // ── Routing ──
  let screen;
  if (route === 'onboarding') {
    screen = /*#__PURE__*/React.createElement(OnboardingScreen, {
      onComplete: d => {
        setUser(d);
        setRoute('main');
        setTab('home');
      },
      onGoLogin: () => setRoute('login')
    });
  } else if (route === 'login') {
    screen = /*#__PURE__*/React.createElement(LoginScreen, {
      onLogin: d => {
        setUser({
          ...user,
          ...d
        });
        setRoute('main');
        setTab('home');
      },
      onGoSignup: () => setRoute('onboarding')
    });
  } else if (route === 'tension') {
    screen = /*#__PURE__*/React.createElement(TensionScreen, {
      state: merged,
      setTension: v => setTweak({
        sys: v.sys,
        dia: v.dia,
        pulse: v.pulse
      }),
      go: go,
      alertVariant: t.alertVariant
    });
  } else if (route === 'imc') {
    screen = /*#__PURE__*/React.createElement(IMCScreen, {
      state: merged,
      setIMC: v => setTweak('imc', +v.toFixed(1)),
      go: go,
      gaugeVariant: t.gaugeVariant
    });
  } else if (route === 'water') {
    screen = /*#__PURE__*/React.createElement(WaterScreen, {
      state: merged,
      setWater: w => setOverrides(o => ({
        ...o,
        water: w
      })),
      addJamaica: v => setOverrides(o => ({
        ...o,
        jamaica: v
      })),
      go: go
    });
  } else if (route === 'notifications') {
    screen = /*#__PURE__*/React.createElement(NotificationsScreen, {
      go: go
    });
  } else if (route === 'calendar') {
    screen = /*#__PURE__*/React.createElement(CalendarScreen, {
      go: go
    });
  } else {
    // main with tabs
    if (tab === 'home') {
      screen = /*#__PURE__*/React.createElement(DashboardScreen, {
        user: user,
        state: merged,
        go: go,
        layout: t.dashboardLayout
      });
    } else if (tab === 'history') {
      screen = /*#__PURE__*/React.createElement(HistoryScreen, {
        state: merged,
        go: go
      });
    } else if (tab === 'health') {
      screen = /*#__PURE__*/React.createElement(HealthScreen, {
        state: merged,
        go: go
      });
    } else if (tab === 'profile') {
      screen = /*#__PURE__*/React.createElement(ProfileScreen, {
        state: merged,
        user: user,
        setUser: setUser,
        go: go
      });
    }
  }
  const showTabs = route === 'main' || ['tension', 'imc', 'water'].includes(route);
  return /*#__PURE__*/React.createElement("div", {
    className: "stage"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(PhoneFrame, null, /*#__PURE__*/React.createElement("div", {
    className: "phone-scroll",
    style: {
      height: '100%',
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, screen), showTabs && /*#__PURE__*/React.createElement(TabBar, {
    active: tab,
    onChange: t => {
      setTab(t);
      setRoute('main');
    }
  })))), /*#__PURE__*/React.createElement(TweaksPanel, null, /*#__PURE__*/React.createElement(TweakSection, {
    label: "Escenario"
  }), /*#__PURE__*/React.createElement(TweakSelect, {
    label: "Estado del paciente",
    value: t.scenario,
    options: Object.keys(SCENARIOS),
    onChange: v => setTweak('scenario', v)
  }), /*#__PURE__*/React.createElement(TweakSlider, {
    label: "Sist\xF3lica",
    value: t.sys,
    min: 90,
    max: 200,
    unit: "mmHg",
    onChange: v => setTweak('sys', v)
  }), /*#__PURE__*/React.createElement(TweakSlider, {
    label: "Diast\xF3lica",
    value: t.dia,
    min: 50,
    max: 130,
    unit: "mmHg",
    onChange: v => setTweak('dia', v)
  }), /*#__PURE__*/React.createElement(TweakSlider, {
    label: "Pulso",
    value: t.pulse,
    min: 45,
    max: 140,
    unit: "bpm",
    onChange: v => setTweak('pulse', v)
  }), /*#__PURE__*/React.createElement(TweakSlider, {
    label: "IMC",
    value: t.imc,
    min: 15,
    max: 42,
    step: 0.1,
    unit: "",
    onChange: v => setTweak('imc', v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Variaciones"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Dashboard",
    value: t.dashboardLayout,
    options: ['hero', 'cards', 'stack'],
    onChange: v => setTweak('dashboardLayout', v)
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Gauge IMC",
    value: t.gaugeVariant,
    options: ['arc', 'bar', 'ring'],
    onChange: v => setTweak('gaugeVariant', v)
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Alerta crisis",
    value: t.alertVariant,
    options: ['modal', 'banner', 'inline'],
    onChange: v => setTweak('alertVariant', v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Navegar"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 6
    }
  }, [['Onboarding', 'onboarding'], ['Login', 'login'], ['Dashboard', 'home'], ['Tensión', 'tension'], ['IMC', 'imc'], ['Agua', 'water'], ['Salud', 'health'], ['Historial', 'history'], ['Perfil', 'profile'], ['Notif.', 'notifications']].map(([l, r]) => /*#__PURE__*/React.createElement(TweakButton, {
    key: r,
    onClick: () => go(r)
  }, l)))));
}

// Phone frame wrapper (uses AndroidDevice from starter, with status bar but no app bar)
function PhoneFrame({
  children
}) {
  return /*#__PURE__*/React.createElement(AndroidDevice, {
    width: 412,
    height: 892
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--bg)'
    }
  }, children));
}
function CalendarScreen({
  go
}) {
  const [sel, setSel] = useState(new Date());
  const month = sel.getMonth();
  const year = sel.getFullYear();
  const first = new Date(year, month, 1);
  const startWeekday = (first.getDay() + 6) % 7; // Monday-first
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();
  const isToday = d => d === today.getDate() && month === today.getMonth() && year === today.getFullYear();
  const monthName = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'][month];

  // Fake measurement dots
  const measureDays = [3, 5, 8, 10, 12, 14, today.getDate()];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px 10px',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('home'),
    style: {
      border: 0,
      background: 'var(--surface)',
      width: 36,
      height: 36,
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrowL",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      marginLeft: 6
    },
    className: "serif"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      letterSpacing: '-.01em'
    }
  }, monthName, " ", year)), /*#__PURE__*/React.createElement("button", {
    style: {
      border: 0,
      background: 'var(--surface)',
      width: 36,
      height: 36,
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevronL",
    size: 18
  })), /*#__PURE__*/React.createElement("button", {
    style: {
      border: 0,
      background: 'var(--surface)',
      width: 36,
      height: 36,
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevronR",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 16px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)',
      gap: 4,
      fontSize: 11,
      color: 'var(--muted)',
      textAlign: 'center',
      fontWeight: 700,
      letterSpacing: '.08em',
      marginBottom: 6
    }
  }, ['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, d))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)',
      gap: 4
    }
  }, Array.from({
    length: startWeekday
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: `pad${i}`
  })), Array.from({
    length: daysInMonth
  }).map((_, i) => {
    const d = i + 1;
    const td = isToday(d);
    const hasM = measureDays.includes(d);
    const isSel = d === sel.getDate();
    return /*#__PURE__*/React.createElement("button", {
      key: d,
      onClick: () => setSel(new Date(year, month, d)),
      style: {
        aspectRatio: '1/1',
        border: 0,
        padding: 0,
        background: isSel ? 'var(--hibiscus)' : td ? 'var(--surface)' : 'transparent',
        color: isSel ? '#FFFEFB' : td ? 'var(--hibiscus)' : 'var(--ink)',
        borderRadius: 12,
        fontWeight: td || isSel ? 700 : 500,
        position: 'relative'
      },
      className: "tnum"
    }, d, hasM && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        bottom: 4,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 4,
        height: 4,
        borderRadius: 999,
        background: isSel ? '#FFFEFB' : 'var(--hibiscus)'
      }
    }));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: '.1em',
      color: 'var(--muted)',
      fontWeight: 700
    }
  }, "EN ESTE D\xCDA"), /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 22,
      marginTop: 4
    }
  }, "3 mediciones"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      background: 'var(--surface)',
      borderRadius: 16,
      padding: 14,
      border: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 28,
      borderRadius: 4,
      background: 'var(--st-htn1)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      fontWeight: 700
    }
  }, "138/88 mmHg"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--muted)'
    }
  }, "09:24 \xB7 pulso 78")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      padding: '2px 8px',
      borderRadius: 999,
      background: 'var(--st-htn1-soft)',
      color: 'var(--st-htn1)',
      fontWeight: 700
    }
  }, "HTN-1")))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
"use strict";

/* global React */
var {
  useState,
  useEffect,
  useMemo,
  useRef
} = React;

// ─────────────────────────────────────────────────────────────
// Icons (line-style, original)
// ─────────────────────────────────────────────────────────────
const Icon = ({
  name,
  size = 22,
  stroke = 1.6,
  color = 'currentColor'
}) => {
  const props = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  };
  switch (name) {
    case 'home':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M3 11.5 12 4l9 7.5"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M5 10v10h14V10"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M10 20v-5h4v5"
      }));
    case 'history':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M3 12a9 9 0 1 0 3-6.7"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M3 4v5h5"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M12 7v5l3 2"
      }));
    case 'shield':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m9 12 2 2 4-4"
      }));
    case 'user':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "8",
        r: "4"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M3.5 20.5c1.5-3.5 5-5.5 8.5-5.5s7 2 8.5 5.5"
      }));
    case 'heart':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M12 20s-7-4.5-9.2-9.2C1.4 7.7 3.8 4.5 7 4.8c2 .2 3.4 1.4 5 3.2 1.6-1.8 3-3 5-3.2 3.2-.3 5.6 2.9 4.2 6C19 15.5 12 20 12 20Z"
      }));
    case 'pulse':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M3 12h4l2-5 3 10 2-7 2 4h5"
      }));
    case 'drop':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M12 3s7 7.5 7 12a7 7 0 0 1-14 0c0-4.5 7-12 7-12Z"
      }));
    case 'scale':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("rect", {
        x: "3",
        y: "5",
        width: "18",
        height: "14",
        rx: "3"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M9 11h6"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M12 11v4"
      }));
    case 'calendar':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("rect", {
        x: "3",
        y: "5",
        width: "18",
        height: "16",
        rx: "2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M3 9h18M8 3v4M16 3v4"
      }));
    case 'chevronR':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "m9 6 6 6-6 6"
      }));
    case 'chevronL':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "m15 6-6 6 6 6"
      }));
    case 'chevronD':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "m6 9 6 6 6-6"
      }));
    case 'plus':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M12 5v14M5 12h14"
      }));
    case 'minus':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M5 12h14"
      }));
    case 'bell':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M6 8a6 6 0 1 1 12 0c0 7 3 7 3 9H3c0-2 3-2 3-9Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M10 21a2 2 0 0 0 4 0"
      }));
    case 'check':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "m5 12 4 4 10-10"
      }));
    case 'alert':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M12 3 2 21h20L12 3Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M12 10v5M12 18v.5"
      }));
    case 'info':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "9"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M12 11v5M12 8v.5"
      }));
    case 'leaf':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M20 4c-9 0-15 6-15 13 0 1 .2 2 .5 3 7 0 13-6 13-15 .7-.3 1-.5 1.5-1Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M6 20c1-5 4-9 9-12"
      }));
    case 'flame':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M12 3c0 4-4 5-4 9a4 4 0 0 0 8 0c0-2-1-3-1-5 2 1 3 3 3 5a6 6 0 0 1-12 0c0-5 6-6 6-9Z"
      }));
    case 'settings':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "3"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"
      }));
    case 'logout':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M15 4h4v16h-4"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M10 8l-4 4 4 4"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M6 12h12"
      }));
    case 'arrowL':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M19 12H5M11 6l-6 6 6 6"
      }));
    case 'edit':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M4 20h4l10-10-4-4L4 16v4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m13 7 4 4"
      }));
    case 'eye':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "3"
      }));
    case 'lock':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("rect", {
        x: "5",
        y: "11",
        width: "14",
        height: "9",
        rx: "2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M8 11V8a4 4 0 1 1 8 0v3"
      }));
    case 'mail':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("rect", {
        x: "3",
        y: "5",
        width: "18",
        height: "14",
        rx: "2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m3 7 9 7 9-7"
      }));
    case 'sparkle':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M12 3v6M12 15v6M3 12h6M15 12h6"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m6 6 3 3M15 15l3 3M6 18l3-3M15 9l3-3"
      }));
    case 'play':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M6 4v16l14-8L6 4Z"
      }));
    case 'lung':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M12 3v10"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M9 6c-3 2-5 6-5 11 0 2 2 4 4 4s3-2 3-4V8c0-1-1-2-2-2Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M15 6c3 2 5 6 5 11 0 2-2 4-4 4s-3-2-3-4V8c0-1 1-2 2-2Z"
      }));
    default:
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "9"
      }));
  }
};

// ─────────────────────────────────────────────────────────────
// IMC classification + tension classification
// ─────────────────────────────────────────────────────────────
const classifyIMC = imc => {
  if (imc < 18.5) return {
    key: 'low',
    label: 'Bajo peso',
    color: 'var(--st-elevated)',
    soft: 'var(--st-elevated-soft)',
    tip: 'Tu IMC está por debajo del rango saludable. Considera mejorar tu alimentación.'
  };
  if (imc < 25) return {
    key: 'normal',
    label: 'Normal',
    color: 'var(--st-normal)',
    soft: 'var(--st-normal-soft)',
    tip: 'Estás en el rango saludable. ¡Mantén tus hábitos!'
  };
  if (imc < 30) return {
    key: 'over',
    label: 'Sobrepeso',
    color: 'var(--st-elevated)',
    soft: 'var(--st-elevated-soft)',
    tip: 'Hay margen para ajustar la alimentación y aumentar actividad.'
  };
  if (imc < 35) return {
    key: 'ob1',
    label: 'Obesidad I',
    color: 'var(--st-htn1)',
    soft: 'var(--st-htn1-soft)',
    tip: 'Te recomendamos un plan combinado de alimentación y ejercicio.'
  };
  return {
    key: 'ob2',
    label: 'Obesidad II+',
    color: 'var(--st-crisis)',
    soft: 'var(--st-crisis-soft)',
    tip: 'Consulta con un profesional para un plan personalizado.'
  };
};
const classifyTension = (sys, dia) => {
  if (sys > 180 || dia > 120) return {
    key: 'crisis',
    label: 'Crisis hipertensiva',
    short: 'CRISIS',
    color: 'var(--st-crisis)',
    soft: 'var(--st-crisis-soft)',
    emoji: '⚠️',
    message: 'Tu tensión está en niveles de crisis. Consulta a un médico de inmediato.'
  };
  if (sys >= 140 || dia >= 90) return {
    key: 'htn2',
    label: 'Hipertensión etapa 2',
    short: 'HTN-2',
    color: 'var(--st-htn2)',
    soft: 'var(--st-htn2-soft)',
    emoji: '🟠',
    message: 'Tu tensión está alta. Toma tus medicamentos y descansa.'
  };
  if (sys >= 130 || dia >= 80) return {
    key: 'htn1',
    label: 'Hipertensión etapa 1',
    short: 'HTN-1',
    color: 'var(--st-htn1)',
    soft: 'var(--st-htn1-soft)',
    emoji: '🟡',
    message: 'Mantén seguimiento; ajusta alimentación y reduce sodio.'
  };
  if (sys >= 120) return {
    key: 'elev',
    label: 'Elevada',
    short: 'ELEV',
    color: 'var(--st-elevated)',
    soft: 'var(--st-elevated-soft)',
    emoji: '🟢',
    message: 'Vigila tus mediciones y reduce el estrés.'
  };
  return {
    key: 'normal',
    label: 'Normal',
    short: 'NORMAL',
    color: 'var(--st-normal)',
    soft: 'var(--st-normal-soft)',
    emoji: '✅',
    message: 'Tu tensión está en rango óptimo.'
  };
};

// ─────────────────────────────────────────────────────────────
// Gauge — IMC (3 variations)
// ─────────────────────────────────────────────────────────────
function IMCGauge({
  value = 24,
  variant = 'arc',
  size = 260
}) {
  const cls = classifyIMC(value);
  // Map value 12 → 40 to 0..1
  const min = 12,
    max = 40;
  const t = Math.max(0, Math.min(1, (value - min) / (max - min)));
  if (variant === 'arc') {
    return /*#__PURE__*/React.createElement(IMCArcGauge, {
      value: value,
      t: t,
      cls: cls,
      size: size
    });
  }
  if (variant === 'bar') {
    return /*#__PURE__*/React.createElement(IMCBarGauge, {
      value: value,
      t: t,
      cls: cls
    });
  }
  if (variant === 'ring') {
    return /*#__PURE__*/React.createElement(IMCRingGauge, {
      value: value,
      t: t,
      cls: cls,
      size: size
    });
  }
  return null;
}
function IMCArcGauge({
  value,
  t,
  cls,
  size = 260
}) {
  // Semicircle gauge. Angle range: 180° (left) to 0° (right).
  const r = size / 2 - 16;
  const cx = size / 2,
    cy = size / 2 + 6;
  const polar = (angDeg, rad) => {
    const a = Math.PI * angDeg / 180;
    return [cx + rad * Math.cos(a), cy - rad * Math.sin(a)];
  };
  // Segments by IMC ranges, mapped to angle 180..0
  const segs = [{
    from: 12,
    to: 18.5,
    color: '#C99A3E'
  }, {
    from: 18.5,
    to: 25,
    color: '#4F7A5A'
  }, {
    from: 25,
    to: 30,
    color: '#D9B25A'
  }, {
    from: 30,
    to: 35,
    color: '#C76E4A'
  }, {
    from: 35,
    to: 40,
    color: '#8E2A2A'
  }];
  const valToAng = v => 180 - (v - 12) / 28 * 180;
  const arcPath = (a1, a2, rad) => {
    const [x1, y1] = polar(a1, rad);
    const [x2, y2] = polar(a2, rad);
    const large = Math.abs(a1 - a2) > 180 ? 1 : 0;
    return `M ${x1} ${y1} A ${rad} ${rad} 0 ${large} 1 ${x2} ${y2}`;
  };

  // Needle
  const angle = valToAng(Math.max(12, Math.min(40, value)));
  const [nx, ny] = polar(angle, r - 18);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size / 2 + 32,
    viewBox: `0 0 ${size} ${size / 2 + 32}`
  }, /*#__PURE__*/React.createElement("path", {
    d: arcPath(180, 0, r),
    stroke: "#EFE3CF",
    strokeWidth: "22",
    fill: "none",
    strokeLinecap: "round"
  }), segs.map((s, i) => {
    const a1 = valToAng(s.from);
    const a2 = valToAng(s.to);
    return /*#__PURE__*/React.createElement("path", {
      key: i,
      d: arcPath(a1, a2, r),
      stroke: s.color,
      strokeWidth: "22",
      fill: "none",
      strokeLinecap: "butt",
      opacity: "0.85"
    });
  }), [18.5, 25, 30, 35].map((v, i) => {
    const a = valToAng(v);
    const [x1, y1] = polar(a, r - 14);
    const [x2, y2] = polar(a, r + 14);
    return /*#__PURE__*/React.createElement("line", {
      key: i,
      x1: x1,
      y1: y1,
      x2: x2,
      y2: y2,
      stroke: "#FFFEFB",
      strokeWidth: "2"
    });
  }), [18.5, 25, 30, 35].map((v, i) => {
    const a = valToAng(v);
    const [x, y] = polar(a, r + 26);
    return /*#__PURE__*/React.createElement("text", {
      key: i,
      x: x,
      y: y,
      fontFamily: "Manrope",
      fontSize: "10",
      fill: "#8A7969",
      textAnchor: "middle",
      dominantBaseline: "middle"
    }, v);
  }), /*#__PURE__*/React.createElement("line", {
    x1: cx,
    y1: cy,
    x2: nx,
    y2: ny,
    stroke: "#2A1F1A",
    strokeWidth: "3",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: "9",
    fill: "#FFFEFB",
    stroke: "#2A1F1A",
    strokeWidth: "2.5"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: -6
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: size < 220 ? 44 : 56,
      lineHeight: 1,
      letterSpacing: '-0.02em'
    }
  }, value.toFixed(1)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 10px',
      borderRadius: 999,
      marginTop: 8,
      background: cls.soft,
      color: cls.color,
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '.02em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: cls.color
    }
  }), cls.label)));
}
function IMCBarGauge({
  value,
  t,
  cls
}) {
  const stops = [{
    v: 12,
    label: '12'
  }, {
    v: 18.5,
    label: '18.5'
  }, {
    v: 25,
    label: '25'
  }, {
    v: 30,
    label: '30'
  }, {
    v: 35,
    label: '35'
  }, {
    v: 40,
    label: '40'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "serif tnum",
    style: {
      fontSize: 64,
      lineHeight: 1
    }
  }, value.toFixed(1)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 10px',
      borderRadius: 999,
      marginTop: 8,
      background: cls.soft,
      color: cls.color,
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '.02em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: cls.color
    }
  }), cls.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 22,
      borderRadius: 12,
      overflow: 'hidden',
      background: 'linear-gradient(90deg, #C99A3E 0%, #C99A3E 23%, #4F7A5A 23%, #4F7A5A 46%, #D9B25A 46%, #D9B25A 64%, #C76E4A 64%, #C76E4A 82%, #8E2A2A 82%, #8E2A2A 100%)',
      boxShadow: 'inset 0 1px 2px rgba(0,0,0,.1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -6,
      bottom: -6,
      left: `calc(${t * 100}% - 3px)`,
      width: 6,
      borderRadius: 6,
      background: '#FFFEFB',
      boxShadow: '0 0 0 2px #2A1F1A, 0 4px 10px rgba(0,0,0,.2)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 6,
      fontSize: 10,
      color: 'var(--muted)'
    }
  }, stops.map(s => /*#__PURE__*/React.createElement("span", {
    key: s.v,
    className: "tnum"
  }, s.label))));
}
function IMCRingGauge({
  value,
  t,
  cls,
  size = 240
}) {
  // 3/4 circle gauge with conic gradient
  const stroke = 22;
  const radius = size / 2 - stroke / 2 - 4;
  const C = 2 * Math.PI * radius;
  const sweep = 0.75; // 270°
  const visible = C * sweep;
  const offset = C - visible * t;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: 'rotate(135deg)'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "imcgrad",
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#C99A3E"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "25%",
    stopColor: "#4F7A5A"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "55%",
    stopColor: "#D9B25A"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "80%",
    stopColor: "#C76E4A"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#8E2A2A"
  }))), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: radius,
    stroke: "#EFE3CF",
    strokeWidth: stroke,
    fill: "none",
    strokeDasharray: `${visible} ${C}`,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: radius,
    stroke: "url(#imcgrad)",
    strokeWidth: stroke,
    fill: "none",
    strokeDasharray: `${visible} ${C}`,
    strokeDashoffset: C - visible * t,
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      letterSpacing: '.18em',
      color: 'var(--muted)',
      textTransform: 'uppercase'
    }
  }, "Tu IMC"), /*#__PURE__*/React.createElement("div", {
    className: "serif tnum",
    style: {
      fontSize: 72,
      lineHeight: 1,
      margin: '2px 0'
    }
  }, value.toFixed(1)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 10px',
      borderRadius: 999,
      background: cls.soft,
      color: cls.color,
      fontSize: 12,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: cls.color
    }
  }), cls.label)));
}

// ─────────────────────────────────────────────────────────────
// Tension visual (vertical-ish gauge)
// ─────────────────────────────────────────────────────────────
function TensionIndicator({
  sys,
  dia,
  compact = false
}) {
  const cls = classifyTension(sys, dia);
  // Map sys [90..200] to position
  const t = Math.max(0, Math.min(1, (sys - 90) / 110));
  const stops = [{
    range: [90, 120],
    color: '#4F7A5A',
    label: 'NORM'
  }, {
    range: [120, 130],
    color: '#C99A3E',
    label: 'ELEV'
  }, {
    range: [130, 140],
    color: '#D9B25A',
    label: 'HTN1'
  }, {
    range: [140, 180],
    color: '#C76E4A',
    label: 'HTN2'
  }, {
    range: [180, 200],
    color: '#8E2A2A',
    label: 'CRISIS'
  }];
  if (compact) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        height: 10,
        borderRadius: 999,
        overflow: 'hidden',
        background: 'linear-gradient(90deg, #4F7A5A 0%, #4F7A5A 27%, #C99A3E 27%, #C99A3E 36%, #D9B25A 36%, #D9B25A 45%, #C76E4A 45%, #C76E4A 82%, #8E2A2A 82%)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: -4,
        bottom: -4,
        left: `calc(${t * 100}% - 2px)`,
        width: 4,
        borderRadius: 4,
        background: '#FFFEFB',
        boxShadow: '0 0 0 2px #2A1F1A'
      }
    })));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 16,
      borderRadius: 999,
      overflow: 'hidden',
      background: 'linear-gradient(90deg, #4F7A5A 0%, #4F7A5A 27%, #C99A3E 27%, #C99A3E 36%, #D9B25A 36%, #D9B25A 45%, #C76E4A 45%, #C76E4A 82%, #8E2A2A 82%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -4,
      bottom: -4,
      left: `calc(${t * 100}% - 3px)`,
      width: 6,
      borderRadius: 6,
      background: '#FFFEFB',
      boxShadow: '0 0 0 2px #2A1F1A, 0 4px 10px rgba(0,0,0,.18)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 6,
      fontSize: 9,
      fontWeight: 600,
      color: 'var(--muted)',
      letterSpacing: '.08em'
    }
  }, stops.map(s => /*#__PURE__*/React.createElement("span", {
    key: s.label
  }, s.label))));
}

// ─────────────────────────────────────────────────────────────
// Water progress ring
// ─────────────────────────────────────────────────────────────
function WaterRing({
  value = 5,
  goal = 8,
  size = 180,
  accent = 'var(--sage)'
}) {
  const stroke = 14;
  const radius = size / 2 - stroke / 2 - 2;
  const C = 2 * Math.PI * radius;
  const t = Math.min(1, value / goal);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: 'rotate(-90deg)'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: radius,
    stroke: "#EFE3CF",
    strokeWidth: stroke,
    fill: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: radius,
    stroke: accent,
    strokeWidth: stroke,
    fill: "none",
    strokeDasharray: `${C * t} ${C}`,
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "serif tnum",
    style: {
      fontSize: 48,
      lineHeight: 1
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--muted)',
      marginTop: 4
    }
  }, "de ", goal, " vasos")));
}

// ─────────────────────────────────────────────────────────────
// Sparkline / Line chart
// ─────────────────────────────────────────────────────────────
function LineChart({
  series = [],
  width = 320,
  height = 140,
  yMin,
  yMax,
  showAxis = true,
  fill = false,
  labels = []
}) {
  // series: [{ data: [..], color: '#...', label: '...' }]
  const allVals = series.flatMap(s => s.data);
  const mn = yMin ?? Math.min(...allVals) - 5;
  const mx = yMax ?? Math.max(...allVals) + 5;
  const n = series[0]?.data.length || 1;
  const pad = {
    l: 28,
    r: 8,
    t: 8,
    b: 18
  };
  const w = width - pad.l - pad.r;
  const h = height - pad.t - pad.b;
  const xAt = i => pad.l + i / Math.max(1, n - 1) * w;
  const yAt = v => pad.t + (1 - (v - mn) / (mx - mn)) * h;
  const path = data => data.map((v, i) => `${i === 0 ? 'M' : 'L'} ${xAt(i)} ${yAt(v)}`).join(' ');
  const area = data => `${path(data)} L ${xAt(n - 1)} ${pad.t + h} L ${xAt(0)} ${pad.t + h} Z`;
  const ticks = [mn, (mn + mx) / 2, mx];
  return /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height
  }, showAxis && ticks.map((t, i) => /*#__PURE__*/React.createElement("g", {
    key: i
  }, /*#__PURE__*/React.createElement("line", {
    x1: pad.l,
    x2: width - pad.r,
    y1: yAt(t),
    y2: yAt(t),
    stroke: "#EFE3CF",
    strokeDasharray: "2 4"
  }), /*#__PURE__*/React.createElement("text", {
    x: pad.l - 4,
    y: yAt(t),
    fontSize: "9",
    fill: "#8A7969",
    textAnchor: "end",
    dominantBaseline: "middle"
  }, Math.round(t)))), series.map((s, i) => /*#__PURE__*/React.createElement("g", {
    key: i
  }, fill && /*#__PURE__*/React.createElement("path", {
    d: area(s.data),
    fill: s.color,
    fillOpacity: "0.08"
  }), /*#__PURE__*/React.createElement("path", {
    d: path(s.data),
    fill: "none",
    stroke: s.color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), s.data.map((v, j) => /*#__PURE__*/React.createElement("circle", {
    key: j,
    cx: xAt(j),
    cy: yAt(v),
    r: "2.5",
    fill: "#FFFEFB",
    stroke: s.color,
    strokeWidth: "1.5"
  })))), labels && labels.length > 0 && labels.map((lbl, i) => /*#__PURE__*/React.createElement("text", {
    key: `lbl-${i}`,
    x: xAt(i),
    y: height - 2,
    fontSize: "9",
    fill: "#8A7969",
    textAnchor: "middle"
  }, lbl)));
}
function BarChart({
  data = [],
  labels = [],
  width = 320,
  height = 120,
  color = 'var(--sage)',
  goal
}) {
  const mx = Math.max(...data, goal ?? 0, 1);
  const pad = {
    l: 8,
    r: 8,
    t: 8,
    b: 18
  };
  const w = width - pad.l - pad.r;
  const h = height - pad.t - pad.b;
  const bw = w / data.length;
  return /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height
  }, goal && (() => {
    const y = pad.t + (1 - goal / mx) * h;
    return /*#__PURE__*/React.createElement("line", {
      x1: pad.l,
      x2: width - pad.r,
      y1: y,
      y2: y,
      stroke: "#C76E4A",
      strokeDasharray: "3 4",
      strokeWidth: "1"
    });
  })(), data.map((v, i) => {
    const bh = v / mx * h;
    const x = pad.l + i * bw + bw * 0.18;
    const y = pad.t + h - bh;
    const ww = bw * 0.64;
    return /*#__PURE__*/React.createElement("g", {
      key: i
    }, /*#__PURE__*/React.createElement("rect", {
      x: x,
      y: pad.t,
      width: ww,
      height: h,
      rx: "3",
      fill: "#EFE3CF"
    }), /*#__PURE__*/React.createElement("rect", {
      x: x,
      y: y,
      width: ww,
      height: bh,
      rx: "3",
      fill: color
    }), /*#__PURE__*/React.createElement("text", {
      x: x + ww / 2,
      y: height - 4,
      fontSize: "9",
      fill: "#8A7969",
      textAnchor: "middle"
    }, labels[i]));
  }));
}

// ─────────────────────────────────────────────────────────────
// Bottom tab bar
// ─────────────────────────────────────────────────────────────
function TabBar({
  active,
  onChange
}) {
  const tabs = [{
    id: 'home',
    label: 'Inicio',
    icon: 'home'
  }, {
    id: 'history',
    label: 'Historial',
    icon: 'history'
  }, {
    id: 'health',
    label: 'Salud',
    icon: 'shield'
  }, {
    id: 'profile',
    label: 'Perfil',
    icon: 'user'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      bottom: 0,
      background: 'var(--surface)',
      borderTop: '1px solid var(--border-soft)',
      display: 'flex',
      justifyContent: 'space-around',
      padding: '8px 8px 12px',
      zIndex: 5
    }
  }, tabs.map(t => {
    const on = active === t.id;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => onChange(t.id),
      className: "tap",
      style: {
        flex: 1,
        border: 0,
        background: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        color: on ? 'var(--hibiscus)' : 'var(--muted)',
        padding: '6px 4px',
        borderRadius: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '4px 14px',
        borderRadius: 999,
        background: on ? 'var(--hibiscus-tint)' : 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: t.icon,
      size: 22,
      stroke: on ? 2 : 1.6
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10.5,
        fontWeight: on ? 700 : 500,
        letterSpacing: '.02em'
      }
    }, t.label));
  }));
}

// ─────────────────────────────────────────────────────────────
// Sub-page header (back, title, action)
// ─────────────────────────────────────────────────────────────
function SubHeader({
  title,
  onBack,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '14px 16px 10px',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    className: "tap",
    style: {
      border: 0,
      background: 'var(--surface)',
      width: 36,
      height: 36,
      borderRadius: 12,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 1px 3px rgba(110,70,40,.08)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrowL",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 16,
      fontWeight: 600,
      marginLeft: 6
    }
  }, title), action);
}

// ─────────────────────────────────────────────────────────────
// Card
// ─────────────────────────────────────────────────────────────
function Card({
  children,
  style,
  onClick,
  accent
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    className: onClick ? 'tap' : '',
    style: {
      background: 'var(--surface)',
      borderRadius: 20,
      border: '1px solid var(--border-soft)',
      padding: 16,
      boxShadow: '0 1px 0 rgba(255,255,255,.7) inset, 0 6px 16px rgba(110,70,40,.06)',
      position: 'relative',
      ...style
    }
  }, accent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 16,
      right: 16,
      height: 3,
      borderRadius: 999,
      background: accent,
      opacity: .9
    }
  }), children);
}

// ─────────────────────────────────────────────────────────────
// Date strip
// ─────────────────────────────────────────────────────────────
function DateStrip({
  selected,
  onSelect,
  onOpenCalendar
}) {
  const today = new Date();
  const days = [];
  for (let i = 4; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    days.push(d);
  }
  const dayName = d => ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB'][d.getDay()];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'stretch'
    }
  }, days.map((d, i) => {
    const key = d.toDateString();
    const isToday = key === today.toDateString();
    const on = selected === key;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      className: "tap",
      onClick: () => onSelect(key),
      style: {
        flex: 1,
        border: 'none',
        borderRadius: 14,
        padding: '10px 0',
        background: on ? 'var(--hibiscus)' : isToday ? 'var(--surface)' : 'transparent',
        color: on ? '#FFFEFB' : 'var(--ink)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        border: on ? 'none' : '1px solid var(--border-soft)',
        boxShadow: on ? '0 6px 16px rgba(155,45,63,.25)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: '.06em',
        opacity: on ? .85 : .55
      }
    }, dayName(d)), /*#__PURE__*/React.createElement("span", {
      className: "serif tnum",
      style: {
        fontSize: 22,
        lineHeight: 1
      }
    }, d.getDate()));
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onOpenCalendar,
    className: "tap",
    style: {
      width: 44,
      borderRadius: 14,
      background: 'var(--surface)',
      border: '1px solid var(--border-soft)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--muted)',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      fontWeight: 600
    }
  }, "M\xC1S")));
}

// ─────────────────────────────────────────────────────────────
// Alert banner
// ─────────────────────────────────────────────────────────────
function AlertBanner({
  tone = 'info',
  title,
  body,
  action,
  variant = 'soft'
}) {
  const tones = {
    info: {
      fg: 'var(--sage-deep)',
      bg: 'var(--sage-soft)',
      icon: 'info'
    },
    success: {
      fg: 'var(--st-normal)',
      bg: 'var(--st-normal-soft)',
      icon: 'check'
    },
    warning: {
      fg: 'var(--st-elevated)',
      bg: 'var(--st-elevated-soft)',
      icon: 'alert'
    },
    danger: {
      fg: 'var(--st-htn1)',
      bg: 'var(--st-htn1-soft)',
      icon: 'alert'
    },
    crisis: {
      fg: 'var(--st-crisis)',
      bg: 'var(--st-crisis-soft)',
      icon: 'alert'
    }
  };
  const t = tones[tone];
  if (variant === 'bold') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: t.fg,
        color: '#FFFEFB',
        borderRadius: 18,
        padding: 16,
        display: 'flex',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: tone === 'crisis' ? 'pulse-ring' : '',
      style: {
        width: 36,
        height: 36,
        borderRadius: 999,
        background: 'rgba(255,255,255,.18)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: t.icon,
      size: 20,
      color: "#FFFEFB"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 14
      }
    }, title), body && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        marginTop: 4,
        opacity: .92,
        lineHeight: 1.45
      }
    }, body), action && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10
      }
    }, action)));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: t.bg,
      color: t.fg,
      borderRadius: 16,
      padding: 14,
      display: 'flex',
      gap: 12,
      border: `1px solid ${t.fg}22`
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: t.icon,
    size: 20
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: 'var(--ink-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 13,
      color: t.fg
    }
  }, title), body && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      marginTop: 4,
      lineHeight: 1.45
    }
  }, body), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, action)));
}

// ─────────────────────────────────────────────────────────────
// Number stepper
// ─────────────────────────────────────────────────────────────
function Stepper({
  value,
  onChange,
  min = 0,
  max = 99,
  label,
  suffix
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "tap",
    onClick: () => onChange(Math.max(min, value - 1)),
    style: {
      width: 44,
      height: 44,
      borderRadius: 999,
      border: '1px solid var(--border)',
      background: 'var(--surface)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "minus",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "serif tnum",
    style: {
      fontSize: 44,
      lineHeight: 1
    }
  }, value, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      color: 'var(--muted)',
      marginLeft: 4
    }
  }, suffix)), label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--muted)',
      marginTop: 2
    }
  }, label)), /*#__PURE__*/React.createElement("button", {
    className: "tap",
    onClick: () => onChange(Math.min(max, value + 1)),
    style: {
      width: 44,
      height: 44,
      borderRadius: 999,
      border: '1px solid var(--hibiscus)',
      background: 'var(--hibiscus)',
      color: '#FFFEFB',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 18,
    color: "#FFFEFB"
  })));
}

// ─────────────────────────────────────────────────────────────
// Primary button
// ─────────────────────────────────────────────────────────────
function Button({
  children,
  onClick,
  variant = 'primary',
  icon,
  full,
  size = 'md',
  style
}) {
  const base = {
    border: 0,
    borderRadius: 14,
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    fontWeight: 600,
    letterSpacing: '.01em',
    width: full ? '100%' : 'auto',
    padding: size === 'sm' ? '8px 14px' : size === 'lg' ? '16px 22px' : '12px 18px',
    fontSize: size === 'sm' ? 12.5 : size === 'lg' ? 15 : 14,
    transition: 'transform .12s, background .15s'
  };
  const variants = {
    primary: {
      background: 'var(--hibiscus)',
      color: '#FFFEFB',
      boxShadow: '0 6px 16px rgba(155,45,63,.28)'
    },
    secondary: {
      background: 'var(--surface)',
      color: 'var(--ink)',
      border: '1px solid var(--border)'
    },
    sage: {
      background: 'var(--sage)',
      color: '#FFFEFB'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ink)'
    },
    danger: {
      background: 'var(--st-crisis)',
      color: '#FFFEFB'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    className: "tap",
    onClick: onClick,
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 16
  }), children);
}

// ─────────────────────────────────────────────────────────────
// Text input
// ─────────────────────────────────────────────────────────────
function Field({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  suffix,
  icon
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      minWidth: 0
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--ink-2)',
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '12px 10px',
      borderRadius: 14,
      background: 'var(--surface)',
      border: '1px solid var(--border-soft)',
      minWidth: 0
    }
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 16,
    color: "var(--muted)"
  }), /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    onChange: e => onChange(e.target.value),
    placeholder: placeholder,
    style: {
      flex: 1,
      border: 0,
      outline: 'none',
      background: 'transparent',
      fontSize: 14,
      color: 'var(--ink)',
      fontFamily: 'inherit',
      minWidth: 0,
      width: '100%'
    }
  }), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--muted)',
      flexShrink: 0
    }
  }, suffix)));
}

// ─────────────────────────────────────────────────────────────
// Image placeholder (subtly striped)
// ─────────────────────────────────────────────────────────────
function PlaceholderImg({
  label,
  height = 80,
  color = 'var(--terracotta-soft)'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      borderRadius: 14,
      backgroundImage: `repeating-linear-gradient(135deg, ${color} 0 12px, rgba(255,255,255,.5) 12px 24px)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px dashed rgba(199,110,74,.5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 10,
      color: 'var(--ink-2)',
      background: 'rgba(255,254,251,.85)',
      padding: '2px 8px',
      borderRadius: 6
    }
  }, label));
}

// ─────────────────────────────────────────────────────────────
// Toast
// ─────────────────────────────────────────────────────────────
function Toast({
  children,
  tone = 'success'
}) {
  const fg = tone === 'success' ? 'var(--st-normal)' : 'var(--hibiscus)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 70,
      left: 16,
      right: 16,
      zIndex: 50,
      background: 'var(--surface)',
      borderRadius: 14,
      padding: '12px 14px',
      boxShadow: '0 10px 28px rgba(0,0,0,.18)',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      animation: 'fadeUp .3s ease both'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 999,
      background: 'var(--st-normal-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    color: fg
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, children));
}
Object.assign(window, {
  Icon,
  classifyIMC,
  classifyTension,
  IMCGauge,
  IMCArcGauge,
  IMCBarGauge,
  IMCRingGauge,
  TensionIndicator,
  WaterRing,
  LineChart,
  BarChart,
  TabBar,
  SubHeader,
  Card,
  DateStrip,
  AlertBanner,
  Stepper,
  Button,
  Field,
  PlaceholderImg,
  Toast
});
"use strict";

/* global React, Icon, Card, Button, Field, AlertBanner */
const {
  useState: useStateAuth
} = React;
function OnboardingScreen({
  onComplete,
  onGoLogin
}) {
  const [step, setStep] = useStateAuth(0);
  const [data, setData] = useStateAuth({
    nombre: '',
    correo: '',
    password: '',
    sexo: 'F',
    edad: 32,
    peso: 68,
    altura: 1.65
  });
  const set = (k, v) => setData(d => ({
    ...d,
    [k]: v
  }));
  const next = () => {
    if (step < 2) setStep(step + 1);else onComplete(data);
  };
  const back = () => step > 0 ? setStep(step - 1) : null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px 16px',
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(180deg, var(--hibiscus-tint) 0%, var(--bg) 38%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: back,
    disabled: step === 0,
    style: {
      width: 36,
      height: 36,
      borderRadius: 999,
      border: 0,
      background: step === 0 ? 'transparent' : 'var(--surface)',
      color: step === 0 ? 'transparent' : 'var(--ink)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrowL",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: i === step ? 22 : 6,
      height: 6,
      borderRadius: 999,
      background: i <= step ? 'var(--hibiscus)' : 'var(--border)',
      transition: 'width .25s'
    }
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: onGoLogin,
    style: {
      border: 0,
      background: 'transparent',
      fontSize: 12,
      color: 'var(--muted)',
      fontWeight: 600
    }
  }, "Saltar")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(BrandMark, null), /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 30,
      lineHeight: 1.1,
      marginTop: 10,
      letterSpacing: '-.02em'
    }
  }, step === 0 && 'Bienvenida a Kardé', step === 1 && 'Cuéntanos de ti', step === 2 && 'Casi listo'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--muted)',
      marginTop: 6,
      maxWidth: 280,
      marginInline: 'auto',
      lineHeight: 1.4
    }
  }, step === 0 && 'Tu acompañante de hábitos cardiovasculares. Mide, observa y mejora.', step === 1 && 'Usaremos tus datos para personalizar tus mediciones y recomendaciones.', step === 2 && 'Crea tu acceso. Tus datos viven en tu dispositivo.')), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, step === 0 && /*#__PURE__*/React.createElement(Welcome, null), step === 1 && /*#__PURE__*/React.createElement(ProfileStep, {
    data: data,
    set: set
  }), step === 2 && /*#__PURE__*/React.createElement(CredentialsStep, {
    data: data,
    set: set
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, step === 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: 'var(--muted)',
      lineHeight: 1.5,
      marginBottom: 12,
      padding: '10px 12px',
      background: 'var(--surface-warm)',
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink-2)'
    }
  }, "Aviso m\xE9dico."), " Esta aplicaci\xF3n es una herramienta de seguimiento y no sustituye el diagn\xF3stico ni tratamiento m\xE9dico profesional. Ante cualquier emergencia, acuda a su m\xE9dico o a urgencias."), /*#__PURE__*/React.createElement(Button, {
    full: true,
    size: "lg",
    onClick: next
  }, step === 0 ? 'Empezar' : step === 2 ? 'Crear cuenta' : 'Continuar'), step === 0 && /*#__PURE__*/React.createElement("button", {
    onClick: onGoLogin,
    style: {
      border: 0,
      background: 'transparent',
      display: 'block',
      margin: '12px auto 0',
      color: 'var(--muted)',
      fontSize: 13
    }
  }, "\xBFYa tienes cuenta? ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--hibiscus)',
      fontWeight: 700
    }
  }, "Inicia sesi\xF3n"))));
}
function BrandMark() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      padding: '8px 14px',
      background: 'var(--surface)',
      borderRadius: 999,
      boxShadow: '0 6px 18px rgba(155,45,63,.10)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "Logo carde.png",
    alt: "Logo Kard\xE9",
    style: {
      width: 22,
      height: 22,
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      letterSpacing: '.04em'
    }
  }, "KARD\xC9", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--hibiscus)'
    }
  }, "\xB7"), "CONTROL"));
}
function Welcome() {
  const features = [{
    icon: 'heart',
    title: 'Tensión arterial',
    body: 'Registro guiado, clasificación AHA y alertas inteligentes.'
  }, {
    icon: 'scale',
    title: 'IMC visual',
    body: 'Gauge a color, evolución y recomendaciones personalizadas.'
  }, {
    icon: 'drop',
    title: 'Agua e infusiones',
    body: 'Cumple tu meta diaria. Recordatorios suaves.'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, features.map(f => /*#__PURE__*/React.createElement("div", {
    key: f.title,
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start',
      background: 'var(--surface)',
      padding: 14,
      borderRadius: 16,
      border: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 12,
      background: 'var(--hibiscus-tint)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--hibiscus)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: f.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14
    }
  }, f.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--muted)',
      marginTop: 2,
      lineHeight: 1.45
    }
  }, f.body)))));
}
function ProfileStep({
  data,
  set
}) {
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--ink-2)',
      marginBottom: 6
    }
  }, "Sexo"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, [{
    k: 'F',
    l: 'Femenino'
  }, {
    k: 'M',
    l: 'Masculino'
  }, {
    k: 'O',
    l: 'Otro'
  }].map(o => {
    const on = data.sexo === o.k;
    return /*#__PURE__*/React.createElement("button", {
      key: o.k,
      onClick: () => set('sexo', o.k),
      style: {
        flex: 1,
        padding: '10px 6px',
        border: on ? '1px solid var(--hibiscus)' : '1px solid var(--border)',
        background: on ? 'var(--hibiscus-tint)' : 'var(--surface-2)',
        borderRadius: 12,
        fontWeight: 600,
        fontSize: 13,
        color: on ? 'var(--hibiscus)' : 'var(--ink-2)',
        cursor: 'pointer'
      }
    }, o.l);
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Edad",
    value: data.edad,
    onChange: v => set('edad', Number(v) || 0),
    type: "number",
    suffix: "a\xF1os"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Peso",
    value: data.peso,
    onChange: v => set('peso', Number(v) || 0),
    type: "number",
    suffix: "kg"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Altura",
    value: data.altura,
    onChange: v => set('altura', Number(v) || 0),
    type: "number",
    suffix: "m"
  })));
}
function CredentialsStep({
  data,
  set
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Nombre",
    value: data.nombre,
    onChange: v => set('nombre', v),
    placeholder: "Ej. Ana L\xF3pez",
    icon: "user"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Correo electr\xF3nico",
    value: data.correo,
    onChange: v => set('correo', v),
    placeholder: "tu@correo.com",
    icon: "mail"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Contrase\xF1a",
    value: data.password,
    onChange: v => set('password', v),
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    type: "password",
    icon: "lock"
  }));
}
function LoginScreen({
  onLogin,
  onGoSignup
}) {
  const [email, setEmail] = useStateAuth('ana@karde.health');
  const [pass, setPass] = useStateAuth('');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(180deg, var(--hibiscus-tint) 0%, var(--bg) 40%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 40,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(BrandMark, null), /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 38,
      marginTop: 18,
      letterSpacing: '-.02em'
    }
  }, "Hola de nuevo"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--muted)',
      marginTop: 6
    }
  }, "Inicia sesi\xF3n para continuar")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Correo",
    value: email,
    onChange: setEmail,
    icon: "mail"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Contrase\xF1a",
    value: pass,
    onChange: setPass,
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    type: "password",
    icon: "lock"
  }), /*#__PURE__*/React.createElement("button", {
    style: {
      alignSelf: 'flex-end',
      border: 0,
      background: 'transparent',
      fontSize: 12,
      color: 'var(--hibiscus)',
      fontWeight: 600
    }
  }, "\xBFOlvidaste la contrase\xF1a?")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    full: true,
    size: "lg",
    onClick: () => onLogin({
      correo: email
    })
  }, "Entrar"), /*#__PURE__*/React.createElement("button", {
    onClick: onGoSignup,
    style: {
      border: 0,
      background: 'transparent',
      margin: '14px auto 0',
      color: 'var(--muted)',
      fontSize: 13
    }
  }, "\xBFNuevo en Kard\xE9? ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--hibiscus)',
      fontWeight: 700
    }
  }, "Crea tu cuenta")));
}
Object.assign(window, {
  OnboardingScreen,
  LoginScreen,
  BrandMark
});
"use strict";

/* global React, Icon, Card, Button, Field, AlertBanner, DateStrip, IMCGauge, TensionIndicator, WaterRing, LineChart, BarChart, classifyIMC, classifyTension, Stepper, PlaceholderImg */
const {
  useState: useStateMain,
  useMemo: useMemoMain
} = React;

// ─────────────────────────────────────────────────────────────
// DASHBOARD
// ─────────────────────────────────────────────────────────────
function DashboardScreen({
  user,
  state,
  go,
  layout = 'cards'
}) {
  const [selDate, setSelDate] = useStateMain(new Date().toDateString());
  const tCls = classifyTension(state.lastTension.sys, state.lastTension.dia);
  const iCls = classifyIMC(state.lastIMC);
  const greeting = (() => {
    const h = new Date().getHours();
    if (h < 12) return 'Buenos días';
    if (h < 19) return 'Buenas tardes';
    return 'Buenas noches';
  })();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 90,
      background: 'var(--bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "curve-bottom petal-bg",
    style: {
      background: 'linear-gradient(180deg, var(--surface-warm) 0%, var(--bg) 100%)',
      padding: '14px 18px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--muted)',
      letterSpacing: '.04em'
    }
  }, greeting), /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 28,
      lineHeight: 1.1,
      marginTop: 2,
      letterSpacing: '-.02em'
    }
  }, "Hola, ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--hibiscus)'
    }
  }, user.nombre.split(' ')[0]))), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('notifications'),
    style: {
      width: 40,
      height: 40,
      borderRadius: 999,
      background: 'var(--surface)',
      border: '1px solid var(--border-soft)',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 8,
      right: 9,
      width: 8,
      height: 8,
      borderRadius: 999,
      background: 'var(--hibiscus)',
      boxShadow: '0 0 0 2px var(--surface)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(DateStrip, {
    selected: selDate,
    onSelect: setSelDate,
    onOpenCalendar: () => go('calendar')
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 16px 0'
    }
  }, layout === 'hero' && /*#__PURE__*/React.createElement(HeroLayout, {
    state: state,
    go: go,
    tCls: tCls,
    iCls: iCls
  }), layout === 'cards' && /*#__PURE__*/React.createElement(CardsLayout, {
    state: state,
    go: go,
    tCls: tCls,
    iCls: iCls
  }), layout === 'stack' && /*#__PURE__*/React.createElement(StackLayout, {
    state: state,
    go: go,
    tCls: tCls,
    iCls: iCls
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 16px 0'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    title: "Hoy",
    subtitle: "Tu pulso diario"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 14,
      background: 'var(--sage-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--sage-deep)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lung",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 13.5
    }
  }, "3 minutos de respiraci\xF3n guiada"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--muted)',
      marginTop: 2
    }
  }, "Bajan la tensi\xF3n hasta 4 mmHg")), /*#__PURE__*/React.createElement(Icon, {
    name: "chevronR",
    size: 18,
    color: "var(--muted)"
  })), /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      padding: 14
    },
    onClick: () => go('health')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 14,
      background: 'var(--hibiscus-tint)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--hibiscus)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "leaf",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 13.5
    }
  }, "Tip cardiovascular"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--muted)',
      marginTop: 2
    }
  }, "El hibisco (jamaica) es rico en antioxidantes")), /*#__PURE__*/React.createElement(Icon, {
    name: "chevronR",
    size: 18,
    color: "var(--muted)"
  })))));
}
function SectionTitle({
  title,
  subtitle,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: 'var(--muted)',
      letterSpacing: '.14em',
      fontWeight: 700,
      textTransform: 'uppercase'
    }
  }, subtitle), /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 22,
      letterSpacing: '-.01em',
      marginTop: 2
    }
  }, title)), action);
}

// Layout A — hero tension + small cards
function HeroLayout({
  state,
  go,
  tCls,
  iCls
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => go('tension'),
    className: "tap",
    style: {
      background: 'var(--surface)',
      borderRadius: 22,
      padding: 18,
      border: '1px solid var(--border-soft)',
      boxShadow: '0 8px 24px rgba(110,70,40,.08)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -30,
      top: -30,
      width: 140,
      height: 140,
      borderRadius: 999,
      background: `radial-gradient(circle, ${state.lastTension.sys >= 140 ? 'var(--st-htn1-soft)' : 'var(--hibiscus-tint)'} 0%, transparent 70%)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 12,
      color: 'var(--muted)',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 14,
    color: "var(--hibiscus)"
  }), " TENSI\xD3N ARTERIAL"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevronR",
    size: 18,
    color: "var(--muted)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "serif tnum",
    style: {
      fontSize: 62,
      lineHeight: 1,
      letterSpacing: '-.02em'
    }
  }, state.lastTension.sys), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      color: 'var(--muted-2)'
    }
  }, "/"), /*#__PURE__*/React.createElement("span", {
    className: "serif tnum",
    style: {
      fontSize: 36,
      lineHeight: 1,
      color: 'var(--ink-2)'
    }
  }, state.lastTension.dia), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--muted)',
      marginLeft: 4
    }
  }, "mmHg")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      padding: '3px 10px',
      borderRadius: 999,
      background: tCls.soft,
      color: tCls.color,
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.04em'
    }
  }, tCls.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--muted)'
    }
  }, "hace 2h \xB7 pulso ", state.lastTension.pulse)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(TensionIndicator, {
    sys: state.lastTension.sys,
    dia: state.lastTension.dia
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(MiniCard, {
    onClick: () => go('imc'),
    icon: "scale",
    tint: "var(--sage-soft)",
    iconColor: "var(--sage-deep)",
    label: "IMC",
    value: state.lastIMC.toFixed(1),
    pillLabel: iCls.label,
    pillColor: iCls.color,
    pillBg: iCls.soft
  }), /*#__PURE__*/React.createElement(MiniCard, {
    onClick: () => go('water'),
    icon: "drop",
    tint: "#D5E8F0",
    iconColor: "#2F5C70",
    label: "AGUA HOY",
    value: state.water.value,
    suffix: `/${state.water.goal}`,
    extra: /*#__PURE__*/React.createElement(ProgressBar, {
      value: state.water.value / state.water.goal,
      color: "#2F5C70"
    })
  })));
}

// Layout B — equal cards grid
function CardsLayout({
  state,
  go,
  tCls,
  iCls
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(BigCard, {
    onClick: () => go('imc'),
    style: {
      gridColumn: 'span 2'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 11,
      color: 'var(--muted)',
      fontWeight: 700,
      letterSpacing: '.1em'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 14,
    color: "var(--hibiscus)"
  }), " TENSI\xD3N ARTERIAL"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevronR",
    size: 18,
    color: "var(--muted)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "serif tnum",
    style: {
      fontSize: 54,
      lineHeight: 1
    }
  }, state.lastTension.sys), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      color: 'var(--muted-2)'
    }
  }, "/"), /*#__PURE__*/React.createElement("span", {
    className: "serif tnum",
    style: {
      fontSize: 30,
      lineHeight: 1,
      color: 'var(--ink-2)'
    }
  }, state.lastTension.dia)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 11,
      color: 'var(--muted)'
    }
  }, "mmHg \xB7 pulso ", state.lastTension.pulse, " bpm"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '3px 10px',
      borderRadius: 999,
      background: tCls.soft,
      color: tCls.color,
      fontSize: 11,
      fontWeight: 700
    }
  }, tCls.label))), /*#__PURE__*/React.createElement(MiniSpark, {
    data: state.history.sys.slice(-7),
    color: "var(--hibiscus)"
  }))), /*#__PURE__*/React.createElement(BigCard, {
    onClick: () => go('imc')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 11,
      color: 'var(--muted)',
      fontWeight: 700,
      letterSpacing: '.1em'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "scale",
    size: 13,
    color: "var(--sage-deep)"
  }), " IMC"), /*#__PURE__*/React.createElement("div", {
    className: "serif tnum",
    style: {
      fontSize: 44,
      lineHeight: 1,
      marginTop: 8
    }
  }, state.lastIMC.toFixed(1)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      borderRadius: 999,
      background: iCls.soft,
      color: iCls.color,
      fontSize: 10.5,
      fontWeight: 700
    }
  }, iCls.label))), /*#__PURE__*/React.createElement(BigCard, {
    onClick: () => go('water')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 11,
      color: 'var(--muted)',
      fontWeight: 700,
      letterSpacing: '.1em'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "drop",
    size: 13,
    color: "#2F5C70"
  }), " AGUA HOY"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "serif tnum",
    style: {
      fontSize: 44,
      lineHeight: 1
    }
  }, state.water.value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      color: 'var(--muted)'
    }
  }, "/", state.water.goal)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    value: state.water.value / state.water.goal,
    color: "#2F5C70"
  }))));
}

// Layout C — stack with full bleed
function StackLayout({
  state,
  go,
  tCls,
  iCls
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(StackRow, {
    onClick: () => go('tension'),
    tint: "var(--hibiscus-tint)",
    color: "var(--hibiscus)",
    icon: "heart",
    label: "Tensi\xF3n arterial",
    status: tCls.label,
    statusColor: tCls.color
  }, /*#__PURE__*/React.createElement("span", {
    className: "serif tnum",
    style: {
      fontSize: 32
    }
  }, state.lastTension.sys, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--muted-2)',
      fontSize: 18
    }
  }, "/"), state.lastTension.dia)), /*#__PURE__*/React.createElement(StackRow, {
    onClick: () => go('imc'),
    tint: "var(--sage-soft)",
    color: "var(--sage-deep)",
    icon: "scale",
    label: "IMC",
    status: iCls.label,
    statusColor: iCls.color
  }, /*#__PURE__*/React.createElement("span", {
    className: "serif tnum",
    style: {
      fontSize: 32
    }
  }, state.lastIMC.toFixed(1))), /*#__PURE__*/React.createElement(StackRow, {
    onClick: () => go('water'),
    tint: "#D5E8F0",
    color: "#2F5C70",
    icon: "drop",
    label: "Agua hoy",
    status: `${Math.round(state.water.value / state.water.goal * 100)}%`,
    statusColor: "#2F5C70"
  }, /*#__PURE__*/React.createElement("span", {
    className: "serif tnum",
    style: {
      fontSize: 32
    }
  }, state.water.value, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--muted-2)',
      fontSize: 18
    }
  }, "/", state.water.goal))));
}
function StackRow({
  onClick,
  tint,
  color,
  icon,
  label,
  status,
  statusColor,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tap",
    onClick: onClick,
    style: {
      background: 'var(--surface)',
      borderRadius: 18,
      padding: '14px 16px',
      border: '1px solid var(--border-soft)',
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 50,
      height: 50,
      borderRadius: 16,
      background: tint,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--muted)',
      fontWeight: 600,
      letterSpacing: '.04em'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2
    }
  }, children)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '3px 10px',
      borderRadius: 999,
      background: 'var(--surface-2)',
      color: statusColor,
      fontSize: 11,
      fontWeight: 700
    }
  }, status)));
}
function MiniCard({
  onClick,
  icon,
  tint,
  iconColor,
  label,
  value,
  suffix,
  extra,
  pillLabel,
  pillColor,
  pillBg
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tap",
    onClick: onClick,
    style: {
      background: 'var(--surface)',
      borderRadius: 22,
      padding: 16,
      border: '1px solid var(--border-soft)',
      boxShadow: '0 6px 16px rgba(110,70,40,.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 10,
      background: tint,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: iconColor
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 16
  })), /*#__PURE__*/React.createElement(Icon, {
    name: "chevronR",
    size: 14,
    color: "var(--muted)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--muted)',
      fontWeight: 700,
      letterSpacing: '.08em',
      marginTop: 10
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "serif tnum",
    style: {
      fontSize: 30,
      lineHeight: 1
    }
  }, value), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--muted)'
    }
  }, suffix)), pillLabel && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      borderRadius: 999,
      background: pillBg,
      color: pillColor,
      fontSize: 10.5,
      fontWeight: 700
    }
  }, pillLabel)), extra && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, extra));
}
function BigCard({
  children,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tap",
    onClick: onClick,
    style: {
      background: 'var(--surface)',
      borderRadius: 20,
      padding: 16,
      border: '1px solid var(--border-soft)',
      boxShadow: '0 6px 16px rgba(110,70,40,.06)',
      ...style
    }
  }, children);
}
function ProgressBar({
  value = 0,
  color = 'var(--hibiscus)'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      borderRadius: 999,
      background: 'var(--bg-deep)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `${Math.min(100, value * 100)}%`,
      background: color,
      borderRadius: 999,
      transition: 'width .35s'
    }
  }));
}
function MiniSpark({
  data,
  color
}) {
  if (!data || data.length === 0) return null;
  const w = 90,
    h = 50;
  const mn = Math.min(...data),
    mx = Math.max(...data);
  const range = Math.max(1, mx - mn);
  const path = data.map((v, i) => {
    const x = i / (data.length - 1) * (w - 4) + 2;
    const y = h - 4 - (v - mn) / range * (h - 8);
    return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(' ');
  return /*#__PURE__*/React.createElement("svg", {
    width: w,
    height: h
  }, /*#__PURE__*/React.createElement("path", {
    d: path + ` L ${w - 2} ${h} L 2 ${h} Z`,
    fill: color,
    fillOpacity: "0.1"
  }), /*#__PURE__*/React.createElement("path", {
    d: path,
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round"
  }));
}
Object.assign(window, {
  DashboardScreen,
  MiniSpark,
  SectionTitle,
  ProgressBar
});
"use strict";

/* global React, Icon, Card, Button, Field, AlertBanner, LineChart, BarChart, classifyTension, SubHeader, SectionTitle, ProgressBar */
const {
  useState: useStateM4
} = React;

// ─────────────────────────────────────────────────────────────
// HISTORY SCREEN
// ─────────────────────────────────────────────────────────────
function HistoryScreen({
  state,
  go
}) {
  const [period, setPeriod] = useStateM4('week');
  const [metric, setMetric] = useStateM4('tension');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 90,
      background: 'var(--bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px 10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 28,
      letterSpacing: '-.02em'
    }
  }, "Historial"), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 12,
      background: 'var(--surface)',
      border: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      background: 'var(--surface)',
      borderRadius: 12,
      padding: 4,
      border: '1px solid var(--border-soft)'
    }
  }, [{
    k: 'day',
    l: 'Día'
  }, {
    k: 'week',
    l: 'Semana'
  }, {
    k: 'month',
    l: 'Mes'
  }, {
    k: 'year',
    l: 'Año'
  }].map(p => /*#__PURE__*/React.createElement("button", {
    key: p.k,
    onClick: () => setPeriod(p.k),
    style: {
      flex: 1,
      padding: '9px 0',
      border: 0,
      background: period === p.k ? 'var(--hibiscus)' : 'transparent',
      color: period === p.k ? '#FFFEFB' : 'var(--ink-2)',
      borderRadius: 10,
      fontWeight: 600,
      fontSize: 12.5
    }
  }, p.l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 14,
      overflowX: 'auto'
    },
    className: "hscroll"
  }, [{
    k: 'tension',
    l: 'Tensión',
    i: 'heart',
    c: 'var(--hibiscus)'
  }, {
    k: 'imc',
    l: 'IMC',
    i: 'scale',
    c: 'var(--sage-deep)'
  }, {
    k: 'water',
    l: 'Agua',
    i: 'drop',
    c: '#2F5C70'
  }, {
    k: 'pulse',
    l: 'Pulso',
    i: 'pulse',
    c: 'var(--terracotta)'
  }].map(m => {
    const on = metric === m.k;
    return /*#__PURE__*/React.createElement("button", {
      key: m.k,
      onClick: () => setMetric(m.k),
      style: {
        padding: '8px 14px',
        borderRadius: 999,
        border: 'none',
        background: on ? m.c : 'var(--surface)',
        color: on ? '#FFFEFB' : 'var(--ink-2)',
        fontSize: 12.5,
        fontWeight: 600,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        whiteSpace: 'nowrap',
        flexShrink: 0,
        border: on ? 'none' : '1px solid var(--border-soft)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: m.i,
      size: 14,
      color: on ? '#FFFEFB' : m.c
    }), " ", m.l);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, metric === 'tension' && /*#__PURE__*/React.createElement(TensionHistory, {
    state: state,
    period: period
  }), metric === 'imc' && /*#__PURE__*/React.createElement(IMCHistory, {
    state: state
  }), metric === 'water' && /*#__PURE__*/React.createElement(WaterHistory, {
    state: state
  }), metric === 'pulse' && /*#__PURE__*/React.createElement(PulseHistory, {
    state: state
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    subtitle: "Detalle",
    title: "Mediciones recientes"
  }), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 0
    }
  }, state.history.records.map((r, i, arr) => {
    const cls = classifyTension(r.sys, r.dia);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '14px',
        borderBottom: i < arr.length - 1 ? '1px solid var(--border-soft)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 44,
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "serif tnum",
      style: {
        fontSize: 18,
        lineHeight: 1,
        color: 'var(--hibiscus)'
      }
    }, r.day), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9,
        color: 'var(--muted)',
        letterSpacing: '.08em',
        fontWeight: 700
      }
    }, r.month)), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 4,
        height: 36,
        borderRadius: 4,
        background: cls.color
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 14
      },
      className: "tnum"
    }, r.sys, "/", r.dia, " mmHg"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--muted)'
      }
    }, r.when, " \xB7 ", r.pulse, " bpm")), /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '2px 8px',
        borderRadius: 999,
        background: cls.soft,
        color: cls.color,
        fontSize: 10.5,
        fontWeight: 700
      }
    }, cls.short));
  })))));
}
function TensionHistory({
  state,
  period
}) {
  if (period === 'day') return /*#__PURE__*/React.createElement(TensionDayView, {
    state: state
  });
  if (period === 'week') return /*#__PURE__*/React.createElement(TensionWeekView, {
    state: state
  });
  if (period === 'month') return /*#__PURE__*/React.createElement(TensionMonthView, {
    state: state
  });
  if (period === 'year') return /*#__PURE__*/React.createElement(TensionYearView, {
    state: state
  });
  return null;
}
function TensionDayView({
  state
}) {
  const sys = state.lastTension.sys;
  const dia = state.lastTension.dia;
  const tCls = classifyTension(sys, dia);
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 11,
      color: 'var(--muted)',
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 14,
    color: "var(--hibiscus)"
  }), " TENSI\xD3N ARTERIAL"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevronR",
    size: 16,
    color: "var(--muted-2)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "serif tnum",
    style: {
      fontSize: 64,
      lineHeight: 1,
      letterSpacing: '-.02em'
    }
  }, sys), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24,
      color: 'var(--muted-2)'
    }
  }, "/"), /*#__PURE__*/React.createElement("span", {
    className: "serif tnum",
    style: {
      fontSize: 40,
      lineHeight: 1,
      color: 'var(--ink-2)',
      letterSpacing: '-.02em'
    }
  }, dia), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--muted)',
      marginLeft: 4
    }
  }, "mmHg")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 14,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '4px 12px',
      borderRadius: 999,
      background: tCls.soft,
      color: tCls.color,
      fontSize: 12,
      fontWeight: 700
    }
  }, tCls.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--muted)'
    }
  }, "hace 2h \xB7 pulso ", state.lastTension.pulse)), /*#__PURE__*/React.createElement(TensionIndicator, {
    sys: sys,
    dia: dia
  }));
}
function TensionWeekView({
  state
}) {
  const sys = state.history.sys;
  const dia = state.history.dia;
  const avgS = Math.round(sys.reduce((a, b) => a + b, 0) / sys.length);
  const avgD = Math.round(dia.reduce((a, b) => a + b, 0) / dia.length);
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--muted)',
      letterSpacing: '.1em',
      fontWeight: 700
    }
  }, "PROMEDIO"), /*#__PURE__*/React.createElement("div", {
    className: "serif tnum",
    style: {
      fontSize: 38,
      lineHeight: 1,
      marginTop: 2
    }
  }, avgS, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--muted-2)',
      fontSize: 22
    }
  }, "/"), avgD), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--muted)',
      marginTop: 2
    }
  }, "mmHg \xB7 14 lecturas")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      padding: '3px 8px',
      borderRadius: 999,
      background: 'var(--st-normal-soft)',
      color: 'var(--st-normal)',
      fontSize: 11,
      fontWeight: 700
    }
  }, "\u2193 4 mmHg"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: 'var(--muted)',
      marginTop: 4
    }
  }, "vs. semana previa"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 12,
      fontSize: 11
    }
  }, /*#__PURE__*/React.createElement(Legend2, {
    color: "var(--hibiscus)",
    label: "Sist\xF3lica"
  }), /*#__PURE__*/React.createElement(Legend2, {
    color: "var(--sage-deep)",
    label: "Diast\xF3lica"
  })), /*#__PURE__*/React.createElement(LineChart, {
    series: [{
      data: sys,
      color: 'var(--hibiscus)'
    }, {
      data: dia,
      color: 'var(--sage-deep)'
    }],
    width: 320,
    height: 180,
    yMin: 60,
    yMax: 160,
    fill: true,
    labels: ['L', 'M', 'X', 'J', 'V', 'S', 'D']
  }));
}
function TensionMonthView({
  state
}) {
  const sysData = Array.from({
    length: 30
  }, (_, i) => 120 + Math.sin(i) * 15 + Math.random() * 10);
  const diaData = Array.from({
    length: 30
  }, (_, i) => 80 + Math.sin(i) * 5 + Math.random() * 5);
  const labels = Array.from({
    length: 30
  }, (_, i) => (i + 1).toString());
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--muted)',
      letterSpacing: '.1em',
      fontWeight: 700
    }
  }, "PROMEDIO MENSUAL"), /*#__PURE__*/React.createElement("div", {
    className: "serif tnum",
    style: {
      fontSize: 38,
      lineHeight: 1,
      marginTop: 2
    }
  }, "131", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--muted-2)',
      fontSize: 22
    }
  }, "/"), "85")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("select", {
    style: {
      background: 'var(--surface-2)',
      border: '1px solid var(--border-soft)',
      borderRadius: 8,
      padding: '4px 8px',
      fontSize: 12,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("option", null, "Octubre"), /*#__PURE__*/React.createElement("option", null, "Septiembre")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 12,
      fontSize: 11,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Legend2, {
    color: "var(--hibiscus)",
    label: "Sist\xF3lica"
  }), /*#__PURE__*/React.createElement(Legend2, {
    color: "var(--sage-deep)",
    label: "Diast\xF3lica"
  }), /*#__PURE__*/React.createElement(Legend2, {
    color: "var(--hibiscus-tint)",
    label: "(max-to-min)"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hscroll",
    style: {
      overflowX: 'auto',
      marginTop: 16,
      paddingBottom: 8,
      marginLeft: -16,
      marginRight: -16,
      paddingLeft: 16,
      paddingRight: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800
    }
  }, /*#__PURE__*/React.createElement(MonthChart, {
    sys: sysData,
    dia: diaData,
    labels: labels
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Lecturas",
    value: "58",
    suffix: "",
    icon: "file"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Picos altos",
    value: "3",
    suffix: "d\xEDas",
    icon: "alert"
  })), /*#__PURE__*/React.createElement(SectionPad2, null, /*#__PURE__*/React.createElement(SectionTitle, {
    title: "Calendario de Tendencias",
    subtitle: "Matriz"
  }), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(Heatmap, null))));
}
function MonthChart({
  sys,
  dia,
  labels
}) {
  const w = 800,
    h = 180,
    mn = 60,
    mx = 160;
  const pad = {
    l: 28,
    r: 16,
    t: 8,
    b: 24
  };
  const cw = w - pad.l - pad.r;
  const ch = h - pad.t - pad.b;
  const xAt = i => pad.l + i / 29 * cw;
  const yAt = v => pad.t + Math.max(0, Math.min(1, 1 - (v - mn) / (mx - mn))) * ch;
  const path = data => data.map((v, i) => `${i === 0 ? 'M' : 'L'} ${xAt(i)} ${yAt(v)}`).join(' ');
  const bandArea = sys.map((v, i) => `${i === 0 ? 'M' : 'L'} ${xAt(i)} ${yAt(v + 12)}`).join(' ') + ' ' + sys.map((v, i) => `L ${xAt(29 - i)} ${yAt(sys[29 - i] - 12)}`).join(' ') + ' Z';
  const ticks = [60, 80, 120, 160];
  return /*#__PURE__*/React.createElement("svg", {
    width: w,
    height: h
  }, ticks.map(t => /*#__PURE__*/React.createElement("g", {
    key: t
  }, /*#__PURE__*/React.createElement("line", {
    x1: pad.l,
    x2: w - pad.r,
    y1: yAt(t),
    y2: yAt(t),
    stroke: "#EFE3CF",
    strokeDasharray: "2 4"
  }), /*#__PURE__*/React.createElement("text", {
    x: pad.l - 4,
    y: yAt(t),
    fontSize: "9",
    fill: "#8A7969",
    textAnchor: "end",
    dominantBaseline: "middle"
  }, t))), /*#__PURE__*/React.createElement("path", {
    d: bandArea,
    fill: "var(--hibiscus-tint)",
    opacity: "0.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: path(sys),
    fill: "none",
    stroke: "var(--hibiscus)",
    strokeWidth: "2",
    strokeLinecap: "round"
  }), sys.map((v, i) => /*#__PURE__*/React.createElement("circle", {
    key: `s${i}`,
    cx: xAt(i),
    cy: yAt(v),
    r: "3",
    fill: "#FFFEFB",
    stroke: "var(--hibiscus)",
    strokeWidth: "1.5"
  })), /*#__PURE__*/React.createElement("path", {
    d: path(dia),
    fill: "none",
    stroke: "var(--sage-deep)",
    strokeWidth: "2",
    strokeLinecap: "round"
  }), dia.map((v, i) => /*#__PURE__*/React.createElement("circle", {
    key: `d${i}`,
    cx: xAt(i),
    cy: yAt(v),
    r: "3",
    fill: "#FFFEFB",
    stroke: "var(--sage-deep)",
    strokeWidth: "1.5"
  })), labels.map((l, i) => /*#__PURE__*/React.createElement("text", {
    key: i,
    x: xAt(i),
    y: h - 4,
    fontSize: "9",
    fill: "#8A7969",
    textAnchor: "middle"
  }, l)));
}
function Heatmap() {
  const months = ['Oct', 'Sep', 'Ago'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, months.map(m => /*#__PURE__*/React.createElement("div", {
    key: m,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      fontSize: 10,
      fontWeight: 700,
      color: 'var(--muted)'
    }
  }, m), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      flex: 1
    }
  }, Array.from({
    length: 31
  }).map((_, i) => {
    const rnd = Math.random();
    const bg = rnd > 0.9 ? 'var(--st-htn1)' : rnd > 0.7 ? 'var(--st-elevated)' : 'var(--st-normal)';
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        flex: 1,
        height: 12,
        borderRadius: 2,
        background: bg
      }
    });
  })))));
}
function TensionYearView({
  state
}) {
  const sysAvg = [115, 118, 122, 125, 131, 135, 130, 128, 125, 122, 120, 118];
  const diaAvg = [75, 78, 80, 82, 85, 88, 85, 84, 80, 78, 76, 75];
  const labels = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--muted)',
      letterSpacing: '.1em',
      fontWeight: 700,
      textTransform: 'uppercase'
    }
  }, "MACRO-TREND LINE CHART - Mensuales promedios"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(MacroTrendChart, {
    sys: sysAvg,
    dia: diaAvg,
    labels: labels
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: '14px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 12,
      background: 'var(--st-normal-soft)',
      color: 'var(--st-normal)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700
    }
  }, "D\xEDas en rango saludable"), /*#__PURE__*/React.createElement("div", {
    className: "serif tnum",
    style: {
      fontSize: 22,
      fontWeight: 800,
      marginTop: 2
    }
  }, "78%"))), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: '14px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 12,
      background: 'var(--sage-soft)',
      color: 'var(--sage-deep)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: 18
    }
  }, "\u03A3"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700
    }
  }, "Desviaci\xF3n Est\xE1ndar"), /*#__PURE__*/React.createElement("div", {
    className: "serif tnum",
    style: {
      fontSize: 22,
      fontWeight: 800,
      marginTop: 2
    }
  }, "6 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--muted)'
    }
  }, "mmHg")))), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: '14px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 12,
      background: 'var(--st-htn1-soft)',
      color: 'var(--st-htn1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrowL",
    size: 20,
    style: {
      transform: 'rotate(90deg)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700
    }
  }, "Comparativa Anual"), /*#__PURE__*/React.createElement("div", {
    className: "serif tnum",
    style: {
      fontSize: 22,
      fontWeight: 800,
      marginTop: 2
    }
  }, "+2 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--muted)'
    }
  }, "mmHg vs. a\xF1o anterior"))))));
}
function MacroTrendChart({
  sys,
  dia,
  labels
}) {
  const w = 320,
    h = 200,
    mn = 60,
    mx = 160;
  const pad = {
    l: 28,
    r: 8,
    t: 8,
    b: 24
  };
  const cw = w - pad.l - pad.r;
  const ch = h - pad.t - pad.b;
  const xAt = i => pad.l + i / 11 * cw;
  const yAt = v => pad.t + Math.max(0, Math.min(1, 1 - (v - mn) / (mx - mn))) * ch;
  const path = data => data.map((v, i) => `${i === 0 ? 'M' : 'L'} ${xAt(i)} ${yAt(v)}`).join(' ');
  const y130 = yAt(130);
  const hRed = y130 - pad.t;
  const y110 = yAt(110);
  const hYellow = y110 - y130;
  const y60 = yAt(60);
  const hGreen = y60 - y110;
  const ticks = [60, 70, 110, 130, 150];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto',
      marginLeft: -16,
      marginRight: -16,
      paddingLeft: 16,
      paddingRight: 16
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: w,
    height: h
  }, /*#__PURE__*/React.createElement("rect", {
    x: pad.l,
    y: pad.t,
    width: cw,
    height: Math.max(0, hRed),
    fill: "var(--st-crisis-soft)",
    opacity: "0.4"
  }), /*#__PURE__*/React.createElement("rect", {
    x: pad.l,
    y: y130,
    width: cw,
    height: Math.max(0, hYellow),
    fill: "var(--st-elevated-soft)",
    opacity: "0.4"
  }), /*#__PURE__*/React.createElement("rect", {
    x: pad.l,
    y: y110,
    width: cw,
    height: Math.max(0, hGreen),
    fill: "var(--st-normal-soft)",
    opacity: "0.4"
  }), ticks.map(t => /*#__PURE__*/React.createElement("g", {
    key: t
  }, /*#__PURE__*/React.createElement("line", {
    x1: pad.l,
    x2: w - pad.r,
    y1: yAt(t),
    y2: yAt(t),
    stroke: "#EFE3CF",
    strokeDasharray: "2 4"
  }), /*#__PURE__*/React.createElement("text", {
    x: pad.l - 4,
    y: yAt(t),
    fontSize: "9",
    fill: "#8A7969",
    textAnchor: "end",
    dominantBaseline: "middle"
  }, t))), labels.map((l, i) => /*#__PURE__*/React.createElement("text", {
    key: i,
    x: xAt(i),
    y: h - 4,
    fontSize: "9",
    fill: "#8A7969",
    textAnchor: "middle"
  }, l)), /*#__PURE__*/React.createElement("path", {
    d: path(sys),
    fill: "none",
    stroke: "var(--hibiscus)",
    strokeWidth: "2",
    strokeLinecap: "round"
  }), sys.map((v, i) => /*#__PURE__*/React.createElement("circle", {
    key: `s${i}`,
    cx: xAt(i),
    cy: yAt(v),
    r: "3",
    fill: "#FFFEFB",
    stroke: "var(--hibiscus)",
    strokeWidth: "1.5"
  })), /*#__PURE__*/React.createElement("path", {
    d: path(dia),
    fill: "none",
    stroke: "var(--sage-deep)",
    strokeWidth: "2",
    strokeLinecap: "round"
  }), dia.map((v, i) => /*#__PURE__*/React.createElement("circle", {
    key: `d${i}`,
    cx: xAt(i),
    cy: yAt(v),
    r: "3",
    fill: "#FFFEFB",
    stroke: "var(--sage-deep)",
    strokeWidth: "1.5"
  }))));
}
function IMCHistory({
  state
}) {
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--muted)',
      letterSpacing: '.1em',
      fontWeight: 700
    }
  }, "ACTUAL"), /*#__PURE__*/React.createElement("div", {
    className: "serif tnum",
    style: {
      fontSize: 38,
      marginTop: 2
    }
  }, state.lastIMC.toFixed(1)), /*#__PURE__*/React.createElement(LineChart, {
    series: [{
      data: state.history.imc,
      color: 'var(--hibiscus)'
    }],
    width: 320,
    height: 160,
    fill: true
  }));
}
function WaterHistory({
  state
}) {
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--muted)',
      letterSpacing: '.1em',
      fontWeight: 700
    }
  }, "PROMEDIO SEMANAL"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "serif tnum",
    style: {
      fontSize: 38,
      marginTop: 2
    }
  }, (state.history.water.reduce((a, b) => a + b, 0) / 7).toFixed(1)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--muted)'
    }
  }, "vasos/d\xEDa")), /*#__PURE__*/React.createElement(BarChart, {
    data: state.history.water,
    labels: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
    width: 320,
    height: 140,
    color: "#2F5C70",
    goal: 8
  }));
}
function PulseHistory({
  state
}) {
  const data = state.history.records.map(r => r.pulse).reverse();
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--muted)',
      letterSpacing: '.1em',
      fontWeight: 700
    }
  }, "PULSO PROMEDIO"), /*#__PURE__*/React.createElement("div", {
    className: "serif tnum",
    style: {
      fontSize: 38,
      marginTop: 2
    }
  }, Math.round(data.reduce((a, b) => a + b, 0) / data.length), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--muted)',
      marginLeft: 4
    }
  }, "bpm")), /*#__PURE__*/React.createElement(LineChart, {
    series: [{
      data,
      color: 'var(--terracotta)'
    }],
    width: 320,
    height: 160,
    fill: true
  }));
}
function Legend2({
  color,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      color: 'var(--ink-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 3,
      borderRadius: 999,
      background: color
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, label));
}

// ─────────────────────────────────────────────────────────────
// PROFILE SCREEN
// ─────────────────────────────────────────────────────────────
function ProfileScreen({
  state,
  user,
  setUser,
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 90,
      background: 'var(--bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "curve-bottom petal-bg",
    style: {
      background: 'linear-gradient(180deg, var(--hibiscus-tint) 0%, var(--bg) 100%)',
      padding: '20px 16px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 28,
      letterSpacing: '-.02em'
    }
  }, "Perfil"), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 12,
      background: 'var(--surface)',
      border: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "settings",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 22,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      borderRadius: 999,
      background: 'radial-gradient(circle at 30% 30%, #F4D5DA, #C03A4D)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#FFFEFB',
      fontSize: 26,
      fontWeight: 700,
      boxShadow: '0 8px 20px rgba(155,45,63,.25)'
    }
  }, user.nombre.split(' ').map(w => w[0]).slice(0, 2).join('')), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 22,
      letterSpacing: '-.01em'
    }
  }, user.nombre), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--muted)',
      marginTop: 2
    }
  }, user.correo), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Tag, null, user.edad, " a\xF1os"), /*#__PURE__*/React.createElement(Tag, null, user.peso, " kg"), /*#__PURE__*/React.createElement(Tag, null, user.altura, " m"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 10,
      marginTop: -16
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Mediciones",
    value: state.history.records.length + 12
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Racha",
    value: "7",
    suffix: "d\xEDas"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Adherencia",
    value: "86",
    suffix: "%"
  })), /*#__PURE__*/React.createElement(SectionPad2, null, /*#__PURE__*/React.createElement(SectionTitle, {
    subtitle: "Informaci\xF3n",
    title: "Datos personales",
    action: /*#__PURE__*/React.createElement("button", {
      style: {
        border: 0,
        background: 'transparent',
        color: 'var(--hibiscus)',
        fontWeight: 700,
        fontSize: 12
      }
    }, "Editar")
  }), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Row, {
    label: "Nombre",
    value: user.nombre
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Correo",
    value: user.correo
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Sexo",
    value: {
      F: 'Femenino',
      M: 'Masculino',
      O: 'Otro'
    }[user.sexo] || 'Otro'
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Edad",
    value: `${user.edad} años`
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Peso",
    value: `${user.peso} kg`
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Altura",
    value: `${user.altura} m`
  }))), /*#__PURE__*/React.createElement(SectionPad2, null, /*#__PURE__*/React.createElement(SectionTitle, {
    subtitle: "Frecuencia",
    title: "Recordatorios"
  }), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(ReminderRow, {
    icon: "heart",
    tint: "var(--hibiscus-tint)",
    color: "var(--hibiscus)",
    title: "Tensi\xF3n arterial",
    sub: "Lun \xB7 Mi\xE9 \xB7 Vie a las 8:00",
    toggle: true
  }), /*#__PURE__*/React.createElement(ReminderRow, {
    icon: "scale",
    tint: "var(--sage-soft)",
    color: "var(--sage-deep)",
    title: "Peso e IMC",
    sub: "Lunes 8:00",
    toggle: true
  }), /*#__PURE__*/React.createElement(ReminderRow, {
    icon: "drop",
    tint: "#D5E8F0",
    color: "#2F5C70",
    title: "Agua",
    sub: "Cada 2 horas \xB7 8:00-22:00",
    toggle: true
  }), /*#__PURE__*/React.createElement(ReminderRow, {
    icon: "leaf",
    tint: "var(--hibiscus-tint)",
    color: "var(--hibiscus)",
    title: "Infusi\xF3n de jamaica",
    sub: "14:00",
    toggle: false
  }))), /*#__PURE__*/React.createElement(SectionPad2, null, /*#__PURE__*/React.createElement(SectionTitle, {
    subtitle: "Ajustes m\xE9dicos",
    title: "Plan de medici\xF3n"
  }), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-2)',
      lineHeight: 1.5
    }
  }, "Seg\xFAn las gu\xEDas de la ", /*#__PURE__*/React.createElement("strong", null, "AHA"), ", mides tu tensi\xF3n ", /*#__PURE__*/React.createElement("strong", null, "3 veces por semana"), ". \xBFTienes hipertensi\xF3n diagnosticada?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      flex: 1,
      padding: '10px',
      border: '1px solid var(--border)',
      background: 'var(--surface)',
      borderRadius: 10,
      fontWeight: 600,
      fontSize: 12.5
    }
  }, "No"), /*#__PURE__*/React.createElement("button", {
    style: {
      flex: 1,
      padding: '10px',
      border: '1px solid var(--hibiscus)',
      background: 'var(--hibiscus-tint)',
      color: 'var(--hibiscus)',
      borderRadius: 10,
      fontWeight: 700,
      fontSize: 12.5
    }
  }, "S\xED \u2014 pasar a 2x/d\xEDa")))), /*#__PURE__*/React.createElement(SectionPad2, null, /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(MenuRow, {
    icon: "info",
    label: "Aviso m\xE9dico y privacidad"
  }), /*#__PURE__*/React.createElement(MenuRow, {
    icon: "sparkle",
    label: "Sobre Kard\xE9"
  }), /*#__PURE__*/React.createElement(MenuRow, {
    icon: "logout",
    label: "Cerrar sesi\xF3n",
    danger: true,
    onClick: () => go('login')
  })))));
}
function Tag({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '3px 9px',
      background: 'var(--surface)',
      borderRadius: 999,
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      border: '1px solid var(--border-soft)'
    }
  }, children);
}
function SectionPad2({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, children);
}
function StatCard({
  label,
  value,
  suffix
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface)',
      borderRadius: 16,
      padding: '12px 10px',
      textAlign: 'center',
      border: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "serif tnum",
    style: {
      fontSize: 26,
      lineHeight: 1
    }
  }, value, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--muted)',
      marginLeft: 2
    }
  }, suffix)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: 'var(--muted)',
      marginTop: 2,
      fontWeight: 600,
      letterSpacing: '.06em',
      textTransform: 'uppercase'
    }
  }, label));
}
function Row({
  label,
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 14px',
      borderBottom: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--muted)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      fontWeight: 600
    }
  }, value));
}
function ReminderRow({
  icon,
  tint,
  color,
  title,
  sub,
  toggle
}) {
  const [on, setOn] = useStateM4(!!toggle);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 14px',
      borderBottom: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 12,
      background: tint,
      color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 13.5
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--muted)',
      marginTop: 2
    }
  }, sub)), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOn(!on),
    style: {
      width: 44,
      height: 26,
      borderRadius: 999,
      border: 0,
      background: on ? 'var(--hibiscus)' : 'var(--bg-deep)',
      position: 'relative',
      padding: 0,
      transition: 'background .2s'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: on ? 21 : 3,
      width: 20,
      height: 20,
      borderRadius: 999,
      background: '#FFFEFB',
      boxShadow: '0 2px 4px rgba(0,0,0,.18)',
      transition: 'left .2s'
    }
  })));
}
function MenuRow({
  icon,
  label,
  danger,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    className: "tap",
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '14px',
      border: 0,
      background: 'transparent',
      textAlign: 'left',
      color: danger ? 'var(--st-crisis)' : 'var(--ink)',
      borderBottom: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontWeight: 600,
      fontSize: 13.5
    }
  }, label), /*#__PURE__*/React.createElement(Icon, {
    name: "chevronR",
    size: 16,
    color: "var(--muted)"
  }));
}

// ─────────────────────────────────────────────────────────────
// NOTIFICATIONS DROPDOWN (small modal)
// ─────────────────────────────────────────────────────────────
function NotificationsScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 90,
      background: 'var(--bg)'
    }
  }, /*#__PURE__*/React.createElement(SubHeader, {
    title: "Notificaciones",
    onBack: () => go('home')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 16px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Notif, {
    tone: "crisis",
    icon: "alert",
    title: "Crisis hipertensiva detectada",
    body: "Tu \xFAltima medici\xF3n fue 185/115. Consulta un m\xE9dico.",
    when: "hace 5 min",
    unread: true
  }), /*#__PURE__*/React.createElement(Notif, {
    tone: "warn",
    icon: "bell",
    title: "Tu medici\xF3n de tensi\xF3n est\xE1 pendiente",
    body: "Hoy es mi\xE9rcoles \u2014 \xBFtomamos tu lectura?",
    when: "hace 1 h"
  }), /*#__PURE__*/React.createElement(Notif, {
    tone: "info",
    icon: "drop",
    title: "\xA1Buen trabajo con el agua!",
    body: "Vas en 6 de 8 vasos.",
    when: "hace 3 h"
  }), /*#__PURE__*/React.createElement(Notif, {
    tone: "success",
    icon: "check",
    title: "Resumen semanal",
    body: "Promedio: 124/82. Tendencia a la baja.",
    when: "ayer"
  }), /*#__PURE__*/React.createElement(Notif, {
    tone: "hibiscus",
    icon: "leaf",
    title: "Tu infusi\xF3n de la tarde",
    body: "Tip: prep\xE1rala fr\xEDa con un toque de canela.",
    when: "ayer"
  })));
}
function Notif({
  tone,
  icon,
  title,
  body,
  when,
  unread
}) {
  const tones = {
    crisis: {
      bg: 'var(--st-crisis-soft)',
      fg: 'var(--st-crisis)'
    },
    warn: {
      bg: 'var(--st-elevated-soft)',
      fg: 'var(--st-elevated)'
    },
    info: {
      bg: 'var(--sage-soft)',
      fg: 'var(--sage-deep)'
    },
    success: {
      bg: 'var(--st-normal-soft)',
      fg: 'var(--st-normal)'
    },
    hibiscus: {
      bg: 'var(--hibiscus-tint)',
      fg: 'var(--hibiscus)'
    }
  };
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface)',
      borderRadius: 16,
      padding: 14,
      border: unread ? `1px solid ${t.fg}55` : '1px solid var(--border-soft)',
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 12,
      background: t.bg,
      color: t.fg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 13.5
    }
  }, title), unread && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: t.fg
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-2)',
      marginTop: 3,
      lineHeight: 1.45
    }
  }, body), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: 'var(--muted)',
      marginTop: 6,
      letterSpacing: '.04em'
    }
  }, when)));
}
Object.assign(window, {
  HistoryScreen,
  ProfileScreen,
  NotificationsScreen
});
"use strict";

/* global React, Icon, Card, Button, Field, AlertBanner, IMCGauge, TensionIndicator, LineChart, classifyIMC, classifyTension, SubHeader, MiniSpark, SectionTitle, Toast */
const {
  useState: useStateM2,
  useMemo: useMemoM2
} = React;

// ─────────────────────────────────────────────────────────────
// IMC SCREEN
// ─────────────────────────────────────────────────────────────
function IMCScreen({
  state,
  setIMC,
  go,
  gaugeVariant = 'arc'
}) {
  const [peso, setPeso] = useStateM2(state.profile.peso);
  const [altura, setAltura] = useStateM2(state.profile.altura);
  const [toast, setToast] = useStateM2(false);
  const calc = peso && altura ? peso / (altura * altura) : state.lastIMC;
  const cls = classifyIMC(calc);
  const save = () => {
    setIMC(calc);
    setToast(true);
    setTimeout(() => setToast(false), 2200);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 90,
      background: 'var(--bg)'
    }
  }, /*#__PURE__*/React.createElement(SubHeader, {
    title: "\xCDndice de Masa Corporal",
    onBack: () => go('home'),
    action: /*#__PURE__*/React.createElement("button", {
      style: {
        border: 0,
        background: 'transparent',
        color: 'var(--muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "info",
      size: 20
    }))
  }), toast && /*#__PURE__*/React.createElement(Toast, null, "IMC guardado"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px 0'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: '12px 14px 14px',
      textAlign: 'center',
      overflow: 'hidden'
    },
    accent: cls.color
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(IMCGauge, {
    value: calc,
    variant: gaugeVariant,
    size: gaugeVariant === 'ring' ? 180 : 200
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 12,
      color: 'var(--ink-2)',
      lineHeight: 1.45
    }
  }, cls.tip)), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginTop: 10,
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Peso",
    value: peso,
    onChange: v => setPeso(Number(v) || 0),
    type: "number",
    suffix: "kg",
    icon: "scale"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Altura",
    value: altura,
    onChange: v => setAltura(Number(v) || 0),
    type: "number",
    suffix: "m"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    full: true,
    size: "lg",
    onClick: save
  }, "Calcular y guardar")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    subtitle: "Categor\xEDas",
    title: "\xBFQu\xE9 significa tu IMC?"
  }), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 0,
      overflow: 'hidden'
    }
  }, [{
    label: 'Bajo peso',
    range: '< 18.5',
    color: 'var(--st-elevated)'
  }, {
    label: 'Normal',
    range: '18.5 – 24.9',
    color: 'var(--st-normal)'
  }, {
    label: 'Sobrepeso',
    range: '25 – 29.9',
    color: '#D9B25A'
  }, {
    label: 'Obesidad I',
    range: '30 – 34.9',
    color: 'var(--st-htn1)'
  }, {
    label: 'Obesidad II+',
    range: '≥ 35',
    color: 'var(--st-crisis)'
  }].map((r, i, arr) => {
    const on = cls.label === r.label || cls.label === 'Obesidad II+' && r.label === 'Obesidad II+';
    return /*#__PURE__*/React.createElement("div", {
      key: r.label,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '12px 14px',
        borderBottom: i < arr.length - 1 ? '1px solid var(--border-soft)' : 'none',
        background: on ? 'var(--surface-warm)' : 'transparent'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 8,
        height: 30,
        borderRadius: 4,
        background: r.color
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: on ? 700 : 600,
        fontSize: 13.5
      }
    }, r.label), /*#__PURE__*/React.createElement("div", {
      className: "tnum",
      style: {
        fontSize: 11.5,
        color: 'var(--muted)'
      }
    }, r.range)), on && /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '2px 8px',
        borderRadius: 999,
        background: r.color,
        color: '#FFFEFB',
        fontSize: 10,
        fontWeight: 700
      }
    }, "T\xDA"));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    subtitle: "Esta semana",
    title: "Evoluci\xF3n del IMC"
  }), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(LineChart, {
    series: [{
      data: state.history.imc.slice(-7),
      color: 'var(--hibiscus)'
    }],
    width: 320,
    height: 140,
    yMin: Math.min(...state.history.imc.slice(-7)) - 1.5,
    yMax: Math.max(...state.history.imc.slice(-7)) + 1.5,
    fill: true,
    labels: ['L', 'M', 'M', 'J', 'V', 'S', 'D']
  })))));
}

// ─────────────────────────────────────────────────────────────
// TENSION SCREEN
// ─────────────────────────────────────────────────────────────
function TensionScreen({
  state,
  setTension,
  go,
  alertVariant = 'modal'
}) {
  const [sys, setSys] = useStateM2(state.lastTension.sys);
  const [dia, setDia] = useStateM2(state.lastTension.dia);
  const [pulse, setPulse] = useStateM2(state.lastTension.pulse);
  const [showAlert, setShowAlert] = useStateM2(null);
  const [toast, setToast] = useStateM2(false);
  const cls = classifyTension(sys, dia);
  const save = () => {
    setTension({
      sys,
      dia,
      pulse
    });
    if (cls.key === 'crisis' || cls.key === 'htn2') {
      setShowAlert(cls);
    } else {
      setToast(true);
      setTimeout(() => setToast(false), 2200);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 90,
      background: 'var(--bg)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(SubHeader, {
    title: "Tensi\xF3n arterial",
    onBack: () => go('home'),
    action: /*#__PURE__*/React.createElement("button", {
      style: {
        border: 0,
        background: 'transparent',
        color: 'var(--muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "info",
      size: 20
    }))
  }), toast && /*#__PURE__*/React.createElement(Toast, null, "Medici\xF3n registrada"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 16px 0'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 22,
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: `linear-gradient(180deg, ${cls.soft} 0%, var(--surface) 60%)`
    },
    accent: cls.color
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--muted)',
      letterSpacing: '.16em',
      fontWeight: 700
    }
  }, "\xDALTIMA MEDICI\xD3N"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'center',
      gap: 10,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "serif tnum",
    style: {
      fontSize: 80,
      lineHeight: 1,
      letterSpacing: '-.03em',
      color: cls.color
    }
  }, sys), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 36,
      color: 'var(--muted-2)',
      fontWeight: 300
    }
  }, "/"), /*#__PURE__*/React.createElement("span", {
    className: "serif tnum",
    style: {
      fontSize: 50,
      lineHeight: 1,
      color: 'var(--ink-2)'
    }
  }, dia)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--muted)',
      marginTop: 4,
      fontWeight: 600,
      letterSpacing: '.06em'
    }
  }, "mmHg"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 12px',
      borderRadius: 999,
      marginTop: 12,
      background: 'var(--surface)',
      border: `1px solid ${cls.color}33`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: cls.color
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      color: cls.color
    }
  }, cls.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(TensionIndicator, {
    sys: sys,
    dia: dia
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: 16,
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Pulso",
    value: pulse,
    suffix: "bpm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      background: 'var(--border-soft)'
    }
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Hace",
    value: "2",
    suffix: "horas"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      background: 'var(--border-soft)'
    }
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Promedio 7d",
    value: "124/82",
    small: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    subtitle: "Nueva medici\xF3n",
    title: "Registra tu lectura"
  }), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(NumberRow, {
    label: "Sist\xF3lica",
    value: sys,
    onChange: setSys,
    min: 70,
    max: 220,
    suffix: "mmHg",
    color: "var(--hibiscus)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-soft)',
      margin: '8px 0'
    }
  }), /*#__PURE__*/React.createElement(NumberRow, {
    label: "Diast\xF3lica",
    value: dia,
    onChange: setDia,
    min: 40,
    max: 140,
    suffix: "mmHg",
    color: "var(--ink-2)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-soft)',
      margin: '8px 0'
    }
  }), /*#__PURE__*/React.createElement(NumberRow, {
    label: "Pulso (opcional)",
    value: pulse,
    onChange: setPulse,
    min: 40,
    max: 200,
    suffix: "bpm",
    color: "var(--sage)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    full: true,
    size: "lg",
    onClick: save
  }, "Guardar medici\xF3n")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    subtitle: "Esta semana",
    title: "Evoluci\xF3n",
    action: /*#__PURE__*/React.createElement("button", {
      style: {
        border: 0,
        background: 'transparent',
        fontSize: 12,
        color: 'var(--hibiscus)',
        fontWeight: 700
      },
      onClick: () => go('history')
    }, "Ver todo \u2192")
  }), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      marginBottom: 10,
      fontSize: 11
    }
  }, /*#__PURE__*/React.createElement(Legend, {
    color: "var(--hibiscus)",
    label: "Sist\xF3lica"
  }), /*#__PURE__*/React.createElement(Legend, {
    color: "var(--sage)",
    label: "Diast\xF3lica"
  })), /*#__PURE__*/React.createElement(LineChart, {
    series: [{
      data: state.history.sys.slice(-7),
      color: 'var(--hibiscus)'
    }, {
      data: state.history.dia.slice(-7),
      color: 'var(--sage)'
    }],
    width: 320,
    height: 150,
    yMin: 60,
    yMax: 170,
    fill: true,
    labels: ['L', 'M', 'M', 'J', 'V', 'S', 'D']
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    subtitle: "Recientes",
    title: "Mediciones"
  }), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 0
    }
  }, state.history.records.slice(0, 4).map((r, i, arr) => {
    const rcls = classifyTension(r.sys, r.dia);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '12px 14px',
        borderBottom: i < arr.length - 1 ? '1px solid var(--border-soft)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 4,
        height: 36,
        borderRadius: 4,
        background: rcls.color
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 14
      },
      className: "tnum"
    }, r.sys, "/", r.dia, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: 'var(--muted)',
        fontWeight: 500
      }
    }, "\xB7 ", r.pulse, " bpm")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--muted)'
      }
    }, r.when)), /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '2px 8px',
        borderRadius: 999,
        background: rcls.soft,
        color: rcls.color,
        fontSize: 10.5,
        fontWeight: 700
      }
    }, rcls.short));
  })))), showAlert && /*#__PURE__*/React.createElement(AlertOverlay, {
    cls: showAlert,
    variant: alertVariant,
    onDismiss: () => setShowAlert(null),
    onGoHealth: () => {
      setShowAlert(null);
      go('health');
    }
  }));
}
function Stat({
  label,
  value,
  suffix,
  small
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "serif tnum",
    style: {
      fontSize: small ? 18 : 24,
      lineHeight: 1
    }
  }, value, suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--muted)',
      marginLeft: 2
    }
  }, suffix)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--muted)',
      marginTop: 4,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      fontWeight: 600
    }
  }, label));
}
function NumberRow({
  label,
  value,
  onChange,
  min,
  max,
  suffix,
  color
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '6px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--muted)',
      fontWeight: 600
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "serif tnum",
    style: {
      fontSize: 32,
      lineHeight: 1,
      color
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--muted)'
    }
  }, suffix))), /*#__PURE__*/React.createElement("button", {
    onClick: () => onChange(Math.max(min, value - 1)),
    style: {
      width: 36,
      height: 36,
      borderRadius: 999,
      border: '1px solid var(--border)',
      background: 'var(--surface)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "minus",
    size: 16
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => onChange(Math.min(max, value + 1)),
    style: {
      width: 36,
      height: 36,
      borderRadius: 999,
      border: 0,
      background: color,
      color: '#FFFEFB',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 16,
    color: "#FFFEFB"
  })));
}
function Legend({
  color,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      color: 'var(--ink-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 3,
      borderRadius: 999,
      background: color,
      display: 'inline-block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, label));
}

// Three alert variants for crisis
function AlertOverlay({
  cls,
  onDismiss,
  onGoHealth,
  variant = 'modal'
}) {
  const isCrisis = cls.key === 'crisis';
  if (variant === 'banner') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 12,
        right: 12,
        top: 64,
        zIndex: 60,
        animation: 'fadeUp .35s ease both'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: cls.color,
        color: '#FFFEFB',
        borderRadius: 18,
        padding: 16,
        boxShadow: '0 20px 50px rgba(142,42,42,.45)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: isCrisis ? 'pulse-ring' : '',
      style: {
        width: 36,
        height: 36,
        borderRadius: 999,
        background: 'rgba(255,255,255,.18)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "alert",
      size: 20,
      color: "#FFFEFB"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 14,
        letterSpacing: '.02em'
      }
    }, isCrisis ? '⚠️ ALERTA — Crisis hipertensiva' : 'Tensión muy alta'), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        marginTop: 4,
        lineHeight: 1.4,
        opacity: .95
      }
    }, cls.message), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        marginTop: 10
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onGoHealth,
      style: {
        flex: 1,
        background: '#FFFEFB',
        color: cls.color,
        border: 0,
        borderRadius: 10,
        padding: '9px 12px',
        fontSize: 12,
        fontWeight: 700
      }
    }, "Ver acciones"), /*#__PURE__*/React.createElement("button", {
      onClick: onDismiss,
      style: {
        background: 'rgba(255,255,255,.18)',
        color: '#FFFEFB',
        border: 0,
        borderRadius: 10,
        padding: '9px 14px',
        fontSize: 12,
        fontWeight: 700
      }
    }, "Cerrar"))))));
  }
  if (variant === 'inline') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 16,
        right: 16,
        bottom: 80,
        zIndex: 60,
        animation: 'fadeUp .35s ease both'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--surface)',
        borderRadius: 18,
        padding: 14,
        border: `2px solid ${cls.color}`,
        boxShadow: '0 20px 50px rgba(0,0,0,.18)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 36,
        height: 36,
        borderRadius: 999,
        background: cls.soft,
        color: cls.color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "alert",
      size: 20
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        fontSize: 12.5,
        lineHeight: 1.4
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        color: cls.color
      }
    }, cls.label, "."), " ", cls.message), /*#__PURE__*/React.createElement("button", {
      onClick: onDismiss,
      style: {
        border: 0,
        background: 'transparent',
        color: 'var(--muted)',
        padding: 4
      }
    }, "\u2715"))));
  }
  // modal
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 60,
      background: 'rgba(35,20,15,.55)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      animation: 'fadeUp .25s ease both'
    },
    onClick: onDismiss
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--surface)',
      borderTopLeftRadius: 28,
      borderTopRightRadius: 28,
      width: '100%',
      padding: '20px 22px 28px',
      animation: 'fadeUp .35s ease both'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 4,
      borderRadius: 999,
      background: 'var(--border)',
      margin: '0 auto 16px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: isCrisis ? 'pulse-ring' : '',
    style: {
      width: 64,
      height: 64,
      borderRadius: 999,
      background: cls.soft,
      color: cls.color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alert",
    size: 32
  }))), /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 26,
      textAlign: 'center',
      letterSpacing: '-.01em',
      color: cls.color
    }
  }, isCrisis ? 'Crisis hipertensiva' : 'Hipertensión etapa 2'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--ink-2)',
      textAlign: 'center',
      marginTop: 8,
      lineHeight: 1.5
    }
  }, cls.message), isCrisis && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--st-crisis-soft)',
      color: 'var(--st-crisis)',
      borderRadius: 14,
      padding: 12,
      marginTop: 14,
      fontSize: 12,
      lineHeight: 1.45
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Recomendaci\xF3n inmediata:"), " si\xE9ntate, respira profundo, no manejes. Si presentas dolor en el pecho, mareo o visi\xF3n borrosa, llama al ", /*#__PURE__*/React.createElement("strong", null, "911"), "."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    full: true,
    onClick: onDismiss
  }, "Despu\xE9s"), /*#__PURE__*/React.createElement(Button, {
    variant: isCrisis ? 'danger' : 'primary',
    full: true,
    onClick: onGoHealth,
    icon: isCrisis ? 'alert' : 'shield'
  }, isCrisis ? 'Llamar emergencia' : 'Ver acciones'))));
}
Object.assign(window, {
  IMCScreen,
  TensionScreen
});
"use strict";

/* global React, Icon, Card, Button, AlertBanner, WaterRing, BarChart, LineChart, classifyIMC, classifyTension, SubHeader, SectionTitle, ProgressBar, PlaceholderImg, Stepper */
const {
  useState: useStateM3
} = React;

// ─────────────────────────────────────────────────────────────
// WATER + JAMAICA SCREEN
// ─────────────────────────────────────────────────────────────
function WaterScreen({
  state,
  setWater,
  addJamaica,
  go
}) {
  const [showRecipe, setShowRecipe] = useStateM3(false);
  const [showToast, setShowToast] = useStateM3(false);
  const w = state.water;
  const j = state.jamaica;
  const pct = Math.min(100, Math.round(w.value / w.goal * 100));
  const handleAddJamaica = () => {
    if (j >= 3) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      return;
    }
    addJamaica(j + 1);
  };
  const handleRemoveJamaica = () => {
    if (j <= 0) return;
    addJamaica(j - 1);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 90,
      background: 'var(--bg)'
    }
  }, showToast && /*#__PURE__*/React.createElement(Toast, {
    tone: "warning"
  }, "L\xEDmite alcanzado: m\xE1ximo 3 tazas diarias."), showRecipe && /*#__PURE__*/React.createElement(JamaicaRecipeOverlay, {
    onClose: () => setShowRecipe(false)
  }), /*#__PURE__*/React.createElement(SubHeader, {
    title: "Hidrataci\xF3n",
    onBack: () => go('home')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 16px 0'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 22,
      textAlign: 'center',
      background: 'linear-gradient(180deg, #EAF2F6 0%, var(--surface) 60%)'
    },
    accent: "#2F5C70"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--muted)',
      letterSpacing: '.16em',
      fontWeight: 700
    }
  }, "AGUA \u2014 HOY"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(WaterRing, {
    value: w.value,
    goal: w.goal,
    size: 200,
    accent: "#2F5C70"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--muted)',
      marginTop: 6
    }
  }, pct >= 100 ? '¡Meta alcanzada! 🎉' : `Faltan ${w.goal - w.value} vasos · ~${((w.goal - w.value) * 0.25).toFixed(1)} L`), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Stepper, {
    value: w.value,
    onChange: v => setWater({
      ...w,
      value: v
    }),
    min: 0,
    max: 20,
    label: "vasos de 250 ml"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 6,
      marginTop: 14,
      flexWrap: 'wrap'
    }
  }, Array.from({
    length: w.goal
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: 22,
      height: 28,
      borderRadius: '4px 4px 12px 12px',
      background: i < w.value ? '#2F5C70' : 'var(--bg-deep)',
      border: '1px solid rgba(0,0,0,.06)',
      boxShadow: i < w.value ? 'inset 0 2px 4px rgba(255,255,255,.25)' : 'none'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    subtitle: "Recordatorios",
    title: "Frecuencia"
  }), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, [{
    k: '1h',
    l: 'Cada 1 h'
  }, {
    k: '2h',
    l: 'Cada 2 h'
  }, {
    k: '3h',
    l: 'Cada 3 h'
  }].map(o => {
    const on = w.reminder === o.k;
    return /*#__PURE__*/React.createElement("button", {
      key: o.k,
      onClick: () => setWater({
        ...w,
        reminder: o.k
      }),
      style: {
        flex: 1,
        padding: '12px 6px',
        border: on ? '1px solid var(--sage)' : '1px solid var(--border)',
        background: on ? 'var(--sage-soft)' : 'var(--surface-2)',
        borderRadius: 12,
        fontWeight: 600,
        fontSize: 12.5,
        color: on ? 'var(--sage-deep)' : 'var(--ink-2)'
      }
    }, o.l);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 10,
      fontSize: 12,
      color: 'var(--muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 14
  }), " Pr\xF3ximo recordatorio en 47 min"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    subtitle: "Infusi\xF3n natural",
    title: "Agua de jamaica",
    action: /*#__PURE__*/React.createElement("button", {
      onClick: () => setShowRecipe(true),
      style: {
        border: 0,
        background: 'transparent',
        color: 'var(--hibiscus)',
        fontWeight: 700,
        fontSize: 11,
        letterSpacing: '.04em',
        textTransform: 'uppercase'
      }
    }, "VER RECETA")
  }), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 16,
      background: 'linear-gradient(135deg, var(--hibiscus-tint) 0%, var(--surface) 70%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 16,
      background: 'var(--surface)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--hibiscus)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "leaf",
    size: 28
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14
    }
  }, j, " tazas hoy"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--muted)',
      marginTop: 2
    }
  }, "Rica en antioxidantes")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleRemoveJamaica,
    style: {
      border: '1px solid var(--border)',
      background: 'var(--surface)',
      color: 'var(--ink)',
      width: 40,
      height: 40,
      borderRadius: 999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 10px rgba(0,0,0,.05)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "minus",
    size: 18,
    color: "var(--ink)"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: handleAddJamaica,
    style: {
      border: 0,
      background: 'var(--hibiscus)',
      color: '#FFFEFB',
      width: 40,
      height: 40,
      borderRadius: 999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 6px 14px rgba(155,45,63,.3)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 18,
    color: "#FFFEFB"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    subtitle: "Esta semana",
    title: "Tu consumo diario"
  }), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(BarChart, {
    data: state.history.water,
    labels: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
    width: 320,
    height: 130,
    color: "#2F5C70",
    goal: 8
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      fontSize: 11,
      color: 'var(--muted)',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 10,
      height: 3,
      background: '#C76E4A',
      verticalAlign: 'middle',
      marginRight: 4
    }
  }), "Meta 8 vasos"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, "Promedio: ", (state.history.water.reduce((a, b) => a + b, 0) / state.history.water.length).toFixed(1), " vasos"))))));
}

// ─────────────────────────────────────────────────────────────
// RECIPE OVERLAY
// ─────────────────────────────────────────────────────────────
function JamaicaRecipeOverlay({
  onClose
}) {
  const steps = [{
    n: 1,
    t: 'Calentar el agua',
    icon: 'flame'
  }, {
    n: 2,
    t: 'Esperar hasta que hierva',
    icon: 'lung'
  }, {
    n: 3,
    t: 'Preparar hojas de jamaica',
    icon: 'leaf'
  }, {
    n: 4,
    t: 'Triturarlas en un grinder',
    icon: 'settings'
  }, {
    n: 5,
    t: 'Colocarlas en el dosificador',
    d: 'Al ras = 1 gramo',
    icon: 'scale'
  }, {
    n: 6,
    t: 'Colocar hojas en infusor',
    icon: 'chevronD'
  }, {
    n: 7,
    t: 'Agregar el agua',
    d: 'Marca = 1 taza',
    icon: 'drop'
  }, {
    n: 8,
    t: 'Esperar 5 minutos',
    icon: 'history'
  }, {
    n: 9,
    t: 'Retirar las hojas',
    icon: 'chevronR'
  }, {
    n: 10,
    t: 'Beber y disfrutar',
    icon: 'heart'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--bg)',
      zIndex: 100,
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(SubHeader, {
    title: "Paso a paso: Jamaica",
    onBack: onClose
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      background: 'var(--surface)',
      padding: '10px 8px',
      borderRadius: 12,
      border: '1px solid var(--border-soft)',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 9.5,
      color: 'var(--muted)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alert",
    size: 14
  }), " Lea instrucciones"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 9.5,
      color: 'var(--st-crisis)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "flame",
    size: 14
  }), " Agua caliente"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 9.5,
      color: 'var(--muted)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user",
    size: 14
  }), " Lejos de ni\xF1os")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, steps.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.n,
    style: {
      padding: 14,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 120,
      borderRadius: 10,
      overflow: 'hidden',
      background: 'var(--bg-deep)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `Pasos/Paso_${s.n}.png`,
    alt: `Paso ${s.n}`,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 13,
      lineHeight: 1.25
    }
  }, s.t), s.d && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--muted)',
      marginTop: 4
    }
  }, s.d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    full: true,
    onClick: onClose,
    variant: "primary"
  }, "\xA1Entendido!"))));
}

// ─────────────────────────────────────────────────────────────
// HEALTH RECOMMENDATIONS SCREEN
// ─────────────────────────────────────────────────────────────
function HealthScreen({
  state,
  go
}) {
  const tCls = classifyTension(state.lastTension.sys, state.lastTension.dia);
  const iCls = classifyIMC(state.lastIMC);
  const severity = tCls.key === 'crisis' || tCls.key === 'htn2' ? 'high' : tCls.key === 'htn1' || tCls.key === 'elev' ? 'mid' : 'low';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 90,
      background: 'var(--bg)'
    }
  }, /*#__PURE__*/React.createElement(SubHeader, {
    title: "Salud",
    onBack: () => go('home')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 16px 0'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      background: severity === 'high' ? 'var(--st-htn1-soft)' : 'var(--sage-soft)',
      border: `1px solid ${severity === 'high' ? 'var(--st-htn1)' : 'var(--sage)'}33`
    },
    accent: severity === 'high' ? 'var(--st-htn1)' : 'var(--sage)'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      letterSpacing: '.14em',
      fontWeight: 700,
      color: 'var(--muted)'
    }
  }, "TU ESTADO ACTUAL"), /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 24,
      marginTop: 4,
      letterSpacing: '-.01em'
    }
  }, severity === 'high' && 'Necesitas tomar acción', severity === 'mid' && 'Mantén la vigilancia', severity === 'low' && 'Excelente, sigue así'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    label: `Tensión: ${tCls.label}`,
    color: tCls.color,
    bg: tCls.soft
  }), /*#__PURE__*/React.createElement(Pill, {
    label: `IMC: ${iCls.label}`,
    color: iCls.color,
    bg: iCls.soft
  }))), severity === 'high' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionPad, null, /*#__PURE__*/React.createElement(SectionTitle, {
    subtitle: "Prioridad",
    title: "Consulta a tu m\xE9dico"
  }), /*#__PURE__*/React.createElement(Card, {
    style: {
      borderColor: 'var(--st-crisis)'
    },
    accent: "var(--st-crisis)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 12,
      background: 'var(--st-crisis-soft)',
      color: 'var(--st-crisis)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alert",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14
    }
  }, "Bandera roja"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-2)',
      marginTop: 4,
      lineHeight: 1.5
    }
  }, "Tu tensi\xF3n est\xE1 en niveles que requieren atenci\xF3n m\xE9dica. La jamaica puede ser un complemento, pero no sustituye tu tratamiento."), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "danger",
    style: {
      marginTop: 10
    }
  }, "Llamar a mi m\xE9dico"))))), /*#__PURE__*/React.createElement(SectionPad, null, /*#__PURE__*/React.createElement(SectionTitle, {
    subtitle: "Acci\xF3n inmediata",
    title: "Respiraci\xF3n 4-7-8"
  }), /*#__PURE__*/React.createElement(BreathingCard, null))), severity === 'mid' && /*#__PURE__*/React.createElement(SectionPad, null, /*#__PURE__*/React.createElement(SectionTitle, {
    subtitle: "Recomendaci\xF3n destacada",
    title: "Hibisco (jamaica)"
  }), /*#__PURE__*/React.createElement(JamaicaCard, {
    featured: true
  })), /*#__PURE__*/React.createElement(SectionPad, null, /*#__PURE__*/React.createElement(SectionTitle, {
    subtitle: severity === 'high' ? 'Después de estabilizar' : 'Movimiento',
    title: "Ejercicio recomendado"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(ExerciseCard, {
    title: "Caminar suave",
    minutes: 30,
    tag: "Cardio ligero",
    tint: "var(--sage-soft)",
    icon: "play"
  }), /*#__PURE__*/React.createElement(ExerciseCard, {
    title: "Nadar",
    minutes: 20,
    tag: "Bajo impacto",
    tint: "#D5E8F0",
    icon: "play"
  }), /*#__PURE__*/React.createElement(ExerciseCard, {
    title: "Yoga restaurativo",
    minutes: 15,
    tag: "Reduce estr\xE9s",
    tint: "var(--hibiscus-tint)",
    icon: "play"
  }), /*#__PURE__*/React.createElement(ExerciseCard, {
    title: "Respiraci\xF3n",
    minutes: 5,
    tag: "Calma",
    tint: "#EBE3D5",
    icon: "lung"
  }))), /*#__PURE__*/React.createElement(SectionPad, null, /*#__PURE__*/React.createElement(SectionTitle, {
    subtitle: "Alimentaci\xF3n",
    title: "Plan bajo en sodio"
  }), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 0,
      overflow: 'hidden'
    }
  }, [{
    ok: true,
    t: 'Frutas frescas y verduras de hoja verde',
    s: 'Ricas en potasio'
  }, {
    ok: true,
    t: 'Granos integrales y legumbres',
    s: 'Fibra y proteína vegetal'
  }, {
    ok: true,
    t: 'Pescados grasos (2x/semana)',
    s: 'Omega-3'
  }, {
    ok: false,
    t: 'Embutidos y enlatados',
    s: 'Alto sodio'
  }, {
    ok: false,
    t: 'Bebidas azucaradas',
    s: 'Picos de presión'
  }].map((row, i, arr) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 14px',
      borderBottom: i < arr.length - 1 ? '1px solid var(--border-soft)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 999,
      background: row.ok ? 'var(--st-normal-soft)' : 'var(--st-htn1-soft)',
      color: row.ok ? 'var(--st-normal)' : 'var(--st-htn1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: row.ok ? 'check' : 'minus',
    size: 14
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 13
    }
  }, row.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--muted)'
    }
  }, row.s)))))), severity === 'low' && /*#__PURE__*/React.createElement(SectionPad, null, /*#__PURE__*/React.createElement(SectionTitle, {
    subtitle: "Tip natural",
    title: "Una infusi\xF3n para tu rutina"
  }), /*#__PURE__*/React.createElement(JamaicaCard, null)), /*#__PURE__*/React.createElement(SectionPad, null, /*#__PURE__*/React.createElement(SectionTitle, {
    subtitle: "Ma\xF1ana",
    title: "Tu rutina sugerida"
  }), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 0
    }
  }, [{
    h: '07:00',
    t: '1 vaso de agua tibia con limón'
  }, {
    h: '07:30',
    t: '20 min de caminata suave'
  }, {
    h: '08:15',
    t: 'Desayuno alto en fibra'
  }, {
    h: '15:00',
    t: 'Taza de agua de jamaica'
  }, {
    h: '21:30',
    t: 'Respiración 4-7-8 (5 min)'
  }].map((r, i, arr) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 14px',
      borderBottom: i < arr.length - 1 ? '1px solid var(--border-soft)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "serif tnum",
    style: {
      fontSize: 18,
      color: 'var(--hibiscus)',
      minWidth: 50
    }
  }, r.h), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 13.5
    }
  }, r.t), /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    color: "var(--muted-2)"
  })))))));
}
function Pill({
  label,
  color,
  bg
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '4px 10px',
      borderRadius: 999,
      background: bg,
      color,
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.02em'
    }
  }, label);
}
function SectionPad({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, children);
}
function JamaicaCard({
  featured
}) {
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 0,
      overflow: 'hidden',
      background: featured ? 'linear-gradient(135deg, var(--hibiscus-tint) 0%, var(--surface) 70%)' : 'var(--surface)',
      border: featured ? '1px solid var(--hibiscus)33' : '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 70,
      height: 70,
      borderRadius: 18,
      background: 'radial-gradient(circle at 30% 30%, #C03A4D 0%, #6E1F2C 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#FFFEFB',
      flexShrink: 0,
      boxShadow: 'inset 0 1px 0 rgba(255,255,255,.2), 0 6px 16px rgba(155,45,63,.25)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "leaf",
    size: 32,
    color: "#FFFEFB"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, "Hibisco (jamaica) \uD83C\uDF3A"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-2)',
      marginTop: 4,
      lineHeight: 1.5
    }
  }, "Estudios sugieren que el consumo regular de hibisco puede contribuir a reducir la presi\xF3n arterial de forma natural."))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-soft)',
      padding: 12,
      display: 'flex',
      gap: 8,
      fontSize: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '4px 10px',
      background: 'var(--surface-warm)',
      borderRadius: 999,
      fontWeight: 600
    }
  }, "2-3 tazas/d\xEDa"), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '4px 10px',
      background: 'var(--surface-warm)',
      borderRadius: 999,
      fontWeight: 600
    }
  }, "Sin az\xFAcar"), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '4px 10px',
      background: 'var(--surface-warm)',
      borderRadius: 999,
      fontWeight: 600
    }
  }, "Antioxidantes")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 14px',
      background: 'var(--surface-warm)',
      fontSize: 10.5,
      color: 'var(--muted)',
      lineHeight: 1.4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 11
  }), " McKay et al. (2010), ", /*#__PURE__*/React.createElement("em", null, "Journal of Nutrition"), ": el t\xE9 de hibisco redujo la sist\xF3lica ~7.2 mmHg en pre-hipertensi\xF3n."));
}
function ExerciseCard({
  title,
  minutes,
  tag,
  tint,
  icon
}) {
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 80,
      borderRadius: 12,
      background: tint,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: `repeating-linear-gradient(135deg, rgba(255,255,255,.35) 0 8px, transparent 8px 16px)`,
      position: 'absolute',
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 999,
      background: 'rgba(255,254,251,.85)',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 13.5
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--muted)',
      marginTop: 2
    }
  }, minutes, " min \xB7 ", tag));
}
function BreathingCard() {
  const [running, setRunning] = useStateM3(false);
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 18,
      textAlign: 'center',
      background: 'linear-gradient(180deg, var(--sage-soft) 0%, var(--surface) 70%)'
    },
    accent: "var(--sage)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      margin: '4px 0 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 120,
      height: 120,
      borderRadius: 999,
      background: 'var(--surface)',
      border: '4px solid var(--sage)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--sage-deep)',
      animation: running ? 'pulse-ring 4s ease-in-out infinite' : 'none',
      transform: running ? 'scale(1.04)' : 'scale(1)',
      transition: 'transform 1.5s ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 26,
      lineHeight: 1
    }
  }, running ? 'Inhala' : '4·7·8'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--muted)',
      marginTop: 4,
      letterSpacing: '.1em'
    }
  }, running ? '4 segundos' : 'TÉCNICA')))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-2)',
      marginBottom: 12,
      lineHeight: 1.45
    }
  }, "Inhala 4s, ret\xE9n 7s, exhala 8s. Reduce la frecuencia card\xEDaca en minutos."), /*#__PURE__*/React.createElement(Button, {
    variant: "sage",
    full: true,
    size: "md",
    icon: running ? 'check' : 'play',
    onClick: () => setRunning(!running)
  }, running ? 'Detener' : 'Empezar 5 minutos'));
}
Object.assign(window, {
  WaterScreen,
  HealthScreen
});
"use strict";

// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  noDeckControls = false,
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  // Auto-inject a rail toggle when a <deck-stage> is on the page. The
  // toggle drives the deck's per-viewer _railVisible via window message;
  // state is mirrored from the same localStorage key the deck reads so
  // the control reflects reality across reloads. The mechanism is the
  // message — authors who want custom placement can post it directly
  // and pass noDeckControls to suppress this one.
  const hasDeckStage = React.useMemo(() => typeof document !== 'undefined' && !!document.querySelector('deck-stage'), []);
  // deck-stage enables its rail in connectedCallback, but this panel can
  // mount before that element has upgraded. The initial read catches the
  // common case; the listener covers mounting first. (Older deck-stage.js
  // copies still wait for the host's __omelette_rail_enabled postMessage —
  // same listener handles those.)
  const [railEnabled, setRailEnabled] = React.useState(() => hasDeckStage && !!document.querySelector('deck-stage')?._railEnabled);
  React.useEffect(() => {
    if (!hasDeckStage || railEnabled) return undefined;
    const onMsg = e => {
      if (e.data && e.data.type === '__omelette_rail_enabled') setRailEnabled(true);
    };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, [hasDeckStage, railEnabled]);
  const [railVisible, setRailVisible] = React.useState(() => {
    try {
      return localStorage.getItem('deck-stage.railVisible') !== '0';
    } catch (e) {
      return true;
    }
  });
  const toggleRail = on => {
    setRailVisible(on);
    window.postMessage({
      type: '__deck_rail_visible',
      on
    }, '*');
  };
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-noncommentable": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children, hasDeckStage && railEnabled && !noDeckControls && /*#__PURE__*/React.createElement(TweakSection, {
    label: "Deck"
  }, /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Thumbnail rail",
    value: railVisible,
    onChange: toggleRail
  })))));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
