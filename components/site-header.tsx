"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Icon } from "./icon";

const navigation = [
  { label: "Capabilities", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Our approach", href: "/#approach" },
  { label: "Insights", href: "/insights" },
  { label: "Company", href: "/about" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    function onPointer(event: PointerEvent) {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    }
    function onResize() {
      if (window.innerWidth > 960) setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className="site-header" ref={header}>
      <div className="container header-inner">
        <Link
          href="/"
          className="brand"
          aria-label="AIMS home"
          onClick={() => setOpen(false)}
        >
          <img src="/aims-logo-white.png" alt="AIMS" width="137" height="38" />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={
                pathname === href || pathname.startsWith(`${href}/`)
                  ? "page"
                  : undefined
              }
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="button button-small header-cta">
          Let’s talk <Icon name="diagonal" />
        </Link>
        <button
          ref={toggle}
          type="button"
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!open}
        onBlur={(event) => {
          if (
            !event.currentTarget.contains(event.relatedTarget) &&
            event.relatedTarget !== toggle.current
          )
            setOpen(false);
        }}
      >
        {navigation.map(({ href, label }, index) => (
          <Link key={href} href={href} onClick={() => setOpen(false)}>
            <span className="mono">0{index + 1}</span>
            {label}
            <Icon name="arrow" />
          </Link>
        ))}
        <Link href="/contact" onClick={() => setOpen(false)}>
          <span className="mono">06</span>Discuss your project
          <Icon name="diagonal" />
        </Link>
      </nav>
    </header>
  );
}
