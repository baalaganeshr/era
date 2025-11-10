import { motion } from "framer-motion";

interface SkeletonProps {
  width?: string;
  height?: string;
  className?: string;
  variant?: "text" | "rectangular" | "circular";
}

export const Skeleton = ({ 
  width = "100%", 
  height = "1rem", 
  className = "", 
  variant = "text" 
}: SkeletonProps) => {
  const baseClasses = "bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded animate-pulse";
  
  const variantClasses = {
    text: "rounded",
    rectangular: "rounded-lg",
    circular: "rounded-full"
  };

  return (
    <div 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{ width, height }}
    />
  );
};

export const CourseCardSkeleton = () => (
  <div className="rounded-[2.8rem] border border-white/12 bg-[#0f131f]/90 p-10 shadow-[0_22px_60px_rgba(2,4,12,0.38)] space-y-6">
    <div className="flex items-center justify-between">
      <Skeleton width="80px" height="24px" variant="rectangular" />
      <Skeleton width="60px" height="16px" />
    </div>
    <div className="space-y-3">
      <Skeleton width="70%" height="32px" />
      <Skeleton width="50%" height="16px" />
    </div>
    <Skeleton width="100%" height="48px" />
    <div className="space-y-3">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-start gap-3">
          <Skeleton width="10px" height="10px" variant="circular" />
          <Skeleton width={`${Math.random() * 30 + 60}%`} height="16px" />
        </div>
      ))}
    </div>
    <div className="flex flex-wrap gap-2">
      {[1, 2, 3, 4].map((i) => (
        <Skeleton key={i} width="60px" height="24px" variant="rectangular" />
      ))}
    </div>
    <div className="flex items-center justify-between pt-3">
      <Skeleton width="80px" height="20px" />
      <Skeleton width="120px" height="16px" />
    </div>
  </div>
);

export const StatCardSkeleton = () => (
  <div className="rounded-[3rem] border border-white/12 bg-[#0f131f]/90 p-12 text-center shadow-[0_20px_56px_rgba(2,4,12,0.32)] space-y-8">
    <Skeleton width="120px" height="72px" className="mx-auto" />
    <Skeleton width="80%" height="24px" className="mx-auto" />
    <Skeleton width="90%" height="32px" className="mx-auto" />
  </div>
);

export const PageSkeleton = ({ type = "home" }: { type?: "home" | "courses" | "blog" }) => {
  if (type === "home") {
    return (
      <div className="relative">
        {/* Hero Skeleton */}
        <section className="relative min-h-[100dvh] overflow-hidden px-4 py-[var(--spacing-block)]">
          <div className="page-shell grid gap-8 pt-[calc(var(--spacing-block)*1.1)] pb-[calc(var(--spacing-block)*0.6)] lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-6">
                <Skeleton width="200px" height="12px" />
                <Skeleton width="90%" height="80px" />
                <Skeleton width="80%" height="48px" />
              </div>
              <div className="flex gap-4">
                <Skeleton width="200px" height="52px" variant="rectangular" />
                <Skeleton width="220px" height="52px" variant="rectangular" />
              </div>
            </div>
            <div className="space-y-6">
              <Skeleton width="100%" height="300px" variant="rectangular" />
              <Skeleton width="100%" height="120px" variant="rectangular" />
            </div>
          </div>
        </section>

        {/* Courses Skeleton */}
        <section className="section-padding">
          <div className="page-shell space-y-12">
            <div className="flex justify-between items-end">
              <div className="space-y-5">
                <Skeleton width="150px" height="12px" />
                <Skeleton width="400px" height="60px" />
                <Skeleton width="300px" height="40px" />
              </div>
              <Skeleton width="150px" height="48px" variant="rectangular" />
            </div>
            <div className="relative">
              <div className="flex gap-6 overflow-hidden">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="min-w-[min(88vw,21.5rem)]">
                    <CourseCardSkeleton />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Skeleton */}
        <section className="section-padding">
          <div className="page-shell space-y-12">
            <div className="text-center space-y-6">
              <Skeleton width="200px" height="12px" className="mx-auto" />
              <Skeleton width="500px" height="60px" className="mx-auto" />
              <Skeleton width="400px" height="40px" className="mx-auto" />
            </div>
            <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-4 xl:gap-16">
              {[1, 2, 3, 4].map((i) => (
                <StatCardSkeleton key={i} />
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  return null;
};

export const LoadingSpinner = ({ size = "md", className = "" }: { 
  size?: "sm" | "md" | "lg"; 
  className?: string; 
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12"
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <motion.div
        className="w-full h-full border-2 border-white/20 border-t-white/70 rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export const ProgressiveImage = ({ 
  src, 
  alt, 
  className = "",
  placeholder = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMC4xIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2cpIi8+PC9zdmc+"
}: {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
}) => (
  <motion.img
    src={src}
    alt={alt}
    className={className}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
    loading="lazy"
    onError={(e) => {
      (e.target as HTMLImageElement).src = placeholder;
    }}
  />
);


