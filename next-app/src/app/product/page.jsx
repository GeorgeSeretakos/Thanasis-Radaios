'use client';

import { useEffect, useState } from "react";

import Footer from "../components/Footer";
import IntroSection from "../components/IntroSection";
import AboutSection from "../components/AboutSection";
import FeatureGrid from "../components/product/FeatureGrid";
import EquipmentGrid from "../components/product/EquipmentGrid";
import OrderForm from "../components/product/OrderForm";

// ⬇️ Update your data files to export BOTH languages:
// export const equipmentItems_el = [...]; export const equipmentItems_en = [...];
import { equipmentItems_el, equipmentItems_en } from "../../../public/data/equipment";
// export const features_el = [...]; export const features_en = [...];
import { features_el, features_en } from "../../../public/data/features";

export default function ProductPage() {
  const [locale, setLocale] = useState("el");

  useEffect(() => {
    const saved = localStorage.getItem("locale") || "el";
    setLocale(saved);
  }, []);

  // pick localized data
  const equipmentItems = locale === "en" ? equipmentItems_en : equipmentItems_el;
  const features = locale === "en" ? features_en : features_el;

  return (
    <>
      <IntroSection
        image="/images/product/medical_1.png"
        title={locale === "en" ? "The Product" : "Το προϊόν"}
        paragraph={
          <>
            <div>
              <h2>
                {locale === "en"
                  ? "The ultimate EMS technology – Made in Germany"
                  : "Η απόλυτη τεχνολογία EMS – Made in Germany"}
              </h2>
            </div>
            <div className="mt-6 space-y-3 leading-relaxed">
              <p>
                {locale === "en" ? (
                  <>
                    Miha bodytec offers two top medical EMS systems, designed and manufactured in Germany.
                    Whether you choose the <strong>wired version (miha bodytec II medical)</strong> or the{" "}
                    <strong>wireless version (miha bodytec m.ove)</strong>, you receive{" "}
                    <strong>complete i-body equipment, training and certification</strong> for your team.
                  </>
                ) : (
                  <>
                    Η miha bodytec σας προσφέρει δύο κορυφαία ιατρικά συστήματα EMS, σχεδιασμένα και κατασκευασμένα στη
                    Γερμανία. Είτε επιλέξετε την <strong>ενσύρματη έκδοση (miha bodytec II medical)</strong> είτε την{" "}
                    <strong>ασύρματη έκδοση (miha bodytec m.ove)</strong>, παραλαμβάνετε{" "}
                    <strong>πλήρη εξοπλισμό i-body, εκπαίδευση και πιστοποίηση</strong> για την ομάδα σας.
                  </>
                )}
              </p>
            </div>
            <div className="mt-6 space-y-3 leading-relaxed">
              <p>
                {locale === "en" ? (
                  <>
                    Both devices meet the strictest international medical standards, offering reliability, longevity and
                    low maintenance cost. The wireless m.ove comes in two forms — <strong>Travelstation</strong> and{" "}
                    <strong>Workstation</strong> — to cover every portability or studio need.
                  </>
                ) : (
                  <>
                    Και οι δύο συσκευές πληρούν τις πιο αυστηρές διεθνείς ιατρικές προδιαγραφές, προσφέροντας
                    αξιοπιστία, αντοχή στον χρόνο και χαμηλό κόστος συντήρησης. Η ασύρματη έκδοση m.ove διατίθεται σε
                    δύο μορφές – <strong>Travelstation</strong> και <strong>Workstation</strong> – ώστε να καλύπτει κάθε
                    ανάγκη φορητότητας ή στούντιο.
                  </>
                )}
              </p>
            </div>
          </>
        }
        imageClassName="object-contain bg-white"
      />

      <AboutSection
        title={
          locale === "en"
            ? "miha bodytec II medical (wired)"
            : "miha bodytec II medical (ενσύρματο)"
        }
        image="/images/product/medical_2.jpg"
        reverse
        imageDimensions="h-150 mx-auto object-contain"
        description={
          locale === "en"
            ? [
              "The <strong>miha bodytec II medical</strong> sets the standard for commercial training and therapeutic EMS applications worldwide.",
              "<strong>Certified as a medical device</strong>, it combines innovative technology, safe operation and robust construction.",
              "Its aluminum housing ensures <strong>optimal protection</strong> of the electronics and has proven reliable in thousands of daily-use sessions.",
            ]
            : [
              "Το <strong>miha bodytec II medical</strong> αποτελεί το πρότυπο για την εμπορική εκπαίδευση και τις θεραπευτικές εφαρμογές EMS παγκοσμίως.",
              "<strong>Πιστοποιημένο ως ιατρικό προϊόν</strong>, συνδυάζει καινοτόμο τεχνολογία, ασφαλή λειτουργία και ανθεκτική κατασκευή.",
              "Η αλουμινένια θήκη του εξασφαλίζει <strong>ιδανική προστασία</strong> των ηλεκτρονικών, ενώ έχει αποδειχθεί αξιόπιστο σε χιλιάδες χρήσεις καθημερινής λειτουργίας.",
            ]
        }
        ticks={
          locale === "en"
            ? [
              "Certified medical device",
              "Rotary knobs with tactile feedback for precise and safe operation",
              "Floor stand with adjustable vertical handle for stability and ergonomics",
              "Unified interface for maximum safety and control",
            ]
            : [
              "Πιστοποιημένο ιατρικό προϊόν",
              "Περιστροφικά κουμπιά με αίσθηση ανάδρασης για ακριβή και ασφαλή λειτουργία",
              "Βάση εδάφους με ρυθμιζόμενη κατακόρυφη λαβή για σταθερότητα και εργονομία",
              "Ενιαίο περιβάλλον χρήσης για μέγιστη ασφάλεια και έλεγχο",
            ]
        }
        tickIcon="/icons/check.png"
        features={
          locale === "en"
            ? [
              { icon: "/icons/wireless.png", text: "Pulse transmission via i-body connect / i-body connect wireless" },
              { icon: "/icons/customize.png", text: "Personalized and freely configurable" },
              { icon: "/icons/connectivity.png", text: "Maximum connectivity (Wi-Fi, Bluetooth, RFID, Mesh)" },
            ]
            : [
              { icon: "/icons/wireless.png", text: "Μετάδοση παλμών μέσω i-body connect / i-body connect wireless" },
              { icon: "/icons/customize.png", text: "Εξατομικευμένο και ελεύθερα προσαρμόσιμο" },
              { icon: "/icons/connectivity.png", text: "Μέγιστη συνδεσιμότητα (Wi-Fi, Bluetooth, RFID, Mesh)" },
            ]
        }
      />

      <AboutSection
        title={
          locale === "en"
            ? "miha bodytec m.ove (wireless & portable)"
            : "miha bodytec m.ove (ασύρματο & φορητό)"
        }
        image="/images/product/move_1.jpg"
        reverse={false}
        imageDimensions="h-150 mx-auto object-contain"
        description={
          locale === "en"
            ? [
              "The <strong>miha bodytec m.ove</strong> stands out for its portability and adaptability. Ideal for moving within your space or for use outside the studio, it fits seamlessly into daily operations and offers freedom of movement without cables. It is available in <strong>two versions</strong> — <strong>Travelstation and Workstation</strong> — to meet different use cases.",
            ]
            : [
              "Το <strong>miha bodytec m.ove</strong> ξεχωρίζει για τη φορητότητα και την προσαρμοστικότητά του. Ιδανικό για μετακινήσεις εντός του χώρου ή για χρήση εκτός στούντιο, ενσωματώνεται εύκολα στην καθημερινή λειτουργία και προσφέρει ελευθερία κίνησης χωρίς καλώδια. Διατίθεται σε <strong>δύο εκδόσεις</strong> — <strong>Travelstation και Workstation</strong> — ώστε να καλύπτει διαφορετικές ανάγκες χρήσης.",
            ]
        }
        ticks={
          locale === "en"
            ? [
              "Certified medical device",
              "Rotary knobs with tactile feedback for precise and safe operation",
              "Unified interface for maximum safety and control",
            ]
            : [
              "Πιστοποιημένο ιατρικό προϊόν",
              "Περιστροφικά κουμπιά με αίσθηση ανάδρασης για ακριβή και ασφαλή λειτουργία",
              "Ενιαίο περιβάλλον χρήσης για μέγιστη ασφάλεια και έλεγχο",
            ]
        }
        tickIcon="/icons/check.png"
        features={
          locale === "en"
            ? [
              { icon: "/icons/duration.png", text: "Advanced long-lasting lithium battery" },
              { icon: "/icons/charger.png", text: "Charger with magnetic auto-alignment" },
              { icon: "/icons/wireless.png", text: "Pulse transmission via i-body connect wireless" },
              { icon: "/icons/customize.png", text: "Personalized and freely configurable" },
              { icon: "/icons/connectivity.png", text: "Maximum connectivity (Wi-Fi, Bluetooth, RFID, Mesh)" },
            ]
            : [
              { icon: "/icons/duration.png", text: "Προηγμένη μπαταρία λιθίου μεγάλης διάρκειας" },
              { icon: "/icons/charger.png", text: "Φορτιστής με μαγνητική αυτόματη ευθυγράμμιση" },
              { icon: "/icons/wireless.png", text: "Μετάδοση παλμών μέσω i-body connect wireless" },
              { icon: "/icons/customize.png", text: "Εξατομικευμένο και ελεύθερα προσαρμόσιμο" },
              { icon: "/icons/connectivity.png", text: "Μέγιστη συνδεσιμότητα (Wi-Fi, Bluetooth, RFID, Mesh)" },
            ]
        }
      />

      <IntroSection
        paragraph={
          <>
            <div>
              <h2>
                {locale === "en" ? (
                  <>The power of EMS ... <i>everywhere</i>!</>
                ) : (
                  <>Η δύναμη του EMS ... <i>παντού</i> !</>
                )}
              </h2>
            </div>
            <div className="mt-6 space-y-3 leading-relaxed">
              <p>
                {locale === "en" ? (
                  <>
                    The miha bodytec m.ove lineup brings EMS technology to every place and occasion. Designed for
                    flexibility and a professional look, it lets you tailor your service to clients’ needs: from in-studio
                    sessions to in-home training or healthcare facilities.
                  </>
                ) : (
                  <>
                    Η σειρά miha bodytec m.ove φέρνει την τεχνολογία EMS σε κάθε χώρο και περίσταση. Σχεδιασμένη με
                    γνώμονα την ευελιξία και την επαγγελματική εικόνα, σας επιτρέπει να προσαρμόζετε την υπηρεσία σας
                    ανάλογα με τις ανάγκες των πελατών σας: από συνεδρίες στο στούντιο μέχρι κατ’ οίκον προπονήσεις ή
                    επαγγελματικούς χώρους υγείας.
                  </>
                )}
              </p>
            </div>
            <div className="mt-6 space-y-3 leading-relaxed">
              <p>{locale === "en" ? "Choose between two versions:" : "Επιλέξτε ανάμεσα σε δύο εκδόσεις:"}</p>
            </div>
            <div className="mt-2">
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Travelstation</strong> —{" "}
                  {locale === "en"
                    ? "for absolute portability and unrestricted movement"
                    : "για απόλυτη φορητότητα και μετακινήσεις χωρίς περιορισμούς"}
                </li>
                <li>
                  <strong>Workstation</strong> —{" "}
                  {locale === "en"
                    ? "for organization, ergonomics and speed within your professional space"
                    : "για οργάνωση, εργονομία και ταχύτητα μέσα στον επαγγελματικό σας χώρο"}
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
        description={
          locale === "en"
            ? [
              "The <strong>Travelstation m.ove</strong> turns EMS into a truly portable service. With a light, compact and durable design, it enables you to deliver sessions anywhere — from the studio and the client’s home to outdoor spaces or even during travel.",
            ]
            : [
              "Η <strong>Travelstation m.ove</strong> μετατρέπει το EMS σε πραγματικά φορητή υπηρεσία. Με ελαφρύ, συμπαγές και ανθεκτικό σχεδιασμό, σας δίνει τη δυνατότητα να μεταφέρετε και να εφαρμόζετε συνεδρίες παντού – από το στούντιο και το σπίτι του πελάτη, μέχρι εξωτερικούς χώρους ή ακόμα και ταξίδια.",
            ]
        }
        ticks={
          locale === "en"
            ? [
              "Water-resistant and durable Deuter Sports fabric",
              "Carbon base with handle for stability",
              "Integrated long-lasting battery",
              "Modular design for easy assembly",
              "Premium design for professional presentation",
            ]
            : [
              "Αδιάβροχο και ανθεκτικό ύφασμα Deuter Sports",
              "Βάση άνθρακα με χειρολαβή για σταθερότητα",
              "Ενσωματωμένη μπαταρία μεγάλης διάρκειας",
              "Μοντουλαρισμένος σχεδιασμός για εύκολη συναρμολόγηση",
              "Premium design για επαγγελματική παρουσίαση",
            ]
        }
        features={
          locale === "en"
            ? [
              { icon: "/icons/portability.png", text: "Ultimate portability — easy transport by car, train or plane" },
              { icon: "/icons/flexibility.png", text: "Space flexibility — sessions at home, outdoors or partner gyms" },
              { icon: "/icons/duration.png", text: "Freedom of movement — operation without immediate power supply" },
              { icon: "/icons/opportunity.png", text: "New opportunities — expand door-to-door services" },
            ]
            : [
              { icon: "/icons/portability.png", text: "Απόλυτη φορητότητα – εύκολη μεταφορά σε αυτοκίνητο, τρένο ή αεροπλάνο" },
              { icon: "/icons/flexibility.png", text: "Ευελιξία χώρου – συνεδρίες σε σπίτια, εξωτερικούς χώρους ή συνεργαζόμενα γυμναστήρια" },
              { icon: "/icons/duration.png", text: "Ελευθερία κίνησης – χρήση χωρίς ανάγκη άμεσης τροφοδοσίας" },
              { icon: "/icons/opportunity.png", text: "Νέες ευκαιρίες – επέκταση υπηρεσιών «από πόρτα σε πόρτα»" },
            ]
        }
      />

      <AboutSection
        title="Workstation m.ove"
        image="/images/product/workstation_3.jpg"
        reverse={false}
        imageDimensions="h-150 mx-auto object-contain"
        description={
          locale === "en"
            ? [
              "The <strong>Workstation m.ove</strong> is the ideal choice for professional spaces that demand speed, organization and striking presentation. With a mobile base and ergonomic design, it helps your staff move and use the system easily while elevating the client experience.",
            ]
            : [
              "Η <strong>Workstation m.ove</strong> είναι η ιδανική επιλογή για επαγγελματικούς χώρους που απαιτούν ταχύτητα, οργάνωση και εντυπωσιακή παρουσίαση. Με κινητή βάση και εργονομικό σχεδιασμό, διευκολύνει το προσωπικό σας να μετακινεί και να χρησιμοποιεί το σύστημα εύκολα, ενώ αναβαθμίζει την εμπειρία του πελάτη.",
            ]
        }
        ticks={
          locale === "en"
            ? [
              "High maneuverability through corridors, doors and elevators",
              "Operates from all sides and angles",
              "Integrated handle for stability",
              "Multiple storage options for EMS equipment",
              "Clean and professional appearance",
            ]
            : [
              "Υψηλή ευκινησία μέσα από διαδρόμους, πόρτες και ανελκυστήρες",
              "Δυνατότητα λειτουργίας από όλες τις πλευρές και γωνίες",
              "Ενσωματωμένη χειρολαβή για σταθερότητα",
              "Πολλαπλές επιλογές αποθήκευσης για εξοπλισμό EMS",
              "Καθαρή και επαγγελματική εμφάνιση",
            ]
        }
        tickIcon="/icons/check.png"
        features={
          locale === "en"
            ? [
              { icon: "/icons/mobility.png", text: "Mobile base with wheels — easy movement within the space" },
              { icon: "/icons/storage.png", text: "Integrated storage — for vests, cables and accessories" },
              { icon: "/icons/durability.png", text: "Durability & stability — built for daily professional use" },
              { icon: "/icons/design.png", text: "Modern aesthetics — impress your clients" },
            ]
            : [
              { icon: "/icons/mobility.png", text: "Κινητή βάση με ρόδες – εύκολη μετακίνηση εντός του χώρου" },
              { icon: "/icons/storage.png", text: "Ενσωματωμένος αποθηκευτικός χώρος - για γιλέκα, καλώδια και αξεσουάρ" },
              { icon: "/icons/durability.png", text: "Αντοχή & Σταθερότητα – σχεδιασμένη για καθημερινή επαγγελματική χρήση" },
              { icon: "/icons/design.png", text: "Μοντέρνα αισθητική - που εντυπωσιάζει τους πελάτες" },
            ]
        }
      />

      <IntroSection
        image="/images/general/17.png"
        title={locale === "en" ? "i-body Equipment" : "Εξοπλισμός i-body"}
        paragraph={
          <>
            <div>
              <h2>
                {locale === "en"
                  ? "Everything you need to get started"
                  : "Όλα όσα χρειάζεστε για να ξεκινήσετε"}
              </h2>
            </div>
            <div className="mt-6 space-y-3 leading-relaxed">
              <p>
                {locale === "en" ? (
                  <>
                    By choosing a miha bodytec device, you don’t just acquire EMS technology. You also receive the full
                    medically certified i-body® equipment, engineered to ensure maximum performance, hygiene and comfort.
                    You start immediately with everything you need for professional results.
                  </>
                ) : (
                  <>
                    Επιλέγοντας ένα μηχάνημα miha bodytec, δεν αποκτάτε μόνο την τεχνολογία του EMS. Μαζί παραλαμβάνετε
                    τον πλήρη ιατρικά πιστοποιημένο εξοπλισμό i-body®, σχεδιασμένο ώστε να διασφαλίζει μέγιστη απόδοση,
                    υγιεινή και άνεση. Έτσι, ξεκινάτε αμέσως, με όλα όσα χρειάζεστε για επαγγελματικό αποτέλεσμα.
                  </>
                )}
              </p>
            </div>
          </>
        }
      />

      <FeatureGrid
        items={features}
        title={
          locale === "en" ? (
            <>
              i-body equipment features
            </>
          ) : (
            <>
              Χαρακτηριστικά εξοπλισμού
              <span className="block md:hidden" /> {/* break only on mobile */}
              <span className="hidden md:inline"> </span> {/* space on desktop */}
              i-body
            </>
          )
        }
      />

      <EquipmentGrid
        title={locale === "en" ? "i-body Equipment ®" : "Εξοπλισμός i-body ®"}
        items={equipmentItems}
        rowMaxH={280}
      />

      <OrderForm />

      <Footer />
    </>
  );
}
