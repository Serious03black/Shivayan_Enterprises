
// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// const ThreeScene = () => {
//   const mountRef = useRef<HTMLDivElement>(null);
  
//   useEffect(() => {
//     if (!mountRef.current) return;
    
//     // Scene setup
//     const scene = new THREE.Scene();
    
//     // Camera setup
//     const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
//     camera.position.z = 5;
    
//     // Renderer setup
//     const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
//     renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
//     renderer.setClearColor(0x000000, 0);
//     mountRef.current.appendChild(renderer.domElement);
    
//     // Responsive canvas
//     const handleResize = () => {
//       if (!mountRef.current) return;
//       camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
//     };
    
//     window.addEventListener('resize', handleResize);
    
//     // Lighting
//     const ambientLight = new THREE.AmbientLight(0x404040, 2);
//     scene.add(ambientLight);
    
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
//     directionalLight.position.set(1, 1, 1);
//     scene.add(directionalLight);
    
//     // Create a floating magical orb
//     const createMagicalOrb = () => {
//       const geometry = new THREE.SphereGeometry(1, 64, 64);
      
//       // Create custom shader material
//       const material = new THREE.ShaderMaterial({
//         uniforms: {
//           time: { value: 0 },
//           color1: { value: new THREE.Color(0x7E69AB) }, // Magic purple
//           color2: { value: new THREE.Color(0x5D54A4) }, // Deeper purple
//         },
//         vertexShader: `
//           varying vec2 vUv;
//           varying vec3 vPosition;
          
//           void main() {
//             vUv = uv;
//             vPosition = position;
//             gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//           }
//         `,
//         fragmentShader: `
//           uniform float time;
//           uniform vec3 color1;
//           uniform vec3 color2;
//           varying vec2 vUv;
//           varying vec3 vPosition;
          
//           void main() {
//             // Create a flowing pattern
//             float noise = sin(vPosition.x * 5.0 + time) * sin(vPosition.y * 5.0 + time) * sin(vPosition.z * 5.0 + time);
            
//             // Mix colors based on the noise
//             vec3 finalColor = mix(color1, color2, noise * 0.5 + 0.5);
            
//             // Add glow effect
//             float glow = 0.5 + 0.5 * sin(time * 0.5);
//             finalColor += color1 * glow * 0.2;
            
//             // Add rim lighting
//             vec3 viewDir = normalize(vPosition);
//             float rim = 1.0 - max(dot(viewDir, vec3(0.0, 0.0, 1.0)), 0.0);
//             rim = pow(rim, 2.0) * 0.8;
//             finalColor += vec3(rim);
            
//             gl_FragColor = vec4(finalColor, 0.9);
//           }
//         `,
//         transparent: true,
//       });
      
//       const orb = new THREE.Mesh(geometry, material);
//       scene.add(orb);
      
//       return { orb, material };
//     };
    
//     const { orb, material } = createMagicalOrb();
    
//     // Add particles around the orb
//     const particlesGeometry = new THREE.BufferGeometry();
//     const particleCount = 500;
    
//     const positions = new Float32Array(particleCount * 3);
//     const sizes = new Float32Array(particleCount);
    
//     for (let i = 0; i < particleCount; i++) {
//       // Create a sphere of particles around the orb
//       const angle1 = Math.random() * Math.PI * 2;
//       const angle2 = Math.random() * Math.PI * 2;
//       const radius = 1.5 + Math.random() * 2;
      
//       positions[i * 3] = Math.sin(angle1) * Math.cos(angle2) * radius;
//       positions[i * 3 + 1] = Math.sin(angle1) * Math.sin(angle2) * radius;
//       positions[i * 3 + 2] = Math.cos(angle1) * radius;
      
//       sizes[i] = Math.random() * 0.05 + 0.01;
//     }
    
