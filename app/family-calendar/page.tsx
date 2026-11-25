import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Family Calendar",
  description: "A wall-mounted, touch-screen calendar that brings a household's Google, Outlook and iCloud calendars together on one display.",
};

const CONTACT_EMAIL = "support@rankaplay.com";

const features: { title: string; body: string }[] = [
  {
    title: "Every calendar in one view",
    body: "Connect several Google, Outlook / Microsoft 365 and iCloud accounts. Their events are merged into one day-by-day view.",
  },
  {
    title: "Color-coded by person",
    body: "Each event is matched to a family member and tinted in their color. Tap an event to reassign it, or filter the display to just one person.",
  },
  {
    title: "Shared to-dos",
    body: "A family to-do list with per-person assignments and a small points tally for finished items.",
  },
  {
    title: "Birthdays, holidays & weather",
    body: "Banners for public holidays, birthdays and anniversaries, plus a weather strip for the day ahead.",
  },
  {
    title: "Works offline",
    body: "The last sync is kept on the device, so the calendar stays up even when the internet drops.",
  },
  {
    title: "Art mode",
    body: "When nobody is using it, the screen switches to a full-screen art and photo screensaver. Tap it to bring the calendar back.",
  },
];

const dataUses: { provider: string; body: string }[] = [
  {
    provider: "Google",
    body: "Read-only access to Google Calendar, to show your events on the display. Read-only access to contacts, used only if you choose to import birthdays, and only names and birthdays are read. Your email address is used to label the connected account.",
  },
  {
    provider: "Microsoft / Outlook",
    body: "Read-only access to your calendar and, for the optional birthday import, your contacts. Work accounts can be connected in busy-only mode, where only event times and availability are read.",
  },
  {
    provider: "iCloud",
    body: "Read-only access to your calendars over CalDAV, using an app-specific password that you can revoke at any time.",
  },
];

export default function FamilyCalendarHome() {
  return (
    <main className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
        <p className="text-sm font-semibold mb-4" style={{ color: "#818cf8" }}>A personal home project</p>
        <h1 className="text-5xl font-extrabold mb-6" style={{ letterSpacing: "-0.03em" }}>Family Calendar</h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: "#94a3b8", lineHeight: 1.7 }}>
          A wall-mounted, touch-screen calendar that brings the whole household&apos;s schedule together. It pulls
          events from each family member&apos;s Google, Outlook and iCloud calendars and shows them on one shared
          display at home.
        </p>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl p-6"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <h2 className="text-lg font-bold mb-2">{f.title}</h2>
              <p className="text-sm" style={{ color: "#94a3b8", lineHeight: 1.7 }}>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works / data use */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-extrabold mb-4" style={{ letterSpacing: "-0.02em" }}>How it uses your data</h2>
        <p className="mb-8" style={{ color: "#94a3b8", lineHeight: 1.8 }}>
          Family Calendar runs on a small computer in the home (such as a Raspberry Pi) and keeps everything on that
          device. It has no cloud backend, ads or analytics. It only reads calendars and never creates, changes or
          deletes anything in your accounts.
        </p>
        <div className="space-y-6">
          {dataUses.map((d) => (
            <div key={d.provider}>
              <h3 className="font-bold mb-1">{d.provider}</h3>
              <p style={{ color: "#94a3b8", lineHeight: 1.8 }}>{d.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-8" style={{ color: "#94a3b8", lineHeight: 1.8 }}>
          For full details, read the{" "}
          <a href="/family-calendar/privacy" className="underline" style={{ color: "#a5b4fc" }}>privacy policy</a>.
        </p>
      </section>

      {/* Footer */}
      <footer
        className="text-center text-sm py-8 px-6"
        style={{ color: "#334155", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        Family Calendar ·{" "}
        <a href="/family-calendar/privacy" style={{ color: "#475569", textDecoration: "underline" }}>Privacy Policy</a> ·{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "#475569", textDecoration: "underline" }}>{CONTACT_EMAIL}</a>
      </footer>
    </main>
  );
}
