// src/components/SkillCard.js
import React from 'react';

const SkillCard = ({ skill }) => {
  return (
    <div 
      className="relative bg-white dark:bg-slate-700 shadow-xl shadow-purple-400 dark:shadow-blue-700 rounded-xl p-10 m-4 flex flex-col items-center transition-transform transform hover:scale-110"
    >
      <img src={skill.imageUrl} alt={skill.name} className="w-16 h-16 object-contain mb-4" />
      <h3 className="text-xl font-mono font-bold ">{skill.name}</h3>
    </div>
  );
};

export default SkillCard;
