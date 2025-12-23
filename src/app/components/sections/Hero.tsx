// // components/HeroSection.tsx - Software Development Version
// 'use client'

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import { 
//   CodeBracketIcon, 
//   ServerIcon, 
//   CloudIcon,
//   RocketLaunchIcon,
//   ArrowPathIcon,
//   CommandLineIcon,
//   ChevronDownIcon
// } from '@heroicons/react/24/outline';

// // Define the slide type
// interface Slide {
//   image: string;
//   subtitle: string;
//   title: string;
//   text: string;
//   icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
//   stats: string[];
// }

// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides: Slide[] = [
//     {
//       image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
//       subtitle: "Custom Software Development",
//       title: "Transform Your Vision Into Digital Reality",
//       text: "We build scalable, high-performance software solutions that drive business growth and innovation.",
//       icon: CodeBracketIcon,
//       stats: ["150+ Projects", "98% Success Rate", "24/7 Support"]
//     },
//     {
//       image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
//       subtitle: "Cloud & DevOps Solutions", 
//       title: "Scalable Infrastructure for Modern Businesses",
//       text: "Expert cloud migration, DevOps implementation, and scalable architecture solutions.",
//       icon: CloudIcon,
//       stats: ["AWS Certified", "Azure Partner", "Google Cloud"]
//     },
//     {
//       image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
//       subtitle: "AI & Machine Learning",
//       title: "Intelligent Solutions for Complex Challenges",
//       text: "Leverage AI and ML to automate processes, gain insights, and enhance user experiences.",
//       icon: CommandLineIcon,
//       stats: ["ML Models", "AI Integration", "Data Analytics"]
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 6000);

//     return () => clearInterval(interval);
//   }, [slides.length]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   // Get current slide
//   const currentSlideData = slides[currentSlide];
//   const CurrentIcon = currentSlideData.icon;

//   return (
//     <section className="hero relative min-h-screen overflow-hidden" id="home">
//       {/* Animated Background Particles */}
//       <div className="absolute inset-0 z-0">
//         {[...Array(30)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-[2px] h-[2px] bg-cyan-400/30 rounded-full"
//             initial={{
//               x: Math.random() * window.innerWidth,
//               y: Math.random() * window.innerHeight,
//               scale: Math.random() * 0.5 + 0.5,
//             }}
//             animate={{
//               y: [null, Math.random() * window.innerHeight],
//               x: [null, Math.random() * window.innerWidth],
//               scale: [null, Math.random() * 1.5],
//             }}
//             transition={{
//               duration: Math.random() * 15 + 10,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//           />
//         ))}
//       </div>

//       {/* Background Images with Tech Overlay */}
//       <div className="hero-slider absolute inset-0">
//         {slides.map((slide, index) => (
//           <motion.div
//             key={index}
//             className="absolute inset-0 w-full h-full"
//             initial={false}
//             animate={{
//               opacity: index === currentSlide ? 1 : 0,
//               scale: index === currentSlide ? 1.05 : 1,
//             }}
//             transition={{
//               opacity: { duration: 1.5, ease: "easeInOut" },
//               scale: { duration: 8, ease: "linear" }
//             }}
//             style={{
//               zIndex: index === currentSlide ? 2 : 1
//             }}
//           >
//             <img
//               src={slide.image}
//               alt={slide.title}
//               className="w-full h-full object-cover"
//             />
            
//             {/* Tech linaer Overlay */}
//             <div className="absolute inset-0 bg-linaer-to-br from-blue-950/90 via-blue-900/80 to-cyan-900/90"></div>
            
