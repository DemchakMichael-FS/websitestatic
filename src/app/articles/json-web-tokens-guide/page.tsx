import Image from 'next/image';
import Link from 'next/link';

export default function JSONWebTokensGuide() {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">JSON Web Tokens: A Complete Guide to Modern Authentication</h1>
            <div className="text-gray-600 dark:text-gray-400 mb-4">Published: May 20, 2025</div>
          </div>

          {/* Featured Image */}
          <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image
              src="/images/json.png"
              alt="JSON Web Tokens Guide"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>

          {/* Introduction */}
          <h2>Introduction</h2>
          <p>
            JSON Web Tokens (JWT) have become the gold standard for modern web authentication and authorization. 
            Whether you&apos;re building a single-page application, a mobile app, or a microservices architecture, 
            understanding JWTs is essential for implementing secure, scalable authentication systems.
          </p>
          <p>
            In this comprehensive guide, we&apos;ll explore what JWTs are, how they work, their structure, 
            benefits, and best practices for implementation. By the end, you&apos;ll have a solid understanding 
            of when and how to use JWTs effectively in your applications.
          </p>

          {/* What are JWTs */}
          <h2>What are JSON Web Tokens?</h2>
          <p>
            A JSON Web Token is a compact, URL-safe means of representing claims to be transferred between two parties. 
            Think of it as a digital passport that contains information about a user and can be verified without 
            needing to check with a central authority every time.
          </p>
          <p>
            JWTs are self-contained, meaning they carry all the information needed within the token itself. 
            This makes them perfect for distributed systems where you want to avoid constant database lookups 
            for user verification.
          </p>

          {/* JWT Structure */}
          <h2>Understanding JWT Structure</h2>
          <p>
            A JWT consists of three parts separated by dots (.), making it look something like this:
            <code>xxxxx.yyyyy.zzzzz</code>
          </p>

          <h3>1. Header</h3>
          <p>
            The header typically consists of two parts: the type of token (JWT) and the signing algorithm 
            being used, such as HMAC SHA256 or RSA. This information is Base64Url encoded to form the first 
            part of the JWT.
          </p>

          <h3>2. Payload</h3>
          <p>
            The payload contains the claims - statements about an entity (typically, the user) and additional data. 
            There are three types of claims: registered, public, and private claims. The payload is also Base64Url 
            encoded to form the second part of the JWT.
          </p>

          <h3>3. Signature</h3>
          <p>
            The signature is used to verify that the sender of the JWT is who it says it is and to ensure that 
            the message wasn&apos;t changed along the way. It&apos;s created by taking the encoded header, encoded payload, 
            a secret, and the algorithm specified in the header.
          </p>

          {/* How JWTs Work */}
          <h2>How JWTs Work in Practice</h2>
          <p>
            The typical JWT authentication flow works like this:
          </p>
          <ol>
            <li><strong>User Login:</strong> User provides credentials (username/password)</li>
            <li><strong>Server Verification:</strong> Server validates credentials against the database</li>
            <li><strong>Token Generation:</strong> Server creates a JWT containing user information and signs it</li>
            <li><strong>Token Return:</strong> Server sends the JWT back to the client</li>
            <li><strong>Token Storage:</strong> Client stores the JWT (usually in localStorage or a cookie)</li>
            <li><strong>Authenticated Requests:</strong> Client includes JWT in subsequent API requests</li>
            <li><strong>Token Verification:</strong> Server verifies the JWT signature and extracts user information</li>
          </ol>

          {/* Benefits of JWTs */}
          <h2>Key Benefits of Using JWTs</h2>

          <h3>Stateless Authentication</h3>
          <p>
            Unlike traditional session-based authentication, JWTs don&apos;t require server-side storage. 
            All necessary information is contained within the token itself, making your application stateless 
            and easier to scale horizontally.
          </p>

          <h3>Cross-Domain Support</h3>
          <p>
            JWTs work seamlessly across different domains and services. This makes them ideal for microservices 
            architectures and single sign-on (SSO) implementations where users need to access multiple applications 
            with a single authentication.
          </p>

          <h3>Mobile-Friendly</h3>
          <p>
            Mobile applications benefit greatly from JWTs because they don&apos;t rely on cookies, which can be 
            problematic in mobile environments. JWTs can be easily stored and transmitted in mobile apps.
          </p>

          <h3>Performance</h3>
          <p>
            Since JWTs are self-contained, there&apos;s no need to query the database for every request to verify 
            user authentication. This reduces database load and improves application performance.
          </p>

          {/* Best Practices */}
          <h2>JWT Security Best Practices</h2>

          <h3>Keep Tokens Short-Lived</h3>
          <p>
            Implement short expiration times for your JWTs (typically 15-30 minutes) and use refresh tokens 
            for longer-term access. This limits the damage if a token is compromised.
          </p>

          <h3>Use Strong Secrets</h3>
          <p>
            Always use cryptographically strong secrets for signing your JWTs. The secret should be long, 
            random, and stored securely (preferably in environment variables).
          </p>

          <h3>Validate Everything</h3>
          <p>
            Always validate the JWT signature, expiration time, and any custom claims before trusting the token. 
            Never trust user input, even if it comes from a JWT.
          </p>

          <h3>Secure Storage</h3>
          <p>
            Store JWTs securely on the client side. While localStorage is common, consider using secure, 
            httpOnly cookies for web applications to prevent XSS attacks.
          </p>

          {/* Common Pitfalls */}
          <h2>Common JWT Pitfalls to Avoid</h2>

          <h3>Storing Sensitive Data</h3>
          <p>
            Remember that JWTs are encoded, not encrypted. Anyone can decode and read the payload. 
            Never store sensitive information like passwords or personal data in JWTs.
          </p>

          <h3>Ignoring Token Revocation</h3>
          <p>
            JWTs can&apos;t be easily revoked once issued. Plan for scenarios where you need to invalidate tokens 
            (user logout, security breach) by implementing a token blacklist or using short expiration times.
          </p>

          <h3>Algorithm Confusion</h3>
          <p>
            Always specify and validate the algorithm used to sign the JWT. Some libraries default to 
            &apos;none&apos; algorithm, which accepts unsigned tokens.
          </p>

          {/* When to Use JWTs */}
          <h2>When to Use JWTs</h2>
          <p>
            JWTs are excellent for:
          </p>
          <ul>
            <li>Single Page Applications (SPAs)</li>
            <li>Mobile applications</li>
            <li>Microservices architectures</li>
            <li>API authentication</li>
            <li>Cross-domain authentication</li>
            <li>Stateless applications</li>
          </ul>

          <p>
            However, consider alternatives for:
          </p>
          <ul>
            <li>Traditional server-rendered applications</li>
            <li>Applications requiring immediate token revocation</li>
            <li>Systems with very strict security requirements</li>
          </ul>

          {/* Conclusion */}
          <h2>Conclusion</h2>
          <p>
            JSON Web Tokens provide a powerful, flexible solution for modern authentication challenges. 
            When implemented correctly with proper security measures, they can significantly improve your 
            application&apos;s scalability and user experience.
          </p>
          <p>
            Remember that security is not just about choosing the right technology, but implementing it correctly. 
            Always follow security best practices, keep your dependencies updated, and regularly review your 
            authentication implementation.
          </p>
          <p>
            As you implement JWTs in your applications, start with the basics, understand the security implications, 
            and gradually adopt more advanced features as your needs grow. The key is to balance security, 
            performance, and user experience to create robust authentication systems.
          </p>
        </article>
      </main>

      {/* Related Articles */}
      <section className="bg-gray-100 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                <Link href="/articles/securing-apis-best-practices" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Securing APIs: Essential Best Practices
                </Link>
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Learn the fundamental security practices every developer should implement when building APIs.
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Published: May 15, 2025
              </div>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                <Link href="/articles/react-api-best-practices" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Best Practices for Using APIs within React
                </Link>
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Learn how to effectively integrate and manage API calls in your React applications.
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Published: May 11, 2025
              </div>
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
