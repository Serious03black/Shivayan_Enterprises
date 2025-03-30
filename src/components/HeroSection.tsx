/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Wand2, X, Lightbulb, BarChart2, Rocket, Globe, Cpu, Zap, CircuitBoard, Cloud, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import * as THREE from 'three';
import './HeroSection.css';

const FutureScene = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(23, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const earthGroup = new THREE.Group();
    scene.add(earthGroup);

    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg');
    const bumpMap = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_normal_2048.jpg');
    const specularMap = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_specular_2048.jpg');
    const cloudTexture = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_clouds_1024.png');

    const earthGeometry = new THREE.SphereGeometry(8, 64, 64); // Reduced segments for performance
    const earthMaterial = new THREE.MeshPhongMaterial({
      map: earthTexture,
      bumpMap: bumpMap,
      bumpScale: 0.3,
      specularMap: specularMap,
      specular: new THREE.Color(0x666666),
      shininess: 50,
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    earthGroup.add(earth);

    const cloudGeometry = new THREE.SphereGeometry(10.2, 64, 64); // Reduced segments
    const cloudMaterial = new THREE.MeshPhongMaterial({
      map: cloudTexture,
      transparent: true,
      opacity: 0.6,
      depthWrite: false,
    });
    const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
    earthGroup.add(clouds);

    earthGroup.position.set(0, 4, -25);

    const ambientLight = new THREE.AmbientLight(0x404040, 0.8);
    scene.add(ambientLight);
    const sunLight = new THREE.DirectionalLight(0xffffff, 2.0);
    sunLight.position.set(10, 10, 10);
    scene.add(sunLight);

    camera.position.z = 25;
    camera.position.y = 5;

    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      earthGroup.rotation.y += 0.001;
      clouds.rotation.y += 0.0012;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!canvasRef.current) return;
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40 z-0" />;
};

const HeroSection = forwardRef<HTMLElement>((props, ref) => {
  const [showIdeaVisualizer, setShowIdeaVisualizer] = useState(false);
  const [userIdea, setUserIdea] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [visualizationResult, setVisualizationResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleVisualizeIdea = () => {
    if (!userIdea.trim()) return;
    setIsLoading(true);

    setTimeout(() => {
      const mockResults = {
        implementation: [
          `Next-gen ${businessType || 'business'} platform`,
          'AI-powered automation',
          'Real-time analytics dashboard',
          'Cloud-native architecture',
        ],
        benefits: [
          `50-70% faster ${businessType ? businessType + ' ' : ''}operations`,
          '40-60% cost reduction',
          'Seamless scalability',
        ],
        timeline: '8-12 weeks',
        technologies: ['React/Next.js', 'Node.js', 'Three.js', 'AWS/GCP'],
      };

      setVisualizationResult(mockResults);
      setIsLoading(false);
    }, 1500);
  };

  const resetVisualizer = () => {
    setUserIdea('');
    setBusinessType('');
    setVisualizationResult(null);
  };

  return (
    <section
      ref={ref}
      className="flex items-center justify-center py-16 px-6 relative min-h-screen"
    >
      <FutureScene />

      <div className="max-w-6xl mx-auto w-full z-20 text-center px-4">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            We Build <span className="text-blue-400">Future</span> Today
          </h1>
          
          <p className="text-gray-300 text-xl md:text-2xl mb-10 max-w-2xl">
            We transform visionary ideas into Revolutionary Growth
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-blue-600/20">
                <Zap className="h-5 w-5 mr-2" />
                Start Building
              </Button>
            </Link>
            <Button
              onClick={() => setShowIdeaVisualizer(true)}
              variant="outline"
              className="border-gray-500 text-white hover:bg-gray-700/50 px-8 py-6 text-lg rounded-full"
            >
              <Lightbulb className="h-5 w-5 mr-2" />
              Visualize Your Idea
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-5xl mx-auto">
          {[
            { icon: <Globe className="h-8 w-8 text-blue-400" />, title: "Global Scale", desc: "Worldwide deployment" },
            { icon: <Cpu className="h-8 w-8 text-blue-400" />, title: "AI Powered", desc: "Smart automation" },
            { icon: <CircuitBoard className="h-8 w-8 text-blue-400" />, title: "Modern Stack", desc: "Cutting-edge tech" },
            { icon: <Server className="h-8 w-8 text-blue-400" />, title: "Cloud Native", desc: "Scalable infrastructure" },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-xl p-6"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-gray-700/50 rounded-full">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Idea Visualizer Modal */}
      <AnimatePresence>
        {showIdeaVisualizer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-gray-900/90 backdrop-blur-lg border border-white/10 rounded-xl max-w-2xl w-full p-6 relative"
            >
              <button
                onClick={() => {
                  setShowIdeaVisualizer(false);
                  resetVisualizer();
                }}
                className="absolute top-4 right-4 text-white/50 hover:text-white"
              >
                <X size={24} />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="text-blue-400" size={28} />
                <h2 className="text-2xl font-bold text-white">Future Vision Generator</h2>
              </div>

              {!visualizationResult ? (
                <>
                  <p className="text-gray-300 mb-6">
                    Describe your idea and we'll visualize its future potential technology.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-400 mb-2">Business/Industry</label>
                      <Input
                        value={businessType}
                        onChange={(e) => setBusinessType(e.target.value)}
                        placeholder="E.g. FinTech, Healthcare, E-commerce"
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2">Your Vision</label>
                      <Textarea
                        value={userIdea}
                        onChange={(e) => setUserIdea(e.target.value)}
                        placeholder="Describe what you want to create or improve..."
                        rows={5}
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                    <Button
                      onClick={handleVisualizeIdea}
                      disabled={!userIdea.trim() || isLoading}
                      className="mt-4 bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      {isLoading ? 'Generating Vision...' : 'Visualize Future'}
                    </Button>
                  </div>
                </>
              ) : (
                <div className="space-y-6">
                  <div className="p-4 bg-gray-800/50 border border-gray-700 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-2">Your Vision:</h3>
                    <p className="text-gray-300 italic">"{userIdea}"</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                      <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-3">
                        <Rocket className="text-blue-400" size={20} />
                        Implementation Strategy
                      </h3>
                      <ul className="space-y-2">
                        {visualizationResult.implementation.map((item, index) => (
                          <li key={index} className="text-gray-300">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                      <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-3">
                        <BarChart2 className="text-blue-400" size={20} />
                        Business Impact
                      </h3>
                      <ul className="space-y-2">
                        {visualizationResult.benefits.map((item, index) => (
                          <li key={index} className="text-gray-300">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700 flex-1 min-w-[200px]">
                      <h4 className="text-sm text-gray-400 mb-1">Development Timeline</h4>
                      <p className="text-white font-medium">{visualizationResult.timeline}</p>
                    </div>
                    <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700 flex-1 min-w-[200px]">
                      <h4 className="text-sm text-gray-400 mb-1">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {visualizationResult.technologies.map((tech, index) => (
                          <span key={index} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 pt-4">
                    <Button
                      onClick={resetVisualizer}
                      variant="outline"
                      className="border-gray-700 text-white hover:bg-gray-700"
                    >
                      Start Over
                    </Button>
                    <Link to="/contact" onClick={() => setShowIdeaVisualizer(false)}>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        Discuss Implementation
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';
export default HeroSection;