import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { MapPin, Mail, Send } from 'lucide-react';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" ref={ref} className="py-24 bg-gradient-to-b from-white to-[#F8F9FA]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-[#0F5132] mb-4">Get In Touch</h2>
          <p className="text-lg text-[#1F2937]/70 max-w-2xl mx-auto">
            Have questions about our project? We'd love to hear from you
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-[#0F5132] to-[#1F2937] rounded-3xl p-8 md:p-10 shadow-2xl h-full flex flex-col justify-center">
                <h3 className="text-3xl text-white mb-8">Contact Information</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl">
                      <MapPin className="size-6 text-[#A3CFBB]" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm mb-1 m-0">Location</p>
                      <p className="text-white m-0">MIT Academy of Engineering</p>
                      <p className="text-white/80 text-sm m-0">Alandi, Pune – 412105</p>
                      <p className="text-white/80 text-sm m-0">Maharashtra, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl">
                      <Mail className="size-6 text-[#A3CFBB]" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm mb-1 m-0">Email</p>
                      <p className="text-white m-0">contact@mitaoe.ac.in</p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="mt-auto pt-8 border-t border-white/10">
                  <p className="text-white/60 text-sm m-0">
                    Department of Computer Engineering<br />
                    Second Year B.Tech Prototyping Project 2025–2026
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-[#D1E7DD]/30">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-[#0F5132] mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-[#D1E7DD] focus:border-[#0F5132] focus:ring-2 focus:ring-[#0F5132]/20 outline-none transition-all bg-[#F8F9FA]"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[#0F5132] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-[#D1E7DD] focus:border-[#0F5132] focus:ring-2 focus:ring-[#0F5132]/20 outline-none transition-all bg-[#F8F9FA]"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-[#0F5132] mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-[#D1E7DD] focus:border-[#0F5132] focus:ring-2 focus:ring-[#0F5132]/20 outline-none transition-all bg-[#F8F9FA]"
                      placeholder="What is this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[#0F5132] mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-[#D1E7DD] focus:border-[#0F5132] focus:ring-2 focus:ring-[#0F5132]/20 outline-none transition-all resize-none bg-[#F8F9FA]"
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#0F5132] to-[#1F2937] text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <span>Send Message</span>
                    <Send className="size-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
