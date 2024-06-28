"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "./lib/utils";
import { Page } from "@/components/Navbar";
import { MobileNavHelpProps } from "@/components/MobileNavHelp";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

type MobileNavProps = MobileNavHelpProps & {
  pages: Page[];
};

const MobileNav = ({ pages, open, clickHandler }: MobileNavProps) => {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "flex lg:hidden items-center justify-center p-20 w-screen absolute top-0 right-0 z-20 bg-gray-200 opacity-95", // Promijenjeno na sivu boju
        { hidden: !open }
      )}
      onClick={() => clickHandler(!open)}
    >
      <ul className="flex flex-col gap-8 items-center">
        {pages && pages.length > 0 ? (
          pages.map(({ href, title }) => (
            <li key={href}>
              <Link href={href}>
                <span
                  className={cn(
                    "uppercase whitespace-nowrap font-roboto-condensed text-base px-5 py-3 rounded-sm text-gray-900 hover:bg-gray-300", // Promijenjeno na sivu boju
                    {
                      "bg-gray-700 text-gray-100 pointer-events-none": pathname === href, // Promijenjeno na sivu boju
                    }
                  )}
                >
                  {title}
                </span>
              </Link>
            </li>
          ))
        ) : (
          <li>No pages available</li>
        )}
      </ul>
      {/* Dodane ikone unutar MobileNav komponente */}
      <Bars3Icon
        className={cn("text-gray-800 w-8 h-8", { hidden: open })} // Promijenjeno na sivu boju
      />
      
    </nav>
  );
};

export default MobileNav;