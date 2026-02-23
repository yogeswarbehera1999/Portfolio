import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Briefcase, GraduationCap } from 'lucide-react';

//Professional Experiences---------------------------------//
const experiences = [
  {
    id: 1,
    Icon: Briefcase,
    type: 'work',
    title: 'MERN-Stack Developer',
    organization: 'Briskode Technology Pvt. Ltd.',
    period: 'Apr 2025 - July 2025',
    description:
      'Leading development of scalable web applications, mentoring junior developers, and architecting cloud-based solutions.',
    achievements: [
      'Increased application performance by 40%',
      'Led team of 5 developers',
      // 'Implemented CI/CD pipeline',
    ],
    color: 'from-blue-500 to-cyan-400',
  },
  {
    id: 2,
    Icon: Briefcase,
    type: 'work',
    title: 'MERN-Stack Developer Intern',
    organization: 'CodeTech IT Solutions',
    period: 'Jan 2025 - Feb 2025',
    description:
      'Developed and maintained multiple client projects using React, Node.js, and various databases.',
    achievements: [
      'Built 10+ production applications',
      'Reduced deployment time by 60%',
      'Improved code quality standards',
    ],
    color: 'from-green-500 to-emerald-400',
  },{
    id: 3,
    Icon: Briefcase,
    type: 'work',
    title: 'Full-Stack Developer Intern',
    organization: 'IT Plus Point',
    period: 'Oct 2024 - Nov 2024',
    description:
      'Developed and maintained multiple client projects using React, Node.js, and various databases.',
    achievements: [
      'Built 10+ production applications',
      'Reduced deployment time by 60%',
      'Improved code quality standards',
    ],
    color: 'from-green-500 to-emerald-400',
  },{
    id: 4,
    Icon: Briefcase,
    type: 'work',
    title: 'MERN-Stack Developer Intern',
    organization: 'Lending Buddha',
    period: 'Jun 2024 - Aug 2024',
    description:
      'Developed and maintained multiple client projects using React, Node.js, and various databases.',
    achievements: [
      'Built 10+ production applications',
      'Reduced deployment time by 60%',
      'Improved code quality standards',
    ],
    color: 'from-green-500 to-emerald-400',
  },
  //Educational Qyalification---------------------------------//
  {
    id: 5,
    Icon: GraduationCap,
    type: 'education',
    title: 'Master of Computer Applications',
    organization: 'SOA University',
    period: '2022 - 2024',
    description:
      'Graduated with honors, specializing in software engineering and web technologies.',
    achievements: [
      'GPA: 7.80/10.00',
      'Led university coding club',
    ],
    color: 'from-orange-500 to-amber-400',
  },
  //Certifications------------------------//
  // {
    // Icon: Award,
    // type: 'achievement',
    // title: 'AWS Certified Developer',
    // organization: 'Amazon Web Services',
    // period: '2021',
    // description:
    //   'Earned AWS Certified Developer - Associate certification.',
    // achievements: [
    //   'Cloud architecture expertise',
    //   'Serverless application design',
    //   'DevOps best practices',
    // ],
    // color: 'from-purple-500 to-pink-400',
  // },
  // {
  //   Icon: Trophy,
  //   type: 'achievement',
  //   title: 'Hackathon Winner',
  //   organization: 'National Coding Competition',
  //   period: '2019',
  //   description:
  //     'First place winner in national hackathon with innovative AI-powered solution.',
  //   achievements: [
  //     'Built in 48 hours',
  //     'Beat 100+ teams',
  //     'Featured in tech news',
  //   ],
  //   color: 'from-red-500 to-rose-400',
  // },
];

export const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Experience & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and notable accomplishments
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-cyan-400 hidden lg:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative lg:flex lg:items-center ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/2" />

                <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg`}
                  >
                    <exp.Icon className="text-white" size={28} />
                  </motion.div>
                </div>

                <div
                  className={`lg:w-1/2 ${
                    index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow"
                  >
                    <div className="flex items-start gap-4 mb-4 lg:hidden">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center flex-shrink-0`}>
                        <exp.Icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {exp.organization}
                        </p>
                        <p className={`text-sm font-medium bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                          {exp.period}
                        </p>
                      </div>
                    </div>

                    <div className="hidden lg:block mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-400 mb-1">
                        {exp.organization}
                      </p>
                      <p className={`text-sm font-medium bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                        {exp.period}
                      </p>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div
                          key={`${exp.id}-${i}`}
                          className="flex items-start gap-2"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`} />
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
