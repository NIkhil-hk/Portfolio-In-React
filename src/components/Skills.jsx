// src/components/Skills.js
import React from 'react';
import SkillCard from './skills/SkillCard';
import { skillsData, toolsData } from './skills/skills';

const Skills = () => {
  return (
    <div className="py-12 bg-gray-200 dark:bg-slate-600">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-8">My Skills</h2>
        <div className="flex flex-wrap justify-center">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
        <h2 className="text-5xl font-bold text-center my-8">Tools I Use</h2>
        <div className="flex flex-wrap justify-center">
          {toolsData.map((tool, index) => (
            <SkillCard key={index} skill={tool} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
