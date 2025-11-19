import React from 'react';
import { Link } from "react-router-dom";
import MobileButton from "./MobileButton";

const Hero = React.memo(() => {
  return (
    <section className="relative isolate bg-gradient-to-b from-[#1a0f2e] via-[#0f0a1f] to-[#06070C] section-padding overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(99,102,241,0.12),transparent_50%)]" />
        <div className="absolute -top-24 -left-12 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute -bottom-28 right-0 h-96 w-96 rounded-full bg-indigo-600/15 blur-3xl" />
      </div>

      <div className="page-shell flex items-center justify-center min-h-[70vh] md:min-h-[80vh] py-12 md:py-16">
        <div className="flex flex-col justify-center max-w-4xl text-center w-full px-4">
          <span
            className="uppercase tracking-wider font-semibold mb-4 md:mb-6 text-sm md:text-base animate-[fadeInUp_0.6s_ease-out] text-purple-400"
          >
            🚀 STACKO - Professional Development Platform
          </span>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 md:mb-6 leading-[1.1] font-black animate-[fadeInUp_0.8s_ease-out_0.1s_both] tracking-tight"
          >
            Learn modern web development from{' '}
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              expert developers
            </span>
          </h1>

          <p
            className="text-lg md:text-xl leading-relaxed mb-8 md:mb-10 max-w-2xl mx-auto text-white/90 animate-[fadeInUp_0.9s_ease-out_0.2s_both] font-medium"
          >
            Build modern apps, master full-stack skills, and level up faster with Stacko.
          </p>

          <div
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full max-w-xl mx-auto animate-[fadeInUp_0.9s_ease-out_0.3s_both]"
          >
            <MobileButton
              variant="primary"
              size="lg"
              href="https://docs.google.com/forms/d/e/1FAIpQLSftmT9nAdqWqHIW5N_hM4JW5CFHNlKq-H_Sc0ndz_G3r4WXWA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e?: React.MouseEvent) => {
                e?.preventDefault();
                e?.stopPropagation();
                window.open("https://docs.google.com/forms/d/e/1FAIpQLSftmT9nAdqWqHIW5N_hM4JW5CFHNlKq-H_Sc0ndz_G3r4WXWA/viewform", "_blank", "noopener,noreferrer");
              }}
            >
              🎯 Start Learning
            </MobileButton>
            
            <Link 
              to="/services"
              className="inline-flex items-center justify-center font-semibold rounded-2xl px-10 py-5 text-lg min-h-[60px] w-full sm:w-auto sm:min-w-[180px] bg-white/10 border border-white/20 text-white backdrop-blur-sm hover:bg-white/15 hover:border-white/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md"
            >
              📋 View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
