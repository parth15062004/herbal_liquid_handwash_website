import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Target, Lightbulb, Atom } from 'lucide-react';

const labImage = "https://images.unsplash.com/photo-1642909547806-b636e669a3d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwYmVha2VyJTIwZ3JlZW4lMjBsaXF1aWQlMjBjaGVtaXN0cnl8ZW58MXx8fHwxNzcxNTgzMzI5fDA&ixlib=rb-4.1.0&q=80&w=1080";

const cards = [
  {
    icon: Target,
    title: 'Project Aim',
    description: 'To develop a safe, eco-friendly liquid hand wash using saponification reaction principles and herbal additives.',
    color: '#0F5132',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Combining coconut oil-based potassium soap formation with aloe vera for moisturizing properties.',
    color: '#A3CFBB',
  },
  {
    icon: Atom,
    title: 'Scientific Base',
    description: 'Controlled reaction between oil and KOH at 70°C ensuring effective soap formation and stable product quality.',
    color: '#0F5132',
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-[#0F5132] mb-4">About The Project</h2>
          <p className="text-lg text-[#1F2937]/70 max-w-2xl mx-auto">
            A scientific approach to sustainable personal care
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={labImage} 
                alt="Laboratory beaker with green liquid"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F5132]/50 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="text-center">
                <p className="text-3xl text-[#0F5132] m-0">2nd Year</p>
                <p className="text-sm text-[#1F2937]/70 m-0">Prototyping</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Cards */}
          <div className="space-y-6">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                className="group relative bg-gradient-to-br from-white to-[#F8F9FA] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#D1E7DD]/30"
              >
                {/* Glass Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent rounded-2xl backdrop-blur-sm" />
                
                <div className="relative">
                  <div 
                    className="inline-flex p-3 rounded-xl mb-4"
                    style={{ backgroundColor: `${card.color}20` }}
                  >
                    <card.icon className="size-6" style={{ color: card.color }} />
                  </div>
                  
                  <h3 className="text-xl text-[#0F5132] mb-3">{card.title}</h3>
                  <p className="text-[#1F2937]/70 leading-relaxed m-0">
                    {card.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-[#A3CFBB] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
