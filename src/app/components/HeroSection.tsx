import { Play } from 'lucide-react';
import { Button } from './ui/button';

export function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl mb-6 text-gray-800">
            How is product also Made <span className="text-gray-500">(process)</span>
          </h2>
          
          <div className="relative aspect-video bg-gray-100 rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500">
            <img 
              src="https://images.unsplash.com/photo-1661069373372-597c0fa53808?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbG9vbSUyMHdlYXZpbmd8ZW58MXx8fHwxNzY2NjQ2NTE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Artisan at work"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
              <Button size="lg" className="rounded-full w-16 h-16 p-0 group-hover:scale-110 transition-transform duration-300">
                <Play className="w-6 h-6 fill-white" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}