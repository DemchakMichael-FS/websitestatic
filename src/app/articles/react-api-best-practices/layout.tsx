import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Practices for Using APIs within React",
  description: "Learn how to effectively integrate and manage API calls in your React applications with these proven best practices.",
};

export default function ArticleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}
