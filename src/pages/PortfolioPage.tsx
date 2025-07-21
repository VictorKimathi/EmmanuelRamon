import React, { useState } from 'react';
import PortfolioItem from '../components/PortfolioItem';
import Button from '../components/Button';
const PortfolioPage = () => {
  const [filter, setFilter] = useState('all');
  const portfolioItems = [{
    id: 1,
    title: 'How to Start Investing in Your 50s Without Feeling Left Behind',
    publisher: 'Emmanuel Ramon',
    description: 'Starting to invest in your 50s can feel overwhelming, especially if others around you began decades earlier. But feeling behind does not mean you are out of time. With focused effort and smart decisions, it is possible to build meaningful savings and strengthen your financial future.',
    imageUrl: 'https://images.unsplash.com/photo-1565514020179-026b92b2d95b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    category: 'retirement',
    tags: ['Retirement', 'Tax Strategy', 'Long-form'],
    href: 'How_to_Start_Investing_in_Your_50s_Without_Feeling_Left_Behind.pdf'
  }, {
    id: 2,
    title: 'How Retailers Use Psychology to Get You to Spend More',
    publisher: 'Emmanuel Ramon',
    description: 'Spending more than you planned is not always the result of poor budgeting. Sometimes, it’s the outcome of carefully designed environments and marketing techniques meant to influence how you think, feel, and act. Retailers rely on psychological tactics to increase sales, many of which go unnoticed by the average shopper. From how a store is laid out to the way a price tag is printed, these methods are built to guide your decisions in subtle but powerful ways.',
    imageUrl: 'https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    category: 'income',
    tags: ['Financial Basics', 'Emergency Planning', 'Beginner Guide'],
    href: 'How_Retailers_Use_Psychology_to_Get_You_to_Spend_More.pdf'
  }, {
    id: 3,
    title: '5 Everyday Habits That Quietly Drain Your Retirement Savings',
    publisher: 'Emmanuel Ramon',
    description: 'Saving for retirement is often framed as a big-picture challenge, but the reality is that small, everyday choices can quietly chip away at your long-term financial security. It’s not always the major expenses or investment mistakes that do the most damage.',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    category: 'basics',
    tags: ['Financial Basics', 'Emergency Planning', 'Beginner Guide'],
    href: '5_Everyday_Habits_That_Quietly_Drain_Your_Retirement_Savings.pdf'
  }];
  const filteredItems = filter === 'all' ? portfolioItems : portfolioItems.filter(item => item.category === filter);
  return <div className="w-full">
      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">
              Portfolio & Writing Samples
            </h1>
            <p className="text-xl text-gray-300">
              A showcase of my published finance articles across major
              platforms.
            </p>
          </div>
        </div>
      </section>
      {/* Portfolio Filters */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            <button className={`px-4 py-2 rounded ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800 border border-gray-200'}`} onClick={() => setFilter('all')}>
              All Articles
            </button>
            <button className={`px-4 py-2 rounded ${filter === 'retirement' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800 border border-gray-200'}`} onClick={() => setFilter('retirement')}>
              Retirement
            </button>
            <button className={`px-4 py-2 rounded ${filter === 'income' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800 border border-gray-200'}`} onClick={() => setFilter('income')}>
              Side Hustles
            </button>
            <button className={`px-4 py-2 rounded ${filter === 'debt' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800 border border-gray-200'}`} onClick={() => setFilter('debt')}>
              Debt Management
            </button>
            <button className={`px-4 py-2 rounded ${filter === 'tax' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800 border border-gray-200'}`} onClick={() => setFilter('tax')}>
              Tax Strategies
            </button>
            <button className={`px-4 py-2 rounded ${filter === 'basics' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800 border border-gray-200'}`} onClick={() => setFilter('basics')}>
              Financial Basics
            </button>
          </div>
        </div>
      </section>
      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => <PortfolioItem key={item.id} title={item.title} publisher={item.publisher} description={item.description} imageUrl={item.imageUrl} tags={item.tags} />)}
          </div>
          {filteredItems.length === 0 && <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                No articles found in this category.
              </p>
            </div>}
        </div>
      </section>
      {/* Client Results */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Client Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white p-6 rounded shadow-sm">
                <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
                <p className="text-gray-700">
                  Client retention rate with repeat assignments
                </p>
              </div>
              <div className="bg-white p-6 rounded shadow-sm">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  100%
                </div>
                <p className="text-gray-700">
                  On-time delivery for all client projects
                </p>
              </div>
              <div className="bg-white p-6 rounded shadow-sm">
                <div className="text-4xl font-bold text-blue-600 mb-2">90+</div>
                <p className="text-gray-700">
                  Articles published on major platforms
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded shadow-sm text-left">
              <blockquote className="text-gray-700 text-lg italic mb-4">
                "Emmanuel consistently delivers high-quality finance content
                that resonates with our audience. His ability to explain complex
                topics clearly while maintaining reader engagement is
                exceptional."
              </blockquote>
              <div className="font-bold">
                - Finance Editor, Major Publication
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
              Need Similar Content for Your Platform?
            </h2>
            <p className="text-xl mb-8">
              I can create engaging, accurate financial content tailored to your
              specific audience and goals.
            </p>
            <Button to="/contact" variant="secondary" size="lg">
              Request a Writing Sample
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default PortfolioPage;
