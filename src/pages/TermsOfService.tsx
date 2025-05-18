import React from 'react';
import { useNavigate } from 'react-router-dom';

const TermsOfServicePage: React.FC = () => {
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
          <h1>Terms of Service</h1>

          <h2>1. Introduction</h2>
          <p>Welcome to VeriDiff ("we," "our," or "us"). By accessing or using our website, products, or services (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). Please read these Terms carefully.</p>

          <h2>2. Acceptance of Terms</h2>
          <p>By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our Services.</p>

          <h2>3. Description of Services</h2>
          <p>VeriDiff provides Excel and PDF comparison tools designed to help businesses identify differences between documents and spreadsheets. Our Services include but are not limited to:</p>
          <ul>
            <li>Excel file comparison</li>
            <li>PDF document comparison</li>
            <li>Google Sheets integration</li>
            <li>Column mapping functionality</li>
            <li>Tolerance settings for numerical comparisons</li>
          </ul>

          <h2>4. User Accounts</h2>
          <h3>4.1 Account Creation</h3>
          <p>To access certain features of our Services, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</p>

          <h3>4.2 Account Security</h3>
          <p>You are responsible for safeguarding your password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>

          <h2>5. Subscription Plans and Payment</h2>
          <h3>5.1 Subscription Tiers</h3>
          <p>We offer various subscription tiers, including Free, Professional, and Enterprise plans, each with different features and limitations as described on our pricing page.</p>

          <h3>5.2 Payment Terms</h3>
          <p>For paid subscription plans, you agree to pay all fees in accordance with the payment terms in effect when you subscribe. All payment obligations are non-cancelable, and fees paid are non-refundable except as expressly provided in these Terms.</p>

          <h3>5.3 Subscription Changes</h3>
          <p>You may upgrade or downgrade your subscription plan at any time. Changes will take effect at the beginning of the next billing cycle.</p>

          <h2>6. Data Privacy and Security</h2>
          <h3>6.1 Data Processing</h3>
          <p>We process your data in accordance with our Privacy Policy. By using our Services, you consent to such processing and you warrant that all data provided by you is accurate.</p>

          <h3>6.2 Data Security</h3>
          <p>We implement reasonable security measures to protect your data. However, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

          <h2>7. Intellectual Property Rights</h2>
          <h3>7.1 Our Intellectual Property</h3>
          <p>All content, features, and functionality of our Services, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, are owned by us, our licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>

          <h3>7.2 Limited License</h3>
          <p>We grant you a limited, non-exclusive, non-transferable, revocable license to access and use our Services for your personal or internal business purposes.</p>

          <h2>8. User Conduct</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use our Services in any way that violates any applicable law or regulation</li>
            <li>Use our Services to transmit any material that is defamatory, offensive, or otherwise objectionable</li>
            <li>Attempt to gain unauthorized access to any portion of our Services or any systems or networks connected to our Services</li>
            <li>Use any robot, spider, or other automatic device to access our Services</li>
            <li>Introduce any viruses, trojan horses, worms, logic bombs, or other harmful material</li>
          </ul>

          <h2>9. Limitation of Liability</h2>
          <p>To the fullest extent permitted by applicable law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Services.</p>

          <h2>10. Disclaimer of Warranties</h2>
          <p>Our Services are provided on an "as is" and "as available" basis, without any warranties of any kind, either express or implied. We disclaim all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>

          <h2>11. Termination</h2>
          <p>We may terminate or suspend your access to our Services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.</p>

          <h2>12. Changes to Terms</h2>
          <p>We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.</p>

          <h2>13. Governing Law</h2>
          <p>These Terms shall be governed by and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.</p>

          <h2>14. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at sales@veridiff.com.</p>

          <p className="text-sm text-gray-500">Last updated: May 18, 2025</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
