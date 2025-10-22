import HomeAlt3 from "./components/home/HomeAlt3";
import HomeAlt1 from "./components/home/HomeAlt1";
import HomeAlt2 from "./components/home/HomeAlt2";

export const metadata = {
  title: "Αρχική | Τεχνικό Γραφείο Θ. Γ. Ραδαίος",
  description:
    "Τεχνικό Γραφείο Θανάσης Γ. Ραδαίος – Πολιτικός Μηχανικός ΕΜΠ, MSc. Άδεια – Μελέτη – Κατασκευή.",
};

export default function HomePage() {
  return (
    <>
      <HomeAlt1 />
      <HomeAlt2 />
      <HomeAlt3 />
    </>
  );
}
