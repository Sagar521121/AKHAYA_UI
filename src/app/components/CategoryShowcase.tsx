import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CategoryShowcase() {
  return (
    <section className="container mx-auto px-[24px] py-[22px]">
      <div className="bg-[#1A3A35] rounded-2xl overflow-hidden relative min-h-[400px] flex items-center justify-center">
        {/* Top Left Image */}
        <div className="absolute top-8 left-8 w-32 h-44 rounded-lg overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1535208632259-841d129a6af5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzYXJlZSUyMHdvbWFufGVufDF8fHx8MTc2Njg3MTc3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Saree Collection"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Left Image */}
        <div className="absolute bottom-8 left-16 w-28 h-40 rounded-lg overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1756483510767-35245638c057?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBkcmVzcyUyMHdvbWFuJTIwZWxlZ2FudHxlbnwxfHx8fDE3NjY4NzE3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Dress Collection"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Image */}
        <div className="absolute top-12 right-8 w-36 h-48 rounded-lg overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1615957579676-d1db3be6effe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBqZXdlbGxlcnklMjBuZWNrbGFjZXxlbnwxfHx8fDE3NjY4NzE3NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Jewellery Collection"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Center Text Content */}
        <div className="relative z-10 text-center space-y-4">
          <Link 
            to="/category/sarees"
            className="inline-block text-[#8B9D93] text-2xl tracking-widest uppercase hover:text-gray-200 transition-colors"
          >
            Sarees
          </Link>
          
          <Link 
            to="/category/dresses"
            className="inline-flex items-center gap-3 text-white text-3xl tracking-wide uppercase hover:text-gray-200 transition-colors group"
          >
            <span>Dresses</span>
            <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white group-hover:text-[#1A3A35] transition-all">
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
          
          <Link 
            to="/category/jewellery"
            className="inline-block text-[#7A8B82] text-2xl tracking-widest uppercase hover:text-gray-200 transition-colors"
          >
            Jewellery
          </Link>
        </div>
      </div>
    </section>
  );
}