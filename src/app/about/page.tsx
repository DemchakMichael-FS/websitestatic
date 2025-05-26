import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">About Fresh Static Website</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          Welcome to Fresh Static Website, your go-to resource for modern web development insights,
          API security best practices, and cutting-edge technology tutorials.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-6">
          We&apos;re dedicated to sharing practical knowledge and real-world experiences in web development.
          Our focus areas include:
        </p>

        <ul className="list-disc list-inside mb-6 text-gray-700 space-y-2">
          <li><strong>API Security:</strong> Best practices for securing modern APIs</li>
          <li><strong>Multi-platform Deployment:</strong> Strategies for deploying to various platforms</li>
          <li><strong>React Native Development:</strong> Mobile app development insights</li>
          <li><strong>Side Projects:</strong> Learning from hands-on development experiences</li>
          <li><strong>Industry Insights:</strong> Curated content from podcasts, interviews, and articles</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">What You&apos;ll Find Here</h2>
        <p className="text-gray-700 mb-6">
          Our blog features in-depth articles, tutorials, and insights covering the latest trends
          in web development. Whether you&apos;re a beginner looking to learn the fundamentals or an
          experienced developer seeking advanced techniques, you&apos;ll find valuable content here.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Stay Connected</h2>
        <p className="text-gray-700 mb-6">
          We regularly update our content with fresh perspectives and practical advice.
          Check back often for new posts, or follow our blog to stay up-to-date with the
          latest in web development and technology.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Get Started</h3>
          <p className="text-blue-800">
            Ready to dive in? Check out our <Link href="/blog" className="underline hover:text-blue-600">latest blog posts</Link>
            or start with our comprehensive guide on API security.
          </p>
        </div>
      </div>
    </div>
  )
}
