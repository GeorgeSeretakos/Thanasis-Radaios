import SocialSection from "../components/home/SocialSection";

export default function Contact() {
  return (
    <main className="flex flex-col">
      {/* Contact Section */}
      <section className="relative text-white py-12 px-4 min-h-screen flex items-center">
        {/* Background image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{backgroundImage: "url('/images/general/28.jpg')"}}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80 z-0"></div>

        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
            Επικοινώνησε Μαζί μας
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="bg-white/5 p-6 rounded-lg text-sm sm:text-base">
              <div className="mb-4">
                <strong>Διεύθυνση</strong>
                <ul className="list-disc pl-5">
                  <li>Ηρώων Πολυτεχνείου 5, Νέα Ερυθραία 146 71</li>
                </ul>
              </div>
              <div className="mb-4">
                <strong>Τηλέφωνο</strong>
                <ul className="list-disc pl-5">
                  <li>210 8070010</li>
                </ul>
              </div>
              <div className="mb-4">
                <strong>Email</strong>
                <ul className="list-disc pl-5">
                  <li>
                    <a
                      href="mailto:ffmedicwell@gmail.com"
                      className="text-blue-400 hover:underline"
                    >
                      ffmedicwell@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <strong>Ώρες Λειτουργίας</strong>
                <ul className="list-disc pl-5">
                  <li>Δευτέρα - Παρασκευή: 09:00 – 18:00</li>
                  <li>Σάββατο - Κυριακή: Κλειστά</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 p-6 rounded-lg text-sm sm:text-base">
              <p className="mb-4 font-bold">
                Συμπλήρωσε τη φόρμα και θα επικοινωνήσουμε μαζί σου το
                συντομότερο.
              </p>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                action="/thank-you"
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="contact"/>
                <p hidden>
                  <label>
                    Don’t fill this out: <input name="bot-field"/>
                  </label>
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
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
                  <label className="flex items-center gap-2 text-xs sm:text-sm">
                    <input
                      type="checkbox"
                      required
                      className="accent-blue-500 scale-110"
                    />
                    Αποδέχομαι την{" "}
                    <a
                      href="/privacy-policy"
                      className="text-blue-400 hover:underline"
                    >
                      Πολιτική Απορρήτου
                    </a>
                  </label>
                  <button type="submit" className="btn">
                    Αποστολή
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-8 bg-white/5 text-center mx-auto">
        <div className="max-w-6xl mx-auto flex flex-col items-center md:items-start gap-6 px-4">
          {/* Logo always on top */}
          <div className="w-full mx-auto max-w-[200px] md:max-w-[250px]">
            <img
              src="/logo/3.png"
              alt="Miha Bodytec Logo"
              className="w-full h-auto object-contain mx-auto md:mx-0"
            />
          </div>

          {/* Text + Social */}
          <div className="content flex font-bold flex-col items-center gap-3 w-full">
            <p>
              &copy; 2025 FF Medical & Wellness. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-2">
              <a
                href="mailto:ffmedicwell@gmail.com"
                className="hover:underline"
              >
                ffmedicwell@gmail.com
              </a>
              <span className="hidden sm:inline">·</span>
              <a href="tel:210 8070010" className="hover:underline">
                210 8070010
              </a>
              <span className="hidden sm:inline">·</span>
              <a href="/privacy-policy" className="hover:underline">
                Πολιτική Απορρήτου
              </a>
            </div>

            {/* Social icons */}
            <div className="mt-2">
              <SocialSection/>
            </div>
          </div>
        </div>
      </footer>


      {/* Map Section */}
      <section className="w-full">
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3140.1926897680096!2d23.812853375855056!3d38.08917839398699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a19efc17b18f5f%3A0x8b7caf8209b192c1!2zzpfPgS4gzqDOv867z4XPhM61z4fOvc61zq_Ov8-FIDUsIM6dzq3OsSDOlc-Bz4XOuM-BzrHOr86xIDE0NiA3MQ!5e0!3m2!1sel!2sgr!4v1755200375385!5m2!1sel!2sgr"
            className="rounded-none md:rounded-lg w-full"
            height="400"
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
