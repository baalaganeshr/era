import Reveal from "@/components/Reveal";

const plans = [
  {
    title: "Starter",
    price: "9/mo",
    description: "Access the Python Essentials cohort, community events, and weekly office hours.",
  },
  {
    title: "Builder",
    price: "9/mo",
    description: "Unlock Full-Stack JavaScript, internship studio access, and project feedback loops.",
  },
  {
    title: "Pro",
    price: "9/mo",
    description: "React Pro Lab, AI engineer tracks, and direct mentorship from STACKO founders.",
  },
];

const Signup = () => {
  return (
    <div className="flex flex-col gap-[calc(var(--spacing-section)*1.1)] pb-[calc(var(--spacing-section)*1.4)] pt-[calc(var(--spacing-block)*0.6)]">
      <Reveal>
        <div className="section-shell">
          <div className="glass-surface rounded-[3.6rem] border border-white/12 bg-[linear-gradient(135deg,rgba(107,70,193,0.35),rgba(0,0,0,0.87))] px-10 py-[clamp(3.5rem,6vw,5.5rem)] md:px-16">
            <p className="text-xs uppercase tracking-[0.4em] text-secondary-500">Join STACKO</p>
            <h1 className="mt-6 text-[clamp(2.6rem,4.4vw,3.8rem)] font-semibold text-white">Create your learning and building account</h1>
            <p className="mt-6 max-w-3xl text-lead text-white/80">
              Get instant access to our cohorts, templates, and a network of mentors and founders ready to support your next build.
            </p>
          </div>
        </div>
      </Reveal>

      <div className="section-shell">
        <Reveal>
          <div className="glass-surface rounded-[3rem] border border-white/14 p-12 text-center">
            <h2 className="text-[clamp(1.8rem,2.8vw,2.4rem)] font-semibold text-white">Ready to Start Learning?</h2>
            <p className="mt-4 text-lg text-white/70">
              Join STACKO's community of developers and start building amazing projects today!
            </p>
            <div className="mt-8">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSftmT9nAdqWqHIW5N_hM4JW5CFHNlKq-H_Sc0ndz_G3r4WXWA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary inline-block rounded-2xl px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em]"
              >
                Get Started
              </a>
            </div>
            <p className="mt-6 text-sm text-white/65">
              Fill out our registration form to get started with STACKO.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="section-shell">
        <Reveal>
          <div className="glass-surface rounded-[3rem] border border-white/14 p-12">
            <p className="text-xs uppercase tracking-[0.32em] text-secondary-500">Plans</p>
            <div className="mt-6 space-y-6">
              {plans.map((plan) => (
                <div key={plan.title} className="rounded-2xl border border-white/12 bg-black/40 p-6">
                  <div className="flex items-center justify-between text-white">
                    <p className="text-sm font-semibold">{plan.title}</p>
                    <p className="text-secondary-500">{plan.price}</p>
                  </div>
                  <p className="mt-3 text-sm text-white/70">{plan.description}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-white/70">
              All plans include live mentorship, portfolio reviews, and access to the STACKO builder community.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Signup;
