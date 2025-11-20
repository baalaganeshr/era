import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const primaryLinks = [
  { label: "Courses", href: "/courses" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 16);
          ticking = false;
        });
        ticking = true;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLinkClass = (isActive: boolean) =>
    [
      "text-base font-medium transition-colors",
      isActive ? "text-white" : "text-white/70 hover:text-white",
    ].join(" ");

  return (
    <header className={["sticky top-0 z-50 transition-all duration-300 bg-black backdrop-blur-xl", scrolled ? "shadow-lg" : ""].join(" ")}>
      <div className="w-full px-8 lg:px-12 xl:px-16 flex items-center h-20">
        {/* Logo Section - Left */}
        <Link to="/" className="group flex items-center gap-3 mr-auto">
          <div className="h-14 w-14 flex items-center justify-center flex-shrink-0">
            <img
              src="/stacko-logo.svg"
              alt="STACKO Logo"
              className="h-full w-full object-contain transition-transform group-hover:scale-105"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <span className="font-extrabold text-white text-2xl tracking-tight transition-colors group-hover:text-primary" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800 }}>
            STACKO
          </span>
        </Link>

        {/* Navigation - Center/Right */}
        <nav className="hidden lg:flex items-center gap-10">
          {primaryLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) => navLinkClass(isActive)}
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/courses"
            className="rounded-full bg-gradient-to-r from-primary to-secondary px-7 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
          >
            Start Learning
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen(!isMobileOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-6 bg-white transition-transform ${isMobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`h-0.5 w-6 bg-white transition-opacity ${isMobileOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-white transition-transform ${isMobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {isMobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-black">
          <nav className="px-8 py-4 flex flex-col gap-4">
            {primaryLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) => navLinkClass(isActive)}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/courses"
              className="rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-bold text-white text-center"
            >
              Start Learning
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
