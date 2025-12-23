'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import NavigationLinks from '../sections/NavigationLinks'
import AnimatedButton from './AnimatedButton'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  }

  const backdropVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          />
          
          {/* Menu Panel */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white dark:bg-dark-900 shadow-2xl z-50 lg:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-dark-700">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Menu</h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto p-6">
                <NavigationLinks isMobile onLinkClick={onClose} />
              </div>
              
              {/* CTA Section */}
              <div className="p-6 border-t border-gray-200 dark:border-dark-700 space-y-4">
                <AnimatedButton
                  variant="primary"
                  size="lg"
                  className="w-full"
                  onClick={() => {
                    onClose()
                    // Add your consultation booking logic here
                  }}
                >
                  Book Free Consultation
                </AnimatedButton>
                <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                  <p>Typically replies within 2 hours</p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}