import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const skillLogos = {
  'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  'Framer Motion': 'https://cdn.simpleicons.org/framer',
  'HTML/CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',

  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'RESTful APIs': 'https://cdn.simpleicons.org/postman',
  GraphQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
  Microservices: 'https://cdn.simpleicons.org/docker',
  WebSockets: 'https://cdn.simpleicons.org/socketdotio',

  MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  PostgreSQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  MySQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  Redis: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
  Supabase: 'https://cdn.simpleicons.org/supabase',
  Prisma: 'https://cdn.simpleicons.org/prisma',

  'Git/GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  Docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  AWS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  'CI/CD': 'https://cdn.simpleicons.org/githubactions',
  'Jest/Testing': 'https://cdn.simpleicons.org/jest',
  'Agile/Scrum': 'https://cdn.simpleicons.org/jira',
};

const skillCategories = [
  {
    title: 'Frontend',
    color: 'from-blue-500 to-cyan-400',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Framer Motion', level: 85 },
      { name: 'HTML/CSS', level: 98 },
    ],
  },
  {
    title: 'Backend',
    color: 'from-green-500 to-emerald-400',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 88 },
      { name: 'RESTful APIs', level: 92 },
      { name: 'GraphQL', level: 80 },
      { name: 'Microservices', level: 75 },
      { name: 'WebSockets', level: 82 },
    ],
  },
  {
    title: 'Database',
    color: 'from-orange-500 to-amber-400',
    skills: [
      { name: 'MongoDB', level: 88 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MySQL', level: 82 },
      { name: 'Redis', level: 78 },
      { name: 'Supabase', level: 90 },
      { name: 'Prisma', level: 85 },
    ],
  },
  {
    title: 'Tools & Others',
    color: 'from-purple-500 to-pink-400',
    skills: [
      { name: 'Git/GitHub', level: 92 },
      { name: 'Docker', level: 80 },
      { name: 'AWS', level: 75 },
      { name: 'CI/CD', level: 78 },
      { name: 'Jest/Testing', level: 85 },
      { name: 'Agile/Scrum', level: 88 },
    ],
  },
];

export const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive skill set covering modern web development technologies
          </p>
        </motion.div>

        {/* ⭐ CLEAN LOGO GRID */}
        <div className="space-y-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: categoryIndex * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              <h3
                className={`text-2xl font-bold mb-10 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
              >
                {category.title}
              </h3>

              <div className="flex flex-wrap justify-center gap-8 max-w-3xl mx-auto">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.15 + skillIndex * 0.05,
                    }}
                    className="flex flex-col items-center"
                  >
                    {/* Logo only */}
                    <motion.img
                      src={skillLogos[skill.name as keyof typeof skillLogos]}
                      alt={skill.name}
                      className="w-10 h-10 md:w-12 md:h-12 object-contain"
                      loading="lazy"
                      whileHover={{ scale: 1.25, y: -4 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    />

                    <p className="mt-2 text-xs text-gray-600 dark:text-gray-400 font-medium">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
