import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingShape {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  opacity: number;
  type: 'circle' | 'square' | 'triangle';
  color: string;
}

export function AnimatedBackground() {
  const [shapes, setShapes] = useState<FloatingShape[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const generateShapes = () => {
      const newShapes: FloatingShape[] = [];
      const colors = [
        'rgba(59, 130, 246, 0.1)', // blue
        'rgba(147, 51, 234, 0.1)', // purple  
        'rgba(16, 185, 129, 0.1)', // emerald
        'rgba(245, 101, 101, 0.1)', // red
        'rgba(251, 191, 36, 0.1)', // amber
      ];
      
      for (let i = 0; i < 15; i++) {
        newShapes.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 60 + 20,
          rotation: Math.random() * 360,
          opacity: Math.random() * 0.3 + 0.1,
          type: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)] as 'circle' | 'square' | 'triangle',
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      setShapes(newShapes);
    };

    generateShapes();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getShapeComponent = (shape: FloatingShape) => {
    const baseProps = {
      width: shape.size,
      height: shape.size,
      fill: shape.color,
      opacity: shape.opacity
    };

    switch (shape.type) {
      case 'circle':
        return <circle cx={shape.size / 2} cy={shape.size / 2} r={shape.size / 2} {...baseProps} />;
      case 'square':
        return <rect {...baseProps} />;
      case 'triangle':
        const points = `${shape.size / 2},0 0,${shape.size} ${shape.size},${shape.size}`;
        return <polygon points={points} {...baseProps} />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
            rotate: [shape.rotation, shape.rotation + 180, shape.rotation + 360],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div
            animate={{
              x: (mousePosition.x - shape.x) * 0.05,
              y: (mousePosition.y - shape.y) * 0.05,
            }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
            }}
          >
            <svg width={shape.size} height={shape.size}>
              {getShapeComponent(shape)}
            </svg>
          </motion.div>
        </motion.div>
      ))}

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
    </div>
  );
}