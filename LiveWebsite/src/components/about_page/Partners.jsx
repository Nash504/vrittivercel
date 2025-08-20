// components/PartnersSection.jsx
import Image from "next/image";
import partner1 from "../../assets/lukoil.jpg";
import partner2 from "../../assets/Aramco.png";
import partner3 from "../../assets/Poche.jpg";
import partner4 from "../../assets/exxon.png";
import partner5 from "../../assets/Petrobras.png";

export default function PartnersSection() {
  const partners = [
    { src: partner1, alt: "Lukoil" },
    { src: partner2, alt: "Saudi Aramco" },
    { src: partner3, alt: "Rosneft" },
    { src: partner4, alt: "ExxonMobil" },
    { src: partner5, alt: "Petrobras" },
  ];

  return (
    <section className="bg-white py-16 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-12 text-center sm:text-left">
          Our Partners & Supporters
        </h2>

        {/* --- CHANGE: Added `flex-wrap` and simplified the flex classes --- */}
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {partners.map((partner, index) => (
            // The container for each logo
            <div
              key={index}
              // Removed flex-shrink-0 as it's not needed with flex-wrap
              className="w-40 h-24 md:w-48 md:h-28 relative"
            >
              {/* Using fill and object-contain for uniform sizing is correct */}
              <Image
                src={partner.src}
                alt={partner.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
