import type { Metadata } from "next";
import "./globals.css";
import StateProvider from "./state_management/provider";
import { playFont } from "./fonts/fontsConfig";


export const metadata: Metadata = {
  title: "GTCO Fashion Weekend",
  description: "Powered by Intelligent Ives",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playFont.className} antialiased overflow-hidden`}
      >

        <StateProvider>
          {children}
        </StateProvider>
          
      </body>
    </html>
  );
}
