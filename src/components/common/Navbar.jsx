import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PenTool, Menu, X, ArrowRight, ArrowLeft } from "lucide-react";
import { navLinks } from "../../data/siteData";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "../../context/LanguageContext";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);
  const { t } = useTranslation();
  const { isRtl } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      ref={navRef}
      id="navbar"
      className={`sticky-nav fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-3.5">
          {/* Brand Logo with Lucide PenTool */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-xl"
            aria-label="الرئيسية / Home"
          >
            <div className="bg-gradient-to-br from-amber-600 via-yellow-500 to-amber-600 text-slate-950 p-2.5 rounded-xl shadow-lg shadow-amber-500/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <PenTool size={20} strokeWidth={2} aria-hidden="true" />
            </div>
            <span className="text-xl md:text-2xl font-black text-slate-900 dark:text-slate-100 leading-tight">
              {t("nav.brandFirst")}
              <br />
              <span className="text-amber-500 dark:text-amber-400">
                {t("nav.brandSecond")}
              </span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Desktop Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-bold text-sm tracking-wide transition-all duration-300 border-b-2 pb-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm ${
                  isActive(link.path)
                    ? "text-amber-600 dark:text-amber-400 font-black border-amber-500"
                    : "text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 border-transparent hover:border-amber-500/50"
                }`}
              >
                {t(`nav.${link.key}`)}
              </Link>
            ))}
          </nav>

          {/* Action Controls: Language, Theme & Contact CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
            <Link
              to="/contact"
              className="btn-gold px-5 py-2.5 rounded-xl text-sm font-black shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 inline-flex items-center gap-1.5 group/btn"
            >
              <span>{t("nav.contact")}</span>
              {isRtl ? (
                <ArrowLeft size={16} strokeWidth={2.2} className="transition-transform group-hover/btn:-translate-x-1" aria-hidden="true" />
              ) : (
                <ArrowRight size={16} strokeWidth={2.2} className="transition-transform group-hover/btn:translate-x-1" aria-hidden="true" />
              )}
            </Link>
          </div>

          {/* Mobile Menu & Quick Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageToggle />
            <ThemeToggle />
            <button
              id="menu-btn"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileOpen((prev) => !prev);
              }}
              className="text-slate-700 dark:text-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              aria-label={isMobileOpen ? "إغلاق القائمة" : "فتح القائمة"}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-menu"
            >
              {isMobileOpen ? (
                <X size={22} strokeWidth={2} aria-hidden="true" />
              ) : (
                <Menu size={22} strokeWidth={2} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {isMobileOpen && (
          <nav
            id="mobile-menu"
            aria-label="Mobile Navigation"
            className="lg:hidden py-3 bg-white/95 dark:bg-night-900/95 backdrop-blur-xl rounded-2xl my-2 shadow-2xl border border-slate-200 dark:border-amber-500/20 animate-in fade-in duration-200"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 px-5 transition font-bold text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                  isActive(link.path)
                    ? "text-amber-600 dark:text-amber-400 bg-amber-500/10 font-black border-s-4 border-amber-500"
                    : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-amber-500"
                }`}
              >
                {t(`nav.${link.key}`)}
              </Link>
            ))}
            <div className="p-3 pt-2">
              <Link
                to="/contact"
                className="btn-gold w-full py-3 rounded-xl text-center text-sm font-black flex items-center justify-center gap-2 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <span>{t("nav.contact")}</span>
                {isRtl ? (
                  <ArrowLeft size={16} strokeWidth={2.2} aria-hidden="true" />
                ) : (
                  <ArrowRight size={16} strokeWidth={2.2} aria-hidden="true" />
                )}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
