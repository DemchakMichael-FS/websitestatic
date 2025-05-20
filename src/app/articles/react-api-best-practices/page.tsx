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
            <div className="text-gray-600 dark:text-gray-400 mb-4">Published: May 11, 2024</div>
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

          <p>Here's an example of a centralized API service:</p>

          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
            <code>{`// api/index.js
const API_BASE_URL = 'https://api.example.com';

export const fetchUsers = async () => {
  try {
    const response = await fetch(\`\${API_BASE_URL}/users\`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const fetchUserById = async (id) => {
  try {
    const response = await fetch(\`\${API_BASE_URL}/users/\${id}\`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error(\`Error fetching user \${id}:\`, error);
    throw error;
  }
};`}</code>
          </pre>

          {/* Section 2 */}
          <h2>2. Use Custom Hooks for Data Fetching</h2>
          <p>
            Custom hooks allow you to extract and reuse stateful logic across components.
            For API calls, custom hooks can manage loading states, error handling, and data caching.
          </p>

          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
            <code>{`// hooks/useUsers.js
import { useState, useEffect } from 'react';
import { fetchUsers } from '../api';

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);
        const data = await fetchUsers();
        setUsers(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  return { users, loading, error };
};`}</code>
          </pre>

          <p>
            Using this hook in a component becomes straightforward:
          </p>

          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
            <code>{`// components/UserList.js
import { useUsers } from '../hooks/useUsers';

const UserList = () => {
  const { users, loading, error } = useUsers();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};`}</code>
          </pre>

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
            Consider creating reusable error boundaries to catch and display errors gracefully:
          </p>

          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
            <code>{`// components/ErrorBoundary.js
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <div>Something went wrong. Please try again later.</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;`}</code>
          </pre>

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

          <p>Here's an example using React Query:</p>

          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
            <code>{`// Using React Query
import { useQuery } from 'react-query';
import { fetchUsers } from '../api';

const UserList = () => {
  const { data: users, isLoading, error } = useQuery('users', fetchUsers);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};`}</code>
          </pre>

          {/* Conclusion */}
          <h2>Conclusion</h2>
          <p>
            Implementing these best practices will help you build more maintainable, efficient,
            and user-friendly React applications. By centralizing API calls, using custom hooks,
            handling errors properly, and leveraging specialized libraries, you can create a robust
            data fetching strategy that scales with your application.
          </p>
          <p>
            Remember that the specific approach you choose should align with your project's needs
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
              Published: May 12, 2024
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 My Tech Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
