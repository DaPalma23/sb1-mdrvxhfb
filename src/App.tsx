import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Truck,
  Wrench,
  Home,
  Menu,
  X,
  Trash2,
  Clock,
  Calendar,
  Shield,
} from 'lucide-react';
import { useState } from 'react';
import ServiceCard from './components/ServiceCard';
import ContactForm from './components/ContactForm';
import Testimonial from './components/Testimonial';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Wrench className="h-8 w-8 text-blue-700 mr-2" />
            <h1 className="text-2xl font-bold text-gray-800">
              SchnellServices
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-700 font-medium"
            >
              Startseite
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-700 font-medium"
            >
              Dienstleistungen
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-700 font-medium"
            >
              Über uns
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-blue-700 font-medium"
            >
              Kundenstimmen
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-700 font-medium"
            >
              Kontakt
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4 shadow-lg">
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-700 font-medium"
                onClick={toggleMenu}
              >
                Startseite
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-700 font-medium"
                onClick={toggleMenu}
              >
                Dienstleistungen
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-700 font-medium"
                onClick={toggleMenu}
              >
                Über uns
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-blue-700 font-medium"
                onClick={toggleMenu}
              >
                Kundenstimmen
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-700 font-medium"
                onClick={toggleMenu}
              >
                Kontakt
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white"
      >
        <div
          className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
          }}
        ></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Professionelle Dienstleistungen für Ihr Zuhause
            </h2>
            <p className="text-xl mb-8">
              Montagen, Reparaturen, Transporte und Entsorgungen in Lyss und
              Umgebung
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Kontakt aufnehmen
              </a>
              <a
                href="#services"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Unsere Dienstleistungen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Unsere Dienstleistungen
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Wir bieten eine breite Palette von professionellen
              Dienstleistungen an, um Ihren Bedürfnissen gerecht zu werden.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Wrench className="h-12 w-12 text-blue-700" />}
              title="Reparaturen"
              description="Schnelle und professionelle Reparaturen für alle Bereiche Ihres Zuhauses, von kleinen Fixes bis zu größeren Projekten."
            />
            <ServiceCard
              icon={<Home className="h-12 w-12 text-blue-700" />}
              title="Montagen"
              description="Fachgerechte Montage von Möbeln, Geräten, Lampen und anderen Einrichtungsgegenständen."
            />
            <ServiceCard
              icon={<Truck className="h-12 w-12 text-blue-700" />}
              title="Transporte"
              description="Zuverlässiger Transport von Möbeln und anderen Gegenständen innerhalb von Lyss und Umgebung im Kanton Bern."
            />
            <ServiceCard
              icon={<Trash2 className="h-12 w-12 text-blue-700" />}
              title="Entsorgungen"
              description="Umweltgerechte Entsorgung von Altmöbeln, Elektrogeräten und anderen Materialien gemäß Schweizer Vorschriften."
            />
          </div>

          <div className="mt-16 bg-gray-50 p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Warum SchnellServices wählen?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Clock className="h-12 w-12 text-blue-700 mb-4" />
                <h4 className="text-xl font-semibold mb-2">
                  Schnelle Reaktionszeit
                </h4>
                <p className="text-gray-600">
                  Wir reagieren prompt auf Ihre Anfragen und erledigen Aufträge
                  termingerecht.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield className="h-12 w-12 text-blue-700 mb-4" />
                <h4 className="text-xl font-semibold mb-2">
                  Qualitätsgarantie
                </h4>
                <p className="text-gray-600">
                  Wir stehen für hochwertige Arbeit und Kundenzufriedenheit.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Calendar className="h-12 w-12 text-blue-700 mb-4" />
                <h4 className="text-xl font-semibold mb-2">Flexible Termine</h4>
                <p className="text-gray-600">
                  Wir passen uns Ihrem Zeitplan an und bieten flexible
                  Terminvereinbarungen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Handwerker bei der Arbeit"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Über SchnellServices
              </h2>
              <p className="text-gray-600 mb-6">
                SchnellServices ist Ihr zuverlässiger Partner für alle
                Reparatur-, Montage-, Transport- und Entsorgungsarbeiten in Lyss
                und Umgebung im Kanton Bern. Wir sind stolz darauf, schnelle und
                qualitativ hochwertige Dienstleistungen anzubieten, die Ihren
                Alltag erleichtern.
              </p>
              <p className="text-gray-600 mb-6">
                Unser erfahrenes Team kümmert sich um alle Ihre Bedürfnisse, von
                kleinen Reparaturen bis hin zu komplexen Montagearbeiten. Wir
                legen großen Wert auf Pünktlichkeit, Sauberkeit und
                Kundenzufriedenheit.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-700 p-4 mb-6">
                <p className="text-blue-800 font-medium">
                  "Unsere Mission ist es, Ihnen Zeit und Mühe zu sparen, indem
                  wir zuverlässige und professionelle Dienstleistungen
                  anbieten."
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-center shadow-md hover:shadow-lg"
                >
                  Kontaktieren Sie uns
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Kundenstimmen
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Was unsere Kunden über unsere Dienstleistungen sagen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Testimonial
              name="Thomas Müller"
              location="Lyss"
              quote="Schnelle und professionelle Arbeit. Meine Möbel wurden perfekt montiert und der Service war ausgezeichnet."
            />
            <Testimonial
              name="Laura Schmidt"
              location="Bern"
              quote="Ich war beeindruckt von der Effizienz und Sorgfalt. Die Reparatur wurde schneller als erwartet durchgeführt."
            />
            <Testimonial
              name="Michael Weber"
              location="Aarberg"
              quote="Zuverlässiger Transportservice. Meine Möbel wurden sicher und pünktlich geliefert. Sehr empfehlenswert!"
            />
          </div>

          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
            >
              Werden Sie unser nächster zufriedener Kunde
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Kontaktieren Sie uns
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Haben Sie Fragen oder benötigen Sie ein Angebot? Kontaktieren Sie
              uns noch heute!
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <ContactForm />
            </div>
            <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Kontaktinformationen
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-700 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-700">Adresse</h4>
                    <p className="text-gray-600">
                      Lyss, Schachenwe3, 3250, Schweiz
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-700 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-700">Telefon</h4>
                    <p className="text-gray-600">+41 76 700 73 49</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-700 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-700">E-Mail</h4>
                    <p className="text-gray-600">ricardo.dapalma23</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-700 mb-2">
                    Öffnungszeiten
                  </h4>
                  <p className="text-gray-600">
                    Montag - Freitag: 8:00 - 18:00 Uhr
                  </p>
                  <p className="text-gray-600">Samstag: 9:00 - 14:00 Uhr</p>
                  <p className="text-gray-600">Sonntag: Geschlossen</p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-bold text-gray-700 mb-2">Servicegebiet</h4>
                <p className="text-gray-600">
                  Wir bieten unsere Dienstleistungen in Lyss und Umgebung im
                  Kanton Bern an, einschließlich Aarberg, Biel, Nidau und
                  weiteren umliegenden Gemeinden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Bereit, Ihr nächstes Projekt zu starten?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Kontaktieren Sie uns noch heute für ein unverbindliches Angebot. Wir
            freuen uns darauf, Ihnen zu helfen!
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Jetzt anfragen
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Wrench className="h-8 w-8 text-blue-400 mr-2" />
                <h2 className="text-xl font-bold">SchnellServices</h2>
              </div>
              <p className="text-gray-400 mb-4">
                Ihr zuverlässiger Partner für Reparaturen, Montagen, Transporte
                und Entsorgungen in Lyss und Umgebung.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Dienstleistungen</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    Reparaturen
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    Montagen
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    Transporte
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    Entsorgungen
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Kontakt</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-400 mr-2" />
                  <span className="text-gray-400">+41 76 700 73 49</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-400 mr-2" />
                  <span className="text-gray-400">info@schnellservices.ch</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-400 mr-2" />
                  <span className="text-gray-400">
                    Lyss, Schachenwe3, 3250, Schweiz
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} SchnellServices. Alle Rechte
              vorbehalten.
            </p>
            <div className="mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300 mx-2"
              >
                Datenschutz
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300 mx-2"
              >
                Impressum
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
