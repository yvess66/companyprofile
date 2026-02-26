export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="/images/about-us.jpg" 
          alt="About Us" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-600/30 to-gray-800/30"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="animate-slide-up">
            <h2 className="text-7xl font-bold mb-6 text-white drop-shadow-2xl">About Us</h2>
            <p className="text-2xl font-bold text-white/90 mb-8">PT Sidik Mitra Sejahtera - Trusted IT Solutions & System Integration</p>
            <div className="inline-block bg-white/10 backdrop-blur-lg rounded-full px-8 py-4 border border-white/20">
              <p className="text-white text-lg font-medium">Information Technology & System Integration Solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 space-y-20">

          {/* Company Story */}
          <div className="grid lg:grid-cols4 gap-12 items-center">
            <div className="about-card glass-effect rounded-3xl p-8 transition-all duration-500 animate-fade-in">
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 animate-pulse-slow">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
              <p className="text-white/80 leading-relaxed text-lg">
                PT Sidik Mitra Sejahtera is a company engaged in information technology and system integration. 
                Established in 2021, we are part of PT Anugerah Bintang Sejahtera, a trusted contractor company established in 2006.
              </p>
              <p className="text-white/80 leading-relaxed text-lg mt-4">
                We serve clients from government institutions, State-owned Enterprises, and well-known private companies. 
                From the beginning, we have focused on serving IT and CCTV needs (hardware & software) and providing solutions 
                to meet customer requirements with professionalism and innovation.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold text-white">2021</div>
                  <div className="text-white/70 text-sm">Founded</div>
                </div>
              </div>
            </div>
            <div className="about-card glass-effect rounded-3xl p-8 transition-all duration-500 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="relative overflow-hidden rounded-2xl h-80">
                <img src="/images/about-us.jpg" alt="Company" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-2xl font-bold text-white mb-2">Our Mission</h4>
                  <p className="text-white/80 text-sm">Building secure, effective, and sustainable IT solutions to support client growth.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="text-center mb-16 animate-slide-up">
            <h3 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">Our Core Values</h3>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">Values that form the foundation of every decision and action we take</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Integrity */}
            <div className="about-card glass-effect rounded-3xl p-6 text-center transition-all duration-500 animate-fade-in" style={{animationDelay: '0.1s'}}>
              <div className="bg-gray-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse-slow">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Integrity</h4>
              <p className="text-white/80 text-sm">Honesty and responsibility are the foundation of every step we take.</p>
            </div>

            {/* Innovation */}
            <div className="about-card glass-effect rounded-3xl p-6 text-center transition-all duration-500 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="bg-gray-300 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse-slow">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
              <p className="text-white/80 text-sm">Always seeking new ways to create added value for clients.</p>
            </div>

            {/* Collaboration */}
            <div className="about-card glass-effect rounded-3xl p-6 text-center transition-all duration-500 animate-fade-in" style={{animationDelay: '0.5s'}}>
              <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse-slow">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Collaboration</h4>
              <p className="text-white/80 text-sm">Strong teamwork is the key to our success.</p>
            </div>

            {/* Excellence */}
            <div className="about-card glass-effect rounded-3xl p-6 text-center transition-all duration-500 animate-fade-in" style={{animationDelay: '0.7s'}}>
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse-slow">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M5 3l14 9-14 9V3z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Excellence</h4>
              <p className="text-white/80 text-sm">Delivering the best results in every project we undertake.</p>
            </div>
          </div>

          {/* Culture Section */}
          <div className="about-card glass-effect rounded-3xl p-12 text-center transition-all duration-500 animate-fade-in" style={{animationDelay: '0.9s'}}>
            <div className="bg-gray-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-slow">
              <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-4xl font-bold text-white mb-6">Our Commitment</h3>
            <p className="text-xl text-white/80 leading-relaxed max-w-4xl mx-auto">
              PT Sidik Mitra Sejahtera is committed to delivering high-quality information technology and system integration solutions. 
              We prioritize customer satisfaction with professional service, responsive technical support, and continuous innovation 
              in every project we undertake.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
