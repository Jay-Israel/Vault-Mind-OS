"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity, BarChart3, Bot, BookCheck, ChevronRight, Cpu, Settings, ShieldCheck, Wallet2 } from "lucide-react";
import { VaultMindLogo } from "../ui/logo";

const navigation = [
  { href: "/dashboard", label: "Dashboard", icon: BarChart3 },
  { href: "/treasury", label: "Treasury", icon: Wallet2 },
  { href: "/policies", label: "Policies", icon: ShieldCheck },
  { href: "/analytics", label: "Analytics", icon: Activity },
  { href: "/audit", label: "Audit", icon: BookCheck },
  { href: "/copilot", label: "Copilot", icon: Bot },
  { href: "/settings", label: "Settings", icon: Settings },
  { href: "/api", label: "API", icon: Cpu }
];

export function AppShell({
  children,
  title,
  subtitle
}: {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-vault-bg text-vault-text">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 lg:flex-row lg:px-6">
        <aside className="glass-card w-full rounded-[1.75rem] border border-white/10 p-5 lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)] lg:w-72">
          <div className="flex items-center gap-3">
            <VaultMindLogo className="h-12 w-auto" />
          </div>
          <div className="mt-8 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href || pathname?.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    active
                      ? "bg-vault-blue/15 text-white shadow-glow"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </span>
                  <ChevronRight className="h-4 w-4 opacity-70" />
                </Link>
              );
            })}
          </div>
          <div className="mt-8 rounded-[1.25rem] border border-vault-blue/20 bg-vault-blue/10 p-4 text-sm text-slate-300">
            <p className="text-xs uppercase tracking-[0.25em] text-vault-blue">AI runtime</p>
            <p className="mt-2 font-medium text-white">Policy-safe execution is active.</p>
            <p className="mt-3 text-slate-300">The next recommendation is to rebalance 8.2% of stable reserves.</p>
          </div>
        </aside>

        <main className="flex-1 space-y-6">
          <header className="glass-card rounded-[1.75rem] border border-white/10 p-6">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-vault-blue/80">VaultMind OS</p>
                <h1 className="mt-2 text-3xl font-semibold text-white">{title}</h1>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-300">{subtitle}</p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-vault-blue/20 bg-vault-blue/10 px-4 py-2 text-sm text-vault-blue">
                <span className="h-2.5 w-2.5 rounded-full bg-vault-blue" />
                Autonomous mode on
              </div>
            </div>
          </header>
          {children}
        </main>
      </div>
    </div>
  );
}
