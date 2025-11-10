import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";
import stats from "@/data/stats";

const StatsShowcase = () => {
  return (
    <section className="section-padding">
      <div className="page-shell">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between" style={{ gap: '32px', marginBottom: '80px' }}>
            <div style={{ maxWidth: '600px' }}>
              <p className="text-sm uppercase tracking-wider font-semibold" style={{ color: 'var(--color-primary)', marginBottom: '16px' }}>
                Proof of momentum
              </p>
              <h2 style={{ marginBottom: '24px' }}>
                Outcomes our founders obsess over
              </h2>
              <p className="text-lead">
                STACKO blends education and delivery to fuel careers and products. Below is the measurable momentum learners and partner teams unlock with STACKO.
              </p>
            </div>
            <p className="text-small" style={{ maxWidth: '400px', color: 'var(--color-text-muted)' }}>
              Multi-year data across cohorts, custom builds, and internship placements. Updated quarterly.
            </p>
          </div>
        </Reveal>
        
        {/* Statistics grid - 4 columns with 40px gaps */}
        <div className="grid-stats">
          {stats.map((stat, index) => (
            <Reveal key={stat.id} delay={index * 0.08}>
              <div className="card text-center">
                <div className="text-gradient text-4xl md:text-5xl" style={{ fontWeight: 900, lineHeight: 1, marginBottom: '16px' }}>
                  <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <p style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px', color: 'var(--color-text-primary)' }}>
                  {stat.label}
                </p>
                <p className="text-small" style={{ color: 'var(--color-text-secondary)' }}>
                  {stat.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsShowcase;
