import IntroSection from "../components/IntroSection";
import Footer from "../components/Footer";
import VideoSection from "../components/VideoSection";
import PricingPackage from "../components/PricingPackage";
import presentationCards from "../../../public/data/presentationCards";


export default function ColabPage() {
  return (
    <main className="w-full">
      <IntroSection
        image="/images/general/15.webp"
        title="Πακέτο Συνεργασίας"
        paragraph={
          <>
            <div>
              <strong className="text-2xl">Από την τεχνολογία… στην ολοκληρωμένη λύση EMS</strong>
            </div>
            <div className="mt-6 space-y-3 leading-relaxed">
              <p>
                Με την αγορά ενός συστήματος Miha Bodytec, δεν αποκτάτε απλώς τον κορυφαίο εξοπλισμό EMS. Η ομάδα σας
                λαμβάνει <strong>δωρεάν εκπαίδευση</strong> από πιστοποιημένους instructors της μητρικής εταιρείας, ώστε
                να ξεκινήσετε άμεσα με ασφάλεια και σιγουριά. </p>
              <p>
                Η διαδικασία ολοκληρώνεται με την <strong>επίσημη πιστοποίηση</strong> Miha Bodytec και την <strong>ένταξή
                σας στο διεθνές δίκτυο συνεργατών</strong>, με συνεχή υποστήριξη και πρόσβαση σε νέες γνώσεις.
              </p>
              <p className="flex items-center gap-2">
                <img
                  src="/icons/package.png"
                  alt="gift icon"
                  className="w-10 h-10 select-none"
                />
                <i>
                  <strong className="text-xl">Και το καλύτερο;</strong> Μαζί με το σύστημα, στην τιμή περιλαμβάνεται
                  ολόκληρο το πακέτο συνεργασίας με όλα τα παρακάτω προνόμια.
                </i>
              </p>

            </div>
          </>
        }
      />


      <PricingPackage items={presentationCards} />

      <VideoSection
        title="Ανοίξτε το δικό σας EMS studio"
        paragraphs={[
          "Δεν χρειάζεστε μεγάλους χώρους ή πολύπλοκες εγκαταστάσεις. Δημιουργούμε λειτουργικά EMS studios από μόλις 25 τ.μ., είτε ως αυτόνομα mini στούντιο είτε ενσωματωμένα σε πολυλειτουργικά κέντρα.",
          "Με το miha bodytec m.ove (φορητό workstation) μπορείτε να προσφέρετε συνεδρίες παντού: σε εταιρικούς χώρους, κατ’ οίκον ή σε events.",
          `<h3 class="mt-6 mb-2 font-semibold text-lg"><i>Είναι τόσο απλό!</i></h3>
           <ul class="list-disc pl-5 space-y-1">
             <li>Μικρές απαιτήσεις χώρου: πλήρες setup από 25 τ.μ.</li>
             <li>Ευελιξία λειτουργίας: standalone ή integration σε υπάρχον κέντρο</li>
             <li>Φορητές λύσεις: με το m.ove προσφέρετε EMS on-the-go.</li>
           </ul>`
        ]}
        videoUrl="https://www.youtube.com/embed/IbxjhSCqeYg?si=m-M11G3rK2ALQIk_"
      />


      <Footer />

    </main>
  );
}
