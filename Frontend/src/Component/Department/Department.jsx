import { useState } from "react";
import Navbar from "../Navbar";

const underGrad = [
  "B.E. Aeronautical Engineering",
  "B.E. Automobile Engineering",
  "B.E. BioMedical Engineering",
  "B.E. Civil Engineering",
  "B.E. Computer Science & Design",
  "B.E. Computer Science & Engineering",
  "B.E. Computer Science & Engineering (Cyber Security)",
  "B.E. Computer Science & Engineering (IoT)",
  "B.E. Electrical & Electronics Engineering",
  "B.E. Electronics & Communication Engineering",
  "B.E. Mechanical Engineering",
  "B.Tech. Artificial Intelligence & Data Science",
  "B.Tech. Information Technology",
];

const postGrad = [
  "M.E. Computer Science & Engineering",
  "M.E. VLSI Design",
  "M.B.A. Business Administration",
  "M.C.A. Computer Applications",
];

const tabs = [
  { id: "programmes", label: "Programmes Offered" },
  { id: "eligibility", label: "Eligibility" },
  { id: "cutoff", label: "Cutoff Marks" },
  { id: "application", label: "Application Form 2026" },
];

const EligibilityContent = () => (
  <div>
    <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-purple-700 pl-3">
      Eligibility
    </h2>
    <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
      <div className="bg-purple-50 border border-purple-100 rounded-lg p-4">
        <p className="font-semibold text-purple-800 mb-1">For B.E. / B.Tech</p>
        <p>Must have passed 10+2 or equivalent with Physics, Chemistry & Mathematics with a minimum of 45% aggregate (40% for reserved categories).</p>
      </div>
      <div className="bg-purple-50 border border-purple-100 rounded-lg p-4">
        <p className="font-semibold text-purple-800 mb-1">For M.E. / M.Tech</p>
        <p>Must have a relevant B.E. / B.Tech degree with a minimum of 50% aggregate marks.</p>
      </div>
      <div className="bg-purple-50 border border-purple-100 rounded-lg p-4">
        <p className="font-semibold text-purple-800 mb-1">For M.B.A.</p>
        <p>Any degree with minimum 50% aggregate. Valid TANCET / CMAT / CAT score preferred.</p>
      </div>
    </div>
  </div>
);

