import HeroImageGrid, { HeroImageObject } from "./HeroImageGrid";
import heroImage1 from "@/images/split1.jpg";
import heroImage2 from "@/images/split2.jpg";
import heroImage3 from "@/images/split3.jpg";
import heroImage4 from "@/images/split4.jpg";

const images: HeroImageObject[] = [
  { image: heroImage1, borderRadius: "20% 0 0 0" },
  { image: heroImage2, borderRadius: "0 20% 0 0" },
  { image: heroImage3, borderRadius: "0 0 0 20%" },
  { image: heroImage4, borderRadius: "0 0 20% 0" },
];

const HeroSection = () => (
  <section className="w-full mb-8 bg-white">
    <div className="container flex justify-between items-center gap-10">
      <div className="flex flex-col justify-start gap-5 max-w-xl mx-auto lg:m-0 text-black">
        <h1 className="font-bold font-serif text-4xl md:text-5xl lg:text-6xl mb-2 lg:mb-4" style={{ color: "#09396d" }}>
          UPOZNAJTE SPLIT &hearts; <br />
        </h1>
        <p className="font-roboto text-lg lg:text-xl" style={{ color: "#09396d" }}>
          Otkrijte nevjerojatnu kombinaciju bogate povijesti i impresivne arhitekture. Uživajte u prekrasnim plažama i jedinstvenom <br />spoju tradicije i modernog.
        </p>
      </div>
      <div className="hidden lg:block flex-shrink-0">
        <HeroImageGrid images={images} />
      </div>
    </div>
  </section>
);

export default HeroSection;
