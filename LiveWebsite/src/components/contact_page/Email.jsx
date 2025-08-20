// components/contact_page/Email.jsx

"use client";

import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import Image from "next/image";
import form from "../../assets/form.jpg";

// A smaller, reusable component for the info cards at the bottom
const InfoCard = ({ title, email }) => (
  <Card className="shadow-lg rounded-2xl">
    <CardContent className="p-6 text-center">
      <h3 className="text-lg font-bold text-blue-950">{title}</h3>
      <a
        href={`mailto:${email}`}
        className="text-black hover:underline break-words font-bold"
      >
        {email}
      </a>
    </CardContent>
  </Card>
);

export default function Email() {
  const formStyle = {
    backgroundImage: `url(${form.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    userType: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, userType: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          userType: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    // The main container with padding and positioning context
    <div className="relative bg-white pt-16 sm:pt-20 lg:pt-24 pb-16 px-4">
      {/* The main card with the negative margin to create the overlap effect */}
      <Card className="max-w-6xl mx-auto sm:-mt-48 rounded-2xl overflow-hidden shadow-2xl border">
        <CardContent className="p-0">
          <div className="grid md:grid-cols-5">
            {/* Left side - Image and Title (takes up 2/5 of the width on md screens) */}
            <div className="md:col-span-2 p-6 sm:p-8 flex flex-col">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Contact Form
              </h2>
              <div
                className="relative w-full flex-grow h-56 sm:h-auto rounded-xl overflow-hidden shadow-lg"
                style={formStyle}
              ></div>
            </div>

            {/* Right side - The Form (takes up 3/5 of the width on md screens) */}
            <div className="md:col-span-3 p-6 sm:p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter Name"
                      required
                      className="bg-gray-200 border-transparent focus:border-orange-500 rounded-md"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter Email"
                      required
                      className="bg-gray-200 border-transparent focus:border-orange-500 rounded-md"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (optional)</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter Phone number"
                      className="bg-gray-200 border-transparent focus:border-orange-500 rounded-md"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Are you a Job Seeker or Employer?</Label>
                    <Select
                      onValueChange={handleSelectChange}
                      value={formData.userType}
                      required
                    >
                      <SelectTrigger className="bg-gray-200 border-transparent focus:ring-orange-500 rounded-md">
                        <SelectValue placeholder="Job Seeker or Employer" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Job Seeker">Job Seeker</SelectItem>
                        <SelectItem value="Employer">Employer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter your message here..."
                    required
                    className="bg-gray-200 border-transparent focus:border-orange-500 rounded-md min-h-[120px]"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-400 text-black font-semibold py-3 rounded-lg text-lg"
                    disabled={status === "Sending..."}
                  >
                    {status === "Sending..." ? "SENDING..." : "SUBMIT"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0">
        <InfoCard title="Prefer email? Contact us at" email="info@vritti.com" />
        <InfoCard
          title="For urgent employer inquiries"
          email="employers@vritti.com"
        />
        <Card className="shadow-lg rounded-2xl md:col-span-2 shadow-">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold text-blue-950">Office Address</h3>
            <p className="text-black mt-1 font-bold">
              123 Vritti Towers, Koramangala 4th Block, <br />
              Bengaluru, Karnataka 560034, India
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
