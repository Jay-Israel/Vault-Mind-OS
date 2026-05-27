import { ArrowRight, Sparkles, ShieldCheck, Activity } from "lucide-react";
import { VaultMindLogo } from "../components/ui/logo";
import { DashboardShell } from "../components/dashboard/dashboard-shell";

const features = [
  {
    title: "AI Treasury Command Center",
    description: "Real-time treasury health, runway forecasting, and intelligent recommendations powered by autonomous AI agents.",
    icon: Sparkles
  },
  {
    title: "Autonomous Policy Engine",
    description: "Define guardrails, enforce limits, and automate treasury execution with enterprise-grade policy rules.",
    icon: ShieldCheck
  },
  {
    title: "DeepBook Execution",
    description: "Optimize liquidity routing and capital deployment through secure execution infrastructure built for Web3 treasuries.",
    icon: Activity
  }
];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-vault-blue/20 via-transparent to-transparent blur-3xl" />
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-8">
            <VaultMindLogo className="h-14 w-auto" />
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-vault-blue/25 bg-vault-blue/10 px-4 py-2 text-sm text-vault-blue">
                <span className="h-2.5 w-2.5 rounded-full bg-vault-blue" />
                Autonomous Treasury OS for DAOs and crypto organizations
              </div>
              <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                VaultMind — the AI CFO for decentralized treasuries.
              </h1>
              <p className="text-lg leading-8 text-slate-300">
                Monitor liquidity, enforce policy, forecast runway, and execute secure treasury actions with a premium AI operating experience.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="/dashboard" className="inline-flex items-center justify-center rounded-full bg-vault-blue px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-blue-500">
                Launch VaultMind&nbsp;<ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-full border border-vault-blue/20 bg-white/5 px-6 py-3 text-sm font-semibold text-vault-text transition hover:border-vault-blue hover:text-white">
                Explore features
              </a>
            </div>
          </div>
          <div className="relative w-full max-w-xl lg:max-w-2xl">
            <div className="glass-card gradient-ring relative overflow-hidden rounded-[2rem] border border-white/10 p-8 shadow-card">
              <div className="absolute inset-x-0 top-0 h-1/3 bg-vault-blue/10" />
              <div className="relative space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-vault-blue/80">Treasury Command Center</p>
                    <h2 className="mt-3 text-3xl font-semibold text-white">Live treasury intelligence</h2>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-3xl bg-slate-950/70 p-5">
                    <p className="text-sm text-slate-400">Total treasury</p>
                    <p className="mt-3 text-3xl font-semibold text-white">$212.4M</p>
                  </div>
                  <div className="rounded-3xl bg-slate-950/70 p-5">
                    <p className="text-sm text-slate-400">Runway</p>
                    <p className="mt-3 text-3xl font-semibold text-white">14.6 months</p>
                  </div>
                </div>
                <div className="rounded-3xl bg-slate-950/70 p-5">
                  <p className="text-sm text-slate-400">Policy compliance</p>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <span className="inline-flex items-center rounded-full bg-vault-blue/10 px-3 py-1 text-sm text-vault-blue">Stable reserve 45%</span>
                    <span className="text-sm text-slate-300">Risk score <strong>8.6/10</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="glass-card rounded-[1.75rem] border border-white/10 p-8 shadow-card transition hover:-translate-y-1 hover:border-vault-blue/30">
              <feature.icon className="h-7 w-7 text-vault-blue" />
              <h3 className="mt-6 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="glass-card rounded-[2rem] border border-white/10 p-10 shadow-card">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.34em] text-vault-blue/80">Premium treasury intelligence</p>
              <h2 className="text-4xl font-semibold text-white sm:text-5xl">A cinematic interface for enterprise-grade treasury operations.</h2>
              <p className="max-w-xl text-lg leading-8 text-slate-300">
                VaultMind blends institutional clarity, policy-safe automation, and DeepBook execution so your treasury team can act with confidence.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-slate-950/70 p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Strategy</p>
                <p className="mt-4 text-2xl font-semibold text-white">Auto rebalancing</p>
              </div>
              <div className="rounded-[1.5rem] bg-slate-950/70 p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Risk</p>
                <p className="mt-4 text-2xl font-semibold text-white">Confidence scoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DashboardShell />
    </main>
  );
}
