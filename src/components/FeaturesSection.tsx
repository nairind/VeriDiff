import React from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: "document-magnifying-glass",
      title: "Multi-Format Comparison",
      description: "Compare Excel, Google Sheets, and PDF documents in one unified interface."
    },
    {
      icon: "columns",
      title: "Intelligent Column Mapping",
      description: "Automatically match columns even when they're in different orders or have different names."
    },
    {
      icon: "adjustments",
      title: "Custom Tolerance Settings",
      description: "Set specific thresholds for numerical differences based on your business needs."
    },
    {
      icon: "globe",
      title: "Format Handling",
      description: "Properly compare dates, currencies, and percentages across different regional formats."
    },
    {
      icon: "document-report",
      title: "Detailed Reports",
      description: "Generate comprehensive reports highlighting all differences with color-coding."
    },
    {
      icon: "shield-check",
      title: "Local Processing",
      description: "All comparisons happen on your device - your sensitive data never leaves your computer."
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Powerful Comparison Features
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          That Save Time and Prevent Costly Mistakes
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <CheckIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
