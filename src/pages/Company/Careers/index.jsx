import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const jobListings = [
  {
    title: "Frontend Developer",
    location: "Remote",
    description:
      "We are looking for a talented Frontend Developer to join our team. You will work closely with our design and backend teams to create a seamless user experience.",
    requirements: [
      "Proficient in React and JavaScript.",
      "Experience with responsive design and web performance.",
      "Familiarity with RESTful APIs.",
    ],
    applyLink: "#", // Replace with the actual application link
  },
  {
    title: "Backend Developer",
    location: "Remote",
    description:
      "Join our development team as a Backend Developer. You will be responsible for server-side application logic and integration.",
    requirements: [
      "Experience with Node.js and Express.",
      "Proficient in database management (MongoDB, MySQL).",
      "Familiarity with RESTful API development.",
    ],
    applyLink: "#", // Replace with the actual application link
  },
  {
    title: "UX/UI Designer",
    location: "Remote",
    description:
      "We are seeking a creative UX/UI Designer to help shape the user experience of our platform. You will collaborate with developers and product managers.",
    requirements: [
      "Strong portfolio showcasing UX/UI design projects.",
      "Proficiency in design tools like Figma or Adobe XD.",
      "Understanding of user-centered design principles.",
    ],
    applyLink: "#", // Replace with the actual application link
  },
  // Add more job listings as needed
];

const Careers = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mt-44 mb-10 text-white">
        <div className="max-w-screen-lg mx-auto px-4 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-10">
            Careers at <span className="text-rose-500">UniPay</span>
            <span className="text-lime-500">.</span>
          </h1>

          <section>
            {jobListings.map((job, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 mb-6"
              >
                <h2 className="text-2xl font-semibold">{job.title}</h2>
                <p className="text-gray-300 mb-2">{job.location}</p>
                <p className="text-gray-300 mb-4">{job.description}</p>
                <h3 className="text-xl font-semibold mb-2">Requirements:</h3>
                <ul className="list-disc list-inside text-gray-300 mb-4">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
                <a
                  href={job.applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
