import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-amber-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 py-16 pt-[100px]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-amber-900 mb-6">Privacy Policy</h1>
          <p className="text-lg text-amber-700 mb-8">
            We value your privacy and are committed to protecting your personal data. Please read this privacy policy carefully to understand how we collect, use, and protect your information.
          </p>

          <h2 className="text-3xl font-semibold text-amber-800 mb-4">1. Information We Collect</h2>
          <p className="text-amber-600 mb-4">
            We collect personal information such as your name, email address, phone number, and payment details when you interact with our website.
          </p>

          <h2 className="text-3xl font-semibold text-amber-800 mb-4">2. How We Use Your Information</h2>
          <p className="text-amber-600 mb-4">
            We use your information to provide and improve our services, process transactions, and communicate with you regarding updates and promotions.
          </p>

          <h2 className="text-3xl font-semibold text-amber-800 mb-4">3. Data Protection</h2>
          <p className="text-amber-600 mb-4">
            We take the security of your personal data seriously. We implement industry-standard security measures to protect your information from unauthorized access or disclosure.
          </p>

          <h2 className="text-3xl font-semibold text-amber-800 mb-4">4. Sharing Your Information</h2>
          <p className="text-amber-600 mb-4">
            We do not share your personal information with third parties except for service providers necessary to fulfill our obligations to you or as required by law.
          </p>

          <h2 className="text-3xl font-semibold text-amber-800 mb-4">5. Your Rights</h2>
          <p className="text-amber-600 mb-4">
            You have the right to access, update, and delete your personal information. If you have any concerns, you can contact us to exercise these rights.
          </p>

          <h2 className="text-3xl font-semibold text-amber-800 mb-4">6. Changes to This Privacy Policy</h2>
          <p className="text-amber-600 mb-4">
            We may update this privacy policy from time to time. Any changes will be posted on this page with an updated effective date.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
