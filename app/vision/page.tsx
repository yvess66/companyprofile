export default function VisionPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/index.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-60 animate-fade-in"
          alt="Vision Mission"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-600/30 to-gray-800/30"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="animate-slide-up">
            <h2 className="text-7xl font-bold mb-6 text-white drop-shadow-2xl">
              Vision & Mission
            </h2>
            <p className="text-2xl text-white/90 mb-8">
              Our Direction • Goals • Commitment
            </p>
            <div className="inline-block bg-white/10 backdrop-blur-lg rounded-full px-8 py-4 border border-white/20">
              <p className="text-white text-lg font-medium">
                The vision and mission that guide every step we take
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Content */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 space-y-12">
          {/* Vision & Mission Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Vision Section */}
            <div className="vision-card glass-effect rounded-3xl p-12 transition-all duration-500 animate-fade-in">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mb-8">
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
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-white mb-6">Our Vision</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                Become a trusted company and provide the best solutions in the
                field of technology.
              </p>
            </div>

            {/* Mission Section */}
            <div className="vision-card glass-effect rounded-3xl p-12 transition-all duration-500 animate-fade-in">
              <div className="bg-gray-200 w-20 h-20 rounded-full flex items-center justify-center mb-8">
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
              <h3 className="text-4xl font-bold text-white mb-6">Our Mission</h3>
              <ul className="space-y-4 text-lg text-white/80">
                <li className="flex items-start space-x-3">
                  <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span>
                    To be a provider of the best products in the field of
                    technology
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span>
                    Accommodate the wants and needs of customers in order to
                    provide appropriate and fast solutions for customer
                    satisfaction
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Core Principles */}
          <div className="text-center mb-16 animate-slide-up">
            <h3 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Core Principles
            </h3>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Fundamental principles that guide every decision and
              action we take
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Innovation */}
            <div
              className="vision-card glass-effect rounded-3xl p-8 text-center transition-all duration-500 animate-fade-in"
              style={{animationDelay: '0.1s'}}
            >
              <div className="bg-gray-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
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
              <h4 className="text-2xl font-bold text-white mb-4">Innovation First</h4>
              <p className="text-white/80 leading-relaxed">
                Always prioritizing innovation in every solution we
                develop to deliver maximum added value.
              </p>
            </div>

            {/* Quality */}
            <div
              className="vision-card glass-effect rounded-3xl p-8 text-center transition-all duration-500 animate-fade-in"
              style={{animationDelay: '0.3s'}}
            >
              <div className="bg-gray-300 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">
                Quality Excellence
              </h4>
              <p className="text-white/80 leading-relaxed">
                Commitment to high quality in every aspect of work, from
                concept to final implementation.
              </p>
            </div>

            {/* Sustainability */}
            <div
              className="vision-card glass-effect rounded-3xl p-8 text-center transition-all duration-500 animate-fade-in"
              style={{animationDelay: '0.5s'}}
            >
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
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
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Sustainability</h4>
              <p className="text-white/80 leading-relaxed">
                Building sustainable technology solutions that contribute
                positively to the environment and society.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
