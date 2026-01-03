import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  id?: string;
  image: string;
  title: string;
  region: string;
  price?: number;
  showMoreInfo?: boolean;
  link?: string;
}

export function ProductCard({ id, image, title, region, price, showMoreInfo = false, link }: ProductCardProps) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (link) {
      // Use the provided link directly
      navigate(link);
    } else if (id) {
      // Navigate to product detail page using the id
      navigate(`/product/${id}`);
    } else {
      // Fallback: Create a URL-friendly ID from the title
      const productId = title.toLowerCase().replace(/\s+/g, '-');
      navigate(`/product/${productId}`);
    }
  };

  return (
    <div 
      onClick={handleCardClick}
      className="group bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500 cursor-pointer hover:-translate-y-1"
    >
      <div className="aspect-[4/5] overflow-hidden bg-gray-50 relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500" />
      </div>
      
      <div className="p-5">
        <h3 className="text-lg mb-1 group-hover:text-gray-900 transition-colors duration-300">{title}</h3>
        <p className="text-sm text-gray-500 mb-3">{region}</p>
        
        {price && (
          <p className="text-lg font-semibold mb-3">₹{price.toLocaleString('en-IN')}</p>
        )}
      </div>
    </div>
  );
}