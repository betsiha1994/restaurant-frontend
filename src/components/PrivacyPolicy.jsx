// PrivacyPolicy.jsx
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                Welcome to RestaurantName ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our restaurant ordering system.
              </p>
              <p className="text-gray-600">
                By using our services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-medium text-gray-700 mb-3">Personal Information</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Name and contact details (email address, phone number)</li>
                <li>Delivery address and location data</li>
                <li>Payment information (credit card details, processed securely through our payment processors)</li>
                <li>Order history and preferences</li>
                <li>Account credentials (if you create an account with us)</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-700 mb-3">Automatically Collected Information</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Usage data and browsing behavior on our platform</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>To process and fulfill your food orders</li>
                <li>To communicate with you about your orders and account</li>
                <li>To provide customer support and respond to inquiries</li>
                <li>To personalize your experience and recommend menu items</li>
                <li>To process payments and prevent fraudulent transactions</li>
                <li>To send promotional offers and updates (with your consent)</li>
                <li>To improve our services and develop new features</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            {/* Data Sharing and Disclosure */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Sharing and Disclosure</h2>
              <p className="text-gray-600 mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  <strong>Service Providers:</strong> Payment processors, delivery partners, and technical support providers who assist in our operations
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or to protect our rights and safety
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets
                </li>
                <li>
                  <strong>With Your Consent:</strong> When you explicitly agree to share your information
                </li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>SSL encryption for data transmission</li>
                <li>Secure payment processing compliant with PCI DSS standards</li>
                <li>Regular security assessments and monitoring</li>
                <li>Limited access to personal information on a need-to-know basis</li>
              </ul>
            </section>

            {/* Your Rights */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Your Rights</h2>
              <p className="text-gray-600 mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Access and receive a copy of your personal data</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Delete your personal data</li>
                <li>Restrict or object to processing of your data</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="text-gray-600 mt-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            {/* Cookies */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 mb-4">
                We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-700 mb-2">Types of cookies we use:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li><strong>Essential:</strong> Required for basic site functionality</li>
                  <li><strong>Preferences:</strong> Remember your settings and choices</li>
                  <li><strong>Analytics:</strong> Help us understand how visitors interact with our site</li>
                  <li><strong>Marketing:</strong> Used to deliver relevant advertisements</li>
                </ul>
              </div>
            </section>

            {/* Data Retention */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Data Retention</h2>
              <p className="text-gray-600">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Order information is typically retained for 7 years for tax and accounting purposes.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Children's Privacy</h2>
              <p className="text-gray-600">
                Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
              </p>
            </section>

            {/* International Transfers */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. International Data Transfers</h2>
              <p className="text-gray-600">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable laws.
              </p>
            </section>

            {/* Changes to Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> privacy@restaurantname.com</p>
                <p className="text-gray-700"><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p className="text-gray-700"><strong>Address:</strong> 123 Restaurant Street, City, State 12345</p>
              </div>
            </section>

            {/* Consent */}
            <section className="border-t pt-6">
              <p className="text-gray-600 text-sm">
                By using our restaurant ordering system, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
              </p>
            </section>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 transition duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Previous Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;