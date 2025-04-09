// src/components/FeaturedProfiles.jsx
import React from 'react';

const profiles = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Frontend Developer',
    skills: ['React', 'Tailwind', 'JavaScript'],
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Backend Engineer',
    skills: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    id: 3,
    name: 'Alice Johnson',
    role: 'Full Stack Developer',
    skills: ['React', 'Node.js'],
  },
];

const FeaturedProfiles = () => {
  const handleClick = (profile) => {
    alert(`Clicked on ${profile.name}`);
  };

  return (
    <div className="px-6 mt-10 bg-white text-black">
      <h2 className="text-2xl font-semibold mb-4">Featured Profiles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="bg-white border border-gray-200 p-6 rounded-lg shadow hover:shadow-lg hover:scale-105 transition cursor-pointer"
            onClick={() => handleClick(profile)}
          >
            <h3 className="text-xl font-bold mb-1">{profile.name}</h3>
            <p className="mb-2 text-gray-700">{profile.role}</p>
            <ul className="list-disc list-inside text-gray-800">
              {profile.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProfiles;
