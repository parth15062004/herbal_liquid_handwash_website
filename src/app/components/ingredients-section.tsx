import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const ingredients = [
  {
    name: 'Coconut Oil',
    description: 'Fatty acid source for soap formation',
    image: 'https://images.unsplash.com/photo-1643171785612-163ed13cf1b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwb2lsJTIwbmF0dXJhbCUyMGluZ3JlZGllbnR8ZW58MXx8fHwxNzcxNTgzMzMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Potassium Hydroxide',
    description: 'Alkali for saponification',
    image: 'https://images.unsplash.com/photo-1630189153907-c850b6f2ea6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXRyaWMlMjBhY2lkJTIwY3J5c3RhbHMlMjB3aGl0ZXxlbnwxfHx8fDE3NzE1ODMzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Distilled Water',
    description: 'Solvent medium',
    image: 'https://images.unsplash.com/photo-1570615541379-e6b7ab6d4eb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXN0aWxsZWQlMjB3YXRlciUyMGxhYm9yYXRvcnklMjBmbGFza3xlbnwxfHx8fDE3NzE1ODMzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Aloe Vera Gel',
    description: 'Moisturizer',
    image: 'https://images.unsplash.com/photo-1702416062979-dc44baa952c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbG9lJTIwdmVyYSUyMHBsYW50JTIwZnJlc2h8ZW58MXx8fHwxNzcxNDc3OTUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Citric Acid',
    description: 'pH adjustment',
    image: 'https://images.unsplash.com/photo-1630189153907-c850b6f2ea6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXRyaWMlMjBhY2lkJTIwY3J5c3RhbHMlMjB3aGl0ZXxlbnwxfHx8fDE3NzE1ODMzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function IngredientsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="ingredients" ref={ref} className="py-24 bg-gradient-to-b from-[#F8F9FA] to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-[#0F5132] mb-4">Natural Ingredients</h2>
          <p className="text-lg text-[#1F2937]/70 max-w-2xl mx-auto">
            Pure, natural components carefully selected for their beneficial properties
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {ingredients.map((ingredient, index) => (
            <motion.div
              key={ingredient.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              {/* Glass Card */}
              <div className="relative bg-white/60 backdrop-blur-lg border border-[#D1E7DD]/50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Circular Image */}
                <div className="relative mb-6 mx-auto">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-[#A3CFBB]/30 group-hover:ring-[#0F5132]/50 transition-all duration-500">
                    <img 
                      src={ingredient.image} 
                      alt={ingredient.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-full bg-[#A3CFBB]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Text Content */}
                <div className="text-center">
                  <h3 className="text-lg text-[#0F5132] mb-2">{ingredient.name}</h3>
                  <p className="text-sm text-[#1F2937]/60 m-0">{ingredient.description}</p>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#A3CFBB] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
