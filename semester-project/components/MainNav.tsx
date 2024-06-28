"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "./lib/utils";
import { Page } from "@/components/Navbar";

const MainNav = ({ pages }: { pages: Page[] }) => {
  const pathname = usePathname();
  return (
    <nav className="hidden lg:flex fixed top-0 left-0 right-0 bg-white z-10">
      <ul className="flex gap-2">
        {pages.map(({ href, title }) => (
          <li key={href}>
            <Link href={href}>
              <span
                className={cn(
                  "uppercase whitespace-nowrap font-roboto-condensed text-base px-5 py-3 rounded-sm transition duration-300",
                  {
                    "bg-blue-500 text-white": pathname === href, // Svijetloplava boja za aktivnu stranicu
                    "bg-blue-500 text-white hover:bg-blue-700": pathname !== href, // Tamnija svijetloplava boja za hover
                  }
                )}
              >
                {title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;
