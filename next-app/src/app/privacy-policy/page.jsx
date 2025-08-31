// app/privacy-policy/PrivacyPolicyContent.jsx
"use client";

import { useEffect, useState } from "react";

export default function PrivacyPolicyContent() {
  const [locale, setLocale] = useState("el");

  useEffect(() => {
    const saved = localStorage.getItem("locale") || "el";
    setLocale(saved);
  }, []);

  const isEN = locale === "en";
  const effectiveDate = isEN ? "25 August 2025" : "25 Αυγούστου 2025";

  const t = {
    title: isEN ? "Privacy Policy & Terms of Use" : "Πολιτική Απορρήτου & Όροι Χρήσης",
    effDate: isEN ? "Effective date" : "Ημερομηνία ισχύος",
    intro:
      isEN
        ? "Protecting your personal data and being transparent about the terms of using our website matters to us. This page clearly explains what data we collect exclusively through our forms, how we use it and how we protect it. It also sets out the terms that govern the use of the site."
        : "Η προστασία των προσωπικών σας δεδομένων και η διαφανής ενημέρωση για τους όρους χρήσης της ιστοσελίδας μας είναι σημαντικές για εμάς. Σε αυτή τη σελίδα περιγράφουμε με σαφήνεια τι δεδομένα συλλέγουμε αποκλειστικά μέσω των φορμών μας, πώς τα χρησιμοποιούμε και πώς τα προστατεύουμε. Παράλληλα εξηγούμε τους όρους που διέπουν τη χρήση του ιστότοπου.",
    toc: isEN ? "Contents" : "Περιεχόμενα",

    // Headings
    privacy: isEN ? "Privacy Policy" : "Πολιτική Απορρήτου",
    controller: isEN ? "Controller & Contact Details" : "Υπεύθυνος Επεξεργασίας & Στοιχεία",
    collected: isEN ? "What data we collect (by form)" : "Ποια δεδομένα συλλέγουμε (ανά φόρμα)",
    purposes: isEN ? "Purposes & Legal bases" : "Σκοποί & Νομικές βάσεις",
    recipients: isEN ? "Recipients / Processors" : "Αποδέκτες / Εκτελούντες",
    transfers: isEN ? "Transfers outside the EEA" : "Διαβιβάσεις εκτός ΕΟΧ",
    retention: isEN ? "Retention periods" : "Χρόνος διατήρησης",
    embeds: isEN ? "Embedded content (YouTube, Google Maps)" : "Ενσωματωμένο περιεχόμενο (YouTube, Google Maps)",
    security: isEN ? "Security" : "Ασφάλεια",
    rights: isEN ? "Your rights (GDPR)" : "Δικαιώματα υποκειμένων (GDPR)",
    minors: isEN ? "Minors" : "Ανήλικοι",
    contactPrivacy: isEN ? "Contact for privacy matters" : "Επικοινωνία για θέματα απορρήτου",
    changes: isEN ? "Changes to this Policy" : "Αλλαγές στην Πολιτική",
    storage: isEN ? "Cookies & local storage" : "Cookies & local storage",

    // Terms
    terms: isEN ? "Terms & Conditions of Use" : "Όροι & Προϋποθέσεις Χρήσης",
    accept: isEN ? "Acceptance" : "Αποδοχή όρων",
    ip: isEN ? "Intellectual property" : "Πνευματική ιδιοκτησία",
    thirdLic: isEN ? "Third-party content – Credits & Licenses" : "Περιεχόμενο τρίτων – Credits & Άδειες",
    acceptableUse: isEN ? "Acceptable use" : "Αποδεκτή χρήση",
    links: isEN ? "Third-party links" : "Σύνδεσμοι τρίτων",
    medical: isEN ? "Medical/Professional disclaimer" : "Ιατρική/Επαγγελματική αποποίηση",
    liability: isEN ? "Limitation of liability" : "Περιορισμός ευθύνης",
    changesTerms: isEN ? "Changes" : "Τροποποιήσεις",
    law: isEN ? "Governing law & jurisdiction" : "Εφαρμοστέο δίκαιο & δικαιοδοσία",

    // Bodies (selected)
    controllerBody: isEN
      ? <>
        The data controller is <strong>FF Medical & Wellness</strong>.
        <ul>
          <li>Address: Iroon Polytechneiou 5, Nea Erythraia, 146 71, Greece</li>
          <li>Email: <a href="mailto:ffmedicwell@gmail.com">ffmedicwell@gmail.com</a></li>
          <li>Phone: <a href="tel:2108070010">210 8070010</a></li>
        </ul>
      </>
      : <>
        Υπεύθυνος επεξεργασίας είναι η <strong>FF Medical & Wellness</strong>.
        <ul>
          <li>Διεύθυνση: Ηρώων Πολυτεχνείου 5, Νέα Ερυθραία, 146 71, Ελλάδα</li>
          <li>Email: <a href="mailto:ffmedicwell@gmail.com">ffmedicwell@gmail.com</a></li>
          <li>Τηλέφωνο: <a href="tel:2108070010">210 8070010</a></li>
        </ul>
      </>,

    formsIntro: isEN
      ? "We collect data exclusively through the following Netlify forms on our site:"
      : "Συλλέγουμε δεδομένα αποκλειστικά μέσω των παρακάτω φορμών Netlify στον ιστότοπό μας:",

    // Forms + fields
    contactFormH: isEN ? "a) Contact form (name=\"contact\")" : "α) Φόρμα επικοινωνίας (name=\"contact\")",
    contactFormFields: isEN
      ? <>Fields: <em>First name</em>, <em>Last name</em>, <em>Phone</em>, <em>Message</em>, and a required checkbox to accept this Privacy Policy.</>
      : <>Πεδία: <em>Όνομα</em>, <em>Επώνυμο</em>, <em>Τηλέφωνο</em>, <em>Μήνυμα</em>, καθώς και υποχρεωτικό checkbox αποδοχής της παρούσας Πολιτικής.</>,
    orderFormH: isEN ? "b) Order request form (name=\"order-request\")" : "β) Φόρμα αίτησης παραγγελίας (name=\"order-request\")",
    orderFormFields: isEN
      ? <>Fields: <em>Όνομα</em>, <em>Επώνυμο</em>, <em>Τηλέφωνο</em>, <em>email</em>, <em>Μήνυμα / Σχόλιο</em>, plus hidden <em>Σύνοψη_Παραγγελίας</em> (auto-generated summary of selected items).</>
      : <>Πεδία: <em>Όνομα</em>, <em>Επώνυμο</em>, <em>Τηλέφωνο</em>, <em>email</em>, <em>Μήνυμα / Σχόλιο</em>, καθώς και κρυφό <em>Σύνοψη_Παραγγελίας</em> (αυτόματα δημιουργούμενη σύνοψη επιλογών).</>,
    newsletterFormH: isEN ? "c) Newsletter signup (name=\"newsletter\")" : "γ) Εγγραφή Newsletter (name=\"newsletter\")",
    newsletterFormFields: isEN
      ? <>Fields: <em>Όνομα</em>, <em>Επώνυμο</em>, <em>email</em>, optional <em>Τηλέφωνο</em>, and a required consent checkbox.</>
      : <>Πεδία: <em>Όνομα</em>, <em>Επώνυμο</em>, <em>email</em>, προαιρετικά <em>Τηλέφωνο</em>, καθώς και υποχρεωτικό checkbox συγκατάθεσης.</>,

    noSensitive: isEN
      ? <>Important: Please <em>do not</em> submit special categories of data (e.g., health information, payment details). The forms are intended for general enquiries, order requests and newsletter opt-in.</>
      : <>Σημαντικό: Παρακαλούμε <em>μην</em> υποβάλλετε ευαίσθητα δεδομένα (π.χ. δεδομένα υγείας, στοιχεία πληρωμών). Οι φόρμες προορίζονται για γενικά αιτήματα, αιτήσεις παραγγελίας και εγγραφή στο newsletter.</>,

    purposesBody: isEN
      ? (
        <>
          We use your data solely for:
          <ul>
            <li><strong>Responding to your enquiry</strong> via the contact form (Art. 6(1)(b) GDPR – pre-contractual steps and/or Art. 6(1)(f) GDPR – legitimate interests).</li>
            <li><strong>Processing your order request</strong> and communicating with you about it (Art. 6(1)(b) GDPR; and/or Art. 6(1)(f) GDPR).</li>
            <li><strong>Sending the newsletter</strong> only if you have given your prior <strong>consent</strong> (Art. 6(1)(a) GDPR). You can withdraw consent at any time.</li>
            <li><strong>Compliance with legal obligations</strong> where required (Art. 6(1)(c) GDPR).</li>
          </ul>
          We do not use analytics/remarketing tools on this site.
        </>
      )
      : (
        <>
          Χρησιμοποιούμε τα στοιχεία σας αποκλειστικά για:
          <ul>
            <li><strong>Ανταπόκριση στο αίτημά σας</strong> μέσω της φόρμας επικοινωνίας (άρθρο 6(1)(b) GDPR και/ή άρθρο 6(1)(f) GDPR).</li>
            <li><strong>Διαχείριση του αιτήματος παραγγελίας</strong> και επικοινωνία σχετικά με αυτό (άρθρο 6(1)(b) GDPR και/ή άρθρο 6(1)(f) GDPR).</li>
            <li><strong>Αποστολή newsletter</strong> μόνο με προηγούμενη <strong>συγκατάθεση</strong> (άρθρο 6(1)(a) GDPR). Μπορείτε να ανακαλέσετε ανά πάσα στιγμή.</li>
            <li><strong>Συμμόρφωση με νομικές υποχρεώσεις</strong> όπου απαιτείται (άρθρο 6(1)(c) GDPR).</li>
          </ul>
          Δεν χρησιμοποιούμε εργαλεία στατιστικών/remarketing στον ιστότοπο.
        </>
      ),

    recipientsBody: isEN
      ? (
        <>
          Access to your data may be available to:
          <ul>
            <li><strong>Netlify (Netlify Forms)</strong> as our processor for receiving/storing submissions.</li>
            <li><strong>Our email provider</strong> for sending/receiving related messages.</li>
            <li><strong>Hosting/CDN (Netlify)</strong> for site operation and security.</li>
          </ul>
          Our partners process data only under our instructions and based on data processing agreements (Art. 28 GDPR). We do not share your data with third-party marketing platforms unless you explicitly subscribe to the newsletter.
        </>
      )
      : (
        <>
          Πρόσβαση στα δεδομένα σας μπορεί να έχουν:
          <ul>
            <li><strong>Netlify (Netlify Forms)</strong> ως εκτελών την επεξεργασία για λήψη/αποθήκευση υποβολών.</li>
            <li><strong>Ο πάροχος email</strong> της εταιρείας μας για αποστολή/παραλαβή σχετικών μηνυμάτων.</li>
            <li><strong>Φιλοξενία/CDN (Netlify)</strong> για λειτουργία και ασφάλεια του ιστότοπου.</li>
          </ul>
          Οι συνεργάτες μας επεξεργάζονται δεδομένα μόνο κατ’ εντολή μας και βάσει συμβάσεων επεξεργασίας (άρθρο 28 GDPR). Δεν κοινοποιούμε στοιχεία σας σε πλατφόρμες μάρκετινγκ τρίτων, εκτός αν εγγραφείτε ρητά στο newsletter.
        </>
      ),

    transfersBody: isEN
      ? "Because we use providers such as Netlify and Google services (YouTube, Google Maps), data transfers outside the EEA (e.g., to the USA) may occur. Such transfers are covered by Standard Contractual Clauses (SCCs) or equivalent safeguards under EU law."
      : "Λόγω χρήσης παρόχων όπως το Netlify και υπηρεσιών της Google (YouTube, Google Maps), ενδέχεται να πραγματοποιούνται διαβιβάσεις δεδομένων εκτός ΕΟΧ (π.χ. στις ΗΠΑ). Οι διαβιβάσεις καλύπτονται από Τυποποιημένες Συμβατικές Ρήτρες (SCCs) ή ισοδύναμες εγγυήσεις βάσει του δικαίου της ΕΕ.",

    retentionBody: isEN
      ? (
        <ul>
          <li><strong>Contact form submissions:</strong> retained as needed to respond/manage your request, with <em>periodic review</em> and deletion when no longer needed (at least annually).</li>
          <li><strong>Order request form:</strong> retained for pre-contract communication and follow-up for up to <em>24 months</em> after last interaction, unless longer is required by law or to establish/exercise legal claims.</li>
          <li><strong>Newsletter sign-ups:</strong> retained <em>until you withdraw consent</em> (unsubscribe) or after prolonged inactivity. You can unsubscribe anytime.</li>
          <li><strong>Corporate email correspondence:</strong> retained as necessary for service/record-keeping, with <em>periodic review</em> and deletion when no longer required.</li>
        </ul>
      )
      : (
        <ul>
          <li><strong>Υποβολές φόρμας επικοινωνίας:</strong> διατηρούνται όσο απαιτείται για απάντηση/διαχείριση, με <em>περιοδική ανασκόπηση</em> και διαγραφή όταν δεν χρειάζονται πλέον (τουλάχιστον ετήσια).</li>
          <li><strong>Φόρμα αίτησης παραγγελίας:</strong> διατηρείται για προσυμβατική επικοινωνία και παρακολούθηση έως <em>24 μήνες</em> από την τελευταία αλληλεπίδραση, εκτός αν απαιτείται μεγαλύτερο διάστημα από τον νόμο ή για νομικές αξιώσεις.</li>
          <li><strong>Εγγραφές στο newsletter:</strong> διατηρούνται <em>μέχρι ανάκληση συγκατάθεσης</em> (unsubscribe) ή μετά από παρατεταμένη αδράνεια. Μπορείτε να απεγγραφείτε ανά πάσα στιγμή.</li>
          <li><strong>Ανταλλαγή email στο εταιρικό mailbox:</strong> διατηρείται όσο είναι αναγκαίο για εξυπηρέτηση/τεκμηρίωση, με <em>περιοδική ανασκόπηση</em> και διαγραφή όταν δεν είναι πλέον απαραίτητα.</li>
        </ul>
      ),

    embedsBody: isEN
      ? (
        <>
          The site includes embedded <strong>YouTube videos</strong> and a <strong>Google Map</strong>. When viewing/interacting, these providers may collect usage data and/or place cookies under their policies.
          <ul>
            <li>Google/YouTube Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
          </ul>
          Links to other sites or social profiles lead to third-party environments where their own policies apply.
        </>
      )
      : (
        <>
          Ο ιστότοπος περιλαμβάνει ενσωματωμένα <strong>βίντεο YouTube</strong> και <strong>χάρτη Google</strong>. Κατά την προβολή/αλληλεπίδραση, οι πάροχοι ενδέχεται να συλλέγουν δεδομένα χρήσης ή/και να τοποθετούν cookies σύμφωνα με τις πολιτικές τους.
          <ul>
            <li>Πολιτική Απορρήτου Google/YouTube: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
          </ul>
          Οι σύνδεσμοι προς άλλα sites ή social οδηγούν σε περιβάλλοντα τρίτων, όπου ισχύουν οι δικές τους πολιτικές.
        </>
      ),

    storageBody: isEN
      ? (
        <>
          We do not use marketing cookies. We use:
          <ul>
            <li><code>localStorage</code> to remember your language preference (<code>locale</code>).</li>
            <li><code>sessionStorage</code> to limit showing the newsletter modal (<code>newsletterModalSeen:&lt;locale&gt;</code>).</li>
          </ul>
          These are functional items you can clear from your browser at any time.
        </>
      )
      : (
        <>
          Δεν χρησιμοποιούμε cookies μάρκετινγκ. Χρησιμοποιούμε:
          <ul>
            <li><code>localStorage</code> για την προτίμηση γλώσσας (<code>locale</code>).</li>
            <li><code>sessionStorage</code> για τον περιορισμό εμφάνισης του newsletter modal (<code>newsletterModalSeen:&lt;locale&gt;</code>).</li>
          </ul>
          Τα στοιχεία αυτά είναι λειτουργικά και μπορείτε να τα διαγράψετε ανά πάσα στιγμή από τον φυλλομετρητή σας.
        </>
      ),

    securityBody: isEN
      ? "We implement appropriate technical and organisational measures (HTTPS, access controls, software updates) to protect data against unauthorised access, loss or alteration."
      : "Εφαρμόζουμε κατάλληλα τεχνικά και οργανωτικά μέτρα (HTTPS, έλεγχος πρόσβασης, ενημερώσεις λογισμικού) για την προστασία των δεδομένων από μη εξουσιοδοτημένη πρόσβαση, απώλεια ή αλλοίωση.",

    rightsBody: isEN
      ? (
        <>
          You may exercise at any time:
          <ul>
            <li>Right of access (copy)</li>
            <li>Right to rectification</li>
            <li>Right to erasure (“right to be forgotten”), where applicable</li>
            <li>Right to restriction of processing</li>
            <li>Right to object (for legitimate-interest bases)</li>
            <li>Right to data portability (where applicable)</li>
          </ul>
          You also have the right to lodge a complaint with the Hellenic DPA – <a href="https://www.dpa.gr/" target="_blank" rel="noopener noreferrer">www.dpa.gr</a>.
        </>
      )
      : (
        <>
          Μπορείτε να ασκήσετε ανά πάσα στιγμή:
          <ul>
            <li>Δικαίωμα πρόσβασης και λήψης αντιγράφου</li>
            <li>Δικαίωμα διόρθωσης</li>
            <li>Δικαίωμα διαγραφής (“λήθη”) όπου εφαρμόζεται</li>
            <li>Δικαίωμα περιορισμού επεξεργασίας</li>
            <li>Δικαίωμα εναντίωσης (σε βάσεις εννόμου συμφέροντος)</li>
            <li>Δικαίωμα φορητότητας (όπου εφαρμόζεται)</li>
          </ul>
          Έχετε επίσης δικαίωμα καταγγελίας στην ΑΠΔΠΧ – <a href="https://www.dpa.gr/" target="_blank" rel="noopener noreferrer">www.dpa.gr</a>.
        </>
      ),

    minorsBody: isEN
      ? "This website targets adults. If you are under 16, please do not submit personal data without parental/guardian consent."
      : "Η ιστοσελίδα απευθύνεται σε ενήλικες. Αν είστε κάτω των 16 ετών, μην υποβάλλετε προσωπικά δεδομένα χωρίς συγκατάθεση γονέα/κηδεμόνα.",

    contactPrivacyBody: isEN
      ? (
        <>
          For privacy questions/requests:
          <ul>
            <li>Email: <a href="mailto:ffmedicwell@gmail.com">ffmedicwell@gmail.com</a></li>
            <li>Phone: <a href="tel:2108070010">210 8070010</a></li>
            <li>Address: Iroon Polytechneiou 5, Nea Erythraia, 146 71, Greece</li>
          </ul>
        </>
      )
      : (
        <>
          Για αιτήματα/ερωτήσεις σχετικά με τα δεδομένα σας:
          <ul>
            <li>Email: <a href="mailto:ffmedicwell@gmail.com">ffmedicwell@gmail.com</a></li>
            <li>Τηλέφωνο: <a href="tel:2108070010">210 8070010</a></li>
            <li>Διεύθυνση: Ηρώων Πολυτεχνείου 5, Νέα Ερυθραία, 146 71, Ελλάδα</li>
          </ul>
        </>
      ),

    changesBody: isEN
      ? "We may update this Policy periodically. The current version is published on this page with an updated effective date."
      : "Η παρούσα Πολιτική μπορεί να ενημερώνεται περιοδικά. Η εκάστοτε ισχύουσα έκδοση δημοσιεύεται σε αυτή τη σελίδα με επικαιροποιημένη ημερομηνία ισχύος.",

    // Terms bodies
    acceptBody: isEN
      ? "By accessing/using the site, you agree to these terms. If you do not agree, please do not use the site."
      : "Με την πρόσβαση και χρήση του ιστότοπου συμφωνείτε με τους παρόντες όρους. Αν δεν συμφωνείτε, παρακαλούμε μη χρησιμοποιείτε την ιστοσελίδα.",
    ipBody: isEN
      ? "The content (marks, logos, texts, images, presentation material) is protected by intellectual property laws. Reproduction, distribution or modification is prohibited without prior written permission, unless expressly permitted by a relevant third-party license."
      : "Το περιεχόμενο (σήματα, λογότυπα, κείμενα, εικόνες, υλικό παρουσίασης) προστατεύεται από δικαιώματα πνευματικής ιδιοκτησίας. Απαγορεύεται η αναπαραγωγή, διανομή ή τροποποίηση χωρίς προηγούμενη γραπτή άδεια, εκτός εάν ρητά επιτρέπεται από σχετική άδεια τρίτου.",
    thirdLicBody: isEN
      ? "We use images and icons from third-party free resources under their licenses (e.g., Pexels, Unsplash, Freepik, FreeImages, Flaticon). Where attribution is required, it is provided on this page and/or near the relevant material. Trademarks and names belong to their respective owners. If any rights holder believes their rights are affected, please contact us for prompt resolution."
      : "Χρησιμοποιούμε εικόνες και εικονίδια από τρίτες πλατφόρμες δωρεάν πόρων σύμφωνα με τις άδειές τους (π.χ. Pexels, Unsplash, Freepik, FreeImages, Flaticon). Όπου απαιτείται αναφορά προέλευσης, αυτή παρέχεται στην παρούσα σελίδα ή/και δίπλα στο σχετικό υλικό. Τα εμπορικά σήματα ανήκουν στους νόμιμους δικαιούχους τους. Αν θεωρείτε ότι θίγονται δικαιώματά σας, επικοινωνήστε μαζί μας για άμεση διευθέτηση.",
    acceptableUseBody: isEN
      ? (
        <ul>
          <li>Do not use the site in ways that violate the law or third-party rights.</li>
          <li>No attempts at unauthorised access to systems/data or interference with site operation.</li>
        </ul>
      )
      : (
        <ul>
          <li>Απαγορεύεται χρήση του ιστότοπου κατά τρόπο που παραβιάζει τον νόμο ή δικαιώματα τρίτων.</li>
          <li>Απαγορεύεται απόπειρα μη εξουσιοδοτημένης πρόσβασης σε συστήματα/δεδομένα ή παρεμβάσεις στη λειτουργία του ιστότοπου.</li>
        </ul>
      ),
    linksBody: isEN
      ? "The site includes links to our other pages and social accounts (YouTube, Facebook). We are not responsible for third-party content or privacy policies."
      : "Ο ιστότοπος περιέχει συνδέσμους προς άλλες σελίδες μας και λογαριασμούς σε κοινωνικά δίκτυα (YouTube, Facebook). Δεν ευθυνόμαστε για το περιεχόμενο ή τις πολιτικές απορρήτου των τρίτων.",
    medicalBody: isEN
      ? "Information is provided for informational purposes about EMS technology and our services and does not constitute medical advice. Consult a healthcare professional before any exercise/therapy program."
      : "Οι πληροφορίες παρέχονται για ενημερωτικούς σκοπούς σχετικά με την τεχνολογία EMS και τις υπηρεσίες μας και δεν αποτελούν ιατρική συμβουλή. Συμβουλευτείτε επαγγελματία υγείας πριν από οποιοδήποτε πρόγραμμα άσκησης/θεραπείας.",
    liabilityBody: isEN
      ? "We strive for accuracy, without warranties of completeness or timeliness. To the maximum extent permitted by law, we are not liable for direct/indirect damages arising from site use."
      : "Καταβάλλουμε προσπάθεια για την ακρίβεια του περιεχομένου, χωρίς εγγυήσεις πληρότητας ή επικαιρότητας. Στο μέγιστο που επιτρέπεται από τον νόμο, δεν φέρουμε ευθύνη για άμεσες/έμμεσες ζημίες από τη χρήση του ιστότοπου.",
    changesTermsBody: isEN
      ? "We may modify these terms. Continued use after changes constitutes acceptance of the new terms."
      : "Διατηρούμε το δικαίωμα τροποποίησης των όρων. Η συνέχιση χρήσης μετά τις αλλαγές συνιστά αποδοχή των νέων όρων.",
    lawBody: isEN
      ? "These terms are governed by Greek law. Courts of Athens have jurisdiction, subject to mandatory consumer protection provisions."
      : "Οι όροι διέπονται από το Ελληνικό Δίκαιο. Αρμόδια τα δικαστήρια Αθηνών, με την επιφύλαξη αναγκαστικών διατάξεων προστασίας καταναλωτή.",

    contactFooterH: isEN ? "Contact" : "Επικοινωνία",
    contactFooterB: isEN
      ? <>For anything related to this page (Privacy Policy or Terms), contact <a href="mailto:ffmedicwell@gmail.com">ffmedicwell@gmail.com</a> or <a href="tel:2108070010">210 8070010</a>.</>
      : <>Για οτιδήποτε σχετικό με την παρούσα σελίδα (Πολιτική Απορρήτου ή Όρους Χρήσης) επικοινωνήστε στο <a href="mailto:ffmedicwell@gmail.com">ffmedicwell@gmail.com</a> ή στο <a href="tel:2108070010">210 8070010</a>.</>,
  };

  return (
    <main className="privacy-policy bg-[#0a0a0a] text-[#f0f0f0] py-16 px-4">
      <div className="container content max-w-4xl mx-auto leading-relaxed">
        {/* Header */}
        <header className="mb-8">
          <h1 className="mb-2">{t.title}</h1>
          <p>
            {t.effDate}: {effectiveDate}
          </p>
        </header>

        {/* Intro */}
        <section className="mb-8">
          <p>{t.intro}</p>
        </section>

        {/* TOC */}
        <nav className="mb-10">
          <h2 className="mb-3">{t.toc}</h2>
          <ol className="list-decimal pl-6 space-y-1">
            <li>
              <a href="#privacy">{t.privacy}</a>
              <ol className="list-decimal pl-6 mt-2 space-y-1">
                <li><a href="#controller">{t.controller}</a></li>
                <li><a href="#data-we-collect">{t.collected}</a></li>
                <li><a href="#purposes">{t.purposes}</a></li>
                <li><a href="#recipients">{t.recipients}</a></li>
                <li><a href="#transfers">{t.transfers}</a></li>
                <li><a href="#retention">{t.retention}</a></li>
                <li><a href="#storage">{t.storage}</a></li>
                <li><a href="#embeds">{t.embeds}</a></li>
                <li><a href="#security">{t.security}</a></li>
                <li><a href="#rights">{t.rights}</a></li>
                <li><a href="#minors">{t.minors}</a></li>
                <li><a href="#contact-privacy">{t.contactPrivacy}</a></li>
                <li><a href="#changes">{t.changes}</a></li>
              </ol>
            </li>
            <li className="mt-3">
              <a href="#terms">{t.terms}</a>
              <ol className="list-decimal pl-6 mt-2 space-y-1">
                <li><a href="#acceptance">{t.accept}</a></li>
                <li><a href="#ip">{t.ip}</a></li>
                <li><a href="#third-party-licenses">{t.thirdLic}</a></li>
                <li><a href="#acceptable-use">{t.acceptableUse}</a></li>
                <li><a href="#links">{t.links}</a></li>
                <li><a href="#medical">{t.medical}</a></li>
                <li><a href="#liability">{t.liability}</a></li>
                <li><a href="#changes-terms">{t.changesTerms}</a></li>
                <li><a href="#law">{t.law}</a></li>
              </ol>
            </li>
          </ol>
        </nav>

        {/* -------------------- PRIVACY -------------------- */}
        <section id="privacy" className="mb-12">
          <h2 className="mb-4">{t.privacy}</h2>

          <section id="controller" className="mb-8">
            <h3>1) {t.controller}</h3>
            <div>{t.controllerBody}</div>
          </section>

          <section id="data-we-collect" className="mb-8">
            <h3>2) {t.collected}</h3>
            <p>{t.formsIntro}</p>

            <ul className="space-y-2 mt-2">
              <li>
                <strong>{t.contactFormH}</strong>
                <div>{t.contactFormFields}</div>
              </li>
              <li>
                <strong>{t.orderFormH}</strong>
                <div>{t.orderFormFields}</div>
              </li>
              <li>
                <strong>{t.newsletterFormH}</strong>
                <div>{t.newsletterFormFields}</div>
              </li>
            </ul>

            <p className="mt-4">{t.noSensitive}</p>
          </section>

          <section id="purposes" className="mb-8">
            <h3>3) {t.purposes}</h3>
            <div>{t.purposesBody}</div>
          </section>

          <section id="recipients" className="mb-8">
            <h3>4) {t.recipients}</h3>
            <div>{t.recipientsBody}</div>
          </section>

          <section id="transfers" className="mb-8">
            <h3>5) {t.transfers}</h3>
            <p>{t.transfersBody}</p>
          </section>

          <section id="retention" className="mb-8">
            <h3>6) {t.retention}</h3>
            <div>{t.retentionBody}</div>
          </section>

          <section id="storage" className="mb-8">
            <h3>7) {t.storage}</h3>
            <div>{t.storageBody}</div>
          </section>

          <section id="embeds" className="mb-8">
            <h3>8) {t.embeds}</h3>
            <div>{t.embedsBody}</div>
          </section>

          <section id="security" className="mb-8">
            <h3>9) {t.security}</h3>
            <p>{t.securityBody}</p>
          </section>

          <section id="rights" className="mb-8">
            <h3>10) {t.rights}</h3>
            <div>{t.rightsBody}</div>
          </section>

          <section id="minors" className="mb-8">
            <h3>11) {t.minors}</h3>
            <p>{t.minorsBody}</p>
          </section>

          <section id="contact-privacy" className="mb-8">
            <h3>12) {t.contactPrivacy}</h3>
            <div>{t.contactPrivacyBody}</div>
          </section>

          <section id="changes" className="mb-8">
            <h3>13) {t.changes}</h3>
            <p>{t.changesBody}</p>
          </section>
        </section>

        {/* -------------------- TERMS -------------------- */}
        <section id="terms" className="mb-12">
          <h2 className="mb-4">{t.terms}</h2>

          <section id="acceptance" className="mb-6">
            <h3>1) {t.accept}</h3>
            <p>{t.acceptBody}</p>
          </section>

          <section id="ip" className="mb-6">
            <h3>2) {t.ip}</h3>
            <p>{t.ipBody}</p>
          </section>

          <section id="third-party-licenses" className="mb-6">
            <h3>3) {t.thirdLic}</h3>
            <p>{t.thirdLicBody}</p>
          </section>

          <section id="acceptable-use" className="mb-6">
            <h3>4) {t.acceptableUse}</h3>
            <div>{t.acceptableUseBody}</div>
          </section>

          <section id="links" className="mb-6">
            <h3>5) {t.links}</h3>
            <p>{t.linksBody}</p>
          </section>

          <section id="medical" className="mb-6">
            <h3>6) {t.medical}</h3>
            <p>{t.medicalBody}</p>
          </section>

          <section id="liability" className="mb-6">
            <h3>7) {t.liability}</h3>
            <p>{t.liabilityBody}</p>
          </section>

          <section id="changes-terms" className="mb-6">
            <h3>8) {t.changesTerms}</h3>
            <p>{t.changesTermsBody}</p>
          </section>

          <section id="law" className="mb-6">
            <h3>9) {t.law}</h3>
            <p>{t.lawBody}</p>
          </section>
        </section>

        {/* Contact footer */}
        <section className="mt-12">
          <h3>{t.contactFooterH}</h3>
          <p>{t.contactFooterB}</p>
        </section>
      </div>
    </main>
  );
}
