import { AppShell } from "../../components/layout/app-shell";

export default function AnalyticsPage() {
  return (
    <AppShell
      title="Treasury Analytics"
      subtitle="Review performance signals, runway trends, and execution efficiency across the operating system."
    >
      <section className="grid gap-6 lg:grid-cols-2">
        <div className="glass-card rounded-[1.75rem] border border-white/10 p-6">
          <h2 className="text-xl font-semibold text-white">Performance summary</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">Capital efficiency improved by 11.2% over the last 30 days as policy-safe automation reduced idle balances.</p>
        </div>
        <div className="glass-card rounded-[1.75rem] border border-white/10 p-6">
          <h2 className="text-xl font-semibold text-white">Forecast outlook</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">Base-case runway remains above 14 months with moderate deployment assumptions and current market conditions.</p>
        </div>
      </section>
    </AppShell>
  );
}
