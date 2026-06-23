"use client";

import Link from "next/link";
import { CollapsibleLinkGroup } from "@modules/common/components/dropdown";
import type {
  DropdownName,
  HeaderDropdown,
  HeaderLink,
} from "@modules/layout/config/navigation";

type HeaderActions = {
  login: HeaderLink["href"];
  demo: HeaderLink["href"];
};

type MobileMenuButtonProps = {
  isOpen: boolean;
  onToggle: () => void;
};

type MobileMenuProps = {
  isOpen: boolean;
  dropdowns: HeaderDropdown[];
  activeDropdown: DropdownName | null;
  primaryLinks: HeaderLink[];
  actions: HeaderActions;
  onDropdownToggle: (dropdownName: DropdownName) => void;
  onClose: () => void;
};

export function MobileMenuButton({ isOpen, onToggle }: MobileMenuButtonProps) {
  return (
    <button
      type="button"
      className="inline-flex size-10 items-center justify-center pb-2 text-text transition-colors duration-200 ease-out hover:text-primary focus-visible:outline-none"
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-navigation"
      onClick={onToggle}
    >
      <span className="sr-only">Menu</span>
      <span className="relative block size-4">
        <span
          className={`absolute left-0 top-1 h-0.5 w-full rounded-full bg-current transition-transform duration-200 ease-out ${
            isOpen ? "translate-y-1.5 rotate-45" : ""
          }`}
        />
        <span
          className={`absolute left-0 top-2.5 h-0.5 w-full rounded-full bg-current transition-opacity duration-200 ease-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`absolute left-0 top-4 h-0.5 w-full rounded-full bg-current transition-transform duration-200 ease-out ${
            isOpen ? "-translate-y-1.5 -rotate-45" : ""
          }`}
        />
      </span>
    </button>
  );
}

export default function MobileMenu({
  isOpen,
  dropdowns,
  activeDropdown,
  primaryLinks,
  actions,
  onDropdownToggle,
  onClose,
}: MobileMenuProps) {
  return (
    <div
      id="mobile-navigation"
      className={`fixed inset-x-0 bottom-0 top-[72px] z-50 flex flex-col border-t border-border bg-bg transition-opacity duration-300 ease-out lg:hidden ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!isOpen}
      inert={!isOpen}
    >
      <nav
        aria-label="Mobile navigation"
        className="container flex min-h-0 flex-1 flex-col"
      >
        <ul className="min-h-0 flex-1 overflow-y-auto py-4 space-y-2">
          {dropdowns.map((dropdown) => (
            <li key={dropdown.name}>
              <CollapsibleLinkGroup
                id={`mobile-${dropdown.name}-menu`}
                label={dropdown.label}
                isOpen={activeDropdown === dropdown.name}
                links={dropdown.links}
                onToggle={() => onDropdownToggle(dropdown.name)}
                onLinkClick={onClose}
              />
            </li>
          ))}

          {primaryLinks.map((link) => (
            <li key={link.href}>
              <MobileNavLink link={link} onLinkClick={onClose} />
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-1 sm:grid-cols-2 shrink-0 gap-3 border-t border-border bg-bg py-4">
          <Link
            href={actions.login}
            className="flex h-12 items-center justify-center rounded-full border border-border bg-bg px-4 py-2 text-base font-semibold text-text-muted transition-colors duration-200 ease-out hover:border-primary hover:text-primary focus-visible:outline-none"
            onClick={onClose}
          >
            Login
          </Link>
          <Link
            href={actions.demo}
            className="flex h-12 items-center justify-center rounded-full bg-primary px-4 py-2 font-medium text-white hover:bg-bg border hover:text-primary hover:border-primary transition-all duration-200 ease-out focus-visible:outline-none"
            onClick={onClose}
          >
            Book Free Demo
          </Link>
        </div>
      </nav>
    </div>
  );
}

function MobileNavLink({
  link,
  onLinkClick,
}: {
  link: HeaderLink;
  onLinkClick: () => void;
}) {
  return (
    <Link
      href={link.href}
      className="block px-2 py-3 text-base font-semibold text-text-muted transition-colors duration-200 ease-out hover:text-primary focus-visible:outline-none"
      onClick={onLinkClick}
    >
      {link.label}
    </Link>
  );
}
