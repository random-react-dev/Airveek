"use client";

import Link from "next/link";
import type { FocusEvent } from "react";

export type DropdownLink = {
  label: string;
  href: string;
};

type DropdownProps = {
  id: string;
  label: string;
  heading?: string;
  isOpen: boolean;
  links: DropdownLink[];
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  onLinkClick?: () => void;
};

type CollapsibleLinkGroupProps = {
  id: string;
  label: string;
  isOpen: boolean;
  links: DropdownLink[];
  onToggle: () => void;
  onLinkClick?: () => void;
};

export function Dropdown({
  id,
  label,
  heading,
  isOpen,
  links,
  onOpen,
  onClose,
  onToggle,
  onLinkClick,
}: DropdownProps) {
  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    const nextTarget = event.relatedTarget;

    if (
      !(nextTarget instanceof Node) ||
      !event.currentTarget.contains(nextTarget)
    ) {
      onClose();
    }
  };

  return (
    <div
      className="relative py-4"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onBlur={handleBlur}
    >
      <button
        type="button"
        className="inline-flex h-10 items-center gap-1.5 text-text-muted transition-colors duration-200 ease-out hover:text-primary focus-visible:outline-none"
        aria-expanded={isOpen}
        aria-controls={id}
        onFocus={onOpen}
        onClick={onToggle}
      >
        {label}
        <ChevronDownIcon
          className={`size-4 transition-transform duration-200 ease-out ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        id={id}
        className={`absolute left-1/2 top-full z-50 w-lg -translate-x-1/2 origin-top rounded-2xl bg-bg px-12 py-10 shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-200 ease-out ${
          isOpen
            ? "pointer-events-auto visible translate-y-0 scale-100 opacity-100"
            : "pointer-events-none invisible -translate-y-2 scale-95 opacity-0"
        } motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:transition-none`}
      >
        <p className="mb-7 text-lg font-medium text-text">
          {heading ?? label}
        </p>
        <ul className="grid grid-cols-2 gap-x-16 gap-y-7">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block text-base leading-none text-text-muted transition-colors duration-200 ease-out hover:text-primary focus-visible:outline-none"
                onClick={onLinkClick}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function CollapsibleLinkGroup({
  id,
  label,
  isOpen,
  links,
  onToggle,
  onLinkClick,
}: CollapsibleLinkGroupProps) {
  return (
    <div>
      <button
        type="button"
        className="flex w-full items-center justify-between rounded-xl px-2 py-3 text-left text-base font-semibold text-text-muted transition-colors duration-200 ease-out hover:bg-bg hover:text-primary focus-visible:outline-none"
        aria-expanded={isOpen}
        aria-controls={id}
        onClick={onToggle}
      >
        {label}
        <ChevronDownIcon
          className={`size-4 transition-transform duration-200 ease-out ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        id={id}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 pointer-events-auto"
            : "grid-rows-[0fr] opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <ul className="grid gap-2 overflow-hidden pl-3">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-text-muted transition-colors duration-200 ease-out hover:bg-bg hover:text-primary focus-visible:outline-none"
                onClick={onLinkClick}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

