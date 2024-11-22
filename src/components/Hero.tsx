import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-5xl font-bold mb-6">
              Hi, I'm <span className="text-purple-600">John Doe</span>
            </h2>
            <h3 className="text-3xl text-gray-700 mb-6">
              Full Stack Developer
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              I craft elegant solutions to complex problems, specializing in modern web technologies
              and user-centric design.
            </p>
            <motion.button
              className="bg-purple-600 text-white px-8 py-3 rounded-full flex items-center space-x-2 hover:bg-purple-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View My Work</span>
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Coding workspace"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-500/20 rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}