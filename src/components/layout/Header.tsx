"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { topNav, type NavMenu } from "@/lib/nav";
import { cn } from "@/lib/cn";

export function Header() {
  const [openDesktop, setOpenDesktop] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!openDesktop) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenDesktop(null);
    };
    const onClick = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setOpenDesktop(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [openDesktop]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeAll = () => {
    setOpenDesktop(null);
    setMobileOpen(false);
    setExpandedMobile(null);
  };

  return (
    <header
      role="banner"
      className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-(--color-border)"
    >
      <Container className="flex h-16 items-center justify-between gap-6">
        <Logo />

        <div
          ref={navRef}
          onMouseLeave={() => setOpenDesktop(null)}
          className="hidden lg:flex items-center gap-1"
        >
          <nav aria-label="Primary" className="flex items-center gap-1">
            {topNav.map((m) => (
              <DesktopTrigger
                key={m.label}
                menu={m}
                open={openDesktop === m.label}
                onOpen={() => setOpenDesktop(m.label)}
              />
            ))}
          </nav>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#login"
            className="text-sm font-medium hover:text-(--color-brand-600)"
          >
            Sign in
          </a>
          <Button href="#demo">Book a demo</Button>
        </div>

        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="lg:hidden grid place-items-center h-10 w-10 rounded-lg border border-(--color-border)"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {mobileOpen && (
        <MobileMenu
          expanded={expandedMobile}
          setExpanded={setExpandedMobile}
          close={closeAll}
        />
      )}
    </header>
  );
}

function DesktopTrigger({
  menu,
  open,
  onOpen,
}: {
  menu: NavMenu;
  open: boolean;
  onOpen: () => void;
}) {
  if (!menu.groups) {
    return (
      <a
        href={menu.href}
        className="px-3 py-2 text-sm text-(--color-muted) hover:text-(--color-foreground) rounded-md transition"
      >
        {menu.label}
      </a>
    );
  }

  return (
    <div className="relative" onMouseEnter={onOpen}>
      <button
        type="button"
        onClick={onOpen}
        aria-expanded={open}
        aria-haspopup="true"
        className={cn(
          "inline-flex items-center gap-1 px-3 py-2 text-sm rounded-md transition",
          open
            ? "text-(--color-foreground)"
            : "text-(--color-muted) hover:text-(--color-foreground)",
        )}
      >
        {menu.label}
        <ChevronDown
          className={cn("h-3.5 w-3.5 transition", open && "rotate-180")}
        />
      </button>

      {open && <Dropdown menu={menu} />}
    </div>
  );
}

