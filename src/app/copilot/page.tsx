import { AppShell } from "../../components/layout/app-shell";

export default function CopilotPage() {
  return (
    <AppShell
      title="AI Copilot"
      subtitle="Receive actionable recommendations and review the next best treasury move from your autonomous assistant."
    >
      <section className="glass-card rounded-[1.75rem] border border-white/10 p-6">
        <h2 className="text-xl font-semibold text-white">Suggested next action</h2>
        <p className="mt-4 text-sm leading-7 text-slate-300">Shift a portion of the reserve buffer into a lower-volatility vault before the next liquidity window opens.</p>
      </section>
    </AppShell>
  );
}
