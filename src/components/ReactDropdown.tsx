import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import {
  motion,
  AnimatePresence,
  useAnimationControls,
  //   useReducedMotion,
} from "framer-motion";

const sleep = (s: number) =>
  new Promise((resolve) => setTimeout(resolve, s * 1000));

export default function ReactDropdown() {
  const [showNav, setShowNav] = useState(false);
  let controls = useAnimationControls();

  async function closeMenu() {
    await controls.start("closed");
    setShowNav(false);
    // here we are ensuring our menu animation finished before
    // dismissing the menu
  }

  useEffect(() => {
    if (showNav) {
      controls.start("open");
    }
  }, [controls, showNav]);

  return (
    <DropdownMenu.Root open={showNav} onOpenChange={setShowNav}>
      <DropdownMenu.Trigger className="focus:bg-skin-fill-muted  md:hidden">
        {!showNav && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-8 w-8 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
        {showNav && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </DropdownMenu.Trigger>
      <AnimatePresence>
        {showNav && (
          <DropdownMenu.Portal forceMount>
            <DropdownMenu.Content
              className="font-sans flex h-screen w-screen flex-col bg
                      items-center gap-16 bg-opacity-30 px-6 py-24 text-2xl font-medium 
                      backdrop-blur  z-50
                        md:hidden"
              asChild
            >
              <motion.div
                initial="closed"
                animate={controls}
                exit="closed"
                variants={{
                  open: {
                    opacity: 1,
                    transition: { ease: "easeOut", duration: 0.1 },
                  },
                  closed: {
                    opacity: 0,
                    transition: { ease: "easeIn", duration: 0.3 },
                  },
                }}
              >
                <a href="/events" className="max-w-max">
                  <Item closeMenu={closeMenu}>Events</Item>
                </a>
                <a href="/about" className="max-w-max">
                  <Item closeMenu={closeMenu}>About Us</Item>
                </a>
                <a href="https://rkbce3s6n3o.typeform.com/to/FMhtniXO">
                <button
            type="button"
            className="cta-button font-bold "
            // onClick="location.href='https://rkbce3s6n3o.typeform.com/to/FMhtniXO';"
            value="Join Mailing List"
          >

            Join
          </button>
          </a>
              </motion.div>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        )}
      </AnimatePresence>
    </DropdownMenu.Root>
  );
}

function Item({
  children,
  onSelect = () => {},
  closeMenu,
}: {
  children: ReactNode;
  onSelect?: () => void;
  closeMenu: () => void;
}) {
  let controls = useAnimationControls();
  //   let shouldReduceMotion = useReducedMotion();
  return (
    <DropdownMenu.Item
      onSelect={async (e) => {
        e.preventDefault();
        // if (!shouldReduceMotion) {
        await controls.start({
          backgroundColor: "var(--color-text-muted)",
          color: "var(--color-fill-muted)",
          transition: { duration: 0.1 },
        });
        await controls.start({
          backgroundColor: "var(--color-fill)",
          color: "var(--color-text-base)",
          transition: { duration: 0.3 },
        });
        await sleep(0.4);
        // }

        await closeMenu();
        onSelect();
      }}
      asChild
      className=" select-none rounded px-2 py-1.5 text-skin-base 
         data-[highlighted]:bg-skin-fill-muted 
         data-[highlighted]:text-skin-base data-[highlighted]:focus:outline-none"
    >
      <motion.div animate={controls}>{children}</motion.div>
    </DropdownMenu.Item>
  );
}
