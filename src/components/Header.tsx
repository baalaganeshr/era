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
    <header className={["sticky top-0 z-50 glass-navbar transition-all duration-300", scrolled ? "shadow-lg" : ""].join(" ")}>
      <div className="page-shell flex items-center justify-between py-6">
        <Link to="/" className="group flex items-center gap-4">
          <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 flex items-center justify-center flex-shrink-0">
            <img
              src="/stacko-logo.svg"
              alt="STACKO Logo"
              className="h-full w-full object-contain transition-transform group-hover:scale-105"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <div className="leading-none">
            <p className="font-extrabold tracking-tight text-white transition-colors group-hover:text-primary text-lg sm:text-xl md:text-2xl" style={{ fontWeight: 800 }}>
              STACKO
            </p>
          </div>
        </Link>

        <nav className="hidden items-center lg:flex gap-10">
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
            className="rounded-full bg-gradient-to-r from-secondary-500 to-primary px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 shadow-lg shadow-secondary-500/50 hover:shadow-secondary-500/80"
            style={{
              boxShadow: '0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)',
            }}
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
        <div className="lg:hidden border-t border-white/10 bg-black/95 backdrop-blur-lg">
          <nav className="page-shell py-6 flex flex-col gap-4">
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
              className="rounded-full bg-gradient-to-r from-secondary-500 to-primary px-6 py-3 text-sm font-semibold text-white text-center"
              style={{
                boxShadow: '0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)',
              }}
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
