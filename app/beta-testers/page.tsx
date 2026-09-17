const steps = [
  {
    n: 1,
    title: "Install TestFlight",
    image: "/TestFlight_framed.png",
    body: (
      <>
        <p>
          Ranka beta builds are distributed through Apple&rsquo;s TestFlight app, not the App
          Store.
        </p>
        <ol>
          <li>
            On your iPhone or iPad, open the App Store and search for{" "}
            <strong>TestFlight</strong>, or{" "}
            <a href="https://apps.apple.com/app/testflight/id899247664" target="_blank" rel="noreferrer">
              get it directly here
            </a>
            .
          </li>
          <li>Install it &mdash; it&rsquo;s free and made by Apple.</li>
          <li>Open TestFlight once so it&rsquo;s ready to accept your invite.</li>
        </ol>
      </>
    ),
  },
  {
    n: 2,
    title: "Install Ranka from TestFlight",
    image: "/TestFlight_Ranka_framed.png",
    body: (
      <>
        <ol>
          <li>
            Check your email for your <strong>Ranka TestFlight invite</strong>.
          </li>
          <li>Open the invite link on your iPhone/iPad and tap &ldquo;View in TestFlight.&rdquo;</li>
          <li>
            Tap <strong>Accept</strong>, then tap <strong>Install</strong>.
          </li>
          <li>
            Once installed, open Ranka from your home screen like any other app. TestFlight will
            notify you automatically whenever a new beta build/upgrade is ready. That might happen a lot in these early days.
          </li>
        </ol>
        <p className="note">
          Didn&rsquo;t get invited? Got a case of "FOMO"? <a href="mailto:support@rankaplay.com">Email me</a>{" "}
          and I&rsquo;ll send one to the address you want to use for testing.
        </p>
      </>
    ),
  },
  {
    n: 3,
    title: "Create your account",
    image: "/Account_framed.png",
    body: (
      <ol>
        <li>Open Ranka and tap <strong>Sign In</strong> on the welcome screen.</li>
        <li>Select <strong>Sign in with Apple</strong> or <strong>Sign in with Passkey</strong>. Now you're in.</li>
        <li>Click on your name in the top left to enter Account settings. Click on your name card to alter your picture, name, nickname, default color, and more.</li>
        <li>You can also start scoring games without an account &mdash; but that's pretty lame. Signing up unlocks
          CloudKit sync across devices and social features like score verification and sharing
          with friends.</li>
      </ol>
    ),
  },
  {
    n: 4,
    title: "Add managed players",
    image: "/New_Player_framed.png",
    body: (
      <>
        <p>
          Now I assume you have friend(s), or at least people that are willing to tolerate a single game with you. They can have Ranka too (if they ask nicely) or you can create them as <strong>Managed Players</strong>. Managed players let you track games and scores for people who don&rsquo;t have (or
          don&rsquo;t need) their own Ranka account &mdash; kids, family members, or friends
          playing on your device.
        </p>
        <ol>
          <li>
            Select <strong>Players</strong> from the bottom navigation bar
          </li>
          <li>
            Select <strong>Add</strong> in the top right corner
          </li>
          <li>Enter their name, nickname, photo, color, etc.</li>
          <li>Save &mdash; they will now appear anytime you add players to a game.</li>
        </ol>
      </>
    ),
  },
  {
    n: 5,
    title: "Start a game",
    image: "/Select_a_Game_framed.png",
    body: (
      <>
        <p>Do you really think you're ready to play? Prove it.</p>
        <ol>
        <li>Tap <strong>Start a New Game</strong> from the main menu.</li>
        <li>Pick the game you want to play &mdash; Ranka supports 400+ built-in types, or you can create a custom template. If you end up creating a custom template, let me know so I can create this standard for the future.</li>
        <li>Add players: your account, other Ranka users, managed players, or even a team of players.</li>
        <li>Log scores as you play, or enter them all at once at the end.</li>
        <li><strong>End Game</strong> and then <strong>Confirm & Rank It</strong> to save the game and update everyone&rsquo;s stats and rankings.</li>
        <li>There &mdash; you proved you were ready.</li>
        </ol>
      </>
    ),
  },
  {
    n: 6,
    title: "View rankings",
    image: "/Rankings_framed.png",
    body: (
      <ol>
        <li>Open the <strong>Rankings</strong> menu from the main menu's navigation bar.</li>
        <li>See where every player &mdash; account holders and managed players alike &mdash; stands overall.</li>
        <li>Filter by game type or time period for more specific leaderboards.</li>
        <li>Tap any player to see their full rankings, match history, win rate, stats and more.</li>
        <li>Select the <strong>checkbox</strong> to the left of multiple players to view their head-to-head stats.</li>
        <li>Explore other ranking tabs such as <strong>Games</strong> for specific game and game type rankings</li>
      </ol>
    ),
  },
  {
    n: 7,
    title: "Take beta screenshots & send feedback",
    image: "/Feedback_framed.png",
    body: (
      <>
        <p>
          Here's where you get to tell me how worthless I am. This is the most valuable part of being a beta tester &mdash; please report anything
          that looks wrong, feels confusing, could use some improvement, or crashes.
        </p>
        <p className="subhead">Taking a screenshot</p>
        <ol>
          <li>
            Take a screenshot &mdash; you know, like a normal person does on a phone. Press the <strong>Side Button + Volume Up</strong> at the same time to capture the
            screen.
          </li>
          <li>
            Tap <strong>Share</strong>, then choose <strong>Share Beta Feedback</strong> from the bottom of the share sheet.
          </li>
          <li>Write your feedback where it says "Write your feedback here..." Do I need to hold your hand through everything?</li>
          <li>Hit send &mdash; oh for Pete's sake it's the up arrow button.</li>
        </ol>
      </>
    ),
  },
];

