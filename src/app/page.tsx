export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <h1 className="text-4xl font-bold text-center">My Static Website</h1>

        <div className="max-w-2xl text-center">
          <p className="mb-4">
            This is a simple static website built with Next.js for my homework assignment.
          </p>
          <p className="mb-4">
            I&apos;ve customized this page to demonstrate that I can update the source code.
          </p>
          <p className="mb-8">
            This site is managed through GitHub and deployed to a live server.
          </p>
        </div>

        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold mb-4 text-center">Latest Articles</h2>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">
              <a href="/articles/react-api-best-practices" className="text-blue-600 dark:text-blue-400 hover:underline">
                Best Practices for Using APIs within React
              </a>
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Learn how to effectively integrate and manage API calls in your React applications with these proven best practices.
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Published: May 11, 2024
            </div>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
