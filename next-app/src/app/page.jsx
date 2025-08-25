import QuoteSection from "@/app/components/home/QuoteSection";
import Footer from "@/app/components/Footer";
import ServicesSection from "@/app/components/services/ServicesSection";
import AboutSection from "@/app/components/AboutSection";
import PricingPackage from "@/app/components/PricingPackage";
import pricingPackage from "../../public/data/pricingPackage";
import IntroSection from "@/app/components/IntroSection";
import services_preview from "../../public/data/services-preview";
import VideoSection from "@/app/components/VideoSection";
import QandA from "@/app/components/home/QandA";
import qa from "../../public/data/qa";

export default function Home() {
  return (
      <main>

          <IntroSection
              image="/images/general/7.webp"
              title="FF Medical & Wellness"
              paragraph={
                  <>
                      <div>
                          <h2>Η ευκαιρία που δεν έχει ανταγωνισμό</h2>
                      </div>
                      <div className="mt-6 space-y-3 leading-relaxed">
                          <p>
                            Οι περισσότεροι επαγγελματίες στον χώρο του fitness & wellness ανταγωνίζονται για το <strong>5% του πληθυσμού</strong> που ήδη ασκείται.
                          </p>
                          <p>
                            Η whole body EMS άσκηση με miha bodytec ανοίγει τις πόρτες σε ένα εντελώς νέο κοινό: το <strong>75% του πληθυσμού</strong> που μέχρι σήμερα ήταν εκτός παραδοσιακής άσκησης — είτε λόγω έλλειψης χρόνου, είτε λόγω χαμηλού ενδιαφέροντος, είτε λόγω περιορισμών υγείας.                          </p>
                          <p className="flex items-center gap-2">
                              <img
                                  src="/icons/opportunity.png"
                                  alt="gift icon"
                                  className="w-10 h-10 select-none"
                              />
                              <i>
                                  Δεν μιλάμε για «άλλο ένα γυμναστήριο». Μιλάμε για αναπτυξιακή ευκαιρία: διαφοροποίηση υπηρεσίας, νέο πελατολόγιο, αυξημένα έσοδα και γρήγορη απόσβεση.
                              </i>
                          </p>

                      </div>
                  </>
              }
          />

          <div className="bg-gradient-to-b from-[#E6F4FB] via-white to-[#F9FCFF]">
              <ServicesSection
                  title="Πώς το πετυχαίνουμε"
                  paragraphs={[
                      "Η Ηλεκτρομυϊκή Διέγερση όλου του σώματος (whole body-EMS) της miha bodytec συνδυάζει <strong>ασφάλεια</strong>, <strong>ταχύτητα</strong> και <strong>αποτελεσματικότητα</strong> σε μια premium υπηρεσία που χωράει σε 20’ την εβδομάδα.",
                      "Αποδεδειγμένα οφέλη σε <em>σαρκοπενία</em> & <em>πόνο μέσης</em> σημαίνουν νέο, ευρύ κοινό για την παροχή σας — από αποκατάσταση έως high-end προπόνηση."
                  ]}
                  ctaText="Δείτε περισσότερα για την EMS"
                  ctaHref="/ems"
                  services={services_preview}
              />
          </div>


          <AboutSection
              title="Ποιοί Είμαστε"
              image="/images/general/3.webp"
              fullWidthTitle={false}
              reverse={false}
              description={[
                  "Η <span class='font-semibold'>FF MEDICAL AND WELLNESS</span> είναι ο <strong>αποκλειστικός αντιπρόσωπος και διανομέας</strong> της miha bodytec στην Ελλάδα, την Κύπρο & την Αλβανία.",
                  "Με μία σταθερή πορεία ανάπτυξης από το  2013 ξεκινώντας ως Fast Fitness,επί 12 έτη η αποστολή μας είναι να <strong>στηρίζουμε επιχειρήσεις</strong> στον χώρο της άσκησης, της ευεξίας και της υγείας, παρέχοντάς τους τα κατάλληλα εργαλεία για να αναπτυχθούν μέσω της τεχνολογίας EMS.",
                  "Με ενα δίκτυο πελατών μας με <strong>πάνω απο 150 ems studio & φυσικοθεραπευτήρια</strong> στεκόμαστε δίπλα τους από την πρώτη μέρα: από την προμήθεια του εξοπλισμού, μέχρι την εκπαίδευση, την πιστοποίηση και τη συνεχή επιχειρηματική καθοδήγηση.",
                  "Με <strong>πολυετή εμπειρία στον χώρο της ευεξίας</strong>, γνωρίζουμε πώς να μετατρέπουμε μια καινοτόμα τεχνολογία οπως ειναι αυτη του whole body EMS  σε μια βιώσιμη και κερδοφόρα  υπηρεσία.",
                  `<i class="font-bold">Δεν είμαστε απλώς διανομείς — είμαστε στρατηγικός συνεργάτης ανάπτυξης.</i>`
              ]}
              ctaText="Δείτε περισσότερα για εμάς"
              ctaLink="/company"
          />

          <PricingPackage
              title="Δύο λύσεις, άπειρες δυνατότητες"
              text="Επιλέξτε ανάμεσα στο ενσύρματο miha bodytec || medical και στο ασύρματο miha bodytec m.ove (με in-door & outdoor εκδόσεις). Με την απόκτηση ενός συστήματος miha bodytec, δεν αγοράζετε απλώς εξοπλισμό, αλλά ένα πλήρες πακέτο: εκπαίδευση, τεχνική υποστήριξη και επιχειρηματική καθοδήγηση."
              ctaLink="/collab"
              ctaText="Δείτε περισσότερα για το προϊόν"
              items={pricingPackage}
          />


          <QuoteSection />

          <VideoSection
              title="Ανοίξτε το δικό σας EMS studio"
              paragraphs={[
                  "Δεν χρειάζεστε μεγάλους χώρους ή πολύπλοκες εγκαταστάσεις. Δημιουργούμε λειτουργικά EMS studios από μόλις 25 τ.μ., είτε ως αυτόνομα mini στούντιο είτε ενσωματωμένα σε πολυλειτουργικά κέντρα.",
                  "Με το miha bodytec m.ove (φορητό workstation) μπορείτε να προσφέρετε συνεδρίες παντού: σε εταιρικούς χώρους, κατ’ οίκον ή σε events.",
                  `<h3 class="mt-6 mb-2 font-semibold text-lg"><i>Είναι τόσο απλό!</i></h3>
           <ul class="list-disc pl-5 space-y-1">
             <li>Μικρές απαιτήσεις χώρου: πλήρες setup από 25 τ.μ.</li>
             <li>Ευελιξία λειτουργίας: standalone ή integration σε υπάρχον κέντρο</li>
             <li>Φορητές λύσεις: με το m.ove προσφέρετε EMS on-the-go.</li>
           </ul>`
              ]}
              videoUrl="https://www.youtube.com/embed/z1UuZjxtDpc?si=fyIwPKbSefy3UKvA"
          />

          <IntroSection
              image="/images/general/13.webp"
              title="Αφοσίωση & Εμπιστοσύνη που Μετράνε"
              paragraph={
                  <>
                      <div>
                          <strong className="text-2xl">
                              +217% επισκεψιμότητα, αφοσίωση και εμπιστοσύνη
                          </strong>
                      </div>

                    <div className="mt-6 space-y-3 leading-relaxed">
                      <p>
                        Συνήθως ο ασκούμενος ή ασθενής σταματά την εκγύμναση είτε λόγω έλλειψης πια ενδιαφέροντος &
                        χρόνου είτε όταν υποχωρήσει ο πόνος. Με το <strong>miha bodytec</strong>, η <strong>ολόσωμη
                        ενδυνάμωση σε 20’/εβδομάδα </strong> μετατρέπει την αποσπασματική επίσκεψη σε σταθερή συνήθεια.
                      </p>

                      <p>
                        Το αποτέλεσμα; Οι πελάτες βλέπουν την υγεία τους <strong>ολιστικά</strong> (πρόληψη & απόδοση) και παραμένουν ενεργοί, πέρα από την αντιμετώπιση του συμπτώματος.                         Μέσα από αυτή τη δέσμευση, το αρχικό κίνητρο εξελίσσεται σε <strong>διαρκή αλλαγή συμπεριφοράς </strong> και πιο <strong>ενεργό τρόπο ζωής</strong>.
                      </p>

                      <p className="flex items-center gap-2">
                        <img
                          src="/icons/opportunity.png"
                          alt="opportunity"
                          className="w-10 h-10 select-none"
                        />
                        <i>
                          Δίνουν προτεραιότητα στην υγεία έναντι της εμφάνισης.
                        </i>
                      </p>

                      <p className="flex items-center gap-2">
                        <img
                          src="/icons/opportunity.png"
                          alt="opportunity"
                          className="w-10 h-10 select-none"
                        />
                        <i>
                          Εκτιμούν την προσωπική προσοχή έναντι της αυτοματοποίησης.
                        </i>
                      </p>

                      <p className="flex items-center gap-2">
                        <img
                          src="/icons/opportunity.png"
                          alt="opportunity"
                          className="w-10 h-10 select-none"
                        />
                        <i>
                          Ενδιαφέρονται λιγότερο για τις εφαρμογές και τη δυναμική των ομάδων.
                        </i>
                      </p>

                      <p className="flex items-center gap-2">
                        <img
                          src="/icons/opportunity.png"
                          alt="opportunity"
                          className="w-10 h-10 select-none"
                        />
                        <i>
                          Και είναι πρόθυμοι να επενδύσουν στη μακροπρόθεσμη ευεξία.
                        </i>
                      </p>
                    </div>
                  </>
              }
          />

        <QandA items={qa}/>

        <Footer/>
      </main>
  );
}
