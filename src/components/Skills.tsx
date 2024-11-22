import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux', 'GraphQL']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS']
  },
  {
    category: 'Tools & Methods',
    items: ['Git', 'CI/CD', 'Agile', 'TDD', 'REST APIs', 'System Design']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillSet, index) => (
            <SkillCard key={index} skillSet={skillSet} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skillSet, index }: { skillSet: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
    >
      <h3 className="text-xl font-bold mb-6 text-purple-600">{skillSet.category}</h3>
      <div className="grid grid-cols-2 gap-4">
        {skillSet.items.map((skill: string) => (
          <motion.div
            key={skill}
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-2 h-2 rounded-full bg-purple-600" />
            <span className="text-gray-700">{skill}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}