import Footer from "../components/Footer";
import IntroSection from "../components/IntroSection";
import AboutSection from "../components/AboutSection";
import FeatureGrid from "../components/product/FeatureGrid";
import {equipmentItems} from "../../../public/data/equipment";
import features from "../../../public/data/features";
import EquipmentGrid from "../components/product/EquipmentGrid";


export default function ProductPage() {
  return (
    <>
      <IntroSection
        image="/images/general/25.jpg"
        title="Το προϊόν"
        paragraph={
          <>
            <div>
              <h2>Η απόλυτη τεχνολογία EMS – Made in Germany</h2>
            </div>
            <div className="mt-6 space-y-3 leading-relaxed">
              <p>
                Η miha bodytec σας προσφέρει δύο κορυφαία ιατρικά συστήματα EMS, σχεδιασμένα και κατασκευασμένα στη
                Γερμανία.
                Είτε επιλέξετε την <strong>ενσύρματη έκδοση (miha bodytec II medical)</strong> είτε την <strong>ασύρματη
                έκδοση (miha bodytec m.ove)</strong>, παραλαμβάνετε <strong>πλήρη εξοπλισμό i-body, εκπαίδευση και
                πιστοποίηση</strong> για την ομάδα σας.
              </p>
            </div>
            <div className="mt-6 space-y-3 leading-relaxed">
              <p>
                Και οι δύο συσκευές πληρούν τις πιο αυστηρές διεθνείς ιατρικές προδιαγραφές, προσφέροντας αξιοπιστία, αντοχή στον χρόνο και χαμηλό κόστος συντήρησης. Η ασύρματη έκδοση m.ove διατίθεται σε δύο μορφές – <strong>Travelstation</strong> και <strong>Workstation</strong> – ώστε να καλύπτει κάθε ανάγκη φορητότητας ή στούντιο.
              </p>
            </div>
          </>
        }
      />

      <AboutSection
        title="miha bodytec II medical (ενσύρματο)"
        image="/images/product/medical_2.jpg"
        reverse
        imageDimensions="h-150 mx-auto object-contain"
        description={[
          "Το <strong>miha bodytec II medical</strong> αποτελεί το πρότυπο για την εμπορική εκπαίδευση και τις θεραπευτικές εφαρμογές EMS παγκοσμίως.",
          "<strong>Πιστοποιημένο ως ιατρικό προϊόν</strong>, συνδυάζει καινοτόμο τεχνολογία, ασφαλή λειτουργία και ανθεκτική κατασκευή.",
          "Η αλουμινένια θήκη του εξασφαλίζει <strong>ιδανική προστασία</strong> των ηλεκτρονικών, ενώ έχει αποδειχθεί αξιόπιστο σε χιλιάδες χρήσεις καθημερινής λειτουργίας."
        ]}
        ticks={[
          "Πιστοποιημένο ιατρικό προϊόν",
          "Περιστροφικά κουμπιά με αίσθηση ανάδρασης για ακριβή και ασφαλή λειτουργία",
          "Βάση εδάφους με ρυθμιζόμενη κατακόρυφη λαβή για σταθερότητα και εργονομία",
          "Ενιαίο περιβάλλον χρήσης για μέγιστη ασφάλεια και έλεγχο",
        ]}
        tickIcon="/icons/check.png"
        features={[
          {
            icon: "/icons/wireless.png",
            text: "Μετάδοση παλμών μέσω i-body connect i-body connect wireless",
          },
          {
            icon: "/icons/customize.png",
            text: "Εξατομικευμένο και ελεύθερα προσαρμόσιμο",
          },
          {
            icon: "/icons/connectivity.png",
            text: "Μέγιστη συνδεσιμότητα (Wi-Fi, Bluetooth, RFID, Mesh)",
          },
        ]}
      />

      <AboutSection
        title="miha bodytec m.ove (ασύρματο & φορητό)"
        image="/images/product/move_1.jpg"
        reverse={false}
        imageDimensions="h-150 mx-auto object-contain"
        description={[
          "Το <strong>miha bodytec m.ove</strong> ξεχωρίζει για τη φορητότητα και την προσαρμοστικότητά του. Ιδανικό για μετακινήσεις εντός του χώρου ή για χρήση εκτός στούντιο, ενσωματώνεται εύκολα στην καθημερινή λειτουργία και προσφέρει ελευθερία κίνησης χωρίς καλώδια. Διατίθεται σε <strong>δύο εκδόσεις</strong> — <strong>Travelstation και Workstation</strong> — ώστε να καλύπτει διαφορετικές ανάγκες χρήσης.",
        ]}
        ticks={[
          "Πιστοποιημένο ιατρικό προϊόν",
          "Περιστροφικά κουμπιά με αίσθηση ανάδρασης για ακριβή και ασφαλή λειτουργία",
          "Ενιαίο περιβάλλον χρήσης για μέγιστη ασφάλεια και έλεγχο",
        ]}
        tickIcon="/icons/check.png"
        features={[
          {
            icon: "/icons/duration.png",
            text: "Προηγμένη μπαταρία λιθίου μεγάλης διάρκειας",
          },
          {
            icon: "/icons/charger.png",
            text: "Φορτιστής με μαγνητική αυτόματη ευθυγράμμιση",
          },
          {
            icon: "/icons/wireless.png",
            text: "Μετάδοση παλμών μέσω i-body connect wireless",
          },
          {
            icon: "/icons/customize.png",
            text: "Εξατομικευμένο και ελεύθερα προσαρμόσιμο",
          },
          {
            icon: "/icons/connectivity.png",
            text: "Μέγιστη συνδεσιμότητα (Wi-Fi, Bluetooth, RFID, Mesh)",
          },
        ]}
      />


      <IntroSection
        paragraph={
          <>
            <div>
              <h2>Η δύναμη του EMS ... <i>παντού</i> !</h2>
            </div>
            <div className="mt-6 space-y-3 leading-relaxed">
              <p>
                Η σειρά miha bodytec m.ove φέρνει την τεχνολογία EMS σε κάθε χώρο και περίσταση. Σχεδιασμένη με γνώμονα
                την ευελιξία και την επαγγελματική εικόνα, σας επιτρέπει να προσαρμόζετε την υπηρεσία σας ανάλογα με τις
                ανάγκες των πελατών σας: από συνεδρίες στο στούντιο μέχρι κατ’ οίκον προπονήσεις ή επαγγελματικούς χώρους
                υγείας.
              </p>
            </div>
            <div className="mt-6 space-y-3 leading-relaxed">
              <p>
                Επιλέξτε ανάμεσα σε δύο εκδόσεις:
              </p>
            </div>
            <div className="mt-2">
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Travelstation</strong> – για απόλυτη φορητότητα και μετακινήσεις χωρίς περιορισμούς
                </li>
                <li>
                  <strong>Workstation</strong> – για οργάνωση, εργονομία και ταχύτητα μέσα στον επαγγελματικό σας χώρο
                </li>
              </ul>
            </div>
          </>
        }
        videoSrc="/videos/3.mp4"
        poster="/images/general/28.jpg"
      />

      <AboutSection
        title="Travelstation m.ove"
        image="/images/product/travelstation_1.jpg"
        imageDimensions="h-150 mx-auto object-contain"
        reverse
        description={[
          "Η <strong>Travelstation m.ove</strong> μετατρέπει το EMS σε πραγματικά φορητή υπηρεσία. Με ελαφρύ, συμπαγές και ανθεκτικό σχεδιασμό, σας δίνει τη δυνατότητα να μεταφέρετε και να εφαρμόζετε συνεδρίες παντού – από το στούντιο και το σπίτι του πελάτη, μέχρι εξωτερικούς χώρους ή ακόμα και ταξίδια."
        ]}
        ticks={[
          "Αδιάβροχο και ανθεκτικό ύφασμα Deuter Sports",
          "Βάση άνθρακα με χειρολαβή για σταθερότητα",
          "Ενσωματωμένη μπαταρία μεγάλης διάρκειας",
          "Μοντουλαρισμένος σχεδιασμός για εύκολη συναρμολόγηση",
          "Premium design για επαγγελματική παρουσίαση",
        ]}
        features={[
          {
            icon: "/icons/portability.png",
            text: "Απόλυτη φορητότητα – εύκολη μεταφορά σε αυτοκίνητο, τρένο ή αεροπλάνο",
          },
          {
            icon: "/icons/flexibility.png",
            text: "Ευελιξία χώρου – συνεδρίες σε σπίτια, εξωτερικούς χώρους ή συνεργαζόμενα γυμναστήρια",
          },
          {
            icon: "/icons/duration.png",
            text: "Ελευθερία κίνησης – χρήση χωρίς ανάγκη άμεσης τροφοδοσίας",
          },
          {
            icon: "/icons/opportunity.png",
            text: "Νέες ευκαιρίες – επέκταση υπηρεσιών «από πόρτα σε πόρτα»",
          },
        ]}
      />

      <AboutSection
        title="Workstation m.ove"
        image="/images/product/workstation_3.jpg"
        reverse={false}
        imageDimensions="h-150 mx-auto object-contain"
        description={[
          "Η <strong>Workstation m.ove</strong> είναι η ιδανική επιλογή για επαγγελματικούς χώρους που απαιτούν ταχύτητα, οργάνωση και εντυπωσιακή παρουσίαση. Με κινητή βάση και εργονομικό σχεδιασμό, διευκολύνει το προσωπικό σας να μετακινεί και να χρησιμοποιεί το σύστημα εύκολα, ενώ αναβαθμίζει την εμπειρία του πελάτη.",
        ]}
        ticks={[
          "Υψηλή ευκινησία μέσα από διαδρόμους, πόρτες και ανελκυστήρες",
          "Δυνατότητα λειτουργίας από όλες τις πλευρές και γωνίες",
          "Ενσωματωμένη χειρολαβή για σταθερότητα",
          "Πολλαπλές επιλογές αποθήκευσης για εξοπλισμό EMS",
          "Καθαρή και επαγγελματική εμφάνιση"
        ]}
        tickIcon="/icons/check.png"
        features={[
          {
            icon: "/icons/mobility.png",
            text: "Κινητή βάση με ρόδες – εύκολη μετακίνηση εντός του χώρου"
          },
          {
            icon: "/icons/storage.png",
            text: "Ενσωματωμένος αποθηκευτικός χώρος - για γιλέκα, καλώδια και αξεσουάρ"
          },
          {
            icon: "/icons/durability.png",
            text: "Αντοχή & Σταθερότητα – σχεδιασμένη για καθημερινή επαγγελματική χρήση"
          },
          {
            icon: "/icons/design.png",
            text: "Μοντέρνα αισθητική - που εντυπωσιάζει τους πελάτες"
          }
        ]}
      />


      <IntroSection
        image="/images/general/17.png"
        title="Εξοπλισμός i-body"
        paragraph={
          <>
            <div>
              <h2>Όλα όσα χρειάζεστε για να ξεκινήσετε</h2>
            </div>
            <div className="mt-6 space-y-3 leading-relaxed">
              <p>
                Επιλέγοντας ένα μηχάνημα miha bodytec, δεν αποκτάτε μόνο την τεχνολογία του EMS. Μαζί παραλαμβάνετε τον πλήρη ιατρικά πιστοποιημένο εξοπλισμό i-body®, σχεδιασμένο ώστε να διασφαλίζει μέγιστη απόδοση, υγιεινή και άνεση. Έτσι, ξεκινάτε αμέσως, με όλα όσα χρειάζεστε για επαγγελματικό αποτέλεσμα.
              </p>
            </div>
          </>
        }
      />

      <FeatureGrid
        items={features}
        title={
          <>
            Χαρακτηριστικά εξοπλισμού
            <span className="block md:hidden" /> {/* break only on mobile */}
            <span className="hidden md:inline"> </span> {/* space on desktop */}
            i-body
          </>
        }
      />



      <EquipmentGrid title="Εξοπλισμός i-body ®" items={equipmentItems}   rowMaxH={280} />


      <Footer />
    </>
  );
}
