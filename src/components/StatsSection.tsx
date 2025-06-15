export default function StatsSection() {
  return (
    <div className="flex flex-col items-center gap-8 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-4xl font-bold">8.4T</div>
          <div className="text-slate-11 text-sm">Monthly Tokens</div>
        </div>
        <div>
          <div className="text-4xl font-bold">2.5M+</div>
          <div className="text-slate-11 text-sm">Global Users</div>
        </div>
        <div>
          <div className="text-4xl font-bold">60+</div>
          <div className="text-slate-11 text-sm">Active Providers</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-primary">400+</div>
          <div className="text-slate-11 text-sm">Models</div>
        </div>
      </div>
    </div>
  );
}