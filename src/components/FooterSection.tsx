import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">VeriDiff</h3>
            <p className="text-gray-400 mb-4">
              Compare Excel, Google Sheets, and PDF documents with precision and confidence.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white">How It Works</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="#sign-up" className="text-gray-400 hover:text-white">Sign Up</a></li>
              <li><a href="#request-demo" className="text-gray-400 hover:text-white">Request Demo</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Documentation</h3>
            <ul className="space-y-2">
              <li><RouterLink to="/docs/user_guide" className="text-gray-400 hover:text-white">User Guide</RouterLink></li>
              <li><RouterLink to="/docs/api_documentation" className="text-gray-400 hover:text-white">API Documentation</RouterLink></li>
              <li><RouterLink to="/docs/excel_comparison" className="text-gray-400 hover:text-white">Excel Comparison Guide</RouterLink></li>
              <li><RouterLink to="/docs/pdf_comparison" className="text-gray-400 hover:text-white">PDF Comparison Guide</RouterLink></li>
              <li><RouterLink to="/docs/faq" className="text-gray-400 hover:text-white">FAQ</RouterLink></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:sales@veridiff.com" className="text-gray-400 hover:text-white">sales@veridiff.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} VeriDiff. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center space-x-6 mt-4 md:mt-0">
              <RouterLink to="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</RouterLink>
              <RouterLink to="/terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</RouterLink>
              <RouterLink to="/cookies" className="text-gray-400 hover:text-white text-sm">Cookie Policy</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
