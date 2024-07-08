// TestimonialCard.jsx
"use client"
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { BadgeNode } from "@/components/Badge";
import { useEffect, useState } from "react";
import fetchData from "../api";

export type TestimonialCardProps = {
  image: StaticImageData;
  title: string;
  body: string;
  badge: BadgeNode;
  link: string;
};

const MAX_BODY_CHARACTERS = 60;

const TestimonialCard = ({
  image,
  title,
  body,
  badge,
  link,
}: TestimonialCardProps) => {
  // Ograniči broj karaktera u body-ju na 60
  const truncatedBody =
    body.length > MAX_BODY_CHARACTERS
      ? `${body.slice(0, MAX_BODY_CHARACTERS)}...`
      : body;


  return (
    <div className="flex-shrink-0 w-64 mx-4 bg-gray-250 shadow-lg rounded-lg overflow-hidden">
      <div className="relative h-48">
        <Image
          className="w-full h-full object-cover object-center"
          src={image}
          alt="Card header"
        />
      </div>
      <div className="flex flex-col justify-between px-6 py-4 h-52">
        <div className="mb-8">
          <h2 className="text-2xl font-roboto-condensed font-bold text-[#09396d]">
            {title}
          </h2>
          <p className="font-roboto text-brand-gray-500 leading-6">
            {truncatedBody}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <Link href={link} passHref>
            <Button className="text-sm px-4 py-2 text-[#09396d]" iconClassName="w-3 h-3">
              Pročitaj više
            </Button>
          </Link>
        </div>
      </div>
    </div >
  );
};

export default TestimonialCard;
