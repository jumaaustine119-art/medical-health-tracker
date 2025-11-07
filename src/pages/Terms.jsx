// import React from "react";

// export default function Terms() {
//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
//       <p>This is a demo placeholder for Terms.</p>
//     </div>
//   );
// }


import React from "react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800 py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-3xl p-10">
        {/* Header */}
        <h1 className="text-4xl font-bold text-blue-800 text-center mb-6">
          Terms and Conditions
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
            Welcome to <b>Health Record Tracker</b>. By accessing or using our
            platform, you agree to be bound by these Terms and Conditions. Please
            read them carefully before using our website, application, or any
            associated services. If you do not agree, you may not use our services.
          </p>
        </section>

        {/* User Responsibilities */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            2. User Responsibilities
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              You agree to provide accurate, current, and complete information when
              creating an account or submitting medical data.
            </li>
            <li>
              You are responsible for maintaining the confidentiality of your login
              credentials and ensuring your account is secure.
            </li>
            <li>
              You agree not to use our platform for any unlawful or unauthorized
              purpose.
            </li>
            <li>
              You must immediately report any suspicious activity or unauthorized
              access to your account.
            </li>
          </ul>
        </section>

        {/* Data Privacy */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            3. Data Privacy and Security
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Protecting your personal health information is our top priority. We use
            advanced security protocols to safeguard your data in compliance with
            privacy regulations. Your information is stored securely and will not be
            shared without your explicit consent.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For more information on how we handle data, please review our{" "}
            <a
              href="/privacy"
              className="text-blue-600 font-medium hover:underline"
            >
              Privacy Policy
            </a>
            .
          </p>
        </section>

        {/* Service Usage */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            4. Acceptable Use of Services
          </h2>
          <p className="text-gray-700 leading-relaxed">
            You agree to use Health Record Tracker only for lawful healthcare
            management purposes. You may not attempt to reverse-engineer, copy,
            modify, or distribute any part of the application or its services.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            5. Limitation of Liability
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Health Record Tracker and its affiliates will not be held responsible
            for any indirect, incidental, or consequential damages resulting from the
            use or inability to use our services. We provide our platform “as is”
            without warranties of any kind.
          </p>
        </section>

        {/* Account Termination */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            6. Account Termination
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to suspend or terminate accounts that violate these
            Terms, engage in fraudulent activity, or pose a security threat to other
            users or our system.
          </p>
        </section>

        {/* Updates to Terms */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            7. Changes to These Terms
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update these Terms periodically to reflect changes in our
            practices or legal requirements. Continued use of our services after
            updates constitutes your acceptance of the new Terms.
          </p>
        </section>

        {/* Contact Section */}
        <section className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            8. Contact Us
          </h2>
          <p className="text-gray-700">
            If you have any questions about these Terms and Conditions, please
            contact us at:
          </p>
          <p className="mt-4 text-blue-700 font-medium">
            support@healthrecordtracker.com
          </p>
        </section>
      </div>

      {/* Footer CTA */}
      <div className="text-center mt-16">
        <p className="text-gray-600">
          © {new Date().getFullYear()} Health Record Tracker. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Terms;
