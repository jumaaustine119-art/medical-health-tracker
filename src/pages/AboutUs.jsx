
import React from "react";
// import {mtm} from '../assets/images/medical-team.jpg'
const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold text-blue-800 mb-6">
          About Health Record Tracker
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our mission is to simplify how healthcare professionals and patients manage
          medical records — ensuring secure access, smooth communication, and efficient
          data tracking across all devices.
        </p>
      </section>

      {/* Our Mission */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-blue-700 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We aim to revolutionize the healthcare experience by empowering patients and
              medical professionals with real-time access to accurate health data.
              Our system enables seamless collaboration, transparency, and better decision-making.
            </p>
          </div>
          <img
            src="https://img.freepik.com/free-vector/medical-team-concept-illustration_114360-2321.jpg"
            
           alt="Our mission"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-blue-700 mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously integrate cutting-edge technology to make medical record management more intuitive and reliable.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Privacy & Security</h3>
              <p className="text-gray-600">
                Your health data is protected with top-tier encryption and privacy measures that comply with modern healthcare standards.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Accessibility</h3>
              <p className="text-gray-600">
                We believe healthcare technology should be accessible to everyone — simple to use, fast, and available everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-blue-700 mb-12">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Chief Medical Officer",
                img: "https://randomuser.me/api/portraits/women/65.jpg",
              },
              {
                name: "James Kim",
                role: "Lead Developer",
                img: "https://randomuser.me/api/portraits/men/45.jpg",
              },
              {
                name: "Maria Lopez",
                role: "UI/UX Designer",
                img: "https://randomuser.me/api/portraits/women/68.jpg",
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="bg-blue-50 rounded-2xl shadow-md p-6 hover:shadow-xl transition flex flex-col items-center"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-28 h-28 rounded-full mb-4 object-cover"
                />
                <h3 className="font-semibold text-lg text-blue-800">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-blue-700 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Join Us in Transforming Healthcare</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Whether you’re a patient, doctor, or healthcare provider, our platform is built
          to support your journey toward smarter health management.
        </p>
        <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
