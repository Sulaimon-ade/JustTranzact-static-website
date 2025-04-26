import React from 'react';
import PageWrapper from '../components/Layout/PageWrapper';
import HeroBanner from '../components/Common/HeroBanner';
import SectionTitle from '../components/Common/SectionTitle';
import ProductGallery from '../components/SafetySolutions/ProductGallery';
import { safetyProducts } from '../assets/data';
import { ArrowDown, ShieldCheck } from 'lucide-react';
import Button from '../components/Common/Button';

const SafetySolutionsPage: React.FC = () => {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <HeroBanner
        title="Just Tranzact Ltd."
        subtitle="Comprehensive safety solutions for various industries, ensuring workplace compliance and protection."
        primaryButtonText="View Products"
        primaryButtonAction={() => {
          const gallerySection = document.getElementById('product-gallery');
          if (gallerySection) {
            gallerySection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        backgroundImage="https://images.pexels.com/photos/8961516/pexels-photo-8961516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Safety Equipment & Solutions"
                subtitle="We provide comprehensive safety solutions for businesses across various industries, ensuring workplace compliance and protection."
              />

              <p className="text-neutral-600 mb-4">
                From high-performance PPE to advanced fire detection and early warning systems, our offerings are built to safeguard lives and assets in demanding environments such as oil & gas, manufacturing, construction, and marine operations.
              </p>

              <p className="text-neutral-600 mb-4">
                We collaborate with trusted global manufacturers and maintain strict adherence to international safety standards, delivering tailored equipment solutions that align with each client’s specific risks, regulations, and workflows.
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-primary-700 mb-4">Our Safety Expertise</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow border border-neutral-100">
                    <div className="flex items-start">
                      <div className="bg-primary-100 rounded-full p-2 mr-3">
                        <ShieldCheck className="h-5 w-5 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-primary-700 mb-1">Workplace Assessment</h4>
                        <p className="text-sm text-neutral-600">
                          Thorough evaluation of safety needs and compliance requirements.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow border border-neutral-100">
                    <div className="flex items-start">
                      <div className="bg-primary-100 rounded-full p-2 mr-3">
                        <ShieldCheck className="h-5 w-5 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-primary-700 mb-1">Equipment Selection</h4>
                        <p className="text-sm text-neutral-600">
                          Expert guidance on choosing the right safety equipment.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow border border-neutral-100">
                    <div className="flex items-start">
                      <div className="bg-primary-100 rounded-full p-2 mr-3">
                        <ShieldCheck className="h-5 w-5 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-primary-700 mb-1">Safety Training</h4>
                        <p className="text-sm text-neutral-600">
                          Comprehensive training programs for proper equipment use.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow border border-neutral-100">
                    <div className="flex items-start">
                      <div className="bg-primary-100 rounded-full p-2 mr-3">
                        <ShieldCheck className="h-5 w-5 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-primary-700 mb-1">Ongoing Support</h4>
                        <p className="text-sm text-neutral-600">
                          Continuous assistance to ensure safety standards are maintained.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-first lg:order-last">
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Safety Solutions"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section id="product-gallery" className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            title="Safety Product Gallery"
            subtitle="Explore our comprehensive range of safety products and equipment designed to ensure workplace safety and compliance."
            centered
          />

          <div className="mt-12">
            <ProductGallery products={safetyProducts} />
          </div>
        </div>
      </section>

      {/* PDF Download */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Download Our Safety Catalog
          </h2>
          <p className="text-lg text-neutral-200 mb-8 max-w-3xl mx-auto">
            Get a comprehensive overview of all our safety products and solutions in our detailed catalog.
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="group"
          >
            Download PDF
            <ArrowDown className="ml-2 h-5 w-5 group-hover:animate-bounce" />
          </Button>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            title="Industries We Serve"
            subtitle="Our safety solutions are tailored to meet the specific needs of various industries, ensuring compliance with industry-specific regulations and standards."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-700 mb-4">Construction</h3>
              <p className="text-neutral-600 mb-4">
                Comprehensive safety solutions for construction sites, including PPE, fall protection, and equipment safety.
              </p>
              <ul className="space-y-2 text-neutral-600">
                <li className="flex items-start">
                  <span className="text-accent-600 font-bold mr-2">•</span>
                  <span>Fall protection systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-600 font-bold mr-2">•</span>
                  <span>Hard hats and safety helmets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-600 font-bold mr-2">•</span>
                  <span>High-visibility clothing</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-700 mb-4">Manufacturing</h3>
              <p className="text-neutral-600 mb-4">
                Safety solutions for manufacturing facilities, including machine safety, ergonomics, and industrial hygiene.
              </p>
              <ul className="space-y-2 text-neutral-600">
                <li className="flex items-start">
                  <span className="text-accent-600 font-bold mr-2">•</span>
                  <span>Machine guarding solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-600 font-bold mr-2">•</span>
                  <span>Respiratory protection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-600 font-bold mr-2">•</span>
                  <span>Ergonomic equipment</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-700 mb-4">Healthcare</h3>
              <p className="text-neutral-600 mb-4">
                Safety solutions for healthcare facilities, including infection control, ergonomics, and facility safety.
              </p>
              <ul className="space-y-2 text-neutral-600">
                <li className="flex items-start">
                  <span className="text-accent-600 font-bold mr-2">•</span>
                  <span>Personal protective equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-600 font-bold mr-2">•</span>
                  <span>Infection control supplies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-600 font-bold mr-2">•</span>
                  <span>Ergonomic patient handling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default SafetySolutionsPage;