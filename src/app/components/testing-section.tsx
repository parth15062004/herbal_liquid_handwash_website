import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Activity, Thermometer, FlaskConical, Calendar } from 'lucide-react';

const labBg = "https://images.unsplash.com/photo-1761095596584-34731de3e568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaXN0cnklMjBsYWJvcmF0b3J5JTIwZXF1aXBtZW50JTIwYmVha2Vyc3xlbnwxfHx8fDE3NzE1ODMzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080";

const stats = [
  {
    icon: Activity,
    label: 'Achieved pH',
    value: '7–8',
    description: 'Skin-friendly range',
    color: '#0F5132',
  },
  {
    icon: Thermometer,
    label: 'Reaction Temperature',
    value: '70°C',
    description: 'Optimal saponification',
    color: '#A3CFBB',
  },
  {
    icon: FlaskConical,
    label: 'Lab Preparation',
    value: 'Batch',
    description: 'Controlled environment',
    color: '#0F5132',
  },
  {
    icon: Calendar,
    label: 'Shelf Stability',
    value: '2–3 Months',
    description: 'Recommended usage',
    color: '#A3CFBB',
  },
];

export function TestingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${labBg})` }}
      >
        <div className="absolute inset-0 bg-white/95" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-[#0F5132] mb-4">Testing & Quality Parameters</h2>
          <p className="text-lg text-[#1F2937]/70 max-w-2xl mx-auto">
            Rigorous quality control ensuring optimal product performance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-white/80 backdrop-blur-lg border-2 border-[#D1E7DD]/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                {/* Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"
                  style={{ backgroundColor: stat.color }}
                />

                {/* Icon */}
                <div 
                  className="inline-flex p-4 rounded-2xl mb-6 relative"
                  style={{ backgroundColor: `${stat.color}10` }}
                >
                  <stat.icon 
                    className="size-8"
                    style={{ color: stat.color }}
                  />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-3xl text-[#0F5132] mb-2">{stat.value}</h3>
                  <p className="text-lg text-[#1F2937] mb-2 m-0">{stat.label}</p>
                  <p className="text-sm text-[#1F2937]/60 m-0">{stat.description}</p>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundColor: stat.color }} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[#0F5132] to-[#1F2937] rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <h3 className="text-2xl text-white mb-4">Laboratory Testing Standards</h3>
            <p className="text-white/80 leading-relaxed m-0">
              All parameters were carefully monitored and tested in the Chemical Engineering 
              laboratory at MIT Academy of Engineering, ensuring compliance with safety standards 
              and optimal product quality for skin application.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
