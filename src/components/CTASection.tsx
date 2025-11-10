import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";

const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="page-shell">
        <Reveal>
          <div className="glass-surface relative overflow-hidden rounded-[4rem] border border-white/10 bg-[linear-gradient(135deg,rgba(107,70,193,0.18),rgba(0,0,0,0.85))]">
            {/* Enhanced background effects */}
            <div className="absolute -left-20 top-[-25%] h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.35),transparent_70%)] blur-[120px]" />
            <div className="absolute -right-28 bottom-[-35%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(107,70,193,0.28),transparent_70%)] blur-[140px]" />
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,rgba(255,255,255,0.03)_50%,transparent_100%)]" />
            
            <div className="relative grid gap-12 px-12 py-[clamp(5rem,8vw,7rem)] text-center md:px-20 lg:px-24">
              <div className="space-y-8">
                <p className="text-xs uppercase tracking-[0.45em] text-white/60 font-semibold">Professional Development</p>
                <h2 className="balanced-text text-[clamp(3rem,5.5vw,4.5rem)] font-bold text-white leading-[1.05]">
                  Advance Your Technology Career
                </h2>
                <div className="mx-auto max-w-4xl space-y-4">
                  <p className="text-xl leading-relaxed text-white/90">
                    Join over 1,200 professionals who have advanced their careers through our comprehensive training programs.
                  </p>
                  <p className="text-lg text-white/80">
                    Whether you're looking to enhance your technical skills or implement enterprise solutions, our proven curriculum and industry partnerships provide the foundation for long-term success.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSftmT9nAdqWqHIW5N_hM4JW5CFHNlKq-H_Sc0ndz_G3r4WXWA/viewform"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="btn btn-primary hover-lift rounded-xl px-12 py-4 text-base font-semibold uppercase tracking-[0.1em] min-w-[280px] sm:min-w-auto"
                >
                  Request Information
                </a>
                <Link
                  to="/contact"
                  className="btn btn-secondary hover-lift rounded-xl px-12 py-4 text-base font-semibold uppercase tracking-[0.1em] min-w-[280px] sm:min-w-auto"
                >
                  Enterprise Consultation
                </Link>
              </div>
              
              {/* Professional Trust Elements */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
                <div className="text-center">
                  <p className="text-sm text-white/90 font-medium mb-1">Quick Application Process</p>
                  <p className="text-xs text-white/70">Complete evaluation in under 10 minutes</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-white/90 font-medium mb-1">Industry Expert Faculty</p>
                  <p className="text-xs text-white/70">Senior developers from Fortune 500 companies</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-white/90 font-medium mb-1">Quality Assurance</p>
                  <p className="text-xs text-white/70">Comprehensive testing and code review</p>
                </div>
              </div>
              
              {/* Trust indicators */}
              <div className="mt-8 flex flex-col items-center gap-6 text-sm text-white/60">
                <p>Trusted by teams at startups and Fortune 500 companies</p>
                <div className="flex flex-wrap justify-center gap-8 text-xs uppercase tracking-wider">
                  <span className="opacity-60">Venture-backed startups</span>
                  <span className="opacity-40">•</span>
                  <span className="opacity-60">Global enterprises</span>
                  <span className="opacity-40">•</span>
                  <span className="opacity-60">University programs</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTASection;
