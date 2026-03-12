import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../components/LanguageContext";
import { demoArtisans, getArtisanCopy } from "../data/demoData";

const DEMO_BOOKINGS = [
  { id: 1, visitor: "Ravi Kumar", package: "1-2 persons", date: "March 18, 2026", people: 1, status: "Confirmed" },
  { id: 2, visitor: "Priya Sharma", package: "3-5 group", date: "March 25, 2026", people: 4, status: "Pending" },
  { id: 3, visitor: "Arjun Mehta", package: "6-10 group", date: "April 3, 2026", people: 12, status: "Confirmed" }
];

export default function ArtisanDashboardPage({ user }) {
  const { language, text } = useLanguage();
  const navigate = useNavigate();
  const artisan = getArtisanCopy(demoArtisans[0], language);

  const handleLogout = () => {
    window.localStorage.removeItem("visakruthiUser");
    navigate("/");
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">

      {/* Header */}
      <div className="mb-8 flex flex-wrap items-start justify-between gap-4 rounded-4xl bg-linear-to-r from-terracotta to-[#F07828] px-8 py-7 text-white shadow-xl shadow-terracotta/20">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/60">
            {text("Artisan Dashboard", "కళాకారుడు డాష్‌బోర్డ్")}
          </p>
          <h1 className="mt-1 font-display text-3xl font-bold">
            {text("Welcome", "స్వాగతం")}, {artisan.name} 🎨
          </h1>
          <p className="mt-1 text-sm text-white/65">
            {artisan.craftType} · {artisan.location}
          </p>
        </div>
        <button
          onClick={handleLogout}
          className="rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
        >
          {text("Logout", "లాగ్అవుట్")}
        </button>
      </div>

      {/* Stat Cards */}
      <div className="grid gap-5 md:grid-cols-3">
        <div className="mesh-border card-surface rounded-[1.6rem] p-6">
          <div className="inline-flex rounded-xl bg-terracotta/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-terracotta">
            {text("Bookings", "బుకింగ్స్")}
          </div>
          <p className="mt-4 font-display text-5xl font-bold text-indigo">3</p>
          <p className="mt-1 text-sm text-ink/55">{text("Active bookings", "చురుకైన బుకింగ్స్")}</p>
        </div>
        <div className="mesh-border card-surface rounded-[1.6rem] p-6">
          <div className="inline-flex rounded-xl bg-gold/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold">
            {text("Profile Views", "ప్రొఫైల్ వ్యూలు")}
          </div>
          <p className="mt-4 font-display text-5xl font-bold text-indigo">47</p>
          <p className="mt-1 text-sm text-ink/55">{text("This month", "ఈ నెల")}</p>
        </div>
        <div className="mesh-border card-surface rounded-[1.6rem] p-6">
          <div className="inline-flex rounded-xl bg-[#16A366]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#16A366]">
            {text("Visitors Served", "సేవించిన సందర్శకులు")}
          </div>
          <p className="mt-4 font-display text-5xl font-bold text-indigo">17</p>
          <p className="mt-1 text-sm text-ink/55">{text("Total this season", "ఈ సీజన్ మొత్తం")}</p>
        </div>
      </div>

      {/* Craft Profile + Contact */}
      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_280px]">
        <div className="mesh-border card-surface rounded-[1.8rem] p-6">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-terracotta">{text("Craft Profile", "కళా ప్రొఫైల్")}</p>
          <h3 className="mt-3 font-display text-3xl font-bold text-indigo">{artisan.name}</h3>
          <p className="mt-1 text-sm font-semibold text-terracotta">{artisan.craftType}</p>
          <p className="mt-3 text-base leading-7 text-ink/75">{artisan.bio}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-2xl bg-sand px-4 py-2 text-sm font-semibold text-indigo">{artisan.location}</span>
            <span className="rounded-2xl bg-sand px-4 py-2 text-sm font-semibold text-indigo">{artisan.experienceTag}</span>
          </div>
          <Link
            to={`/artisans/${artisan.id}`}
            className="mt-5 inline-flex rounded-full bg-indigo px-5 py-2.5 text-sm font-bold text-sand transition hover:bg-terracotta"
          >
            {text("View Public Profile", "పబ్లిక్ ప్రొఫైల్ చూడండి")}
          </Link>
        </div>

        <div className="mesh-border card-surface rounded-[1.8rem] p-6">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-terracotta">{text("Contact", "సంప్రదింపు")}</p>
          <div className="mt-4 space-y-3">
            <div className="rounded-2xl bg-sand/60 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink/45">{text("Phone", "ఫోన్")}</p>
              <p className="mt-1 font-semibold text-indigo">{artisan.contact?.phone}</p>
            </div>
            <div className="rounded-2xl bg-sand/60 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink/45">{text("Email", "ఈమెయిల్")}</p>
              <p className="mt-1 font-semibold text-indigo">{artisan.contact?.email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Preview */}
      <div className="mt-6 mesh-border card-surface rounded-[1.8rem] p-6">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-terracotta">{text("Gallery", "గ్యాలరీ")}</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {artisan.gallery?.map((img, index) => (
            <img key={index} src={img} alt={`Gallery ${index + 1}`} className="h-44 w-full rounded-[1.2rem] object-cover" />
          ))}
        </div>
      </div>

      {/* Upcoming Bookings */}
      <div className="mt-6 mesh-border card-surface rounded-[1.8rem] p-6">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-terracotta">
          {text("Upcoming Bookings", "రాబోయే బుకింగ్స్")}
        </p>
        <div className="mt-5 space-y-3">
          {DEMO_BOOKINGS.map((b) => (
            <div key={b.id} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white/70 px-5 py-4">
              <div>
                <p className="font-semibold text-indigo">{b.visitor}</p>
                <p className="text-sm text-ink/60">
                  {b.package} · {b.people} {text("people", "మంది")} · {b.date}
                </p>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-bold ${
                  b.status === "Confirmed"
                    ? "bg-[#16A366]/12 text-[#16A366]"
                    : "bg-gold/15 text-gold"
                }`}
              >
                {b.status === "Confirmed" ? text("Confirmed", "నిర్ధారించబడింది") : text("Pending", "పెండింగ్")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
