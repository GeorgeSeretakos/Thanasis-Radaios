import QuoteSection from "@/app/components/home/QuoteSection";
import Footer from "@/app/components/Footer";
import ServicesSection from "@/app/components/services/ServicesSection";
import AboutSection from "@/app/components/AboutSection";
import PresentationGrid from "@/app/components/PricingPackage";
import presentationCards from "../../public/data/presentationCards";
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
                          <strong className="text-2xl">Η ευκαιρία που δεν έχει ανταγωνισμό</strong>
                      </div>
                      <div className="mt-6 space-y-3 leading-relaxed">
                          <p>
                              Τα περισσότερα γυμναστήρια ανταγωνίζονται για το <strong>5% του πληθυσμού</strong> που ήδη αθλείται.
                          </p>
                          <p>
                              Η EMS με Miha Bodytec ανοίγει πρόσβαση σε ένα εντελώς νέο κοινό: το <strong>75% του πληθυσμού</strong> που μέχρι σήμερα έμενε εκτός παραδοσιακής άσκησης — είτε λόγω έλλειψης χρόνου, είτε λόγω χαμηλού ενδιαφέροντος, είτε λόγω περιορισμών κίνησης.                          </p>
                          <p className="flex items-center gap-2">
                              <img
                                  src="/icons/opportunity.png"
                                  alt="gift icon"
                                  className="w-10 h-10 select-none"
                              />
                              <i>
                                  Εδώ δεν μιλάμε για ανταγωνισμό. Μιλάμε για πραγματική ευκαιρία ανάπτυξης.
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
                      "Η Ηλεκτρομυϊκή Διέγερση (EMS) της Miha Bodytec ενώνει <strong>ασφάλεια</strong>, <strong>ταχύτητα</strong> και <strong>αποτελεσματικότητα</strong> σε μια premium υπηρεσία που χωρά σε 20’ την εβδομάδα.",
                      "Αποδεδειγμένα οφέλη σε <em>σαρκοπενία</em> & <em>πόνο μέσης</em> σημαίνουν νέο, ευρύ κοινό για το στούντιό σας — από αποκατάσταση έως high-end προπόνηση."
                  ]}
                  ctaText="Δείτε περισσότερα για την EMS"
                  ctaHref="/ems"
                  services={services_preview}
              />
          </div>


          <AboutSection
              title="Ποιοί Είμαστε"
              image="/images/general/8.webp"
              fullWidthTitle={false}
              reverse={false}
              description={[
                  "Είμαστε ο αποκλειστικός αντιπρόσωπος της Miha Bodytec στην Ελλάδα. Η αποστολή μας είναι να στηρίζουμε επιχειρήσεις στον χώρο της άσκησης και της υγείας, παρέχοντάς τους τα κατάλληλα εργαλεία για να αναπτυχθούν μέσω της τεχνολογίας EMS.",
                  "Δεν είμαστε απλώς διανομείς. Στεκόμαστε δίπλα στους συνεργάτες μας από την πρώτη μέρα: από την προμήθεια του εξοπλισμού, μέχρι την εκπαίδευση, την πιστοποίηση και τη συνεχή επιχειρηματική καθοδήγηση.",
                  "Με πολυετή εμπειρία στον χώρο της ευεξίας, γνωρίζουμε πώς να μετατρέπουμε μια καινοτόμα τεχνολογία σε μια βιώσιμη και κερδοφόρα επιχειρηματική υπηρεσία.",
              ]}
              ctaText="Δείτε περισσότερα για εμάς"
              ctaLink="/company"
          />

          <PresentationGrid
              title="Δύο λύσεις, άπειρες δυνατότητες"
              text="Επιλέξτε ανάμεσα στο ενσύρματο Miha Bodytec || medical και στο ασύρματο Miha Bodytec m.ove (με in-door & outdoor εκδόσεις). Με την απόκτηση ενός συστήματος Miha Bodytec, δεν αγοράζετε απλώς εξοπλισμό, αλλά ένα πλήρες πακέτο: εκπαίδευση, τεχνική υποστήριξη και επιχειρηματική καθοδήγηση."
              ctaLink="/collab"
              ctaText="Δείτε περισσότερα για το προϊόν"
              items={presentationCards}
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
              videoUrl="https://www.youtube.com/embed/IbxjhSCqeYg?si=m-M11G3rK2ALQIk_"
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
                              Συνήθως ο ασθενής σταματά όταν υποχωρήσει ο πόνος. Με το
                              <strong> miha bodytec</strong>, η <strong>ολόσωμη ενδυνάμωση σε 20’/εβδομάδα </strong>
                              μετατρέπει την αποσπασματική επίσκεψη σε σταθερή συνήθεια.
                          </p>

                          <p>
                              Το αποτέλεσμα; Οι πελάτες βλέπουν την υγεία τους
                              <strong> ολιστικά</strong> (πρόληψη &amp; απόδοση) και παραμένουν ενεργοί,
                              πέρα από την αντιμετώπιση του συμπτώματος.
                          </p>

                          <p>
                              Μέσα από αυτή τη δέσμευση, το αρχικό κίνητρο
                              εξελίσσεται σε <strong>διαρκή αλλαγή συμπεριφοράς </strong>
                              και πιο <strong>ενεργό τρόπο ζωής</strong>.
                          </p>

                          <p className="flex items-center gap-2">
                              <img
                                  src="/icons/opportunity.png"
                                  alt="opportunity"
                                  className="w-10 h-10 select-none"
                              />
                              <i>
                                  Από το «έρχομαι όταν πονάω» στο «προπονούμαι για να μη πονάω».
                              </i>
                          </p>
                      </div>
                  </>
              }
          />

          <QandA items={qa} />

          <Footer />
      </main>
  );
}
