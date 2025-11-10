import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import courses from "@/data/courses";

const primaryLinks = [
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isCoursesOpen, setCoursesOpen] = useState(false);
  const [isMobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const coursePreviews = useMemo(() => courses.slice(0, 4), []);

  const navLinkClass = (isActive: boolean) =>
    [
      "text-base font-medium transition-colors",
      isActive ? "text-white" : "text-white/70 hover:text-white",
    ].join(" ");

  return (
    <header className={["sticky top-0 z-50 glass-navbar transition-all duration-300", scrolled ? "shadow-lg" : ""].join(" ")}>
      <div className="page-shell flex items-center justify-between" style={{ paddingTop: '24px', paddingBottom: '24px' }}>
        <Link to="/" className="group flex items-center" style={{ gap: '16px' }}>
          <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 flex items-center justify-center flex-shrink-0">
            <img 
              src="/stacko-logo.svg" 
              alt="STACKO Logo" 
              className="h-full w-full object-contain transition-transform group-hover:scale-105"
            />
          </div>
          <div className="leading-none">
            <p className="font-extrabold tracking-tight text-white transition-colors group-hover:text-primary text-lg sm:text-xl md:text-2xl" style={{ fontWeight: 800 }}>
              STACKO
            </p>
          </div>
        </Link>

        <nav className="hidden items-center lg:flex" style={{ gap: '40px' }}>
          <div
            className="relative"
            onMouseEnter={() => setCoursesOpen(true)}
            onMouseLeave={() => setCoursesOpen(false)}
          >
            <button type="button" className={navLinkClass(location.pathname.startsWith("/courses"))}>
              Courses
            </button>
            <AnimatePresence>
              {isCoursesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="glass-dropdown absolute left-0 top-12 w-[26rem] rounded-[2.2rem] p-6 z-50"
                >
                  <div className="flex flex-col gap-4">
                    {coursePreviews.map((course) => (
                      <Link
                        key={course.id}
                        to={"/courses#" + course.slug}
                        className="rounded-[1.6rem] border border-white/15 bg-white/10 px-4 py-3 transition hover:border-white/30 hover:bg-white/20"
                      >
                        <p className="text-sm font-semibold text-white">{course.title}</p>
                        <p className="text-xs text-white/70">{course.tagline}</p>
                      </Link>
                    ))}
                    <Link
                      to="/courses"
                      className="flex items-center justify-between rounded-[1.6rem] border border-dashed border-white/20 px-4 py-3 text-sm font-medium text-secondary-400 transition hover:border-secondary-400/60 hover:text-secondary-300"
                    >
                      View full catalog →
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {primaryLinks.map((link) => (
            <NavLink key={link.href} to={link.href} className={({ isActive }) => navLinkClass(isActive)}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center lg:flex" style={{ gap: '32px' }}>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSftmT9nAdqWqHIW5N_hM4JW5CFHNlKq-H_Sc0ndz_G3r4WXWA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ padding: '12px 24px', borderRadius: '8px', fontSize: '15px', fontWeight: 600 }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open("https://docs.google.com/forms/d/e/1FAIpQLSftmT9nAdqWqHIW5N_hM4JW5CFHNlKq-H_Sc0ndz_G3r4WXWA/viewform", "_blank", "noopener,noreferrer");
              return false;
            }}
          >
            Start Learning
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/8 lg:hidden"
          aria-label="Toggle navigation"
        >
          <span
            className="absolute block h-0.5 w-6 origin-center bg-white transition-transform duration-300"
            style={{ transform: isMobileOpen ? "rotate(45deg) translateY(0px)" : "translateY(-6px)" }}
          />
          <span
            className="absolute block h-0.5 w-6 origin-center bg-white transition-opacity duration-200"
            style={{ opacity: isMobileOpen ? 0 : 1 }}
          />
          <span
            className="absolute block h-0.5 w-6 origin-center bg-white transition-transform duration-300"
            style={{ transform: isMobileOpen ? "rotate(-45deg) translateY(0px)" : "translateY(6px)" }}
          />
        </button>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="glass-dropdown mx-5 mb-6 rounded-[2.4rem] p-6 lg:hidden"
          >
            <div className="mb-5">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Learn</p>
              <div className="mt-4 grid gap-3">
                {coursePreviews.map((course) => (
                  <Link
                    key={course.id}
                    to={"/courses#" + course.slug}
                    className="rounded-2xl border border-white/8 bg-white/10 px-4 py-3 text-sm text-white transition hover:border-white/16 hover:bg-white/18"
                  >
                    {course.title}
                  </Link>
                ))}
                <Link
                  to="/courses"
                  className="rounded-2xl border border-dashed border-white/10 px-4 py-3 text-sm text-secondary-500"
                >
                  Full catalog
                </Link>
              </div>
            </div>
            <div className="mb-5">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Explore</p>
              <div className="mt-4 grid gap-2">
                {primaryLinks.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    className={({ isActive }) =>
                      [
                        "rounded-2xl px-4 py-2 text-sm",
                        isActive ? "bg-white/12 text-white" : "text-white/65 hover:text-white",
                      ].join(" ")
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {/* Removed duplicate Start Learning button to fix overlay issue */}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
