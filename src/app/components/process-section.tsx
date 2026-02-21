import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Thermometer, Droplets, Flame, Sparkles, TestTube, Wind, Snowflake, Leaf, Beaker, FlaskConical } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Heating Coconut Oil',
    description: '60–70°C',
    icon: Flame,
  },
  {
    number: 2,
    title: 'KOH Solution Preparation',
    description: '10g KOH in 40ml water',
    icon: Beaker,
  },
  {
    number: 3,
    title: 'Controlled Mixing',
    description: 'Stirring at 70°C',
    icon: TestTube,
  },
  {
    number: 4,
    title: 'Saponification Reaction',
    description: 'Chemical transformation',
    icon: Sparkles,
  },
  {
    number: 5,
    title: 'Soap Paste Formation',
    description: 'Viscous consistency',
    icon: Droplets,
  },
  {
    number: 6,
    title: 'Dilution Process',
    description: 'Hot water (70–80°C)',
    icon: FlaskConical,
  },
  {
    number: 7,
    title: 'Cooling Phase',
    description: 'Below 40°C',
    icon: Snowflake,
  },
  {
    number: 8,
    title: 'Aloe Vera Addition',
    description: 'Natural moisturizer',
    icon: Leaf,
  },
  {
    number: 9,
    title: 'pH Adjustment',
    description: 'Using citric acid',
    icon: Thermometer,
  },
  {
    number: 10,
    title: 'Final Product',
    description: 'Herbal liquid hand wash',
    icon: Wind,
  },
];

export function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="process" ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #0F5132 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-[#0F5132] mb-4">Manufacturing Process</h2>
          <p className="text-lg text-[#1F2937]/70 max-w-2xl mx-auto">
            A systematic 10-step process from raw materials to finished product
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#A3CFBB] via-[#0F5132] to-[#A3CFBB]" />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:gap-0 gap-4`}
                >
                  {/* Content Card */}
                  <div className={`w-full lg:w-5/12 ${isEven ? 'lg:text-right' : 'lg:text-left'} text-center`}>
                    <div className="bg-gradient-to-br from-white to-[#F8F9FA] p-6 rounded-2xl shadow-lg border border-[#D1E7DD]/30 hover:shadow-xl transition-all duration-300">
                      <div className={`flex items-center gap-4 ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex-row justify-center lg:justify-start`}>
                        <div className="bg-[#0F5132]/10 p-3 rounded-xl">
                          <step.icon className="size-6 text-[#0F5132]" />
                        </div>
                        <div className={isEven ? 'lg:text-right' : 'lg:text-left'}>
                          <h3 className="text-lg text-[#0F5132] mb-1">{step.title}</h3>
                          <p className="text-sm text-[#1F2937]/60 m-0">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Circle */}
                  <div className="hidden lg:flex w-2/12 justify-center items-center">
                    <div className="relative flex items-center justify-center">
                      <div className="absolute inset-0 w-16 h-16 bg-[#A3CFBB]/20 rounded-full blur-xl" />
                      <div className="relative w-16 h-16 bg-gradient-to-br from-[#0F5132] to-[#A3CFBB] rounded-full flex items-center justify-center shadow-lg ring-4 ring-white">
                        <span className="text-white font-bold text-lg">{step.number}</span>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Number */}
                  <div className="lg:hidden flex items-center justify-center">
                    <div className="relative flex items-center justify-center">
                      <div className="absolute inset-0 w-12 h-12 bg-[#A3CFBB]/20 rounded-full blur-lg" />
                      <div className="relative w-12 h-12 bg-gradient-to-br from-[#0F5132] to-[#A3CFBB] rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold">{step.number}</span>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden lg:block w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
