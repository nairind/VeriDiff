import React from 'react';
import { ArrowPathIcon, DocumentTextIcon, DocumentChartBarIcon, ArrowsPointingOutIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: <DocumentTextIcon className="h-12 w-12 text-blue-600" />,
      title: "Upload or Connect",
      description: "Upload Excel files, connect to Google Sheets, or import PDF documents"
    },
    {
      icon: <ArrowsPointingOutIcon className="h-12 w-12 text-blue-600" />,
      title: "Map Columns",
      description: "Match corresponding columns or let our intelligent system suggest mappings"
    },
    {
      icon: <ArrowPathIcon className="h-12 w-12 text-blue-600" />,
      title: "Set Preferences",
      description: "Define tolerance levels for numerical differences and format handling"
    },
    {
      icon: <DocumentChartBarIcon className="h-12 w-12 text-blue-600" />,
      title: "Review Results",
      description: "Get instant, highlighted results showing every difference between your files"
    },
    {
      icon: <ArrowDownTrayIcon className="h-12 w-12 text-blue-600" />,
      title: "Download Report",
      description: "Save and share your comparison results in Excel, PDF or CSV format"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Simple, Fast, and Accurate File Comparison
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16">
          Five easy steps to identify and document every difference that matters
        </p>

        <div className="flex flex-wrap justify-center">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center mb-12 w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4">
              <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center shadow-md mb-6 relative">
                {step.icon}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute transform translate-x-full">
                  <svg className="w-12 h-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border border-gray-200 max-w-4xl w-full overflow-x-auto">
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-sm text-gray-500">VeriDiff Comparison Results</div>
            </div>
            <div className="bg-gray-100 p-4 rounded mb-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-gray-700 font-medium">Column</div>
                <div className="text-gray-700 font-medium">File 1</div>
                <div className="text-gray-700 font-medium">File 2</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="grid grid-cols-3 gap-4 p-2">
                <div className="text-gray-700">Revenue Q2</div>
                <div className="text-gray-700">£1,245,000</div>
                <div className="text-green-600 font-medium">£1,425,000</div>
              </div>
              <div className="grid grid-cols-3 gap-4 p-2 bg-yellow-50">
                <div className="text-gray-700">Expenses Q2</div>
                <div className="text-gray-700">£845,230</div>
                <div className="text-yellow-600 font-medium">£843,230</div>
              </div>
              <div className="grid grid-cols-3 gap-4 p-2">
                <div className="text-gray-700">Profit Q2</div>
                <div className="text-gray-700">£399,770</div>
                <div className="text-red-600 font-medium">£581,770</div>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
                <ArrowDownTrayIcon className="h-4 w-4 mr-2" />
                Download Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
