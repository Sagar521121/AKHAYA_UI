import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import footerImage from 'figma:asset/c55561becc377625089847a1220f3f54e9c67aac.png';

export function Footer() {
  const footerLinks = {
    apparel: {
      title: 'Apparel',
      links: ['Women', 'Men']
    },
    jewelry: {
      title: 'Jewelry',
      links: ['Earrings', 'Necklace', 'Rings', 'Cuffs & Bracelet', 'Bangles', 'Anklets']
    },
    topPages: {
      title: 'Top Pages',
      links: [
        'Cushion Cover',
        'Bags & Purses',
        'Home Decor',
        'Kurta',
        'Men Kurta',
        'Sarees',
        'Duppatta',
        'Stoles',
        'Mojris & Juttis',
        'Puja'
      ]
    },
    trending: {
      title: 'Trending',
      links: [
        'Buy Table Linen Online',
        'Buy Men Dress Online',
        'Buy Stoles Online',
        'Buy wall accents Online',
        'Buy Kolhapuri & Jutis Online'
      ]
    },
    usefulLinks: {
      title: 'Useful Links',
      links: [
        'About Jaipyore',
        'Blog',
        'Careers',
        'FAQs',
        'Offers Terms & Conditions',
        'Shipping Policy',
        'Return/Refund Policy',
        'Cancellation Policy',
        'Privacy Policy',
        'Customer Support',
        'Store Locator',
        'Terms of Use'
      ]
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#F5F1E8] via-[#EAE5D8] to-[#E0DBD0] border-t border-gray-200 relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Newsletter Section */}
      <div className="border-b border-gray-300 bg-white/50 backdrop-blur-md relative">
        {/* Decorative Top Border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-black/10 to-transparent"></div>
        
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-2xl mx-auto text-center relative">
            {/* Decorative Elements */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
            
            <div className="inline-block mb-5 px-5 py-2 bg-gradient-to-r from-black/5 to-black/10 rounded-full shadow-sm border border-black/10 backdrop-blur-sm">
              <span className="text-xs tracking-[0.2em] uppercase text-gray-700 font-semibold flex items-center gap-2">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Newsletter
              </span>
            </div>
            
            <h3 className="text-4xl mb-5 tracking-tight font-semibold bg-gradient-to-r from-gray-900 via-black to-gray-900 bg-clip-text text-transparent">
              Join Our Artisan Community
            </h3>
            
            <p className="text-gray-600 mb-10 leading-relaxed text-lg max-w-lg mx-auto">
              Subscribe to receive updates on new collections, exclusive offers, and stories from our artisans
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto group relative">
              <div className="relative flex-1">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-200/30 via-pink-200/30 to-amber-200/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="relative w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all shadow-md hover:border-gray-400 hover:shadow-lg bg-white"
                  required
                />
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <button
                type="submit"
                className="relative px-10 py-4 bg-gradient-to-r from-gray-900 to-black text-white rounded-xl hover:from-black hover:to-gray-800 transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl font-semibold overflow-hidden group/btn"
              >
                <span className="relative z-10">Subscribe</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
              </button>
            </form>
            
            <div className="flex items-center justify-center gap-2 mt-5 text-xs text-gray-500">
              <svg className="w-3.5 h-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              We respect your privacy. Unsubscribe anytime. No spam, guaranteed.
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-20">
          {/* Apparel */}
          <div className="space-y-1 group/section">
            <div className="mb-6 relative inline-block">
              <h4 className="font-semibold text-gray-900 tracking-tight text-lg">{footerLinks.apparel.title}</h4>
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-black to-transparent group-hover/section:w-full transition-all duration-500"></div>
            </div>
            <ul className="space-y-3.5">
              {footerLinks.apparel.links.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-gray-600 hover:text-black transition-all duration-300 hover:translate-x-2 inline-flex items-center gap-2 relative group/link">
                    <span className="w-0 h-0.5 bg-black group-hover/link:w-4 transition-all duration-300"></span>
                    {link}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-black/20 transition-all duration-300 group-hover/link:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Jewelry */}
          <div className="space-y-1 group/section">
            <div className="mb-6 relative inline-block">
              <h4 className="font-semibold text-gray-900 tracking-tight text-lg">{footerLinks.jewelry.title}</h4>
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-black to-transparent group-hover/section:w-full transition-all duration-500"></div>
            </div>
            <ul className="space-y-3.5">
              {footerLinks.jewelry.links.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-gray-600 hover:text-black transition-all duration-300 hover:translate-x-2 inline-flex items-center gap-2 relative group/link">
                    <span className="w-0 h-0.5 bg-black group-hover/link:w-4 transition-all duration-300"></span>
                    {link}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-black/20 transition-all duration-300 group-hover/link:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Pages */}
          <div className="space-y-1 group/section">
            <div className="mb-6 relative inline-block">
              <h4 className="font-semibold text-gray-900 tracking-tight text-lg">{footerLinks.topPages.title}</h4>
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-black to-transparent group-hover/section:w-full transition-all duration-500"></div>
            </div>
            <ul className="space-y-3.5">
              {footerLinks.topPages.links.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-gray-600 hover:text-black transition-all duration-300 hover:translate-x-2 inline-flex items-center gap-2 relative group/link">
                    <span className="w-0 h-0.5 bg-black group-hover/link:w-4 transition-all duration-300"></span>
                    {link}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-black/20 transition-all duration-300 group-hover/link:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Trending */}
          <div className="space-y-1 group/section">
            <div className="mb-6 relative inline-block">
              <h4 className="font-semibold text-gray-900 tracking-tight text-lg flex items-center gap-2">
                {footerLinks.trending.title}
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-sm animate-pulse">
                  HOT
                </span>
              </h4>
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-black to-transparent group-hover/section:w-full transition-all duration-500"></div>
            </div>
            <ul className="space-y-3.5">
              {footerLinks.trending.links.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-gray-600 hover:text-black transition-all duration-300 hover:translate-x-2 inline-flex items-center gap-2 relative group/link">
                    <span className="w-0 h-0.5 bg-black group-hover/link:w-4 transition-all duration-300"></span>
                    {link}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-black/20 transition-all duration-300 group-hover/link:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links & Social */}
          <div className="space-y-1 group/section">
            <div className="mb-6 relative inline-block">
              <h4 className="font-semibold text-gray-900 tracking-tight text-lg">{footerLinks.usefulLinks.title}</h4>
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-black to-transparent group-hover/section:w-full transition-all duration-500"></div>
            </div>
            <ul className="space-y-3.5 mb-10">
              {footerLinks.usefulLinks.links.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-gray-600 hover:text-black transition-all duration-300 hover:translate-x-2 inline-flex items-center gap-2 relative group/link">
                    <span className="w-0 h-0.5 bg-black group-hover/link:w-4 transition-all duration-300"></span>
                    {link}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-black/20 transition-all duration-300 group-hover/link:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Media Icons */}
            <div className="mb-10">
              <h5 className="text-sm font-semibold mb-5 text-gray-900 flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                </svg>
                Follow Us
              </h5>
              <div className="flex items-center gap-3 flex-wrap">
                <a 
                  href="#" 
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-white border-2 border-gray-300 text-gray-600 hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-pink-500/30 active:scale-95 relative overflow-hidden group/social"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a 
                  href="#" 
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-white border-2 border-gray-300 text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/30 active:scale-95"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 relative z-10" />
                </a>
                <a 
                  href="#" 
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-white border-2 border-gray-300 text-gray-600 hover:bg-sky-400 hover:text-white hover:border-sky-400 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-sky-400/30 active:scale-95"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4 relative z-10" />
                </a>
                <a 
                  href="#" 
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-white border-2 border-gray-300 text-gray-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-red-500/30 active:scale-95"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4 relative z-10" />
                </a>
                <a 
                  href="#" 
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-white border-2 border-gray-300 text-gray-600 hover:bg-red-700 hover:text-white hover:border-red-700 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-red-700/30 active:scale-95"
                  aria-label="Pinterest"
                >
                  <svg className="w-4 h-4 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm rounded-xl p-5 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-gray-300 relative overflow-hidden group/contact">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-2xl opacity-0 group-hover/contact:opacity-100 transition-opacity duration-500"></div>
              <h5 className="text-sm font-semibold mb-3 text-gray-900 flex items-center gap-2 relative z-10">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center shadow-sm">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                Contact Us
              </h5>
              <p className="text-xs text-gray-600 mb-2 relative z-10">Questions? Mail us at</p>
              <a href="mailto:hello@akhaya.com" className="text-sm text-black hover:text-blue-600 font-semibold inline-flex items-center gap-2 group/mail relative z-10">
                hello@akhaya.com
                <svg className="w-4 h-4 transform group-hover/mail:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Separator */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
        </div>

        {/* Bottom Section - Copyright and Legal */}
        <div className="pb-12">
          {/* Copyright and Legal */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t-2 border-gray-300 relative">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-600 font-medium mb-2">
                © {new Date().getFullYear()} <span className="text-black font-bold tracking-wide">AKHAYA</span>. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 italic">Celebrating Indian craftsmanship with pride since 2020</p>
            </div>
            <div className="flex items-center gap-8 text-sm flex-wrap justify-center">
              <a href="#" className="text-gray-600 hover:text-black transition-all duration-200 font-medium relative group/legal">
                Privacy Policy
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-black to-transparent transition-all duration-300 group-hover/legal:w-full"></span>
              </a>
              <span className="text-gray-300">•</span>
              <a href="#" className="text-gray-600 hover:text-black transition-all duration-200 font-medium relative group/legal">
                Terms of Service
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-black to-transparent transition-all duration-300 group-hover/legal:w-full"></span>
              </a>
              <span className="text-gray-300">•</span>
              <a href="#" className="text-gray-600 hover:text-black transition-all duration-200 font-medium relative group/legal">
                Return Policy
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-black to-transparent transition-all duration-300 group-hover/legal:w-full"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}