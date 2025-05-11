import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-amber-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 py-16 pt-[100px]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-amber-900 mb-6">Terms and Conditions</h1>
          <p className="text-lg text-amber-700 mb-8">
            Welcome to our website. By accessing and using this website, you agree to comply with the following terms and conditions.
          </p>

          <h2 className="text-3xl font-semibold text-amber-800 mb-4">1. General Terms</h2>
          <p className="text-amber-600 mb-4">
            By using this website, you agree to the terms and conditions set forth here. We reserve the right to modify or amend these terms at any time without prior notice.
          </p>

          <h2 className="text-3xl font-semibold text-amber-800 mb-4">2. User Responsibilities</h2>
          <p className="text-amber-600 mb-4">
            You are responsible for maintaining the confidentiality of your account and password. You agree to notify us immediately of any unauthorized use of your account.
          </p>

          <h2 className="text-3xl font-semibold text-amber-800 mb-4">3. Limitation of Liability</h2>
          <p className="text-amber-600 mb-4">
            We are not liable for any damages or losses resulting from the use of this website. Your use of the site is at your own risk.
          </p>

          <h2 className="text-3xl font-semibold text-amber-800 mb-4">4. Intellectual Property</h2>
          <p className="text-amber-600 mb-4">
            All content on this website, including text, images, and designs, is the property of our organization and is protected by intellectual property laws.
          </p>

          <h2 className="text-3xl font-semibold text-amber-800 mb-4">5. Governing Law</h2>
          <p className="text-amber-600 mb-4">
            These terms and conditions are governed by the laws of India. Any disputes arising from the use of this website will be resolved in accordance with Indian law.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
