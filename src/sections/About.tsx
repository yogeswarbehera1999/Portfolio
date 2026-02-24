import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Code2, Rocket, Heart, Award } from 'lucide-react';
import Avatar3D from '../components/Avatar3D';
const highlights = [
  {
    Icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable and scalable code following best practices',
  },
  {
    Icon: Rocket,
    title: 'Fast Delivery',
    description: 'Efficient development process with attention to deadlines',
  },
  {
    Icon: Heart,
    title: 'Passion',
    description: 'Deeply passionate about creating exceptional user experiences',
  },
  {
    Icon: Award,
    title: 'Quality',
    description: 'Committed to delivering high-quality, production-ready solutions',
  },
];

export const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl transform rotate-6" />
                <div className="relative bg-gradient-to-br from-blue-500 to-cyan-400 p-1 rounded-2xl">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-8">
                    <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 rounded-lg flex items-center justify-center"> */}
                      {/* <div className="w-full h-[300px]"> */}
                        <Avatar3D />
                        {/* </div> */}
                    {/* </div>
                  </div>
                </div>
              </div>
            </motion.div> */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Professional Developer & Problem Solver
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm a passionate full-stack developer with expertise in building modern web applications.
              With a strong foundation in both frontend and backend technologies, I create seamless
              digital experiences that users love.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              My journey in software development started with a curiosity for how things work on the web.
              Since then, I've worked on numerous projects, continuously learning and adapting to new
              technologies to deliver the best solutions.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I believe in writing clean, maintainable code and creating applications that not only
              look great but also perform exceptionally well. My goal is to turn ideas into reality
              through elegant code and innovative solutions.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map(({ Icon, title, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-white mb-4">
                <Icon size={32} />
              </div>
              <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
