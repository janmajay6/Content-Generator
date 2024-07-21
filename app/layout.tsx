import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./_components/Header";



const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Content Hub",
  description: "where innovation meets seamless and effortless content creation, tailored to your every need!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
    <ClerkProvider>
      <html lang="en">
    <body className={inter.className}>
     
    
      {children}</body>
  </html>
  </ClerkProvider>
   
  );
}
