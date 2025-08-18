export default function PhilosophySection() {
  return (
    <section
      className="relative py-24 px-4 bg-cover bg-center flex items-center justify-center"
    >

      <div className="relative z-10 max-w-6xl mx-auto flex gap-12">
        <div className="m-auto w-1/4">
          <h2 className="text-3xl">
            <span className="font-bold">Οι 3 βάσεις της{" "} <br/></span>
            <span className="font-bold">EMS</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 w-3/4">
          {/* BlogCard 1 */}
          <div className="bg-[#1C86D1] text-white p-6 rounded-xl shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 rounded-xl z-0"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Ασφάλεια</h3>
              <p>
                Χωρίς επιβάρυνση αρθρώσεων και με επιστημονικά τεκμηριωμένα πρωτόκολλα, η EMS είναι κατάλληλη για όλους
              </p>
            </div>
          </div>

          {/* BlogCard 2 */}
          <div className="bg-gray-500 text-white p-6 rounded-xl shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 rounded-xl z-0"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Ταχύτητα</h3>
              <p>
                Μόνο 20 λεπτά προπόνησης την εβδομάδα αρκούν για να ενεργοποιηθούν όλες οι μεγάλες μυϊκές ομάδες.
              </p>
            </div>
          </div>

          {/* BlogCard 3 */}
          <div className="bg-black text-white p-6 rounded-xl shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 rounded-xl z-0"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Αποτελεσματικότητα</h3>
              <p>
                Μελέτες δείχνουν σημαντική βελτίωση σε δύναμη, στάση σώματος, πόνο στη μέση και σαρκοπενία, σε ελάχιστο χρόνο.              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
