import IntroSection from "../components/IntroSection";
import Footer from "../components/Footer";
import VideoSection from "../components/VideoSection";
import PricingPackage from "../components/PricingPackage";
import pricingPackage from "../../../public/data/pricingPackage";
import AboutSection from "../components/AboutSection";


export default function ColabPage() {
  return (
    <main className="w-full">
      <IntroSection
        image="/images/general/16.png"
        title="Συνεργασία Μαζί Μας"
        paragraph={
          <>
            <div>
              <h2>Από την τεχνολογία… στην ολοκληρωμένη λύση EMS</h2>
            </div>
            <div className="mt-6 space-y-3 leading-relaxed">
              <p>
                Με την αγορά ενός συστήματος miha bodytec, δεν αποκτάτε απλώς τον κορυφαίο εξοπλισμό EMS. Η ομάδα σας λαμβάνει <strong>δωρεάν εκπαίδευση</strong> από πιστοποιημένους εκπαιδευτές από τη μητρική εταιρεία, ώστε να ξεκινήσετε άμεσα με ασφάλεια και σιγουριά.
              </p>
              <p>
                Η διαδικασία ολοκληρώνεται με την <strong>επίσημη πιστοποίηση</strong> miha bodytec και την <strong>ένταξή σας στο διεθνές δίκτυο πελατών μας</strong>, με συνεχή υποστήριξη και πρόσβαση σε νέες γνώσεις.
              </p>
              <p className="flex items-center gap-2">
                <img
                  src="/icons/package.png"
                  alt="gift icon"
                  className="w-10 h-10 select-none"
                />
                <i>
                  <strong>Και το καλύτερο;</strong> Μαζί με το σύστημα, στην τιμή περιλαμβάνεται ολόκληρο το πακέτο συνεργασίας με όλα τα παρακάτω προνόμια.
                </i>
              </p>

            </div>
          </>
        }
      />


      <PricingPackage items={pricingPackage} />

      <AboutSection
        title="Γίνετε Μέλος του Δικτύου"
        image="/images/general/certified.png"
        fullWidthTitle={false}
        reverse={true}
        description={[
          "Με την ένταξή σας στο δίκτυο πιστοποιημένων συνεργατών της miha bodytec αποκτάτε πρόσβαση σε μια δυναμική κοινότητα επαγγελματιών που ξεχωρίζουν για την ποιότητα και την αξιοπιστία τους.",
          "Το δίκτυο Certified Miha Owners αποτελεί σημείο αναφοράς για την τεχνολογία EMS στην Ελλάδα και την Κύπρο, προσφέροντας κύρος και ανταγωνιστικό πλεονέκτημα στα μέλη του.",
          "Ως μέλος, το στούντιό σας προβάλλεται μέσα από την επίσημη πλατφόρμα και αναγνωρίζεται ως πιστοποιημένος συνεργάτης της miha bodytec.",
          "Παράλληλα, επωφελείστε από συνεχή ενημέρωση, εκπαιδευτικά προγράμματα, και την υποστήριξη του δικτύου για τη διαρκή ανάπτυξη της επιχείρησής σας."
        ]}
        ctaText="Δείτε το Δίκτυο"
        ctaLink="https://certifiedmihaowners.gr/"
      />


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
        videoUrl="https://www.youtube.com/embed/z1UuZjxtDpc?si=fyIwPKbSefy3UKvA"
        ctaText="Επικοινωνία"
        ctaLink="/contact"
      />


      <Footer />

    </main>
  );
}
