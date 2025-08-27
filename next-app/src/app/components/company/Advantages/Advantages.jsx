import styles from "./Advantages.module.css";

export default function Advantages() {
  return (
    <section className="py-12">
      <div className={styles.container}>
        <h2 className="text-center">
          Γιατί να μας επιλέξετε
        </h2>

        <div className={styles["advantage-grid"]}>
        {/* Card 1 – Γερμανική Ποιότητα */}
          <div
            className={`${styles.card} ${styles.large}`}
            style={{ backgroundImage: "url('/images/general/10.webp')" }}
          >
            <div className={styles.content}>
              <h3>Γερμανική Ποιότητα</h3>
              <p>
                Πιστοποιημένη ιατρική συσκευή ηλεκτρομυοδιέγερσης. Πλήρης εξοπλισμός EMS <strong>“Made in Germany”</strong> με εγγύηση ποιότητας
              </p>
            </div>
          </div>

          {/* Card 2 – Εκπαίδευση & Πιστοποίηση */}
          <div
            className={`${styles.card} ${styles.small}`}
            style={{ backgroundImage: "url('/images/equipment/cards_1.jpg')" }}
          >
            <div className={styles.content}>
              <h3>Εκπαίδευση & Πιστοποίηση</h3>
              <p>
                Δωρεάν εκπαίδευση, διεθνής πιστοποίηση, ένταξη σε παγκόσμιο δίκτυο
              </p>
            </div>
          </div>

          {/* Card 4 – Οικονομικό Όφελος */}
          <div
            className={`${styles.card} ${styles.small}`}
            style={{ backgroundImage: "url('/images/general/30.jpg')" }}
          >
            <div className={styles.content}>
              <h3>Οικονομικό Όφελος</h3>
              <p>
                Μικρό αρχικό κόστος, μεγάλο περιθώριο κέρδους, γρήγορη απόσβεση
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
                Συνεχής καθοδήγηση για ανάπτυξη μιας κερδοφόρας υπηρεσίας
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
