import React from 'react';

const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent`;

export const TextLineSkeleton = ({ className = "", width = "w-full" }: { className?: string; width?: string }) => (
  <div className={`h-4 bg-muted rounded ${width} ${shimmer} ${className}`} />
);

export const ImageSkeleton = ({ className = "", aspectRatio = "aspect-video" }: { className?: string; aspectRatio?: string }) => (
  <div className={`bg-muted rounded-lg ${aspectRatio} ${shimmer} ${className}`} />
);

export const ButtonSkeleton = ({ className = "" }: { className?: string }) => (
  <div className={`h-10 bg-muted rounded-lg w-32 ${shimmer} ${className}`} />
);

export const AvatarSkeleton = ({ className = "" }: { className?: string }) => (
  <div className={`w-12 h-12 bg-muted rounded-full ${shimmer} ${className}`} />
);

export const BadgeSkeleton = ({ className = "" }: { className?: string }) => (
  <div className={`h-6 bg-muted rounded-full w-16 ${shimmer} ${className}`} />
);

export const NewsletterSkeleton = () => (
  <div className="max-w-4xl mx-auto p-6 space-y-8">
    {/* Header */}
    <div className="space-y-4 text-center">
      <TextLineSkeleton width="w-3/4 mx-auto" className="h-8" />
      <TextLineSkeleton width="w-1/2 mx-auto" className="h-5" />
      <div className="flex justify-center gap-3 mt-6">
        <BadgeSkeleton />
        <BadgeSkeleton />
        <BadgeSkeleton />
      </div>
    </div>

    {/* Featured Article */}
    <div className="border border-border rounded-xl p-6 space-y-4">
      <ImageSkeleton className="w-full" />
      <div className="space-y-3">
        <TextLineSkeleton className="h-6" />
        <TextLineSkeleton width="w-5/6" />
        <TextLineSkeleton width="w-4/6" />
        <div className="flex items-center gap-3 mt-4">
          <AvatarSkeleton className="w-8 h-8" />
          <TextLineSkeleton width="w-32" className="h-4" />
          <TextLineSkeleton width="w-20" className="h-3" />
        </div>
      </div>
    </div>

    {/* Article List */}
    <div className="space-y-6">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex gap-4 p-4 border border-border rounded-lg">
          <ImageSkeleton className="w-24 h-24 flex-shrink-0" aspectRatio="" />
          <div className="flex-1 space-y-3">
            <TextLineSkeleton className="h-5" />
            <TextLineSkeleton width="w-4/5" />
            <div className="flex items-center gap-2">
              <BadgeSkeleton className="w-12" />
              <TextLineSkeleton width="w-16" className="h-3" />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const CardSkeleton = ({ className = "" }: { className?: string }) => (
  <div className={`border border-border rounded-xl p-6 space-y-4 ${className}`}>
    <ImageSkeleton className="w-full h-48" aspectRatio="" />
    <div className="space-y-3">
      <TextLineSkeleton className="h-6" />
      <TextLineSkeleton width="w-5/6" />
      <TextLineSkeleton width="w-3/4" />
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          <AvatarSkeleton className="w-6 h-6" />
          <TextLineSkeleton width="w-20" className="h-3" />
        </div>
        <BadgeSkeleton className="w-16" />
      </div>
    </div>
  </div>
);

export const HeroSkeleton = () => (
  <div className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 space-y-8">
    {/* Main Heading */}
    <div className="space-y-4 max-w-4xl">
      <TextLineSkeleton width="w-3/4 mx-auto" className="h-12 md:h-16" />
      <TextLineSkeleton width="w-2/3 mx-auto" className="h-12 md:h-16" />
    </div>

    {/* Subtitle */}
    <div className="space-y-3 max-w-2xl">
      <TextLineSkeleton width="w-4/5 mx-auto" className="h-6" />
      <TextLineSkeleton width="w-3/5 mx-auto" />
    </div>

    {/* Hero Image/Video */}
    <div className="w-full max-w-4xl mt-12">
      <ImageSkeleton className="w-full h-64 md:h-96" />
    </div>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 mt-8">
      <ButtonSkeleton className="w-40 h-12" />
      <ButtonSkeleton className="w-32 h-12" />
    </div>

    {/* Stats or Features */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 w-full max-w-2xl">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="text-center space-y-2">
          <TextLineSkeleton className="h-8 w-16 mx-auto" />
          <TextLineSkeleton className="h-4 w-20 mx-auto" />
        </div>
      ))}
    </div>
  </div>
);

export const TopicSkeleton = () => (
  <div className="max-w-6xl mx-auto p-6 space-y-8">
    {/* Topic Header */}
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <BadgeSkeleton className="w-20" />
        <TextLineSkeleton width="w-24" className="h-4" />
      </div>
      <TextLineSkeleton width="w-2/3" className="h-10" />
      <TextLineSkeleton width="w-4/5" className="h-5" />
      <TextLineSkeleton width="w-3/5" />
    </div>

    {/* Topic Stats */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-border">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="text-center space-y-2">
          <TextLineSkeleton className="h-6 w-12 mx-auto" />
          <TextLineSkeleton className="h-4 w-16 mx-auto" />
        </div>
      ))}
    </div>

    {/* Featured Content */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>

    {/* Related Topics */}
    <div className="space-y-4">
      <TextLineSkeleton width="w-48" className="h-6" />
      <div className="flex flex-wrap gap-3">
        {[...Array(8)].map((_, i) => (
          <BadgeSkeleton key={i} className="w-24" />
        ))}
      </div>
    </div>
  </div>
);

export const ListSkeleton = ({ items = 5, className = "" }: { items?: number; className?: string }) => (
  <div className={`space-y-4 ${className}`}>
    {[...Array(items)].map((_, i) => (
      <div key={i} className="flex items-center gap-4 p-4 border border-border rounded-lg">
        <ImageSkeleton className="w-16 h-16 flex-shrink-0" aspectRatio="" />
        <div className="flex-1 space-y-2">
          <TextLineSkeleton className="h-5" />
          <TextLineSkeleton width="w-3/4" />
          <div className="flex gap-2">
            <BadgeSkeleton className="w-16" />
            <BadgeSkeleton className="w-12" />
          </div>
        </div>
        <ButtonSkeleton className="w-20 h-8" />
      </div>
    ))}
  </div>
);

export const GridSkeleton = ({ 
  items = 6, 
  columns = "md:grid-cols-2 lg:grid-cols-3", 
  className = "" 
}: { 
  items?: number; 
  columns?: string; 
  className?: string; 
}) => (
  <div className={`grid gap-6 ${columns} ${className}`}>
    {[...Array(items)].map((_, i) => (
      <CardSkeleton key={i} />
    ))}
  </div>
);

export const TableSkeleton = ({ rows = 5, columns = 4, className = "" }: { rows?: number; columns?: number; className?: string }) => (
  <div className={`border border-border rounded-lg overflow-hidden ${className}`}>
    {/* Header */}
    <div className="border-b border-border bg-muted/50 p-4">
      <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {[...Array(columns)].map((_, i) => (
          <TextLineSkeleton key={i} className="h-4" />
        ))}
      </div>
    </div>
    
    {/* Rows */}
    <div className="divide-y divide-border">
      {[...Array(rows)].map((_, rowIndex) => (
        <div key={rowIndex} className="p-4">
          <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
            {[...Array(columns)].map((_, colIndex) => (
              <TextLineSkeleton key={colIndex} className="h-4" />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Add the shimmer keyframes to global CSS
const SkeletonStyles = () => (
  <style jsx global>{`
    @keyframes shimmer {
      100% {
        transform: translateX(100%);
      }
    }
  `}</style>
);

export { SkeletonStyles };