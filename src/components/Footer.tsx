import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ marginTop: '120px', borderTop: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(20px)' }}>
      <div className="page-shell grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr]" style={{ gap: '48px md:64px', paddingTop: '60px md:80px', paddingBottom: '40px' }}>
        {/* Brand Column */}
        <div className="md:col-span-2 lg:col-span-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start" style={{ gap: '16px', marginBottom: '24px' }}>
            <div className="h-12 w-12 md:h-16 md:w-16 flex items-center justify-center flex-shrink-0">
              <img 
                src="/stacko-1.0/stacko-logo.svg" 
                alt="STACKO Logo" 
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <p className="text-xl md:text-2xl font-extrabold text-white" style={{ lineHeight: 1 }}>STACKO</p>
              <p className="text-small" style={{ color: 'var(--color-text-muted)', marginTop: '4px' }}>Programming Collective</p>
            </div>
          </div>
          <p className="text-small mx-auto md:mx-0" style={{ maxWidth: '400px', color: 'var(--color-text-secondary)', marginBottom: '24px' }}>
            STACKO teaches modern web development through hands-on courses and provides professional development services.
          </p>
          <div className="flex flex-col md:flex-row flex-wrap items-center justify-center md:justify-start text-small gap-3 md:gap-4" style={{ color: 'var(--color-text-secondary)' }}>
            <a className="transition hover:text-white break-all text-center" href="mailto:stackoindustries@gmail.com">
              stackoindustries@gmail.com
            </a>
            <span className="hidden md:block" style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
            <a className="transition hover:text-white" href="tel:+919751987380">
              +91 9751987380
            </a>
          </div>
        </div>

        {/* Company Column */}
        <div>
          <p className="text-sm uppercase tracking-wider font-semibold" style={{ color: 'var(--color-primary)', marginBottom: '16px' }}>
            Company
          </p>
          <div className="flex flex-col" style={{ gap: '16px' }}>
            <Link className="text-small transition hover:text-white" style={{ color: 'var(--color-text-secondary)' }} to="/about">
              About & Founders
            </Link>
            <Link className="text-small transition hover:text-white" style={{ color: 'var(--color-text-secondary)' }} to="/blog">
              Programming Blog
            </Link>
            <Link className="text-small transition hover:text-white" style={{ color: 'var(--color-text-secondary)' }} to="/services">
              Development Services
            </Link>
            <Link className="text-small transition hover:text-white" style={{ color: 'var(--color-text-secondary)' }} to="/contact">
              Book a Consultation
            </Link>
          </div>
        </div>

        {/* Resources Column */}
        <div>
          <p className="text-sm uppercase tracking-wider font-semibold" style={{ color: 'var(--color-primary)', marginBottom: '16px' }}>
            Resources
          </p>
          <div className="flex flex-col" style={{ gap: '16px' }}>
            <Link className="text-small transition hover:text-white" style={{ color: 'var(--color-text-secondary)' }} to="/courses">
              Courses
            </Link>
            <Link className="text-small transition hover:text-white" style={{ color: 'var(--color-text-secondary)' }} to="/blog">
              Blog
            </Link>
            <a 
              className="text-small transition hover:text-white" 
              style={{ color: 'var(--color-text-secondary)' }} 
              href="https://docs.google.com/forms/d/e/1FAIpQLSftmT9nAdqWqHIW5N_hM4JW5CFHNlKq-H_Sc0ndz_G3r4WXWA/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
            <a 
              className="text-small transition hover:text-white" 
              style={{ color: 'var(--color-text-secondary)' }} 
              href="mailto:stackoindustries@gmail.com"
            >
              Support
            </a>
          </div>
        </div>

        {/* Legal Column */}
        <div>
          <p className="text-sm uppercase tracking-wider font-semibold" style={{ color: 'var(--color-primary)', marginBottom: '16px' }}>
            Legal
          </p>
          <div className="flex flex-col" style={{ gap: '16px' }}>
            <Link className="text-small transition hover:text-white" style={{ color: 'var(--color-text-secondary)' }} to="/privacy">
              Privacy
            </Link>
            <Link className="text-small transition hover:text-white" style={{ color: 'var(--color-text-secondary)' }} to="/terms">
              Terms
            </Link>
            <a 
              className="text-small transition hover:text-white" 
              style={{ color: 'var(--color-text-secondary)' }} 
              href="https://docs.google.com/forms/d/e/1FAIpQLSftmT9nAdqWqHIW5N_hM4JW5CFHNlKq-H_Sc0ndz_G3r4WXWA/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Accessibility
            </a>
          </div>
        </div>

        {/* Social Column */}
        <div>
          <p className="text-sm uppercase tracking-wider font-semibold" style={{ color: 'var(--color-primary)', marginBottom: '16px' }}>
            Connect
          </p>
          <div className="flex flex-col" style={{ gap: '16px' }}>
            <a 
              className="text-small transition hover:text-white" 
              style={{ color: 'var(--color-text-secondary)' }} 
              href="https://docs.google.com/forms/d/e/1FAIpQLSftmT9nAdqWqHIW5N_hM4JW5CFHNlKq-H_Sc0ndz_G3r4WXWA/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Form
            </a>
            <a 
              className="text-small transition hover:text-white" 
              style={{ color: 'var(--color-text-secondary)' }} 
              href="mailto:stackoindustries@gmail.com"
            >
              stackoindustries@gmail.com
            </a>
            <a 
              className="text-small transition hover:text-white" 
              style={{ color: 'var(--color-text-secondary)' }} 
              href="tel:+919751987380"
            >
              +91 9751987380
            </a>
            <a 
              className="text-small transition hover:text-white" 
              style={{ color: 'var(--color-text-secondary)' }} 
              href="https://docs.google.com/forms/d/e/1FAIpQLSftmT9nAdqWqHIW5N_hM4JW5CFHNlKq-H_Sc0ndz_G3r4WXWA/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '32px', paddingBottom: '32px' }}>
        <div className="page-shell flex flex-col md:flex-row md:items-center md:justify-between" style={{ gap: '16px' }}>
          <p className="text-small" style={{ color: 'var(--color-text-muted)' }}>
            © {currentYear} STACKO Labs. Built for the next generation of creators.
          </p>
          <div className="flex flex-wrap text-small" style={{ gap: '24px', color: 'var(--color-text-muted)' }}>
            <Link className="transition hover:text-white" to="/privacy">
              Privacy
            </Link>
            <Link className="transition hover:text-white" to="/terms">
              Terms
            </Link>
            <a className="transition hover:text-white" href="#">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
