import { cn } from "./lib/utils";
import Image from "next/image";
import Link from "next/link";
import './Logo.css';

type IconSize = {
  width?: number;
  height?: number;
};

const LogoIcon = ({ width = 50, height = 50 }: IconSize) => {
  return (
    <Image src="/images/logo1.png" width={width} height={height} alt="Logo" />
  );
};

const Logo = ({ dark = false }) => (
  <Link href="/">
    <div className="flex items-center gap-2 cursor-pointer">
      <LogoIcon />
      <span
        className="text-lg md:text-xl text-[#09396d] font-semibold"
      >
        CityScape Station
      </span>
    </div>
  </Link>
);

export default Logo;
