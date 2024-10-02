import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/navbar";


export const metadata: Metadata = {
  title: {
    template: '%s | Portfolio',
    default: 'Home | Portfolio',
  },
  description: "Manideep Alimi",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon"  type="image" href="./portfolio.png"/>
      <meta name="robots" content="noindex"></meta>
      </head>
      <body>
        <div>
        <Navbar/>
        {children}
        </div>
        </body>
    </html>
  );
}