//             {/* Animated Code Pattern Overlay */}
//             <div className="absolute inset-0 opacity-10">
//               {[...Array(20)].map((_, i) => (
//                 <motion.div
//                   key={i}
//                   className="absolute text-cyan-400/30 font-mono text-xs"
//                   initial={{ x: -100 }}
//                   animate={{ x: "100vw" }}
//                   transition={{
//                     duration: 20 + Math.random() * 20,
//                     repeat: Infinity,
//                     delay: Math.random() * 5,
//                     ease: "linear"
//                   }}
//                   style={{
//                     top: `${Math.random() * 100}%`,
//                     left: "-100px"
//                   }}
//                 >
//                   {`{ code: "0x${Math.random().toString(16).slice(2, 10)}" }`}
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Content */}
//       <div className="relative z-10 flex items-center justify-center min-h-screen w-full px-4 sm:px-6 lg:px-8">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentSlide}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -30 }}
//             transition={{ duration: 1.2, ease: "easeInOut" }}
//             className="text-center text-white w-full max-w-6xl mx-auto"
//           >
//             {/* Tech Badge */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 backdrop-blur-sm mb-6"
//             >
//               <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></div>
//               <span className="text-cyan-300 text-sm font-semibold tracking-widest uppercase">
//                 {currentSlideData.subtitle}
//               </span>
//             </motion.div>

//             {/* Main Title with Tech Icon */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="flex flex-col items-center mb-6 lg:mb-10"
//             >
//               <div className="mb-4">
//                 <CurrentIcon className="h-16 w-16 text-cyan-400" />
//               </div>
//               <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-2xl">
//                 {currentSlideData.title}
//               </h1>
//             </motion.div>

//             {/* Description */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//               className="text-xl md:text-2xl lg:text-3xl mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed font-medium text-gray-300 drop-shadow-lg"
//             >
//               {currentSlideData.text}
//             </motion.p>

//             {/* Tech Stats */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.8 }}
//               className="flex flex-wrap justify-center gap-4 mb-10"
//             >
//               {currentSlideData.stats.map((stat, idx) => (
//                 <motion.div
//                   key={idx}
//                   whileHover={{ scale: 1.05 }}
//                   className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-lg border border-cyan-500/20 backdrop-blur-sm"
//                 >
//                   <span className="text-cyan-300 font-semibold">{stat}</span>
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* CTA Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 1 }}
//               className="flex flex-col sm:flex-row gap-6 justify-center items-center"
//             >
//               <motion.div
//                 whileHover={{ scale: 1.05, y: -2 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Link
//                   href="/contact"
//                   className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 lg:px-12 lg:py-5 rounded-xl font-bold text-lg inline-flex items-center gap-3 shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-cyan-300"
//                 >
//                   <span>Start Your Project</span>
//                   <RocketLaunchIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                 </Link>
//               </motion.div>
//               <motion.div
//                 whileHover={{ scale: 1.05, y: -2 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Link
//                   href="/portfolio"
//                   className="group bg-transparent hover:bg-cyan-500/10 text-cyan-300 px-8 py-4 lg:px-12 lg:py-5 rounded-xl font-bold text-lg inline-flex items-center gap-3 shadow-2xl transition-all duration-300 border-2 border-cyan-500/50 hover:border-cyan-400"
//                 >
//                   <span>View Case Studies</span>
//                   <ArrowPathIcon className="h-5 w-5 group-hover:rotate-180 transition-transform duration-300" />
//                 </Link>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Tech Slider Controls */}
//       <button
//         className="slider-btn prev absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 bg-blue-900/50 hover:bg-cyan-500 text-white p-3 lg:p-4 rounded-xl transition-all duration-300 z-20 backdrop-blur-md border border-cyan-500/30 hover:border-cyan-300 hover:scale-110 group"
//         onClick={prevSlide}
//         aria-label="Previous slide"
//       >
//         <svg className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//         </svg>
//       </button>

//       <button
//         className="slider-btn next absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 bg-blue-900/50 hover:bg-cyan-500 text-white p-3 lg:p-4 rounded-xl transition-all duration-300 z-20 backdrop-blur-md border border-cyan-500/30 hover:border-cyan-300 hover:scale-110 group"
//         onClick={nextSlide}
//         aria-label="Next slide"
//       >
//         <svg className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//         </svg>
//       </button>

