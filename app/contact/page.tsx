export default function ContactPage() {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-6xl font-bold mb-8">Contact</h1>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Get in Touch</h2>
              <p className="text-xl text-gray-300 mb-6">
                Have questions about our products? Want to collaborate? Reach out.
              </p>
            </div>
  
            <div className="bg-white/5 p-8 rounded-lg border border-white/10">
              <h3 className="text-xl font-bold mb-4">Email</h3>
              <a 
                href="mailto:hello@kabutolab.tech" 
                className="text-2xl text-blue-400 hover:text-blue-300 transition-colors"
              >
                hello@kabutolab.tech
              </a>
            </div>
  
            <div className="bg-white/5 p-8 rounded-lg border border-white/10">
              <h3 className="text-xl font-bold mb-4">Social</h3>
              <div className="space-y-3">
                <a 
                  href="https://twitter.com/kabutolab" 
                  target="_blank"
                  className="block text-lg text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Twitter →
                </a>
                <a 
                  href="https://linkedin.com/company/kabutolab" 
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