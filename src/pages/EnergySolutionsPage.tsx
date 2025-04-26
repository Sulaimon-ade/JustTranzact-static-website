import React from 'react';
import PageWrapper from '../components/Layout/PageWrapper';
import HeroBanner from '../components/Common/HeroBanner';
import SectionTitle from '../components/Common/SectionTitle';
import FuelGallery from '../components/EnergySolutions/FuelGallery';
import CaseStudy from '../components/EnergySolutions/CaseStudy';
import { fuelTypes, caseStudies } from '../assets/data';
import { Zap } from 'lucide-react';

const EnergySolutionsPage: React.FC = () => {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <HeroBanner
        title="Just Tranzact Energy Ltd."
        subtitle="Efficient and sustainable energy products and services designed to optimize consumption and reduce environmental impact."
        primaryButtonText="Explore Fuel Solutions"
        primaryButtonAction={() => {
          const fuelSection = document.getElementById('fuel-gallery');
          if (fuelSection) {
            fuelSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        backgroundImage="https://b727754.smushcdn.com/727754/wp-content/uploads/2016/02/iStock-173006696_resized.jpg?lossy=1&strip=0&webp=1"
      />

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Energy Management Solutions"
                subtitle="We provide efficient and sustainable energy products and services designed to optimize consumption and reduce environmental impact."
              />

              <p className="text-neutral-600 mb-4">
                From crude oil and refined petroleum logistics to renewable alternatives like LNG and CNG, our energy solutions support a cleaner, more reliable energy future. We offer integrated services including sourcing, storage, distribution, and trading to meet the diverse needs of industrial clients, offshore platforms, and energy infrastructure projects.              </p>

              <p className="text-neutral-600 mb-4">
                Through innovation and strategic partnerships, we’re helping organizations transition toward smarter energy usage, enhanced operational safety, and reduced carbon footprints.
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-primary-700 mb-4">Our Energy Expertise</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow border border-neutral-100">
                    <div className="flex items-start">
                      <div className="bg-primary-100 rounded-full p-2 mr-3">
                        <Zap className="h-5 w-5 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-primary-700 mb-1">Fuel Management</h4>
                        <p className="text-sm text-neutral-600">
                          Optimized fuel supply and consumption monitoring solutions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow border border-neutral-100">
                    <div className="flex items-start">
                      <div className="bg-primary-100 rounded-full p-2 mr-3">
                        <Zap className="h-5 w-5 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-primary-700 mb-1">Energy Audits</h4>
                        <p className="text-sm text-neutral-600">
                          Comprehensive assessment of energy usage and efficiency opportunities.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow border border-neutral-100">
                    <div className="flex items-start">
                      <div className="bg-primary-100 rounded-full p-2 mr-3">
                        <Zap className="h-5 w-5 text-primary-600" />
                      </div>
                      {/* <div>
                        <h4 className="font-medium text-primary-700 mb-1">Renewable Integration</h4>
                        <p className="text-sm text-neutral-600">
                          Solutions for incorporating renewable energy sources into operations.
                        </p>
                      </div> */}
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow border border-neutral-100">
                    <div className="flex items-start">
                      <div className="bg-primary-100 rounded-full p-2 mr-3">
                        <Zap className="h-5 w-5 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-primary-700 mb-1">Consumption Tracking</h4>
                        <p className="text-sm text-neutral-600">
                          Advanced monitoring systems for real-time energy usage analysis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-first lg:order-last">
              <img
                src="https://www.safeatworkca.com/siteassets/images/open-graph/adobestock_372234899-powerline-og.jpg"
                alt="Energy Solutions"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fuel Gallery */}
      <section id="fuel-gallery" className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            title="Our Fuel Solutions"
            subtitle="Explore our range of high-quality fuel products designed to meet the specific needs of various industries and applications."
            centered
          />

          <div className="mt-12">
            <FuelGallery fuels={fuelTypes} />
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            title="Client Success Stories"
            subtitle="See how our energy solutions have helped businesses optimize their operations and reduce costs."
            centered
          />

          <div className="mt-12 space-y-8">
            {caseStudies.map((study) => (
              <CaseStudy
                key={study.id}
                title={study.title}
                summary={study.summary}
                imageUrl={study.imageUrl}
                slug={study.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            title="Benefits of Our Energy Solutions"
            subtitle="Discover how our comprehensive energy management solutions can transform your operations."
            centered
            className="text-white"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-accent-600 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Cost Reduction</h3>
              <p className="text-neutral-200">
                Optimize energy consumption to significantly reduce operational costs and improve bottom line.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-accent-600 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Environmental Impact</h3>
              <p className="text-neutral-200">
                Reduce carbon footprint and environmental impact through more efficient energy usage.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-accent-600 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Operational Efficiency</h3>
              <p className="text-neutral-200">
                Streamline energy-related processes to improve overall operational efficiency.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-accent-600 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Regulatory Compliance</h3>
              <p className="text-neutral-200">
                Ensure compliance with energy-related regulations and standards to avoid penalties.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-accent-600 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-white">5</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Supply Reliability</h3>
              <p className="text-neutral-200">
                Ensure consistent and reliable energy supply for uninterrupted operations.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-accent-600 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-white">6</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Future-Proofing</h3>
              <p className="text-neutral-200">
                Prepare your business for future energy challenges and opportunities with sustainable solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default EnergySolutionsPage;