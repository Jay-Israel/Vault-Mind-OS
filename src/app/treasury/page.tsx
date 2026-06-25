import { AppShell } from "../../components/layout/app-shell";

export default function TreasuryPage() {
  return (
    <AppShell
      title="Treasury Operations"
      subtitle="Inspect balances, coordinate disbursements, and orchestrate automated treasury movements with policy-safe checks."
    >
      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-card rounded-[1.75rem] border border-white/10 p-6">
          <h2 className="text-xl font-semibold text-white">Vault activity</h2>
          <div className="mt-6 space-y-3 text-sm text-slate-300">
            <div className="flex items-center justify-between rounded-[1rem] bg-slate-950/60 px-4 py-3">
              <span>Stable reserve deposit</span>
              <span className="text-emerald-400">+4.2M USDC</span>
            </div>
            <div className="flex items-center justify-between rounded-[1rem] bg-slate-950/60 px-4 py-3">
              <span>Grant disbursement</span>
              <span className="text-vault-blue">-320K USDC</span>
            </div>
          </div>
        </div>
        <div className="glass-card rounded-[1.75rem] border border-white/10 p-6">
          <h2 className="text-xl font-semibold text-white">Execution controls</h2>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <div className="rounded-[1rem] border border-white/10 bg-slate-950/60 p-4">
              <p className="font-medium text-white">Safe withdrawal</p>
              <p className="mt-1">Requires multi-sig and reserve-policy approval.</p>
            </div>
            <div className="rounded-[1rem] border border-white/10 bg-slate-950/60 p-4">
              <p className="font-medium text-white">Sweep execution</p>
              <p className="mt-1">Optimizes idle capital without breaching risk thresholds.</p>
            </div>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
