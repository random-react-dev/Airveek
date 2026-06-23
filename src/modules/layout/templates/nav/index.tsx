"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Dropdown } from "@modules/common/components/dropdown";
import MobileMenu, {
  MobileMenuButton,
} from "@modules/layout/components/mobile-menu";
import {
  actionLinks,
  navigationDropdowns,
  primaryLinks,
  type DropdownName,
  type HeaderLink,
} from "@modules/layout/config/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownName | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] =
    useState<DropdownName | null>(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  const closeDesktopDropdown = () => setOpenDropdown(null);

  const toggleDesktopDropdown = (dropdownName: DropdownName) => {
    setOpenDropdown((currentDropdown) =>
      currentDropdown === dropdownName ? null : dropdownName,
    );
  };

  const toggleMobileDropdown = (dropdownName: DropdownName) => {
    setOpenMobileDropdown((currentDropdown) =>
      currentDropdown === dropdownName ? null : dropdownName,
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg ">
      <div className="container">
        <div className="flex h-18 items-center justify-between gap-4">
          <Link
            href="/#top"
            className="flex items-center shrink-0 focus-visible:outline-none"
            onClick={closeMenu}
            aria-label="Airvik home"
          >
            <Image
              src="/assets/images/airveek-logo.png"
              alt="Airveek"
              width={434}
              height={154}
              priority
              className="h-auto w-44 lg:w-56 max-w-full"
            />
          </Link>

          <nav aria-label="Primary navigation" className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {navigationDropdowns.map((dropdown) => (
                <li key={dropdown.name}>
                  <Dropdown
                    id={`desktop-${dropdown.name}-menu`}
                    label={dropdown.label}
                    heading={dropdown.heading}
                    isOpen={openDropdown === dropdown.name}
                    links={dropdown.links}
                    onOpen={() => setOpenDropdown(dropdown.name)}
                    onClose={closeDesktopDropdown}
                    onToggle={() => toggleDesktopDropdown(dropdown.name)}
                    onLinkClick={closeDesktopDropdown}
                  />
                </li>
              ))}

              {primaryLinks.map((link) => (
                <HeaderNavItem
                  key={link.href}
                  link={link}
                  onLinkClick={closeDesktopDropdown}
                />
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href={actionLinks.login}
              className="inline-flex h-11 items-center text-primary hover:text-text-muted focus-visible:outline-none transition-colors duration-200 ease-out"
            >
              Login
            </Link>
            <Link
              href={actionLinks.demo}
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-4 py-2 font-medium text-white hover:bg-bg border hover:text-primary hover:border-primary transition-all duration-200 ease-out focus-visible:outline-none"
            >
              Book Free Demo
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href={actionLinks.demo}
              className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-4 py-2 font-medium text-white hover:bg-bg border hover:text-primary hover:border-primary transition-all duration-200 ease-out focus-visible:outline-none"
              onClick={closeMenu}
            >
              Book Demo
            </Link>
            <MobileMenuButton
              isOpen={isMenuOpen}
              onToggle={() => setIsMenuOpen((currentValue) => !currentValue)}
            />
          </div>
        </div>

        {isMenuOpen ? (
          <MobileMenu
            isOpen={isMenuOpen}
            dropdowns={navigationDropdowns}
            activeDropdown={openMobileDropdown}
            primaryLinks={primaryLinks}
            actions={actionLinks}
            onDropdownToggle={toggleMobileDropdown}
            onClose={closeMenu}
          />
        ) : null}
      </div>
    </header>
  );
}

function HeaderNavItem({
  link,
  onLinkClick,
}: {
  link: HeaderLink;
  onLinkClick: () => void;
}) {
  return (
    <li className="py-4">
      <Link
        href={link.href}
        className="inline-flex h-10 items-center text-text-muted hover:text-primary focus-visible:outline-none transition-colors duration-200 ease-out"
        onClick={onLinkClick}
      >
        {link.label}
      </Link>
    </li>
  );
}





