import services from "@/data/services";
import Reveal from "@/components/Reveal";
import { Link } from "react-router-dom";

const engagementHighlights = [
  {
    title: "Discovery blueprint",
    description: "In-depth workshops with founders and stakeholders to align product strategy, success metrics, and team rituals.",
  },
  {
    title: "Glassmorphism design kit",
    description: "Award-winning visual language packaged as reusable tokens, component libraries, and motion specs for your squad.",
  },
  {
    title: "Delivery operations",
    description: "CI/CD, QA, analytics, and knowledge transfer artifacts so your team can iterate confidently after launch.",
  },
];

const Services = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <Reveal>
        <div className="max-w-7xl mx-auto px-4">
          <div className="glass-surface relative overflow-hidden rounded-[2.5rem] border border-white/12 bg-gradient-to-br from-purple-900/50 to-black/80 p-12 md:p-16 text-center">
            <div className="absolute -left-24 top-[-30%] h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.4),transparent_70%)] blur-[110px]" />
            <p className="text-xs uppercase tracking-[0.4em] text-secondary-500">STACKO Development</p>
            <h1 className="mt-6 text-3xl md:text-4xl font-bold text-white">
              Professional web development services
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-white/80">
              We build modern web applications using React, Node.js, and the latest technologies. From MVP to full-scale applications, we create solutions that work for your business.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center">
              <button 
                onClick={scrollToContact}
                className="btn btn-primary hover-lift rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em]"
              >
                Contact Us
              </button>
              <Link
                to="/portfolio"
                className="btn btn-secondary hover-lift rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em]"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="max-w-7xl mx-auto mt-16 px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.06}>
              <article
                className="glass-surface hover-lift rounded-[2.5rem] border border-white/14 p-8 h-full"
                id={service.slug}
              >
                <div className="flex items-center justify-end text-xs text-white/65">
                  <span className="text-secondary-500">{service.deliverables.length} key deliverables</span>
                </div>
                <h2 className="mt-6 text-2xl font-bold text-white">{service.title}</h2>
                <p className="mt-4 text-sm text-white/75">{service.description}</p>
                <div className="mt-8 grid gap-4 text-sm text-white/80">
                  <p className="text-xs uppercase tracking-[0.28em] text-secondary-500">Deliverables</p>
                  <ul className="grid gap-3">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-[6px] h-2.5 w-2.5 rounded-full bg-secondary-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 grid gap-4 text-sm text-white/80">
                  <p className="text-xs uppercase tracking-[0.28em] text-secondary-500">Outcomes</p>
                  <ul className="grid gap-3">
                    {service.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-3 text-white/75">
                        <span className="mt-[6px] h-2.5 w-2.5 rounded-full bg-secondary-500" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-sm text-secondary-500">
                  <button onClick={scrollToContact} className="transition hover:text-secondary-300">
                    Kick off this sprint →
                  </button>
                  <Link to="/portfolio" className="rounded-full border border-secondary-500/30 px-5 py-2 text-xs uppercase tracking-[0.24em]">
                    View work
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal>
        <div className="max-w-7xl mx-auto mt-16 px-4">
          <div className="grid gap-8 rounded-[2.5rem] border border-white/12 bg-black/45 p-12 md:grid-cols-3">
            {engagementHighlights.map((highlight) => (
              <div key={highlight.title} className="space-y-3">
                <p className="text-sm font-semibold text-white">{highlight.title}</p>
                <p className="text-sm text-white/70">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Contact Information Section - Always visible at bottom */}
      <div id="contact-section" className="max-w-7xl mx-auto mt-16 px-4">
        <div className="glass-surface rounded-[2.5rem] border border-white/12 bg-black/45 p-12 text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">Contact Information</h3>
          
          <div className="grid gap-8 md:grid-cols-2 text-center">
            <a 
              href="mailto:stackoindustries@gmail.com" 
              className="flex flex-col items-center gap-4 p-8 rounded-2xl border border-white/12 bg-black/40 hover:bg-black/60 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-secondary-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-3xl">📧</span>
              </div>
              <div>
                <p className="text-sm text-white/60 mb-2">Email us</p>
                <p className="text-xl font-semibold text-white">stackoindustries@gmail.com</p>
              </div>
            </a>
            
            <a 
              href="tel:+919751987380" 
              className="flex flex-col items-center gap-4 p-8 rounded-2xl border border-white/12 bg-black/40 hover:bg-black/60 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-secondary-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-3xl">📞</span>
              </div>
              <div>
                <p className="text-sm text-white/60 mb-2">Call us</p>
                <p className="text-xl font-semibold text-white">+91 9751987380</p>
              </div>
            </a>
          </div>
          
          <p className="mt-8 text-white/70">
            ⏰ We respond within 24 hours during business days
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
