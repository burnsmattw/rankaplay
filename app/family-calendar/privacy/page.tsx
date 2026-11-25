import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Family Calendar – Privacy Policy",
  description: "Privacy policy for the Family Calendar kiosk app.",
};

const LAST_UPDATED = "November 24, 2026";
const CONTACT_EMAIL = "support@rankaplay.com";

const sections: { title: string; body: string }[] = [
  {
    title: "Overview",
    body: "Family Calendar is a private, self-hosted calendar display for a single household. It runs on a device in the home (such as a Raspberry Pi connected to a touchscreen) and shows events from the family's connected calendar accounts. It is a personal project, not a commercial service. There are no ads, no analytics, and no tracking, and your data is never sold or shared.",
  },
  {
    title: "Where Your Data Lives",
    body: "All data is stored locally on the household's own device, in a local database. Family Calendar has no cloud backend of its own. Calendar data travels directly between your calendar provider (Google, Microsoft or Apple) and the device in your home. The developer does not receive or have access to your calendar data.",
  },
  {
    title: "Data We Access",
    body: "When you connect an account, Family Calendar requests only read-only access:\n\n• Google: your calendar events (calendar.readonly), your email address (to label the connected account), and contact names and birthdays (contacts.readonly), used only when you choose to import birthdays from your contacts in Settings\n• Microsoft / Outlook: your calendar events (Calendars.Read), your email address, and contact names and birthdays (Contacts.Read), used only for the same optional birthday import\n• iCloud: your calendar events over CalDAV, using an app-specific password that you generate and can revoke at any time\n\nFamily Calendar never creates, edits or deletes events in your accounts, and never sends email or changes your contacts. When birthdays are imported, only the name and month/day are kept. The birth year is discarded.",
  },
  {
    title: "Busy-Only Mode",
    body: "A Microsoft account (for example, a work account) can be connected in busy-only mode. In this mode Family Calendar requests only each event's start time, end time, all-day flag and availability status. Subjects, locations and attendees are never requested, never sent over the network, and never stored.",
  },
  {
    title: "Data Stored on the Device",
    body: "To work, the device stores:\n\n• OAuth access and refresh tokens (or the iCloud app-specific password) for each connected account\n• A local copy of synced calendar events, so they can be shown and kept available if the internet connection drops\n• Information you enter directly: family member names and colors, to-dos, goals, trips, birthdays and other special dates, settings, and screensaver photos\n\nThis information is used only to display the calendar in your home.",
  },
  {
    title: "Use of Google User Data",
    body: "Family Calendar's use and transfer of information received from Google APIs complies with the Google API Services User Data Policy, including the Limited Use requirements. Google user data is used only to show the household's calendar and imported birthdays on the device. It is not transferred to anyone, used for advertising, or used to train AI or machine learning models, and no person reads it except the household members using the display.",
  },
  {
    title: "Third-Party Services",
    body: "Besides your calendar providers, the device contacts two free public services that do not require an account:\n\n• Open-Meteo, for the weather forecast. Only the configured latitude and longitude are sent.\n• Nager.Date, for public holidays. Only the year and country code are sent.\n\nNo personal or calendar information is sent to these services.",
  },
  {
    title: "Revoking Access and Deleting Data",
    body: "You can disconnect an account at any time from Settings → Connected calendars. This removes its tokens and synced events from the device. You can also revoke access from your provider:\n\n• Google: myaccount.google.com/permissions\n• Microsoft: account.live.com/consent/Manage (personal accounts) or myapps.microsoft.com (work accounts)\n• Apple: appleid.apple.com → Sign-In and Security → App-Specific Passwords\n\nDeleting the app's local database on the device permanently removes all stored data.",
  },
  {
    title: "Children's Privacy",
    body: "Family Calendar may show events and to-dos for every member of a household, including children, but only as entered or synced by the adults who set up the device. It does not collect information from children through any online service.",
  },
  {
    title: "Changes to This Policy",
    body: "If this policy changes, the date at the top of this page will be updated.",
  },
  {
    title: "Contact",
    body: `Questions about this policy can be sent to ${CONTACT_EMAIL}.`,
  },
];

export default function FamilyCalendarPrivacy() {
  return (
    <main className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold mb-3" style={{ color: "#818cf8" }}>Family Calendar</p>
        <h1 className="text-4xl font-extrabold mb-2" style={{ letterSpacing: "-0.02em" }}>Privacy Policy</h1>
        <p className="mb-12 text-sm" style={{ color: "#475569" }}>Last updated: {LAST_UPDATED}</p>

        {sections.map((section) => (
          <div key={section.title} className="mb-10">
            <h2 className="text-xl font-bold mb-3">{section.title}</h2>
            <p style={{ color: "#94a3b8", lineHeight: 1.8, whiteSpace: "pre-line" }}>{section.body}</p>
          </div>
        ))}
      </section>

      <footer
        className="text-center text-sm py-8 px-6"
        style={{ color: "#334155", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <a href="/family-calendar" style={{ color: "#475569", textDecoration: "underline" }}>Family Calendar</a> · <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "#475569", textDecoration: "underline" }}>{CONTACT_EMAIL}</a>
      </footer>
    </main>
  );
}
