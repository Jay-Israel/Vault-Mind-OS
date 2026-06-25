import { AppShell } from "../../components/layout/app-shell";

export default function SettingsPage() {
  return (
    <AppShell
      title="Workspace Settings"
      subtitle="Tune preferences, manage connected wallets, and configure the intelligence layer for your team."
    >
      <section className="grid gap-6 lg:grid-cols-2">
        <div className="glass-card rounded-[1.75rem] border border-white/10 p-6">
          <h2 className="text-xl font-semibold text-white">Connected wallets</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">Primary signer and treasury multisig are connected and ready for policy execution.</p>
        </div>
        <div className="glass-card rounded-[1.75rem] border border-white/10 p-6">
          <h2 className="text-xl font-semibold text-white">Automation preferences</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">Thresholds, review windows, and auto-execution behavior are configured for stable treasury operations.</p>
        </div>
      </section>
    </AppShell>
  );
}
