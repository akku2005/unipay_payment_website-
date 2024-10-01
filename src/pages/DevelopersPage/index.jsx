import React from "react";
import { Link } from "react-router-dom"; // Import Link for internal navigation
import Header from "../../components/Header";
import Footer from "../../components/Footer"; // Import Footer component
import developersData from "../../data/developers.json"; // Assuming you have a JSON file for developers

const Developers = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col min-h-screen ">
        <Header />
        <main className="flex-grow mt-28 h-auto mb-4">
          <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
            <h1 className="text-4xl font-bold text-center mb-10">
              Meet Our Developer
            </h1>
            <div className="justify-center">
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
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={profilePic}
        alt={`${name}'s profile`}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">{name}</h2>
        <h3 className="text-lg text-gray-600 mb-2">{role}</h3>
        <p className="text-gray-500 mb-4">{bio}</p>
        <Link
          to={linkedin}
          className="text-blue-600 hover:underline"
          target="_blank"
        >
          View LinkedIn Profile
        </Link>
      </div>
    </div>
  );
};

export default Developers;
