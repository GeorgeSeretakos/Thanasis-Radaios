import SocialSection from "../components/home/SocialSection";

export default function Contact() {
  return (
    <main className="flex flex-col">

      {/* Contact Section */}
      <section
        className="relative text-white py-12 px-4 h-[90vh] flex items-center"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/general/9.jpg')" }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 z-0"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Επικοινώνησε Μαζί μας
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="bg-white/5 p-6 rounded-lg">
              <div className="mb-4">
                <strong>Διεύθυνση</strong><br />
                <ul className="list-disc pl-5">
                  <li>
                    Ηρώων Πολυτεχνείου 5, Νέα Ερυθραία 146 71
                  </li>
                </ul>
              </div>
              <div className="mb-4">
                <strong>Τηλέφωνο</strong><br />
                <ul className="list-disc pl-5">
                  <li>210 8070010</li>
                </ul>
              </div>
              <div className="mb-4">
                <strong>Email</strong><br />
                <ul className="list-disc pl-5">
                  <li>
                    <a href="mailto:ffmedicwell@gmail.com" className="text-blue-400 hover:underline">
                      ffmedicwell@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <strong>Ώρες Λειτουργίας</strong><br />
                <ul className="list-disc pl-5">
                  <li>Δευτέρα - Παρασκευή: 09:00 – 18:00</li>
                  <li>Σάββατο - Κυριακή: Κλειστά</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 p-6 rounded-lg">
              <p className="mb-4 text-sm font-bold">
                Συμπλήρωσε τη φόρμα και θα επικοινωνήσουμε μαζί σου το συντομότερο.
              </p>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                action="/thank-you"
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>Don’t fill this out: <input name="bot-field" /></label>
                </p>

                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Όνομα"
                    required
                    className="flex-1 p-2 rounded bg-black/30 border border-gray-700 text-white"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Επώνυμο"
                    required
                    className="flex-1 p-2 rounded bg-black/30 border border-gray-700 text-white"
                  />
                </div>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Τηλέφωνο"
                  required
                  className="w-full p-2 rounded bg-black/30 border border-gray-700 text-white"
                />

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Μήνυμα"
                  required
                  className="w-full p-2 rounded bg-black/30 border border-gray-700 text-white"
                />

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <label className="flex items-center gap-2 text-xs">
                    <input
                      type="checkbox"
                      required
                      className="accent-blue-500 scale-125"
                    />
                    Αποδέχομαι την{" "}
                    <a href="/privacy-policy" className="text-blue-400 hover:underline">
                      Πολιτική Απορρήτου
                    </a>
                  </label>
                  <button
                    type="submit"
                    className="btn"
                  >
                    Αποστολή
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>


      </section>

      {/* Map Section */}
      <section className="map font-bold">
        <section className="map font-bold">
          <footer className="py-4">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-4">

              {/* Logo on top */}
              <div className="w-full max-w-[400px]">
                <img
                  src="/logo/3.png"
                  alt="Miha Bodytec Logo"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Text + Social */}
              <div className="flex flex-col items-center gap-2">
                <p className="text-sm">
                  &copy; 2025 FF Medical & Wellness. All rights reserved.
                </p>

                <div className="flex flex-wrap justify-center gap-2 text-sm">
                  <a
                    href="mailto:ffmedicwell@gmail.com"
                    className="hover:underline"
                  >
                    ffmedicwell@gmail.com
                  </a>
                  <span>·</span>
                  <a href="tel:210 8070010" className="hover:underline">
                    210 8070010
                  </a>
                  <span>·</span>
                  <a href="/privacy-policy" className="hover:underline">
                    Πολιτική Απορρήτου
                  </a>
                </div>

                {/* Social icons */}
                <SocialSection/>
              </div>

            </div>
          </footer>
        </section>


        <div className="mx-auto w-1/2 md:w-full sm:w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3140.1926897680096!2d23.812853375855056!3d38.08917839398699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a19efc17b18f5f%3A0x8b7caf8209b192c1!2zzpfPgS4gzqDOv867z4XPhM61z4fOvc61zq_Ov8-FIDUsIM6dzq3OsSDOlc-Bz4XOuM-BzrHOr86xIDE0NiA3MQ!5e0!3m2!1sel!2sgr!4v1755200375385!5m2!1sel!2sgr"
            className="rounded-lg w-full"
            height="450"
            style={{border: 0}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
}