import IntroSection from "../components/IntroSection";
import Footer from "../components/Footer";
import ServicesSection from "../components/services/ServicesSection";
import StepsSection from "../components/StepsSection";
import steps from "../../../public/data/steps";
import SplitColumnsWithImage from "../components/SplitColumnsWithImage";
import VideoSection from "../components/VideoSection";
import AboutSection from "../components/AboutSection";
import services from "../../../public/data/services";

export default function AboutPage() {

  return (
    <main>
      <IntroSection
        image="/images/general/2.webp"
        title="Προπόνηση EMS"
        paragraph={
          <>
            <div>
              <h2>Προπόνηση EMS – Η υπηρεσία που θα απογειώσει την επιχείρησή σας</h2>
            </div>
            <div className="mt-6 space-y-3 leading-relaxed">
              <p>
                Το whole body EMS της miha bodytec είναι η πιο σύγχρονη μορφή ηλεκτρομυοδιέγερσης: μια επιστημονικά
                τεκμηριωμένη μέθοδος που προσφέρει ασφάλεια, ταχύτητα και εντυπωσιακά αποτελέσματα. Με μόλις 20 λεπτά την
                εβδομάδα, η EMS απευθύνεται σε:
              </p>
            </div>
            <div className="mt-4">
              <ul className="list-disc pl-6 space-y-1">
                <li>άτομα με περιορισμένο χρόνο,</li>
                <li>όσους θέλουν να εντάξουν την άσκηση στην καθημερινότητά τους,</li>
                <li>αλλά και σε ανθρώπους που δυσκολεύονται να αθληθούν με τις κλασικές μεθόδους λόγω πόνου ή κινητικών προβλημάτων.</li>
              </ul>
              <p className="mt-4">
                Για τον επαγγελματικό σας χώρο, η EMS είναι μια επένδυση που ξεχωρίζει: προσελκύει premium πελάτες και δημιουργεί πιστό κοινό.
              </p>
            </div>

            <p className="flex items-center gap-2 mt-6">
              <img
                src="/icons/like.png"
                alt="idea icon"
                className="w-8 h-8 select-none"
              />
              <i className="font-semibold">
                Γιατί να επιλέξετε την EMS άσκηση ;
              </i>
            </p>

          </>
        }
      />

      <ServicesSection services={services}/>

      <SplitColumnsWithImage
        rightTitle="Άσκηση & Γυμναστική"
        rightBullets={[
          "Προπόνηση όλου του σώματος σε 20' τη βδομάδα",
          "Ενεργοποίηση μυϊκών ινών II – δύναμη και αντοχή",
          "Βελτίωση στάσης σώματος και μεταβολισμού",
          "Premium εμπειρία για απαιτητικούς πελάτες με περιορισμένο χρόνο"
        ]}
        leftTitle="Θεραπεία & Αποκατάσταση"
        leftBullets={[
          "Ενδυνάμωση σε περιπτώσεις μυϊκής αδυναμίας ή ατροφίας",
          "Ανακούφιση χρόνιων πόνων (π.χ. στη μέση)",
          "Μυϊκή επανεκπαίδευση μετά από τραυματισμό ή χειρουργείο",
          "Διατήρηση κινητικότητας και ποιότητας ζωής"
        ]}
        imageSrc="/images/general/38.jpg"
        imageAlt="Προπόνηση και Αποκατάσταση"
        bulletIcon="/icons/check.png"
      />

      <VideoSection
        title="Η EMS σε πάει ένα βήμα παραπέρα — πιο γρήγορα"
        paragraphs={[
          `Η whole body EMS ενεργοποιεί όλες τις μυϊκές ομάδες ταυτόχρονα, συμπεριλαμβανομένων βαθύτερων μυών που δύσκολα στοχεύονται με κλασική άσκηση.`,
          `Ο συνδυασμός εκούσιας σύσπασης και ηλεκτρικού ερεθίσματος προσφέρει μέγιστη ενεργοποίηση με ελάχιστη επιβάρυνση στις αρθρώσεις.`,
          `<p class="flex items-center gap-2 mt-6">
            <img src="/icons/goal.png" alt="steps icon" class="w-8 h-8 select-none" />
            <i class="font-semibold">Η διαδικασία είναι απλή και ολοκληρώνεται σε 3 βήματα.</i>
          </p>`
        ]}
        videoUrl="https://www.youtube.com/embed/vJZO6uhucKE?si=YwB9oZsAQqrTKfZF"
      />


      <div className="bg-gradient-to-b from-[#E6F4FB] via-white to-[#F9FCFF]">
        <StepsSection steps={steps} />
        <section className="w-full h-[60vh] py-12 flex justify-center">
          <div
            className="relative w-full max-w-3xl rounded-xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.youtube.com/embed/yT9KJMncPEM?si=zlfRtCoxhL4NTAS6"
              title="Video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </section>
      </div>

      <AboutSection
        title={
          <>
            Ανακούφιση και Πρόληψη
            <span className="block md:hidden" /> {/* break only on mobile */}
            <span className="hidden md:inline"> </span> {/* space on desktop */}
            Πόνου στη Μέση
          </>
        }
        image="/images/general/36.webp"
        reverse={false}
        imageDimensions="h-150 mx-auto object-contain"
        description={[
          "Ο μη-ειδικός πόνος στη μέση είναι ένα από τα πιο συχνά προβλήματα, που εμφανίζεται στο 60–70% του πληθυσμού κάποια στιγμή στη ζωή του.",
          "Συχνά προέρχεται από μυϊκή ανισορροπία, καθιστική ζωή, μονόπλευρη ή βαριά σωματική εργασία, ακόμα και από ψυχολογικό στρες.",
          "Η προπόνηση EMS:"
        ]}
        ticks={[
          "Ενδυναμώνει τους σταθεροποιητικούς μύες της σπονδυλικής στήλης (π.χ. πολυσχιδής, εγκάρσιος κοιλιακός).",
          "Ανακουφίζει τον πόνο βελτιώνοντας τη μυϊκή υποστήριξη και την κυκλοφορία.",
          "Προσφέρει ασφαλή άσκηση χωρίς επιβάρυνση των αρθρώσεων.",
          "Απαιτεί μόνο 20 λεπτά μία φορά την εβδομάδα, υπό ατομική επίβλεψη."
        ]}
        tickIcon="/icons/check.png"
        features={[
          {
            icon: "/icons/leftdown-rightup.svg",
            text: "Ταυτόχρονη ενεργοποίηση αγωνιστών και ανταγωνιστών μυών"
          },
          {
            icon: "/icons/joints.png",
            text: "Ενδυνάμωση εν τω βάθει μυών με φιλικότητα στις αρθρώσεις"
          },
          {
            icon: "/icons/thumbs-up.svg",
            text: "Αποδεδειγμένη αποτελεσματικότητα στον μη-ειδικό πόνο μέσης"
          }
        ]}
      />

      <AboutSection
        title="Αντιμετώπιση Σαρκοπενίας"
        image="/images/general/34.jpg"
        reverse
        imageDimensions="h-150 mx-auto object-contain"
        description={[
          "Η σαρκοπενία είναι η φυσιολογική απώλεια μυϊκής μάζας και δύναμης που συνοδεύει τη γήρανση και μπορεί να επηρεάσει την καθημερινότητα και την ανεξαρτησία. Από την ηλικία των 50 ετών και μετά, η μυϊκή μάζα και η δύναμη μειώνονται σταδιακά, με παράγοντες όπως η έλλειψη άσκησης, η φτωχή διατροφή και η χαμηλή βιταμίνη D να επιταχύνουν τη διαδικασία.",
          "Η προπόνηση EMS:"
        ]}
        ticks={[
          "Αποτελεσματική ακόμη και σε ηλικιωμένους άνω των 75 ετών",
          "Ενεργοποιεί βαθιά μυϊκές ίνες τύπου II που χάνονται με την ηλικία",
          "Διατηρεί ή αυξάνει τη μυϊκή μάζα με ασφάλεια και χωρίς επιβάρυνση",
          "Καθυστερεί τη μείωση της δύναμης και υποστηρίζει την ποιότητα ζωής"
        ]}
        tickIcon="/icons/check.png"
        features={[
          {
            icon: "/icons/thumbs-up.svg",
            text: "Αποτελεσματικότητα και ασφάλεια μέχρι τη γήρανση"
          },
          {
            icon: "/icons/pulses.svg",
            text: "Υψηλή ένταση με χαμηλή καταπόνηση"
          },
          {
            icon: "/icons/medical.svg",
            text: "Ενίσχυση δύναμης, μάζας & κινητικότητας"
          }
        ]}
      />

      <Footer/>
    </main>
  );
}
