import { Award, CheckCircle, Clock, Users } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Experienced Professionals You Can Trust
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With years of experience serving Surrey and the Lower Mainland,
              Serene Marble & Tile has built a reputation for exceptional
              craftsmanship and professional service. Our skilled team brings
              expertise in all aspects of tile, marble, and stone installation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <Users className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  500+
                </div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <Clock className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <Award className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  100%
                </div>
                <div className="text-sm text-gray-600">
                  Customer Satisfaction
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-600">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Licensed & Insured
                  </h4>
                  <p className="text-gray-600">
                    Fully licensed contractors with comprehensive insurance
                    coverage for your peace of mind.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-600">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Quality Guarantee
                  </h4>
                  <p className="text-gray-600">
                    We stand behind our work with comprehensive warranties on
                    all installations and materials.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-600">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Free Consultations
                  </h4>
                  <p className="text-gray-600">
                    Complimentary project consultations and detailed estimates
                    for all residential and commercial projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
