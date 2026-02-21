export default function ArtigoLoading() {
  return (
    <>
      {/* PageHeader skeleton */}
      <div className="bg-white border-b border-slate-100">
        <div className="container-page py-8 lg:py-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 mb-4">
            <div className="h-3 w-10 bg-slate-200 rounded animate-pulse" />
            <div className="h-3 w-3 bg-slate-100 rounded animate-pulse" />
            <div className="h-3 w-14 bg-slate-200 rounded animate-pulse" />
          </div>
          {/* Overline */}
          <div className="h-3 w-24 bg-teal-100 rounded animate-pulse mb-3" />
          {/* Title */}
          <div className="h-8 w-full max-w-2xl bg-slate-200 rounded animate-pulse mb-2" />
          <div className="h-8 w-2/3 max-w-xl bg-slate-200 rounded animate-pulse" />
          {/* Description */}
          <div className="mt-4 h-5 w-full max-w-xl bg-slate-100 rounded animate-pulse" />
          <div className="mt-2 h-5 w-3/4 max-w-lg bg-slate-100 rounded animate-pulse" />
        </div>
      </div>

      {/* Article content skeleton */}
      <div className="container-page py-10 lg:py-14">
        <div className="max-w-3xl mx-auto">
          {/* Meta bar */}
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
            <div className="h-6 w-20 bg-slate-200 rounded-md animate-pulse" />
            <div className="h-4 w-28 bg-slate-100 rounded animate-pulse" />
            <div className="h-4 w-24 bg-slate-100 rounded animate-pulse" />
          </div>

          {/* Paragraphs */}
          <div className="space-y-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="h-4 w-full bg-slate-100 rounded animate-pulse" />
                <div className="h-4 w-full bg-slate-100 rounded animate-pulse" />
                <div className="h-4 w-3/4 bg-slate-100 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
