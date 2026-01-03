import { useState } from 'react';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setIsSubscribed(false);
      }, 3000);
    }
  };

  return (
    <section className="bg-[#F5F1E8] py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-4 tracking-wide">Join Our Community</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to receive exclusive access to new collections, artisan stories, and special offers.
          </p>
          
          {isSubscribed ? (
            <div className="bg-green-50 text-green-800 py-4 px-6 rounded-lg animate-fade-in shadow-md">
              ✓ Thank you for subscribing! Check your inbox for exclusive offers.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 max-w-md px-6 py-3 border border-gray-300 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/10 transition-all duration-300"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-black text-white hover:bg-gray-800 hover:shadow-lg hover:scale-105 transition-all duration-300 active:scale-95"
              >
                Subscribe
              </button>
            </form>
          )}
          
          <p className="text-xs text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}