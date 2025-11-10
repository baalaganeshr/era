import { Link } from "react-router-dom";
import courses from "@/data/courses";
import Reveal from "@/components/Reveal";

const courseBenefits = [
  {
    title: "Frosted-glass learning studio",
    description: "Live code walkthroughs, async capsules, and curated projects that mirror real-world briefs.",
  },
  {
    title: "Mentorship inside every sprint",
    description: "Founders host office hours, architecture reviews, and cohort retros so you never feel stuck.",
  },
  {
    title: "Career velocity and internships",
    description: "Storytelling labs, career canvases, and paid STACKO internship placements to launch your next chapter.",
  },
];

const Courses = () => {
  return (
    <div className="flex flex-col gap-[calc(var(--spacing-section)*1.1)] pb-[calc(var(--spacing-section)*1.4)] pt-[calc(var(--spacing-block)*0.6)]">
      <Reveal>
        <div className="section-shell">
          <div className="glass-surface relative overflow-hidden rounded-[3.4rem] border border-white/12 bg-[linear-gradient(135deg,rgba(107,70,193,0.35),rgba(0,0,0,0.82))] px-8 py-[clamp(3.5rem,6vw,5.5rem)] text-center md:px-16">
            <div className="absolute -right-20 top-[-25%] h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.36),transparent_70%)] blur-[100px]" />
            <p className="text-xs uppercase tracking-[0.4em] text-secondary-500">STACKO curriculum</p>
            <h1 className="mt-6 text-[clamp(2.8rem,4.6vw,3.9rem)] font-semibold text-white">
              Build technical mastery with immersive cohorts
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lead text-white/80">
              Choose the language, stack, or specialization that accelerates your trajectory. Every cohort is powered by project-based learning, code reviews, and a live connection to STACKO’s engineering studio.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSftmT9nAdqWqHIW5N_hM4JW5CFHNlKq-H_Sc0ndz_G3r4WXWA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary hover-lift rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em]"
              >
                Claim your free onboarding
              </a>
              <Link
                to="/contact"
                className="btn btn-secondary hover-lift rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em]"
              >
                Talk to our team
              </Link>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="section-shell">
        <div className="grid-courses" style={{ gap: '32px' }}>
          {courses.map((course, index) => (
            <Reveal key={course.id} delay={index * 0.05}>
              <div className="card hover-lift card-content" style={{ padding: '32px', borderRadius: '24px' }} id={course.slug}>
                <div className="flex items-center justify-between" style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginBottom: '24px' }}>
                  <span className="rounded-full border border-secondary-500/40 bg-secondary-500/10 px-3 py-1 text-secondary-500" style={{ fontSize: '12px' }}>
                    {course.level}
                  </span>
                  <span>{course.duration}</span>
                </div>
                <h3 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '16px' }}>{course.title}</h3>
                <p className="card-description" style={{ fontSize: '15px', color: 'var(--color-text-secondary)', marginBottom: '24px', lineHeight: '1.6' }}>
                  {course.description}
                </p>
                <div style={{ marginBottom: '24px' }}>
                  <p className="uppercase tracking-wider font-semibold" style={{ fontSize: '11px', color: 'var(--color-primary)', marginBottom: '16px' }}>
                    Sprint highlights
                  </p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {course.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start" style={{ gap: '12px', fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                        <span className="rounded-full bg-secondary-500" style={{ width: '6px', height: '6px', marginTop: '8px', flexShrink: 0 }} />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap" style={{ gap: '8px', marginBottom: '24px' }}>
                  {course.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-secondary-500/40 bg-secondary-500/10 px-3 py-1 text-secondary-500" style={{ fontSize: '12px' }}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between" style={{ paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: 'auto' }}>
                  <span style={{ fontSize: '24px', fontWeight: 700 }}>{course.price}</span>
                  <Link className="text-secondary-500 transition hover:text-secondary-300" to={"/courses/" + course.slug} style={{ fontSize: '14px', fontWeight: 600 }}>
                    View syllabus →
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal>
        <div className="section-shell">
          <div className="grid gap-8 rounded-[3.2rem] border border-white/12 bg-black/45 p-[clamp(2.5rem,5vw,4.5rem)] md:grid-cols-3">
            {courseBenefits.map((benefit) => (
              <div key={benefit.title} className="space-y-3">
                <p className="text-sm font-semibold text-white">{benefit.title}</p>
                <p className="text-sm text-white/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Courses;
