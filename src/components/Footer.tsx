import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative" style={{ marginTop: '40px', background: 'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.95) 100%)', backdropFilter: 'blur(30px)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-8 md:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 sm:gap-6 lg:gap-8">
        {/* Brand Column */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
            <div className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center flex-shrink-0">
              <img 
                src="/stacko-logo.svg" 
                alt="STACKO Logo" 
                className="h-full w-full object-contain drop-shadow-[0_0_12px_rgba(139,92,246,0.5)]"
              />
            </div>
            <div>
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white leading-none tracking-tight">STACKO</p>
              <p className="text-xs text-secondary-400 mt-1 sm:mt-1.5 font-medium tracking-wide">Programming Collective</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-white/60 mb-3 sm:mb-4 max-w-md">
            STACKO teaches modern web development through hands-on courses and provides professional development services.
          </p>
          <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-2 text-xs sm:text-sm text-white/60">
            <a className="hover:text-secondary-400 transition-all duration-300 font-medium" href="mailto:stackoindustries@gmail.com">
              stackoindustries@gmail.com
            </a>
            <span className="text-white/30">•</span>
            <a className="hover:text-secondary-400 transition-all duration-300 font-medium" href="tel:+919751987380">
              +91 9751987380
            </a>
          </div>
        </div>

        {/* Company Column */}
        <div>
          <p className="text-xs uppercase tracking-widest font-bold text-secondary-400 mb-3 sm:mb-4 opacity-90">
            Company
          </p>
          <div className="flex flex-col gap-2.5">
            <Link className="text-xs sm:text-sm text-white/60 hover:text-white hover:translate-x-1 transition-all duration-300 font-medium" to="/about">
              About & Founders
            </Link>
            <Link className="text-xs sm:text-sm text-white/60 hover:text-white hover:translate-x-1 transition-all duration-300 font-medium" to="/services">
              Development Services
            </Link>
            <Link className="text-xs sm:text-sm text-white/60 hover:text-white hover:translate-x-1 transition-all duration-300 font-medium" to="/contact">
              Book a Consultation
            </Link>
          </div>
        </div>

        {/* Resources Column */}
        <div>
          <p className="text-xs uppercase tracking-widest font-bold text-secondary-400 mb-3 sm:mb-4 opacity-90">
            Resources
          </p>
          <div className="flex flex-col gap-2.5">
            <Link className="text-xs sm:text-sm text-white/60 hover:text-white hover:translate-x-1 transition-all duration-300 font-medium" to="/courses">
              Courses
            </Link>
            <a 
              className="text-xs sm:text-sm text-white/60 hover:text-white hover:translate-x-1 transition-all duration-300 font-medium" 
              href="https://docs.google.com/forms/d/e/1FAIpQLSftmT9nAdqWqHIW5N_hM4JW5CFHNlKq-H_Sc0ndz_G3r4WXWA/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
            <a 
              className="text-xs sm:text-sm text-white/60 hover:text-white hover:translate-x-1 transition-all duration-300 font-medium" 
              href="mailto:stackoindustries@gmail.com"
            >
              Support
            </a>
          </div>
        </div>

        {/* Connect Column */}
        <div>
          <p className="text-xs uppercase tracking-widest font-bold text-secondary-400 mb-3 sm:mb-4 opacity-90">
            Connect
          </p>
          <div className="flex flex-col gap-2.5">
            <a 
              className="text-xs sm:text-sm text-white/60 hover:text-white hover:translate-x-1 transition-all duration-300 font-medium break-words" 
              href="https://docs.google.com/forms/d/e/1FAIpQLSftmT9nAdqWqHIW5N_hM4JW5CFHNlKq-H_Sc0ndz_G3r4WXWA/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Form
            </a>
            <a 
              className="text-xs sm:text-sm text-white/60 hover:text-white hover:translate-x-1 transition-all duration-300 font-medium break-all" 
              href="mailto:stackoindustries@gmail.com"
            >
              stackoindustries@gmail.com
            </a>
            <a 
              className="text-xs sm:text-sm text-white/60 hover:text-white hover:translate-x-1 transition-all duration-300 font-medium" 
              href="tel:+919751987380"
            >
              +91 9751987380
            </a>
            <a 
              className="text-xs sm:text-sm text-white/60 hover:text-white hover:translate-x-1 transition-all duration-300 font-medium" 
              href="https://docs.google.com/forms/d/e/1FAIpQLSftmT9nAdqWqHIW5N_hM4JW5CFHNlKq-H_Sc0ndz_G3r4WXWA/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
      </div>
      <div className="mt-4 sm:mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3 sm:py-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-white/40 font-medium text-center">
              © {currentYear} STACKO Labs. Built for the next generation of creators.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
