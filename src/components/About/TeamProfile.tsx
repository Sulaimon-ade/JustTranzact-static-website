import React from 'react';
import { TeamProfileProps } from '../../types';

const TeamProfile: React.FC<TeamProfileProps> = ({
  name,
  role,
  bio,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-primary-100 shadow-md">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <h3 className="text-xl font-bold text-primary-700 mb-1">{name}</h3>
      <p className="text-accent-600 font-medium mb-3">{role}</p>
      <p className="text-neutral-600 text-sm">{bio}</p>
    </div>
  );
};

export default TeamProfile;