import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import courses from "@/data/courses";
import Reveal from "@/components/Reveal";

type DesignVariant = {
  id: string;
  surface: string;
  tag: string;
  chip: string;
  dot: string;
  accent: string;
  sheen?: string;
};

const designVariants: DesignVariant[] = [
  {
    id: "charcoal",
    surface: "bg-[#121a27]/85 border-white/10 shadow-[0_16px_42px_rgba(5,8,15,0.28)]",
    tag: "border-white/10 bg-white/8 text-white/65",
    chip: "border-white/10 bg-white/7 text-white/70",
    dot: "bg-white/55",
    accent: "from-white/18 to-transparent",
  },
  {
    id: "slate",
    surface: "bg-[#111723]/85 border-white/10 shadow-[0_16px_42px_rgba(4,7,14,0.26)]",
    tag: "border-white/10 bg-white/8 text-white/65",
    chip: "border-white/10 bg-white/7 text-white/70",
    dot: "bg-white/55",
    accent: "from-white/18 to-transparent",
  },
  {
    id: "ink",
    surface: "bg-[#101421]/85 border-white/10 shadow-[0_16px_42px_rgba(4,6,12,0.26)]",
    tag: "border-white/10 bg-white/8 text-white/65",
    chip: "border-white/10 bg-white/7 text-white/70",
    dot: "bg-white/55",
    accent: "from-white/18 to-transparent",
  },
];
const friendlyCourseDescriptions: Record<number, string> = {
  1: "Master Python fundamentals and build real automation tools",
  2: "Create full-stack apps with modern React and Node.js",
  3: "Advanced React patterns for production-ready applications",
  4: "Build AI-powered chatbots and intelligent backends",
  5: "Work on real projects with 1:1 mentorship and career prep",
};

const courseIcons: Record<number, string> = {
  1: "🐍",
  2: "⚛️",
  3: "🚀",
  4: "🤖",
  5: "💼",
};

