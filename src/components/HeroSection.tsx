/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Wand2, X, Lightbulb, BarChart2, Rocket, Globe, Cpu, Zap, CircuitBoard, Cloud, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import * as THREE from 'three';

import './HeroSection.css'; // Updated CSS file

const FutureScene = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mountRef = useRef(true);

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

    const earthGeometry = new THREE.SphereGeometry(8, 128, 128);
    const earthMaterial = new THREE.MeshPhongMaterial({
      map: earthTexture,
      bumpMap: bumpMap,
      bumpScale: 0.3,
      specularMap: specularMap,
      specular: new THREE.Color(0x666666),
      shininess: 50,
      emissive: new THREE.Color(0x000066),
      emissiveIntensity: 0.3,
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    earthGroup.add(earth);

    const cloudGeometry = new THREE.SphereGeometry(10.2, 128, 128);
    const cloudMaterial = new THREE.MeshPhongMaterial({
      map: cloudTexture,
      transparent: true,
      opacity: 0.6,
      depthWrite: false,
    });
    const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
    earthGroup.add(clouds);

    const atmosphereGeometry = new THREE.SphereGeometry(10.3, 128, 128);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x00aaff,
      transparent: true,
      opacity: 0.1,
      blending: THREE.AdditiveBlending,
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    earthGroup.add(atmosphere);

    earthGroup.position.set(0, 4, -25);

    const ambientLight = new THREE.AmbientLight(0x404040, 0.8);
    scene.add(ambientLight);
    const sunLight = new THREE.DirectionalLight(0xffffff, 2.0);
    sunLight.position.set(10, 10, 10);
    scene.add(sunLight);
    const pointLight = new THREE.PointLight(0x00aaff, 1.5, 100);
    pointLight.position.set(-5, 5, 5);
    scene.add(pointLight);

    camera.position.z = 25;
    camera.position.y = 5;

    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      earthGroup.rotation.y += 0.001;
      clouds.rotation.y += 0.0012;
      atmosphere.rotation.y += 0.001;
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
      mountRef.current = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40 z-0" />;
};

const HeroSection = forwardRef<HTMLElement>((props, ref) => {
  // const staticTextRef = useRef<HTMLHeadingElement>(null);
  const dynamicTextRef = useRef<HTMLHeadingElement>(null);
  const quoteRef = useRef<HTMLSpanElement>(null);
  const [showIdeaVisualizer, setShowIdeaVisualizer] = useState(false);
  const [userIdea, setUserIdea] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [visualizationResult, setVisualizationResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!dynamicTextRef.current) return;

    const techTerms = ["Revolutionary", "MAGICAL", "LEGENDARY", "FUTURISTIC", "INNOVATIVE", "GROWTH", "EXTRAORDINARY"];
    let termIndex = 0;

    const updateTerm = () => {
      dynamicTextRef.current!.textContent = techTerms[termIndex];
      termIndex = (termIndex + 1) % techTerms.length;
    };
    updateTerm(); // Initial set
    const termInterval = setInterval(updateTerm, 10000); // Change every 10 seconds

    return () => clearInterval(termInterval);
  }, []);

  // Dynamic Quotes
  useEffect(() => {
    if (!quoteRef.current) return;

    const phrases = ["WE MEET NOT BY CHANCE IT BY FAITH", "WE BELIVE IN TRANSFORMATION", "WE BELIVE IN REVOLUTION ", "WE PROMISIS THE GROWTH"];
    let currentIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeTimer: ReturnType<typeof setTimeout>;

    const type = () => {
      const currentPhrase = phrases[currentIndex];
      const speed = isDeleting ? 50 : 150;
      if (isDeleting) {
        quoteRef.current!.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          currentIndex = (currentIndex + 1) % phrases.length;
        }
      } else {
        quoteRef.current!.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentPhrase.length) {
          isDeleting = true;
          typeTimer = setTimeout(type, 1500);
          return;
        }
      }
      typeTimer = setTimeout(type, speed);
    };

    type();
    return () => clearTimeout(typeTimer);
  }, []);

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
          'Blockchain integration',
        ],
        benefits: [
          `50-70% faster ${businessType ? businessType + ' ' : ''}operations`,
          '40-60% cost reduction',
          'Seamless scalability',
          'Enhanced security',
          'Future-proof foundation',
        ],
        timeline: '8-12 weeks',
        technologies: ['React/Next.js', 'Node.js', 'Three.js', 'Web3', 'AWS/GCP'],
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
      className=" flex items-center justify-center py-16 px-6  "
    >
      <FutureScene />

      {/* Floating UI elements */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-blue-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-purple-400/20 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-blue-500/10 rounded-full animate-ping"></div>
      </div>

      {/* Main content - Centered */}
      <div className="max-w-6xl mx-auto w-full z-20 text-center px-4 flex flex-col items-center justify-center min-h-screen">
        < div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center relative"
        >
          {/* Static H1 centered on Earth */}
       
          {/* Dynamic H1 below Earth */}
          < span
            ref={dynamicTextRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-24 tech-text"
          >
            {/* Content set by useEffect */}
          </ span>

          {/* Dynamic Quotes below Dynamic H1 */}
          < span
            ref={quoteRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-xl md:text-2xl text-gray-300 mt-6 quote-text"
          >
            {/* Content set by useEffect */}
          </ span>

          <p className="text-gray-300 text-xl md:text-2xl mt-10 mb-10 max-w-2xl">
            We transform visionary ideas into Revolutionary Growth
          </p>   
<div className="flex flex-col sm:flex-row gap-4 justify-center">
  <Link to="/contact">
    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-blue-600/20 flex items-center gap-2">
      <Zap className="h-5 w-5" />
      <span>Start Building</span>
    </Button>
  </Link>
  <Button
    onClick={() => setShowIdeaVisualizer(true)}
    variant="outline"
    className="border-gray-500 text-black hover:bg-gray-700/50 px-8 py-6 text-lg rounded-full"
  >
    <Lightbulb className="h-5 w-5 mr-2" />
    Visualize Your Idea
  </Button>
  <Link to="/ourWorkPage">
    <Button 
      variant="ghost" 
      className="
      text-white px-8 py-6 text-lg rounded-full
      border border-gray-600/50 hover:border-indigo-400/50
      bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800
      hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-700
      transform hover:scale-[1.02] transition-all duration-300
      shadow-lg hover:shadow-indigo-500/30">
      <Rocket className="h-5 w-5 mr-2" />
      View Our Work
    </Button>
  </Link>
</div>
        </ div>
        {/* Tech feature grid */}
        < div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-5xl mx-auto z-30"
        >
          {[
            { icon: <Globe className="h-8 w-8 text-blue-400" />, title: "Global Scale", desc: "Worldwide deployment" },
            { icon: <Cpu className="h-8 w-8 text-blue-400" />, title: "AI Powered", desc: "Smart automation" },
            { icon: <CircuitBoard className="h-8 w-8 text-blue-400" />, title: "Modern Stack", desc: "Cutting-edge tech" },
            { icon: <Server className="h-8 w-8 text-blue-400" />, title: "Cloud Native", desc: "Scalable infrastructure" },
          ].map((feature, i) => (
            < div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-xl p-6 hover:border-blue-400/30 transition-all hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-gray-700/50 rounded-full">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            </ div>
          ))}
        </ div>
      </div>

      {/* Idea Visualizer Modal */}
        {showIdeaVisualizer && (
          < div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            < div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
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
                          <li key={index} className="flex items-start gap-2 text-gray-300">
                            <span className="text-blue-400 mt-1">•</span>
                            <span>{item}</span>
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
                          <li key={index} className="flex items-start gap-2 text-gray-300">
                            <span className="text-blue-400 mt-1">•</span>
                            <span>{item}</span>
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
            </ div>
          </ div>
        )}
    
    </section>
  );
});

HeroSection.displayName = 'HeroSection';
export default HeroSection;