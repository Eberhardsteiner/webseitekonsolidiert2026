import { useState, useMemo } from "react";

const DIMS = [
  {
    key: "strategy", title: "Corporate Strategy", color: "#2a7c9e", icon: "\u25CE",
    topics: [
      { id: "cs1", label: "Digitalisierungsstrategie und KI", q: "Wie klar ist Ihre Digitalisierungsstrategie mit konkretem KI-Bezug formuliert?" },
      { id: "cs2", label: "People Analytics & HR-Tech", q: "Wie systematisch nutzen Sie datenbasierte HR-Instrumente und People Analytics?" },
      { id: "cs3", label: "Prozessoptimierung f\u00fcr Digitalisierung und KI-Einsatz", q: "Wie weit sind Ihre Kernprozesse f\u00fcr den Einsatz von KI und Automatisierung optimiert?" },
      { id: "cs4", label: "KI-Ready Organisation", q: "Wie gut ist Ihre Organisation strukturell und technisch auf den KI-Einsatz vorbereitet?" },
    ],
  },
  {
    key: "culture", title: "Culture & Change", color: "#1a8a7a", icon: "\u2726",
    topics: [
      { id: "cc1", label: "Digitale Kultur", q: "Wie ausgepr\u00e4gt ist eine Kultur der digitalen Offenheit und Experimentierfreude?" },
      { id: "cc2", label: "Behavioral Design & Nudging", q: "Wie gezielt setzen Sie verhaltens\u00f6konomische Ans\u00e4tze ein, um Ver\u00e4nderungen zu f\u00f6rdern?" },
      { id: "cc3", label: "Zertifikat Empfehlenswerter Arbeitgeber", q: "Wie strategisch arbeiten Sie an Ihrer Arbeitgeberattraktivit\u00e4t und Employer Brand?" },
      { id: "cc4", label: "KI Change Readyness Radar", q: "Wie gut erfassen und managen Sie die Ver\u00e4nderungsbereitschaft bez\u00fcglich KI?" },
    ],
  },
  {
    key: "conduct", title: "Code of Conduct", color: "#3b6ea0", icon: "\u25C7",
    topics: [
      { id: "co1", label: "Leadership Principles & Sensegiving", q: "Wie klar sind Ihre F\u00fchrungsprinzipien definiert und wie aktiv wird Sensegiving praktiziert?" },
      { id: "co2", label: "Core Values & Purpose", q: "Wie lebendig und handlungsleitend sind Ihre Unternehmenswerte und der Purpose im Alltag?" },
      { id: "co3", label: "KI in F\u00fchrung und Organisation", q: "Wie klar sind ethische Leitlinien und Governance-Strukturen f\u00fcr den KI-Einsatz?" },
      { id: "co4", label: "Green Culture und Nachhaltigkeit", q: "Wie systematisch ist Nachhaltigkeit in Ihrer Unternehmenskultur verankert?" },
    ],
  },
  {
    key: "competences", title: "Competences", color: "#2d7a6e", icon: "\u2B21",
    topics: [
      { id: "cp1", label: "Kompetenzmanagement, Future Skills & Coaching", q: "Wie systematisch identifizieren und entwickeln Sie Zukunftskompetenzen?" },
      { id: "cp2", label: "F\u00fchrungskr\u00e4ftequalifizierung", q: "Wie zeitgem\u00e4\u00df und wirkungsvoll ist Ihr Programm zur F\u00fchrungskr\u00e4fteentwicklung?" },
      { id: "cp3", label: "Business Gaming & Outdoor Learning", q: "Wie innovativ sind Ihre Lernformate - nutzen Sie erfahrungsbasierte Methoden?" },
      { id: "cp4", label: "KI-Ready Leader & Augmented Leadership", q: "Wie gut sind Ihre F\u00fchrungskr\u00e4fte auf KI-gest\u00fctztes F\u00fchren vorbereitet?" },
    ],
  },
];

const SCALE = ["Nicht vorhanden", "Ansatzweise", "Teilweise umgesetzt", "Gut umgesetzt", "Exzellent"];

