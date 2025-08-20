// components/JobCard.js
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function JobCard({
  tag,
  title,
  description,
  buttonText,
  imageSrc,
  imageAlt,
}) {
  return (
    <div className="relative w-full max-w-sm mx-auto group">
      {/* Floating Tag */}
      <div className="absolute -top-4 -left-0 -mt-4 bg-amber-500 text-white p-2 px-10 pb-10 rounded-2xl shadow-lg ">
        <span className="font-semibold text-sm tracking-wide">{tag}</span>
      </div>

      {/* --- Main Card Structure --- */}
      <div className="relative z-10 bg-transparent  overflow-hidden ">
        {/* 1. Image Container */}
        <div className="bg-white p-3 rounded-2xl">
          <div className="relative h-48 w-full rounded-xl overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* 2. Text & Button Container */}
        {/* --- CHANGE: Increased horizontal padding from p-6 to px-8 --- */}
        <div className="sm:pr-20">
          <div className="relative z-10 bg-white py-6 px-8 -mt-8 rounded-2xl border-1">
            <h2 className="text-xl sm:text-xl font-bold text-gray-900 mb-3">
              {title}
            </h2>
            <p className="text-gray-600 text-xssm:text-sm mb-6 leading-relaxed">
              {description}
            </p>
            <Link href="https://org.vrittigroup.com/auth/user/register">
              <Button className="bg-amber-500 hover:bg-amber-600 text-white rounded-lg px-6 py-3 font-semibold flex items-center gap-2 w-full justify-center sm:w-auto sm:text-xs text-xs ">
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