//       {/* Binary Code Slide Indicators */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`group relative w-12 h-2 rounded-full transition-all duration-500 overflow-hidden ${
//               index === currentSlide 
//                 ? 'bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/50' 
//                 : 'bg-gray-600/50 hover:bg-gray-500/70'
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           >
//             {/* Animated binary code effect for active slide */}
//             {index === currentSlide && (
//               <motion.div
//                 className="absolute inset-0 bg-linear-to-r from-transparent via-cyan-300/20 to-transparent"
//                 initial={{ x: "-100%" }}
//                 animate={{ x: "100%" }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   ease: "linear"
//                 }}
//               />
//             )}
//           </button>
//         ))}
//       </div>

//       {/* Animated Scroll Indicator with Code Icon */}
//       <motion.div 
//         className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20"
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//       >
//         <div className="flex flex-col items-center">
//           <span className="text-xs text-cyan-400 mb-2 font-mono tracking-widest">SCROLL</span>
//           <div className="relative">
//             <div className="w-6 h-10 border-2 rounded-xl flex justify-center border-cyan-500/50">
//               <motion.div 
//                 className="w-1 h-3 rounded-full mt-2 bg-linaer-to-b from-cyan-400 to-cyan-300"
//                 animate={{ y: [0, 12, 0] }}
//                 transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//               />
//             </div>
//             <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
//               <ChevronDownIcon className="h-4 w-4 text-cyan-400 animate-pulse" />
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;
// components/HeroSection.tsx - Software Development Version
'use client'

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  CodeBracketIcon, 
  ServerIcon, 
  CloudIcon,
  RocketLaunchIcon,
  ArrowPathIcon,
  CommandLineIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';