const CutoffContent = () => (
  <div>
    <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-purple-700 pl-3">
      Cutoff Marks
    </h2>
    <div className="overflow-x-auto">
      <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-purple-700 text-white">
            <th className="px-4 py-3 text-left">Programme</th>
            <th className="px-4 py-3 text-center">OC</th>
            <th className="px-4 py-3 text-center">BC</th>
            <th className="px-4 py-3 text-center">MBC</th>
            <th className="px-4 py-3 text-center">SC/ST</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["B.E. CSE", "198.5", "192.0", "185.5", "170.0"],
            ["B.E. ECE", "195.0", "188.5", "180.0", "165.0"],
            ["B.Tech. AI & DS", "196.5", "190.0", "183.0", "168.5"],
            ["B.E. Mech", "182.0", "175.5", "168.0", "155.0"],
            ["B.E. Civil", "178.5", "172.0", "164.5", "150.0"],
          ].map(([prog, oc, bc, mbc, sc], i) => (
            <tr key={prog} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="px-4 py-3 font-medium text-gray-800">{prog}</td>
              <td className="px-4 py-3 text-center text-gray-600">{oc}</td>
              <td className="px-4 py-3 text-center text-gray-600">{bc}</td>
              <td className="px-4 py-3 text-center text-gray-600">{mbc}</td>
              <td className="px-4 py-3 text-center text-gray-600">{sc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const ApplicationContent = () => (
  <div>
    <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-purple-700 pl-3">
      Application Form 2026
    </h2>
    <div className="space-y-4">
      <p className="text-gray-600 text-sm leading-relaxed">
        Applications for the academic year 2026–27 are now open. Fill out the form below or download the PDF application.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {["Full Name", "Date of Birth", "Email Address", "Phone Number", "Programme Applying For", "10+2 Percentage"].map((field) => (
          <div key={field}>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">{field}</label>
            <input
              type="text"
              placeholder={`Enter ${field}`}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
        ))}
      </div>
      <button className="mt-2 bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold text-sm px-6 py-2.5 rounded-full transition-colors duration-200 shadow">
        Submit Application →
      </button>
    </div>
  </div>
);

const ProgrammesContent = () => (
  <div>
    <h2 className="text-2xl font-bold text-gray-800 mb-2 border-l-4 border-purple-700 pl-3">
      Programmes Offered
    </h2>
    <a href="#" className="text-purple-700 text-sm underline hover:text-purple-900 mb-6 inline-block">
      Programmes Offered and Approved Intake
    </a>

    <div className="mt-4">
      <p className="font-bold text-gray-800 mb-3">Under Graduate</p>
      <ul className="space-y-2">
        {underGrad.map((p) => (
          <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-700 shrink-0" />
            {p}
          </li>
        ))}
      </ul>
    </div>

    <div className="mt-6">
      <p className="font-bold text-gray-800 mb-3">Post Graduate</p>
      <ul className="space-y-2">
        {postGrad.map((p) => (
          <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-700 shrink-0" />
            {p}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

function Admissions() {
  const [activeTab, setActiveTab] = useState("programmes");

  const renderContent = () => {
    switch (activeTab) {
      case "programmes": return <ProgrammesContent />;
      case "eligibility": return <EligibilityContent />;
      case "cutoff": return <CutoffContent />;
      case "application": return <ApplicationContent />;
      default: return <ProgrammesContent />;
    }
  };

  return (
  <div className="min-h-screen bg-gray-100 font-serif">
    <Navbar />

    {/* Hero Section */}
    <div className="relative bg-gray-100 pt-8 sm:pt-10 pb-6 sm:pb-8 text-center overflow-hidden px-4">

      {/* Decorative Stars */}
      <span className="absolute top-6 left-6 sm:left-12 text-purple-800 text-xl sm:text-3xl">✦</span>
      <span className="absolute top-12 right-6 sm:right-16 text-purple-800 text-lg sm:text-2xl">✦</span>

      <p className="text-xs sm:text-sm text-gray-600 flex items-center justify-center gap-2 mb-2">
        <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
        Top Science & Technology Institution in India
      </p>

      <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-purple-700 tracking-tight mb-2">
        Admissions
      </h1>

      <p className="text-xs sm:text-sm text-gray-500">
        <a href="/" className="hover:text-purple-700">🏠</a>
        <span className="mx-2 text-purple-700">›</span>
        <span className="text-purple-700 font-medium">Admissions</span>
      </p>

      {/* QS Badge */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-gray-800 text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1.5 sm:py-2 rounded border-2 border-yellow-400 text-center leading-tight hidden sm:block">
        <p className="text-yellow-400 text-[8px] sm:text-[10px]">QS I·GAUGE</p>
        <p className="text-sm sm:text-base tracking-widest">DIAMOND</p>
      </div>
    </div>

    {/* Mobile Tabs */}
    <div className="md:hidden px-4 mb-4 overflow-x-auto">
      <div className="flex gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition ${
              activeTab === tab.id
                ? "bg-purple-700 text-white"
                : "bg-white text-gray-700 border"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>

    {/* Body */}
    <div className="max-w-6xl mx-auto px-4 pb-16 flex flex-col md:flex-row gap-6">

      {/* Sidebar (Desktop Only) */}
      <aside className="hidden md:block w-64 shrink-0 sticky top-24 h-fit">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full text-left px-5 py-4 text-sm font-medium transition ${
                activeTab === tab.id
                  ? "bg-purple-700 text-white"
                  : "text-gray-700 hover:bg-purple-50 hover:text-purple-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <button className="mt-6 w-full bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold text-sm px-5 py-2.5 rounded-full shadow transition">
          Admissions Open 2026
        </button>
      </aside>

      {/* Content */}
      <main className="flex-1 bg-white rounded-xl shadow-sm p-4 sm:p-6 md:p-8 min-h-[300px]">
        {renderContent()}
      </main>
    </div>
  </div>
);
}

export default Admissions;
