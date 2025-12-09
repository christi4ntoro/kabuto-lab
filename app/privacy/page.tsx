export default function PrivacyPage() {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg">
            <h2>Cookie Usage</h2>
            <p>
              We use Google Analytics to understand how visitors use our site. 
              This helps us improve your experience.
            </p>
            
            <h2>What We Track</h2>
            <ul>
              <li>Pages visited</li>
              <li>Time spent on site</li>
              <li>Browser and device information</li>
              <li>Anonymized IP addresses</li>
            </ul>
            
            <h2>Your Choices</h2>
            <p>
              You can decline cookies at any time. This won't affect your ability 
              to use our site, but it will limit our ability to improve it.
            </p>
            
            <h2>Contact</h2>
            <p>Questions? Contact us at [your email]</p>
          </div>
        </div>
      </div>
    );
  }