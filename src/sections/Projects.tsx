import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard. Built with React, Node.js, and MongoDB.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'Social Media Dashboard',
    description:
      'Analytics dashboard for social media metrics with real-time data visualization, user engagement tracking, and performance insights.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Chart.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    gradient: 'from-green-500 to-emerald-400',
  },
  {
    title: 'Task Management App',
    description:
      'Collaborative task management application with team workspaces, real-time updates, file sharing, and progress tracking features.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['React', 'Express', 'Socket.io', 'MySQL', 'Tailwind'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    gradient: 'from-orange-500 to-amber-400',
  },
  {
    title: 'Weather Forecast App',
    description:
      'Modern weather application with hourly and weekly forecasts, location-based services, interactive maps, and weather alerts.',
    image: 'https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['React', 'OpenWeather API', 'Mapbox', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    gradient: 'from-purple-500 to-pink-400',
  },
  {
    title: 'Blog Platform',
    description:
      'Feature-rich blogging platform with markdown support, SEO optimization, comment system, and content management.',
    image: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['Next.js', 'Supabase', 'MDX', 'TailwindCSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    gradient: 'from-red-500 to-rose-400',
  },
  {
    title: 'Video Streaming Platform',
    description:
      'Video streaming service with live streaming capabilities, video processing, user subscriptions, and content recommendations.',
    image: 'https://images.pexels.com/photos/7991319/pexels-photo-7991319.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['React', 'Node.js', 'AWS S3', 'FFmpeg', 'Redis'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    gradient: 'from-teal-500 to-cyan-400',
  },
];

export const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="projects"
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
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 dark:text-cyan-400 hover:underline"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:underline"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
