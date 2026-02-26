export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/index.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-60 animate-fade-in"
          alt="Team"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-600/30 to-gray-800/30"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="animate-slide-up">
            <h2 className="text-7xl font-bold mb-6 text-white drop-shadow-2xl">
              Our Team
            </h2>
            <p className="text-2xl text-white/90 mb-8">
              Dedicated • Professional • Committed
            </p>
            <div className="inline-block bg-white/10 backdrop-blur-lg rounded-full px-8 py-4 border border-white/20">
              <p className="text-white text-lg font-medium">
                Build a solid team that meets your expectations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h3 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Our Team
            </h3>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Build a solid team is certainly not easy. Therefore, we believe that
              our dedicated and outstanding team can meet your expectation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* CEO Card */}
            <div
              className="team-card glass-effect rounded-3xl p-8 text-center transition-all duration-500 animate-fade-in"
              style={{animationDelay: '0.1s'}}
            >
              <div className="relative mb-6">
                <div className="w-40 h-40 mx-auto relative">
                  <img
                    src="/images/test2.jpg"
                    className="w-full h-full rounded-full object-cover border-4 border-white/20 profile-glow transition-all duration-300"
                    alt="JEJE"
                  />
                  <div className="absolute -top-2 -right-2 bg-white w-12 h-12 rounded-full flex items-center justify-center animate-pulse-slow">
                    <svg
                      className="w-6 h-6 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 3l14 9-14 9V3z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">JEJE</h4>
              <div className="inline-block bg-gray-200 text-black px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Chief Executive Officer
              </div>
              <p className="text-white/80 leading-relaxed mb-6">
                Visionary leader guiding company strategy and innovation
                towards a bright future.
              </p>

              {/* Skills/Expertise */}
              <div className="space-y-2">
                <div className="bg-white/10 rounded-full px-3 py-1 text-xs text-white/90 inline-block mr-2">
                  Leadership
                </div>
                <div className="bg-white/10 rounded-full px-3 py-1 text-xs text-white/90 inline-block mr-2">
                  Strategy
                </div>
                <div className="bg-white/10 rounded-full px-3 py-1 text-xs text-white/90 inline-block">
                  Innovation
                </div>
              </div>
            </div>

            {/* CTO Card */}
            <div
              className="team-card glass-effect rounded-3xl p-8 text-center transition-all duration-500 animate-fade-in"
              style={{animationDelay: '0.3s'}}
            >
              <div className="relative mb-6">
                <div className="w-40 h-40 mx-auto relative">
                  <img
                    src="/images/test.jpg"
                    className="w-full h-full rounded-full object-cover border-4 border-white/20 profile-glow transition-all duration-300"
                    alt="Budi Rahman"
                  />
                  <div className="absolute -top-2 -right-2 bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center animate-pulse-slow">
                    <svg
                      className="w-6 h-6 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Budi Rahman</h4>
              <div className="inline-block bg-gray-300 text-black px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Chief Technology Officer
              </div>
              <p className="text-white/80 leading-relaxed mb-6">
                Technology expert ensuring quality and performance of all digital
                products with the highest standards.
              </p>

              {/* Skills/Expertise */}
              <div className="space-y-2">
                <div className="bg-white/10 rounded-full px-3 py-1 text-xs text-white/90 inline-block mr-2">
                  Full-Stack Development
                </div>
                <div className="bg-white/10 rounded-full px-3 py-1 text-xs text-white/90 inline-block mr-2">
                  Cloud Architecture
                </div>
                <div className="bg-white/10 rounded-full px-3 py-1 text-xs text-white/90 inline-block">
                  DevOps
                </div>
              </div>
            </div>

            {/* Marketing Director Card */}
            <div
              className="team-card glass-effect rounded-3xl p-8 text-center transition-all duration-500 animate-fade-in"
              style={{animationDelay: '0.5s'}}
            >
              <div className="relative mb-6">
                <div className="w-40 h-40 mx-auto relative">
                  <img
                    src="/images/test3.png"
                    className="w-full h-full rounded-full object-cover border-4 border-white/20 profile-glow transition-all duration-300"
                    alt="Citra Ananda"
                  />
                  <div className="absolute -top-2 -right-2 bg-white w-12 h-12 rounded-full flex items-center justify-center animate-pulse-slow">
                    <svg
                      className="w-6 h-6 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Citra Ananda</h4>
              <div className="inline-block bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Marketing Director
              </div>
              <p className="text-white/80 leading-relaxed mb-6">
                Connecting our products to the right market through creative
                and innovative strategies.
              </p>

              {/* Skills/Expertise */}
              <div className="space-y-2">
                <div className="bg-white/10 rounded-full px-3 py-1 text-xs text-white/90 inline-block mr-2">
                  Digital Marketing
                </div>
                <div className="bg-white/10 rounded-full px-3 py-1 text-xs text-white/90 inline-block mr-2">
                  Brand Strategy
                </div>
                <div className="bg-white/10 rounded-full px-3 py-1 text-xs text-white/90 inline-block">
                  Analytics
                </div>
              </div>
            </div>
          </div>

          {/* Team Stats Section */}
          <div
            className="mt-20 grid md:grid-cols-4 gap-6 animate-slide-up"
            style={{animationDelay: '0.7s'}}
          >
            <div className="glass-effect rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80">Projects Completed</div>
            </div>
            <div className="glass-effect rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-white/80">Client Satisfaction</div>
            </div>
            <div className="glass-effect rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80">Support Available</div>
            </div>
            <div className="glass-effect rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-white mb-2">5+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