const MATURITY = [
  { min: 0, max: 1.5, label: "Starter", color: "#ef4444", desc: "Erste Schritte stehen noch bevor. Grundlagen muessen geschaffen werden." },
  { min: 1.5, max: 2.5, label: "Explorer", color: "#f59e0b", desc: "Einzelne Ansaetze vorhanden, aber noch kein systematisches Vorgehen." },
  { min: 2.5, max: 3.5, label: "Performer", color: "#3b82f6", desc: "Solide Basis mit Potenzial zur Exzellenz." },
  { min: 3.5, max: 4.5, label: "Leader", color: "#22c55e", desc: "Hoher Reifegrad mit systematischer Umsetzung und messbaren Ergebnissen." },
  { min: 4.5, max: 5.1, label: "Pioneer", color: "#8b5cf6", desc: "Exzellenz auf ganzer Linie - Benchmark fuer andere." },
];

function getMaturity(v) {
  for (let i = 0; i < MATURITY.length; i++) {
    if (v >= MATURITY[i].min && v < MATURITY[i].max) return MATURITY[i];
  }
  return MATURITY[0];
}

function Radar({ scores }) {
  const size = 300;
  const cx = size / 2;
  const cy = size / 2;
  const r = size * 0.36;
  const n = 4;

  function pt(idx, val) {
    const angle = -Math.PI / 2 + (idx * 2 * Math.PI) / n;
    const dist = (val / 5) * r;
    return [cx + dist * Math.cos(angle), cy + dist * Math.sin(angle)];
  }

  const elements = [];

  for (let lv = 1; lv <= 5; lv++) {
    let pts = "";
    for (let i = 0; i < n; i++) {
      const p = pt(i, lv);
      pts += p[0] + "," + p[1] + " ";
    }
    elements.push(
      <polygon key={"grid" + lv} points={pts.trim()} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth={lv === 5 ? 1.2 : 0.5} />
    );
  }

  for (let i = 0; i < n; i++) {
    const ep = pt(i, 5);
    elements.push(
      <line key={"axis" + i} x1={cx} y1={cy} x2={ep[0]} y2={ep[1]} stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
    );
  }

  let dataStr = "";
  const dataPts = [];
  for (let i = 0; i < n; i++) {
    const val = scores[DIMS[i].key] || 0;
    const dp = pt(i, val);
    dataPts.push(dp);
    dataStr += dp[0] + "," + dp[1] + " ";
  }

  elements.push(
    <polygon key="data" points={dataStr.trim()} fill="rgba(99,102,241,0.15)" stroke="#6366f1" strokeWidth="2" strokeLinejoin="round" />
  );

  for (let i = 0; i < n; i++) {
    elements.push(
      <circle key={"dot" + i} cx={dataPts[i][0]} cy={dataPts[i][1]} r="5" fill={DIMS[i].color} stroke="#fff" strokeWidth="1.5" />
    );
  }

  for (let i = 0; i < n; i++) {
    const lp = pt(i, 6.2);
    elements.push(
      <text key={"label" + i} x={lp[0]} y={lp[1]} textAnchor="middle" dominantBaseline="middle" fill={DIMS[i].color} fontSize="11" fontWeight="600">
        {DIMS[i].title}
      </text>
    );
    const val = scores[DIMS[i].key];
    if (val && val > 0) {
      const sp = pt(i, val + 0.7);
      elements.push(
        <text key={"sc" + i} x={sp[0]} y={sp[1]} textAnchor="middle" dominantBaseline="middle" fill="#fff" fontSize="12" fontWeight="700">
          {val.toFixed(1)}
        </text>
      );
    }
  }

  return (
    <svg viewBox={"0 0 " + size + " " + size} width="100%" style={{ maxWidth: 320 }}>
      {elements}
    </svg>
  );
}

function ScalePicker({ value, onChange, color }) {
  return (
    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
      {SCALE.map((label, i) => {
        const val = i + 1;
        const on = value === val;
        return (
          <button key={i} onClick={() => onChange(val)} style={{
            padding: "6px 12px", borderRadius: 8,
            border: on ? "2px solid " + color : "1px solid rgba(255,255,255,0.08)",
            background: on ? color + "22" : "rgba(255,255,255,0.03)",
            color: on ? "#fff" : "rgba(255,255,255,0.45)",
            fontSize: 12, fontWeight: on ? 600 : 400,
            cursor: "pointer", fontFamily: "inherit", lineHeight: 1.4,
          }}>
            <span style={{ fontSize: 14, marginRight: 4, fontWeight: 700, color: on ? color : "rgba(255,255,255,0.25)" }}>{val}</span>
            {label}
          </button>
        );
      })}
    </div>
  );
}

