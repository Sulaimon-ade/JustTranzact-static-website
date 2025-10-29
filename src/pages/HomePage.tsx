import React from 'react';
import PageWrapper from '../components/Layout/PageWrapper';
import HeroBanner from '../components/Common/HeroBanner';
import SectionTitle from '../components/Common/SectionTitle';
import FeatureCard from '../components/Home/FeatureCard';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      {/* Hero Section */}
      <HeroBanner
        title="Comprehensive Safety and Energy Solutions"
        subtitle="Just Tranzact provides integrated solutions for all your safety and energy needs through our specialized divisions."
        primaryButtonText="Explore Our Services"
        secondaryButtonText="Contact Us"
        primaryButtonAction={() => navigate('/services')}
        secondaryButtonAction={() => navigate('/contact')}
        backgroundImage="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      {/* Features Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            title="Our Specialized Divisions"
            subtitle="Discover the complete range of solutions offered by our dedicated divisions, each specializing in different aspects of safety and energy management."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <FeatureCard
              image="https://www.nairobisafetyshop.org/wp-content/uploads/2017/11/nss.jpg"
              title="Just Tranzact Ltd."
              description="Comprehensive safety solutions for various industries, ensuring workplace compliance and protection."
              link="/safety-solutions"
            />

            <FeatureCard
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs1lYuAuPbbgmSOvM1KUxL2pMrgF98wIPS6g&s"
              title="Just Tranzact Energy Ltd."
              description="Efficient and sustainable energy products and services designed to optimize consumption and reduce environmental impact."
              link="/energy-solutions"
            />

            <FeatureCard
              image="https://www.olearysequipment.com/images/default-source/default-album/safety7600378101d166e4b01fff0000cf87b0.jpg?sfvrsn=4"
              title="Portwest Safety Shop"
              description="Premium Portwest safety gear and equipment available through our specialized retail outlet with expert guidance."
              link="/safety-shop"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            title="Why Choose Just Tranzact"
            subtitle="Our integrated approach ensures that all your safety and energy needs are met with the highest standards of quality and expertise."
            centered
            className="text-white"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Expertise</h3>
              <p className="text-neutral-200">
                Industry experts with years of specialized experience in safety and energy solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Quality</h3>
              <p className="text-neutral-200">
                Premium products and services that meet or exceed industry standards and regulations.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Integration</h3>
              <p className="text-neutral-200">
                Seamless integration of safety and energy solutions for comprehensive coverage.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Support</h3>
              <p className="text-neutral-200">
                Dedicated customer support and after-sales service to ensure continued satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-6">
            Ready to Enhance Your Safety and Energy Management?
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Contact us today to discover how our integrated solutions can benefit your business.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-accent-600 hover:bg-accent-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </PageWrapper>
  );
};

export default HomePage;
