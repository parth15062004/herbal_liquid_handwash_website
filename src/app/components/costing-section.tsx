import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const costs = [
  { name: 'Coconut Oil', price: '₹25' },
  { name: 'KOH (10g)', price: '₹15' },
  { name: 'Distilled Water', price: '₹5' },
  { name: 'Aloe Vera Gel', price: '₹20' },
  { name: 'Citric Acid', price: '₹5' },
  { name: 'Miscellaneous (electricity, lab use)', price: '₹10' },
];

function CostingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const total = '₹80';

  return (
    <section id="costing" ref={ref} className="py-24 bg-white relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-[#0F5132] mb-4">Project Cost Analysis</h2>
          <p className="text-lg text-[#1F2937]/70 max-w-2xl mx-auto">
            Estimated Laboratory Batch Cost for 300 mL Herbal pH-Balanced Liquid Hand Wash
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {costs.map((c, idx) => (
              <div key={c.name} className="bg-gradient-to-br from-white to-[#F8F9FA] p-6 rounded-2xl shadow-lg border border-[#D1E7DD]/30 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg text-[#0F5132] mb-1">{c.name}</h3>
                    <p className="text-sm text-[#1F2937]/60 m-0">{idx === 1 ? 'KOH quantity: 10g' : ''}</p>
                  </div>

                  <div className="text-xl font-semibold text-[#0F5132]">{c.price}</div>
                </div>
              </div>
            ))}

            {/* Total Card */}
            <div className="md:col-span-2">
              <div className="bg-gradient-to-br from-[#0F5132] to-[#1F7F4F] text-white p-8 rounded-2xl shadow-2xl border border-[#0F5132]/20 text-center">
                <h3 className="text-2xl md:text-3xl font-bold">Total Estimated Cost</h3>
                <p className="text-xl md:text-lg mt-2 text-white/90">per 300 mL batch</p>
                <div className="mt-6">
                  <span className="text-4xl md:text-5xl font-extrabold">{total}</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-[#1F2937]/60 mt-6 text-center">Cost estimation based on laboratory-scale prototype preparation.</p>
        </motion.div>
      </div>
    </section>
  );
}

export default CostingSection;
