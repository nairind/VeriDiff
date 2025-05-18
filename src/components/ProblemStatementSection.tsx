import React from 'react';
import { DocumentDuplicateIcon, ArrowsRightLeftIcon, AdjustmentsHorizontalIcon, DocumentCheckIcon } from '@heroicons/react/24/outline';

const ProblemStatementSection: React.FC = () => {
  const examples = [
    {
      company: "JP Morgan",
      error: "A formula error in Excel led to incorrect risk calculations",
      impact: "£6.2 billion in trading losses",
      year: "2012"
    },
    {
      company: "Fidelity Investment",
      error: "A missing minus sign turned a loss into a gain",
      impact: "£2.6 billion accounting error",
      year: "1994"
    },
    {
      company: "Public Health England",
      error: "Using outdated Excel format with row limitations",
      impact: "16,000 COVID cases went unreported",
      year: "2020"
    },
    {
      company: "TransAlta",
      error: "Incorrect cut-and-paste work in a spreadsheet",
      impact: "£24 million in unnecessary costs",
      year: "2003"
    }
  ];

  const [currentExample, setCurrentExample] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExample((prev) => (prev + 1) % examples.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="problem" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Spreadsheet Errors Cost Businesses Billions Every Year
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              Research shows that over 90% of spreadsheets contain errors, and 50% of spreadsheet models 
              used in large businesses have material defects. These aren't just minor mistakes—they can lead 
              to catastrophic financial losses and damaged reputations.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-600">
              <p className="italic text-gray-600 mb-4">"{examples[currentExample].error}"</p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-gray-800">{examples[currentExample].company}</p>
                  <p className="text-red-600 font-semibold">{examples[currentExample].impact}</p>
                </div>
                <p className="text-gray-500">{examples[currentExample].year}</p>
              </div>
            </div>
            
            <p className="text-lg text-gray-700">
              Without proper verification tools, these errors can go undetected until it's too late.
              VeriDiff helps you catch discrepancies before they become costly mistakes.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
              <DocumentDuplicateIcon className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="font-bold text-xl mb-2">90%</h3>
              <p className="text-gray-600">of spreadsheets contain errors</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-500">
              <ArrowsRightLeftIcon className="h-12 w-12 text-red-500 mb-4" />
              <h3 className="font-bold text-xl mb-2">£76M</h3>
              <p className="text-gray-600">average cost of significant spreadsheet errors</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-500">
              <AdjustmentsHorizontalIcon className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="font-bold text-xl mb-2">50%</h3>
              <p className="text-gray-600">of models have material defects</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500">
              <DocumentCheckIcon className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="font-bold text-xl mb-2">5.2%</h3>
              <p className="text-gray-600">average cell error rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatementSection;
