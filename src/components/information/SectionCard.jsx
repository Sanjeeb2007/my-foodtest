import React from "react";
import { FaChevronDown } from "react-icons/fa";

export default function SectionCard({ title, icon, children, sectionKey, activeSection, setActiveSection }) {
  const isActive = activeSection === sectionKey;
  
  return (
    <div className={`bg-white rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl ${
      isActive ? 'transform scale-105 ring-4 ring-orange-200' : 'hover:transform hover:scale-102'
    }`}>
      <button
        onClick={() => setActiveSection(activeSection === sectionKey ? null : sectionKey)}
        className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 rounded-2xl transition-colors duration-200"
      >
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200 ${
            isActive ? 'bg-orange-500 text-white' : 'bg-orange-100 text-orange-600'
          }`}>
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-500">Click to {isActive ? 'collapse' : 'expand'}</p>
          </div>
        </div>
        <div className={`transform transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}>
          <FaChevronDown className="text-gray-400" />
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isActive ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-6 pb-6 pt-4 border-t border-gray-100">
          {children}
        </div>
      </div>
    </div>
  );
}