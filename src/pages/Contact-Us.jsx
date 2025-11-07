// import React from "react";

// export default function ContactUs() {
//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
//       <p className="text-gray-700">
//         For inquiries, please email demo@example.com.
//       </p>
//     </div>
//   );
// }


// src/pages/Contact-Us.jsx
// import React from 'react';

// function ContactUs() {
//   return (
//     <div className="flex-1 p-8 bg-white rounded-lg shadow-sm border border-gray-200">
//       <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Support</h1>
//       <p className="text-gray-600 mb-6">
//         We are here to help you. Please reach out to us using the contact information below or fill out the form.
//       </p>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div>
//           <h3 className="text-xl font-semibold text-gray-700 mb-3">Contact Details</h3>
//           <p className="text-gray-600">Email: support@hrtracker.com</p>
//           <p className="text-gray-600">Phone: +254 797 896 227</p>
//           <p className="text-gray-600">Address: Nairobi, Kenya</p>
//         </div>
        
//         <form className="space-y-4">
//           <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg" required />
//           <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border border-gray-300 rounded-lg" required />
//           <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none" required></textarea>
//           <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-semibold">
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default ContactUs;


import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Validate form fields
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";
    return newErrors;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
      return;
    }

    console.log("✅ Form Submitted:", formData);
    setSuccess(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800 flex flex-col">
      {/* Header Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold text-blue-800 mb-4">Get in Touch</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We’d love to hear from you! Whether you’re a patient, healthcare provider, or
          partner — our team is here to assist with any questions, feedback, or
          collaborations.
        </p>
      </section>

      {/* Contact Info + Form */}
      <section className="flex-1 bg-white rounded-t-3xl shadow-lg max-w-6xl mx-auto w-full px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Left - Contact Info */}
        <div>
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">
            Contact Information
          </h2>
          <p className="text-gray-600 mb-8">
            You can reach us anytime via the following channels. Our support team is
            available 24/7 to respond to your queries.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <span className="bg-blue-100 p-3 rounded-full text-blue-700">
                <i className="fas fa-envelope"></i>
              </span>
              <div>
                <p className="font-semibold text-blue-800">Email</p>
                <p className="text-gray-600">support@healthrecordtracker.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="bg-blue-100 p-3 rounded-full text-blue-700">
                <i className="fas fa-phone"></i>
              </span>
              <div>
                <p className="font-semibold text-blue-800">Phone</p>
                <p className="text-gray-600">+254 712 345 678</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="bg-blue-100 p-3 rounded-full text-blue-700">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <div>
                <p className="font-semibold text-blue-800">Office</p>
                <p className="text-gray-600">
                  Health Record Tracker HQ, Nairobi, Kenya
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Working Hours
            </h3>
            <ul className="text-gray-600">
              <li>Monday - Friday: 8:00 AM – 6:00 PM</li>
              <li>Saturday: 9:00 AM – 4:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div>
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">
            Send Us a Message
          </h2>

          {success && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-center font-medium">
              ✅ Your message has been sent successfully!
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-blue-400 focus:outline-none`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-blue-400 focus:outline-none`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject of your message"
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.subject ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-blue-400 focus:outline-none`}
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="mt-16">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.862351531922!2d36.82194631526064!3d-1.2920659359949805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173f5e69db3b%3A0x58b04fcb6d2f8439!2sNairobi%20CBD!5e0!3m2!1sen!2ske!4v1709806700000!5m2!1sen!2ske"
          className="w-full h-96 border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      {/* CTA Footer */}
      <section className="bg-blue-700 text-center text-white py-16 mt-16">
        <h2 className="text-3xl font-bold mb-4">
          Let’s Build a Healthier Future Together
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          Reach out to us today and discover how Health Record Tracker can improve your
          healthcare experience.
        </p>
        <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default ContactUs;
