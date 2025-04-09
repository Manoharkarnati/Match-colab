import React from 'react';
import profiles from '../data/profilesData';

function FeaturedProfiles() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {profiles.map((profile, index) => (
        <div key={index} className="bg-white text-black rounded-lg shadow-md p-6">
          <img src={profile.avatar} alt={profile.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-center">{profile.name}, {profile.age}</h2>
          <p className="text-center italic text-gray-600">{profile.tagline}</p>
          <p className="text-center text-sm mb-4">{profile.location}</p>
          <p className="text-sm">{profile.description}</p>
          <ul className="mt-3 list-disc list-inside text-sm">
            {profile.hobbies.map((hobby, idx) => (
              <li key={idx}>
                <strong>{hobby.title}:</strong> {hobby.description}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default FeaturedProfiles;
