import { AppShell } from "../../components/layout/app-shell";

export default function AuditPage() {
  return (
    <AppShell
      title="Audit Trail"
      subtitle="Review on-chain actions, policy approvals, and treasury changes with a clear operational history."
    >
      <section className="glass-card rounded-[1.75rem] border border-white/10 p-6">
        <h2 className="text-xl font-semibold text-white">Recent activity</h2>
        <div className="mt-6 space-y-3 text-sm text-slate-300">
          <div className="rounded-[1rem] bg-slate-950/60 px-4 py-3">01:12 UTC — Treasury sweep completed with policy-compliant execution.</div>
          <div className="rounded-[1rem] bg-slate-950/60 px-4 py-3">00:36 UTC — Reserve floor policy revalidated successfully.</div>
        </div>
      </section>
    </AppShell>
  );
}
