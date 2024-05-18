
import type { Metadata } from "next";
import { Fondamento } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/Navbar";
import Bulb from "@/components/ui/bulb";
import Banner from "./components/Banner";
import { ClerkProvider } from "@clerk/nextjs";
import Loading from "./components/Loading";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/navigation";



const fondamento = Fondamento({ subsets: ["latin"], 
variable: '--font-fondamento', 
weight: ['400'] });

const progress = new ProgressBar({
  size: 8,
  color: "#ea99b1",
  className: "z-50",
  delay: 300,
});




export const metadata: Metadata = {
  title: "SE NOTES",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={fondamento.className="mx-auto"}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
      <Navbar/>
      <Banner/>
      {children}
      <Bulb/>
      </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}