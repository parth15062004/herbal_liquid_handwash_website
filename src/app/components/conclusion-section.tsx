import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { CheckCircle, Leaf, Award, Target } from 'lucide-react';
import sustainableImage from '../../assetsimg/succes.png'
//const sustainableImage = "https://images.unsplash.com/photo-1589365354848-78104c17f92d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGVjbyUyMGZyaWVuZGx5JTIwcHJvZHVjdHxlbnwxfHx8fDE3NzE1ODMzMzN8MA&ixlib=rb-4.1.0&q=80&w=1080";

const achievements = [
  { icon: CheckCircle, text: 'Successful saponification reaction' },
  { icon: Leaf, text: 'Natural and eco-friendly formulation' },
  { icon: Award, text: 'pH-balanced for skin safety' },
  { icon: Target, text: 'SDG-aligned project goals' },
];

export function ConclusionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(45deg, #0F5132 25%, transparent 25%, transparent 75%, #0F5132 75%), linear-gradient(45deg, #0F5132 25%, transparent 25%, transparent 75%, #0F5132 75%)',
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 30px 30px'
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-[#0F5132] mb-4">Conclusion</h2>
          <p className="text-lg text-[#1F2937]/70 max-w-2xl mx-auto">
            A successful demonstration of sustainable chemical engineering
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
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
                  src={sustainableImage} 
                  alt="Sustainable eco-friendly product"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F5132]/70 to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl">
                  <p className="text-sm text-[#1F2937]/60 mb-1 m-0">Project Status</p>
                  <p className="text-2xl text-[#0F5132] m-0">Successfully Completed</p>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Main Conclusion Box */}
              <div className="bg-gradient-to-br from-[#D1E7DD]/50 to-[#A3CFBB]/30 backdrop-blur-sm rounded-3xl p-8 mb-8 border-2 border-[#0F5132]/20">
                <h3 className="text-2xl text-[#0F5132] mb-4">Project Achievement</h3>
                <p className="text-[#1F2937] leading-relaxed m-0">
                  This project successfully demonstrates the practical application of saponification 
                  chemistry to develop an eco-friendly, skin-safe liquid hand wash aligned with 
                  sustainable development goals and modern chemical engineering principles.
                </p>
              </div>

              {/* Achievements */}
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-md border border-[#D1E7DD]/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="p-2 bg-[#0F5132]/10 rounded-xl">
                      <achievement.icon className="size-6 text-[#0F5132]" />
                    </div>
                    <p className="text-[#1F2937] m-0">{achievement.text}</p>
                  </motion.div>
                ))}
              </div>

              {/* Impact Statement */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
                className="mt-8 bg-gradient-to-br from-[#0F5132] to-[#1F2937] rounded-2xl p-6 text-center"
              >
                <p className="text-white/90 m-0">
                  <strong className="text-[#A3CFBB]">Impact:</strong> Demonstrating sustainable chemistry 
                  for a cleaner, healthier future
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
