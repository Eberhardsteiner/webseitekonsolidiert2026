import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  imageSrc?: string;
  imageAlt?: string;
}

export default function AccordionItem({ title, subtitle, children, defaultOpen = false, imageSrc, imageAlt }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 flex items-center justify-between text-left transition-colors hover:bg-gray-50"
      >
        <div className="flex-1 flex items-center gap-5">
          {imageSrc && (
            <img src={imageSrc} alt={imageAlt ?? title} className="w-32 rounded-lg object-cover flex-shrink-0" />
          )}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{title}</h3>
            <p className="text-base text-primary-600 font-medium">{subtitle}</p>
          </div>
        </div>
        <ChevronDown
          size={28}
          className={`text-primary-600 transition-transform duration-300 flex-shrink-0 ml-4 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-8 pb-8 pt-2">
          {children}
        </div>
      </div>
    </div>
  );
}
