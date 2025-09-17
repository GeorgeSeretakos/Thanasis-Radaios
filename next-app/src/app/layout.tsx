import {
    Geist,
    Geist_Mono,
    Great_Vibes,
    Manrope,
    Open_Sans,
    Roboto,
} from "next/font/google";
import "./styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {ReactNode} from "react";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const greatVibes = Great_Vibes({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-great-vibes",
});
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const openSans = Open_Sans({ variable: "--font-open-sans", subsets: ["latin"] });
const roboto = Roboto({ variable: "--font-roboto", subsets: ["latin"] });

export const metadata = {
    title: "Τεχνικό Γραφείο Θ. Γ. Ραδαίος",
    description: "Πολιτικός Μηχανικός ΕΜΠ, MSc — Άδεια • Μελέτη • Κατασκευή.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="el">
        <body
            className={`
          ${manrope.variable} ${openSans.variable} ${roboto.variable}
          ${geistSans.variable} ${geistMono.variable} ${greatVibes.variable}
          antialiased
          min-h-screen flex flex-col bg-[#0B0B0C] text-white
        `}
        >
        {/* Netlify hidden forms */}
        <form
            name="newsletter"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            hidden
        >
            <input type="hidden" name="form-name" value="newsletter" />
            <input type="text" name="Όνομα" />
            <input type="text" name="Επώνυμο" />
            <input type="email" name="email" />
            <input type="tel" name="Τηλέφωνο" />
        </form>

        <form
            name="order-request"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            hidden
        >
            <input type="hidden" name="form-name" value="order-request" />
            <textarea name="Σύνοψη_Παραγγελίας" />
            <input type="text" name="Όνομα" />
            <input type="text" name="Επώνυμο" />
            <input type="tel" name="Τηλέφωνο" />
            <textarea name="Μήνυμα / Σχόλιο" />
        </form>

        <Navbar />

        {/* Ο χώρος για περιεχόμενο — θα κάνει flex-1 */}
        <main className="flex-1 mt-16">{children}</main>

        <Footer />
        </body>
        </html>
    );
}
