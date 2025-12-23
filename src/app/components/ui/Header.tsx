// components/Header.tsx - Software Development Version
'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '../../lib/utils'
import { 
  ChevronDownIcon, 
  Bars3Icon, 
  XMarkIcon,
  CodeBracketIcon,
  ServerIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
  CpuChipIcon,
  CommandLineIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon,
  UsersIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  BookOpenIcon,
  HomeIcon,
  PhoneIcon,
  SparklesIcon,
  PuzzlePieceIcon,
  BeakerIcon
} from '@heroicons/react/24/outline'

const navigation = {
  main: [
    { 
      name: 'Home', 
      href: '/',
      icon: 'home',
      description: 'Welcome to our digital hub'
    },
    { 
      name: 'About', 
      href: '/about',
      icon: 'about',
      description: 'Learn about our company',
      subnav: [
        { 
          name: 'Who We Are', 
          href: '/about/who-we-are', 
          icon: 'team',
          description: 'Meet our expert development team'
        },
        { 
          name: 'Our Story', 
          href: '/about/history', 
          icon: 'story',
          description: 'Our journey in tech innovation'
        },
        { 
          name: 'Our Values', 
          href: '/about/values', 
          icon: 'values',
          description: 'Principles that drive our work'
        },
        { 
          name: 'Tech Stack', 
          href: '/about/tech-stack', 
          icon: 'tech',
          description: 'Technologies we work with'
        }
      ]
    },
    { 
      name: 'Services', 
      href: '/services',
      icon: 'services',
      description: 'Explore our technical solutions',
      subnav: [
        { 
          name: 'Custom Development', 
          href: '/services/custom',
          icon: 'custom',
          description: 'Tailored software solutions',
          subsubnav: [
            { 
              name: 'Web Applications', 
              href: '/services/web-apps', 
              icon: 'web',
              description: 'Modern web platforms & apps'
            },
            { 
              name: 'Mobile Apps', 
              href: '/services/mobile-apps', 
              icon: 'mobile',
              description: 'iOS & Android applications'
            },
            { 
              name: 'Enterprise Software', 
              href: '/services/enterprise', 
              icon: 'enterprise',
              description: 'Scalable business solutions'
            },
            { 
              name: 'API Development', 
              href: '/services/api', 
              icon: 'api',
              description: 'RESTful & GraphQL APIs'
            },
            { 
              name: 'Legacy Modernization', 
              href: '/services/legacy', 
              icon: 'modernization',
              description: 'Update outdated systems'
            }
          ]
        },
        { 
          name: 'Cloud Solutions', 
          href: '/services/cloud',
          icon: 'cloud',
          description: 'Scalable cloud infrastructure',
          subsubnav: [
            { 
              name: 'Cloud Migration', 
              href: '/services/cloud/migration', 
              icon: 'migration',
              description: 'Seamless cloud transitions'
            },
            { 
              name: 'DevOps Services', 
              href: '/services/devops', 
              icon: 'devops',
              description: 'CI/CD & automation'
            },
            { 
              name: 'Cloud Architecture', 
              href: '/services/architecture', 
              icon: 'architecture',
              description: 'Scalable cloud design'
            },
            { 
              name: 'Database Solutions', 
              href: '/services/database', 
              icon: 'database',
              description: 'SQL & NoSQL databases'
            }
          ]
        },
        { 
          name: 'AI & ML Solutions', 
          href: '/services/ai-ml',
          icon: 'ai',
          description: 'Intelligent automation & AI',
          subsubnav: [
            { 
              name: 'Machine Learning', 
              href: '/services/ml', 
              icon: 'ml',
              description: 'Predictive models & algorithms'
            },
            { 
              name: 'Chatbots & NLP', 
              href: '/services/chatbots', 
              icon: 'chatbot',
              description: 'Intelligent conversation bots'
            },
            { 
              name: 'Computer Vision', 
              href: '/services/vision', 
              icon: 'vision',
              description: 'Image & video analysis'
            },
            { 
              name: 'AI Integration', 
              href: '/services/ai-integration', 
              icon: 'integration',
              description: 'AI-powered enhancements'
            }
          ]
        }
      ]
    },
    { 
      name: 'Industries', 
      href: '/industries',
      icon: 'industries',
      description: 'Sectors we specialize in',
      subnav: [
        { 
          name: 'Healthcare', 
          href: '/industries/healthcare', 
          icon: 'healthcare',
          description: 'Medical software solutions'
        },
        { 
          name: 'FinTech', 
          href: '/industries/fintech', 
          icon: 'fintech',
          description: 'Financial technology'
        },
        { 
          name: 'E-commerce', 
          href: '/industries/ecommerce', 
          icon: 'ecommerce',
          description: 'Online retail platforms'
        },
        { 
          name: 'Education', 
          href: '/industries/education', 
          icon: 'education',
          description: 'EdTech solutions'
        }
      ]
    },
    { 
      name: 'Portfolio', 
      href: '/portfolio',
      icon: 'portfolio',
      description: 'Showcase our successful projects'
    },
    { 
      name: 'Blog', 
      href: '/blog',
      icon: 'blog',
      description: 'Tech insights & tutorials'
    },
    { 
      name: 'Careers', 
      href: '/careers',
      icon: 'careers',
      description: 'Join our talented team'
    }
  ]
}

