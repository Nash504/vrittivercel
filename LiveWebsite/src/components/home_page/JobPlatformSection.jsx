// components/JobPlatformSection.js
import Image from "next/image";
import YellowVrittiLogo from "../../assets/YellowVrittiLogo.png";
import JobCard from "./JobCard"; // Import the new component
import job2 from "../../assets/job2.webp";
import job1 from "../../assets/job1.webp"; // Replace with actual job image path
export default function JobPlatformSection() {
  const jobStyle = {
    backgroundImage: `url(${YellowVrittiLogo.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#1A202C",
  };
  return (
    <div style={jobStyle}>
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
          {/* Job Seekers Card */}
          <JobCard
            tag="FOR JOB SEEKERS"
            title={
              <>
                Ready to Build
                <br />
                Your Future?
              </>
            }
            description="Start learning with Vritti, get certified, be interviewed by our team, and connect to jobs built for your skills."
            buttonText="Explore Courses & Get Started"
            imageSrc={job1}
            imageAlt="Job seeker in industrial setting"
          />

          {/* Employers Card */}
          <JobCard
            tag="FOR EMPLOYERS"
            title={
              <>
                Need Talent
                <br />
                That's Truly Ready?
              </>
            }
            description="Post your requirements or let Vritti's team match you with pre-trained, interviewed, and certified candidates—fast."
            buttonText="Find Talent or Post a Job"
            imageSrc={job2}
            imageAlt="Worker in safety gear at industrial site"
          />
        </div>
      </div>
    </div>
  );
}
