// components/MedicalBenefitsSection.jsx
export default function MedicalBenefitsSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-brandBlue mb-12">
          Ιατρικά Οφέλη που Μεταφράζονται σε Ανταγωνιστικό Πλεονέκτημα
        </h2>

        {/* Cards container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Card 1 – Back Pain */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
            <div className="w-full h-80"> {/* Increased height */}
              <img
                src="/images/general/5.jpg"
                alt="Άτομο με trainer σε συνεδρία EMS, εστίαση στη μέση"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold text-brandBlue mb-4">
                Αντιμετώπιση Χρόνιου Πόνου στη Μέση
              </h3>
              <p className="text-gray-700 mb-4">
                60%–70% των ανθρώπων θα εμφανίσουν πόνο στη μέση κάποια στιγμή στη ζωή τους.
                Περίπου το 80% αυτών των περιπτώσεων χαρακτηρίζονται ως μη ειδικός πόνος στη μέση,
                όπου η αιτία δεν εντοπίζεται εύκολα.
              </p>
              <p className="text-gray-700 font-semibold mb-2">Η EMS:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Ενδυναμώνει σε βάθος τους σταθεροποιητικούς μύες της σπονδυλικής στήλης (π.χ. πολυσχιδής).</li>
                <li>Ανακουφίζει τον πόνο βελτιώνοντας τη μυϊκή υποστήριξη και την κυκλοφορία.</li>
                <li>Παρέχει ασφαλή άσκηση χωρίς επιβάρυνση των αρθρώσεων.</li>
              </ul>
            </div>
          </div>

          {/* Card 2 – Sarcopenia */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
            <div className="w-full h-80"> {/* Increased height */}
              <img
                src="/images/general/age-diagram.png"
                alt="Γράφημα πορείας μυϊκής δύναμης στη διάρκεια της ζωής"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold text-brandBlue mb-4">
                Πρόληψη & Αντιμετώπιση Σαρκοπενίας
              </h3>
              <p className="text-gray-700 mb-4">
                Με την ηλικία, η μυϊκή δύναμη μειώνεται φυσιολογικά. Αν δεν υπάρξει άσκηση, μπορεί να πέσει
                κάτω από το “όριο αναπηρίας”, περιορίζοντας την κινητικότητα και την ανεξαρτησία.
              </p>
              <p className="text-gray-700 font-semibold mb-2">Η EMS:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Ενεργοποιεί μυϊκές ίνες τύπου II, που χάνονται πιο γρήγορα με την ηλικία.</li>
                <li>Διατηρεί ή αυξάνει τη μυϊκή μάζα με ασφάλεια.</li>
                <li>Καθυστερεί τη φυσιολογική μείωση της δύναμης και υποστηρίζει την ποιότητα ζωής.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
