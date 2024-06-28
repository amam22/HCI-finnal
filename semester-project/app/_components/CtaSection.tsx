import Image from "next/image";
import Button from "@/components/Button";
import image from "@/images/image 4.png"

const CtaSection = () => (
  <div className="bg-white w-full"> {/* Promijenjena pozadinska boja u svijetlo sivu */}
    <section className="pb-8 lg:container flex flex-wrap justify-center items-center gap-10 w-full ">
      <div className="relative h-96 w-full lg:h-80 lg:w-80 brightness-125 saturate-50">
        <Image
          src={image}
          placeholder="blur"
          alt={"CTA image"}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="lg:rounded-lg"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="px-5 lg:px-0 flex flex-col gap-5 max-w-lg">

<div>
  <h1 className="hidden sm:block font-roboto-condensed text-lg font-bold text-black"> {/* Uklonjeno podešavanje debljine fonta */}
    KORISNICI
  </h1>
  <h4 className="font-roboto text-xl text-black"> {/* Uklonjeno podešavanje debljine fonta */}
    Naš autobusni kolodvor otvoren je za raznoliku zajednicu putnika, pružajući posebne pogodnosti i usluge za studente, umirovljenike te sve ostale putnike, kako bismo osigurali udobno i prilagođeno iskustvo putovanja za svakog korisnika.
  </h4>
</div>


      </div>
    </section>
  </div>
);

export default CtaSection;
