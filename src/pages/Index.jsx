import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Newspaper, Camera } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="py-8 px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">João Medeiros</h1>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-gray-300">About</a></li>
            <li><a href="#work" className="hover:text-gray-300">Work</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="px-4 sm:px-6 lg:px-8">
        <section className="py-20">
          <motion.h2 
            className="text-5xl sm:text-7xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Covering Health
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Journalist and storyteller passionate about uncovering the truth in healthcare and making complex topics accessible to all.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#work" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-200 transition-colors duration-300">
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </section>

        <section id="about" className="py-20">
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-4">
                With over a decade of experience in health journalism, I've dedicated my career to bringing important medical stories to light. My work spans from investigative pieces on healthcare systems to personal narratives of patients and medical professionals.
              </p>
              <p className="text-lg">
                I believe in the power of storytelling to drive change and improve lives. Through my writing and multimedia projects, I aim to inform, inspire, and ignite conversations about health and wellness.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img src="/placeholder.svg" alt="João Medeiros" className="rounded-full w-64 h-64 object-cover" />
            </div>
          </div>
        </section>

        <section id="work" className="py-20">
          <h2 className="text-4xl font-bold mb-8">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <WorkCard 
              icon={<Heart className="h-12 w-12 text-red-500" />}
              title="The Heart of Healthcare"
              description="An in-depth look at cardiology innovations and patient stories."
            />
            <WorkCard 
              icon={<Newspaper className="h-12 w-12 text-blue-500" />}
              title="Pandemic Chronicles"
              description="A series of articles documenting the global response to COVID-19."
            />
            <WorkCard 
              icon={<Camera className="h-12 w-12 text-green-500" />}
              title="Visualizing Wellness"
              description="A photo essay exploring alternative medicine practices around the world."
            />
          </div>
        </section>

        <section id="contact" className="py-20">
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-lg mb-4">
            Interested in collaborating or have a story idea? I'd love to hear from you.
          </p>
          <a href="mailto:joao@example.com" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-200 transition-colors duration-300">
            Contact Me
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </section>
      </main>

      <footer className="py-8 px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; 2023 João Medeiros. All rights reserved.</p>
      </footer>
    </div>
  );
};

const WorkCard = ({ icon, title, description }) => (
  <motion.div 
    className="bg-gray-900 p-6 rounded-lg"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p>{description}</p>
  </motion.div>
);

export default Index;