const CourseShowcase = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const slides = useMemo(
    () =>
      courses.map((course, index) => ({
        course,
        variant: designVariants[index % designVariants.length],
      })),
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Auto-play functionality removed for better user control

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, []);

  const computeActiveCard = useCallback(() => {
    const node = sliderRef.current;
    if (!node) return;
    const cards = Array.from(node.querySelectorAll<HTMLElement>('[data-course-card="true"]'));
    if (!cards.length) return;

    const containerRect = node.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;
    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(containerCenter - cardCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex((prev) => (prev !== closestIndex ? closestIndex : prev));
    const maxScroll = node.scrollWidth - node.clientWidth;
    setProgress(maxScroll <= 0 ? 1 : Math.min(1, node.scrollLeft / maxScroll));
  }, []);

  useEffect(() => {
    const node = sliderRef.current;
    if (!node) return;

    const handleScroll = () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(() => {
        computeActiveCard();
      });
    };

    node.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", computeActiveCard);
    computeActiveCard();

    return () => {
      node.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", computeActiveCard);
    };
  }, [computeActiveCard]);

  const scrollToIndex = useCallback((index: number) => {
    const node = sliderRef.current;
    if (!node || index < 0 || index >= slides.length) return;
    
    const cards = node.querySelectorAll<HTMLElement>('[data-course-card="true"]');
    const target = cards[index];
    
    if (target) {
      // Calculate the exact scroll position to center the card
      const containerWidth = node.clientWidth;
      const targetRect = target.getBoundingClientRect();
      const containerRect = node.getBoundingClientRect();
      const targetCenter = targetRect.left + targetRect.width / 2 - containerRect.left;
      const containerCenter = containerWidth / 2;
      const scrollOffset = targetCenter - containerCenter;
      
      // Smooth scroll to the calculated position
      node.scrollTo({
        left: node.scrollLeft + scrollOffset,
        behavior: 'smooth'
      });
      
      // Update active index immediately for better UX
      setActiveIndex(index);
    }
  }, [slides.length]);

  const handleNavigate = useCallback(
    (direction: "prev" | "next") => {
      if (!slides.length) return;
      const delta = direction === "next" ? 1 : -1;
      const nextIndex = (() => {
        if (direction === "next" && activeIndex === slides.length - 1) return 0;
        if (direction === "prev" && activeIndex === 0) return slides.length - 1;
        return activeIndex + delta;
      })();

      scrollToIndex(nextIndex);
    },
    [activeIndex, scrollToIndex, slides.length]
  );

  // Auto-play disabled for better user control
  // useEffect(() => {
  //   if (!isAutoPlay || slides.length <= 1) return;
  //   const timer = window.setTimeout(() => {
  //     const nextIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;
  //     scrollToIndex(nextIndex);
  //   }, 7000);

  //   return () => window.clearTimeout(timer);
  // }, [activeIndex, isAutoPlay, scrollToIndex, slides.length]);

  const progressPercent = slides.length <= 1 ? 100 : (progress || activeIndex / (slides.length - 1)) * 100;

  return (
    <section className="section-padding">
      <div className="page-shell">
        <div className="text-center" style={{ marginBottom: '64px' }}>
          <Reveal>
            <div className="mx-auto" style={{ maxWidth: '700px' }}>
              <p className="text-sm uppercase tracking-wider font-semibold" style={{ color: 'var(--color-primary)', marginBottom: '16px' }}>
                Course catalog
              </p>
              <h2 style={{ marginBottom: '24px' }}>
                Courses built around real projects
              </h2>
              <p className="text-lead">
                Pick a course that fits your team. Each one blends short lessons, build time, and weekly feedback so you always know the next step.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-small" style={{ marginTop: '24px', color: 'var(--color-text-muted)' }}>
              Glide through the programs or use the controls below.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="relative mt-12">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#05060d] via-[#05060d]/65 to-transparent lg:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#05060d] via-[#05060d]/65 to-transparent lg:w-24" />
        <div
          ref={sliderRef}
          className="hide-scrollbar flex snap-x snap-mandatory gap-4 sm:gap-6 lg:gap-8 overflow-x-auto pb-6 px-4 sm:px-6"
          style={{ 
            scrollPaddingLeft: '50%', 
            scrollPaddingRight: '50%'
          }}
        >
          {slides.map(({ course, variant }, index) => {
            const isActive = index === activeIndex;
            return (
              <Reveal key={course.id} delay={index * 0.04}>
                <motion.article
                  data-course-card="true"
                  initial={false}
                  animate={{
                    scale: isActive ? 1 : 0.96,
                    opacity: isActive ? 1 : 0.85,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`snap-center group relative flex h-full flex-col rounded-[24px] border p-6 sm:p-8 backdrop-blur transition-all duration-300 ${variant.surface} ${isActive ? 'ring-2 ring-white/30 shadow-2xl' : 'hover:ring-1 hover:ring-white/15'}`}
                  style={{ 
                    minWidth: '320px', 
                    maxWidth: '380px',
                    flexShrink: 0,
                  }}
                >
                  {variant.sheen && (
                    <div className={`pointer-events-none absolute inset-0 rounded-[24px] ${variant.sheen}`} />
                  )}
                  
                  {/* Header Section */}
                  <div className="relative mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{courseIcons[course.id]}</span>
                        <span className={`rounded-full border px-3 py-1.5 text-xs font-medium uppercase tracking-[0.15em] ${variant.tag}`}>
                          {course.level}
                        </span>
                      </div>
                      <span className="text-xs font-medium text-white/70">{course.duration}</span>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-[1.75rem] font-bold leading-tight text-white group-hover:text-white/95 transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-sm sm:text-base font-medium text-white/85">{course.tagline}</p>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 space-y-5">
                    <p className="text-[15px] leading-relaxed text-white/75">
                      {friendlyCourseDescriptions[course.id] || course.description}
                    </p>
                    
                    {/* Key Highlights */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">What you'll build</h4>
                      <ul className="space-y-2.5">
                        {course.highlights.slice(0, 2).map((highlight) => (
                          <li key={highlight} className="flex items-start gap-3">
                            <span className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${variant.dot}`} />
                            <span className="text-sm leading-relaxed text-white/80 font-medium">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer Section */}
                  <div className="mt-6 space-y-4 border-t border-white/8 pt-5">
                    <div className="flex flex-wrap gap-1.5">
                      {course.stack.slice(0, 4).map((tech) => (
                        <span key={tech} className={`rounded-lg px-2.5 py-1 text-xs font-medium ${variant.chip}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-xs font-medium text-white/60">Starting at</p>
                        <span className="text-xl font-bold text-white">${course.price}</span>
                      </div>
                      <Link
                        className="btn btn-secondary inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold hover:scale-[1.02] active:scale-[0.98]"
                        to={"/courses/" + course.slug}
                      >
                        Explore course
                        <span className="text-xs transition-transform group-hover:translate-x-0.5">→</span>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => handleNavigate("prev")}
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white/70 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
            aria-label="Previous program"
          >
            <span className="text-base transition-transform group-hover:-translate-x-0.5">&larr;</span>
          </button>
          <button
            type="button"
            onClick={() => handleNavigate("next")}
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white/70 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
            aria-label="Next program"
          >
            <span className="text-base transition-transform group-hover:translate-x-0.5">&rarr;</span>
          </button>
        </div>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <div className="h-1 w-36 overflow-hidden rounded-full bg-white/10 sm:w-48">
            <motion.div
              className="h-full rounded-full bg-white/70"
              animate={{ width: `${Math.max(8, progressPercent)}%` }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>
          <div className="flex items-center gap-2">
            {slides.map((_, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    scrollToIndex(index);
                  }}
                  aria-label={"Go to program " + (index + 1)}
                  className="group relative h-3 w-3 rounded-full bg-white/12 transition hover:bg-white/20"
                >
                  <motion.span
                    className="absolute inset-0 rounded-full bg-white/70"
                    animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.6 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseShowcase;









