import { Activity, ArrowUpRight, Bot, ShieldCheck, Wallet2 } from "lucide-react";
import { AppShell } from "../layout/app-shell";

const metrics = [
  { label: "Treasury balance", value: "$212.4M", change: "+12.8%", tone: "text-emerald-400" },
  { label: "Runway", value: "14.6 mo", change: "+1.2 mo", tone: "text-vault-blue" },
  { label: "Policy compliance", value: "98.4%", change: "Stable", tone: "text-emerald-400" },
  { label: "Risk score", value: "8.6/10", change: "Watchlist", tone: "text-amber-400" }
];

const actions = [
  { title: "Rebalance reserve buffer", description: "Move 8.2% into stable treasury vaults" },
  { title: "Approve grant batch", description: "Queue 3 policy-safe disbursements" },
  { title: "DeepBook routing", description: "Route liquidity to reduce slippage by 1.6%" }
];

export function DashboardShell() {
  return (
    <AppShell
      title="Treasury Command Center"
      subtitle="Monitor balances, enforce policy guardrails, and delegate execution to autonomous agents in one premium workspace."
    >
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="glass-card rounded-[1.5rem] border border-white/10 p-5">
            <p className="text-sm text-slate-400">{metric.label}</p>
            <div className="mt-3 flex items-end justify-between gap-4">
              <p className="text-2xl font-semibold text-white">{metric.value}</p>
              <span className={`text-sm font-medium ${metric.tone}`}>{metric.change}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="glass-card rounded-[1.75rem] border border-white/10 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-vault-blue/80">Liquidity health</p>
              <h2 className="mt-2 text-xl font-semibold text-white">Forecasted runway and reserve posture</h2>
            </div>
            <div className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400">
              Stable
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {[70, 52, 84].map((value, index) => (
              <div key={value} className="space-y-2">
                <div className="flex items-center justify-between text-sm text-slate-300">
                  <span>{["Treasury reserve", "Deployment runway", "Policy headroom"][index]}</span>
                  <span>{value}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800">
                  <div className="h-2 rounded-full bg-gradient-to-r from-vault-blue to-vault-electric" style={{ width: `${value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-[1.75rem] border border-white/10 p-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-vault-blue" />
            <h2 className="text-xl font-semibold text-white">Policy automation</h2>
          </div>
          <div className="mt-6 space-y-3">
            {actions.map((action) => (
              <div key={action.title} className="rounded-[1.1rem] border border-white/10 bg-slate-950/60 p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-medium text-white">{action.title}</p>
                    <p className="mt-1 text-sm text-slate-400">{action.description}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-vault-blue" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="glass-card rounded-[1.75rem] border border-white/10 p-6">
          <div className="flex items-center gap-3">
            <Bot className="h-5 w-5 text-vault-blue" />
            <h2 className="text-xl font-semibold text-white">Agent activity</h2>
          </div>
          <div className="mt-6 space-y-3 text-sm text-slate-300">
            <div className="flex items-center justify-between rounded-[1rem] bg-slate-950/60 px-4 py-3">
              <span>DeepBook execution agent</span>
              <span className="text-emerald-400">Completed</span>
            </div>
            <div className="flex items-center justify-between rounded-[1rem] bg-slate-950/60 px-4 py-3">
              <span>Policy monitor agent</span>
              <span className="text-vault-blue">Reviewing</span>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-[1.75rem] border border-white/10 p-6">
          <div className="flex items-center gap-3">
            <Activity className="h-5 w-5 text-vault-blue" />
            <h2 className="text-xl font-semibold text-white">Execution queue</h2>
          </div>
          <div className="mt-6 space-y-3 text-sm text-slate-300">
            <div className="rounded-[1rem] border border-white/10 bg-slate-950/60 p-4">
              <p className="font-medium text-white">Funding proposal</p>
              <p className="mt-1">Ready for multi-sig approval in 12 minutes.</p>
            </div>
            <div className="rounded-[1rem] border border-white/10 bg-slate-950/60 p-4">
              <p className="font-medium text-white">Treasury sweep</p>
              <p className="mt-1">Queued for policy settlement after market close.</p>
            </div>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