export default function BetaTesters() {
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
          <a href="/">
            <img src="/AppLogo.svg" alt="Ranka" className="invert" style={{ height: "36px", width: "auto" }} />
          </a>
          <a
            href="mailto:support@rankaplay.com"
            className="bg-white text-gray-950 text-sm font-semibold px-5 py-2 rounded-full hover:bg-gray-200 transition"
          >
            Need an invite?
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative text-center px-6 pt-20 pb-16 max-w-2xl mx-auto">
        {/* Glow behind logo */}
        <div style={{
          position: "absolute",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "260px",
          height: "260px",
          background: "radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Logo */}
        <div className="flex justify-center mb-8" style={{ position: "relative" }}>
          <img
            src="/AppLogo.svg"
            alt="Ranka"
            className="invert"
            style={{ height: "88px", width: "auto", opacity: 0.95 }}
          />
        </div>

        <h1 className="text-4xl font-extrabold mb-4" style={{ letterSpacing: "-0.02em" }}>
          Beta Tester Guide
        </h1>
        <p className="text-lg" style={{ color: "#94a3b8", lineHeight: 1.7 }}>
          Welcome to Ranka, Beta testing people! Testers? Betas? Testees? Either way, thanks for helping test Ranka before launch. Here&rsquo;s everything you need to know to get started: installing
          the beta build, setting up your account and players, playing games, and sending feedback.
        </p>
      </section>

      {/* Steps */}
      <section className="max-w-3xl mx-auto px-6 pb-20 space-y-4">
        {steps.map((s) => (
          <div
            key={s.n}
            className="rounded-2xl p-6 sm:p-8"
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              backgroundColor: "rgba(255,255,255,0.03)",
            }}
          >
            <div className="flex flex-col-reverse sm:grid sm:grid-cols-[1fr_auto] sm:gap-8 sm:items-start gap-6">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="flex items-center justify-center rounded-full font-extrabold flex-shrink-0"
                    style={{
                      width: "36px",
                      height: "36px",
                      backgroundColor: "rgba(99,102,241,0.15)",
                      color: "#818cf8",
                    }}
                  >
                    {s.n}
                  </div>
                  <h2 className="text-xl font-bold">{s.title}</h2>
                </div>
                <div className="step-body">{s.body}</div>
              </div>
              {s.image && (
                <div className="mx-auto sm:mx-0 flex-shrink-0" style={{ width: "260px" }}>
                  <img
                    src={s.image}
                    alt={`${s.title} screenshot`}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "20px",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* Contact */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <div
          className="rounded-3xl text-center py-14 px-8"
          style={{
            background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.15))",
            border: "1px solid rgba(99,102,241,0.25)",
          }}
        >
          <h2 className="text-2xl font-extrabold mb-3" style={{ letterSpacing: "-0.02em" }}>
            Thanks for beta testing Ranka
          </h2>
          <p className="mb-6" style={{ color: "#94a3b8" }}>
            I'm going to keep the rest pretty vague intentionally. I want you to explore and try things out. Go forth and conquer.

            Questions, bugs, or ideas? Reach out any time &mdash; not just through TestFlight.

            I love you. I always have. 
          </p>
          <a
            href="mailto:support@rankaplay.com"
            className="inline-flex items-center gap-2 font-bold px-7 py-3 rounded-2xl transition"
            style={{
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              boxShadow: "0 0 30px rgba(99,102,241,0.35)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            support@rankaplay.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="text-center text-sm py-8 px-6"
        style={{
          color: "#334155",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        © {new Date().getFullYear()} Ranka. All rights reserved. · <a href="/privacy" style={{ color: "#475569", textDecoration: "underline" }}>Privacy Policy</a> · <a href="/support" style={{ color: "#475569", textDecoration: "underline" }}>Support/FAQ</a> · <a href="/beta-testers" style={{ color: "#475569", textDecoration: "underline" }}>Beta</a>
      </footer>

      <style>{`
        .step-body p { color: #94a3b8; line-height: 1.8; margin-bottom: 0.75rem; }
        .step-body ol { list-style: decimal; padding-left: 1.25rem; color: #cbd5e1; }
        .step-body ol li { margin-bottom: 0.6rem; line-height: 1.7; }
        .step-body .subhead { color: #818cf8; font-weight: 700; margin-top: 1.25rem; margin-bottom: 0.5rem; }
        .step-body a, .note a { text-decoration: underline; }
        .step-body .note {
          margin-top: 0.75rem;
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
          background: rgba(99,102,241,0.08);
          border-left: 3px solid #6366f1;
          color: #94a3b8;
          font-size: 0.95rem;
        }
      `}</style>

    </main>
  );
}
