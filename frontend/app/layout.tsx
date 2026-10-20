
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Providers from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Alvitoz Technology | Digital Solutions That Scale",
    template: "%s | Alvitoz Technology",
  },
  icons:{
    icon:"/icon.png"
  },
  description:
    "We build modern websites, backend systems, mobile applications, and digital experiences for growing businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
       <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
