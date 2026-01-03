import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Category {
  id: number;
  name: string;
  image: string;
}

export function LuxuryCategoryNav() {
  const navigate = useNavigate();
  
  const categories: Category[] = [
    {
      id: 1,
      name: 'FABRICS',
      image: 'https://images.unsplash.com/photo-1762764214015-d5c22646465b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmYWJyaWNzJTIwdGV4dGlsZXN8ZW58MXx8fHwxNzY2ODIwNDc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 2,
      name: 'SAREES',
      image: 'https://images.unsplash.com/photo-1739429943399-eed0d4e74e19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzYXJlZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzY2ODIwNDc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 3,
      name: 'KURTAS',
      image: 'https://images.unsplash.com/photo-1657367144068-935d1d9e5e15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBrdXJ0YSUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc2NjgxMDI0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 4,
      name: 'BED COVERS',
      image: 'https://images.unsplash.com/photo-1640109478916-f445f8f19b11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWQlMjBjb3ZlcnN8ZW58MXx8fHwxNzY2ODIwNDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 5,
      name: 'CUSHION COVERS',
      image: 'https://images.unsplash.com/photo-1648754016717-449b9bb98ba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWNvcmF0aXZlJTIwY3VzaGlvbiUyMGNvdmVyc3xlbnwxfHx8fDE3NjY4MjA0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 6,
      name: 'DUPATTAS',
      image: 'https://images.unsplash.com/photo-1762780700690-3fbb53fcd4e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBkdXBhdHRhJTIwc2NhcmZ8ZW58MXx8fHwxNzY2NzU1NTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 7,
      name: 'STOLES',
      image: 'https://images.unsplash.com/photo-1510574457807-3d9bf494ff6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXNobWluYSUyMHN0b2xlJTIwc2hhd2x8ZW58MXx8fHwxNzY2ODIwNDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 8,
      name: "MEN'S SHIRTS",
      image: 'https://images.unsplash.com/photo-1740711152088-88a009e877bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwbGluZW4lMjBzaGlydHxlbnwxfHx8fDE3NjY4MjA0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 9,
      name: 'SHOULDER BAGS',
      image: 'https://images.unsplash.com/photo-1760624294582-5341f33f9fa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwc2hvdWxkZXIlMjBiYWd8ZW58MXx8fHwxNzY2ODIwNDgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 10,
      name: 'SLING BAGS',
      image: 'https://images.unsplash.com/photo-1760624294514-ca40aafe3d96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwc2xpbmclMjBiYWd8ZW58MXx8fHwxNzY2ODIwNDgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('luxury-category-slider');
    if (container) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-16 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="relative group">
          {/* Left Arrow - Hidden on mobile, visible on hover on desktop */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white p-3 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-5"
            aria-label="Previous categories"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>

          {/* Scrollable Container */}
          <div
            id="luxury-category-slider"
            className="flex gap-8 overflow-x-auto scroll-smooth scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex-shrink-0 w-[160px] cursor-pointer group/item"
                onClick={() => navigate(`/category/${category.name.toLowerCase()}`)}
              >
                {/* Image Container */}
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <div className="aspect-square bg-gray-50">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-all duration-700 ease-out group-hover/item:scale-110"
                    />
                  </div>
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover/item:bg-black/5 transition-all duration-500" />
                </div>

                {/* Category Label */}
                <p className="text-center text-xs tracking-[0.15em] text-gray-800 transition-colors duration-300 group-hover/item:text-gray-900">
                  {category.name}
                </p>
              </div>
            ))}
          </div>

          {/* Right Arrow - Hidden on mobile, visible on hover on desktop */}
          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white p-3 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-5"
            aria-label="Next categories"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Hide scrollbar globally for this component */}
      <style>{`
        #luxury-category-slider::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}