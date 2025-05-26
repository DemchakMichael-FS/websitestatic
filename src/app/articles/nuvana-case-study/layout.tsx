import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuvana: A Bilingual Website for Web Design Services",
  description: "A case study of Nuvana, a professional website built to showcase web design and SEO services for clients in Puerto Rico.",
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