function Dropdown({ menu }: { menu: NavMenu }) {
  const widthClass =
    menu.columns === 2
      ? "w-[640px]"
      : menu.featured
        ? "w-[520px]"
        : "w-[340px]";

  return (
    <div
      className={cn(
        "absolute left-1/2 -translate-x-1/2 top-full mt-2 max-w-[calc(100vw-2rem)] rounded-2xl border border-(--color-border) bg-white shadow-2xl shadow-(--color-brand-900)/10 overflow-hidden",
        widthClass,
      )}
    >
      <div className="p-6">
        <div
          className={cn(
            "grid gap-6",
            menu.columns === 2 ? "grid-cols-2" : "grid-cols-1",
          )}
        >
          {menu.groups!.map((g, gi) => (
            <div key={gi}>
              {g.title && (
                <p className="text-[10px] font-semibold tracking-widest uppercase text-(--color-muted) mb-3">
                  {g.title}
                </p>
              )}
              <ul className="space-y-1">
                {g.items.map((it) => (
                  <li key={`${it.label}-${it.href}`}>
                    <a
                      href={it.href}
                      className="flex gap-3 rounded-lg p-2 hover:bg-(--color-surface) transition group/item"
                    >
                      {it.icon && (
                        <span className="grid h-9 w-9 place-items-center rounded-lg bg-(--color-brand-50) text-(--color-brand-500) group-hover/item:bg-(--color-brand-500) group-hover/item:text-white transition shrink-0">
                          <it.icon className="h-4 w-4" />
                        </span>
                      )}
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-(--color-foreground) leading-tight">
                          {it.label}
                        </p>
                        {it.description && (
                          <p className="text-xs text-(--color-muted) mt-0.5 leading-snug">
                            {it.description}
                          </p>
                        )}
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {menu.featured && (
        <div className="border-t border-(--color-border) bg-(--color-brand-50)/50 px-6 py-4 flex items-start justify-between gap-4">
          <div>
            <span className="text-[10px] font-semibold tracking-widest uppercase text-(--color-brand-600)">
              {menu.featured.eyebrow}
            </span>
            <h4 className="mt-1 text-sm font-semibold">{menu.featured.title}</h4>
            <p className="text-xs text-(--color-muted) mt-1 max-w-sm">
              {menu.featured.description}
            </p>
          </div>
          <a
            href={menu.featured.href}
            className="shrink-0 self-end inline-flex items-center gap-1 text-xs font-semibold text-(--color-brand-600) hover:text-(--color-foreground) whitespace-nowrap"
          >
            {menu.featured.label} →
          </a>
        </div>
      )}
    </div>
  );
}

function MobileMenu({
  expanded,
  setExpanded,
  close,
}: {
  expanded: string | null;
  setExpanded: (v: string | null) => void;
  close: () => void;
}) {
  return (
    <div className="lg:hidden border-t border-(--color-border) bg-white max-h-[calc(100vh-4rem)] overflow-y-auto">
      <Container className="py-2">
        <ul className="divide-y divide-(--color-border)">
          {topNav.map((m) => (
            <li key={m.label}>
              {m.groups ? (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setExpanded(expanded === m.label ? null : m.label)
                    }
                    aria-expanded={expanded === m.label}
                    className="w-full flex items-center justify-between py-3 text-sm font-semibold"
                  >
                    {m.label}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 text-(--color-muted) transition",
                        expanded === m.label && "rotate-180",
                      )}
                    />
                  </button>
                  {expanded === m.label && (
                    <div className="pb-3 space-y-4">
                      {m.groups.map((g, gi) => (
                        <div key={gi}>
                          {g.title && (
                            <p className="text-[10px] font-semibold tracking-widest uppercase text-(--color-muted) mb-1.5">
                              {g.title}
                            </p>
                          )}
                          <ul className="space-y-0.5">
                            {g.items.map((it) => (
                              <li key={`${it.label}-${it.href}`}>
                                <a
                                  href={it.href}
                                  onClick={close}
                                  className="flex items-center gap-3 rounded-lg px-2 py-2 hover:bg-(--color-surface)"
                                >
                                  {it.icon && (
                                    <span className="grid h-8 w-8 place-items-center rounded-md bg-(--color-brand-50) text-(--color-brand-500) shrink-0">
                                      <it.icon className="h-4 w-4" />
                                    </span>
                                  )}
                                  <span className="text-sm">{it.label}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      {m.featured && (
                        <a
                          href={m.featured.href}
                          onClick={close}
                          className="block rounded-lg bg-(--color-brand-50)/60 p-3"
                        >
                          <span className="text-[10px] font-semibold tracking-widest uppercase text-(--color-brand-600)">
                            {m.featured.eyebrow}
                          </span>
                          <p className="text-sm font-semibold mt-0.5">
                            {m.featured.title}
                          </p>
                        </a>
                      )}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={m.href}
                  onClick={close}
                  className="block py-3 text-sm font-semibold"
                >
                  {m.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-4 pt-4 border-t border-(--color-border) flex flex-col gap-2 pb-4">
          <a
            href="#login"
            onClick={close}
            className="text-sm font-medium py-2"
          >
            Sign in
          </a>
          <Button href="#demo" onClick={close} className="w-full">
            Book a demo
          </Button>
        </div>
      </Container>
    </div>
  );
}
