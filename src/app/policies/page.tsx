import { AppShell } from "../../components/layout/app-shell";

const policyCards = [
  { title: "Reserve floor", detail: "Maintain minimum liquidity at 40% of treasury value." },
  { title: "Spend guard", detail: "Require dual approval for disbursements above $250K." },
  { title: "Risk cool-down", detail: "Pause execution during volatility windows without manual intervention." }
];

export default function PoliciesPage() {
  return (
    <AppShell
      title="Policy Engine"
      subtitle="Manage guardrails, thresholds, and automation rules for every treasury movement."
    >
      <section className="grid gap-6 md:grid-cols-3">
        {policyCards.map((policy) => (
          <div key={policy.title} className="glass-card rounded-[1.5rem] border border-white/10 p-6">
            <h2 className="text-lg font-semibold text-white">{policy.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">{policy.detail}</p>
          </div>
        ))}
      </section>
    </AppShell>
  );
}
