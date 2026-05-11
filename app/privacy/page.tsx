export default function Privacy() {
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

      {/* Content */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-extrabold mb-2" style={{ letterSpacing: "-0.02em" }}>Privacy Policy</h1>
        <p className="mb-12 text-sm" style={{ color: "#475569" }}>Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

        {[
          {
            title: "Overview",
            body: "Ranka is built with your privacy in mind. We do not sell your personal data, share it with advertisers, or use it for any purpose beyond operating the app. This policy explains what data we collect, why we collect it, and how it is stored.",
          },
          {
            title: "Data We Collect",
            body: "Ranka collects only the data necessary to provide its features:\n\n• Account information (name, email address) when you sign in with Apple\n• Game scores, results, and history that you record in the app\n• Player profiles you create within the app\n• Rankings, stats, and league or tournament data you generate\n\nWe do not collect location data, browsing history, or any data unrelated to the app's core functionality.",
          },
          {
            title: "How We Store Your Data",
            body: "Your data is stored securely in Apple's CloudKit infrastructure, associated with your iCloud account. This means your data is subject to Apple's privacy and security standards. You can use Ranka without an account — in guest mode, all data is stored locally on your device only.",
          },
          {
            title: "Data Sharing",
            body: "We do not sell, rent, or share your personal data with third parties. If you use Ranka's social features (such as sharing game results or verifying scores with friends), only the data you explicitly choose to share is visible to other users.",
          },
          {
            title: "Sign in with Apple",
            body: "Ranka uses Sign in with Apple for authentication. Apple may give you the option to hide your real email address. We only receive the information Apple provides and use it solely to identify your account within Ranka.",
          },
          {
            title: "Data Deletion",
            body: "You can delete your Ranka account and all associated data at any time from within the app under Settings → Account → Delete Account. Upon deletion, your data is permanently removed from our systems.",
          },
          {
            title: "Children's Privacy",
            body: "Ranka is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13.",
          },
          {
            title: "Changes to This Policy",
            body: "We may update this privacy policy from time to time. We will notify you of significant changes by updating the date at the top of this page. Continued use of the app after changes constitutes acceptance of the updated policy.",
          },
          {
            title: "Contact",
            body: "If you have any questions about this privacy policy or how your data is handled, please contact us at privacy@rankaplay.com.",
          },
        ].map((section) => (
          <div key={section.title} className="mb-10">
            <h2 className="text-xl font-bold mb-3">{section.title}</h2>
            <p style={{ color: "#94a3b8", lineHeight: 1.8, whiteSpace: "pre-line" }}>{section.body}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer
        className="text-center text-sm py-8 px-6"
        style={{
          color: "#334155",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        © {new Date().getFullYear()} Ranka. All rights reserved. · <a href="/privacy" style={{ color: "#475569" }}>Privacy Policy</a> · <a href="/support" style={{ color: "#475569" }}>Support</a>
      </footer>

    </main>
  );
}
