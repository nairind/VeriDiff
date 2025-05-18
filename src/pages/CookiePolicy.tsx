import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">Cookie Policy</h1>
      
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-800">1. Introduction</h2>
        <p>
          This Cookie Policy explains how VeriDiff ("we", "us", and "our") uses cookies and similar technologies 
          to recognize you when you visit our website at veridiff.com ("Website"). It explains what these technologies 
          are and why we use them, as well as your rights to control our use of them.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-800">2. What are cookies?</h2>
        <p>
          Cookies are small data files that are placed on your computer or mobile device when you visit a website. 
          Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, 
          as well as to provide reporting information.
        </p>
        <p>
          Cookies set by the website owner (in this case, VeriDiff) are called "first-party cookies". Cookies set by 
          parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party 
          features or functionality to be provided on or through the website (e.g., advertising, interactive content, 
          and analytics). The parties that set these third-party cookies can recognize your computer both when it visits 
          the website in question and also when it visits certain other websites.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-800">3. Why do we use cookies?</h2>
        <p>
          We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons 
          in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other 
          cookies also enable us to track and target the interests of our users to enhance the experience on our Website. 
          Third parties serve cookies through our Website for analytics and other purposes.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-800">4. The specific types of cookies served through our Website</h2>
        <p>The specific types of first and third-party cookies served through our Website include:</p>
        <ul className="list-disc pl-6 mt-4 mb-4">
          <li><strong>Essential website cookies:</strong> These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas.</li>
          <li><strong>Performance and functionality cookies:</strong> These cookies are used to enhance the performance and functionality of our Website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.</li>
          <li><strong>Analytics and customization cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are, or to help us customize our Website for you.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-800">5. How can you control cookies?</h2>
        <p>
          You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting 
          your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories 
          of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide 
          you with services.
        </p>
        <p>
          You can also control cookies through your browser settings. Most web browsers allow some control of most cookies 
          through the browser settings. To find out more about cookies, including how to see what cookies have been set, 
          visit <a href="https://www.allaboutcookies.org" className="text-blue-600 hover:underline">www.allaboutcookies.org</a>.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-800">6. Changes to this Cookie Policy</h2>
        <p>
          We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use 
          or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to 
          stay informed about our use of cookies and related technologies.
        </p>
        <p>
          The date at the bottom of this Cookie Policy indicates when it was last updated.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-800">7. Contact us</h2>
        <p>
          If you have any questions about our use of cookies or other technologies, please email us at 
          <a href="mailto:sales@veridiff.com" className="text-blue-600 hover:underline ml-1">sales@veridiff.com</a>.
        </p>
        
        <p className="mt-8 text-sm text-gray-600">Last updated: May 18, 2025</p>
      </div>
    </div>
  );
};

export default CookiePolicy;
