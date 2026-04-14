"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";

interface LoginModalProps {
  headerText?: string;
  triggerText?: string;
  variant?: "button" | "link";
}

export default function LoginModal({
  headerText = "Sign Up",
  triggerText = "Sign Up",
  variant = "button"
}: LoginModalProps) {
  const [isOpen, setIsOpen] = useState(false);

const triggerStyles = variant === "button"
    ? "rounded-xl bg-brand-600 px-4 py-2 text-md text-white shadow-sm hover:bg-brand-500 transition-colors uppercase"
    : "px-3 py-2 text-md transition-colors font-medium uppercase hover:text-brand-400 hover:decoration-brand-200";

  return (
    <>
      <button onClick={() => setIsOpen(true)} className={triggerStyles}>
        {triggerText}
      </button>

      <Dialog open={isOpen} onClose={setIsOpen} className="relative z-50">

        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-50 sm:mx-0 sm:size-10">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6 text-brand-600">
                      <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle as="h3" className="text-base font-semibold text-gray-900 uppercase tracking-tight">
                     {headerText}
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Create an account to start your collection, list tapes for trade, and access the monthly mixtape.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={() => signIn("google")}
                  className="inline-flex w-full justify-center rounded-md bg-brand-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 sm:ml-3 sm:w-auto"
                >
                  Continue with Google
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
