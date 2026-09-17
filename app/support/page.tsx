"use client";
import { useState, type ReactNode } from "react";

/** Renders `**text**` inside an FAQ answer as bold. */
function renderBold(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}

const faqs: { q: string; a: string }[] = [
  {
    q: "Is Ranka free to download?",
    a: "Yes — Ranka is free to download on the App Store. There is a paid subscription to unlock advanced features such as extended rankings with advanced analytics, leagues, and touranments.",
  },
  {
    q: "Do I need an account to use Ranka?",
    a: "You can start scoring games immediately without creating an account - though we highly recommend creating an account so you can sync up with Ranka friends and start logging games together. Creating an account unlocks CloudKit sync across devices and social features like score verification and sharing with friends.",
  },
  {
    q: "How do I add players to a game?",
    a: "When starting a new game, tap '**Add Players**' or use the quick selection links for common players. Add Players will show you a full list of all available players with an easy search function. You can also create players on the fly from within the Add Players screen by selecting + or the 'Create New Player' link at the bottom. You can add as many players or teams as the game supports.",
  },
  {
    q: "Can I edit or delete a game after it's been recorded?",
    a: "The creator/owner of the logged game can edit the game via the Match History. Any edits made to an existing game will be sent to other Ranka accounts as a notification. This is to preserve the integrity of the game and ensure games are not confirmed and then altered to adjust stats or standings. Games can be deleted by hard-pressing the game in Match History and selecting Delete. Other Ranka accounts will be notified of games when they are deleted."
  },
  {
    q: "How does score verification work?",
    a: "When you log a game, other players who are Ranka users can be notified to verify the result. Once verified, the game is marked as confirmed.",
  },
  {
    q: "What games does Ranka support?",
    a: "Ranka supports 300+ game types including board games, card games, yard games, sports, and more. If a game isn't in the list, you can create a custom game template. Or let us know and we'll be happy to include it system-wide.",
  },
  {
    q: "How do leagues and tournaments work?",
    a: "You can create a league, invite players, and Ranka will track standings across all games played. Schedules can be generated and scheduled games will show on the main menu for players set for those games. Tournaments support bracket, round-robins, multi-day cummmulative championships with automatic advancement.",
  },
  {
    q: "My data isn't syncing across devices. What should I do?",
    a: "Don't panic. Make sure you're signed in with the same Apple ID on both devices and that iCloud is enabled for Ranka in your iOS Settings. If issues persist, try signing out and back in from the app's Settings screen.",
  },
    {
    q: "I can't use my phone during the game to log scores.",
    a: "Not really a question, but we get you. That's where your Apple Watch comes into play. Start a game in Ranka on your phone then open the Ranka app on your watch. The new game will display on your watch where you can track scores realtime and it will feed back to your phone. Perfect for games like Tennis where you might not want to carry your phone while playing.",
  },
  {
    q: "This is sweet. What other features does Ranka suppport?",
    a: "We're glad you think so too. Ranka supports Siri - you can ask Siri to start a new game, bring you to rankings, and more.",
  },
  {
    q: "How do I delete my account?",
    a: "You can delete your account and all associated data from within the app: Settings → Delete Account. This is permanent and cannot be undone.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(255,255,255,0.03)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex justify-between items-center px-6 py-5 gap-4"
      >
        <span className="font-semibold text-base">{q}</span>
        <span style={{ color: "#818cf8", flexShrink: 0, transition: "transform 0.2s", display: "inline-block", transform: open ? "rotate(45deg)" : "rotate(0deg)" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12h14"/>
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5" style={{ color: "#94a3b8", lineHeight: 1.8 }}>
          {renderBold(a)}
        </div>
      )}
    </div>
  );
}

export default function Support() {
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
            href="https://apps.apple.com"
            className="bg-white text-gray-950 text-sm font-semibold px-5 py-2 rounded-full hover:bg-gray-200 transition"
          >
            Download on iOS
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
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <img src="/AppLogo.svg" alt="Ranka" className="invert relative mx-auto mb-6" style={{ height: "56px", opacity: 0.95 }} />
        <h1 className="relative text-4xl font-extrabold mb-4" style={{ letterSpacing: "-0.02em" }}>Support/FAQ</h1>
        <p className="text-lg" style={{ color: "#94a3b8" }}>
          Find answers to common questions below, or{" "}
          <a href="mailto:support@rankaplay.com" style={{ color: "#818cf8", textDecoration: "underline" }}>
            reach out
          </a>{" "}
          and we'll get back to you.
        </p>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-20">
        <h2 className="text-xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
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
          <h2 className="text-2xl font-extrabold mb-3" style={{ letterSpacing: "-0.02em" }}>Still need help?</h2>
          <p className="mb-6" style={{ color: "#94a3b8" }}>
            Send us an email and we'll get back to you as soon as we can.
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
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
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

    </main>
  );
}