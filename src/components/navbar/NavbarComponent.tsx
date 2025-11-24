"use client";
import { useState, useEffect } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavToggle,
  MobileNavHeader,
  MobileNavMenu,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navbar";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import Link from "next/link";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export default function NavbarComponent() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "AI Chatbot", link: "/login" },
    {
      name: "More",
      submenu: [
        { name: "About", link: "/about" },
        { name: "Training", link: "/training" },
      ],
    },
  ];

  return (
    <Navbar className="fixed top-0 left-0 w-full z-50">
      {/* 🖥️ Desktop Navbar */}
      <NavBody isScrolled={isScrolled}>
        <NavbarLogo isScrolled={isScrolled} />
        <NavItems items={navItems} isScrolled={isScrolled} />

        <div className="flex items-center gap-4">
          <AnimatedThemeToggler
            className="relative z-50 cursor-pointer text-2xl p-1 rounded-full transition-colors text-gray-700 dark:text-white hover:text-gray-500 dark:hover:text-gray-300"
          />
          <NavbarButton href="/login" variant="secondary">
            <Button className="dark:bg-black dark:text-white dark:hover:bg-gray-900">Log In</Button>
          </NavbarButton>

          <Link href="/signup">
            <ShimmerButton>Sign Up</ShimmerButton>
          </Link>
        </div>
      </NavBody>

      {/* 📱 Mobile Navbar */}
      <MobileNav isScrolled={isScrolled}>
        <MobileNavHeader>
          <NavbarLogo isScrolled={isScrolled} />
          <div className="flex items-center gap-2">
            <AnimatedThemeToggler
              className="text-xl p-1 transition-colors text-gray-700 dark:text-white"
            />
            <MobileNavToggle
              isOpen={menuOpen}
              isScrolled={isScrolled}
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
        </MobileNavHeader>

        <MobileNavMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)}>
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-lg font-medium text-gray-900 dark:text-neutral-200"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
