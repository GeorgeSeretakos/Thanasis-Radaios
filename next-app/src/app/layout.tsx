import { Geist, Geist_Mono, Great_Vibes, Manrope, Open_Sans, Roboto } from "next/font/google";
import "./styles/globals.css";
import Navbar from "./components/Navbar";
import NewsletterModal from "./components/NewsletterModal";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"], variable: "--font-great-vibes" });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const openSans = Open_Sans({ variable: "--font-open-sans", subsets: ["latin"] });
const roboto = Roboto({ variable: "--font-roboto", subsets: ["latin"] });

export const metadata = {
    title: "Miha Bodytec",
    description: "Website for Miha Bodytec",
};



export default function RootLayout({ children }: { children: React.ReactNode }) {

    return (
        <html lang="en">
        <body
            className={`
          ${manrope.variable} ${openSans.variable} ${roboto.variable}
          ${geistSans.variable} ${geistMono.variable} ${greatVibes.variable}
          antialiased
        `}
        >
        <form name="newsletter" netlify netlify-honeypot="bot-field" hidden>
            <input type="hidden" name="form-name" value="newsletter"/>
            <input type="text" name="firstName"/>
            <input type="text" name="lastName"/>
            <input type="email" name="email"/>
            <input type="tel" name="phone"/>
        </form>


        <Navbar/>
        <NewsletterModal/>
        <main className="mt-16">{children}</main>
        </body>
        </html>
    );
}
