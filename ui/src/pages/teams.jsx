import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
// TeamCard Component
const TeamCard = ({ name, role, imgSrc, github, instagram, linkedin }) => {
  return (
    <div className="max-w-xs w-full bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
      {/* Profile Image Section */}
      <div className="p-4 flex flex-col items-center">
        {/* Profile Image (circular) */}
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-200 mb-4">
          <img src={imgSrc} alt={name} className="w-full h-full object-cover" />
        </div>

        {/* Name */}
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        {/* Role */}
        <p className="text-sm text-gray-500">{role}</p>

        {/* Social Media Icons Section */}
        <div className="mt-4 flex space-x-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-700"
          >
            <FaLinkedin className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

// Main Team Component
const Team = () => {
  const teamMembers = [
    {
      name: "Oshika Sharma",
      role: "Team Leader",
      imgSrc: "", // Placeholder image, replace with actual image URL
      github: "https://github.com/Oshika22",
      linkedin: "https://www.linkedin.com/in/oshika-sharma-a1120529a/",
    },
    {
      name: "Anshul Goyal",
      role: "",
      imgSrc: "https://via.placeholder.com/150", // Placeholder image, replace with actual image URL
      github: "https://github.com/janesmith",
      linkedin: "https://www.linkedin.com/in/anshulgoyal2/",
    },
    {
      name: "Pranjali Yeotikar",
      role: "",
      imgSrc: "https://via.placeholder.com/150", // Placeholder image, replace with actual image URL
      github: "https://github.com/janesmith",
      linkedin: "https://www.linkedin.com/in/pranjali-yeotikar-042ab82a6/",
    },
    {
      name: "Nishik Ojha",
      role: "",
      imgSrc: "https://via.placeholder.com/150", // Placeholder image, replace with actual image URL
      github: "https://github.com/janesmith",
      instagram: "https://www.instagram.com/janesmith",
      linkedin: "https://www.linkedin.com/in/nishik-ojha-74785a289/",
    },
    // Add more team members as needed
  ];

  return (
    <div>
        <h1 className="text-6xl text-[#333333] font-semibold mb-6 text-center text-shadow">Team</h1>
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            role={member.role}
            imgSrc={member.imgSrc}
            github={member.github}
            instagram={member.instagram}
            linkedin={member.linkedin}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
