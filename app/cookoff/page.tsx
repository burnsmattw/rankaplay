export default function Cookoff() {
  return (
    <main
      className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6"
      style={{ textAlign: "center" }}
    >
      <div className="max-w-md">
        <img
          src="/AppLogo.svg"
          alt="Ranka"
          className="invert mx-auto mb-8"
          style={{ height: "48px", width: "auto" }}
        />
        <h1 className="text-3xl font-extrabold mb-4" style={{ letterSpacing: "-0.02em" }}>
          Ranka is in beta
        </h1>
        <p className="mb-8" style={{ color: "#94a3b8", lineHeight: 1.7 }}>
          This cookoff is being tracked in Ranka, currently available via TestFlight.
          Ask the person who shared this link for an invite, or reach out below.
        </p>
        <a
          href="mailto:support@rankaplay.com"
          className="inline-flex items-center gap-2 font-bold px-7 py-3 rounded-2xl transition"
          style={{
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            boxShadow: "0 0 30px rgba(99,102,241,0.35)",
          }}
        >
          support@rankaplay.com
        </a>
      </div>
    </main>
  );
}
