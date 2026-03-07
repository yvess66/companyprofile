export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="/images/index.jpg" 
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
        <div className="max-w-5xl mx-auto px-4">

          <div className="about-card glass-effect rounded-3xl p-8 sm:p-12 transition-all duration-500 animate-fade-in">
            
            {/* Our Story */}
            <div className="mb-12">
              <h3 className="text-4xl font-bold text-white mb-6">Our Story</h3>
              <p className="text-white/80 leading-relaxed text-lg mb-4">
                PT Sidik Mitra Sejahtera is a company engaged in information technology and system integration. 
                Established in 2021, we are part of PT Anugerah Bintang Sejahtera, a trusted contractor company established in 2006.
              </p>
              <p className="text-white/80 leading-relaxed text-lg">
                We serve clients from government institutions, State-owned Enterprises, and well-known private companies. 
                From the beginning, we have focused on serving IT and CCTV needs (hardware & software) and providing solutions 
                to meet customer requirements with professionalism and innovation.
              </p>
            </div>

            <div className="border-t border-white/10 my-10"></div>

            {/* Our Mission */}
            <div className="mb-12">
              <h3 className="text-4xl font-bold text-white mb-6">Our Mission</h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative overflow-hidden rounded-2xl h-64">
                  <img src="/images/about-us.jpg" alt="Mission" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>
                <p className="text-white/80 leading-relaxed text-lg">
                  Building secure, effective, and sustainable IT solutions to support client growth. We are dedicated to 
                  delivering excellence through innovation, reliability, and professional service in every project we undertake.
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 my-10"></div>

            {/* Our Team */}
            <div>
              <h3 className="text-4xl font-bold text-white mb-6">Our Team</h3>
              <div className="bg-white/5 rounded-2xl p-8 mb-6 backdrop-blur-sm border border-white/10">
                <p className="text-white/90 text-center italic leading-relaxed text-lg">
                  "Build a solid team is certainly not easy. Therefore, we believe that our dedicated and outstanding team 
                  can meet your expectation."
                </p>
              </div>
              <p className="text-white/80 leading-relaxed text-lg text-center">
                Our team consists of experienced professionals who are passionate about technology and committed to 
                delivering exceptional results for our clients.
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
