// import React from "react";

// export default function Privacy() {
//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
//       <p>This is a demo placeholder for Privacy Policy.</p>
//     </div>
//   );
// }
import React from "react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800 py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-3xl p-10">
        {/* Header */}
        <h1 className="text-4xl font-bold text-blue-800 text-center mb-6">
          Privacy Policy
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Last updated: November 2025
        </p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            1. Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At <b>Health Record Tracker</b>, your privacy is our top priority. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your personal
            information when you use our platform. By accessing our services, you agree
            to the terms described here.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            2. Information We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            We may collect the following types of information:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <b>Personal Information:</b> Such as your name, email address, contact
              details, and account credentials.
            </li>
            <li>
              <b>Health Information:</b> Medical history, prescriptions, and other
              health-related data that you provide or upload.
            </li>
            <li>
              <b>Usage Data:</b> Information on how you interact with our website or
              mobile app, including IP address and device type.
            </li>
            <li>
              <b>Cookies and Tracking:</b> We use cookies to improve user experience and
              analyze platform usage.
            </li>
          </ul>
        </section>

        {/* How We Use Information */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            3. How We Use Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
            <li>Provide, manage, and improve healthcare record tracking services.</li>
            <li>
              Ensure the security and integrity of medical data stored on our system.
            </li>
            <li>
              Send important updates, notifications, or technical information related
              to your account.
            </li>
            <li>
              Comply with legal obligations and healthcare data protection standards.
            </li>
          </ul>
        </section>

        {/* Data Protection */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            4. Data Protection and Security
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We implement strong administrative, technical, and physical security
            measures to protect your personal and health data from unauthorized access,
            alteration, or disclosure. All data transmissions are encrypted using
            industry-standard protocols, and we comply with international healthcare
            data regulations.
          </p>
        </section>

        {/* Sharing Information */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            5. Sharing of Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We do not sell or rent your information to third parties. We may share
            limited information only when:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
            <li>
              It’s required by law, court order, or legal process.
            </li>
            <li>
              It’s necessary to protect our users, partners, or the public.
            </li>
            <li>
              You have given explicit consent for information sharing with healthcare
              professionals or institutions.
            </li>
          </ul>
        </section>

        {/* Your Rights */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            6. Your Rights and Choices
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Access, update, or delete your personal information.</li>
            <li>
              Request a copy of your medical data in a readable format.
            </li>
            <li>
              Withdraw consent for data processing at any time (may limit service
              functionality).
            </li>
          </ul>
        </section>

        {/* Third-Party Services */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            7. Third-Party Services
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our platform may contain links or integrations with third-party healthcare
            systems or APIs. We are not responsible for the privacy practices of these
            services. Please review their policies before sharing information.
          </p>
        </section>

        {/* Changes to Policy */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            8. Changes to This Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy from time to time. All updates will be
            posted on this page with the revised effective date. Continued use of our
            services indicates acceptance of the revised policy.
          </p>
        </section>

        {/* Contact Section */}
        <section className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            9. Contact Us
          </h2>
          <p className="text-gray-700">
            For any questions or concerns about this Privacy Policy, please contact us
            at:
          </p>
          <p className="mt-4 text-blue-700 font-medium">
            privacy@healthrecordtracker.com
          </p>
        </section>
      </div>

      {/* Footer */}
      <div className="text-center mt-16">
        <p className="text-gray-600">
          © {new Date().getFullYear()} Health Record Tracker. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
