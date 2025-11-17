import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import team from "@/data/team";
import Reveal from "@/components/Reveal";

type MentorVariant = {
  id: string;
  surface: string;
  halo: string;
  badge: string;
  chip: string;
  accent: string;
  dot: string;
};

const mentorVariants: MentorVariant[] = [
  {
    id: "charcoal",
    surface: "bg-[#121a27]/85 border-white/10 shadow-[0_16px_42px_rgba(5,8,15,0.28)]",
    halo: "from-white/12 via-white/5 to-transparent",
    badge: "border-white/10 bg-white/8 text-white/65",
    chip: "border-white/10 bg-white/7 text-white/70",
    accent: "from-white/18 to-transparent",
    dot: "bg-white/55",
  },
  {
    id: "slate",
    surface: "bg-[#111723]/85 border-white/10 shadow-[0_16px_42px_rgba(4,7,14,0.26)]",
    halo: "from-white/11 via-white/4 to-transparent",
    badge: "border-white/10 bg-white/8 text-white/65",
    chip: "border-white/10 bg-white/7 text-white/70",
    accent: "from-white/18 to-transparent",
    dot: "bg-white/55",
  },
  {
    id: "ink",
    surface: "bg-[#101421]/85 border-white/10 shadow-[0_16px_42px_rgba(4,6,12,0.26)]",
    halo: "from-white/12 via-white/4 to-transparent",
    badge: "border-white/10 bg-white/8 text-white/65",
    chip: "border-white/10 bg-white/7 text-white/70",
    accent: "from-white/18 to-transparent",
    dot: "bg-white/55",
  },
];
const simpleMentorSummaries: Record<number, string> = {
  1: "Creating modern web applications with React, Node.js, and cutting-edge UI/UX design principles",
  2: "Building scalable software solutions and architecting robust systems for complex web applications", 
  3: "Specializing in innovative frontend technologies and crafting engaging interactive digital experiences",
  4: "Building production-grade React applications and mentoring teams through complex technical challenges",
  5: "Converting cutting-edge AI research into deployable business solutions and automation frameworks",
  6: "Strategic talent placement and program development connecting developers with high-impact opportunities",
  7: "Driving growth initiatives and partnership development across university and enterprise networks",
};

const mentorRoles: Record<number, string> = {
  1: "CEO",
  2: "Founder", 
  3: "CPO",
  4: "Engineering Leadership",
  5: "Research Leadership",
  6: "Program Leadership",
  7: "Partnership Leadership",
};

const mentorExperience: Record<number, string> = {
  1: "1-2 years",
  2: "1-2 years",
  3: "1-2 years", 
  4: "1-2 years",
  5: "1-2 years",
  6: "1-2 years",
  7: "1-2 years",
};

const toSpecialtyTokens = (value: string) =>
  value
    .split("&")
    .map((token) => token.trim())
    .filter(Boolean);

