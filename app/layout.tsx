import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./components/NavBar";
import LeftNavBar from "./components/LeftNavBar";
import { Providers } from "./components/provider/provider";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Reddit",
  description: "Dive Into Anything",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(children);
  return (
    <html lang="en">
      <Providers>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <NavBar />
          <div className="grid grid-flow-col grid-cols-[20%_80%]">
            <LeftNavBar />
            <div className=" h-[100vh]"></div>
            <div className="mt-20 ">{children}</div>
          </div>
        </body>
      </Providers>
    </html>
  );
}
