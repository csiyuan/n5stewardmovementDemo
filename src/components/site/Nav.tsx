import { Link } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";
import { Logo } from "./Logo";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type NavChild = { to: string; label: string; hash?: string };
type NavItem = { to: string; label: string; children?: NavChild[] };

const links: NavItem[] = [
  { to: "/", label: "Home" },
  {
    to: "/learn",
    label: "Learn",
    children: [
      { to: "/learn", hash: "courses", label: "Courses" },
      { to: "/learn", hash: "testimonials", label: "Testimonials" },
      { to: "/learn", hash: "video-resources", label: "Video Resources" },
    ],
  },
  {
    to: "/groups",
    label: "Groups",
    children: [
      { to: "/groups", hash: "individuals", label: "Individuals, Families & Groups" },
      { to: "/groups", hash: "faith-leaders", label: "Faith-Based Leaders" },
      { to: "/groups", hash: "finance-professionals", label: "Finance-Based Professionals" },
      { to: "/groups", hash: "find-professional", label: "Find A Professional" },
    ],
  },
  {
    to: "/about",
    label: "About",
    children: [
      { to: "/about", label: "Mission and Beliefs" },
      { to: "/about", label: "Leadership" },
      { to: "/about", label: "FAQ" },
      { to: "/about", label: "Contact" },
    ],
  },
];

function NavItemDropdown({ item, lightText }: { item: NavItem; lightText: boolean }) {
  const [open, setOpen] = useState(false);
  let timeoutId: NodeJS.Timeout;

  const handleMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setOpen(false);
    }, 150);
  };

  return (
    <div 
      className="relative" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
        <DropdownMenuTrigger asChild>
          <Link
            to={item.to}
            className={cn(
              "inline-flex items-center gap-1 text-sm font-semibold tracking-wide transition-colors hover:text-gold outline-none",
              lightText ? "text-ivory" : "text-foreground",
              open && "text-gold"
            )}
            activeProps={{ className: "text-gold" }}
          >
            {item.label}
          </Link>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          className="min-w-[15rem] border-t-2 border-gold rounded-t-none bg-background/95 backdrop-blur-md shadow-xl p-2"
          align="end"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {item.children?.map((c) => (
            <DropdownMenuItem key={c.label} asChild>
              <Link
                to={c.to}
                hash={c.hash}
                className="w-full justify-end text-right text-sm text-foreground/80 transition-colors hover:text-gold hover:bg-secondary/60 cursor-pointer py-2 px-4 rounded-md"
              >
                {c.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export function Nav({ overlay = false }: { overlay?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !overlay;
  const lightText = overlay && !solid;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      )}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Logo light={lightText} />

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) =>
            l.children ? (
              <NavItemDropdown key={l.label} item={l} lightText={lightText} />
            ) : (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "text-sm font-semibold tracking-wide transition-colors hover:text-gold",
                  lightText ? "text-ivory" : "text-foreground"
                )}
                activeProps={{ className: "text-gold" }}
              >
                {l.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/conference"
            className="inline-flex items-center gap-2 rounded-full bg-ink text-ivory px-5 py-2.5 text-sm font-medium tracking-wide hover:bg-gold hover:text-ink transition-colors"
          >
            Conference 2025
          </Link>
        </div>

        <button
          className={cn(
            "md:hidden p-2 transition-colors",
            lightText ? "text-ivory" : "text-foreground"
          )}
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border animate-in slide-in-from-top-4 duration-300">
          <div className="container-x py-6 flex flex-col gap-5">
            {links.map((l) => (
              <div key={l.label} className="flex flex-col gap-2">
                <Link 
                  to={l.to} 
                  onClick={() => setMobileOpen(false)} 
                  className="font-display text-2xl hover:text-gold transition-colors"
                >
                  {l.label}
                </Link>
                {l.children && (
                  <div className="flex flex-col gap-1 pl-4 border-l border-border">
                    {l.children.map((c) => (
                      <Link
                        key={c.label}
                        to={c.to}
                        hash={c.hash}
                        onClick={() => setMobileOpen(false)}
                        className="text-sm text-muted-foreground hover:text-gold py-1 transition-colors"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/conference"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-ink text-ivory px-5 py-3 text-sm tracking-wide hover:bg-gold hover:text-ink transition-colors"
            >
              Conference 2025
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
