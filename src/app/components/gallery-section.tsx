import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import finalProduct from '../../assetsimg/finalp.png'
import heatingImg from '../../assetsimg/heating.jpg'
import reactionImg from '../../assetsimg/reaction.png'
import soapPasteImg from '../../assetsimg/soap_paste.png'
const galleryImages = [
  {
    title: 'Coconut Oil',
    image: 'https://images.unsplash.com/photo-1643171785612-163ed13cf1b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwb2lsJTIwbmF0dXJhbCUyMGluZ3JlZGllbnR8ZW58MXx8fHwxNzcxNTgzMzMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    size: 'small',
  },
  {
    title: 'Heating Process',
    image: heatingImg,
    size: 'small',
  },
  {
    title: 'Reaction Stage',
    image: reactionImg,
    size: 'small',
  },
  {
    title: 'Soap Paste',
    image: soapPasteImg,
    size: 'small',
  },
];

export function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-[#0F5132] mb-4">Project Gallery</h2>
          <p className="text-lg text-[#1F2937]/70 max-w-2xl mx-auto">
            Visual documentation of our manufacturing journey
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Regular Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {galleryImages.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F5132]/90 via-[#0F5132]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <p className="text-white text-lg m-0">{item.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Highlighted Final Product Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-[#0F5132] to-[#1F2937] rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Image Side */}
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/20">
                    <img 
                      src={finalProduct} 
                      alt="Final Product"
                      className="w-full h-80 object-cover"
                    />
                  </div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-[#A3CFBB]/20 blur-3xl rounded-2xl" />
                </div>

                {/* Text Side */}
                <div className="text-center md:text-left">
                  <div className="inline-block px-4 py-2 bg-[#A3CFBB]/20 backdrop-blur-md rounded-full text-[#A3CFBB] text-sm mb-4">
                    Final Product
                  </div>
                  <h3 className="text-3xl md:text-4xl text-white mb-4">
                    Herbal pH-Balanced<br />Liquid Hand Wash
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-6">
                    The culmination of careful chemical engineering and natural formulation, 
                    resulting in a sustainable, skin-safe hand wash product ready for practical use.
                  </p>
                  
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-4">
                    {['Natural', 'pH Balanced', 'Lab Tested', 'Eco-Friendly'].map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#A3CFBB] rounded-full" />
                        <span className="text-white/90 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Upload Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-8"
          >
            <p className="text-sm text-[#1F2937]/50 italic m-0">
              Additional product images can be uploaded and featured here
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
