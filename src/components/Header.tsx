import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES, SECTIONS } from '../constants/paths';
import logoImage from '../assets/UVM_Institut_HighRes.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHomePage = location.pathname === ROUTES.HOME || location.pathname === '/';

  useEffect(() => {
    if (!isOpen) {
      setIsDropdownOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const navItems = [
    { label: '4C-Modell', href: '#ansatz' },
    { label: 'Prozess', href: '#prozess' },
    { label: 'Führungskräfte', href: ROUTES.FUEHRUNGSKRAEFTEQUALIFIZIERUNG },
    { label: 'Kontakt', href: '#kontakt' },
  ];

  const dropdownItems = [
    { label: 'UVM Consulting Group', href: `${ROUTES.UNTERNEHMEN}#uvm-consulting` },
    { label: 'Geschäftsführung', href: `${ROUTES.UNTERNEHMEN}#geschaeftsfuehrung` },
    { label: 'Werte und Beratungsansatz', href: `${ROUTES.UNTERNEHMEN}#werte` },
    { label: 'Netzwerk', href: `${ROUTES.UNTERNEHMEN}#netzwerk` },
    { label: 'Referenzen', href: `${ROUTES.UNTERNEHMEN}#referenzen` },
    { label: 'Publikationen', href: `${ROUTES.UNTERNEHMEN}#publikationen` },
  ];

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-500 focus:text-white focus:text-base focus:rounded-lg focus:shadow-lg"
      >
        Zum Hauptinhalt springen
      </a>
      <header className="fixed top-0 left-0 right-0 bg-white/92 backdrop-blur-md z-50 border-b border-slate-200/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 min-h-[64px] md:min-h-[80px]">
          <Link to="/" className="flex items-center">
            <img
              src={logoImage}
              alt="UVM Institut"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-1 text-base text-gray-700 hover:text-primary-500 transition-colors font-medium"
              >
                Unternehmen
                <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 pt-1 w-64">
                  <div className="bg-white rounded-lg shadow-xl border border-slate-200/60 py-2">
                    {dropdownItems.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setIsDropdownOpen(false)}
                        className="block px-4 py-3 text-sm text-gray-700 hover:text-primary-500 hover:bg-primary-50 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navItems.map((item) => {
              const isExternalLink = item.href.startsWith('#');
              const isRouteLink = !isExternalLink;

              if (isRouteLink) {
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="text-base text-gray-700 hover:text-primary-500 transition-colors font-medium whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <a
                  key={item.href}
                  href={isHomePage ? item.href : `${ROUTES.HOME}${item.href}`}
                  className="text-base text-gray-700 hover:text-primary-500 transition-colors font-medium whitespace-nowrap"
                >
                  {item.label}
                </a>
              );
            })}

            <a
              href={isHomePage ? '#kontakt' : `${ROUTES.HOME}#kontakt`}
              className="bg-primary-500 text-white px-5 py-2.5 rounded-lg text-base hover:bg-primary-600 transition-colors font-medium whitespace-nowrap"
            >
              Gespräch starten
            </a>
          </nav>

          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden py-4 border-t border-slate-200/60 bg-white/95">
            <div>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between py-3 text-base text-gray-700 hover:text-primary-500 transition-colors font-medium"
              >
                Unternehmen
                <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isDropdownOpen && (
                <div className="pl-4 space-y-2">
                  {dropdownItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block py-2 text-sm text-gray-600 hover:text-primary-500 transition-colors"
                      onClick={() => {
                        setIsOpen(false);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navItems.map((item) => {
              const isExternalLink = item.href.startsWith('#');
              const isRouteLink = !isExternalLink;

              if (isRouteLink) {
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block py-3 text-base text-gray-700 hover:text-primary-500 transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <a
                  key={item.href}
                  href={isHomePage ? item.href : `${ROUTES.HOME}${item.href}`}
                  className="block py-3 text-base text-gray-700 hover:text-primary-500 transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              );
            })}

            <a
              href={isHomePage ? '#kontakt' : `${ROUTES.HOME}#kontakt`}
              className="block mt-4 bg-primary-500 text-white px-5 py-2.5 rounded-lg text-base hover:bg-primary-600 transition-colors font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              Gespräch starten
            </a>
          </nav>
        )}
      </div>
    </header>
    </>
  );
}
