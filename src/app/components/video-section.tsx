import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Play } from 'lucide-react';

export function VideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="video" ref={ref} className="py-24 bg-gradient-to-b from-[#F8F9FA] to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-[#0F5132] mb-4">Video Demonstration</h2>
          <p className="text-lg text-[#1F2937]/70 max-w-2xl mx-auto">
            Watch the complete preparation process of our herbal liquid hand wash prototype
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Video Container */}
          <div className="relative bg-gradient-to-br from-white to-[#F8F9FA] rounded-3xl p-4 shadow-2xl border border-[#D1E7DD]/30">
            <div className="relative aspect-video bg-[#1F2937] rounded-2xl overflow-hidden group">
              {/* YouTube Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0F5132] to-[#1F2937]">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-md rounded-full mb-4 group-hover:bg-white/30 transition-all duration-300">
                    <Play className="size-10 text-white ml-1" />
                  </div>
                  <p className="text-white text-lg m-0">Video Coming Soon</p>
                  <p className="text-white/60 text-sm m-0 mt-2">Laboratory demonstration recording</p>
                </div>
              </div>

              {/* You can replace the above div with actual YouTube embed when video is available:
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="Herbal Hand Wash Making Process"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              /> */}
            </div>
          </div>

          {/* Caption */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-6"
          >
            <p className="text-sm text-[#1F2937]/60 m-0">
              Recorded during laboratory prototyping session at MITAOE Chemical Lab
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          >
            {[
              { label: 'Duration', value: '15 min' },
              { label: 'Steps Shown', value: '10' },
              { label: 'Lab Location', value: 'MITAOE' },
              { label: 'Quality', value: 'HD 1080p' },
            ].map((stat) => (
              <div 
                key={stat.label}
                className="bg-gradient-to-br from-white to-[#F8F9FA] p-6 rounded-2xl border border-[#D1E7DD]/30 text-center shadow-lg"
              >
                <p className="text-2xl text-[#0F5132] mb-1 m-0">{stat.value}</p>
                <p className="text-sm text-[#1F2937]/60 m-0">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
