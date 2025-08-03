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
import BuilderDude from "../../assets/BuilderDude.png";
export default function ContactForm() {
  const builderStyle = {
    backgroundImage: `url(${BuilderDude.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#1A202C",
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 p-4 sm:p-6 md:p-8">
      {/* Header text */}
      <div className="text-center text-white mb-8 max-w-lg mx-auto px-4">
        <p className="text-base">
          Reach out to the Vritti team and we'll get back to you as soon as
          possible.
        </p>
      </div>

      {/* Main contact form card */}
      <Card className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl">
        <CardContent className="p-0">
          <div className="grid md:grid-cols-2">
            {/* Left side - Image and title */}
            <div className="p-6 sm:p-8 lg:p-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
                Contact
                <br />
                Form
              </h1>
              <div
                className="relative w-full h-56 sm:h-64 lg:h-80 rounded-2xl overflow-hidden"
                style={builderStyle}
              ></div>
            </div>

            {/* Right side - Form */}
            <div className="p-6 sm:p-8 lg:p-12  bg-gray-50">
              <form className="space-y-6">
                {/* Name and Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-700"
                    >
                      Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Enter Name"
                      className="bg-white border-gray-200 rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter Email"
                      className="bg-white border-gray-200 rounded-lg"
                    />
                  </div>
                </div>

                {/* Phone and Job Seeker/Employer row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-sm font-medium text-gray-700"
                    >
                      Phone (optional)
                    </Label>
                    <Input
                      id="phone"
                      placeholder="Enter Phone number"
                      className="bg-white border-gray-200 rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-700">
                      Are you a Job Seeker or Employer?
                    </Label>
                    <Select>
                      <SelectTrigger className="bg-white border-gray-200 rounded-lg">
                        <SelectValue placeholder="Job Seeker or Employer" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="job-seeker">Job Seeker</SelectItem>
                        <SelectItem value="employer">Employer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message here..."
                    className="bg-white border-gray-200 rounded-lg min-h-[120px] resize-none"
                  />
                </div>

                {/* Submit button */}
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg text-lg">
                  SUBMIT
                </Button>
              </form>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Information cards */}
      <div className="max-w-4xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white rounded-2xl shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Prefer email? Contact us at
            </h3>
            <p className="text-gray-700">info@vritti.com</p>
          </CardContent>
        </Card>

        <Card className="bg-white rounded-2xl shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              For urgent employer inquiries
            </h3>
            <p className="text-gray-700">employers@vritti.com</p>
          </CardContent>
        </Card>

        <Card className="bg-white rounded-2xl shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Office Address
            </h3>
            <p className="text-gray-700 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
