import { Link } from 'react-router-dom';

export function HomeDecorShowcase() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Large Image */}
        <Link 
          to="/category/home-decor" 
          className="relative h-[600px] overflow-hidden group cursor-pointer rounded-lg"
        >
          <img 
            src="https://images.unsplash.com/photo-1762173886363-de541417e48e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBob21lJTIwZGVjb3IlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjY5MTQ2Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Home Decor"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent">
            <h3 className="text-white text-3xl md:text-4xl tracking-wide">Home Decor</h3>
          </div>
        </Link>

        {/* Right: 2x2 Grid */}
        <div className="grid grid-cols-2 gap-6">
          {/* Pottery */}
          <Link 
            to="/category/pottery" 
            className="relative h-[288px] overflow-hidden group cursor-pointer rounded-lg"
          >
            <img 
              src="https://images.unsplash.com/photo-1642582589333-c83f02edf256?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMHBvdHRlcnklMjB2YXNlfGVufDF8fHx8MTc2NjkxNDY4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Pottery"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <h4 className="text-white text-xl tracking-wide">Pottery</h4>
            </div>
          </Link>

          {/* Wall Art */}
          <Link 
            to="/category/wall-art" 
            className="relative h-[288px] overflow-hidden group cursor-pointer rounded-lg"
          >
            <img 
              src="https://images.unsplash.com/photo-1626102212612-10c8a4868e63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWNvcmF0aXZlJTIwd2FsbCUyMGFydHxlbnwxfHx8fDE3NjY5MTQ2ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Wall Art"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <h4 className="text-white text-xl tracking-wide">Wall Art</h4>
            </div>
          </Link>

          {/* Baskets */}
          <Link 
            to="/category/baskets" 
            className="relative h-[288px] overflow-hidden group cursor-pointer rounded-lg"
          >
            <img 
              src="https://images.unsplash.com/photo-1760182200277-fae00dfb149f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kd292ZW4lMjBiYXNrZXR8ZW58MXx8fHwxNzY2OTE0NjgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Baskets"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <h4 className="text-white text-xl tracking-wide">Baskets</h4>
            </div>
          </Link>

          {/* Candle Holders */}
          <Link 
            to="/category/candle-holders" 
            className="relative h-[288px] overflow-hidden group cursor-pointer rounded-lg"
          >
            <img 
              src="https://images.unsplash.com/photo-1766393030360-82e57086510a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFzcyUyMGNhbmRsZSUyMGhvbGRlcnxlbnwxfHx8fDE3NjY5MTQ2ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Candle Holders"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <h4 className="text-white text-xl tracking-wide">Candle Holders</h4>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}