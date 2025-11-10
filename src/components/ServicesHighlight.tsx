import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import services from "@/data/services";
import Reveal from "@/components/Reveal";

const layouts = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-6",
  "lg:col-span-6",
];

const ServicesHighlight = () => {
  return (
    <section className="section-shell section-padding" id="services">
      <Reveal>
        <div className="flex flex-col gap-8 text-center">
          <div className="mx-auto max-w-3xl space-y-5">
            <p className="text-xs uppercase tracking-[0.4em] text-secondary-500">Development studio</p>
            <h2 className="balanced-text text-[clamp(2.3rem,3.9vw,3.5rem)] font-semibold text-white">
              Your engineering accelerator for AI copilots, full-stack product sprints, and design systems
            </h2>
            <p className="text-lead">
              From AI copilots to full product launches, STACKO delivers design, engineering, and momentum in one glassmorphism-fueled experience.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/services" className="btn btn-primary hover-lift inline-flex min-h-[3rem] items-center justify-center rounded-full px-7 text-sm font-semibold uppercase tracking-[0.18em]">
              Explore services
            </Link>
            <Link to="/portfolio" className="text-sm font-semibold text-secondary-500 transition hover:text-secondary-300">
              View case studies →
            </Link>
          </div>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-12">
        {services.map((service, index) => (
          <Reveal key={service.id} delay={index * 0.08} className={layouts[index % layouts.length]}>
            <motion.article
              whileHover={{ translateY: -12 }}
              transition={{ type: "spring", stiffness: 210, damping: 24 }}
              className="glass-surface hover-lift rounded-[3rem] border border-white/14 px-10 py-12"
              id={service.slug}
            >
              <div className="flex items-center justify-end text-xs text-white/65">
                <span className="text-secondary-500">{service.deliverables.length} deliverables</span>
              </div>
              <h3 className="mt-6 text-[clamp(1.7rem,2.3vw,2rem)] font-semibold text-white">{service.title}</h3>
              <p className="mt-4 text-sm text-white/75">{service.description}</p>
              <div className="mt-8 grid gap-4 text-sm text-white/80">
                <p className="text-xs uppercase tracking-[0.28em] text-secondary-500">Deliverables</p>
                <ul className="grid gap-3">
                  {service.deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex items-start gap-3">
                      <span className="mt-[6px] h-2.5 w-2.5 rounded-full bg-secondary-500" />
                      {deliverable}
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
                <Link to="/contact" className="transition hover:text-secondary-300">
                  Kick off this sprint →
                </Link>
                <Link to="/portfolio" className="rounded-full border border-secondary-500/30 px-5 py-2 text-xs uppercase tracking-[0.24em]">
                  View work
                </Link>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default ServicesHighlight;
