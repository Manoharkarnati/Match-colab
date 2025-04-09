import React from 'react';
{profiles.map((profile, i) => (
  <div key={i} className="p-4 bg-white rounded-lg shadow-md mb-4">
    <img src={profile.avatar} alt={profile.name} className="rounded-full w-24 h-24 mx-auto mb-2" />
    <h2 className="text-lg font-bold text-center">{profile.name}, {profile.age}</h2>
    <p className="text-center text-gray-600 italic">{profile.tagline}</p>
    <p className="text-center text-sm text-gray-700">{profile.location}</p>
    <p className="mt-2 text-sm text-gray-800">{profile.description}</p>
    <ul className="mt-2 list-disc list-inside">
      {profile.hobbies.map((hobby, j) => (
        <li key={j}><strong>{hobby.title}:</strong> {hobby.description}</li>
      ))}
    </ul>
  </div>
))}

const ProfileCard = ({ profile }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md mb-4 text-black">
      <div className="flex items-center mb-2">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h2 className="text-xl font-bold">{profile.name}, {profile.age}</h2>
          <p className="text-sm text-gray-600">{profile.location}</p>
          <p className="italic text-sm">{profile.tagline}</p>
        </div>
      </div>
      <p className="mb-2">{profile.description}</p>
      <h4 className="font-semibold">Hobbies:</h4>
      <ul className="list-disc list-inside">
        {profile.hobbies.map((hobby, idx) => (
          <li key={idx}>
            <strong>{hobby.title}:</strong> {hobby.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileCard;
