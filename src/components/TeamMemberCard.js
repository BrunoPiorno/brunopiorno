import React from 'react';

const TeamMemberCard = ({ name, role, photo }) => {
  return (
    <div className="team-member-card">
      <img src={photo} alt={name} className="team-member-photo" />
      <h3 className="team-member-name">{name}</h3>
      <p className="team-member-role">{role}</p>
    </div>
  );
};

export default TeamMemberCard;
