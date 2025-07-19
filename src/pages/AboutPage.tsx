import React from 'react';
import ExperienceItem from '../components/ExperienceItem';
import Button from '../components/Button';
const AboutPage = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Experience & Expertise</h1>
            <p className="text-xl text-gray-300">
              A decade of financial services experience combined with
              specialized writing skills to deliver exceptional content.
            </p>
          </div>
        </div>
      </section>
      {/* Professional Image Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-6">Meet Emmanuel</h2>
                <p className="text-gray-700 text-lg mb-4">
                  I combine financial expertise with clear, engaging writing to
                  help readers navigate their financial journeys with
                  confidence.
                </p>
                <p className="text-gray-700 text-lg mb-6">
                  My approach is straightforward: take complex financial
                  concepts and transform them into practical, actionable advice
                  that anyone can understand and implement.
                </p>
                <div className="flex items-center">
                  <div className="w-16 h-1 bg-blue-600 mr-4"></div>
                  <p className="text-gray-900 font-medium italic">
                    "Financial literacy shouldn't be complicated. My goal is to
                    make money management accessible to everyone."
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" alt="Emmanuel Ramon Stembridge" className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Professional Summary */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Professional Summary</h2>
            <p className="text-gray-700 text-lg mb-4">
              I'm Emmanuel Ramon Stembridge, a freelance finance writer with
              over 3 years of specialized experience creating engaging financial
              content. My background includes a decade in financial services,
              giving me unique insights into the practical aspects of personal
              finance.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              My mission is to transform complex financial concepts into
              accessible, engaging content that empowers readers to make
              informed money decisions. I've published over 90 articles across
              major finance platforms, specializing in retirement planning, side
              hustles, debt reduction, and tax strategies.
            </p>
            <p className="text-gray-700 text-lg">
              Based in Morrow, GA, I work with clients nationwide to create
              finance content that drives results and builds audience trust.
            </p>
          </div>
        </div>
      </section>
      {/* Work History */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-10">Work History</h2>
            <ExperienceItem role="Freelance Personal Finance Writer" company="Self-Employed" period="January 2021 – Present" location="Remote" achievements={['Published 90+ articles on major platforms (Finance Buzz, Penny Hoarder, DollarSprout)', 'Specializes in 2,000-3,000 word feature articles', 'Expert topics: Retirement planning, side hustles, debt reduction, tax strategies', 'Maintains 100% deadline compliance record', 'Built recurring client relationships with 85% repeat assignment rate']} />
            <ExperienceItem role="Digital Content Editor" company="SmartSense Living" period="September 2019 – December 2020" location="Remote" achievements={['Edited 250+ financial articles for tone and accuracy', 'Managed Ghost CMS publishing workflow', 'Launched newsletter increasing return visits by 34%', 'Collaborated with design and SEO teams']} />
            <ExperienceItem role="Community Banker & Financial Literacy Coach" company="Sunrise Credit Union" period="May 2014 – August 2019" achievements={['Provided one-on-one financial coaching across income levels', 'Hosted monthly financial literacy workshops', 'Created "Bank Smarter" blog column', 'Promoted to Lead Customer Financial Representative (under 2 years)', 'Specialized in budgeting, debt management, and credit repair']} />
            <ExperienceItem role="Operations Assistant" company="Clayton State Community College" period="September 2011 – May 2014" achievements={['Managed student billing and financial aid inquiries', 'Created jargon-free financial guides for students', 'Improved billing transparency satisfaction by 28%']} />
          </div>
        </div>
      </section>
      {/* Education & Skills */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Education</h2>
              <div className="mb-4">
                <h3 className="text-xl font-bold">
                  Clayton State Community College
                </h3>
                <p className="text-blue-600">
                  A.A.S. in Business Communications | GPA: 3.6 | May 2014
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3">Content Creation</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li className="flex items-center bg-gray-50 p-3 rounded">
                    <span className="w-4 h-4 bg-blue-600 rounded-full mr-2"></span>
                    <span>Long-form articles</span>
                  </li>
                  <li className="flex items-center bg-gray-50 p-3 rounded">
                    <span className="w-4 h-4 bg-blue-600 rounded-full mr-2"></span>
                    <span>Financial explainers</span>
                  </li>
                  <li className="flex items-center bg-gray-50 p-3 rounded">
                    <span className="w-4 h-4 bg-blue-600 rounded-full mr-2"></span>
                    <span>Educational content</span>
                  </li>
                  <li className="flex items-center bg-gray-50 p-3 rounded">
                    <span className="w-4 h-4 bg-blue-600 rounded-full mr-2"></span>
                    <span>SEO optimization</span>
                  </li>
                  <li className="flex items-center bg-gray-50 p-3 rounded">
                    <span className="w-4 h-4 bg-blue-600 rounded-full mr-2"></span>
                    <span>Market analysis</span>
                  </li>
                  <li className="flex items-center bg-gray-50 p-3 rounded">
                    <span className="w-4 h-4 bg-blue-600 rounded-full mr-2"></span>
                    <span>AP Style editing</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">
                  Technical Proficiencies
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li className="flex items-center bg-gray-50 p-3 rounded">
                    <span className="w-4 h-4 bg-blue-600 rounded-full mr-2"></span>
                    <span>WordPress, Ghost, Contentful</span>
                  </li>
                  <li className="flex items-center bg-gray-50 p-3 rounded">
                    <span className="w-4 h-4 bg-blue-600 rounded-full mr-2"></span>
                    <span>Google Workspace</span>
                  </li>
                  <li className="flex items-center bg-gray-50 p-3 rounded">
                    <span className="w-4 h-4 bg-blue-600 rounded-full mr-2"></span>
                    <span>Grammarly Pro</span>
                  </li>
                  <li className="flex items-center bg-gray-50 p-3 rounded">
                    <span className="w-4 h-4 bg-blue-600 rounded-full mr-2"></span>
                    <span>Trello, Slack</span>
                  </li>
                  <li className="flex items-center bg-gray-50 p-3 rounded">
                    <span className="w-4 h-4 bg-blue-600 rounded-full mr-2"></span>
                    <span>Canva (basic design)</span>
                  </li>
                  <li className="flex items-center bg-gray-50 p-3 rounded">
                    <span className="w-4 h-4 bg-blue-600 rounded-full mr-2"></span>
                    <span>Surfer SEO</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-xl mb-8">
              Let's discuss how my experience and expertise can help create
              exceptional financial content for your audience.
            </p>
            <Button to="/contact" variant="secondary" size="lg">
              Contact Me
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default AboutPage;