import IntroSection from "../components/about/IntroSection";
import Footer from "../components/Footer";
import ServicesSection from "../components/services/ServicesSection";
import StepsSection from "../components/StepsSection";
import steps from "../../../public/data/steps";
import FeatureColumns from "../components/FeatureColumns";
import MedicalBenefitsSection from "../components/MedicalBenefitsSection";
import VideoSection from "../components/services/VideoSection";

export default function AboutPage() {

  return (
    <main>
      <IntroSection
        image="/images/general/2.webp" // 2 or 10
        title="Προπόνηση EMS"
        paragraph={
          <>
            <div>
            <strong className="text-2xl">Προπόνηση EMS – Η υπηρεσία που θα αλλάξει την επιχείρησή σας</strong>
            </div>
            <div className="mt-6">
              Εισάγετε στην επιχείρησή σας μια μέθοδο εκγύμνασης και θεραπείας που είναι ταυτόχρονα ασφαλής, σύντομη και εξαιρετικά αποτελεσματική. Κατάλληλη για όλες τις ηλικίες και για ευρύ φάσμα πελατών.
            </div>
          </>
        }
      />

      <ServicesSection preview={false}/>

      <FeatureColumns
        sectionTitle="Η διπλή χρήση της EMS"
        rightTitle="Άσκηση & Γυμναστική"
        rightBullets={[
          "Προπόνηση ολόκληρου του σώματος σε μόλις 20 λεπτά, 1 φορά την εβδομάδα.",
          "Ενεργοποίηση μυϊκών ινών τύπου II – κρίσιμες για δύναμη και αντοχή.",
          "Βελτίωση στάσης σώματος, μυϊκής δύναμης και μεταβολισμού.",
          "Ιδανική για πελάτες με περιορισμένο χρόνο ή που αναζητούν premium εμπειρία."
        ]}
        leftTitle="Θεραπεία & Αποκατάσταση"
        leftBullets={[
          "Ενδυνάμωση σε περιπτώσεις μυϊκής αδυναμίας ή ατροφίας.",
          "Ανακούφιση χρόνιων πόνων (π.χ. μη ειδικός πόνος μέσης).",
          "Μυϊκή επανεκπαίδευση μετά από τραυματισμό ή επέμβαση.",
          "Διατήρηση κινητικότητας και ποιότητας ζωής."
        ]}
        imageSrc="/images/general/24.png"
        imageAlt="Προπόνηση και Αποκατάσταση"
      />

      <VideoSection
        title={[`Η EMS σε πάει ένα βήμα παραπέρα — πιο γρήγορα`]}
        paragraphs={[
          `Η <strong>Ηλεκτρομυϊκή Διέγερση</strong> (<strong>ElectroMyoStimulation</strong> – <strong>EMS</strong>)
         είναι μια προηγμένη μέθοδος ενεργοποίησης των μυών μέσω ελεγχόμενων ηλεκτρικών παλμών.`,
          `Με έως και <strong>10 ζεύγη ηλεκτροδίων</strong>, ενεργοποιεί ταυτόχρονα όλες τις
         <strong> μεγάλες μυϊκές ομάδες</strong> – ακόμα και τις <strong>βαθύτερες</strong> – καθώς και τους
         <strong> ανταγωνιστές μυς</strong>.`,
          `Η EMS συνδυάζει εκούσια μυϊκή σύσπαση με ηλεκτρική διέγερση,
         επιτυγχάνοντας <strong>μέγιστη ενεργοποίηση</strong> με
         <strong> ελάχιστη επιβάρυνση</strong> στις αρθρώσεις.`
        ]}
        videoUrl="https://www.youtube.com/embed/x5kIXBS0JOk?si=WDzk4EKuXTrP0ySK"
        reverse={false}
      />

      <StepsSection steps={steps}/>

      <MedicalBenefitsSection />


      <Footer/>
    </main>
  );
}
