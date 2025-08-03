// components/JobCard.js
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function JobCard({
  tag,
  title,
  description,
  buttonText,
  imageSrc,
  imageAlt,
}) {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Floating Tag */}
      <div className="absolute -top-4 -left-4 bg-orange-500 text-white px-6 py-3 rounded-2xl shadow-md z-20 transform -rotate-1">
        <span className="font-semibold text-sm tracking-wide">{tag}</span>
      </div>

      {/* Main Card Content */}
      <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden pt-12 z-10">
        {/* Image Container */}
        <div className="p-6 pb-0">
          <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Text Content and Button */}
        <div className="px-6 pb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-3 font-semibold flex items-center gap-2 w-full sm:w-auto">
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
