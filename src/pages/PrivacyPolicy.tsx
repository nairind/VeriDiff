import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicyPage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <button 
          onClick={() => navigate('/')}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Home
        </button>
        
        <div className="prose prose-lg max-w-none">
          <h1>Privacy Policy</h1>

          <h2>1. Introduction</h2>
          <p>At VeriDiff ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, products, or services (collectively, the "Services").</p>

          <h2>2. Information We Collect</h2>
          <h3>2.1 Personal Data</h3>
          <p>We may collect personal data that you provide directly to us, including:</p>
          <ul>
            <li>Contact information (name, email address, phone number, company name)</li>
            <li>Account credentials (username, password)</li>
            <li>Payment information (processed through secure third-party payment processors)</li>
            <li>Communication data (inquiries, feedback, support requests)</li>
          </ul>

          <h3>2.2 Usage Data</h3>
          <p>We automatically collect certain information when you use our Services, including:</p>
          <ul>
            <li>IP address and device information</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited and features used</li>
            <li>Time and date of your visits</li>
            <li>Referring website addresses</li>
          </ul>

          <h3>2.3 File Data</h3>
          <p>When you use our comparison tools, we process the content of the files you upload or connect to (Excel files, PDF documents, Google Sheets). However:</p>
          <ul>
            <li>All file processing happens locally in your browser</li>
            <li>We do not store the content of your files on our servers</li>
            <li>We do not access or analyze the content of your files for any purpose other than providing the comparison functionality</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use your information for the following purposes:</p>
          <ul>
            <li>To provide and maintain our Services</li>
            <li>To process and complete transactions</li>
            <li>To send administrative information, such as updates, security alerts, and support messages</li>
            <li>To respond to your comments, questions, and requests</li>
            <li>To improve our Services and develop new features</li>
            <li>To monitor usage patterns and analyze trends</li>
            <li>To protect the security and integrity of our Services</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage. However, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

          <h2>5. Data Retention</h2>
          <p>We retain your personal data only for as long as necessary to fulfill the purposes for which we collected it, including for the purposes of satisfying any legal, accounting, or reporting requirements.</p>

          <h2>6. Your Data Protection Rights</h2>
          <p>Depending on your location, you may have the following rights regarding your personal data:</p>
          <ul>
            <li>Right to access</li>
            <li>Right to rectification</li>
            <li>Right to erasure</li>
            <li>Right to restrict processing</li>
            <li>Right to data portability</li>
            <li>Right to object</li>
            <li>Rights related to automated decision-making and profiling</li>
          </ul>
          <p>To exercise these rights, please contact us at sales@veridiff.com.</p>

          <h2>7. Cookies and Similar Technologies</h2>
          <p>We use cookies and similar tracking technologies to track activity on our Services and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>

          <h2>8. Third-Party Services</h2>
          <p>Our Services may contain links to third-party websites or services that are not owned or controlled by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.</p>

          <h2>9. Children's Privacy</h2>
          <p>Our Services are not intended for children under the age of 16. We do not knowingly collect personal data from children under 16. If we become aware that we have collected personal data from a child under 16 without verification of parental consent, we will take steps to remove that information from our servers.</p>

          <h2>10. International Data Transfers</h2>
          <p>Your information may be transferred to and processed in countries other than the country in which you reside. These countries may have data protection laws that are different from the laws of your country. We ensure that appropriate safeguards are in place to protect your personal data.</p>

          <h2>11. Changes to This Privacy Policy</h2>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>

          <h2>12. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <ul>
            <li>Email: sales@veridiff.com</li>
            <li>Address: VeriDiff Headquarters, London, UK</li>
          </ul>

          <p className="text-sm text-gray-500">Last updated: May 18, 2025</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
