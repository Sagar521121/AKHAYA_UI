import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router-dom';

export function EditorialSection() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Healing Harmony */}
        <Link to="/healing-harmony" className="relative h-[500px] md:h-[600px] overflow-hidden group cursor-pointer">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlzdGFsJTIwamV3ZWxyeSUyMGFtZXRoeXN0fGVufDF8fHx8MTc2NjgyMzI0N3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Healing Harmony"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
            <h2 className="text-4xl md:text-5xl mb-4 font-serif">Healing Harmony</h2>
            <div className="flex items-center gap-2 text-sm uppercase tracking-wider hover:gap-3 transition-all">
              <span>SHOP OUR EDIT</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </Link>

        {/* Rugs */}
        <Link to="/rugs" className="relative h-[500px] md:h-[600px] overflow-hidden group cursor-pointer">
          <img 
            src="https://images.unsplash.com/photo-1764967411677-282e1d0fce33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtZW4lMjB0cmFkaXRpb25hbCUyMGNsb3RoaW5nfGVufDF8fHx8MTc2Njg2NzcxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Men's Collection"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
            <h2 className="text-4xl md:text-5xl mb-4 font-serif">Rugs</h2>
            <div className="flex items-center gap-2 text-sm uppercase tracking-wider hover:gap-3 transition-all">
              <span>SHOP OUR EDIT</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}