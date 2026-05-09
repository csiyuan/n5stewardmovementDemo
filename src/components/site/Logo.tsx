import { Link } from "@tanstack/react-router";
import logoUrl from "@/assets/n5-logo.png";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <img
        src={logoUrl}
        alt="N5 Stewardship Movement Asia"
        className={`h-10 w-auto transition-opacity ${light ? "brightness-0 invert" : "brightness-0"} group-hover:opacity-80`}
      />
    </Link>
  );
}
