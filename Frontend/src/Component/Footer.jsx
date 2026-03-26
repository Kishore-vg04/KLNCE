import { useState } from "react";

const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const profile = ["About", "Leadership", "Governance", "Collaborations"];
  const academics = [
    "Departments",
    "Admissions",
    "Facilities",
    "Student Life",
    "Research",
    "Alumni",
    "Curriculum Feedback",
  ];
  const important = [
    "Anti Ragging",
    "HelpDesk",
    "ARIIA Data",
    "ARIIA Validation",
    "NIRF",
    "NAAC-SSR",
    "Mandatory Disclosure",
    "Committees & Cells",
  ];
  const extra = ["HR Manual", "Careers"];

  const socials = [
    { id: "fb", label: "Facebook", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
    { id: "tw", label: "Twitter", path: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" },
    { id: "ig", label: "Instagram", path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" },
    { id: "li", label: "LinkedIn", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
  ];

  return (
    <footer className="bg-white border-t border-gray-100 text-gray-700">

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

        {/* Brand */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-5">
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-2">
              About Us
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              We are a leading Engineering college in India,
              <span className="text-purple-700 font-semibold"> KLN COLLEGE OF ENGINEERING</span>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            {socials.map((s) => (
              <button
                key={s.id}
                onMouseEnter={() => setHoveredIcon(s.id)}
                onMouseLeave={() => setHoveredIcon(null)}
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition ${
                  hoveredIcon === s.id
                    ? "bg-purple-700 text-white scale-110"
                    : "border-gray-300 text-gray-500 hover:border-purple-400"
                }`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d={s.path} />
                </svg>
              </button>
            ))}
          </div>
        </div>

        <NavColumn title="Profile" links={profile} />
        <NavColumn title="Academics" links={academics} />

        {/* Important */}
        <NavColumn title="Important" links={[...important, ...extra]} />

        {/* Contact */}
        <div className="text-center sm:text-left">
          <p className="text-xs font-bold text-purple-700 uppercase tracking-widest mb-4">
            Contact
          </p>

          <div className="text-sm text-gray-600 space-y-3">
            <div>
              <p className="font-semibold text-gray-800">Head Office</p>
              <p>Chennai - 600 010</p>
            </div>

            <div>
              <p className="font-semibold text-gray-800">Campus</p>
              <p>Tamil Nadu 602105</p>
            </div>

            <div>
              <p className="font-semibold text-gray-800">Phone</p>
              <p>044-26442472</p>
            </div>

            <div>
              <p className="font-semibold text-gray-800">Email</p>
              <p className="text-purple-700">admin@kln.edu.in</p>
            </div>
          </div>
        </div>
      </div>

      {/* Admission Banner */}
      <div className="bg-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-lg sm:text-2xl font-bold">
            Admissions Open <span className="text-yellow-400">2026</span>
          </p>
          <button className="bg-yellow-400 text-purple-900 font-bold text-sm px-6 py-2.5 rounded-full hover:bg-yellow-300 transition">
            Apply Now →
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-2 text-center sm:text-left">
          <p>© {new Date().getFullYear()} KLN Institutions</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

const NavColumn = ({ title, links }) => (
  <div className="text-center sm:text-left">
    <p className="text-xs font-bold text-purple-700 uppercase tracking-widest mb-4">
      {title}
    </p>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link}>
          <a
            href="#"
            className="text-sm text-gray-600 hover:text-purple-700 transition"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;