'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { NAV_ITEMS } from '@/lib/site';
import { cn } from '@/lib/utils';

import { ThemeToggle } from '../ui/theme-toggle';
import { Logo } from './logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]);

  const bgColor = 'bg-obsidian';

  return (
    <header
      className={cn(
        'border-b-dark-gray sticky top-0 z-50 h-20 border-b px-2.5 lg:px-0',
        bgColor,
      )}
    >
      <div className="border-r-dark-gray border-l-dark-gray container flex h-20 items-center border">
        <div className="flex w-full items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" aria-label="Nuvio Technologies home">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="flex items-center justify-center">
            <nav className="mr-4 hidden items-center gap-1 lg:flex">
              {NAV_ITEMS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-foreground hover:text-muted-foreground p-2 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2.5">
              <div
                className={`transition-opacity duration-300 ${isMenuOpen ? 'max-lg:pointer-events-none max-lg:opacity-0' : 'opacity-100'}`}
              >
                <Button asChild size="sm" className="max-sm:hidden">
                  <Link href="#contact">Start a project</Link>
                </Button>
              </div>

              <div
                className={`transition-opacity duration-300 ${isMenuOpen ? 'max-lg:pointer-events-none max-lg:opacity-0' : 'opacity-100'}`}
              >
                <ThemeToggle />
              </div>

              {/* Hamburger Menu Button (Mobile Only) */}
              <button
                className="text-muted-foreground relative flex size-8 lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">
                  {isMenuOpen ? 'Close main menu' : 'Open main menu'}
                </span>
                <div className="absolute top-1/2 left-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2">
                  <span
                    aria-hidden="true"
                    className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}
                  ></span>
                  <span
                    aria-hidden="true"
                    className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}
                  ></span>
                  <span
                    aria-hidden="true"
                    className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'border-t-dark-gray absolute inset-x-0 top-full container flex h-[calc(100vh-80px)] flex-col border-t px-2.5 lg:px-0',
          'transition duration-300 ease-in-out lg:hidden',
          isMenuOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-full opacity-0',
          bgColor,
        )}
      >
        <div className="border-dark-gray h-[calc(100vh-80px)] border-x px-5">
          <nav className="mt-6 flex flex-1 flex-col gap-6">
            {NAV_ITEMS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-foreground text-lg tracking-[-0.36px]"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-2 w-full">
              <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                Start a project
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
