import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="glass-effect text-white border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-3 mb-4 justify-center sm:justify-start">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold">MyCompany</h3>
            </div>
            <p className="text-white/70 text-sm">
              Building a digital future with you through innovation and cutting-edge technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-white/70 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-white/70 hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/70 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/vision" className="text-white/70 hover:text-white transition-colors">
                  Vision
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-white/70">Web Development</span></li>
              <li><span className="text-white/70">Mobile Apps</span></li>
              <li><span className="text-white/70">Cloud Solutions</span></li>
              <li><span className="text-white/70">Consulting</span></li>
            </ul>
          </div>

          {/* Contact */} 
          <div className="text-center sm:text-left"> 
            <h4 className="font-bold text-lg mb-4">Contact</h4> 
            <ul className="space-y-2 text-sm"> 
            <li className="flex items-center gap-2 text-white/70 justify-center sm:justify-start">
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
          </path>
        </svg>

        <span className="break-words">
          patriciakinanti.sms18@gmail.com
        </span>
      </li> 
              <li className="flex items-center gap-2 text-white/70 justify-center sm:justify-start"> 
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                </path> 
                </svg> +62 813 8083 4908 </li> </ul> </div>

          {/* Our References */}
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-lg mb-4">Our References</h4>
            <img
              src="/images/jasamarga2.png"
              alt="Jasa Marga"
              className="mx-auto sm:mx-0 h-22 w-auto object-contain"
            />
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-base sm:text-lg font-medium mb-2">
            PT Sidik Mitra Sejahtera. All Rights Reserved.
          </p>
          <p className="text-white/70 text-sm">
            Made with ❤️ for a better digital future
          </p>
        </div>
      </div>
    </footer>
  );
}
