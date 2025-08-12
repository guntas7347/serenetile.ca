import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

export const emailSubject = "Enquire regarding Tile and Marble | From Website";

export const emailBody = `Hello,

I am interested in learning more about your marble and tile installation services. Could you please provide details on pricing, availability, and the process involved?

Looking forward to your response.

Thank you,
[Your Name]
[Your Phone Number]`;

const Contact = () => {
  return (
    <section id="contact" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Your Free Estimate Today
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your space? Contact us for a consultation and
            detailed project estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <a
            href="tel:+16044426862"
            className="text-center p-8 bg-gray-50 rounded-xl"
          >
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              Call Us (Recomended)
            </h4>
            <p className="text-gray-600 mb-4">Speak with our experts</p>
            <p className="text-xl font-semibold text-blue-600">
              +1 (604) 426-862
            </p>
          </a>

          <a
            href={`mailto:info.serenetile@gmail.com?subject=${encodeURIComponent(
              emailSubject
            )}&body=${encodeURIComponent(emailBody)}`}
            className="text-center p-8 bg-gray-50 rounded-xl"
          >
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              Email Us
            </h4>
            <p className="text-gray-600 mb-4">Send us your project details</p>
            <p className="text-lg text-blue-600">Info.serenetile@gmail.com</p>
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=11910+80+ave+Delta,+BC+V4C+8E3,+Canada"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center p-8 bg-gray-50 rounded-xl"
          >
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              Visit Us
            </h4>
            <p className="text-gray-600 mb-4">
              Serving Surrey & Lower Mainland
            </p>
            <p className="text-lg text-gray-700">
              11910 80 ave Delta, BC V4C 8E3, Canada
            </p>
          </a>
        </div>

        <div className="text-center mt-12">
          <a
            href="tel:+16044426862"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg text-lg"
          >
            Request Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
