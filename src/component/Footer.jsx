import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-sky-100 text-sky-900 pt-10 pb-4 w-full">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold text-sky-700 mb-3">Dobhiwala</h2>
          <p className="text-sm text-sky-800 leading-relaxed">
            Fast, affordable, and reliable laundry & dry-cleaning service.
            Fresh clothes, fresh life — every single time.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-sky-700 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["Home","Services","Pricing","Contact","Book Now","FAQ","Privacy Policy","Terms & Conditions"].map((link,i)=>(
              <li key={i}>
                <a href="#" className="hover:text-sky-500 transition">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-sky-700 mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> help@dobhiwala.in
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Jaipur, Rajasthan, India
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-sky-700 mb-3">Subscribe to Our Updates</h3>
          <p className="text-sm text-sky-800 mb-3">
            Get the latest offers, discounts, and service updates straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-3 py-2 text-sm rounded-md border border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <Button className="bg-sky-600 hover:bg-sky-700 text-white w-full sm:w-auto">
              Subscribe
            </Button>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-sky-300 mt-10 pt-4 flex flex-col md:flex-row items-center justify-between text-sm text-sky-700 gap-3 px-4 max-w-6xl mx-auto">
        <p>© {new Date().getFullYear()} Dobhiwala. All Rights Reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-sky-500 transition"><Facebook /></a>
          <a href="#" className="hover:text-sky-500 transition"><Instagram /></a>
          <a href="#" className="hover:text-sky-500 transition"><Twitter /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
