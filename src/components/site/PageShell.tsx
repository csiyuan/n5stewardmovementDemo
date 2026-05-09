import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function PageShell({
  children,
  navOverlay = false,
}: {
  children: ReactNode;
  navOverlay?: boolean;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav overlay={navOverlay} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
