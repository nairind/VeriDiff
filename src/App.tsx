import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import PricingSection from './components/PricingSection';
import ProblemStatementSection from './components/ProblemStatementSection';
import RequestDemoSection from './components/RequestDemoSection';
import SignUpSection from './components/SignUpSection';
import FooterSection from './components/FooterSection';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import DemoFileComparisonSection from './components/DemoFileComparisonSection';
import SimpleFileComparisonSection from './components/SimpleFileComparisonSection';

function App() {
  // Authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Check for existing login
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'Admin' && password === 'Admin') {
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
      setShowLoginModal(false);
      setLoginError('');
      // Reset form fields
      setUsername('');
      setPassword('');
    } else {
      setLoginError('Invalid credentials. Try Admin/Admin');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  // Login Modal Component
  const LoginModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Login to Access Full Features</h2>
        {loginError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {loginError}
          </div>
        )}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="off"
              autoFocus
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <button
              className="text-gray-500 hover:text-gray-700"
              type="button"
              onClick={() => setShowLoginModal(false)}
            >
              Cancel
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Hint: Use Admin/Admin for testing
          </p>
        </form>
      </div>
    </div>
  );

  return (
    <Router>
      {showLoginModal && <LoginModal />}
      <div className="relative">
        {/* Login/Logout Button */}
        <div className="absolute top-4 right-4 z-10">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => setShowLoginModal(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button>
          )}
        </div>

        <Routes>
          <Route path="/" element={
            <div className="App">
              <HeroSection />
              <ProblemStatementSection />
              <FeaturesSection />
              {isLoggedIn ? <SimpleFileComparisonSection /> : <DemoFileComparisonSection />}
              <HowItWorksSection />
              <PricingSection />
              <RequestDemoSection />
              <SignUpSection />
              <FooterSection />
            </div>
          } />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/cookies" element={<CookiePolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
