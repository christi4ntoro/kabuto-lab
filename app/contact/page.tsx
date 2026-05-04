export default function ContactPage() {
    return (
      <div className="min-h-screen bg-[--background] text-[--foreground] p-8 pt-[68px]">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-6xl font-bold mb-8">Contact</h1>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Get in Touch</h2>
              <p className="text-xl text-gray-300 mb-6">
                {/* Have questions about our products? Want to collaborate? Reach out. */}
                Let's get in touch.
              </p>
            </div>
  
            <div className="bg-white/5 p-8 rounded-lg border border-white/10">
              <h3 className="text-xl font-bold mb-4">Email</h3>
              <a 
                href="mailto:christi4ntoro@gmail.com" 
                className="text-2xl text-blue-400 hover:text-blue-300 transition-colors"
              >
                christi4ntoro@gmail.com
              </a>
            </div>
  
            <div className="bg-white/5 p-8 rounded-lg border border-white/10">
              <h3 className="text-xl font-bold mb-4">Social</h3>
              <div className="space-y-3">
                <a 
                  href="https://christi4ntoro.github.io/portfolio/Portfolio-ChristianRamirezToro.pdf" 
                  target="_blank"
                  className="block text-lg text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Portfolio →
                </a>
                <a 
                  href="https://www.linkedin.com/in/chrisrto/" 
                  target="_blank"
                  className="block text-lg text-blue-400 hover:text-blue-300 transition-colors"
                >
                  LinkedIn →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }