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
            href="https://apps.apple.com"
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
          <span style={{ color: "#818cf8" }}>Rank everyone.</span>
        </h1>
        <p className="text-xl mb-10" style={{ color: "#94a3b8", lineHeight: 1.7 }}>
          Ranka is the ultimate scorekeeper for any game — board games, sports,
          yard games, card games, and more. Track wins, rankings, and history
          across all your players and leagues.
        </p>
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
            { value: "150+", label: "Game Types" },
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                title: "150+ Game Types",
                desc: "From Ping Pong to Bowling to Beer Pong — Ranka has a scorecard built for every game you play. Don't see one? Create your own game template on the fly.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="3"/>
                    <path d="M5 20a7 7 0 0 1 14 0"/>
                    <path d="M17 8a3 3 0 1 1 0-6"/>
                    <path d="M21 18a5 5 0 0 0-6-4.9"/>
                    <path d="M7 8a3 3 0 1 0 0-6"/>
                    <path d="M3 18a5 5 0 0 1 6-4.9"/>
                  </svg>
                ),
                title: "Leagues & Teams",
                desc: "Create leagues, manage rosters, track seasons. Generate schedules automatically. Run your own tournament and find out who amongst you reigns supreme.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 21V7a4 4 0 0 1 8 0v14"/>
                    <path d="M5 21h14"/>
                    <path d="M12 3v2"/>
                    <path d="M7 7H5a2 2 0 0 0-2 2v2a6 6 0 0 0 6 6"/>
                    <path d="M17 7h2a2 2 0 0 1 2 2v2a6 6 0 0 1-6 6"/>
                  </svg>
                ),
                title: "Live Rankings",
                desc: "Rankings update in real time as scores are recorded. Always know who's sitting on top with specialized game rankings and head-to-head stats.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl p-8"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
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
        © {new Date().getFullYear()} Ranka. All rights reserved.
      </footer>

    </main>
  );
}