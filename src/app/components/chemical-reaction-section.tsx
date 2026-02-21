import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, Plus } from 'lucide-react';

export function ChemicalReactionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-[#0F5132] to-[#1F2937] relative overflow-hidden">
      {/* Abstract Molecule Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="molecule" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="3" fill="white" />
              <circle cx="50" cy="40" r="3" fill="white" />
              <circle cx="80" cy="20" r="3" fill="white" />
              <line x1="20" y1="20" x2="50" y2="40" stroke="white" strokeWidth="1" />
              <line x1="50" y1="40" x2="80" y2="20" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#molecule)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">Chemical Reaction</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            The science behind saponification
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Reaction Equation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12 mb-12"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 text-white">
              {/* Reactant 1 */}
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-3 border border-white/20">
                  <p className="text-2xl md:text-3xl m-0">Triglyceride</p>
                  <p className="text-sm text-white/60 m-0 mt-2">(Coconut Oil)</p>
                </div>
              </div>

              {/* Plus */}
              <Plus className="size-8 text-[#A3CFBB]" />

              {/* Reactant 2 */}
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-3 border border-white/20">
                  <p className="text-2xl md:text-3xl m-0">KOH</p>
                  <p className="text-sm text-white/60 m-0 mt-2">(Potassium Hydroxide)</p>
                </div>
              </div>

              {/* Arrow */}
              <ArrowRight className="size-12 text-[#A3CFBB] animate-pulse" />

              {/* Products */}
              <div className="text-center flex flex-col gap-4">
                <div className="bg-gradient-to-br from-[#A3CFBB]/20 to-[#D1E7DD]/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#A3CFBB]/50">
                  <p className="text-2xl md:text-3xl m-0">Potassium Soap</p>
                  <p className="text-sm text-white/60 m-0 mt-2">(Liquid Soap)</p>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Plus className="size-4 text-[#A3CFBB]" />
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
                    <p className="text-lg m-0">Glycerol</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Explanation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl text-white mb-4 text-center">Saponification Process</h3>
            <p className="text-white/80 leading-relaxed text-center max-w-3xl mx-auto m-0">
              Saponification is an alkaline hydrolysis reaction where triglycerides 
              (fatty acids from coconut oil) react with potassium hydroxide (KOH) to produce 
              liquid potassium soap and glycerol as a byproduct. This controlled chemical 
              transformation at 70°C ensures optimal soap formation while maintaining the 
              natural moisturizing properties of the ingredients.
            </p>
          </motion.div>

          {/* Key Points */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            {[
              { label: 'Reaction Type', value: 'Alkaline Hydrolysis' },
              { label: 'Temperature', value: '70°C' },
              { label: 'Product Type', value: 'Liquid Potassium Soap' },
            ].map((item) => (
              <div 
                key={item.label}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center"
              >
                <p className="text-sm text-white/60 mb-2 m-0">{item.label}</p>
                <p className="text-xl text-white m-0">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
