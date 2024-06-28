import React from "react";

type BadgeProps = {
  text: string;
  bgColor: string;
  textColor: string;
};

export type BadgeNode = React.ReactElement<BadgeProps, typeof Badge>;

const Badge = ({ text, bgColor, textColor }: BadgeProps) => (
  <div
    className={`inline-flex items-center ${bgColor} ${textColor} text-xs font-roboto font-[500] px-4 py-1 rounded-full`}
  >
    {text}
  </div>
);

const Badges = {
  design: () => (
    <Badge
      text="Design"
      bgColor="rgba(0, 123, 255, 1)" // Crvena pozadina
      textColor="text-black" // Crna boja teksta
    />
  ),
  digital: () => (
    <Badge
      text="Digital"
      bgColor="bg-silver-500" // Siva pozadina
      textColor="text-black" // Crna boja teksta
    />
  ),
  branding: () => (
    <Badge
      text="Branding"
      bgColor="rgba(0, 123, 255, 1)" // Tamnocrvena pozadina
      textColor="text-black" // Crna boja teksta
    />
  ),
  paper: () => (
    <Badge
      text="Paper"
      bgColor="rgba(0, 123, 255, 1)" // Tamnocrvena pozadina
      textColor="text-black" // Crna boja teksta
    />
  ),
};

export default Badges;
