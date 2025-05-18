import React, { useState } from 'react';

const RequestDemoSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    employees: '',
    date: '',
    time: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the data to a server
    console.log('Demo request submitted:', formData);
    
    // Log that we would send this to sales@veridiff.com in a real implementation
    console.log('Sending demo request to: sales@veridiff.com');
    
    // Display the improved, branded confirmation message
    alert('Thank you for taking the first step in improving your data reconciliation. We will be in touch soon to schedule your personalized demo!');
    
    // Reset the form
    setFormData({ name: '', email: '', company: '', role: '', employees: '', date: '', time: '' });
  };

  return (
    <section id="request-demo" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          See VeriDiff in Action
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Schedule a personalized demo with our product specialists
        </p>

        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            </div>
            
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Full Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
                placeholder="John Smith"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
                placeholder="john@company.com"
                required
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                Company*
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
                placeholder="Acme Inc."
                required
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-gray-700 font-medium mb-2">
                Role/Position*
              </label>
              <input
                type="text"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
                placeholder="Financial Analyst"
                required
              />
            </div>

            <div>
              <label htmlFor="employees" className="block text-gray-700 font-medium mb-2">
                Number of Employees
              </label>
              <select
                id="employees"
                name="employees"
                value={formData.employees}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
              >
                <option value="">Please select...</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201-500">201-500</option>
                <option value="501+">501+</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-4 mt-4">Preferred Demo Time</h3>
            </div>

            <div>
              <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
                Preferred Date*
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
                required
              />
            </div>

            <div>
              <label htmlFor="time" className="block text-gray-700 font-medium mb-2">
                Preferred Time*
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
                required
              />
            </div>

            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
              >
                Schedule Demo
              </button>
              
              <div className="text-center mt-6">
                <p className="text-gray-600">
                  Not ready for a demo yet?{' '}
                  <a href="#sign-up" className="text-blue-600 font-medium hover:underline">
                    Start with a free trial
                  </a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RequestDemoSection;
