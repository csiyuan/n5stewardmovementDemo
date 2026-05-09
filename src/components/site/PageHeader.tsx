export function PageHeader({
  eyebrow,
  title,
  intro,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  dark?: boolean;
}) {
  return (
    <section className={`pt-36 pb-20 border-b relative overflow-hidden ${dark ? 'bg-ink text-ivory border-white/10' : 'bg-background border-ink/15'}`}>
      {dark && (
        <>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 opacity-50" />
        </>
      )}
      
      <div className="container-x grid gap-10 md:grid-cols-12 items-end relative z-10">
        <div className="md:col-span-7 space-y-6 animate-rise">
          <div className="flex items-center gap-3">
            <span className={`gold-rule ${dark ? 'bg-gold shadow-[0_0_15px_rgba(234,179,8,0.3)]' : 'bg-gold-dark'}`} />
            <span className={`eyebrow ${dark ? 'text-gold' : 'text-ink/60'}`}>{eyebrow}</span>
          </div>
          <h1 className="serif-display text-5xl md:text-7xl leading-[1.1]">
            {title}
          </h1>
        </div>
        {intro && (
          <div className="md:col-span-5 md:col-start-8">
            <p className={`text-lg leading-relaxed ${dark ? 'text-ivory/70 font-light' : 'text-muted-foreground'}`}>
              {intro}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
