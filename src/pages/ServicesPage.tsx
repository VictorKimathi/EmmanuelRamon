import React from 'react';
import { FileTextIcon, SearchIcon, BookOpenIcon, EditIcon, TrendingUpIcon, BarChartIcon } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';
const ServicesPage = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Services & Expertise</h1>
            <p className="text-xl text-gray-300">
              Specialized finance writing services tailored to educate, engage,
              and convert your audience.
            </p>
          </div>
        </div>
      </section>
      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6">How I Can Help</h2>
            <p className="text-gray-700 text-lg">
              I create clear, engaging finance content that helps your audience
              make informed decisions while positioning your brand as a trusted
              authority. My specialized writing services are designed to deliver
              both educational value and marketing results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard title="Long-Form Articles" description="Comprehensive 2,000-3,000 word guides that thoroughly cover complex financial topics while maintaining reader engagement." icon={<FileTextIcon size={32} />} />
            <ServiceCard title="SEO-Optimized Content" description="Strategic finance content that ranks well in search engines while providing genuine value to readers." icon={<SearchIcon size={32} />} />
            <ServiceCard title="Financial Education" description="Clear explanations of complex concepts that help your audience build financial literacy and confidence." icon={<BookOpenIcon size={32} />} />
            <ServiceCard title="Content Editing" description="Professional refinement of existing financial content to improve clarity, accuracy, and engagement." icon={<EditIcon size={32} />} />
            <ServiceCard title="Trend Analysis" description="Insightful content on current financial trends and their implications for different audience segments." icon={<TrendingUpIcon size={32} />} />
            <ServiceCard title="Financial Product Reviews" description="Balanced, thorough evaluations of financial products and services to guide consumer decisions." icon={<BarChartIcon size={32} />} />
          </div>
        </div>
      </section>
      {/* Writing Specialties */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Writing Specialties</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-3">Retirement Planning</h3>
                <p className="text-gray-700">
                  Comprehensive guides on retirement vehicles (401(k)s, IRAs,
                  pensions), withdrawal strategies, retirement income planning,
                  and preparing for retirement at different life stages.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">
                  Side Hustles & Income Generation
                </h3>
                <p className="text-gray-700">
                  Practical content on supplemental income opportunities,
                  passive income strategies, gig economy participation, and
                  turning hobbies into income streams.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">
                  Debt Reduction & Management
                </h3>
                <p className="text-gray-700">
                  Strategic approaches to debt payoff, credit utilization, debt
                  consolidation options, and rebuilding financial health after
                  debt challenges.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Tax Strategies</h3>
                <p className="text-gray-700">
                  Clear explanations of tax-advantaged accounts, deduction
                  opportunities, tax planning throughout the year, and
                  maximizing returns while remaining compliant.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">
                  Financial Decision-Making
                </h3>
                <p className="text-gray-700">
                  Frameworks for making major financial decisions, weighing
                  options, understanding opportunity costs, and aligning choices
                  with personal values and goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">My Process</h2>
            <div className="space-y-12">
              <div className="flex">
                <div className="mr-6">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Discovery & Research
                  </h3>
                  <p className="text-gray-700">
                    I begin by understanding your audience, goals, and content
                    needs. Then I conduct thorough research to ensure accuracy
                    and value in every piece.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-6">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Content Creation</h3>
                  <p className="text-gray-700">
                    I craft engaging, clear content that balances educational
                    value with your marketing objectives, ensuring technical
                    accuracy throughout.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-6">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Refinement</h3>
                  <p className="text-gray-700">
                    After initial drafting, I polish the content for clarity,
                    engagement, and SEO performance, incorporating your feedback
                    to ensure perfect alignment with your needs.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-6">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Delivery & Support</h3>
                  <p className="text-gray-700">
                    I deliver finalized content on schedule and remain available
                    for any follow-up questions or adjustments needed to ensure
                    your complete satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Elevate Your Financial Content?
            </h2>
            <p className="text-xl mb-8">
              Let's discuss your content needs and how my services can help you
              achieve your goals.
            </p>
            <Button to="/contact" variant="secondary" size="lg">
              Start a Conversation
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default ServicesPage;