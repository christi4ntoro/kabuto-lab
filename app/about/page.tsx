export default function AboutPage() {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-8">About Kabuto Lab</h1>
          
          <div className="space-y-8 text-xl text-gray-300 leading-relaxed">
            <p>
              Kabuto Lab creates tools and frameworks for immersive experience designers.
            </p>
  
            <p>
              We believe that great immersive experiences come from methodology, not just creativity. 
              Our products help designers structure their thinking and deliver consistent, impactful results.
            </p>
  
            <div className="bg-white/5 p-8 rounded-lg border border-white/10 my-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Our Philosophy</h2>
              <ul className="space-y-4 text-lg">
                <li>→ Frameworks over freestyle</li>
                <li>→ Process over perfection</li>
                <li>→ Tools that scale with your practice</li>
                <li>→ No fluff, no gatekeeping</li>
              </ul>
            </div>
  
            <p>
              Started by designers who got tired of reinventing the wheel on every project.
            </p>
  
            <p className="text-2xl font-bold text-white mt-12">
              Let's build better immersive experiences together.
            </p>
          </div>
        </div>
      </div>
    )
  }