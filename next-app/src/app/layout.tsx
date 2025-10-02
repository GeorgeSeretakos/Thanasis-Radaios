import {
    Roboto,
} from "next/font/google";
import "./styles/globals.css";
import Navbar from "./components/general/Navbar";
import Footer from "./components/general/Footer";
import { ReactNode } from "react";

const roboto = Roboto({
    subsets: ["latin", "greek"],
    variable: "--font-roboto",
    display: "swap",
    weight: ["400", "500", "700"], // βάλε όσα weights θες
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
                ${roboto.variable}
                antialiased min-h-screen flex flex-col bg-[#0B0B0C] text-white font-sans
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
            <input type="text" name="bot-field"/>
        </form>

        <Navbar/>
        <main className="flex-1 mt-16 text-justify">{children}</main>
        <Footer/>
        </body>
        </html>
    );
}
