import React from 'react';
import { Link } from 'react-router-dom';
import { FileTextIcon, AwardIcon, ClockIcon, UsersIcon } from 'lucide-react';
import Button from '../components/Button';
import StatCard from '../components/StatCard';
const HomePage = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="bg-black text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Finance Writing That Drives Results
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-300">
              Transforming complex financial concepts into accessible, engaging
              content that empowers readers to make informed money decisions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button to="/contact" variant="primary" size="lg">
                Discuss Your Project
              </Button>
              <Button to="/portfolio" variant="outline" size="lg">
                View My Work
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proven Expertise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              With over a decade of experience in financial services and content
              creation, I deliver quality that speaks for itself.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard value="90+" label="Published Articles" icon={<FileTextIcon size={24} />} />
            <StatCard value="3+" label="Years of Finance Writing" icon={<AwardIcon size={24} />} />
            <StatCard value="10+" label="Years in Financial Services" icon={<ClockIcon size={24} />} />
            <StatCard value="100%" label="Deadline Compliance" icon={<UsersIcon size={24} />} />
          </div>
        </div>
      </section>
      {/* Services Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized finance writing services that deliver clarity,
              engagement, and results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-3">Long-Form Articles</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive financial guides and explainers that educate and
                engage readers.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-3">SEO-Optimized Content</h3>
              <p className="text-gray-600 mb-4">
                Strategic content that ranks well and drives organic traffic to
                your platform.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-3">Financial Education</h3>
              <p className="text-gray-600 mb-4">
                Complex topics simplified for everyday readers seeking practical
                advice.
              </p>
            </div>
          </div>
          <div className="text-center">
            <Button to="/services" variant="secondary">
              View All Services
            </Button>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Elevate Your Financial Content?
            </h2>
            <p className="text-xl mb-8">
              Let's collaborate to create engaging financial content that
              resonates with your audience and drives results.
            </p>
            <Button to="/contact" variant="secondary" size="lg">
              Get In Touch Today
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default HomePage;