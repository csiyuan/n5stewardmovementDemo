import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="container-x py-20 grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5 space-y-6">
          <Logo light />
          <p className="text-ivory/70 max-w-sm leading-relaxed">
            A movement equipping the Body of Christ across Asia to steward money
            God's way — with wisdom, generosity, and lasting kingdom impact.
          </p>
          <div className="flex items-center gap-3">
            <span className="gold-rule" />
            <span className="eyebrow text-ivory/60">Est. Asia · 2024</span>
          </div>
        </div>

        <div className="md:col-span-3">
          <h4 className="eyebrow text-ivory/60 mb-5">Explore</h4>
          <ul className="space-y-3 text-ivory/85">
            <li><Link to="/learn" className="hover:text-gold transition">Learn</Link></li>
            <li><Link to="/groups" className="hover:text-gold transition">Groups</Link></li>
            <li><Link to="/about" className="hover:text-gold transition">About</Link></li>
            <li><Link to="/conference" className="hover:text-gold transition">Conference</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="eyebrow text-ivory/60 mb-5">Join the movement</h4>
          <ul className="space-y-3 text-ivory/85">
            <li><Link to="/church-community" className="hover:text-gold transition">Individuals & Families</Link></li>
            <li><Link to="/faith-based-leaders" className="hover:text-gold transition">Faith-Based Leaders</Link></li>
            <li><Link to="/financial-professionals" className="hover:text-gold transition">Finance Professionals</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-ivory/50">
          <p>© {new Date().getFullYear()} N5 Stewardship Movement Asia. All rights reserved.</p>
          <p className="font-display italic">"Whoever is faithful in little is faithful in much." — Luke 16:10</p>
        </div>
      </div>
    </footer>
  );
}
