export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] sm:h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/index.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-60 animate-fade-in"
          alt="Products"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-600/30 to-gray-800/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <div className="mb-4 inline-block">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                Our Services
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-white drop-shadow-2xl">
              Our Products Solutions
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 px-4">
              Solutions • Innovation • Excellence
            </p>
            <div className="inline-block bg-white/10 backdrop-blur-lg rounded-full px-6 sm:px-8 py-3 sm:py-4 border border-white/20 max-w-2xl mx-4">
              <p className="text-white text-sm sm:text-base lg:text-lg font-medium">
                Comprehensive technology solutions for your business needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product List */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h3 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
              What We Do
            </h3>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Comprehensive services designed to meet your technology and business
              needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Safety & Violation Analytics */}
            <div
              className="product-card glass-effect rounded-3xl p-8 transition-all duration-500 animate-fade-in"
              style={{animationDelay: '0.1s'}}
            >
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 animate-pulse-slow">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">
                Safety & Violation Analytics
              </h4>
              <p className="text-white/80 leading-relaxed">
                A science that studies the underlying causes of work accidents.
                Provides a framework for assessing, measuring, monitoring, and
                directing employee health and safety policies.
              </p>
            </div>

            {/* Smart & Safe City Solution */}
            <div
              className="product-card glass-effect rounded-3xl p-8 transition-all duration-500 animate-fade-in"
              style={{animationDelay: '0.2s'}}
            >
              <div className="bg-gray-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 animate-pulse-slow">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">
                Smart & Safe City Solution
              </h4>
              <p className="text-white/80 leading-relaxed">
                A place where traditional networks and services become more
                efficient with the use of digital solutions for the benefit of
                residents and their businesses.
              </p>
            </div>

            {/* Consultant of IT & CCTV */}
            <div
              className="product-card glass-effect rounded-3xl p-8 transition-all duration-500 animate-fade-in"
              style={{animationDelay: '0.3s'}}
            >
              <div className="bg-gray-300 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 animate-pulse-slow">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">
                Consultant of IT & CCTV
              </h4>
              <p className="text-white/80 leading-relaxed">
                A consulting service that helps clients assess various technology
                strategies and align their technology strategy with their business
                strategy or processes.
              </p>
            </div>

            {/* Installation Service */}
            <div
              className="product-card glass-effect rounded-3xl p-8 transition-all duration-500 animate-fade-in"
              style={{animationDelay: '0.4s'}}
            >
              <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 animate-pulse-slow">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">
                Installation Service
              </h4>
              <p className="text-white/80 leading-relaxed">
                Additional services for the provision of Machinery and Equipment
                for Facilities, provided based on contract requirements and
                specifications.
              </p>
            </div>

            {/* Hardware & Software Solution */}
            <div
              className="product-card glass-effect rounded-3xl p-8 transition-all duration-500 animate-fade-in"
              style={{animationDelay: '0.5s'}}
            >
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 animate-pulse-slow">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">
                Hardware & Software Solution
              </h4>
              <p className="text-white/80 leading-relaxed">
                Physical and visible components of the system combined with a set
                of instructions that enable hardware to perform specific tasks
                efficiently.
              </p>
            </div>

            {/* Network Solution */}
            <div
              className="product-card glass-effect rounded-3xl p-8 transition-all duration-500 animate-fade-in"
              style={{animationDelay: '0.6s'}}
            >
              <div className="bg-gray-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 animate-pulse-slow">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                  />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">Network Solution</h4>
              <p className="text-white/80 leading-relaxed">
                Providing web services such as web hosting, website design and
                online marketing, including search engine optimization and
                pay-per-click management.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
