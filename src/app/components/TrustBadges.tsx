import { Award, Heart, Users, Sparkles } from 'lucide-react';

export function TrustBadges() {
  return (
    <section className="container mx-auto px-6 py-16 border-y border-gray-200">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Award className="w-10 h-10" />
          </div>
          <h4 className="mb-2">Certified Authentic</h4>
          <p className="text-sm text-gray-600">Every piece verified by artisan experts</p>
        </div>
        
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Heart className="w-10 h-10" />
          </div>
          <h4 className="mb-2">Ethically Sourced</h4>
          <p className="text-sm text-gray-600">Fair trade & sustainable practices</p>
        </div>
        
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Users className="w-10 h-10" />
          </div>
          <h4 className="mb-2">Direct from Artisans</h4>
          <p className="text-sm text-gray-600">Supporting 500+ craftsmen families</p>
        </div>
        
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Sparkles className="w-10 h-10" />
          </div>
          <h4 className="mb-2">Heritage Quality</h4>
          <p className="text-sm text-gray-600">Centuries-old techniques preserved</p>
        </div>
      </div>
    </section>
  );
}
