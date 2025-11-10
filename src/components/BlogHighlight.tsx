import { Link } from "react-router-dom";
import blogPosts from "@/data/blog";
import Reveal from "@/components/Reveal";

const spans = ["md:col-span-2 lg:col-span-6", "md:col-span-1 lg:col-span-3", "md:col-span-1 lg:col-span-3"];
const blogAccents = [
  "linear-gradient(135deg, rgba(139, 92, 246, 0.35), transparent 70%)",
  "linear-gradient(135deg, rgba(107, 70, 193, 0.3), transparent 70%)",
  "linear-gradient(135deg, rgba(147, 197, 253, 0.25), transparent 70%)",
];

const BlogHighlight = () => {
  return (
    <section className="section-shell section-padding" id="blog">
      <Reveal>
        <div className="flex flex-col gap-8 text-center">
          <div className="mx-auto max-w-3xl space-y-5">
            <p className="text-xs uppercase tracking-[0.4em] text-secondary-500">STACKO journal</p>
            <h2 className="balanced-text text-[clamp(2.2rem,3.5vw,3.2rem)] font-semibold text-white">
              Insights for engineers and operators building the future
            </h2>
            <p className="text-lead">
              Tutorials, strategy briefings, and behind-the-scenes notes from the STACKO studio.
            </p>
          </div>
          <Link to="/blog" className="glass-button hover-lift inline-flex min-h-[3rem] items-center justify-center rounded-full px-7 text-sm font-semibold uppercase tracking-[0.18em] mx-auto">
            <span className="btn btn-secondary inline-flex min-h-[3rem] items-center justify-center rounded-full px-7 text-sm font-semibold uppercase tracking-[0.18em]">
              Explore blog
            </span>
          </Link>
        </div>
      </Reveal>
      <div className="mt-14 grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-12">
        {blogPosts.map((post, index) => (
          <Reveal key={post.id} delay={index * 0.06} className={`${spans[index % spans.length]} w-full`}>
            <Link
              to={"/blog/" + post.slug}
              className="relative glass-surface hover-lift rounded-[2.6rem] border border-white/12 p-6 sm:p-8 md:p-10 h-full flex flex-col"
              style={{ minHeight: '280px' }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -top-20 -left-10 h-48 w-48 blur-[70px] opacity-80"
                style={{ background: blogAccents[index % blogAccents.length] }}
              />
              <div className="relative space-y-4 flex-grow">
                <p className="text-xs uppercase tracking-[0.34em] text-secondary-500">{post.category}</p>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white leading-tight">{post.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{post.excerpt}</p>
              </div>
              <div className="mt-auto pt-6 flex items-center justify-between text-xs text-white/60">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default BlogHighlight;