const TeamShowcase = React.memo(() => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const slides = useMemo(
    () =>
      (team && team.length > 0 ? team : []).map((member, index) => ({
        member: member || {},
        variant: mentorVariants[index % mentorVariants.length] || mentorVariants[0],
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

  // Optimized scroll calculation with throttling
  const computeActiveCard = useCallback(() => {
    const node = sliderRef.current;
    if (!node) return;
    const cards = Array.from(node.querySelectorAll<HTMLElement>('[data-mentor-card="true"]'));
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

    // Only update if there's a real change
    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
    
    // Calculate progress more accurately
    const maxScroll = node.scrollWidth - node.clientWidth;
    const currentProgress = maxScroll <= 0 ? 1 : Math.max(0, Math.min(1, node.scrollLeft / maxScroll));
    setProgress(currentProgress);
  }, [activeIndex]);

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
    
    const cards = node.querySelectorAll<HTMLElement>('[data-mentor-card="true"]');
    const target = cards[index];
    
    if (target) {
      // Calculate scroll position for centering
      const containerWidth = node.clientWidth;
      const targetRect = target.getBoundingClientRect();
      const containerRect = node.getBoundingClientRect();
      const targetCenter = targetRect.left + targetRect.width / 2 - containerRect.left;
      const containerCenter = containerWidth / 2;
      const scrollOffset = targetCenter - containerCenter;
      
      // Smooth scroll to position
      node.scrollTo({
        left: node.scrollLeft + scrollOffset,
        behavior: 'smooth'
      });
      
      // Update active index immediately for better UX
      setActiveIndex(index);
    }
  }, [slides.length]);

  // Auto-play disabled for better user control
  // useEffect(() => {
  //   if (!isAutoPlay || !slides || slides.length <= 1) return;
  //   
  //   const timer = window.setTimeout(() => {
  //     const nextIndex = (activeIndex + 1) % slides.length;
  //     scrollToIndex(nextIndex);
  //   }, 12000);

  //   return () => window.clearTimeout(timer);
  // }, [activeIndex, isAutoPlay, scrollToIndex, slides]);

  // Early return if no data to prevent empty state (after all hooks)
  if (!slides || slides.length === 0) {
    return (
      <section className="section-shell section-padding" id="team">
        <div className="text-center py-8">
          <p className="text-white/60">Team information is loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-[#06070C]" id="team">
      <div className="max-w-7xl mx-auto px-4">
        <Reveal>
          <div className="text-center mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40 mb-3">Our Team</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Meet Our Founders
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Expert developers with real-world experience building scalable applications
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {slides.map(({ member }, index) => {
            const specialties = toSpecialtyTokens(member.specialty || "General expertise").slice(0, 2);
            const summary = simpleMentorSummaries[member.id] ?? member.bio ?? "Bringing expertise to help you succeed";
            const roleType = mentorRoles[member.id] ?? "Leadership";
            return (
              <Reveal key={member.id} delay={index * 0.1}>
                <article
                  className="group relative flex flex-col h-full rounded-lg bg-[#0d0f14] border border-white/[0.06] transition-all duration-300 hover:border-white/[0.12] hover:bg-[#111318] overflow-hidden"
                >
                
                {/* Header Section */}
                <div className="relative p-6 pb-5">
                  {/* Role badge */}
                  <div className="inline-flex items-center gap-1.5 mb-4 px-2 py-1 rounded bg-white/[0.04] border border-white/[0.06]">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-white/50">
                      {roleType}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-1.5">
                    {member.name || `Team Member ${index + 1}`}
                  </h3>
                  <p className="text-sm text-white/40 mb-4">{member.title || "Team Lead"}</p>
                  
                  <p className="text-sm leading-relaxed text-white/50 line-clamp-2">
                    {summary}
                  </p>
                </div>

                {/* Expertise Section */}
                <div className="relative px-6 pb-5 flex-1">
                  {specialties.length > 0 && (
                    <div className="space-y-2.5">
                      <h4 className="text-[10px] font-semibold uppercase tracking-wider text-white/30 mb-3">Expertise</h4>
                      <div className="space-y-2">
                        {specialties.map((specialty) => (
                          <div key={specialty} className="flex items-start gap-2">
                            <div className="mt-1.5 h-1 w-1 rounded-full bg-secondary-500/40 flex-shrink-0" />
                            <span className="text-xs text-white/60 leading-relaxed">{specialty}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Section */}
                <div className="relative p-6 pt-5 border-t border-white/[0.04]">
                  <div className="flex items-center justify-end">
                    {member.portfolio && (
                      <a
                        href={member.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gradient-to-r from-secondary-600 to-purple-600 text-white text-[11px] font-semibold hover:from-secondary-500 hover:to-purple-500 transition-all duration-200"
                      >
                        Portfolio
                        <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
});

TeamShowcase.displayName = 'TeamShowcase';
export default TeamShowcase;










