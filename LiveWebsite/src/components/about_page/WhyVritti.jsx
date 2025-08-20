// components/WhyVritti.jsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/card";
import YellowVritti from "../../assets/YellowVrittiLogo.png"; // Assuming this is used somewhere in the component

import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
export default function WhyVritti() {
  const whystyle = {
    backgroundImage: `url(${YellowVritti.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#1A202C",
  };

  const items = [
    {
      title: "For Job Seekers",
      description:
        "Get real-world skills, earn industry-recognized certifications, and benefit from personal guidance at every step.",
      image: card1,
    },
    {
      title: "For Employers",
      description:
        "Hire candidates who are fully prepared—pre-trained, pre-interviewed, and ready to deliver value from day one.",
      image: card2,
    },
    {
      title: "For Everyone",
      description:
        "Trust, transparency, and results. No shortcuts—just the right skills and the right people, matched for lasting success.",
      image: card3,
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20" style={whystyle}>
      <div className=" mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-left text-blue-950">
          Why Vritti?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            // --- CHANGE: The card now has a white background and padding ---
            <Card
              key={index}
              className="rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all overflow-hidden p-4"
            >
              {/* CardHeader with background image */}
              <CardHeader
                className="h-48 relative rounded-xl overflow-hidden" // Added overflow-hidden
                style={{
                  backgroundImage: `url(${item.image.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></CardHeader>

              {/* CardContent no longer needs a background color */}
              <CardContent className="p-4 pt-6">
                <CardTitle className="text-xl font-bold mb-2">
                  {item.title}
                </CardTitle>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
