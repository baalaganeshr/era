import Reveal from "@/components/Reveal";

const officeHours = [
  {
    title: "Education partnerships",
    description: "Universities and bootcamps looking to integrate STACKO curriculum or internship tracks.",
  },
  {
    title: "Product sprints",
    description: "Founders and product leaders needing rapid delivery with a design-forward engineering team.",
  },
  {
    title: "Talent network",
    description: "Companies hiring STACKO alumni or offering apprenticeship-style roles for our fellows.",
  },
];

const Contact = () => {
  return (
    <div className="flex flex-col gap-[calc(var(--spacing-section)*1.1)] pb-[calc(var(--spacing-section)*1.4)] pt-[calc(var(--spacing-block)*0.6)]">
      <Reveal>
        <div className="section-shell">
          <div className="glass-surface rounded-[3.6rem] border border-white/12 bg-[linear-gradient(135deg,rgba(107,70,193,0.35),rgba(0,0,0,0.87))] px-10 py-[clamp(3.5rem,6vw,5.5rem)] md:px-16 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-secondary-500">Contact STACKO</p>
            <h1 className="mt-6 text-[clamp(2.6rem,4.4vw,3.8rem)] font-semibold text-white">Let’s architect your next chapter</h1>
            <p className="mt-6 max-w-3xl text-lead text-white/80 mx-auto">
              Share your goals, timeline, and challenges. We’ll assemble a tailored roadmap—whether that’s a cohort seat, a full-stack team on demand, or an AI build that makes your ops sing.
            </p>
          </div>
        </div>
      </Reveal>

      <div className="section-shell grid gap-12 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <div className="glass-surface rounded-[3rem] border border-white/14 p-12 h-fit">
            <p className="text-xs uppercase tracking-[0.32em] text-secondary-500">Get started</p>
            <p className="mt-4 text-sm text-white/70">
              Tell us about your project and we'll get back to you within 24 hours. Our team is ready to help you bring your vision to life.
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="rounded-2xl border border-white/12 bg-black/40 p-6">
                <p className="text-sm font-semibold text-white">Quick Response</p>
                <p className="mt-2 text-sm text-white/70">We respond to all inquiries within 24 hours during business days.</p>
              </div>
              
              <div className="rounded-2xl border border-white/12 bg-black/40 p-6">
                <p className="text-sm font-semibold text-white">Free Consultation</p>
                <p className="mt-2 text-sm text-white/70">Initial consultation is completely free with no commitment required.</p>
              </div>
              
              <div className="rounded-2xl border border-white/12 bg-black/40 p-6">
                <p className="text-sm font-semibold text-white">Custom Solutions</p>
                <p className="mt-2 text-sm text-white/70">Every project gets a tailored approach based on your specific needs.</p>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-secondary-500/30 bg-secondary-500/10 p-6 text-sm text-secondary-500">
              <p className="font-semibold">Start Your Project</p>
              <div className="mt-4">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSftmT9nAdqWqHIW5N_hM4JW5CFHNlKq-H_Sc0ndz_G3r4WXWA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary inline-block rounded-2xl px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] hover:scale-105 transition-transform duration-200"
                >
                  Contact Us Now
                </a>
              </div>
              <p className="mt-3 text-white/65">Fill out our project inquiry form to get started.</p>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="glass-surface rounded-[3rem] border border-white/14 p-12">
            <p className="text-xs uppercase tracking-[0.32em] text-secondary-500">Office hours</p>
            <p className="mt-4 text-sm text-white/70">
              We host weekly consults. Choose your track and we’ll pair you with the right founder or lead engineer.
            </p>
            <div className="mt-8 space-y-6">
              {officeHours.map((slot) => (
                <div key={slot.title} className="rounded-2xl border border-white/12 bg-black/40 p-6">
                  <p className="text-sm font-semibold text-white">{slot.title}</p>
                  <p className="mt-2 text-sm text-white/70">{slot.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-2xl border border-secondary-500/30 bg-secondary-500/10 p-6 text-sm text-secondary-500">
              <p className="font-semibold">Direct line</p>
              <p className="mt-2 text-white/85">
                <a 
                  href="mailto:stackoindustries@gmail.com" 
                  className="hover:text-secondary-300 transition-colors underline decoration-dotted"
                >
                  stackoindustries@gmail.com
                </a>
                {' · '}
                <a 
                  href="tel:+919751987380" 
                  className="hover:text-secondary-300 transition-colors underline decoration-dotted"
                >
                  +91 9751987380
                </a>
              </p>
              <p className="mt-3 text-white/65">Response within 2 business days.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Contact;