// Software Development Icons
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  home: HomeIcon,
  about: UsersIcon,
  services: CodeBracketIcon,
  team: UsersIcon,
  story: BookOpenIcon,
  values: ShieldCheckIcon,
  tech: CpuChipIcon,
  portfolio: RocketLaunchIcon,
  blog: BookOpenIcon,
  careers: UsersIcon,
  custom: CommandLineIcon,
  web: CodeBracketIcon,
  mobile: DevicePhoneMobileIcon,
  enterprise: ServerIcon,
  api: PuzzlePieceIcon,
  modernization: WrenchScrewdriverIcon,
  cloud: CloudIcon,
  migration: RocketLaunchIcon,
  devops: BeakerIcon,
  architecture: ChartBarIcon,
  database: ServerIcon,
  'ai-ml': CpuChipIcon,
  ai: SparklesIcon,
  ml: BeakerIcon,
  chatbot: ChatBubbleLeftRightIcon,
  vision: EyeIcon,
  integration: PuzzlePieceIcon,
  industries: BuildingOfficeIcon,
  healthcare: HeartIcon,
  fintech: CurrencyDollarIcon,
  ecommerce: ShoppingBagIcon,
  education: AcademicCapIcon
}

// Additional icons needed
import {
  EyeIcon,
  CurrencyDollarIcon,
  ShoppingBagIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openSubnav, setOpenSubnav] = useState<string | null>(null)
  const [openSubsubnav, setOpenSubsubnav] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null)
  const [clickedMenu, setClickedMenu] = useState<string | null>(null)
  
  const navRef = useRef<HTMLDivElement>(null)
  const subnavRef = useRef<HTMLDivElement>(null)
  const subsubnavRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenSubnav(null)
        setOpenSubsubnav(null)
        setClickedMenu(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSubnavEnter = (menuName: string) => {
    if (hoverTimeout) clearTimeout(hoverTimeout)
    setOpenSubnav(menuName)
  }

  const handleSubnavLeave = () => {
    const timeout = setTimeout(() => {
      if (!subnavRef.current?.matches(':hover') && !subsubnavRef.current?.matches(':hover')) {
        setOpenSubnav(null)
        setOpenSubsubnav(null)
        if (!clickedMenu) {
          setClickedMenu(null)
        }
      }
    }, 200)
    setHoverTimeout(timeout)
  }

  const handleSubsubnavEnter = (menuName: string) => {
    if (hoverTimeout) clearTimeout(hoverTimeout)
    setOpenSubsubnav(menuName)
  }

  const handleSubsubnavLeave = () => {
    const timeout = setTimeout(() => {
      if (!subsubnavRef.current?.matches(':hover')) {
        setOpenSubsubnav(null)
      }
    }, 150)
    setHoverTimeout(timeout)
  }

  const handleMenuClick = (menuName: string, hasSubnav: boolean) => {
    if (!hasSubnav) return
    
    if (clickedMenu === menuName) {
      setClickedMenu(null)
      setOpenSubnav(null)
      setOpenSubsubnav(null)
    } else {
      setClickedMenu(menuName)
      setOpenSubnav(menuName)
    }
  }

  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName] || CodeBracketIcon
    return IconComponent
  }

  return (
    <header className={cn(
      "sticky top-0 z-50 transition-all duration-300",
      scrolled 
        ? "bg-gradient-to-b from-blue-950/95 via-blue-900/95 to-blue-950/95 backdrop-blur-xl shadow-2xl border-b border-blue-500/20" 
        : "bg-gradient-to-b from-blue-950 via-blue-900/95 to-transparent"
    )}>
      {/* Top tech announcement bar */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <ShieldCheckIcon className="h-4 w-4 mr-1 text-cyan-300" />
                Enterprise-Grade Software Solutions
              </span>
              <span className="hidden md:inline">|</span>
              <span className="hidden md:inline">24/7 Tech Support</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/contact" className="hover:text-cyan-200 transition-colors flex items-center">
                <span>Schedule Free Consultation</span>
              </Link>
              <span className="hidden md:inline">|</span>
              <div className="flex items-center space-x-3">
                <Link href="/login" className="flex items-center hover:text-cyan-200 transition-colors">
                  <ServerIcon className="h-4 w-4 mr-1" />
                  <span>Client Dashboard</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={navRef}>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative h-14 w-14">
                {/* Animated background effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-400 to-blue-500 transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300"></div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/30 to-cyan-300/30 blur-md group-hover:blur-lg transition-all duration-300"></div>
                
                {/* Logo content */}
                <div className="relative h-full w-full flex items-center justify-center bg-gradient-to-b from-blue-900 to-blue-950 rounded-2xl overflow-hidden">
                  <div className="text-center">
                    <CodeBracketIcon className="h-7 w-7 text-cyan-300 mx-auto" />
                    <div className="text-[10px] font-bold tracking-widest text-cyan-400 mt-1">
                     Ase DEV
                    </div>
                  </div>
                </div>
              </div>
              
              {/* <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent animate-gradient">
                  CodeCraft
                </span>
                <span className="text-sm font-semibold tracking-wider text-cyan-400">
                  SOFTWARE SOLUTIONS
                </span>
              </div> */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div 
            className="hidden lg:flex lg:items-center lg:space-x-1"
            ref={subnavRef}
          >
            {navigation.main.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => item.subnav && handleSubnavEnter(item.name)}
                onMouseLeave={handleSubnavLeave}
              >
                {item.subnav ? (
                  <div className="relative">
                    <div className="flex">
                      <Link
                        href={item.href}
                        className="group flex items-center px-4 py-2 text-sm font-semibold text-gray-200 hover:text-cyan-300 transition-colors duration-200 rounded-l-lg hover:bg-blue-800/50 relative"
                        onClick={(e) => {
                          if (openSubnav === item.name || clickedMenu === item.name) {
                            e.preventDefault()
                          }
                        }}
                      >
                        <span className="mr-2">{item.name}</span>
                        <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                      </Link>
                      
                      <button 
                        onClick={() => handleMenuClick(item.name, true)}
                        className={cn(
                          "flex items-center px-2 py-2 text-sm font-semibold transition-all duration-200 rounded-r-lg relative group",
                          (openSubnav === item.name || clickedMenu === item.name) 
                            ? "text-cyan-300 bg-blue-800/50" 
                            : "text-gray-200 hover:text-cyan-300 hover:bg-blue-800/50"
                        )}
                        aria-expanded={openSubnav === item.name || clickedMenu === item.name}
                      >
                        <ChevronDownIcon 
                          className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            (openSubnav === item.name || clickedMenu === item.name) && "rotate-180"
                          )} 
                        />
                      </button>
                    </div>

                    {/* Tech Subnav Dropdown */}
                    {(openSubnav === item.name || clickedMenu === item.name) && (
                      <div 
                        className="absolute left-0 top-full mt-2 w-96 bg-gradient-to-b from-blue-900 to-blue-950 rounded-2xl shadow-2xl border border-blue-500/30 py-4 animate-in fade-in-0 zoom-in-95 backdrop-blur-md"
                        ref={subnavRef}
                        onMouseEnter={() => handleSubnavEnter(item.name)}
                        onMouseLeave={handleSubnavLeave}
                      >
                        <div className="px-4 mb-3">
                          <h3 className="text-lg font-bold text-cyan-300 flex items-center">
                            <span className="mr-2">{item.name}</span>
                            <SparklesIcon className="h-4 w-4" />
                          </h3>
                          <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                        </div>
                        <div className="space-y-1">
                          {item.subnav?.map((subItem) => {
                            const SubIcon = getIcon(subItem.icon)
                            return (
                              <div 
                                key={subItem.name}
                                className="relative"
                                onMouseEnter={() => 'subsubnav' in subItem && handleSubsubnavEnter(subItem.name)}
                                onMouseLeave={() => 'subsubnav' in subItem && handleSubsubnavLeave()}
                              >
                                <div className="flex items-center">
                                  <Link
                                    href={subItem.href}
                                    className={cn(
                                      "flex items-center flex-1 px-4 py-3 mx-2 rounded-lg transition-all duration-200 group hover:bg-blue-800/50",
                                      openSubsubnav === subItem.name && "bg-blue-800/50"
                                    )}
                                    onClick={() => {
                                      setOpenSubnav(null)
                                      setOpenSubsubnav(null)
                                      setClickedMenu(null)
                                    }}
                                  >
                                    <div className="flex-shrink-0 p-1.5 rounded-lg bg-blue-800/30 group-hover:bg-blue-700/50">
                                      <SubIcon className="h-4 w-4 text-cyan-400" />
                                    </div>
                                    <div className="ml-3 flex-1">
                                      <div className="flex items-center justify-between">
                                        <span className="text-sm font-semibold text-gray-200 group-hover:text-cyan-300">
                                          {subItem.name}
                                        </span>
                                        {'subsubnav' in subItem && (
                                          <ChevronDownIcon className="h-3 w-3 text-gray-500" />
                                        )}
                                      </div>
                                      {subItem.description && (
                                        <p className="text-xs text-gray-400 mt-1">{subItem.description}</p>
                                      )}
                                    </div>
                                  </Link>
                                </div>

                                {/* Tech Subsubnav Dropdown */}
                                {'subsubnav' in subItem && subItem.subsubnav && openSubsubnav === subItem.name && (
                                  <div 
                                    className="absolute left-full top-0 ml-1 w-80 bg-gradient-to-b from-blue-900 to-blue-950 rounded-2xl shadow-2xl border border-blue-500/30 py-3 z-50 animate-in fade-in-0 slide-in-from-left-2 backdrop-blur-md"
                                    ref={subsubnavRef}
                                    onMouseEnter={() => handleSubsubnavEnter(subItem.name)}
                                    onMouseLeave={handleSubsubnavLeave}
                                  >
                                    <div className="px-4 mb-2">
                                      <h4 className="text-sm font-bold text-cyan-300">{subItem.name}</h4>
                                    </div>
                                    <div className="space-y-1">
                                      {subItem.subsubnav.map((subsubItem) => {
                                        const SubSubIcon = getIcon(subsubItem.icon)
                                        return (
                                          <Link
                                            key={subsubItem.name}
                                            href={subsubItem.href}
                                            className="flex items-center px-4 py-2.5 mx-2 rounded-lg hover:bg-blue-800/50 group transition-all duration-200"
                                            onClick={() => {
                                              setOpenSubnav(null)
                                              setOpenSubsubnav(null)
                                              setClickedMenu(null)
                                            }}
                                          >
                                            <div className="flex-shrink-0 p-1 rounded bg-blue-800/30">
                                              <SubSubIcon className="h-3 w-3 text-cyan-400" />
                                            </div>
                                            <span className="ml-3 text-sm font-medium text-gray-300 group-hover:text-cyan-300">
                                              {subsubItem.name}
                                            </span>
                                          </Link>
                                        )
                                      })}
                                    </div>
                                  </div>
                                )}
                              </div>
                            )
                          })}
                        </div>
                        
                        {item.name === 'Services' && (
                          <div className="mt-4 pt-4 border-t border-blue-500/20 px-4">
                            <Link
                              href="/services"
                              className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 flex items-center"
                              onClick={() => {
                                setOpenSubnav(null)
                                setClickedMenu(null)
                              }}
                            >
                              Explore all services
                              <RocketLaunchIcon className="h-4 w-4 ml-1" />
                            </Link>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="group flex items-center px-4 py-2 text-sm font-semibold text-gray-200 hover:text-cyan-300 transition-colors duration-200 rounded-lg hover:bg-blue-800/50 relative"
                  >
                    <div className="flex items-center">
                      <span className="mr-2">
                        {(() => {
                          const Icon = getIcon(item.icon)
                          return <Icon className="h-4 w-4" />
                        })()}
                      </span>
                      {item.name}
                    </div>
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </Link>
                )}
              </div>
            ))}

            {/* CTA Buttons */}
            <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-blue-500/30">
              <Link
                href="/contact"
                className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:shadow-cyan-500/25"
              >
                Get Quote
              </Link>
              <Link
                href="/login"
                className="px-6 py-2.5 border border-cyan-400/30 text-cyan-300 text-sm font-semibold rounded-lg hover:bg-cyan-500/10 hover:border-cyan-400/50 transition-all duration-300"
              >
                Client Login
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-3">
            <Link
              href="/contact"
              className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-lg"
            >
              Contact
            </Link>
            <button
              type="button"
              className="p-2 rounded-lg bg-blue-800/50 text-cyan-300 hover:bg-blue-700/50 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu - Tech Theme */}
      <div className={cn(
        "lg:hidden fixed inset-0 z-50 transition-all duration-300",
        mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
      )}>
        <div 
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div className={cn(
          "absolute right-0 top-0 h-full w-full max-w-sm bg-gradient-to-b from-blue-950 to-blue-900 shadow-2xl transform transition-transform duration-300",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="flex flex-col h-full">
            {/* Mobile header */}
            <div className="p-6 border-b border-blue-500/30 bg-gradient-to-r from-blue-900/50 to-blue-950/50">
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-3" onClick={() => setMobileMenuOpen(false)}>
                  <div className="relative h-12 w-12">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl"></div>
                    <div className="relative h-full w-full rounded-xl bg-blue-950 flex items-center justify-center">
                      <CodeBracketIcon className="h-6 w-6 text-cyan-300" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-xl text-cyan-300">CodeCraft</div>
                    <div className="text-xs font-semibold text-cyan-400">SOFTWARE SOLUTIONS</div>
                  </div>
                </Link>
                <button
                  type="button"
                  className="p-2 rounded-lg hover:bg-blue-800/50 transition-colors text-cyan-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Mobile navigation */}
            <div className="flex-1 overflow-y-auto py-4">
              <div className="space-y-1 px-4">
                {navigation.main.map((item) => (
                  <div key={item.name} className="border-b border-blue-500/20 last:border-0 pb-1 last:pb-0">
                    {item.subnav ? (
                      <>
                        <div className="flex items-center">
                          <Link
                            href={item.href}
                            className="flex-1 flex items-center py-4 px-4 text-base font-semibold rounded-lg hover:bg-blue-800/50 transition-colors text-gray-200"
                            onClick={(e) => {
                              if (openSubnav === item.name) {
                                e.preventDefault()
                              } else {
                                setMobileMenuOpen(false)
                              }
                            }}
                          >
                            <div className="mr-3">
                              {(() => {
                                const Icon = getIcon(item.icon)
                                return <Icon className="h-5 w-5 text-cyan-400" />
                              })()}
                            </div>
                            {item.name}
                          </Link>
                          <button
                            onClick={() => setOpenSubnav(openSubnav === item.name ? null : item.name)}
                            className="p-2 text-cyan-400 hover:text-cyan-300 rounded-lg transition-colors"
                            aria-expanded={openSubnav === item.name}
                          >
                            <ChevronDownIcon
                              className={cn(
                                "h-5 w-5 transition-transform duration-200",
                                openSubnav === item.name && "rotate-180"
                              )}
                            />
                          </button>
                        </div>
                        {openSubnav === item.name && (
                          <div className="ml-8 pl-4 border-l-2 border-cyan-500/30 space-y-2 my-2">
                            {item.subnav.map((subItem) => {
                              const SubIcon = getIcon(subItem.icon)
                              return (
                                <div key={subItem.name} className="pt-2">
                                  {'subsubnav' in subItem && subItem.subsubnav ? (
                                    <>
                                      <div className="flex items-center">
                                        <Link
                                          href={subItem.href}
                                          className="flex-1 flex items-center py-2 px-3 text-sm font-medium rounded-lg hover:bg-blue-800/50 transition-colors text-gray-300"
                                          onClick={(e) => {
                                            if (openSubsubnav === subItem.name) {
                                              e.preventDefault()
                                            } else {
                                              setMobileMenuOpen(false)
                                            }
                                          }}
                                        >
                                          <SubIcon className="h-4 w-4 text-cyan-400 mr-2" />
                                          {subItem.name}
                                        </Link>
                                        <button
                                          onClick={() => setOpenSubsubnav(openSubsubnav === subItem.name ? null : subItem.name)}
                                          className="p-2 text-cyan-400 hover:text-cyan-300 rounded-lg transition-colors"
                                          aria-expanded={openSubsubnav === subItem.name}
                                        >
                                          <ChevronDownIcon
                                            className={cn(
                                              "h-4 w-4 transition-transform duration-200",
                                              openSubsubnav === subItem.name && "rotate-180"
                                            )}
                                          />
                                        </button>
                                      </div>
                                      {openSubsubnav === subItem.name && (
                                        <div className="ml-4 pl-4 border-l-2 border-blue-400/30 space-y-1 mt-1">
                                          {subItem.subsubnav.map((subsubItem) => {
                                            const SubSubIcon = getIcon(subsubItem.icon)
                                            return (
                                              <Link
                                                key={subsubItem.name}
                                                href={subsubItem.href}
                                                className="flex items-center py-2 px-3 text-sm font-medium rounded-lg hover:bg-blue-800/50 transition-colors text-gray-400"
                                                onClick={() => setMobileMenuOpen(false)}
                                              >
                                                <SubSubIcon className="h-4 w-4 text-cyan-500 mr-2" />
                                                {subsubItem.name}
                                              </Link>
                                            )
                                          })}
                                        </div>
                                      )}
                                    </>
                                  ) : (
                                    <Link
                                      href={subItem.href}
                                      className="flex items-center py-2 px-3 text-sm font-medium rounded-lg hover:bg-blue-800/50 transition-colors text-gray-300"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      <SubIcon className="h-4 w-4 text-cyan-400 mr-2" />
                                      {subItem.name}
                                    </Link>
                                  )}
                                </div>
                              )
                            })}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex items-center py-4 px-4 text-base font-semibold rounded-lg hover:bg-blue-800/50 transition-colors text-gray-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="mr-3">
                          {(() => {
                            const Icon = getIcon(item.icon)
                            return <Icon className="h-5 w-5 text-cyan-400" />
                          })()}
                        </div>
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile CTA buttons */}
              <div className="px-4 mt-8 space-y-3">
                <Link
                  href="/contact"
                  className="block w-full py-3 text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Schedule Consultation
                </Link>
                <Link
                  href="/login"
                  className="block w-full py-3 text-center border border-cyan-400/30 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Access Dashboard
                </Link>
              </div>
            </div>

            {/* Mobile footer */}
            <div className="p-6 border-t border-blue-500/30 bg-blue-900/20">
              <div className="text-sm">
                <div className="font-semibold mb-2 text-cyan-300 flex items-center">
                  <ServerIcon className="h-4 w-4 mr-2" />
                  Tech Support
                </div>
                <p className="text-cyan-400">+1 (555) 123-4567</p>
                <p className="text-sm text-gray-400 mt-1">support@codecraft.dev</p>
                <p className="text-xs text-gray-500 mt-2">24/7 Emergency Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}