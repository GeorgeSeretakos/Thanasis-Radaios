import AboutSection from "../components/AboutSection";
import IntroSection from "../components/IntroSection";
import Footer from "../components/Footer";
import Advantages from "../components/company/Advantages/Advantages";
import timelineItems from "../../../public/data/timelineItems";
import Timeline from "../components/company/Timeline";

export default function AboutPage() {
  return (
    <main>
      <IntroSection
        image="/images/general/23.jpg"
        title="Η εταιρεία"
        paragraph={
          <>
            <div>
              <strong className="text-2xl">Miha Bodytec - Ο αποκλειστικός διανομέας σε Ελλάδα, Κύπρο και Βαλκάνια</strong>
            </div>
            <div className="mt-6">
              Συνδυάζουμε την παγκόσμια τεχνογνωσία της Γερμανικής Miha Bodytec με τη δική μας τοπική εμπειρία, ώστε να φέρουμε στην Ελλάδα την πιο καινοτόμα και αποτελεσματική μέθοδο εκγύμνασης και αποκατάστασης.            </div>
          </>
        }
      />

      <AboutSection
        title="Ποιοί Είμαστε"
        image="/images/general/8.webp"
        fullWidthTitle={false}
        reverse
        description={[
          "Είμαστε ο αποκλειστικός αντιπρόσωπος της Miha Bodytec στην Ελλάδα. Η αποστολή μας είναι να στηρίζουμε επιχειρήσεις στον χώρο της άσκησης και της υγείας, παρέχοντάς τους τα κατάλληλα εργαλεία για να αναπτυχθούν μέσω της τεχνολογίας EMS.",
          "Δεν είμαστε απλώς διανομείς. Στεκόμαστε δίπλα στους συνεργάτες μας από την πρώτη μέρα: από την προμήθεια του εξοπλισμού, μέχρι την εκπαίδευση, την πιστοποίηση και τη συνεχή επιχειρηματική καθοδήγηση.",
          "Με πολυετή εμπειρία στον χώρο της ευεξίας, γνωρίζουμε πώς να μετατρέπουμε μια καινοτόμα τεχνολογία σε μια βιώσιμη και κερδοφόρα επιχειρηματική υπηρεσία.",
        ]}
      />

      <AboutSection
        title="Η μητρική εταιρεία - Miha Bodytec"
        image="/images/general/27.jpg"
        fullWidthTitle={false}
        description={[
          "Η Miha Bodytec, με έδρα στη Γερμανία, είναι ο παγκόσμιος ηγέτης στην τεχνολογία ηλεκτρομυϊκής διέγερσης ολόκληρου του σώματος (Whole-Body EMS).",
          "Από το 2007, σχεδιάζει και κατασκευάζει ιατρικές συσκευές EMS σύμφωνα με τα υψηλότερα πρότυπα “Made in Germany”, σε συνεργασία με διεθνή επιστημονικά και ιατρικά ιδρύματα.",
          "Σήμερα δραστηριοποιείται σε 40+ χώρες, προσφέροντας λύσεις για προπόνηση, αποκατάσταση και πρόληψη, απαντώντας στις ανάγκες ενός σύγχρονου, καθιστικού και γηράσκοντος πληθυσμού.",
        ]}
      />


      <Timeline title="Η πορεία της Miha Bodytec" items={timelineItems} />

      <Advantages />


      <Footer/>
    </main>
  );
}