export default function QuickScan4C() {
  const [answers, setAnswers] = useState({});
  const [curDim, setCurDim] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [started, setStarted] = useState(false);

  function setAnswer(id, val) {
    setAnswers(prev => {
      const next = { ...prev };
      next[id] = val;
      return next;
    });
  }

  const totalQ = 16;
  const answeredCount = Object.keys(answers).length;
  const allDone = answeredCount === totalQ;

  const dimScores = useMemo(() => {
    const sc = {};
    DIMS.forEach(d => {
      const vals = d.topics.map(t => answers[t.id]).filter(Boolean);
      sc[d.key] = vals.length > 0 ? vals.reduce((a, b) => a + b, 0) / vals.length : 0;
    });
    return sc;
  }, [answers]);

  const overallAvg = useMemo(() => {
    const vals = Object.values(dimScores).filter(v => v > 0);
    return vals.length > 0 ? vals.reduce((a, b) => a + b, 0) / vals.length : 0;
  }, [dimScores]);

  const dim = DIMS[curDim];
  const dimAnswered = dim.topics.filter(t => answers[t.id]).length;

  const baseBg = {
    minHeight: "100vh",
    background: "#101420",
    color: "#fff",
    fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
  };

  // ==================== START SCREEN ====================
  if (!started) {
    return (
      <div style={{ ...baseBg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 32, textAlign: "center", position: "relative", overflow: "hidden" }}>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <div style={{ position: "absolute", top: -150, right: -150, width: 500, height: 500, background: "radial-gradient(circle, rgba(42,124,158,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ width: 72, height: 72, borderRadius: 20, background: "linear-gradient(135deg, #2a7c9e, #1a8a7a)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, fontWeight: 700, marginBottom: 28, boxShadow: "0 12px 40px rgba(42,124,158,0.3)" }}>
          4C
        </div>
        <h1 style={{ margin: "0 0 12px", fontSize: 34, fontWeight: 300, letterSpacing: "-0.03em" }}>
          4C-Navigator <span style={{ fontWeight: 700 }}>Quickscan</span>
        </h1>
        <p style={{ margin: "0 0 8px", fontSize: 15, color: "rgba(255,255,255,0.5)", maxWidth: 500, lineHeight: 1.7 }}>
          Ermitteln Sie in wenigen Minuten den Reifegrad Ihrer Organisation in den vier Dimensionen des 4C-Modells.
        </p>
        <p style={{ margin: "0 0 32px", fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
          16 Fragen &middot; ca. 5-8 Minuten &middot; sofortige Auswertung
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, maxWidth: 480, width: "100%", marginBottom: 36 }}>
          {DIMS.map(d => (
            <div key={d.key} style={{ padding: "14px 18px", borderRadius: 14, background: d.color + "18", border: "1px solid " + d.color + "33", textAlign: "left" }}>
              <div style={{ fontSize: 18, marginBottom: 4 }}>{d.icon}</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: d.color }}>{d.title}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 2 }}>{d.topics.length} Themenfelder</div>
            </div>
          ))}
        </div>

        <button onClick={() => setStarted(true)} style={{
          padding: "14px 40px", borderRadius: 14, border: "none",
          background: "linear-gradient(135deg, #2a7c9e, #1a8a7a)",
          color: "#fff", fontSize: 16, fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
          boxShadow: "0 8px 32px rgba(42,124,158,0.35)",
        }}>
          Quickscan starten
        </button>

        <div style={{ marginTop: 36, fontSize: 11, color: "rgba(255,255,255,0.2)" }}>
          UVM Consulting Group &middot; Prof. Dr. Landes &amp; Dr. Steiner
        </div>
      </div>
    );
  }

  // ==================== RESULTS SCREEN ====================
  if (showResults) {
    const mat = getMaturity(overallAvg);
    let weakest = DIMS[0];
    let strongest = DIMS[0];
    DIMS.forEach(d => {
      if (dimScores[d.key] < dimScores[weakest.key]) weakest = d;
      if (dimScores[d.key] > dimScores[strongest.key]) strongest = d;
    });
    const diff = (dimScores[strongest.key] - dimScores[weakest.key]).toFixed(1);
    const balanceText = parseFloat(diff) < 1 ? "Ausgewogenes Profil" : parseFloat(diff) < 2 ? "Moderate Unterschiede" : "Deutliche Ungleichgewichte";

    return (
      <div style={{ ...baseBg, padding: "32px 24px", position: "relative", overflow: "hidden" }}>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <div style={{ maxWidth: 800, margin: "0 auto" }}>

          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>Ihr 4C-Navigator Ergebnis</div>
            <h1 style={{ margin: "0 0 8px", fontSize: 38, fontWeight: 300 }}>
              Reifegrad: <span style={{ fontWeight: 700, color: mat.color }}>{mat.label}</span>
            </h1>
            <p style={{ margin: "0 auto", fontSize: 15, color: "rgba(255,255,255,0.5)", maxWidth: 500, lineHeight: 1.6 }}>{mat.desc}</p>
          </div>

          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <div style={{ display: "inline-flex", alignItems: "baseline", gap: 6, padding: "12px 28px", borderRadius: 16, background: mat.color + "15", border: "1px solid " + mat.color + "33" }}>
              <span style={{ fontSize: 44, fontWeight: 300, color: mat.color }}>{overallAvg.toFixed(1)}</span>
              <span style={{ fontSize: 18, color: "rgba(255,255,255,0.3)" }}>/ 5.0</span>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginBottom: 36 }}>
            <Radar scores={dimScores} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 28 }}>
            {DIMS.map(d => {
              const sc = dimScores[d.key];
              const m = getMaturity(sc);
              return (
                <div key={d.key} style={{ padding: 20, borderRadius: 16, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: d.color }}>{d.title}</div>
                      <div style={{ fontSize: 11, color: m.color, marginTop: 2 }}>{m.label}</div>
                    </div>
                    <div style={{ fontSize: 22, fontWeight: 300, color: d.color }}>{sc.toFixed(1)}</div>
                  </div>
                  <div style={{ height: 4, borderRadius: 4, background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
                    <div style={{ height: "100%", borderRadius: 4, width: (sc / 5 * 100) + "%", background: d.color, transition: "width 0.8s ease" }} />
                  </div>
                  <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 5 }}>
                    {d.topics.map(t => (
                      <div key={t.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", flex: 1 }}>{t.label}</span>
                        <div style={{ display: "flex", gap: 3, marginLeft: 8 }}>
                          {[1,2,3,4,5].map(v => (
                            <div key={v} style={{ width: 6, height: 6, borderRadius: 2, background: v <= (answers[t.id] || 0) ? d.color : "rgba(255,255,255,0.08)" }} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ padding: 24, borderRadius: 16, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", marginBottom: 28 }}>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>Zentrale Erkenntnisse</div>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <div style={{ flex: "1 1 180px", padding: 14, borderRadius: 12, background: strongest.color + "10", border: "1px solid " + strongest.color + "25" }}>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginBottom: 4 }}>Staerkste Dimension</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: strongest.color }}>{strongest.title}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 3 }}>Score: {dimScores[strongest.key].toFixed(1)}</div>
              </div>
              <div style={{ flex: "1 1 180px", padding: 14, borderRadius: 12, background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.15)" }}>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginBottom: 4 }}>Entwicklungsfeld</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#f87171" }}>{weakest.title}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 3 }}>Score: {dimScores[weakest.key].toFixed(1)}</div>
              </div>
              <div style={{ flex: "1 1 180px", padding: 14, borderRadius: 12, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginBottom: 4 }}>Balance-Index</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#a5b4fc" }}>{diff} Punkte Differenz</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 3 }}>{balanceText}</div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <button onClick={() => { setShowResults(false); setAnswers({}); setCurDim(0); }} style={{
              padding: "12px 28px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.1)",
              background: "transparent", color: "rgba(255,255,255,0.6)", fontSize: 14, cursor: "pointer", fontFamily: "inherit",
            }}>Neu starten</button>
            <button onClick={() => setShowResults(false)} style={{
              padding: "12px 28px", borderRadius: 12, border: "none",
              background: "linear-gradient(135deg, #2a7c9e, #1a8a7a)",
              color: "#fff", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
              boxShadow: "0 4px 20px rgba(42,124,158,0.3)",
            }}>Antworten anpassen</button>
          </div>

          <div style={{ textAlign: "center", marginTop: 32, fontSize: 11, color: "rgba(255,255,255,0.2)" }}>
            4C-Navigator Quickscan &middot; UVM Consulting Group
          </div>
        </div>
      </div>
    );
  }

  // ==================== QUESTION SCREEN ====================
  return (
    <div style={{ ...baseBg, position: "relative", overflow: "hidden" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px) } to { opacity: 1; transform: translateY(0) } }
        * { box-sizing: border-box; }
      `}</style>
      <div style={{ position: "absolute", top: -150, right: -150, width: 500, height: 500, background: "radial-gradient(circle, " + dim.color + "12 0%, transparent 70%)", pointerEvents: "none" }} />

      <header style={{ padding: "24px 28px 16px", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, " + dim.color + ", " + dim.color + "99)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: "#fff" }}>4C</div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 500 }}>4C-Navigator Quickscan</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>UVM Consulting Group</div>
            </div>
          </div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>{answeredCount}/{totalQ} beantwortet</div>
        </div>
        <div style={{ height: 3, borderRadius: 3, background: "rgba(255,255,255,0.06)", marginTop: 16, overflow: "hidden" }}>
          <div style={{ height: "100%", borderRadius: 3, width: (answeredCount / totalQ * 100) + "%", background: "linear-gradient(90deg, #2a7c9e, #2d7a6e)", transition: "width 0.4s ease" }} />
        </div>
      </header>

      <div style={{ display: "flex", borderBottom: "1px solid rgba(255,255,255,0.04)", overflowX: "auto" }}>
        {DIMS.map((d, i) => {
          const active = i === curDim;
          const done = d.topics.every(t => !!answers[t.id]);
          return (
            <button key={d.key} onClick={() => setCurDim(i)} style={{
              flex: "1 1 0", padding: "14px 12px", border: "none",
              borderBottom: active ? "2px solid " + d.color : "2px solid transparent",
              background: active ? d.color + "0a" : "transparent",
              color: active ? d.color : "rgba(255,255,255,0.35)",
              fontSize: 12, fontWeight: active ? 600 : 400,
              cursor: "pointer", fontFamily: "inherit",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 5, whiteSpace: "nowrap",
            }}>
              {d.title}{done ? " \u2713" : ""}
            </button>
          );
        })}
      </div>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "28px 24px" }}>
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
            <span style={{ fontSize: 22 }}>{dim.icon}</span>
            <h2 style={{ margin: 0, fontSize: 22, fontWeight: 300 }}>{dim.title}</h2>
          </div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>{dimAnswered}/{dim.topics.length} Fragen beantwortet</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {dim.topics.map((topic, i) => {
            const answered = !!answers[topic.id];
            return (
              <div key={topic.id} style={{
                padding: 24, borderRadius: 16,
                background: answered ? dim.color + "08" : "rgba(255,255,255,0.02)",
                border: answered ? "1px solid " + dim.color + "25" : "1px solid rgba(255,255,255,0.06)",
              }}>
                <div style={{ fontSize: 11, color: dim.color, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>{topic.label}</div>
                <div style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", marginBottom: 16, lineHeight: 1.6 }}>{topic.q}</div>
                <ScalePicker value={answers[topic.id]} onChange={v => setAnswer(topic.id, v)} color={dim.color} />
              </div>
            );
          })}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 32, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <button onClick={() => setCurDim(Math.max(0, curDim - 1))} disabled={curDim === 0} style={{
            padding: "10px 20px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.08)",
            background: "transparent", color: curDim === 0 ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.5)",
            fontSize: 14, cursor: curDim === 0 ? "default" : "pointer", fontFamily: "inherit",
          }}>
            Zurück
          </button>

          {curDim < DIMS.length - 1 ? (
            <button onClick={() => setCurDim(curDim + 1)} style={{
              padding: "10px 24px", borderRadius: 10, border: "none",
              background: "linear-gradient(135deg, " + dim.color + ", " + DIMS[curDim + 1].color + ")",
              color: "#fff", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
              boxShadow: "0 4px 16px " + dim.color + "40",
            }}>
              {"Weiter: " + DIMS[curDim + 1].title}
            </button>
          ) : (
            <button onClick={() => { if (allDone) setShowResults(true); }} style={{
              padding: "12px 28px", borderRadius: 12, border: "none",
              background: allDone ? "linear-gradient(135deg, #22c55e, #16a34a)" : "rgba(255,255,255,0.06)",
              color: allDone ? "#fff" : "rgba(255,255,255,0.25)",
              fontSize: 14, fontWeight: 600,
              cursor: allDone ? "pointer" : "default", fontFamily: "inherit",
              boxShadow: allDone ? "0 4px 20px rgba(34,197,94,0.3)" : "none",
            }}>
              {allDone ? "Auswertung anzeigen" : "Noch " + (totalQ - answeredCount) + " Fragen offen"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
