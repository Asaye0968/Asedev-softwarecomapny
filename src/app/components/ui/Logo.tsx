// Logo.tsx - Enhanced version
import { Code2, Bot, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface LogoProps {
  isScrolled?: boolean
}

export default function Logo({ isScrolled = false }: LogoProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center space-x-2 group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Outer glow ring */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 0.3 }
          }}
          className="absolute inset-0 border-2 border-amber-500/30 rounded-full"
        />
        
        {/* Pulsing effect */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-amber-500/10 rounded-lg blur-sm"
        />
        
        <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg shadow-lg group-hover:shadow-amber-500/25 transition-all duration-300 overflow-hidden">
          {/* Inner shine effect */}
          <motion.div
            animate={{ x: isHovered ? 40 : -40 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
          
          <Code2 className="w-6 h-6 text-white relative z-10" />
          
          <motion.div
            animate={{ 
              y: isHovered ? [-3, 3, -3] : 0,
              rotate: isHovered ? [0, 10, -10, 0] : 0
            }}
            transition={{ duration: 0.5 }}
            className="absolute -bottom-1 -right-1"
          >
            <Bot className="w-4 h-4 text-amber-300" />
            {isHovered && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute -top-1 -right-1"
              >
                <Sparkles className="w-2 h-2 text-yellow-300" />
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
      
      <div className="flex flex-col">
        <div className="flex items-center space-x-1">
          <motion.span
            animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
            transition={{ duration: 0.2 }}
            className={`font-bold tracking-tight bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-400 bg-clip-text text-transparent ${isScrolled ? 'text-lg' : 'text-xl'}`}
          >
            AseStack
          </motion.span>
          <motion.span
            animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-amber-500"
          >
            .
          </motion.span>
        </div>
        <motion.span 
          animate={{ opacity: isHovered ? 0.8 : 1 }}
          className="text-xs text-amber-500/80 dark:text-amber-400/80 tracking-wider font-medium"
        >
          SOFTWARE SOLUTIONS
        </motion.span>
      </div>
    </motion.div>
  )
}