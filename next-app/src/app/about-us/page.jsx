import AboutSection from "../components/about/AboutSection";
import NlpSection from "../components/services/VideoSection";
import IntroSection from "../components/about/IntroSection";
import Footer from "../components/Footer";
import DietApproach from "../components/services/DietApproach/DietApproach";
import timelineItems from "../../../public/data/timelineItems";
import Timeline from "../components/Timeline";
import VideoSection from "../components/services/VideoSection";

export default function AboutPage() {
  return (
    <main>
      <IntroSection
        image="/images/general/8.jpg"
        title="Η εταιρεία"
        paragraph={
          <>
            <div>
              <strong className="text-2xl">Miha Bodytec - Ο αποκλειστικός διανομέας σε Ελλάδα, Κύπρο και Βαλκάνια</strong>
            </div>
            <div className="mt-6">
              Συνδυάζουμε την παγκόσμια τεχνογνωσία της Γερμανικής Miha Bodytec με την τοπική μας εμπειρία, για να φέρουμε στην Ελλάδα την πιο καινοτόμα και αποδοτική μέθοδο εκγύμνασης και θεραπείας.
            </div>
          </>
        }
      />

      <AboutSection
        title="Ποιοί Είμαστε"
        image="/images/equipment/2.png"
        reverse
        text={[
          <>
            Είμαστε ο αποκλειστικός αντιπρόσωπος της Miha Bodytec στην Ελλάδα, με αποστολή να βοηθάμε επιχειρήσεις να αναπτυχθούν μέσα από την καινοτόμα τεχνολογία της ηλεκτρομυϊκής διέγερσης (EMS).
          </>,
          <>
            Δεν είμαστε απλώς διανομείς. Παρέχουμε στους συνεργάτες μας πλήρη υποστήριξη – από την προμήθεια του μηχανήματος, έως την εκπαίδευση, την πιστοποίηση και τη συνεχή καθοδήγηση στην ανάπτυξη του στούντιο τους.
          </>,
          <>
            Με πολυετή εμπειρία στον χώρο της άσκησης και της ευεξίας, γνωρίζουμε πώς να μετατρέπουμε ένα καινοτόμο εργαλείο σε μια κερδοφόρα επιχειρηματική υπηρεσία.
          </>,
        ]}
      />


      <AboutSection
        title="Η μητρική εταιρεία - Miha Bodytec"
        image="/logo/4.png"
        text={[
          <>
            Η Miha Bodytec, με έδρα στη Γερμανία, είναι ο παγκόσμιος ηγέτης στην τεχνολογία ηλεκτρομυϊκής διέγερσης ολόκληρου του σώματος (Whole-Body EMS).
          </>,
          <>
            Από το 2007, η εταιρεία αναπτύσσει και κατασκευάζει ιατρικές συσκευές EMS σύμφωνα με τα υψηλότερα πρότυπα ποιότητας “Made in Germany”, συνεργαζόμενη στενά με επιστημονικά και ιατρικά ιδρύματα παγκοσμίως.
          </>,
          <>
            Σήμερα, η Miha Bodytec δραστηριοποιείται σε περισσότερες από 40 χώρες, προσφέροντας λύσεις για άσκηση, αποκατάσταση και πρόληψη, καλύπτοντας τις ανάγκες ενός ολοένα πιο καθιστικού και γηράσκοντος πληθυσμού.
          </>
        ]}
      />

      <Timeline title="Η πορεία της Miha Bodytec" items={timelineItems} />

      <DietApproach />

      <VideoSection
        title="Ανοίξτε το δικό σας EMS studio"
        paragraphs={[
          "Δεν χρειάζεστε μεγάλο χώρο ή περίπλοκα setups. Στήνουμε λειτουργικά EMS studios από 25 τ.μ., είτε ως mini στούντιο είτε μέσα σε πολυλειτουργικό κέντρο. Με το miha bodytec m.ove (travel/workstation) μπορείτε να προσφέρετε συνεδρίες ακόμα και χωρίς δικό σας χώρο.",
          `<h3 class="mt-6 mb-2 font-semibold text-lg">Γιατί είναι τόσο απλό</h3>
     <ul class="list-disc pl-5 space-y-1">
       <li>Μικρές απαιτήσεις χώρου: πλήρως λειτουργικό setup από 25 τ.μ.</li>
       <li>Ευελιξία λειτουργίας: standalone mini studio ή ενσωμάτωση σε υπάρχον γυμναστήριο/κέντρο.</li>
       <li>Φορητές λύσεις: με m.ove προσφέρετε EMS on-the-go (εταιρικοί χώροι, κατ’ οίκον, events).</li>
     </ul>`
        ]}
        videoUrl="https://www.youtube.com/embed/IbxjhSCqeYg?si=m-M11G3rK2ALQIk_"
        reverse={true}
      />


      <Footer/>
    </main>
  );
}
