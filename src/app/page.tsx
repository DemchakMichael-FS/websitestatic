export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">My Tech Blog</h1>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="/" className="hover:text-blue-200 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-blue-200 transition-colors">About</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to My Tech Blog</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Exploring web development, APIs, and showcasing my projects.
            This blog is built with Next.js and deployed as a static website.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Latest Articles</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Article 1 */}
            <article className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                <img
                  src="/images/react-api-header.svg"
                  alt="React API Best Practices"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  <a href="/articles/react-api-best-practices" className="text-blue-600 dark:text-blue-400 hover:underline">
                    Best Practices for Using APIs within React
                  </a>
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Learn how to effectively integrate and manage API calls in your React applications with these proven best practices.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">May 11, 2025</span>
                  <a href="/articles/react-api-best-practices" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                    Read More →
                  </a>
                </div>
              </div>
            </article>

            {/* Article 2 */}
            <article className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                <img
                  src="/images/nuvana-header.svg"
                  alt="Nuvana Website Case Study"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  <a href="/articles/nuvana-case-study" className="text-blue-600 dark:text-blue-400 hover:underline">
                    Nuvana: A Bilingual Website for Web Design Services
                  </a>
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  A case study of Nuvana, a professional website I built to showcase web design and SEO services for clients in Puerto Rico.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">May 12, 2025</span>
                  <a href="/articles/nuvana-case-study" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">About This Blog</h2>
          <p className="text-lg mb-6">
            This blog is a platform where I share my experiences and insights in web development,
            focusing on modern technologies like React, Next.js, and effective API integration.
          </p>
          <p className="text-lg mb-6">
            I also showcase my projects and case studies to demonstrate practical applications
            of these technologies in real-world scenarios.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 My Tech Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
