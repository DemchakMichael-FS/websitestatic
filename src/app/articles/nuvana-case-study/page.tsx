import Image from 'next/image';
import Link from 'next/link';

export default function NuvanaCaseStudy() {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Nuvana: A Bilingual Website for Web Design Services</h1>
            <div className="text-gray-600 dark:text-gray-400 mb-4">Published: May 12, 2025</div>
          </div>

          {/* Featured Image */}
          <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image
              src="/images/Nuvana Logo.jpg"
              alt="Nuvana Website"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>

          {/* Introduction */}
          <p className="lead text-xl">
            Nuvana is a fully developed, bilingual website that I built to attract clients seeking professional
            website design, deployment, and SEO services. The site serves as a showcase for my capabilities in
            creating visually striking, fully optimized websites tailored for businesses in Puerto Rico.
          </p>

          {/* Website Purpose */}
          <h2>Purpose and Goals</h2>
          <p>
            The purpose of the Nuvana website is to provide potential clients with a seamless way to request
            a custom website, view examples of my work, and understand the value of SEO-driven design. The site
            is structured to highlight my expertise in building responsive, high-conversion websites while
            maintaining a modern dark-themed aesthetic accented with neon visuals and smooth animations.
          </p>

          {/* External Link */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-8 text-center">
            <h3 className="text-xl font-bold mb-2">Visit the Live Website</h3>
            <p className="mb-4">See the Nuvana website in action:</p>
            <Link
              href="https://www.nuvanaweb.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              www.nuvanaweb.com
            </Link>
          </div>

          {/* Key Features */}
          <h2>Key Features</h2>

          <h3>Bilingual Support</h3>
          <p>
            The website is fully bilingual, supporting both English and Spanish to cater to the diverse
            client base in Puerto Rico. This feature ensures that potential clients can access information
            in their preferred language, enhancing user experience and expanding market reach.
          </p>

          <h3>Portfolio Showcase</h3>
          <p>
            A dedicated portfolio section features live client projects, demonstrating the quality and
            diversity of my work. Each portfolio item includes details about the project, technologies used,
            and the specific challenges addressed, providing potential clients with concrete examples of
            my capabilities.
          </p>

          <h3>Quote Request System</h3>
          <p>
            The site includes a quote request form powered by EmailJS, allowing prospective clients to
            easily inquire about web design, SEO optimization, and hosting services. This streamlined
            process facilitates lead generation and provides a convenient way for potential clients to
            initiate contact.
          </p>

          <h3>Modern Design Elements</h3>
          <p>
            Nuvana features a contemporary dark-themed design with neon accents, creating a visually
            striking and memorable user experience. The site incorporates smooth animations and transitions
            that enhance engagement while maintaining optimal performance across all devices.
          </p>

          {/* Technical Implementation */}
          <h2>Technical Implementation</h2>
          <p>
            The Nuvana website was built using modern web technologies to ensure optimal performance,
            accessibility, and search engine visibility:
          </p>

          <ul>
            <li><strong>Responsive Design:</strong> Fully responsive layout that adapts seamlessly to all screen sizes</li>
            <li><strong>Performance Optimization:</strong> Optimized images, efficient code, and minimal dependencies</li>
            <li><strong>SEO Best Practices:</strong> Structured data, semantic HTML, and optimized meta tags</li>
            <li><strong>Accessibility:</strong> WCAG-compliant design elements and keyboard navigation support</li>
            <li><strong>Analytics Integration:</strong> Comprehensive tracking to monitor user behavior and conversion rates</li>
          </ul>

          {/* Results and Impact */}
          <h2>Results and Impact</h2>
          <p>
            The Nuvana website has proven to be an effective tool for generating leads and showcasing my
            web development services. Since its launch, the site has:
          </p>

          <ul>
            <li>Attracted a steady stream of qualified leads from businesses seeking professional web design services</li>
            <li>Established a strong online presence in the Puerto Rico market</li>
            <li>Demonstrated the value of bilingual website development for businesses serving diverse communities</li>
            <li>Served as a compelling portfolio piece that illustrates my capabilities in creating modern, effective websites</li>
          </ul>

          {/* Conclusion */}
          <h2>Conclusion</h2>
          <p>
            Overall, Nuvana is not just a website — it&apos;s a strategic tool to generate leads, promote my services,
            and position myself as a trusted web developer specializing in custom, high-impact websites that drive
            business growth through effective online presence.
          </p>

          <p>
            The project exemplifies how a well-designed website can serve as both a service showcase and a
            lead generation tool, providing tangible business value while demonstrating technical expertise
            and design capabilities.
          </p>

          {/* Call to Action */}
          <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold mb-2">Interested in a Similar Website?</h3>
            <p className="mb-4">
              If you&apos;re looking for a custom website that drives business growth and showcases your services effectively,
              visit <Link href="https://www.nuvanaweb.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Nuvana</Link> to
              learn more about my web design services.
            </p>
          </div>
        </article>
      </main>

      {/* Related Articles */}
      <section className="bg-gray-100 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Related Articles</h2>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">
              <Link href="/articles/react-api-best-practices" className="text-blue-600 dark:text-blue-400 hover:underline">
                Best Practices for Using APIs within React
              </Link>
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Learn how to effectively integrate and manage API calls in your React applications with these proven best practices.
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Published: May 11, 2025
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
