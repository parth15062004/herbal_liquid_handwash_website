import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Leaf } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="bg-[#0F5132] p-2 rounded-xl">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className={`text-lg m-0 leading-none ${isScrolled ? 'text-[#0F5132]' : 'text-white'}`}>Herbal pH-Balanced</h3>
              <p className={`text-xs m-0 ${isScrolled ? 'text-[#1F2937] opacity-60' : 'text-white/80'}`}>Liquid Hand Wash</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {[
              { name: 'About', id: 'about' },
              { name: 'Ingredients', id: 'ingredients' },
              { name: 'Process', id: 'process' },
              { name: 'Video', id: 'video' },
              { name: 'Team', id: 'team' },
              { name: 'Contact', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors ${isScrolled ? 'text-[#1F2937] hover:text-[#0F5132]' : 'text-white hover:text-white/90'}`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
