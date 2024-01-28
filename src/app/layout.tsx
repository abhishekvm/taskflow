import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taskflow",
  description: "Simple Task Management App using NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body className="{inter.className}">
      <div className="ag-side-bar-left">
        <section>
          <nav>
            <Link href="/users">Users</Link>
          </nav>
          <nav>
            <Link href="/tasks">Tasks</Link>
          </nav>
        </section>
      </div>
      <section>
        {children}
      </section>
      </body>
    </html>
  );
}
