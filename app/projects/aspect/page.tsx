import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aspect - Gamified Finance Trading Platform',
  description: 'A website that gamifies the learning of finance and trading by creating a market with diverse events.',
};

export default function AspectPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-8 py-16">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-4">Aspect</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            A website that gamifies the learning of finance and trading by creating a market with diverse events.
            Targeting young users interested in trading and finance, Aspect provides exciting gaming mechanics and a cool user interface.
          </p>
        </div>

        {/* Project Image */}
        <div className="mb-12">
          <img
            src="/aspect.jpg"
            alt="Aspect Project"
            className="w-full rounded-lg shadow-2xl"
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-8">
          <span className="px-4 py-2 bg-green-600 text-white rounded-full">personal project</span>
          <span className="px-4 py-2 bg-blue-600 text-white rounded-full">full-stack</span>
          <span className="px-4 py-2 bg-cyan-600 text-white rounded-full">React</span>
          <span className="px-4 py-2 bg-yellow-600 text-white rounded-full">Python</span>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <h2>Project Overview</h2>
          <p>
            Aspect is a comprehensive platform designed to revolutionize how young people learn about finance and trading.
            By combining educational content with gamification elements, Aspect creates an engaging environment where users
            can experience the dynamics of financial markets without real-world risks.
          </p>

          <h2>Key Features</h2>
          <ul>
            <li><strong>Virtual Stock Market:</strong> A realistic simulation of stock market dynamics with diverse events affecting market conditions</li>
            <li><strong>Gamification:</strong> Achievement systems, leaderboards, and challenges that make learning finance engaging</li>
            <li><strong>Educational Content:</strong> Comprehensive tutorials and guides on trading strategies and financial concepts</li>
            <li><strong>Interactive Interface:</strong> Modern, intuitive UI designed specifically for young users</li>
            <li><strong>Real-time Analytics:</strong> Portfolio tracking and performance analytics to help users understand their trading decisions</li>
          </ul>

          <h2>Technical Implementation</h2>
          <p>
            The platform is built using a modern full-stack architecture with React on the frontend providing a responsive
            and interactive user interface. The backend is powered by Python, handling real-time market simulations,
            user management, and analytics processing.
          </p>

          <h3>Frontend Technologies</h3>
          <ul>
            <li>React for component-based UI development</li>
            <li>Modern CSS for responsive design</li>
            <li>Real-time data visualization libraries</li>
            <li>State management for complex user interactions</li>
          </ul>

          <h3>Backend Technologies</h3>
          <ul>
            <li>Python for server-side logic and API development</li>
            <li>Database integration for user data and market simulations</li>
            <li>Real-time market event generation algorithms</li>
            <li>User authentication and security systems</li>
          </ul>

          <h2>Impact and Results</h2>
          <p>
            Aspect has successfully reached thousands of learners and collaborated with educational institutions worldwide.
            The platform provides a safe environment for users to experiment with trading strategies and learn from their
            decisions without financial consequences.
          </p>

          <h2>Future Development</h2>
          <p>
            Continued development focuses on expanding the range of financial instruments available for trading,
            implementing more sophisticated market scenarios, and enhancing the social learning aspects of the platform
            through community features and collaborative learning tools.
          </p>
        </div>

        {/* Back Button */}
        <div className="mt-12">
          <button
            onClick={() => window.close()}
            className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-colors duration-300"
          >
            ← Back to Portfolio
          </button>
        </div>
      </div>
    </div>
  );
}