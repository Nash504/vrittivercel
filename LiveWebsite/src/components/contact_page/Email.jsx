// components/ContactForm.jsx

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

export default function ContactForm() {
  const formStyle = {
    backgroundImage: `url(${form.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#1A202C",
  };

  // State to hold all form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    userType: "",
    message: "",
  });
  // State to show submission status (e.g., "Sending...", "Success!")
  const [status, setStatus] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, userType: value }));
  };

  // Function to run when the form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // Send the form data to our own backend API route
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
        }); // Clear the form
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-8">
      <div className="text-center text-white mb-8 max-w-lg mx-auto px-4"></div>

      <Card className="max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl">
        <CardContent className="p-0">
          <div className="grid md:grid-cols-2">
            {/* Left side */}
            <div className="p-6 sm:p-8 lg:p-12 flex flex-col">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
                Contact
                <br />
                Form
              </h1>
              <div
                className="relative w-full flex-grow h-56 sm:h-auto rounded-2xl overflow-hidden"
                style={formStyle}
              ></div>
            </div>

            {/* Right side - The Form */}
            <div className="p-6 sm:p-8 lg:p-12 bg-gray-50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter Name"
                      required
                    />
                  </div>
                  {/* Email Input */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter Email"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone Input */}
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (optional)</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter Phone number"
                    />
                  </div>
                  {/* Select Input */}
                  <div className="space-y-2">
                    <Label>Are you a Job Seeker or Employer?</Label>
                    <Select
                      onValueChange={handleSelectChange}
                      value={formData.userType}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Please select one" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Job Seeker">Job Seeker</SelectItem>
                        <SelectItem value="Employer">Employer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Textarea Input */}
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter your message here..."
                    required
                    className="min-h-[120px]"
                  />
                </div>

                {/* Submit button and status message */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg text-lg"
                    disabled={status === "Sending..."}
                  >
                    {status === "Sending..." ? "SENDING..." : "SUBMIT"}
                  </Button>
                  {status && (
                    <p className="text-center text-sm mt-4">{status}</p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Information Cards Added Below */}
      <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0">
        {/* Email Card */}
        <Card className="shadow-lg rounded-2xl">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-800">
              Prefer email? Contact us at
            </h3>
            <a
              href="mailto:info@vritti.com"
              className="text-orange-600 hover:underline break-words"
            >
              info@vritti.com
            </a>
          </CardContent>
        </Card>

        {/* Employer Inquiries Card */}
        <Card className="shadow-lg rounded-2xl">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-800">
              For urgent employer inquiries
            </h3>
            <a
              href="mailto:employers@vritti.com"
              className="text-orange-600 hover:underline break-words"
            >
              employers@vritti.com
            </a>
          </CardContent>
        </Card>

        {/* Office Address Card */}
        <Card className="shadow-lg rounded-2xl md:col-span-2">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-800">
              Office Address
            </h3>
            <p className="text-gray-600 mt-1">
              {/* TODO: Replace with your actual office address */}
              123 Vritti Towers, Koramangala 4th Block, <br />
              Bengaluru, Karnataka 560034, India
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
