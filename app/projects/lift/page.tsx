import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lift - Gamified Weightlifting Community App',
  description: 'An application that provides gamification and community to users who workout alone during weightlifting sessions.',
};

export default function LiftPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-8 py-16">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-4">Lift</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Lift is an application that provides gamification and community to users who workout alone during weightlifting sessions.
            It contains session analytical data, visualization, daily challenges, and leaderboards.
          </p>
        </div>

        {/* Project Image */}
        <div className="mb-12">
          <img
            src="/lift.jpg"
            alt="Lift Project"
            className="w-full rounded-lg shadow-2xl"
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-8">
          <span className="px-4 py-2 bg-green-600 text-white rounded-full">personal project</span>
          <span className="px-4 py-2 bg-blue-600 text-white rounded-full">full-stack</span>
          <span className="px-4 py-2 bg-purple-600 text-white rounded-full">hardware</span>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <h2>Project Overview</h2>
          <p>
            Lift addresses the challenge of motivation and progress tracking for individuals who prefer working out alone.
            By combining gamification elements with community features, Lift transforms solitary weightlifting sessions
            into engaging, social experiences while maintaining the privacy and flexibility of solo workouts.
          </p>

          <h2>Key Features</h2>
          <ul>
            <li><strong>Session Analytics:</strong> Comprehensive tracking of workout sessions with detailed performance metrics</li>
            <li><strong>Data Visualization:</strong> Interactive charts and graphs showing progress over time</li>
            <li><strong>Daily Challenges:</strong> Personalized challenges to keep users motivated and engaged</li>
            <li><strong>Leaderboards:</strong> Community-driven competition systems without compromising individual privacy</li>
            <li><strong>Hardware Integration:</strong> Seamless connection with gym equipment and wearable devices</li>
            <li><strong>Progress Tracking:</strong> Long-term fitness goal setting and achievement monitoring</li>
          </ul>

          <h2>Technical Implementation</h2>
          <p>
            Lift is built as a full-stack application with hardware integration capabilities. The system combines
            software development with hardware interfacing to provide real-time workout data collection and analysis.
          </p>

          <h3>Frontend Development</h3>
          <ul>
            <li>Modern responsive web application with intuitive user interface</li>
            <li>Real-time data visualization for workout analytics</li>
            <li>Social features for community interaction</li>
            <li>Gamification elements including achievements and progress tracking</li>
          </ul>

          <h3>Backend Systems</h3>
          <ul>
            <li>Robust API for handling user data and workout sessions</li>
            <li>Real-time data processing for live workout tracking</li>
            <li>Community features with privacy controls</li>
            <li>Challenge generation and leaderboard management</li>
          </ul>

          <h3>Hardware Integration</h3>
          <ul>
            <li>Integration with gym equipment sensors and smart devices</li>
            <li>Wearable device compatibility for heart rate and motion tracking</li>
            <li>Real-time data collection from multiple hardware sources</li>
            <li>Custom hardware protocols for seamless device communication</li>
          </ul>

          <h2>User Experience Design</h2>
          <p>
            The application focuses on providing immediate feedback and long-term motivation through carefully designed
            gamification mechanics. Users can set personal goals, participate in community challenges, and track their
            progress through detailed analytics, all while maintaining the flexibility of working out on their own schedule.
          </p>

          <h2>Community Features</h2>
          <p>
            While respecting users' preference for solo workouts, Lift creates a virtual community where users can:
          </p>
          <ul>
            <li>Share achievements and milestones</li>
            <li>Participate in friendly competitions</li>
            <li>Get motivation from community challenges</li>
            <li>Access peer support without compromising workout privacy</li>
          </ul>

          <h2>Analytics and Insights</h2>
          <p>
            The platform provides comprehensive analytics that help users understand their workout patterns,
            identify areas for improvement, and track progress toward their fitness goals. The visualization
            tools make complex data accessible and actionable for users of all technical backgrounds.
          </p>

          <h2>Future Development</h2>
          <p>
            Planned enhancements include expanding hardware compatibility, implementing AI-powered workout
            recommendations, and developing advanced community features that maintain the balance between
            social engagement and individual privacy.
          </p>
        </div>

        {/* Back Button */}
        <div className="mt-12">
          <button
            onClick={() => window.close()}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-300"
          >
            ← Back to Portfolio
          </button>
        </div>
      </div>
    </div>
  );
}