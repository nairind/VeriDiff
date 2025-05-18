import React from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

const PricingSection: React.FC = () => {
  const tiers = [
    {
      name: "Free",
      price: "£0",
      period: "forever",
      description: "Basic Excel comparison for occasional users",
      features: [
        "Excel file comparison",
        "5MB file size limit",
        "Basic column mapping",
        "Standard difference highlighting",
        "Limited to 2 comparisons per day"
      ],
      cta: "Get Started",
      highlight: false
    },
    {
      name: "Professional",
      price: "£19",
      period: "per month",
      description: "Full functionality for regular users",
      features: [
        "Excel, PDF & Google Sheets comparison",
        "50MB file size limit",
        "Advanced column mapping",
        "Custom tolerance settings",
        "Unlimited comparisons",
        "Comparison history",
        "Export to PDF/Excel"
      ],
      cta: "Upgrade to Pro",
      highlight: true
    },
    {
      name: "Enterprise",
      price: "£99",
      period: "per month",
      description: "Advanced features for teams and businesses",
      features: [
        "All Professional features",
        "Unlimited file size",
        "Batch comparison",
        "API access",
        "Team collaboration",
        "Custom branding",
        "Priority support",
        "Dedicated account manager"
      ],
      cta: "Contact Sales",
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Choose the Right Plan for Your Needs
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Start with our free plan or upgrade for more powerful features
        </p>

        <div className="flex flex-col lg:flex-row gap-8 justify-center">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`flex flex-col bg-white rounded-lg shadow-lg overflow-hidden border ${
                tier.highlight 
                  ? 'border-blue-500 transform lg:-translate-y-4' 
                  : 'border-gray-200'
              } w-full lg:w-1/3 max-w-sm mx-auto`}
            >
              {tier.highlight && (
                <div className="bg-blue-500 text-white text-center py-2 font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1">{tier.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-gray-500 ml-1">/{tier.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{tier.description}</p>
              </div>
              
              <div className="flex-grow p-6 bg-gray-50">
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-6">
                <button 
                  className={`w-full py-3 px-4 rounded-lg font-bold transition-colors duration-200 ${
                    tier.highlight
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
