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
        image="/images/general/39.jpg"
        title="Η εταιρεία"
        paragraph={
          <>
            <div>
              <h2>FF Medical & Wellness miha bodytec - Αποκλειστικός αντιπρόσωπος διανομέας σε Ελλάδα, Κύπρο και Αλβανία</h2>
            </div>
            <div className="mt-6 space-y-3 leading-relaxed">
              <p>
                Συνδυάζουμε την παγκόσμια τεχνογνωσία της Γερμανικής miha bodytec με τη δική μας τοπική εμπειρία, ώστε να φέρουμε στην Ελλάδα την πιο καινοτόμα και αποτελεσματική μέθοδο εκγύμνασης και αποκατάστασης.
              </p>
            </div>
          </>
        }
      />

      <AboutSection
        title="Ποιοί Είμαστε"
        image="/images/general/27.jpg"
        fullWidthTitle={false}
        reverse={true}
        description={[
          "Η FF MEDICAL AND WELLNESS είναι ο <strong>αποκλειστικός αντιπρόσωπος και διανομέας</strong> της miha bodytec στην Ελλάδα, την Κύπρο & την Αλβανία.",
          "Με μία σταθερή πορεία ανάπτυξης από το 2013 ξεκινώντας ως Fast Fitness, επί 12 έτη η αποστολή μας είναι να <strong>στηρίζουμε επιχειρήσεις</strong> στον χώρο της άσκησης, της ευεξίας και της υγείας, παρέχοντάς τους τα κατάλληλα εργαλεία για να αναπτυχθούν μέσω της τεχνολογίας EMS.",
          "Με ενα δίκτυο πελατών μας με <strong>πάνω απο 150 ems studio & φυσικοθεραπευτήρια</strong> στεκόμαστε δίπλα τους από την πρώτη μέρα: από την προμήθεια του εξοπλισμού, μέχρι την εκπαίδευση, την πιστοποίηση και τη συνεχή επιχειρηματική καθοδήγηση.",
          "Με <strong>πολυετή εμπειρία στον χώρο της ευεξίας</strong>, γνωρίζουμε πώς να μετατρέπουμε μια καινοτόμα τεχνολογία οπως ειναι αυτη του whole body EMS σε μια βιώσιμη και κερδοφόρα υπηρεσία.",
          `<i class="font-bold">Δεν είμαστε απλώς διανομείς — είμαστε στρατηγικός συνεργάτης ανάπτυξης.</i>`
        ]}
      />

      <AboutSection
        title="Η μητρική εταιρεία - miha bodytec"
        image="/images/general/23.jpg"
        fullWidthTitle={false}
        reverse={false}
        description={[
          "Η miha bodytec, με έδρα στη Γερμανία, είναι ο <strong>παγκόσμιος ηγέτης</strong> στην τεχνολογία ηλεκτρομυϊκής διέγερσης ολόκληρου του σώματος (Whole-Body EMS).",
          "Από το 2007, σχεδιάζει και κατασκευάζει ιατρικές συσκευές EMS σύμφωνα με τα υψηλότερα πρότυπα <strong>“Made in Germany”</strong>, σε συνεργασία με διεθνή επιστημονικά και ιατρικά ιδρύματα.",
          "Σήμερα <strong>δραστηριοποιείται σε 40+ χώρες</strong>, προσφέροντας λύσεις για προπόνηση, αποκατάσταση και πρόληψη, απαντώντας στις ανάγκες ενός σύγχρονου, καθιστικού και γηράσκοντος πληθυσμού.",
        ]}
      />


      <Timeline title="Η πορεία της miha bodytec" items={timelineItems} />

      <Advantages />


      <Footer/>
    </main>
  );
}
