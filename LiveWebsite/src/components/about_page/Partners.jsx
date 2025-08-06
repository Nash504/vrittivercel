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
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-10">
          Our Partners & Supporters
        </h2>

        {/* Horizontal scroll if too many logos */}
        <div className="flex justify-center gap-10 overflow-x-auto whitespace-nowrap pb-4">
          {partners.map((partner, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src={partner.src}
                alt={partner.alt}
                width={0}
                height={0}
                sizes="80vw"
                className="w-48 h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
