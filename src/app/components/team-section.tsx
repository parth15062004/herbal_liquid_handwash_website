import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { GraduationCap, Users, BookOpen, MapPin } from 'lucide-react';

const teamMembers = [
  { name: 'Parth Isekar  ', prn: '202401080062' },
  { name: 'Parth Sugandhi', prn: '202401080059' },
  { name: 'Sarthak Patil ', prn: '202401040357' },
  
];

export function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="team" ref={ref} className="py-24 bg-gradient-to-b from-[#F8F9FA] to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-[#0F5132] mb-4">Our Team</h2>
          <p className="text-lg text-[#1F2937]/70 max-w-2xl mx-auto">
            Dedicated students driving innovation in chemical engineering
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Academic Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-[#0F5132] to-[#1F2937] rounded-3xl p-8 md:p-12 mb-12 shadow-2xl"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="inline-flex p-4 bg-white/10 backdrop-blur-md rounded-2xl mb-4">
                  <GraduationCap className="size-8 text-[#A3CFBB]" />
                </div>
                <p className="text-white/60 text-sm mb-2 m-0">Department</p>
                <p className="text-white text-lg m-0">Computer Engineering</p>
              </div>
              <div>
                <div className="inline-flex p-4 bg-white/10 backdrop-blur-md rounded-2xl mb-4">
                  <BookOpen className="size-8 text-[#A3CFBB]" />
                </div>
                <p className="text-white/60 text-sm mb-2 m-0">Academic Year</p>
                <p className="text-white text-lg m-0">2025–2026</p>
              </div>
              <div>
                <div className="inline-flex p-4 bg-white/10 backdrop-blur-md rounded-2xl mb-4">
                  <Users className="size-8 text-[#A3CFBB]" />
                </div>
                <p className="text-white/60 text-sm mb-2 m-0">Course Type</p>
                <p className="text-white text-lg m-0">Second Year Prototype</p>
              </div>
            </div>
          </motion.div>

          {/* Student Team */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <h3 className="text-2xl text-[#0F5132] text-center mb-8">Team Members</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#D1E7DD]/30 flex items-center gap-4">
                    {/* Avatar Placeholder */}
                    <div className="w-16 h-16 bg-gradient-to-br from-[#0F5132] to-[#A3CFBB] rounded-full flex items-center justify-center flex-shrink-0 ring-4 ring-[#D1E7DD]/30 group-hover:ring-[#0F5132]/30 transition-all">
                      <span className="text-white text-xl font-bold">{member.name.charAt(0)}</span>
                    </div>
                    
                    {/* Info */}
                    <div>
                      <p className="text-lg text-[#0F5132] m-0">{member.name}</p>
                      <p className="text-sm text-[#1F2937]/60 m-0">{member.prn}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Project Guide */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-gradient-to-br from-white to-[#F8F9FA] rounded-3xl p-8 shadow-xl border-2 border-[#0F5132]/20"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl text-[#0F5132] mb-2">Project Guide</h3>
              <div className="w-20 h-1 bg-[#A3CFBB] mx-auto rounded-full" />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-[#0F5132] to-[#1F2937] rounded-full flex items-center justify-center ring-4 ring-[#A3CFBB]/30">
                <span className="text-white text-3xl font-bold">Dr.</span>
              </div>
              
              <div className="text-center md:text-left">
                <p className="text-2xl text-[#0F5132] mb-1 m-0">Dr. Shraddha Shende</p>
                <p className="text-[#1F2937]/70 m-0">Department of Chemical Engineering</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-[#1F2937]/60">
              <MapPin className="size-5 text-[#0F5132]" />
              <p className="m-0">MIT Academy of Engineering, Alandi (D), Pune</p>
            </div>
          </motion.div>

          {/* Institution Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mt-12"
          >
            <div className="inline-block bg-white rounded-2xl px-8 py-4 shadow-lg border border-[#D1E7DD]/30">
              <p className="text-xl text-[#0F5132] m-0">
                MIT Academy of Engineering
              </p>
              <p className="text-[#1F2937]/70 m-0">Alandi, Pune – 412105, Maharashtra, India</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
