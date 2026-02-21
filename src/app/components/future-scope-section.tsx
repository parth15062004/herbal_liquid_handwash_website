import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Sparkles, TrendingUp, Package, Beaker, Leaf, Award, ShoppingBag, Globe } from 'lucide-react';

const futureScopes = [
  {
    category: 'Product Development',
    icon: Beaker,
    items: [
      { icon: Sparkles, text: 'Improve shelf life through advanced preservation techniques' },
      { icon: Leaf, text: 'Add essential oils for natural fragrance variants' },
      { icon: Package, text: 'Develop eco-friendly, biodegradable packaging solutions' },
      { icon: Sparkles, text: 'Fragrance enhancement with natural botanical extracts' },
    ],
    color: '#0F5132',
  },
  {
    category: 'Commercialization',
    icon: TrendingUp,
    items: [
      { icon: Globe, text: 'Scale-up production for market distribution' },
      { icon: Award, text: 'Obtain regulatory certifications and approvals' },
      { icon: ShoppingBag, text: 'Market launch strategy and branding' },
      { icon: TrendingUp, text: 'Establish sustainable supply chain partnerships' },
    ],
    color: '#A3CFBB',
  },
];

export function FutureScopeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-[#F8F9FA] to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-[#0F5132] mb-4">Future Scope</h2>
          <p className="text-lg text-[#1F2937]/70 max-w-2xl mx-auto">
            Expanding horizons for sustainable product innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {futureScopes.map((scope, index) => (
            <motion.div
              key={scope.category}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group"
            >
              <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#D1E7DD]/30 h-full">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div 
                    className="p-4 rounded-2xl"
                    style={{ backgroundColor: `${scope.color}15` }}
                  >
                    <scope.icon 
                      className="size-8"
                      style={{ color: scope.color }}
                    />
                  </div>
                  <h3 className="text-2xl text-[#0F5132] m-0">{scope.category}</h3>
                </div>

                {/* Items */}
                <div className="space-y-4">
                  {scope.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + itemIndex * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#F8F9FA] transition-colors duration-300 group/item"
                    >
                      <div 
                        className="p-2 rounded-lg flex-shrink-0"
                        style={{ backgroundColor: `${scope.color}10` }}
                      >
                        <item.icon 
                          className="size-5"
                          style={{ color: scope.color }}
                        />
                      </div>
                      <p className="text-[#1F2937]/80 m-0 leading-relaxed group-hover/item:text-[#0F5132] transition-colors">
                        {item.text}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Element */}
                <div 
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ backgroundColor: scope.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-[#0F5132] to-[#1F2937] rounded-3xl p-8 md:p-12 text-center shadow-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }} />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl mb-6">
                <Sparkles className="size-8 text-[#A3CFBB]" />
              </div>
              <h3 className="text-2xl text-white mb-4">Vision for Tomorrow</h3>
              <p className="text-white/80 leading-relaxed m-0">
                We envision this prototype evolving into a commercially viable product that sets 
                new standards in sustainable personal care. Through continuous research and 
                development, we aim to create products that benefit both people and the planet, 
                demonstrating that chemical engineering can drive positive environmental and 
                social impact.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
