import { Link } from "react-router-dom";
import blogPosts from "@/data/blog";
import Reveal from "@/components/Reveal";

const Blog = () => {
  return (
    <div className="flex flex-col gap-[calc(var(--spacing-section)*1.1)] pb-[calc(var(--spacing-section)*1.4)] pt-[calc(var(--spacing-block)*0.6)]">
      <Reveal>
        <div className="section-shell">
          <div className="glass-surface relative overflow-hidden rounded-[3.6rem] border border-white/12 bg-[linear-gradient(135deg,rgba(107,70,193,0.35),rgba(0,0,0,0.87))] px-10 py-[clamp(3.5rem,6vw,5.5rem)] text-center md:px-16">
            <div className="absolute -left-24 top-[-30%] h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.36),transparent_70%)] blur-[110px]" />
            <p className="text-xs uppercase tracking-[0.4em] text-secondary-500">STACKO journal</p>
            <h1 className="mt-6 text-[clamp(2.7rem,4.5vw,3.8rem)] font-semibold text-white">
              Field notes from our engineers and educators
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lead text-white/80">
              Tutorials, opinion pieces, and deep dives on the technologies powering STACKO's studio and cohorts. Subscribe to stay ahead of the next wave.
            </p>
          </div>
        </div>
      </Reveal>

      <div className="section-shell">
        <div className="grid gap-10 md:grid-cols-2">
          {blogPosts.map((post, index) => (
            <Reveal key={post.id} delay={index * 0.06}>
              <Link
                to={"/blog/" + post.slug}
                className="glass-surface hover-lift flex h-full flex-col justify-between rounded-[3rem] border border-white/12 p-12"
              >
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.34em] text-secondary-500">{post.category}</p>
                  <h2 className="text-[clamp(1.7rem,2.3vw,2rem)] font-semibold text-white">{post.title}</h2>
                  <p className="text-sm text-white/75">{post.excerpt}</p>
                </div>
                <div className="mt-8 flex items-center justify-between text-xs text-white/60">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>


    </div>
  );
};

export default Blog;
