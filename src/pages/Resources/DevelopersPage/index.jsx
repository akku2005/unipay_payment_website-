import React from "react";
import { Link } from "react-router-dom"; // Import Link for internal navigation
import Header from "../../../components/Header";
import Footer from "../../../components/Footer"; // Import Footer component
import developersData from "../../../data/developers.json"; // Assuming you have a JSON file for developers

const Developers = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-black to-gray-900 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex justify-center items-center mt-44 mb-20">
          <div className="max-w-screen-xl mx-auto px-4 lg:px-8 flex justify-center items-center flex-col">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
              Meet Our <span className="text-rose-500">Developer</span>
              <span className="text-lime-500">.</span>
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {developersData.length > 0 ? (
                developersData.map((developer) => (
                  <DeveloperCard
                    key={developer.id}
                    name={developer.name}
                    role={developer.role}
                    bio={developer.bio}
                    profilePic={developer.profilePic}
                    linkedin={developer.linkedin}
                  />
                ))
              ) : (
                <p className="text-center text-gray-500">
                  No developers available.
                </p>
              )}
            </div>
          </div>
        </main>
        <Footer /> {/* Footer is placed at the bottom */}
      </div>
    </>
  );
};

const DeveloperCard = ({ name, role, bio, profilePic, linkedin }) => {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-md border border-gray-700 rounded-lg shadow-lg overflow-hidden w-72">
      {" "}
      {/* Set a fixed width */}
      <img
        src={profilePic}
        alt={`${name}'s profile`}
        className="w-32 h-32 rounded-full mx-auto mt-6 object-cover border-4 border-gray-700"
      />
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold mb-2 text-white">{name}</h2>
        <h3 className="text-md text-gray-400 mb-2">{role}</h3>
        <p className="text-gray-300 mb-4">{bio}</p>
        <Link
          to={linkedin}
          className="text-blue-400 hover:underline"
          target="_blank"
        >
          View LinkedIn Profile
        </Link>
      </div>
    </div>
  );
};

export default Developers;
