"use client";

import { signOutAction } from "@/app/actions/auth";
import LoginModal from "./LoginModal";
import { Session } from "next-auth";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function Navbar({ session }: { session: Session | null }) {
  return (
    <nav className="z-5 fixed w-full top-0 font-sans text-neutral-900 bg-white/70 uppercase">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">

          {/* Logo Section */}
          <div className="flex flex-1 items-center justify-start">
            <Link href="/" className="flex shrink-0 items-center gap-2">
              <Image
                src="/images/logo.svg"
                alt="Tape Trader"
                width={50}
                height={50}
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center">
            <div className="hidden sm:flex text-brand-600 items-center gap-1 underline decoration-brand-300 decoration-2 underline-offset-4">
              {session && (
                <>
                  <Link href="/collection" className="px-3 py-2 text-md hover:text-brand-400 hover:decoration-brand-200 transition-colors">
                    Collection
                  </Link>
                  <Link href="/listings" className="px-3 py-2 text-md hover:text-brand-400 hover:decoration-brand-200 transition-colors">
                    Listings
                  </Link>
                </>
              )}
              <Link href="/about" className="px-3 py-2 text-md hover:text-brand-400 hover:decoration-brand-200 transition-colors">
                About
              </Link>
              {!session && (
                <LoginModal headerText="Log In" triggerText="Log In" variant="link" />
              )}
            </div>

            {/* Right Side: Auth State */}
            <div className="flex items-center border-l border-neutral-200 dark:border-neutral-800 ml-2 pl-5">
              {session ? (
                <Menu as="div" className="relative">
                  <MenuButton className="flex items-center gap-3 focus:outline-none">
                    <div className="h-10 w-10 rounded-full bg-brand-600 flex items-center justify-center text-white text-md">
                      {session.user?.name?.charAt(0) || "U"}
                    </div>
                    <span className="hidden md:block text-md text-neutral-400 font-light">
                      {session.user?.email}
                    </span>
                    <ChevronDownIcon
                      className="h-7 w-7 text-neutral-300"
                      aria-hidden="true"
                    />
                  </MenuButton>

                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-neutral-200 ring-opacity-5 transition focus:outline-none data-closed:scale-95 data-closed:opacity-0"
                  >
                    <MenuItem>
                      <Link href="/profile" className="block px-4 py-2 text-md text-neutral-700 hover:bg-neutral-100">
                        Profile
                      </Link>
                    </MenuItem>
                    <hr className="border-t border-neutral-200"></hr>
                    <MenuItem>
                      <button
                        onClick={() => signOutAction()}
                        className="block w-full text-left px-4 py-2 text-md text-rose-600 hover:bg-neutral-100"
                      >
                        Log Out
                      </button>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              ) : (
                <LoginModal headerText="Sign Up" triggerText="Sign Up" variant="button" />
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
