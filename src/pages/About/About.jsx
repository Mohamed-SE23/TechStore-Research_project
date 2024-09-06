import React from 'react';
import { Link } from 'react-router-dom';

const AboutUsPage = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-800 md:text-2xl sm:text-xl">
          About Tech<span className='text-[#ff7a57]'>Store</span>
        </h1>

        <div className="bg-white shadow overflow-hidden rounded-lg divide-y divide-gray-200">
          <section className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 md:text-xl sm:text-lg">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed">
              TechStore is an online platform that connects buyers and sellers of technical products. Whether you’re looking to sell your technical gear or browse for new tech, we make the process simple, secure, and transparent. Tech enthusiasts can offer products like laptops, gaming consoles, accessories, and more.
            </p>
          </section>

          <section className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 md:text-xl sm:text-lg">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to create a dynamic and reliable marketplace for tech lovers. We aim to empower buyers to find the best tech deals and help sellers reach a broad audience of potential buyers. With TechStore, we are changing how people buy and sell technical products by focusing on ease of use, security, and trust.
            </p>
          </section>

          <section className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 md:text-xl sm:text-lg">
              How TechStore Works
            </h2>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed">
              <li>
                <strong>For Buyers:</strong> Create an account, browse the available technical products, and buy from sellers directly. Use the secure payment system for transactions.
              </li>
              <li>
                <strong>For Sellers:</strong> Register an account, list your technical items, and manage your offers through your seller dashboard. Communicate with potential buyers and handle transactions within the platform.
              </li>
            </ul>
          </section>

          <section className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 md:text-xl sm:text-lg">
              Why Choose TechStore?
            </h2>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed">
              <li>Simple and intuitive user interface</li>
              <li>Secure payment gateway for hassle-free transactions</li>
              <li>A wide variety of technical products for both buyers and sellers</li>
              <li>Dedicated customer support</li>
            </ul>
          </section>

          <section className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 md:text-xl sm:text-lg">
              Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions or need support, feel free to reach out to us at <Link to="mailto:support@techstore.com" className="text-indigo-600 hover:underline">support@techstore.com</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
