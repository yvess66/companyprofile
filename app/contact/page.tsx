export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-gray-800/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-6xl font-bold mb-6 text-white drop-shadow-2xl animate-slide-up">
            How To Contact Us
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto animate-fade-in">
            If you are interested in our products and services, you can contact us
            via these contact details
          </p>

          {/* Floating Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-3xl mx-auto">
            {/* Phone Card */}
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 transition-all duration-500 hover:bg-white/20 animate-fade-in block"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="bg-[#25D366] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 icon-glow shadow-lg">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>

                <h4 className="text-white font-bold text-lg mb-2">WhatsApp</h4>
                <p className="text-white/80 text-sm">+62 812-3456-7890</p>

                <div className="mt-4">
                  <span className="inline-block bg-[#25D366] hover:bg-[#1ebe5d] text-white px-4 py-2 rounded-full text-sm transition-all duration-300 hover:scale-105 shadow-lg">
                    Chat on WhatsApp
                  </span>
                </div>
              </a>

            {/* Email Card */}
            <a
              href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=patriciakinanti.sms18@gmail.com&su=Inquiry%20from%20Website&body=Hello%2C%20I%20would%20like%20to%20inquire%20about...&tf=1"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 transition-all duration-500 hover:bg-white/20 animate-fade-in block"
              style={{ animationDelay: "0.2s" }}
      >
          <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 icon-glow shadow-lg">
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
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>

          <h4 className="text-white font-bold text-lg mb-2">Email</h4>
          <p className="text-white/80 text-sm">
            patriciakinanti.sms18@gmail.com
          </p>

          <div className="mt-4">
            <span className="inline-block bg-gray-200 text-black px-4 py-2 rounded-full text-sm transition-all duration-300 shadow-lg">
              Send Email
            </span>
          </div>
</a>
          </div>
        </div>
      </section>

      {/* Detailed Contact Information */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-1 gap-12 items-center">
            {/* Left Side - Address & Hours */}
            <div className="space-y-8 animate-slide-up">
              {/* Address Card */}
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 transition-all duration-500 hover:bg-white/20 hover:scale-105">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-orange-400 to-orange-600 w-12 h-12 rounded-2xl flex items-center justify-center icon-glow">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-2">Address</h4>
                    <p className="text-white/80 text-lg leading-relaxed">
                      Jl. Raya Vila Nusa Indah 1 Bloc C1<br />No.1 Bojong Kulur,
                      Gunung Putri<br />Bogor 16969<br />Jawa Barat, Indonesia
                    </p>
                    <div className="mt-4">
                      <a
                        href="https://www.google.com/maps/place/PT+Sidik+Mitra+Sejahtera/@-6.3046701,106.9682457,17z/data=!3m1!4b1!4m6!3m5!1s0x2e6993004463c2c5:0x5586fd1b79c12909!8m2!3d-6.3046754!4d106.9708206!16s%2Fg%2F11vkb75111?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-orange-300 hover:text-orange-200 transition-colors cursor-pointer"
                      >
                        <span>View Location</span>
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Maps Preview Card */}
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20 transition-all duration-500 hover:bg-white/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.549155157481!2d106.9682457!3d-6.3046701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6993004463c2c5%3A0x5586fd1b79c12909!2sPT%20Sidik%20Mitra%20Sejahtera!5e0!3m2!1sid!2sid!4v1735814400000"
                  width="100%"
                  height="350"
                  style={{border: 0}}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Right Side - Website & Social Media (removed) */}
          </div>
        </div>
      </section>
    </>
  );
}
