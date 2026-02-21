import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Heart, Droplets, Leaf } from 'lucide-react';

const sdgs = [
  {
    number: 3,
    title: 'Good Health & Well-being',
    description: 'Promotes hygiene and skin safety through pH-balanced formulation.',
    icon: Heart,
    color: '#0F5132',
  },
  {
    number: 6,
    title: 'Clean Water & Sanitation',
    description: 'Encourages proper hand hygiene practices and water conservation.',
    icon: Droplets,
    color: '#26BDE2',
  },
  {
    number: 12,
    title: 'Responsible Consumption',
    description: 'Uses minimal chemicals and sustainable production approach.',
    icon: Leaf,
    color: '#BF8B2E',
  },
];

export function SDGSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white to-[#F8F9FA]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-[#0F5132] mb-4">SDG Alignment</h2>
          <p className="text-lg text-[#1F2937]/70 max-w-2xl mx-auto">
            Contributing to United Nations Sustainable Development Goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sdgs.map((sdg, index) => (
            <motion.div
              key={sdg.number}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#D1E7DD]/30 h-full">
                {/* SDG Number Badge */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg ring-4 ring-white relative"
                    style={{ backgroundColor: sdg.color }}
                  >
                    <span className="text-white text-2xl font-bold">{sdg.number}</span>
                    
                    {/* Glow Effect */}
                    <div 
                      className="absolute inset-0 rounded-full blur-xl opacity-30"
                      style={{ backgroundColor: sdg.color }}
                    />
                  </div>
                </div>

                {/* Icon */}
                <div className="flex justify-center mt-8 mb-6">
                  <div 
                    className="p-4 rounded-2xl"
                    style={{ backgroundColor: `${sdg.color}15` }}
                  >
                    <sdg.icon 
                      className="size-10"
                      style={{ color: sdg.color }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl text-[#0F5132] mb-4">{sdg.title}</h3>
                  <p className="text-[#1F2937]/70 leading-relaxed m-0">
                    {sdg.description}
                  </p>
                </div>

                {/* Decorative Border on Hover */}
                <div 
                  className="absolute inset-0 rounded-3xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ borderColor: sdg.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[#D1E7DD]/50 to-[#A3CFBB]/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center border border-[#0F5132]/10">
            <h3 className="text-2xl text-[#0F5132] mb-4">Sustainable Impact</h3>
            <p className="text-[#1F2937]/80 leading-relaxed m-0">
              This project demonstrates how chemical engineering principles can be applied to 
              create products that not only serve practical purposes but also contribute to 
              global sustainability goals. By using natural ingredients and eco-friendly 
              processes, we aim to inspire responsible innovation in personal care products.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
