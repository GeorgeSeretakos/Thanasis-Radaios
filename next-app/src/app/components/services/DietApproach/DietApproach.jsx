import styles from "./DietApproach.module.css";

export default function DietApproach() {
  return (
    <section className="py-12">
      <div className={styles.container}>
        <h2 className="title-black">
          Επιλέγοντάς μας ως συνεργάτες σας, κερδίζετε:
        </h2>

        <div className={styles["advantage-grid"]}>
          {/* Card 1 – Γερμανική Ποιότητα */}
          <div
            className={`${styles.card} ${styles.large}`}
            style={{ backgroundImage: "url('/images/equipment/328.jpg')" }}
          >
            <div className={styles.content}>
              <h3>Γερμανική Ποιότητα</h3>
              <p>
                Πλήρη εξοπλισμό EMS <strong>“Made in Germany”</strong> με εγγύηση ποιότητας.
              </p>
            </div>
          </div>

          {/* Card 2 – Εκπαίδευση & Πιστοποίηση */}
          <div
            className={`${styles.card} ${styles.small}`}
            style={{ backgroundImage: "url('/images/general/17.png')" }}
          >
            <div className={styles.content}>
              <h3>Εκπαίδευση & Πιστοποίηση</h3>
              <p>
                Δωρεάν εκπαίδευση και πιστοποίηση, με ένταξη στο <strong>διεθνές δίκτυο συνεργατών</strong> μας.
              </p>
            </div>
          </div>

          {/* Card 4 – Οικονομικό Όφελος */}
          <div
            className={`${styles.card} ${styles.small}`}
            style={{ backgroundImage: "url('/images/general/21.jpg')" }}
          >
            <div className={styles.content}>
              <h3>Οικονομικό Όφελος</h3>
              <p>
                Μικρό κόστος επένδυσης με <strong>μεγάλο περιθώριο κέρδους</strong> και <strong>γρήγορη απόσβεση</strong>.
              </p>
            </div>
          </div>

          {/* Card 3 – Στρατηγική Υποστήριξη */}
          <div
            className={`${styles.card} ${styles.large}`}
            style={{ backgroundImage: "url('/images/general/19.jpg')" }}
          >
            <div className={styles.content}>
              <h3>Στρατηγική Υποστήριξη</h3>
              <p>
                Στρατηγική υποστήριξη για να χτίσετε μια <strong>κερδοφόρα</strong> και <strong>διαφοροποιημένη</strong> υπηρεσία.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
