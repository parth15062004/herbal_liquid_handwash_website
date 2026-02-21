import { motion } from 'motion/react';
import { CheckCircle, Play } from 'lucide-react';

const heroImage = "https://images.unsplash.com/photo-1757843979865-c03ef8437d3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGxlYXZlcyUyMGJsdXJyZWQlMjBuYXR1cmFsJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzE1ODMzMjl8MA&ixlib=rb-4.1.0&q=80&w=1080";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F5132]/90 via-[#0F5132]/70 to-[#1F2937]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl text-white mb-6">
              Herbal & pH-Balanced<br />Liquid Hand Wash
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {['Eco-Friendly', 'Skin Safe', 'Lab Formulated'].map((badge) => (
              <span
                key={badge}
                className="px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            An innovative chemical engineering prototype developed using controlled saponification 
            of coconut oil with potassium hydroxide, enriched with aloe vera for skin hydration 
            and balanced pH formulation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <button
              onClick={() => scrollToSection('process')}
              className="px-8 py-4 bg-white text-[#0F5132] rounded-2xl hover:bg-white/90 transition-all shadow-lg hover:shadow-xl"
            >
              Explore Process
            </button>
            <button
              onClick={() => scrollToSection('video')}
              className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white text-white rounded-2xl hover:bg-white/20 transition-all flex items-center gap-2"
            >
              <Play className="size-5" />
              Watch Making Video
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              'Lab Tested',
              'pH Balanced (7–8)',
              'Sustainable Formula',
              'SDG Aligned',
            ].map((feature) => (
              <div
                key={feature}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl"
              >
                <CheckCircle className="size-5 text-[#A3CFBB] flex-shrink-0" />
                <span className="text-sm text-white">{feature}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
