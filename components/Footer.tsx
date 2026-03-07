import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="glass-effect text-white border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-3 mb-4 justify-center sm:justify-start">
              
              <h3 className="text-xl font-bold">Sidik Mitra Sejahtera</h3>
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
                <Link href="/products" className="text-white/70 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/vision" className="text-white/70 hover:text-white transition-colors">
                  Vision
                </Link>
              </li>
              <li>
                <Link href="/activities" className="text-white/70 hover:text-white transition-colors">
                  Activities
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
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
        </div>

        {/* Our References and Partners Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pb-8">
          {/* Our References */}
          <div className="text-center">
            <h4 className="font-bold text-lg mb-4">Our References</h4>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
              <img
                src="/images/JasaMarga Tollroad (1).png"
                alt="Jasa Marga"
                className="h-24 w-auto object-contain hover:scale-110 transition-transform"
              />
              <img
                src="/images/Korlantas (1).png"
                alt="Korlantas"
                className="h-24 w-auto object-contain hover:scale-110 transition-transform"
              />
              <img
                src="/images/Marga Sarana.png"
                alt="Marga Sarana"
                className="h-24 w-auto object-contain hover:scale-110 transition-transform"
              />
              <img
                src="/images/MLJ.png"
                alt="MLJ"
                className="h-24 w-auto object-contain hover:scale-110 transition-transform"
              />
            </div>
          </div>

          {/* Our Partners */}
          <div className="text-center">
            <h4 className="font-bold text-lg mb-4">Our Partners</h4>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
              <img
                src="/images/tplink (1).png"
                alt="TP-Link"
                className="h-12 w-auto object-contain hover:scale-110 transition-transform"
              />
              <img
                src="/images/hikvision 1.png"
                alt="Hikvision"
                className="h-12 w-auto object-contain hover:scale-110 transition-transform"
              />
              <img
                src="/images/mikrotik (1).png"
                alt="Mikrotik"
                className="h-12 w-auto object-contain hover:scale-110 transition-transform"
              />
              <img
                src="/images/dahua.png"
                alt="Dahua"
                className="h-12 w-auto object-contain hover:scale-110 transition-transform"
              />
              <img
                src="/images/belden(1).png"
                alt="Belden"
                className="h-12 w-auto object-contain hover:scale-110 transition-transform"
              />
              <img
                src="/images/indorack1.png"
                alt="Indorack"
                className="h-12 w-auto object-contain hover:scale-110 transition-transform"
              />
              <img
                src="/images/esit.png"
                alt="ESIT"
                className="h-12 w-auto object-contain hover:scale-110 transition-transform"
              />
              <img
                src="/images/komoto (1).png"
                alt="Komoto"
                className="h-12 w-auto object-contain hover:scale-110 transition-transform"
              />
              <img
                src="/images/tattile.png"
                alt="Tattile"
                className="h-12 w-auto object-contain hover:scale-110 transition-transform"
              />
              <img
                src="/images/zebra 1.png"
                alt="Zebra"
                className="h-12 w-auto object-contain hover:scale-110 transition-transform"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-base sm:text-lg font-medium mb-2">
            Copyright © 2026 PT Sidik Mitra Sejahtera. All Rights Reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
}
