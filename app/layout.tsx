import type { Metadata } from "next";
import "./globals.css";
import { Source_Serif_4 } from 'next/font/google'



import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Motion Vision",
  description: "Exploring the future of web animations",
};


const serif = Source_Serif_4({ subsets: ['latin'], variable: '--font-serif' });


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable}`}>
      <body className="bg-black text-white flex flex-col min-h-screen ">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

