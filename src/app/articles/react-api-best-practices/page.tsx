import Image from 'next/image';
import Link from 'next/link';

export default function ReactAPIBestPractices() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold hover:text-blue-200 transition-colors">
              My Tech Blog
            </Link>
            <div className="space-x-6">
              <Link href="/" className="hover:text-blue-200 transition-colors">
                Home
              </Link>
              <Link href="/#about" className="hover:text-blue-200 transition-colors">
                About
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Article */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <article className="prose dark:prose-invert lg:prose-xl mx-auto">
          {/* Article Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Best Practices for Using APIs within React</h1>
            <div className="text-gray-600 dark:text-gray-400 mb-4">Published: May 11, 2025</div>
          </div>

          {/* Featured Image */}
          <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image
              src="/images/react-api-header.svg"
              alt="React API Integration"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>

          {/* Introduction */}
          <h2>Introduction</h2>
          <p>
            Modern React applications often rely heavily on external APIs to fetch and manage data.
            However, without proper implementation, API calls can lead to performance issues,
            difficult-to-maintain code, and poor user experience. In this article, we'll explore
            best practices for integrating APIs within your React applications.
          </p>

          {/* Section 1 */}
          <h2>1. Centralize API Calls</h2>
          <p>
            One of the most important practices is to centralize your API calls rather than
            scattering them throughout your components. This approach offers several benefits:
          </p>
          <ul>
            <li>Easier maintenance and updates to API endpoints</li>
            <li>Consistent error handling and loading states</li>
            <li>Simplified testing</li>
            <li>Better code organization</li>
          </ul>

          <p>
            When I first started working with React, I made the mistake of placing API calls directly in my
            component files. This quickly became unmanageable as the application grew. I learned that creating
            a dedicated API service folder with separate files for different resources works much better.
          </p>

          <p>
            For example, I typically create an &quot;api&quot; folder with files like &quot;userService.js&quot; and &quot;productService.js&quot;
            that export functions for different API operations. This makes it much easier to update endpoints or
            authentication logic in one place rather than hunting through dozens of components.
          </p>

          {/* Section 2 */}
          <h2>2. Use Custom Hooks for Data Fetching</h2>
          <p>
            Custom hooks allow you to extract and reuse stateful logic across components.
            For API calls, custom hooks can manage loading states, error handling, and data caching.
          </p>

          <p>
            I&apos;ve found that creating custom hooks for data fetching dramatically simplifies my components.
            Instead of repeating the same fetch-loading-error pattern in every component, I can abstract that
            logic into a hook and just use the returned data and status values.
          </p>

          <p>
            My typical pattern is to create hooks like &quot;useUsers&quot; or &quot;useProducts&quot; that handle the entire
            data fetching lifecycle. The component simply calls the hook and receives the data, loading state,
            and any errors. This keeps the components focused on rendering UI rather than managing API logic.
          </p>

          <p>
            The separation also makes testing much easier since I can mock the hook&apos;s return values rather
            than having to mock API calls directly in component tests.
          </p>

          {/* Section 3 */}
          <h2>3. Implement Proper Error Handling</h2>
          <p>
            Robust error handling is crucial for a good user experience. Always account for:
          </p>
          <ul>
            <li>Network errors</li>
            <li>API errors (4xx, 5xx responses)</li>
            <li>Timeout errors</li>
            <li>Parsing errors</li>
          </ul>

          <p>
            Error handling was something I initially overlooked, but I quickly learned its importance after
            deploying to production. Users will encounter network issues, servers will occasionally fail,
            and APIs will sometimes return unexpected data formats.
          </p>

          <p>
            I now implement error boundaries at strategic points in my application to catch and display errors
            gracefully. This prevents the entire application from crashing when a single component encounters
            an error.
          </p>

          <p>
            For API-specific errors, I&apos;ve found it helpful to categorize them by type (network, server,
            authentication, etc.) and display appropriate messages to users. For example, a 401 error might
            prompt the user to log in again, while a network error might suggest checking their connection.
          </p>

          {/* Section 4 */}
          <h2>4. Use a Data Fetching Library</h2>
          <p>
            While you can manage API calls with just fetch or axios, specialized libraries can
            significantly improve your data fetching experience:
          </p>
          <ul>
            <li><strong>React Query</strong>: Provides caching, automatic refetching, and more</li>
            <li><strong>SWR</strong>: Offers stale-while-revalidate strategy for data fetching</li>
            <li><strong>Apollo Client</strong>: Excellent for GraphQL APIs</li>
          </ul>

          <p>
            After struggling with managing complex data fetching scenarios manually, I started using React Query
            on a project last year. The difference was night and day. Features that would have taken days to
            implement correctly (like background refetching, cache invalidation, and pagination) were suddenly
            available out of the box.
          </p>

          <p>
            These libraries handle many edge cases that are easy to miss when implementing data fetching yourself.
            For instance, React Query automatically handles request deduplication, so if multiple components request
            the same data simultaneously, only one network request is made.
          </p>

          <p>
            While there&apos;s a learning curve to these libraries, the investment pays off quickly in terms of
            application reliability and development speed. I particularly appreciate how they reduce boilerplate
            code and let me focus on the unique aspects of my application.
          </p>

          {/* Conclusion */}
          <h2>Conclusion</h2>
          <p>
            Implementing these best practices will help you build more maintainable, efficient,
            and user-friendly React applications. By centralizing API calls, using custom hooks,
            handling errors properly, and leveraging specialized libraries, you can create a robust
            data fetching strategy that scales with your application.
          </p>
          <p>
            Remember that the specific approach you choose should align with your project&apos;s needs
            and complexity. For smaller applications, simpler solutions might be sufficient, while
            larger applications may benefit from more sophisticated data management strategies.
          </p>
        </article>
      </main>

      {/* Related Articles */}
      <section className="bg-gray-100 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Related Articles</h2>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">
              <Link href="/articles/nuvana-case-study" className="text-blue-600 dark:text-blue-400 hover:underline">
                Nuvana: A Bilingual Website for Web Design Services
              </Link>
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A case study of Nuvana, a professional website I built to showcase web design and SEO services for clients in Puerto Rico.
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Published: May 12, 2025
            </div>
          </div>
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
