import Footer from "../components/Footer";
import IntroSection from "../components/IntroSection";
import AboutSection from "../components/AboutSection";
import FeatureGrid from "../components/FeatureGrid";
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
              <strong className="text-2xl">Η απόλυτη τεχνολογία EMS – Made in Germany</strong>
            </div>
            <div className="mt-6">
              Η miha bodytec σας προσφέρει δύο κορυφαία ιατρικά συστήματα EMS, σχεδιασμένα και κατασκευασμένα στη Γερμανία.
              Είτε επιλέξετε την <strong>ενσύρματη έκδοση (Miha Bodytec II medical)</strong> είτε την <strong>ασύρματη έκδοση (Miha Bodytec m.ove)</strong>, παραλαμβάνετε <strong>πλήρη εξοπλισμό i-body, εκπαίδευση και πιστοποίηση</strong> για την ομάδα σας.
            </div>
            <div className="mt-6">
              Και οι δύο συσκευές πληρούν τις πιο αυστηρές διεθνείς ιατρικές προδιαγραφές, προσφέροντας αξιοπιστία, αντοχή στον χρόνο και χαμηλό κόστος συντήρησης.
              Η ασύρματη έκδοση m.ove διατίθεται σε δύο μορφές – <strong>Travelstation</strong> και <strong>Workstation</strong> – ώστε να καλύπτει κάθε ανάγκη κινητικότητας ή στούντιο.
            </div>
          </>
        }
      />

      <AboutSection
        title="Miha Bodytec II medical (ενσύρματο)"
        image="/images/product/medical_2.jpg"
        reverse
        imageDimensions="h-150 mx-auto object-contain"
        description={[
          "Το miha bodytec II medical αποτελεί το πρότυπο για την εμπορική εκπαίδευση και τις θεραπευτικές εφαρμογές EMS παγκοσμίως.",
          "Πιστοποιημένο ως ιατρικό προϊόν, συνδυάζει καινοτόμο τεχνολογία, ασφαλή λειτουργία και ανθεκτική κατασκευή.",
          "Η αλουμινένια θήκη του εξασφαλίζει ιδανική προστασία των ηλεκτρονικών, ενώ έχει αποδειχθεί αξιόπιστο σε χιλιάδες χρήσεις καθημερινής λειτουργίας."
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
        title="Miha Bodytec m.ove (ασύρματο & φορητό)"
        image="/images/product/move_1.jpg"
        reverse={false}
        imageDimensions="h-150 mx-auto object-contain"
        description={[
          "Το miha bodytec m.ove ξεχωρίζει για τη φορητότητα και την προσαρμοστικότητά του. Ιδανικό για μετακινήσεις εντός του χώρου ή για χρήση εκτός στούντιο, ενσωματώνεται εύκολα στην καθημερινή λειτουργία και προσφέρει ελευθερία κίνησης χωρίς καλώδια. Διατίθεται σε δύο εκδόσεις — Travelstation και Workstation — ώστε να καλύπτει διαφορετικές ανάγκες χρήσης.",
        ]}
        ticks={[
          "Πιστοποιημένο ιατρικό προϊόν",
          "Περιστροφικά κουμπιά με αίσθηση ανάδρασης για ακριβή και ασφαλή λειτουργία",
          "Ενιαίο περιβάλλον χρήσης για μέγιστη ασφάλεια και έλεγχο",
        ]}
        tickIcon="/icons/check.png"   // βάλε εδώ το PNG για τα ticks
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
        // title="Η δύναμη του EMS… παντού"
        paragraph={
          <>
            <div>
              <strong className="text-2xl">Η δύναμη του EMS . . . <i>παντού</i> !</strong>
            </div>
            <div className="mt-6">
              Η σειρά miha bodytec m.ove φέρνει την τεχνολογία EMS σε κάθε χώρο και περίσταση. Σχεδιασμένη με γνώμονα την ευελιξία και την επαγγελματική εικόνα, σας επιτρέπει να προσαρμόζετε την υπηρεσία σας ανάλογα με τις ανάγκες των πελατών σας: από συνεδρίες στο στούντιο μέχρι κατ’ οίκον προπονήσεις ή επαγγελματικούς χώρους υγείας.
            </div>
            <div className="mt-6">
              Επιλέξτε ανάμεσα σε δύο εκδόσεις:
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
          "Η Travelstation m.ove μετατρέπει το EMS σε πραγματικά φορητή υπηρεσία. Με ελαφρύ, συμπαγές και ανθεκτικό σχεδιασμό, σας δίνει τη δυνατότητα να μεταφέρετε και να εφαρμόζετε συνεδρίες παντού – από το στούντιο και το σπίτι του πελάτη, μέχρι εξωτερικούς χώρους ή ακόμα και ταξίδια."
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
          "Η Workstation m.ove είναι η ιδανική επιλογή για επαγγελματικούς χώρους που απαιτούν ταχύτητα, οργάνωση και εντυπωσιακή παρουσίαση. Με κινητή βάση και εργονομικό σχεδιασμό, διευκολύνει το προσωπικό σας να μετακινεί και να χρησιμοποιεί το σύστημα εύκολα, ενώ αναβαθμίζει την εμπειρία του πελάτη.",
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
        image="/images/general/17.webp"
        title="Εξοπλισμός i-body"
        paragraph={
          <>
            <div>
              <strong className="text-2xl">Όλα όσα χρειάζεστε για να ξεκινήσετε</strong>
            </div>
            <div className="mt-6">
              Επιλέγοντας ένα μηχάνημα Miha Bodytec, δεν αποκτάτε μόνο την τεχνολογία του EMS. Μαζί παραλαμβάνετε τον πλήρη ιατρικά πιστοποιημένο εξοπλισμό i-body®, σχεδιασμένο ώστε να διασφαλίζει μέγιστη απόδοση, υγιεινή και άνεση. Έτσι, ξεκινάτε αμέσως, με όλα όσα χρειάζεστε για επαγγελματικό αποτέλεσμα.
            </div>
          </>
        }
      />

      <FeatureGrid items={features} title="Χαρακτηριστικά εξοπλισμού i-body" />


      <EquipmentGrid title="Εξοπλισμός i-body ®" items={equipmentItems}   rowMaxH={280} />


      <Footer />
    </>
  );
}
