import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/providers/SmoothScroll";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata = {
  title: "Md Ashikur Rahman | Portfolio",
  description:
    "Md Ashikur Rahman - Junior Web Developer and CSE Student",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth" data-theme="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${manrope.variable} antialiased selection:bg-primary selection:text-black`}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
