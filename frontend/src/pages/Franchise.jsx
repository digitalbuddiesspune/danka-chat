import React, { useState, useEffect } from 'react'

const Franchise = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const benefits = [
    {
      icon: "🍽️",
      title: "Authentic Street Food. Modern Experience.",
      description: "We've reimagined India's favorite roadside snacks in a clean, stylish, and fun environment — without losing the traditional taste everyone loves.",
      gradient: "from-gray-400 to-yellow-500"
    },
    {
      icon: "📈",
      title: "Proven & Profitable Business Model",
      description: "Our franchise system is designed for efficiency and simplicity — perfect for both first-time entrepreneurs and experienced investors.",
      gradient: "from-purple-400 to-indigo-500"
    },
    {
      icon: "🎓",
      title: "Complete Training & Operational Support",
      description: "From food prep to customer service, hygiene to management — we guide you at every step to ensure your Danka outlet runs smoothly.",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      icon: "📢",
      title: "Marketing That Drives Customers",
      description: "Our digital and local marketing support helps you create excitement in your area and build a loyal customer base from day one.",
      gradient: "from-green-400 to-teal-500"
    },
    {
      icon: "⭐",
      title: "Consistent Quality & Taste",
      description: "We use standardized recipes and high-quality ingredients to ensure every puri pops with authentic Danka flavor.",
      gradient: "from-yellow-400 to-yellow-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
            style={{
              backgroundImage: "url('https://res.cloudinary.com/dtaitsw4r/image/upload/v1765268458/PaniPuri1_vjb1bn.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 via-gray-800/40 to-yellow-900/45" />
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-white font-semibold text-xs md:text-sm font-body">
              🚀 India's Fastest Growing Street Food Franchise
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight font-heading">
            Bring India's
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300 text-transparent bg-clip-text ">
              Favourite Street Flavours
            </span>
            <br />
            to Your City
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl mb-6 text-white/95 max-w-4xl mx-auto leading-relaxed font-light font-body">
            Love panipuri? Passionate about chaat? Turn that passion into a profitable business with <span className="font-bold text-yellow-300">Danka</span>
          </p>

          <p className="text-sm sm:text-base md:text-lg mb-8 text-white/90 max-w-3xl mx-auto font-body">
            With our trusted recipes, strong brand identity, and proven business model, Danka helps entrepreneurs serve joy, one puri at a time!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="https://wa.me/917887882300"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl font-bold text-base shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center gap-3 font-body"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Contact Us on WhatsApp
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a
              href="#learn-more"
              className="px-8 py-5 bg-white/10 backdrop-blur-xl text-white rounded-2xl font-bold text-base border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 font-body"
            >
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { number: "50+", label: "Franchise Partners" },
              { number: "20+", label: "Cities Across India" },
              { number: "100K+", label: "Happy Customers" }
            ].map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-black text-yellow-300 mb-2 font-body">{stat.number}</div>
                <div className="text-white/90 font-medium text-base font-body">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-8 h-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Why Partner Section */}
      <section id="learn-more" className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/30 to-yellow-50/30" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-gray-700 font-bold text-xs uppercase tracking-wider bg-yellow-100 px-4 py-2 rounded-full font-body">
                Partnership Benefits
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-6 bg-gradient-to-r from-gray-700 via-gray-600 to-yellow-500 text-transparent bg-clip-text font-heading">
              Why Partner with Danka
            </h2>
            <div className="w-24 h-2 bg-gradient-to-r from-gray-500 to-yellow-500 mx-auto rounded-full" />
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="text-6xl transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <div className={`absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-yellow-600 transition-colors duration-300 font-heading">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-body">
                  {benefit.description}
                </p>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-24 px-4 relative overflow-hidden text-white" style={{ background: 'linear-gradient(to bottom, #000000, #1a0e06, #2b1205)' }}>
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-yellow-300 font-bold text-xs uppercase tracking-wider bg-white/10 backdrop-blur-xl px-4 py-2 rounded-full border border-white/20 font-body">
                Complete Support Package
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-white font-heading">
              What You Get
            </h2>
            <p className="text-base text-white/80 max-w-3xl mx-auto font-body">
              Comprehensive support to ensure your franchise success
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Training & Support Card */}
            <div className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 hover:border-white/30 transition-all duration-500 hover:bg-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                
                  <h3 className="text-2xl font-bold text-white font-heading">Training & Support</h3>
                </div>

                <ul className="space-y-5">
                  {[
                    "Comprehensive training program for you and your staff",
                    "Ongoing operational support and guidance",
                    "Recipe standardization and quality control",
                    "Hygiene and safety protocols training"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 group/item">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mt-1 shadow-lg group-hover/item:scale-110 transition-transform">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white/90 text-base leading-relaxed group-hover/item:text-white transition-colors font-body">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Marketing & Branding Card */}
            <div className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 hover:border-white/30 transition-all duration-500 hover:bg-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                 
                  <h3 className="text-2xl font-bold text-white font-heading">Marketing & Branding</h3>
                </div>

                <ul className="space-y-5">
                  {[
                    "Digital marketing support and social media presence",
                    "Branded materials and marketing collateral",
                    "Local marketing strategies and promotions",
                    "Grand opening support and launch campaigns"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 group/item">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mt-1 shadow-lg group-hover/item:scale-110 transition-transform">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white/90 text-base leading-relaxed group-hover/item:text-white transition-colors font-body">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden text-white" style={{ background: 'linear-gradient(to bottom, #000000, #1a0e06, #2b1205)' }}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
         

          <h2 className="text-3xl md:text-4xl font-black mb-8 text-white leading-tight font-heading">
            Ready to Start Your
            <br />
            <span className="text-yellow-200">Danka Journey?</span>
          </h2>

          <p className="text-base md:text-lg mb-12 text-white/95 max-w-3xl mx-auto leading-relaxed font-body">
            Fill out our franchise inquiry form and our team will get back to you within 48 hours to discuss your franchise opportunity.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/#inquiry"
              className="group px-10 py-6 bg-white text-yellow-600 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-3 font-body"
            >
              Fill Inquiry Form
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            <a
              href="https://wa.me/917887882300"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-10 py-6 bg-green-500 hover:bg-green-600 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-3 font-body"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp Us
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Franchise