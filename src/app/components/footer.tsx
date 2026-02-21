import { Leaf, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0F5132] to-[#1F2937] text-white py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="bg-white/10 backdrop-blur-md p-2 rounded-xl">
              <Leaf className="size-6 text-[#A3CFBB]" />
            </div>
            <div>
              <p className="text-lg m-0">Herbal pH-Balanced Hand Wash</p>
              <p className="text-sm text-white/60 m-0">Computer Engineering Prototype</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-white/80 m-0 flex items-center gap-2 justify-center md:justify-end">
              Made with <Heart className="size-4 text-[#A3CFBB] fill-[#A3CFBB]" /> by Computer Engineering Students
            </p>
            <p className="text-sm text-white/60 m-0 mt-1">
              © 2025–2026 MIT Academy of Engineering, Alandi, Pune
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-sm text-white/50 m-0">
            Second Year Prototype Project | Department of Chemical Engineering
          </p>
        </div>
      </div>
    </footer>
  );
}
