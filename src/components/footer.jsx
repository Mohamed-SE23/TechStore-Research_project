import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-[#ff7a57] text-white py-12">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-4 justify-items-center md:grid-cols-2 lg:grid-cols-4 gap-8 sm:grid-cols-1">
          {/* Column 1: About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company Info</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-slate-100 hover:text-slate-300">
                  About TechStore
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-100 hover:text-slate-300">
                  Awards and ranking
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-100 hover:text-slate-300">
                  TechStore careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-100 hover:text-slate-300">
                  Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-100 hover:text-slate-300">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-100 hover:text-slate-300">
                  Track an order
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-100 hover:text-slate-300">
                  Feedback
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-100 hover:text-slate-300">
                  Privacy & Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/register" className="text-slate-100 hover:text-slate-300">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/sign" className="text-slate-100 hover:text-slate-300">
                  Sign in
                </Link>
              </li>
              <li>
                <Link to="/personal-training" className="text-slate-100 hover:text-slate-300">
                  Email Notifications
                </Link>
              </li>
              <li>
                <Link to="/nutrition" className="text-slate-100 hover:text-slate-300">
                  Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="flex space-x-4">
              <Link to="#" className="text-slate-100 hover:text-slate-300 text-2xl">
                <FaFacebookF />
              </Link>
              <Link to="#" className="text-slate-100 hover:text-slate-300 text-2xl">
                <FaWhatsapp />
              </Link>
              <Link to="#" className="text-slate-100 hover:text-slate-300 text-2xl">
                <FaLinkedin />
              </Link>
              <Link to="#" className="text-slate-100 hover:text-slate-300 text-2xl">
                <MdOutlineMailOutline />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-slate-200 text-sm">
          &copy; {new Date().getFullYear()} TechStore. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;