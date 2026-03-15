import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Brain, Network, Activity } from 'lucide-react';

// Neural network node
interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  connections: number[];
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const animationRef = useRef<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize neural network animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create nodes
    const nodeCount = Math.min(25, Math.floor(window.innerWidth / 60));
    nodesRef.current = [];

    for (let i = 0; i < nodeCount; i++) {
      nodesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 2,
        connections: [],
      });
    }

    // Animation loop
    let frameCount = 0;
    const animate = () => {
      frameCount++;
      // Render every 2nd frame for performance (30fps)
      if (frameCount % 2 === 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update and draw nodes
        nodesRef.current.forEach((node, i) => {
          // Update position
          node.x += node.vx;
          node.y += node.vy;

          // Bounce off edges
          if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
          if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

          // Draw connections (only check every 5th node for performance)
          if (i % 5 === 0) {
            nodesRef.current.forEach((otherNode, j) => {
              if (i === j) return;
              const dx = node.x - otherNode.x;
              const dy = node.y - otherNode.y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < 150) {
                ctx.beginPath();
                ctx.moveTo(node.x, node.y);
                ctx.lineTo(otherNode.x, otherNode.y);
                ctx.strokeStyle = `rgba(0, 0, 0, ${0.08 * (1 - distance / 150)})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
              }
            });
          }

          // Draw node
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
          ctx.fill();
        });
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Trigger load animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToResearch = () => {
    const element = document.querySelector('#research');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Neural network canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.6 }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 mb-8 transition-all duration-1000 ease-expo-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Brain className="w-4 h-4 text-gray-600" />
          <span className="text-xs font-medium text-gray-600 tracking-wide uppercase">
            Senior Research Fellow at UCL
          </span>
        </div>

        {/* Main headline */}
        <h1
          className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-black leading-tight tracking-tight mb-6 transition-all duration-1000 delay-200 ease-expo-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Computational
          <br />
          <span className="font-medium">Neuroscience</span>
        </h1>

        {/* Subheading */}
        <p
          className={`text-lg sm:text-xl text-gray-500 font-light max-w-2xl mx-auto mb-4 transition-all duration-1000 delay-300 ease-expo-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Exploring the intersection of AI, neuroimaging, and brain network modeling
        </p>

        {/* Research areas tags */}
        <div
          className={`flex flex-wrap items-center justify-center gap-3 mb-12 transition-all duration-1000 delay-400 ease-expo-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-flex items-center gap-1.5 text-sm text-gray-400">
            <Network className="w-3.5 h-3.5" />
            Computational Neurology
          </span>
          <span className="text-gray-300">·</span>
          <span className="inline-flex items-center gap-1.5 text-sm text-gray-400">
            <Activity className="w-3.5 h-3.5" />
            Artificial Intelligence
          </span>
          <span className="text-gray-300">·</span>
          <span className="text-sm text-gray-400">Stroke Research</span>
        </div>

        {/* CTA Button */}
        <button
          onClick={scrollToResearch}
          className={`group inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-all duration-500 delay-500 ease-expo-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Explore Research
          <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
