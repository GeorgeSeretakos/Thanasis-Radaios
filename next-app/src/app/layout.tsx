import {
    Open_Sans,
    Noto_Serif,
} from "next/font/google";
import "./styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ReactNode } from "react";

const openSans = Open_Sans({
    subsets: ["latin", "greek"],
    variable: "--font-open-sans",
    display: "swap",
});

const notoSerif = Noto_Serif({
    subsets: ["latin", "greek"],
    variable: "--font-noto-serif",
    display: "swap",
});

export const metadata = {
    title: "Τεχνικό Γραφείο Θ. Γ. Ραδαίος",
    description: "Πολιτικός Μηχανικός ΕΜΠ, MSc — Άδεια • Μελέτη • Κατασκευή.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="el">
        <body
            className={`
          ${openSans.variable}
          ${notoSerif.variable}
          antialiased min-h-screen flex flex-col bg-[#0B0B0C] text-white
        `}
        >
        <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            hidden
        >
            <input type="hidden" name="form-name" value="contact"/>
            <input type="text" name="firstName"/>
            <input type="text" name="lastName"/>
            <input type="email" name="email"/>
            <input type="tel" name="phone"/>
            <textarea name="message"/>
            <input type="checkbox" name="consent" />
            <input type="text" name="bot-field"/>
        </form>

        <Navbar/>
        <main className="flex-1 mt-16">{children}</main>
        <Footer/>
        </body>
        </html>
    );
}