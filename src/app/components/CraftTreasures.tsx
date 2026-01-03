import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router-dom';

export function CraftTreasures() {
  return (
    <section className="container mx-auto px-6 py-20">
      {/* Title */}
      <h2 className="text-5xl text-center mb-16 font-serif italic tracking-wide text-[#1a3a5c]">
        Craft Treasures
      </h2>
      
      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {/* Left: Large Single Image */}
        <Link to="/shop" className="relative group cursor-pointer overflow-hidden rounded-sm border border-gray-300">
          <div className="aspect-[3/4]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1762764214015-d5c22646465b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBoYW5kaWNyYWZ0JTIwdGV4dGlsZXN8ZW58MXx8fHwxNzY2NzU4MTYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Craft treasure"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-tl-[64px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[0px] m-[0px]"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent text-[15px]">
            <p className="text-white text-sm uppercase tracking-wider">Shop</p>
          </div>
        </Link>
        
        {/* Right: Two Stacked Images */}
        <div className="flex flex-col gap-6">
          {/* Top Right Image */}
          <Link to="/shop" className="relative group cursor-pointer overflow-hidden rounded-sm border border-gray-300">
            <div className="aspect-[16/10]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMHBvdHRlcnklMjBjcmFmdHxlbnwxfHx8fDE3NjY3NTgxNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Craft treasure"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
              <p className="text-white text-sm uppercase tracking-wider">Shop</p>
            </div>
          </Link>
          
          {/* Bottom Right Image */}
          <Link to="/shop" className="relative group cursor-pointer overflow-hidden rounded-sm border border-gray-300">
            <div className="aspect-[16/10]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1715374033196-0ff662284a7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGpld2VscnklMjBjcmFmdHN8ZW58MXx8fHwxNzY2NzU2NTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Craft treasure"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-tl-[0px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[64px] mx-[0px] my-[10px]"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent rounded-tl-[0px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[64px]">
              <p className="text-white text-sm uppercase tracking-wider">Shop</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}