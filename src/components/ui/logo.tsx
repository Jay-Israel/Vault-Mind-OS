export function VaultMindLogo({ className }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      <div className="relative flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-vault-blue via-vault-electric to-vault-purple p-2 shadow-glow">
        <svg viewBox="0 0 64 64" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 4L12 14V30C12 43.807 20.85 55.65 32 60C43.15 55.65 52 43.807 52 30V14L32 4Z" fill="white" fillOpacity="0.12" />
          <path d="M32 8L16 16V30C16 42.702 24.712 53.526 32 57.5C39.288 53.526 48 42.702 48 30V16L32 8Z" stroke="white" strokeWidth="3" />
          <path d="M20 24H44" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M25 34V20" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M39 34V20" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M32 36V46" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div className="space-y-1 text-left">
        <p className="text-xl font-semibold tracking-tight text-white">VaultMind</p>
        <p className="text-xs uppercase tracking-[0.26em] text-vault-blue/80">Autonomous Treasury OS</p>
      </div>
    </div>
  );
}
