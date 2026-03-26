import { useState } from "react";
import Navbar from "../Component/Navbar";

import Overview from "../Component/About/Overview";
import VisionMission from "../Component/About/VisionMission";
import Program from "../Component/About/Program";
import History from "../Component/About/History";
import Founder from "../Component/About/Founder";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "vision", label: "Vision & Mission" },
  { id: "program", label: "Programs" },
  { id: "history", label: "History" },
  { id: "founder", label: "Founder" },
];

const About = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <Overview />;
      case "vision":
        return <VisionMission />;
      case "program":
        return <Program />;
      case "history":
        return <History />;
      case "founder":
        return <Founder />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-serif">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-gray-100 pt-8 sm:pt-10 pb-6 sm:pb-8 text-center px-4">
        <span className="absolute top-6 left-6 text-purple-800 text-xl">✦</span>
        <span className="absolute top-10 right-6 text-purple-800 text-lg">✦</span>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-purple-700 mb-2">
          About Us
        </h1>

        <p className="text-xs sm:text-sm text-gray-500">
          <a href="/" className="hover:text-purple-700">🏠</a>
          <span className="mx-2 text-purple-700">›</span>
          <span className="text-purple-700 font-medium">About</span>
        </p>
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

        {/* Sidebar */}
        <aside className="hidden md:block w-64 sticky top-24 h-fit">
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
        </aside>

        {/* Content */}
        <main className="flex-1 bg-white rounded-xl shadow-sm p-4 sm:p-6 md:p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default About;