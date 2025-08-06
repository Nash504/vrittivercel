// components/WhyVritti.jsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/card";
import why from "../../assets/Why.png";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
export default function WhyVritti() {
  const whystyle = {
    backgroundImage: `url(${why.src})`,
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
    <section className="bg-white py-2" style={whystyle}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-left text-blue-950">
          Why Vritti?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <Card
              key={index}
              className="rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden"
            >
              {/* CardHeader with background image */}
              <CardHeader
                className="h-40 relative"
                style={{
                  backgroundImage: item.image
                    ? `url(${item.image.src})`
                    : "linear-gradient(to bottom, #f3f4f6, #e5e7eb)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></CardHeader>

              <CardContent className="p-6">
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
