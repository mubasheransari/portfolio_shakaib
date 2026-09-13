import type { Metadata } from "next";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Shakaib — Senior Software Engineer",
  description:
    "Muhammad Shakaib — Senior Full Stack Software Engineer specialising in PHP/Laravel, C#/.NET Core and React.js. 6+ years, led a 10-engineer team, delivered enterprise platforms for clients in New Zealand, Canada and the USA.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col bg-ink text-cream font-body">
        {children}
      </body>
    </html>
  );
}
