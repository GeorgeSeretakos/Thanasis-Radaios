import Footer from "../components/Footer";
import IntroSection from "../components/about/IntroSection";
import AboutSection from "../components/about/AboutSection";
import TextBgImage from "../components/TextBgImage";


export default function OfficePage() {
  return (
    <>
      {/* IntroSection */}
      <IntroSection
        image="/images/general/25.png"
        title="Το προϊόν"
        paragraph={
          <>
            <div>
              <strong className="text-2xl">Η απόλυτη τεχνολογία EMS – Made in Germany</strong>
            </div>
            <div className="mt-6">
              Αναβαθμίστε την επιχείρησή σας με δύο κορυφαία ιατρικά μηχανήματα EMS, σχεδιασμένα και κατασκευασμένα στη Γερμανία, με πλήρη εξοπλισμό i-body, δωρεάν εκπαίδευση και πιστοποίηση.
            </div>
            <div className="mt-6">
              Κάθε σύστημα Miha Bodytec πληροί αυστηρές διεθνείς ιατρικές προδιαγραφές, προσφέροντας αξιοπιστία, αντοχή στον χρόνο και χαμηλές ανάγκες συντήρησης — <i>έτσι επενδύετε σε μια υπηρεσία με υψηλή ζήτηση και χαμηλό λειτουργικό κόστος.</i>
            </div>
          </>
        }
      />


      <AboutSection
        title="Miha Bodytec II medical (ενσύρματο)"
        image="/images/product/medical_2.jpg"
        reverse
        text={[
          `<strong>Ιδανικό για επαγγελματική, σταθερή εγκατάσταση στούντιο EMS.</strong>`,
          "Συνδυάζει μέγιστη αξιοπιστία, εργονομία και γερμανική ποιότητα κατασκευής.",
          "<h3 class='font-semibold'>Κύρια χαρακτηριστικά:</h3>\
           <ul class='list-disc pl-5 space-y-1'>\
             <li>Πιστοποιημένο ιατρικό προϊόν (Ιατρική Συσκευή Κατηγορίας IIb)</li>\
             <li>Κατασκευάζεται στη Γερμανία με περιβλήματα αλουμινίου υψηλής αντοχής</li>\
             <li>Οθόνη υψηλής ευκρίνειας με εικονικό προπονητή (3D Animation)</li>\
             <li>Μνήμη δεδομένων με RFID</li>\
             <li>Σύνδεση με καλώδιο i-body connect ή i-body connect wireless</li>\
             <li>Μέγιστη συνδεσιμότητα: Wi-Fi, Bluetooth, USB, WLAN</li>\
             <li>Ενιαίο περιβάλλον χρήσης για μέγιστη ασφάλεια και ευκολία</li>\
           </ul>"
        ]}
      />

      <AboutSection
        title="Miha Bodytec m.ove (ασύρματο & φορητό)"
        image="/images/product/move_1.jpg"
        reverse={false}
        text={[
          `<strong>Απόλυτη ελευθερία κίνησης για τον επαγγελματία του EMS.</strong>`,
          "Κατάλληλο για πολυχώρους, φυσιοθεραπευτήρια και mobile υπηρεσίες.",
          `<h3 class="font-semibold">Κύρια χαρακτηριστικά:</h3>
           <ul class="list-disc pl-5 space-y-1">
             <li>Πιστοποιημένο ιατρικό προϊόν</li>
             <li>Ασύρματη μετάδοση παλμών μέσω Bluetooth</li>
             <li>Μπαταρία λιθίου μεγάλης διάρκειας με μαγνητικό φορτιστή</li>
             <li>
               <span class="font-semibold">Διαθέσιμο σε δύο εκδόσεις:</span>
               <ul class="list-disc pl-5 space-y-1 mt-1">
                 <li><strong>Travelstation:</strong> Φορητό για εύκολη μεταφορά σε πελάτες ή συνεργάτες</li>
                 <li><strong>Workstation:</strong> Κινητή βάση για εσωτερική μετακίνηση και αποθήκευση εξοπλισμού</li>
               </ul>
             </li>
             <li>Ενιαίο περιβάλλον χρήσης για απλή και ασφαλή λειτουργία</li>
           </ul>`
        ]}
      />

      <TextBgImage
        title="Η δύναμη του EMS… παντού"
        text="
          <div class='mt-6'>
            Με τη Miha Bodytec δεν περιορίζεστε σε έναν χώρο. Επιλέξτε ανάμεσα στο σταθερό ιατρικά πιστοποιημένο σύστημα για στούντιο και το ευέλικτο m.ove που σας ακολουθεί παντού.
          </div>
          <div class='mt-6'>
            Το m.ove έρχεται σε δύο μοναδικές εκδόσεις:
            <ul class='list-disc pl-5 mt-2 space-y-1'>
              <li><strong>Travelstation</strong> – Απόλυτη κινητικότητα και εύκολες μετακινήσεις.</li>
              <li><strong>Workstation</strong> – Άψογη οργάνωση και ταχύτητα μέσα στο χώρο σας.</li>
            </ul>
          </div>
          <div class='mt-6'>
            <i>Επιλέξτε τη λύση που θα μεγιστοποιήσει την ευελιξία, την αποδοτικότητα και το κέρδος της επιχείρησής σας.</i>
          </div>
        "
        videoSrc="/videos/3.mp4"
        poster="/images/general/1.jpg"
        overlay="bg-black/70"
      />



      <AboutSection
        title="Miha Bodytec m.ove – Travelstation"
        image="/images/product/travelstation_1.jpg"
        reverse={false}
        text={[
          `<strong>Η φορητή λύση για νέες ευκαιρίες</strong>`,
          "Η έκδοση Travelstation σας δίνει τη δυνατότητα να προσφέρετε EMS προπονήσεις οπουδήποτε, χωρίς περιορισμούς. Ελαφριά και συμπαγής, είναι η ιδανική λύση για επαγγελματίες που θέλουν να μεταφέρουν εύκολα την υπηρεσία τους σε διαφορετικούς χώρους.",
          `<h3 class="font-semibold">Πλεονεκτήματα:</h3>
           <ul class="list-disc pl-5 space-y-1">
             <li>Απόλυτη φορητότητα – Εύκολη μεταφορά χάρη στο μικρό βάρος και το συμπαγές μέγεθος.</li>
             <li>Ενσωματωμένη μπαταρία – Μεγάλη διάρκεια χρήσης χωρίς ανάγκη άμεσης τροφοδοσίας.</li>
             <li>Ευελιξία χώρου – Προπονήσεις σε σπίτια πελατών, εξωτερικούς χώρους ή συνεργαζόμενα γυμναστήρια.</li>
             <li>Επαγγελματική παρουσίαση – Premium design που ενισχύει την εικόνα σας.</li>
           </ul>`
        ]}
      />

      <AboutSection
        title="Miha Bodytec m.ove – Workstation"
        image="/images/product/workstation_3.jpg"
        reverse={true}
        text={[
          `<strong>Οργανωμένη βάση για το στούντιο σας.</strong>`,
          "Η έκδοση Workstation είναι η ιδανική επιλογή για στούντιο και πολυχώρους που χρειάζονται ευελιξία αλλά και σταθερή παρουσίαση. Εξοπλισμένη με κινητή βάση και αποθηκευτικό χώρο, κρατά τον εξοπλισμό σας οργανωμένο και έτοιμο προς χρήση.",
          `<h3 class="font-semibold">Πλεονεκτήματα:</h3>
         <ul class="list-disc pl-5 space-y-1">
           <li>Κινητή βάση με ρόδες – Εύκολη μετακίνηση εντός του χώρου.</li>
           <li>Ενσωματωμένος αποθηκευτικός χώρος – Οργανωμένη φύλαξη για καλώδια, γιλέκα και αξεσουάρ.</li>
           <li>Επαγγελματική εμφάνιση – Καθαρή, μοντέρνα αισθητική που εντυπωσιάζει τους πελάτες.</li>
           <li>Αντοχή & Σταθερότητα – Κατασκευασμένη για καθημερινή επαγγελματική χρήση.</li>
         </ul>`
        ]}
      />

      <TextBgImage
        title="Εξοπλισμός i-body"
        text="
        "
        image="/images/general/2.jpg"
        overlay="bg-black/50"
        height="50vh"
      />

      <AboutSection
        title="Miha Bodytec m.ove – Workstation"
        image="/images/product/workstation_3.jpg"
        reverse={true}
        text={[
          `<strong>Οργανωμένη βάση για το στούντιο σας.</strong>`,
          "Η έκδοση Workstation είναι η ιδανική επιλογή για στούντιο και πολυχώρους που χρειάζονται ευελιξία αλλά και σταθερή παρουσίαση. Εξοπλισμένη με κινητή βάση και αποθηκευτικό χώρο, κρατά τον εξοπλισμό σας οργανωμένο και έτοιμο προς χρήση.",
          `<h3 class="font-semibold">Πλεονεκτήματα:</h3>
         <ul class="list-disc pl-5 space-y-1">
           <li>Κινητή βάση με ρόδες – Εύκολη μετακίνηση εντός του χώρου.</li>
           <li>Ενσωματωμένος αποθηκευτικός χώρος – Οργανωμένη φύλαξη για καλώδια, γιλέκα και αξεσουάρ.</li>
           <li>Επαγγελματική εμφάνιση – Καθαρή, μοντέρνα αισθητική που εντυπωσιάζει τους πελάτες.</li>
           <li>Αντοχή & Σταθερότητα – Κατασκευασμένη για καθημερινή επαγγελματική χρήση.</li>
         </ul>`
        ]}
      />






      <Footer />
    </>
  );
}
