// app/company/page.jsx
"use client";

import { useEffect, useState } from "react";

import AboutSection from "../components/AboutSection";
import IntroSection from "../components/IntroSection";
import Footer from "../components/Footer";
import Advantages from "../components/company/Advantages/Advantages";
import { timelineItems_el, timelineItems_en } from "../../../public/data/timelineItems";
import Timeline from "../components/company/Timeline";

export default function AboutPage() {
  const [locale, setLocale] = useState("el");

  useEffect(() => {
    const saved = localStorage.getItem("locale") || "el";
    setLocale(saved);
  }, []);

  const timelineItems = locale === "en" ? timelineItems_en : timelineItems_el;

  return (
    <main>
      <IntroSection
        image="/images/general/39.jpg"
        title={locale === "en" ? "The Company" : "Η εταιρεία"}
        paragraph={
          <>
            <div>
              <h2>
                {locale === "en"
                  ? "FF Medical & Wellness – miha bodytec · Exclusive representative & distributor in Greece, Cyprus and Albania"
                  : "FF Medical & Wellness miha bodytec - Αποκλειστικός αντιπρόσωπος διανομέας σε Ελλάδα, Κύπρο και Αλβανία"}
              </h2>
            </div>
            <div className="mt-6 space-y-3 leading-relaxed">
              <p>
                {locale === "en"
                  ? "We combine the global expertise of Germany’s miha bodytec with our local experience to bring to Greece the most innovative and effective method of training and rehabilitation."
                  : "Συνδυάζουμε την παγκόσμια τεχνογνωσία της Γερμανικής miha bodytec με τη δική μας τοπική εμπειρία, ώστε να φέρουμε στην Ελλάδα την πιο καινοτόμα και αποτελεσματική μέθοδο εκγύμνασης και αποκατάστασης."}
              </p>
            </div>
          </>
        }
      />

      <AboutSection
        title={locale === "en" ? "Who We Are" : "Ποιοί Είμαστε"}
        image="/images/general/27.jpg"
        fullWidthTitle={false}
        reverse={true}
        description={
          locale === "en"
            ? [
              "FF MEDICAL AND WELLNESS is the <strong>exclusive representative and distributor</strong> of miha bodytec in Greece, Cyprus & Albania.",
              "With steady growth since 2013, starting as Fast Fitness, for 12 years our mission has been to <strong>support businesses</strong> in exercise, wellness and health by providing the right tools to grow through EMS technology.",
              "With a client network of <strong>150+ EMS studios & physiotherapy centers</strong>, we stand by them from day one: from equipment supply to training, certification and continuous business guidance.",
              "With <strong>many years of experience in the wellness sector</strong>, we know how to turn an innovative technology like whole-body EMS into a sustainable and profitable service.",
              `<i class="font-bold">We are not just distributors — we are a strategic growth partner.</i>`,
            ]
            : [
              "Η FF MEDICAL AND WELLNESS είναι ο <strong>αποκλειστικός αντιπρόσωπος και διανομέας</strong> της miha bodytec στην Ελλάδα, την Κύπρο & την Αλβανία.",
              "Με μία σταθερή πορεία ανάπτυξης από το 2013 ξεκινώντας ως Fast Fitness, επί 12 έτη η αποστολή μας είναι να <strong>στηρίζουμε επιχειρήσεις</strong> στον χώρο της άσκησης, της ευεξίας και της υγείας, παρέχοντάς τους τα κατάλληλα εργαλεία για να αναπτυχθούν μέσω της τεχνολογίας EMS.",
              "Με ενα δίκτυο πελατών μας με <strong>πάνω απο 150 ems studio & φυσικοθεραπευτήρια</strong> στεκόμαστε δίπλα τους από την πρώτη μέρα: από την προμήθεια του εξοπλισμού, μέχρι την εκπαίδευση, την πιστοποίηση και τη συνεχή επιχειρηματική καθοδήγηση.",
              "Με <strong>πολυετή εμπειρία στον χώρο της ευεξίας</strong>, γνωρίζουμε πώς να μετατρέπουμε μια καινοτόμα τεχνολογία οπως ειναι αυτη του whole body EMS σε μια βιώσιμη και κερδοφόρα υπηρεσία.",
              `<i class="font-bold">Δεν είμαστε απλώς διανομείς — είμαστε στρατηγικός συνεργάτης ανάπτυξης.</i>`,
            ]
        }
      />

      <AboutSection
        title={locale === "en" ? "The parent company – miha bodytec" : "Η μητρική εταιρεία - miha bodytec"}
        image="/images/general/23.jpg"
        fullWidthTitle={false}
        reverse={false}
        description={
          locale === "en"
            ? [
              "Based in Germany, miha bodytec is the <strong>global leader</strong> in whole-body electrical muscle stimulation (WB-EMS) technology.",
              "Since 2007, it has designed and manufactured medical EMS devices to the highest <strong>“Made in Germany”</strong> standards, in collaboration with international scientific and medical institutions.",
              "Today it <strong>operates in 40+ countries</strong>, offering solutions for training, rehabilitation and prevention — meeting the needs of a modern, sedentary and aging population.",
            ]
            : [
              "Η miha bodytec, με έδρα στη Γερμανία, είναι ο <strong>παγκόσμιος ηγέτης</strong> στην τεχνολογία ηλεκτρομυϊκής διέγερσης ολόκληρου του σώματος (Whole-Body EMS).",
              "Από το 2007, σχεδιάζει και κατασκευάζει ιατρικές συσκευές EMS σύμφωνα με τα υψηλότερα πρότυπα <strong>“Made in Germany”</strong>, σε συνεργασία με διεθνή επιστημονικά και ιατρικά ιδρύματα.",
              "Σήμερα <strong>δραστηριοποιείται σε 40+ χώρες</strong>, προσφέροντας λύσεις για προπόνηση, αποκατάσταση και πρόληψη, απαντώντας στις ανάγκες ενός σύγχρονου, καθιστικού και γηράσκοντος πληθυσμού.",
            ]
        }
      />

      <Timeline
        title={locale === "en" ? "The journey of miha bodytec" : "Η πορεία της miha bodytec"}
        items={timelineItems}
      />

      <Advantages locale={locale} />

      <Footer />
    </main>
  );
}