export function StatCard({
  number,
  label,
  accent = false,
}: {
  number: string;
  label: string;
  accent?: boolean;
}) {
  if (accent) {
    return (
      <div className="rounded-card bg-primary-700 p-5 text-center">
        <div className="font-sans text-3xl font-extrabold text-teal-300 tracking-tight leading-none">
          {number}
        </div>
        <div className="mt-1.5 text-overline uppercase text-primary-200">
          {label}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-card bg-white border border-slate-100 p-5 text-center">
      <div className="font-sans text-3xl font-extrabold text-primary-700 tracking-tight leading-none">
        {number}
      </div>
      <div className="mt-1.5 text-overline uppercase text-slate-500">
        {label}
      </div>
    </div>
  );
}