//     particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
//     particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
//     const particlesMaterial = new THREE.ShaderMaterial({
//       uniforms: {
//         time: { value: 0 },
//         pointTexture: { value: new THREE.TextureLoader().load('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFFmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTgtMDctMjlUMTc6Mzk6NDkrMDI6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE4LTA3LTI5VDE3OjQwOjIwKzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE4LTA3LTI5VDE3OjQwOjIwKzAyOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZkMGNkZjI5LTA2NDAtNGE0MS05ZmYwLTllYzJkYzYwNGRhYyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2ZDBjZGYyOS0wNjQwLTRhNDEtOWZmMC05ZWMyZGM2MDRkYWMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2ZDBjZGYyOS0wNjQwLTRhNDEtOWZmMC05ZWMyZGM2MDRkYWMiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjZkMGNkZjI5LTA2NDAtNGE0MS05ZmYwLTllYzJkYzYwNGRhYyIgc3RFdnQ6d2hlbj0iMjAxOC0wNy0yOVQxNzozOTo0OSswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+8Kf/SgAAAghJREFUWIXFl79rFEEUxz/7YhJ/oSRKhEghNppAEBUVRAW1sBYt7AxoYf4K0drK2kY9LQRvZUtLNYJ/gET0CsOhgpDcsQnc7e6O1l+5zG1uZmd29nL3hYXZmfeYb94MvHlDTQDHgAtAB9gFWMADngM/gXfAdSnVu1oyb02LNnBNSrUKYA2ZbwF3qmj0FToKLFXMOQZMAe+llIcHKGgKiwnlEAODkAG0pJR3h6QxD1wZlKBVNblQPxjF/YHkAWzTRAm8Ai5KqbIe4jiwUEP8QAXAlZRzgJfAIamFxGwttWqxY/M1YBZoJ5RvAI+BdWAPOAE8BM4m5HeBC8CPhqqCe0CiXrQlFt3FTHVGAT+AO+o6oBvVg87tS6mulPIZcCoirYQexGZMJjU4I9hAGk1TwU+5ngcexRR2JE5EAs9MVE9AXKfEYAHSbGCiRG0QRzzgfJpYbgmtA8YC8zFEfM5LqRqCNZsqiGMaOAicCUPR3VgVIUx6qVa/yIA3ERJfgPOBcUtK+TYk2xkWsQXgLREwMcUUEG/GpR+ZOBvVnyclyL1YKXWSFhPmZ4ETUqoPW3h7KmI8r+EZngLLYe6a8OQDeB88kGNMGIQVWQ1zEzrQrCNmQ5xCHZJb/BfItBsOQwaQP8rTq94LfNX7fl3/GHCpgvwvKdVbWPAHZGOCdoUvRdQAAAAASUVORK5CYII=') },
//       },
//       vertexShader: `
//         attribute float size;
//         uniform float time;
        
//         void main() {
//           vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          
//           // Make particles move slightly
//           float displacement = sin(position.x * 5.0 + time) * 0.1;
//           mvPosition.y += displacement;
          
//           gl_PointSize = size * (300.0 / -mvPosition.z);
//           gl_Position = projectionMatrix * mvPosition;
//         }
//       `,
//       fragmentShader: `
//         uniform sampler2D pointTexture;
//         uniform float time;
        
//         void main() {
//           // Sparkle effect
//           float opacity = 0.5 + 0.5 * sin(time * 10.0 + gl_PointCoord.x * 10.0 + gl_PointCoord.y * 10.0);
          
//           vec4 texColor = texture2D(pointTexture, gl_PointCoord);
//           gl_FragColor = vec4(1.0, 1.0, 1.0, texColor.a * opacity * 0.7);
//         }
//       `,
//       transparent: true,
//       depthWrite: false,
//       blending: THREE.AdditiveBlending,
//     });
    
//     const particles = new THREE.Points(particlesGeometry, particlesMaterial);
//     scene.add(particles);
    
//     // Animation loop
//     let time = 0;
//     let mouseX = 0;
//     let mouseY = 0;
//     let targetX = 0;
//     let targetY = 0;
    
//     // Mouse move handler
//     const handleMouseMove = (event: MouseEvent) => {
//       const windowHalfX = window.innerWidth / 2;
//       const windowHalfY = window.innerHeight / 2;
//       mouseX = (event.clientX - windowHalfX) / windowHalfX;
//       mouseY = (event.clientY - windowHalfY) / windowHalfY;
//     };
    
//     // Add mouse move event listener
//     document.addEventListener('mousemove', handleMouseMove);
    
//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate);
      
//       time += 0.01;
//       material.uniforms.time.value = time;
//       particlesMaterial.uniforms.time.value = time;
      
//       // Smooth camera movement following mouse
//       targetX = mouseX * 0.5;
//       targetY = -mouseY * 0.5;
      
//       camera.position.x += (targetX - camera.position.x) * 0.05;
//       camera.position.y += (targetY - camera.position.y) * 0.05;
//       camera.lookAt(scene.position);
      
//       // Rotate the orb
//       orb.rotation.x = time * 0.2;
//       orb.rotation.y = time * 0.3;
      
//       // Pulse the orb size
//       const scale = 1 + Math.sin(time) * 0.05;
//       orb.scale.set(scale, scale, scale);
      
//       renderer.render(scene, camera);
//     };
    
//     animate();
    
//     // Cleanup
//     return () => {
//       if (mountRef.current) {
//         mountRef.current.removeChild(renderer.domElement);
//       }
//       window.removeEventListener('resize', handleResize);
//       document.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);
  
//   // return <div ref={mountRef} className="w-full h-full" />;
// };

// export default ThreeScene;
