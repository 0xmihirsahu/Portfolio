'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback, useMemo } from 'react';

const achievements = [
  {
    title: "ETHGlobal StarkHack",
    description: "Finalist",
    className: "from-purple-900/20 to-purple-950/20 border-purple-900/50",
    details: "Built StarkSwirl, a privacy-preserving protocol for StarkNet",
    url: "https://ethglobal.com/showcase/starkswirl-vyttm"
  },
  {
    title: "Aptos Code Collision",
    description: "Finalist",
    className: "from-emerald-900/20 to-emerald-950/20 border-emerald-900/50",
    details: "Developed FundMate, a DeFi superapp for Aptos",
    url: "https://dorahacks.io/buidl/16821"
  },
  {
    title: "Chainlink BlockMagic",
    description: "Top Quality Project Winner",
    className: "from-blue-900/20 to-blue-950/20 border-blue-900/50",
    details: "Created web3 autonomous uber using RL AI Agents using chainlink tools",
    url: "https://devpost.com/software/web3wheels"
  }
];

// Konami Code sequence
const KONAMI_CODE = ['0', 'x'];

export default function Achievements() {
  const [isVisible, setIsVisible] = useState(false);
  const [sequence, setSequence] = useState<string[]>([]);
  const [showHint, setShowHint] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [isHintVisible, setIsHintVisible] = useState(true);
  const [hintText, setHintText] = useState("");
  const [cycleCount, setCycleCount] = useState(0);

  const resetState = useCallback(() => {
    setDisplayText("");
    setSequence([]);
  }, []);

  const typeText = useCallback(() => {
    const text = "ACHIEVEMENT UNLOCKED!";
    let currentIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const newSequence = [...sequence, e.key];
      if (newSequence.length > KONAMI_CODE.length) {
        newSequence.shift();
      }
      setSequence(newSequence);

      if (newSequence.join('') === KONAMI_CODE.join('')) {
        setIsVisible(true);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [sequence]);

  useEffect(() => {
    if (isVisible) {
      const cleanup = typeText();
      return cleanup;
    } else {
      resetState();
    }
  }, [isVisible, typeText, resetState]);

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Check if mobile based on screen size
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      setHintText(window.innerWidth <= 768 ? "?" : "press '0'");
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleHintAnimation = () => {
    if (!isHintVisible) {
      if (isMobile) {
        setHintText("?");
      } else {
        // Update cycle count and text
        const newCycleCount = (cycleCount + 1) % 2;
        setCycleCount(newCycleCount);
        
        // Change text based on cycle
        setHintText(newCycleCount === 0 ? "press '0'" : "then 'x'");
      }
      setIsHintVisible(true);
    } else {
      setIsHintVisible(false);
    }
  };

  const handleMobileClick = () => {
    setIsVisible(true);
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, rotateX: -80 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <>
      {showHint && !isVisible && (
        <motion.div
          key={`hint-${cycleCount}`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ 
            opacity: isHintVisible ? 1 : 0,
            scale: isHintVisible ? 1 : 0.95,
            filter: isHintVisible 
              ? "drop-shadow(0 0 10px rgba(34, 197, 94, 0.4)) drop-shadow(0 0 20px rgba(34, 197, 94, 0.2))" 
              : "drop-shadow(0 0 0px rgba(34, 197, 94, 0))"
          }}
          transition={{ 
            duration: 2,
            ease: [0.4, 0, 0.2, 1]
          }}
          onAnimationComplete={handleHintAnimation}
          onClick={isMobile ? handleMobileClick : undefined}
          className={`fixed bottom-6 right-6 font-mono text-base flex flex-col items-end select-none mix-blend-screen
            ${isMobile 
              ? 'cursor-pointer backdrop-blur-sm px-5 py-3 border border-green-500/20 rounded-lg' 
              : 'px-4 py-2'
            }`}
        >
          <motion.div 
            className={`
              relative group
              ${!isMobile ? 'hover:scale-105 transition-transform duration-300' : ''}
            `}
            animate={{
              textShadow: isHintVisible 
                ? ['0 0 10px rgba(34, 197, 94, 0.5)', '0 0 15px rgba(34, 197, 94, 0.3)', '0 0 10px rgba(34, 197, 94, 0.5)']
                : '0 0 0px rgba(34, 197, 94, 0)'
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className={`
              text-green-400/90 font-medium tracking-wider
              ${!isMobile && 'group-hover:text-green-300 transition-colors duration-300'}
              relative
              text-shadow: 0 0 8px rgba(34, 197, 94, 0.9), 0 0 12px rgba(34, 197, 94, 0.8), 0 0 8px rgba(34, 197, 94, 0.9)
            `}>
              <motion.span
                animate={{
                  opacity: [0.9, 1, 0.9],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-sm"
              >
                [{hintText}]
              </motion.span>
              {!isMobile && (
                <motion.div
                  className="absolute -inset-2 bg-green-500/5 blur rounded-lg -z-10"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.7, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              )}
            </div>
            {!isMobile && (
              <>
                <div className="absolute inset-0 bg-green-500/5 -z-10 blur-xl rounded-full transform scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 -z-20 opacity-0 group-hover:opacity-100"
                  animate={{
                    backgroundPosition: ['200% 0', '-200% 0'],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </>
            )}
          </motion.div>
        </motion.div>
      )}
      
      <AnimatePresence>
        {isVisible && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/90 z-50">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 pointer-events-none crt"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,0,0.1) 2px, rgba(0,255,0,0.1) 4px)'
              }}
            />
            
            <motion.div 
              className="z-10 w-full max-w-5xl mb-8 px-4 relative"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ 
                  opacity: [0, 1, 0.5, 1],
                  textShadow: [
                    "0 0 5px #0f0",
                    "0 0 20px #0f0",
                    "0 0 5px #0f0",
                    "0 0 2px #0f0"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-3xl font-mono font-bold mb-8 text-center text-green-500 min-h-[48px]"
              >
                {displayText}
              </motion.div>
              
              <motion.div 
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              >
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover="hover"
                    onClick={() => window.open(achievement.url, '_blank')}
                    className={`
                      relative p-6 backdrop-blur-sm
                      bg-gradient-to-br ${achievement.className}
                      border border-green-500/30
                      shadow-lg shadow-green-500/20
                      transition-all duration-300
                      overflow-hidden
                      cursor-pointer
                    `}
                    style={{
                      boxShadow: '0 0 10px rgba(0,255,0,0.2), inset 0 0 20px rgba(0,255,0,0.1)'
                    }}
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500/50 to-transparent animate-scan" />
                    
                    <div className="mt-2">
                      <h3 className="font-mono font-bold text-lg mb-2 text-green-400">{achievement.title}</h3>
                      <p className="font-mono text-sm text-green-300 mb-3">{achievement.description}</p>
                      <p className="font-mono text-xs text-green-200/70">{achievement.details}</p>
                    </div>
                    
                    <div className="absolute -bottom-2 -right-2 w-20 h-20 opacity-10">
                      <div className="w-full h-full bg-gradient-to-br from-green-500/20 to-transparent rotate-45" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.button
                onClick={() => setIsVisible(false)}
                className="mt-8 px-4 py-2 font-mono text-green-500 border border-green-500/50 hover:bg-green-500/20 transition-colors mx-auto block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                [CLOSE]
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
} 