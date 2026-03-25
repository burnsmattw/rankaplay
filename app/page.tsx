export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">

      {/* Nav */}
      <nav className="flex justify-between items-center px-8 py-5 max-w-6xl mx-auto">
        <img src="/AppLogo.svg" alt="Ranka" className="h-8 w-auto invert" />
        <a
          href="https://apps.apple.com"
          className="bg-white text-gray-950 text-sm font-semibold px-4 py-2 rounded-full hover:bg-gray-200 transition"
        >
          Download on iOS
        </a>
      </nav>

      {/* Hero */}
      <section className="text-center px-6 pt-24 pb-32 max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold leading-tight mb-6">
          Score every game.<br />Rank everyone.
        </h1>
        <p className="text-xl text-gray-400 mb-10">
          Ranka is the ultimate scorekeeper for any game — board games, sports,
          yard games, card games, and more. Track wins, rankings, and history
          across all your players and leagues.
        </p>
        <a
          href="https://apps.apple.com"
          className="inline-block bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-lg px-8 py-4 rounded-2xl transition"
        >
          Download Free on the App Store
        </a>
      </section>

      {/* Features */}
      <section className="bg-gray-900 py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            { icon: "🎮", title: "50+ Game Types", desc: "From Ping Pong to Bowling to Beer Pong — Ranka has a scorecard built for it." },
            { icon: "🏅", title: "Live Rankings", desc: "Rankings update in real time as scores are recorded. Always know who's on top." },
            { icon: "👥", title: "Leagues & Teams", desc: "Create leagues, manage rosters, track seasons. Run your own mini tournament." },
          ].map((f) => (
            <div key={f.title} className="bg-gray-800 rounded-2xl p-8">
              <div className="text-5xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-24 px-6">
        <h2 className="text-4xl font-bold mb-4">Ready to settle the score?</h2>
        <p className="text-gray-400 mb-8">Free to download. No account required to start.</p>
        <a
          href="https://apps.apple.com"
          className="inline-block bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-lg px-8 py-4 rounded-2xl transition"
        >
          Get Ranka for iPhone
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-600 text-sm py-8">
        © {new Date().getFullYear()} Ranka. All rights reserved.
      </footer>

    </main>
  );
}
