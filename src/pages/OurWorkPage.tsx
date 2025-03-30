import React from 'react';
import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PD from "../Assets/punnyaiDeveloper.mp4"
import SB from "../Assets/shubhmrutDeveloper.mp4"
import P1 from "../Assets/P1.mp4"
const OurWorkPage = () => {
  const projects = [
    {
      id: 1,
      title: "Budiness Portfolio",
      description: "A full-featured Portfolio website for showcasing products and services",
      videoUrl: PD,
      client: "Punyyai Developer",
      link:"http://punnyaeeconstruction.com"
    },
    {
      id: 2,
      title: "Business Portfolio",
      description: "",
      videoUrl: SB,
      client: "Shubhamrut Developer",
      link:"https://shubamrut-ds-portfolio.vercel.app/"

    },
    {
      id: 3,
      title: "Personal Portfolio",
      description: "Real-time to showcase your work and skills",
      videoUrl:P1 ,
      client: "Prathmesh UChit",
      link:"https://the-prathmesh-uchit-porfolio.vercel.app"

    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        < div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4">Our Recent Work</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Explore our portfolio of innovative digital solutions that have transformed businesses
          </p>
        </ div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            < div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all"
            >
              <div className="relative pt-[56.25%]"> {/* 16:9 aspect ratio */}
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  controls
                  muted
                  poster={`/project-${project.id}-thumb.jpg`}
                >
                  <source src={project.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <Link to={project.link} className="text-sm  text-yellow-400 mb-2">Live</Link>
                  
                </div>
                <p className="text-sm text-gray-400">
                  <span className="font-medium">Client:</span> {project.client}
                </p>
              </div>
            </ div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <Link to="/contact">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full">
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurWorkPage;