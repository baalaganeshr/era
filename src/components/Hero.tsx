import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const programTracks = [
  "Enterprise Dashboard Development",
  "Advanced React Certification",
  "AI Delivery Pods",
  "Corporate Training Pipeline",
];



const Hero = React.memo(() => {
  return (
    <section className="relative isolate overflow-x-hidden bg-[radial-gradient(circle_at_top,#2E1D57_0%,#06070C_68%)] section-padding">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(139,92,246,0.22),transparent_65%)]" />
        <div className="absolute -top-24 -left-12 h-72 w-72 rounded-full bg-gradient-to-br from-purple-600/35 to-indigo-600/10 blur-3xl" />
        <div className="absolute -bottom-28 right-0 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-500/25 to-transparent blur-[140px]" />
      </div>

      <div className="page-shell grid lg:grid-cols-2 items-center gap-6 md:gap-8 lg:gap-12 xl:gap-16 min-h-[70vh] md:min-h-[80vh] py-8 md:py-12">
        <div className="flex flex-col justify-center max-w-2xl text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="uppercase tracking-wider font-semibold mb-6 md:mb-8 text-xs md:text-sm"
            style={{ color: 'var(--color-primary)' }}
          >
            STACKO - Professional Development Platform
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 md:mb-6 leading-tight font-extrabold"
            style={{ letterSpacing: '-0.02em' }}
          >
            Learn modern web development from expert developers
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0 text-white/80 px-4 lg:px-0"
          >
            Master React, Node.js, and full-stack development through hands-on courses. Build real projects with guidance from experienced developers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 md:gap-4 w-full px-4 lg:px-0"
          >
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSftmT9nAdqWqHIW5N_hM4JW5CFHNlKq-H_Sc0ndz_G3r4WXWA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold w-full sm:w-auto min-w-[140px]"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open("https://docs.google.com/forms/d/e/1FAIpQLSftmT9nAdqWqHIW5N_hM4JW5CFHNlKq-H_Sc0ndz_G3r4WXWA/viewform", "_blank", "noopener,noreferrer");
                return false;
              }}
            >
              Start Learning
            </a>
            <Link to="/services" className="btn btn-secondary px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold w-full sm:w-auto min-w-[140px]">
              View Services
            </Link>
          </motion.div>


        </div>

        <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
            className="hero-code-block w-full max-w-md lg:max-w-lg rounded-2xl md:rounded-3xl border border-white/10 bg-[linear-gradient(150deg,rgba(17,24,39,0.9),rgba(15,23,42,0.8))] backdrop-blur-lg shadow-xl transition-all duration-300 hover:border-white/15 mx-4 lg:mx-0"
            style={{ padding: '24px md:32px' }}
          >
            <p className="text-xs uppercase tracking-[0.32em] text-secondary-500 font-bold">Programs launching this quarter</p>
            <div className="mt-6 space-y-4 text-white/70" style={{ fontSize: '14px', lineHeight: '1.8' }}>
              {programTracks.map((track) => (
                <div key={track} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shadow-lg shadow-purple-500/50" />
                  <span className="leading-relaxed font-medium">{track}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-white/8 bg-white/4 p-6 text-sm text-white/70 transition-all duration-300 hover:bg-white/6">
              <p className="font-bold text-white tracking-tight">Remote-first · Weekly delivery · Portfolio-grade assets</p>
              <p className="mt-3 leading-relaxed">
                Teams collaborate live with STACKO mentors, ship production features, and exit with a polished playbook.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
