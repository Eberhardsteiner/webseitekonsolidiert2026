import { Linkedin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES, SECTIONS } from '../constants/paths';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              UVM <span className="font-normal">Consulting Group</span>
            </h3>
            <p className="text-base text-gray-400 mb-4 max-w-md">
              Wissenschaftlich fundiert. Praktisch erprobt. Wir befähigen Organisationen,
              zukunftsfähig zu werden.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/uvm-consulting"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:info@uvm-cg.de"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-500 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="tel:+498915900075"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-500 transition-colors"
                aria-label="Phone"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">4C-Modell</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to={`${ROUTES.HOME}${SECTIONS.MODELL}`} className="text-sm hover:text-primary-400 transition-colors">Culture</Link>
              </li>
              <li>
                <Link to={`${ROUTES.HOME}${SECTIONS.MODELL}`} className="text-sm hover:text-primary-400 transition-colors">Competences</Link>
              </li>
              <li>
                <Link to={`${ROUTES.HOME}${SECTIONS.MODELL}`} className="text-sm hover:text-primary-400 transition-colors">Code of Conduct</Link>
              </li>
              <li>
                <Link to={`${ROUTES.HOME}${SECTIONS.MODELL}`} className="text-sm hover:text-primary-400 transition-colors">Corporate Strategy</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Leistungen</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to={`${ROUTES.HOME}${SECTIONS.LEISTUNGEN}`} className="text-sm hover:text-primary-400 transition-colors">4C QuickScan</Link>
              </li>
              <li>
                <Link to={`${ROUTES.HOME}${SECTIONS.LEISTUNGEN}`} className="text-sm hover:text-primary-400 transition-colors">Kompetenzmanagement</Link>
              </li>
              <li>
                <Link to={`${ROUTES.HOME}${SECTIONS.LEISTUNGEN}`} className="text-sm hover:text-primary-400 transition-colors">Kulturentwicklung</Link>
              </li>
              <li>
                <Link to={`${ROUTES.HOME}${SECTIONS.LEISTUNGEN}`} className="text-sm hover:text-primary-400 transition-colors">KI & Führung</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            2026 UVM Consulting Group. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to={ROUTES.IMPRESSUM} className="text-sm hover:text-primary-400 transition-colors">Impressum</Link>
            <Link to={ROUTES.DATENSCHUTZ} className="text-sm hover:text-primary-400 transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
