import { Code, Code2, Layers, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/serene-logo.png"
                alt="serene-logo"
                height={40}
                width={40}
              />{" "}
              <h4 className="text-xl font-bold">Serene Marble & Tile</h4>
            </div>
            <p className="text-gray-400 mb-4">
              Premium marble, tile, and stone installation services in Surrey
              and the Lower Mainland.
            </p>
            <p className="text-gray-400">Licensed • Insured • Professional</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Pedestal Decks</li>
              <li>Bathroom Tile & Stone</li>
              <li>Porcelain Panels</li>
              <li>Custom Stone Work</li>
              <li>Heated Flooring</li>
              <li>Tile Supply & Materials</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <span>+1 (604) 426-862</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5" />
                <span>Info.serenetile@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5" />
                <span>11910 80 ave Delta, BC V4C 8E3, Canada</span>
              </div>
              <Link
                href="https://guntassandhu.com"
                className="flex items-center space-x-3"
              >
                <Code className="h-5 w-5" />
                <span>Contact developer</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Serene Marble & Tile. All rights reserved. | Licensed
            Contractors Serving Surrey & Lower Mainland
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