// Define the slide type
interface Slide {
  image: string;
  subtitle: string;
  title: string;
  text: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  stats: string[];
}

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [isClient, setIsClient] = useState(false);

  // Initialize window size after component mounts (client-side only)
  useEffect(() => {
    setIsClient(true);
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slides: Slide[] = [
    {
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      subtitle: "Custom Software Development",
      title: "Transform Your Vision Into Digital Reality",
      text: "We build scalable, high-performance software solutions that drive business growth and innovation.",
      icon: CodeBracketIcon,
      stats: ["150+ Projects", "98% Success Rate", "24/7 Support"]
    },
    {
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      subtitle: "Cloud & DevOps Solutions", 
      title: "Scalable Infrastructure for Modern Businesses",
      text: "Expert cloud migration, DevOps implementation, and scalable architecture solutions.",
      icon: CloudIcon,
      stats: ["AWS Certified", "Azure Partner", "Google Cloud"]
    },
    {
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      subtitle: "AI & Machine Learning",
      title: "Intelligent Solutions for Complex Challenges",
      text: "Leverage AI and ML to automate processes, gain insights, and enhance user experiences.",
      icon: CommandLineIcon,
      stats: ["ML Models", "AI Integration", "Data Analytics"]
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Get current slide
  const currentSlideData = slides[currentSlide];
  const CurrentIcon = currentSlideData.icon;

  // Helper function to generate particles (client-side only)
  const generateParticles = () => {
    if (!isClient) return [];

    return [...Array(30)].map((_, i) => {
      const initialX = Math.random() * windowSize.width;
      const initialY = Math.random() * windowSize.height;
      const scale = Math.random() * 0.5 + 0.5;
      
      return {
        key: i,
        initialX,
        initialY,
        scale,
        targetY: Math.random() * windowSize.height,
        targetX: Math.random() * windowSize.width,
        targetScale: Math.random() * 1.5,
        duration: Math.random() * 15 + 10,
      };
    });
  };

  const particles = generateParticles();

  return (
    <section className="hero relative min-h-screen overflow-hidden" id="home">
      {/* Animated Background Particles - Only render on client */}
      {isClient && (
        <div className="absolute inset-0 z-0">
          {particles.map((particle) => (
            <motion.div
              key={particle.key}
              className="absolute w-[2px] h-[2px] bg-cyan-400/30 rounded-full"
              initial={{
                x: particle.initialX,
                y: particle.initialY,
                scale: particle.scale,
              }}
              animate={{
                y: particle.targetY,
                x: particle.targetX,
                scale: particle.targetScale,
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      )}

      {/* Background Images with Tech Overlay */}
      <div className="hero-slider absolute inset-0">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full"
            initial={false}
            animate={{
              opacity: index === currentSlide ? 1 : 0,
              scale: index === currentSlide ? 1.05 : 1,
            }}
            transition={{
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 8, ease: "linear" }
            }}
            style={{
              zIndex: index === currentSlide ? 2 : 1
            }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            
            {/* Tech linaer Overlay - Fixed typo: "linaer" to "linear" */}
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>            {/* Animated Code Pattern Overlay - Only render on client */}
            {isClient && (
              <div className="absolute inset-0 opacity-10">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-cyan-400/30 font-mono text-xs"
                    initial={{ x: -100 }}
                    animate={{ x: "100vw" }}
                    transition={{
                      duration: 20 + Math.random() * 20,
                      repeat: Infinity,
                      delay: Math.random() * 5,
                      ease: "linear"
                    }}
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: "-100px"
                    }}
                  >
                    {`{ code: "0x${Math.random().toString(16).slice(2, 10)}" }`}
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen w-full px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="text-center text-white w-full max-w-6xl mx-auto"
          >
            {/* Tech Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 backdrop-blur-sm mb-6"
            >
              <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></div>
              <span className="text-cyan-300 text-sm font-semibold tracking-widest uppercase">
                {currentSlideData.subtitle}
              </span>
            </motion.div>

            {/* Main Title with Tech Icon */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col items-center mb-6 lg:mb-10"
            >
              <div className="mb-4">
                <CurrentIcon className="h-16 w-16 text-cyan-400" />
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-2xl">
                {currentSlideData.title}
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl lg:text-3xl mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed font-medium text-gray-300 drop-shadow-lg"
            >
              {currentSlideData.text}
            </motion.p>

            {/* Tech Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-4 mb-10"
            >
              {currentSlideData.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-lg border border-cyan-500/20 backdrop-blur-sm"
                >
                  <span className="text-cyan-300 font-semibold">{stat}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 lg:px-12 lg:py-5 rounded-xl font-bold text-lg inline-flex items-center gap-3 shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-cyan-300"
                >
                  <span>Start Your Project</span>
                  <RocketLaunchIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/portfolio"
                  className="group bg-transparent hover:bg-cyan-500/10 text-cyan-300 px-8 py-4 lg:px-12 lg:py-5 rounded-xl font-bold text-lg inline-flex items-center gap-3 shadow-2xl transition-all duration-300 border-2 border-cyan-500/50 hover:border-cyan-400"
                >
                  <span>View Case Studies</span>
                  <ArrowPathIcon className="h-5 w-5 group-hover:rotate-180 transition-transform duration-300" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Tech Slider Controls */}
      <button
        className="slider-btn prev absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 bg-blue-900/50 hover:bg-cyan-500 text-white p-3 lg:p-4 rounded-xl transition-all duration-300 z-20 backdrop-blur-md border border-cyan-500/30 hover:border-cyan-300 hover:scale-110 group"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        className="slider-btn next absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 bg-blue-900/50 hover:bg-cyan-500 text-white p-3 lg:p-4 rounded-xl transition-all duration-300 z-20 backdrop-blur-md border border-cyan-500/30 hover:border-cyan-300 hover:scale-110 group"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Binary Code Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`group relative w-12 h-2 rounded-full transition-all duration-500 overflow-hidden ${
              index === currentSlide 
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/50' 
                : 'bg-gray-600/50 hover:bg-gray-500/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {/* Animated binary code effect for active slide */}
            {index === currentSlide && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Animated Scroll Indicator with Code Icon */}
      <motion.div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center">
          <span className="text-xs text-cyan-400 mb-2 font-mono tracking-widest">SCROLL</span>
          <div className="relative">
            <div className="w-6 h-10 border-2 rounded-xl flex justify-center border-cyan-500/50">
              <motion.div 
                className="w-1 h-3 rounded-full mt-2 bg-gradient-to-b from-cyan-400 to-cyan-300"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
              <ChevronDownIcon className="h-4 w-4 text-cyan-400 animate-pulse" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;