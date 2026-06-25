import { AppShell } from "../../components/layout/app-shell";

export default function ApiPage() {
  return (
    <AppShell
      title="API Access"
      subtitle="Expose treasury actions and policy data through a simple API surface for integrations and automation tools."
    >
      <section className="glass-card rounded-[1.75rem] border border-white/10 p-6">
        <h2 className="text-xl font-semibold text-white">Available endpoints</h2>
        <div className="mt-6 space-y-3 text-sm text-slate-300">
          <div className="rounded-[1rem] bg-slate-950/60 px-4 py-3">GET /api/treasury — returns treasury summary and reserves.</div>
          <div className="rounded-[1rem] bg-slate-950/60 px-4 py-3">POST /api/policies — submits a new policy payload for validation.</div>
        </div>
      </section>
    </AppShell>
  );
}
