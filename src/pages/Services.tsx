import Reveal from "@/components/Reveal";

const services = [
  {
    id: 1,
    icon: "🌐",
    title: "Website Development",
    description: "Professional web application development with modern technologies and responsive design.",
  },
  {
    id: 2,
    icon: "📱",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile solutions for iOS and Android platforms.",
  },
  {
    id: 3,
    icon: "🎨",
    title: "3D Prototyping",
    description: "Custom 3D modeling and prototyping services for product visualization and design.",
  },
  {
    id: 4,
    icon: "🤖",
    title: "Workflow Automation",
    description: "Intelligent automation solutions including chatbots, Instagram automation, and custom workflow integrations.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f1a] via-[#06070C] to-black py-16 px-4 relative">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <Reveal>
        <div className="max-w-5xl mx-auto text-center mb-20 relative z-10">
          <p className="text-xs uppercase tracking-[0.3em] text-secondary-400 mb-4 font-semibold">Our Services</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            What We Build
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            From web applications to mobile solutions, we deliver professional development services tailored to your business needs.
          </p>
        </div>
      </Reveal>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto mb-20 relative z-10">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.1}>
              <div className="group relative p-8 rounded-xl bg-[#0d0f14]/80 border border-white/[0.08] hover:border-secondary-500/40 transition-all duration-300 backdrop-blur-sm">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{service.description}</p>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-secondary-500/0 to-purple-600/0 group-hover:from-secondary-500/5 group-hover:to-purple-600/5 transition-all duration-300 pointer-events-none" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <Reveal>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="p-10 rounded-2xl bg-gradient-to-br from-secondary-900/20 via-purple-900/20 to-black/50 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your ideas to life with our professional development services.
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSftmT9nAdqWqHIW5N_hM4JW5CFHNlKq-H_Sc0ndz_G3r4WXWA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary-600 to-purple-600 px-8 py-4 rounded-lg text-white font-semibold hover:from-secondary-500 hover:to-purple-500 hover:shadow-lg hover:shadow-secondary-500/30 transition-all duration-300"
            >
              Get in Touch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </Reveal>

      {/* Contact Information Section */}
      <div id="contact-section" className="max-w-7xl mx-auto mt-16 px-4 relative z-10">
        <div className="rounded-2xl border border-white/10 bg-[#0d0f14]/80 backdrop-blur-sm p-12 text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">Contact Information</h3>
          
          <div className="grid gap-6 md:grid-cols-2 text-center">
            <a 
              href="mailto:stackoindustries@gmail.com" 
              className="flex flex-col items-center gap-4 p-6 rounded-xl border border-white/[0.08] bg-black/40 hover:bg-black/60 hover:border-secondary-500/40 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-secondary-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-2xl">📧</span>
              </div>
              <div>
                <p className="text-xs text-white/50 mb-2 uppercase tracking-wider">Email us</p>
                <p className="text-lg font-semibold text-secondary-400">stackoindustries@gmail.com</p>
              </div>
            </a>
            
            <a 
              href="tel:+919751987380" 
              className="flex flex-col items-center gap-4 p-6 rounded-xl border border-white/[0.08] bg-black/40 hover:bg-black/60 hover:border-secondary-500/40 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-secondary-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-2xl">📞</span>
              </div>
              <div>
                <p className="text-xs text-white/50 mb-2 uppercase tracking-wider">Call us</p>
                <p className="text-lg font-semibold text-secondary-400">+91 9751987380</p>
              </div>
            </a>
          </div>
          
          <p className="mt-8 text-white/60 text-sm">
            ⏰ We respond within 24 hours during business days
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
