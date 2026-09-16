export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white overflow-x-hidden" style={{ paddingTop: "65px" }}>

      {/* Fixed Nav */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 50,
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          backgroundColor: "rgba(3, 7, 18, 0.85)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="flex justify-between items-center px-8 py-4 max-w-6xl mx-auto">
          <img src="/AppLogo.svg" alt="Ranka" className="invert" style={{ height: "36px", width: "auto" }} />
          <a
            href="/beta-testers"
            className="bg-white text-gray-950 text-sm font-semibold px-5 py-2 rounded-full hover:bg-gray-200 transition"
          >
            Download on iOS
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative text-center px-6 pt-20 pb-32 max-w-3xl mx-auto">
        {/* Glow behind logo */}
        <div style={{
          position: "absolute",
          top: "60px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Big centered logo */}
        <div className="flex justify-center mb-10" style={{ position: "relative" }}>
          <img
            src="/AppLogo.svg"
            alt="Ranka"
            className="invert"
            style={{ height: "160px", width: "auto", opacity: 0.95 }}
          />
        </div>

        <h1
          className="font-extrabold leading-tight mb-6"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", letterSpacing: "-0.02em" }}
        >
          Score every game.<br />
          <span style={{ color: "#818cf8" }}>Track everything.</span>
        </h1>

        <p className="text-xl mb-8" style={{ color: "#94a3b8", lineHeight: 1.7 }}>
          Ranka is the ultimate scorekeeper for any game — board games, sports, yard games, card games, and more.
        </p>
        <ul className="text-left inline-block mb-10 space-y-3">
          {[
            "Full game history & live rankings, updated in real time",
            "Analytics, win rates & scoring trends across every game you play",
            "Head-to-head stats against everyone you've played — elite level data, for everyone",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-lg" style={{ color: "#94a3b8" }}>
              <span className="mt-1 flex-shrink-0 flex items-center justify-center rounded-full" style={{ width: "22px", height: "22px", backgroundColor: "rgba(99,102,241,0.2)", color: "#818cf8" }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 6l3 3 5-5"/>
                </svg>
              </span>
              {item}
            </li>
          ))}
        </ul>

        <a
          href="https://apps.apple.com"
          className="inline-flex items-center gap-3 font-bold text-lg px-8 py-4 rounded-2xl transition"
          style={{
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            boxShadow: "0 0 40px rgba(99,102,241,0.4)",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          Download on the App Store
        </a>
      </section>

      {/* Stats bar */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", backgroundColor: "rgba(255,255,255,0.03)" }}>
        <div className="max-w-4xl mx-auto px-6 py-8 grid grid-cols-3 text-center gap-4">
          {[
            { value: "400+", label: "Game Types" },
            { value: "∞", label: "Players & Teams" },
            { value: "Free", label: "To Download" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-extrabold" style={{ color: "#818cf8" }}>{s.value}</div>
              <div className="text-sm mt-1" style={{ color: "#64748b" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-3xl font-bold mb-16" style={{ letterSpacing: "-0.02em" }}>
            Everything you need to run the game
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="6" width="20" height="12" rx="3"/>
                    <path d="M6 12h4M8 10v4"/>
                    <circle cx="15" cy="12" r="1" fill="currentColor"/>
                    <circle cx="18" cy="12" r="1" fill="currentColor"/>
                  </svg>
                ),
                title: "400+ Game Types",
                desc: "From Ping Pong to Bowling to Beer Pong — Ranka has a scorecard built for every game you play. Don't see one? Create your own game template on the fly.",
                image: "/Sports_framed.png",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z"/>
                    <path d="M9 12l2 2 4-4"/>
                  </svg>
                ),
                title: "Leagues & Tournaments",
                desc: "Create leagues, manage rosters, track seasons. Generate schedules automatically. Run your own tournament and find out who amongst you reigns supreme.",
                image: "/Tournament_framed.png",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v18h18"/>
                    <rect x="7" y="13" width="3" height="8" rx="1"/>
                    <rect x="12" y="8" width="3" height="13" rx="1"/>
                    <rect x="17" y="4" width="3" height="17" rx="1"/>
                  </svg>
                ),
                title: "Live Rankings",
                desc: "Rankings update in real time as scores are recorded. Always know who's sitting on top with specialized game rankings and head-to-head stats.",
                image: "/Head_to_Head_framed.png",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
                    <rect x="9" y="3" width="6" height="4" rx="1"/>
                    <path d="M9 14l2 2 4-4"/>
                  </svg>
                ),
                title: "No More Questions",
                desc: "No more mental math. No more scrawl on paper scorecards. No more wondering \"who won last time?\" or \"who really has hit the most holes in cornhole?\" Ranka has the answers.",
                image: "/Cornhole_framed.png",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="relative rounded-2xl p-8 flex flex-col-reverse sm:grid sm:grid-cols-[1fr_auto] sm:gap-6 sm:items-center gap-4"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  overflow: "visible",
                  zIndex: 1,
                }}
              >
                <div>
                  <div
                    className="flex items-center justify-center rounded-xl mb-5"
                    style={{
                      width: "52px",
                      height: "52px",
                      backgroundColor: "rgba(99,102,241,0.15)",
                      color: "#818cf8",
                    }}
                  >
                    {f.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                  <p style={{ color: "#64748b", lineHeight: 1.7 }}>{f.desc}</p>
                </div>
                <div
                  className="mx-auto sm:mx-0 flex-shrink-0"
                  style={{ width: "clamp(200px, 26vw, 300px)", margin: "-16px -24px -40px 0" }}
                >
                  <img
                    src={f.image}
                    alt={`${f.title} screenshot`}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "20px",
                      border: "1px solid rgba(255,255,255,0.12)",
                      boxShadow: "0 24px 60px rgba(0,0,0,0.55)",
                      display: "block",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="mx-6 mb-24 rounded-3xl text-center py-20 px-6"
        style={{
          background: "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.2))",
          border: "1px solid rgba(99,102,241,0.3)",
        }}
      >
        <img src="/AppLogo.svg" alt="Ranka" className="invert mx-auto mb-8" style={{ height: "64px", opacity: 0.9 }} />
        <h2 className="text-4xl font-extrabold mb-4" style={{ letterSpacing: "-0.02em" }}>
          Ready to settle the score?
        </h2>
        <p className="mb-8 text-lg" style={{ color: "#94a3b8" }}>
          Free to download. No account required to start.
        </p>
        <a
          href="/beta-testers"
          className="inline-flex items-center gap-3 font-bold text-lg px-8 py-4 rounded-2xl transition"
          style={{
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            boxShadow: "0 0 40px rgba(99,102,241,0.4)",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          Get Ranka for iPhone
        </a>
      </section>

      {/* Footer */}
      <footer
        className="text-center text-sm py-8 px-6"
        style={{
          color: "#334155",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        © {new Date().getFullYear()} Ranka. All rights reserved. · <a href="/privacy" style={{ color: "#475569", textDecoration: "underline" }}>Privacy Policy</a> · <a href="/support" style={{ color: "#475569", textDecoration: "underline" }}>Support</a> · <a href="/beta-testers" style={{ color: "#475569", textDecoration: "underline" }}>Beta</a>
      </footer>

    </main>
  );
}