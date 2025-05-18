import React from 'react';
import { Link } from 'react-scroll';
import DemoVideoSection from './DemoVideoSection';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="bg-[#051c59] text-white py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="flex flex-col w-full md:w-1/2 justify-center items-start pt-12 pb-24 px-6">
          <h1 className="font-bold text-5xl md:text-6xl leading-tight mb-6">
            One Wrong Cell Can Cost Thousands. VeriDiff Catches It First.
          </h1>
          <p className="text-xl mb-8">
            Compare Excel, Google Sheets & PDFs — Instantly. No macros. No scripts. No noise. 
            Just the differences that matter, highlighted and explained.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="pricing"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="bg-[#f43735] hover:bg-[#e02f2d] text-white font-bold py-4 px-8 rounded-md transition duration-300 ease-in-out"
            >
              Start Free Trial
            </Link>
            <DemoVideoSection />
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="flex items-center">
              <div className="mr-3 bg-white rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#051c59]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm">Trusted by finance and ops teams across 5+ industries</p>
            </div>
            <div className="flex items-center">
              <div className="mr-3 bg-white rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#051c59]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm">Your files never leave your browser</p>
            </div>
            <div className="flex items-center">
              <div className="mr-3 bg-white rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#051c59]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm">Get results in under 10 seconds</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 py-6 flex justify-center">
          <div className="bg-white rounded-lg shadow-xl p-4 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="bg-[#3db4a1] text-white text-sm px-3 py-1 rounded-full">3 differences</div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between items-center border-b pb-2">
                <span className="text-gray-800 font-medium">Q3 Report</span>
                <span className="text-gray-800 font-medium">File 1</span>
                <span className="text-gray-800 font-medium">Difference</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-800">Quarterly Figures 1</span>
                <span className="text-gray-800">75.950</span>
                <span className="text-gray-800">75,950</span>
              </div>
              <div className="flex justify-between items-center bg-red-50 p-2 rounded">
                <span className="text-gray-800">Quarterly Figures 2</span>
                <span className="text-gray-800">123.712</span>
                <span className="text-red-600 font-medium">-25.000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-800">Quarterly Figures 3</span>
                <span className="text-gray-800">218,567</span>
                <span className="text-gray-800">218,557</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-800">Quarterly Figures 4</span>
                <span className="text-gray-800">154,032</span>
                <span className="text-gray-800">154,032</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
