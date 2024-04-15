import { StrictMode } from "react";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Potrello",
  description: "As simplicitic as productivity could be",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className} className='m-0 p-0'>
        <StrictMode>{children}</StrictMode>
      </body>
    </html>
  );
}
