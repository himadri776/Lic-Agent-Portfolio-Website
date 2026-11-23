import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Prakriti Chakraborty | LIC Advisor", description: "Personal insurance planning and LIC policy guidance with Prakriti Chakraborty." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }