export default function ObjectivePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/index.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-60 animate-fade-in"
          alt="Business Objective"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-600/30 to-gray-800/30"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="animate-slide-up">
            <h2 className="text-7xl font-bold mb-6 text-white drop-shadow-2xl">
              Business Objective
            </h2>
            <p className="text-2xl text-white/90 mb-8">
              Goals • Focus • Sustainability
            </p>
            <div className="inline-block bg-white/10 backdrop-blur-lg rounded-full px-8 py-4 border border-white/20">
              <p className="text-white text-lg font-medium">
                Strategic roadmap towards long-term success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 space-y-20">
          {/* Main Objective */}
          <div className="objective-card glass-effect rounded-3xl p-12 transition-all duration-500 animate-fade-in">
            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mb-8 animate-pulse-slow">
              <svg
                className="w-10 h-10 text-black"
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
            <h3 className="text-4xl font-bold text-white mb-6">Our Objective</h3>
            <p className="text-xl text-white/80 leading-relaxed">
              We want to be the best and most trusted Information Technology
              service provider in Indonesia, especially in the CCTV field. In
              order to meet the needs of technological developments, we continue
              to innovate with our services to provide the best results for
              clients. In developing our services, we also discuss with our
              clients. We also provide regular training to our team for
              improvement and development of their skills.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
