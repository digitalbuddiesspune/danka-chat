import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/LogoNew.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
          {/* Brand Section - Larger */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-2xl flex items-center justify-center ">
                <img
                  src={Logo}
                  alt="Danka Logo"
                  className="h-20 w-60"
                />
              </div>
            
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed font-body">
              Experience authentic street food flavors with a modern twist.
              Bringing joy, one panipuri at a time.
            </p>

            {/* Social Media - Redesigned */}
            <div className="flex gap-3">
              {[
                {
                  href: "https://www.facebook.com/dankaforpanipurilovers",
                  label: "Facebook",
                  path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                },
                {
                  href: "https://www.instagram.com/danka_panipuri/",
                  label: "Instagram",
                  path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                },
                {
                  href: "https://wa.me/7887882300",
                  label: "WhatsApp",
                  path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center"
                  aria-label={social.label}
                >
                  <svg
                    className="w-7 h-7 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Section - Highlighted */}
          <div className="lg:col-span-4 bg-yellow-500/10 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20">
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-6 h-6 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <h3 className="text-lg font-bold font-heading">Stay Updated</h3>
            </div>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed font-body">
              Get the latest news, special offers, and delicious updates
              delivered to your inbox.
            </p>
            <div className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-gray-900/50 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all text-sm placeholder-gray-500"
                />
              </div>
              <button
                onClick={handleSubscribe}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold font-body px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-yellow-500/25 hover:shadow-xl hover:shadow-yellow-500/40 hover:scale-[1.02] text-sm"
              >
                Subscribe Now
              </button>
            </div>
            {subscribed && (
              <div className="mt-3 p-3 bg-yellow-500/20 border border-yellow-500/30 rounded-xl flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-yellow-400 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-yellow-400 text-sm font-medium font-body">
                  Successfully subscribed!
                </p>
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-8">
            {/* Getting Started */}
            <div>
              <h4 className="text-yellow-400 font-bold font-heading mb-4 text-sm uppercase tracking-wider">
                Explore
              </h4>
              <ul className="space-y-2.5">
                {[
                  { to: "/", label: "Home" },
                  { to: "/franchise", label: "Franchise" },
                  { to: "/about-us", label: "About Us" },
                
                  { to: "/contact-us", label: "Contact" },
                ].map((link, i) => (
                  <li key={i}>
                    {link.to.startsWith("#") ? (
                      <a
                        href={link.to}
                        onClick={(e) => handleLinkClick(e, link.to)}
                        className="text-gray-300 hover:text-yellow-400 transition-colors text-sm font-body flex items-center gap-2 group cursor-pointer"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-yellow-400 transition-colors"></span>
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        onClick={(e) => handleLinkClick(e, link.to)}
                        className="text-gray-300 hover:text-yellow-400 transition-colors text-sm font-body flex items-center gap-2 group cursor-pointer"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-yellow-400 transition-colors"></span>
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-yellow-400 font-bold font-heading mb-4 text-sm uppercase tracking-wider">
                Legal
              </h4>
              <ul className="space-y-2.5">
                {[
                  { to: "/terms", label: "Terms" },
                  { to: "/privacy", label: "Privacy" },
                  { to: "/cookies", label: "Cookies" },
                  { to: "/data-processing", label: "Data" },
                ].map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.to}
                      onClick={(e) => handleLinkClick(e, link.to)}
                      className="text-gray-300 hover:text-yellow-400 transition-colors text-sm font-body flex items-center gap-2 group cursor-pointer"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-yellow-400 transition-colors"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="text-gray-400 flex items-center gap-2 font-body">
              <span>© {currentYear} Danka.</span>
              <span className=" sm:inline">All rights reserved.</span>
            </div>

            <div className="flex items-center gap-1 text-gray-500 font-body">
              <span>Made with</span>
              <svg
                className="w-4 h-4 text-red-500 animate-pulse"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
              <span>in India</span>
            </div>

            <div className="flex gap-4 text-xs font-body">
              <Link
                to="/terms"
                onClick={(e) => handleLinkClick(e, "/terms")}
                className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer"
              >
                Terms
              </Link>
              <span className="text-gray-700">•</span>
              <Link
                to="/privacy"
                onClick={(e) => handleLinkClick(e, "/privacy")}
                className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer"
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
