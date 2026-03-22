import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface CompetenceAccordionProps {
  title: string;
  children: React.ReactNode;
  bgClass?: string;
  defaultOpen?: boolean;
}

export default function CompetenceAccordion({ title, children, bgClass = "bg-gradient-to-r from-primary-50 to-white", defaultOpen = false }: CompetenceAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`${bgClass} rounded-lg overflow-hidden transition-all duration-200 hover:shadow-sm`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left transition-opacity hover:opacity-80"
      >
        <h5 className="text-xl font-bold text-gray-900">{title}</h5>
        <ChevronDown
          size={20}
          className={`text-primary-600 transition-transform duration-200 flex-shrink-0 ml-4 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        className={`transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-6 pb-4">
          {children}
        </div>
      </div>
    </div>
  );
}
