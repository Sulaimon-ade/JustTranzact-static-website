import React from 'react';
import PageWrapper from '../components/Layout/PageWrapper';
import HeroBanner from '../components/Common/HeroBanner';
import SectionTitle from '../components/Common/SectionTitle';
import IconGrid from '../components/Services/IconGrid';
import { serviceIcons } from '../assets/data';

const ServicesPage: React.FC = () => {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <HeroBanner
        title="Our Services"
        subtitle="Discover the comprehensive range of solutions offered by our specialized divisions."
        backgroundImage="https://images.pexels.com/photos/209719/pexels-photo-209719.jpeg?auto=compress&cs=tinysrgb&w=600"
      />

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            title="Our Specialized Services"
            subtitle="At Just Tranzact, we offer a wide range of integrated solutions through our three specialized divisions, each focused on different aspects of safety and energy management."
            centered
          />

          <div className="mt-12">
            <IconGrid icons={serviceIcons} />
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <SectionTitle
                title="Safety Solutions"
                subtitle="Just Tranzact Ltd. provides comprehensive safety equipment and training services for various industries."
              />

              <p className="text-neutral-600 mb-4">
                We partner with globally recognized manufacturers to supply certified, high-performance personal protective equipment (PPE) and safety systems. Our end-to-end approach ensures that organizations not only receive quality products, but also benefit from expert consultation, training, and compliance support to create safer working environments.              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-accent-600 font-bold mr-2">•</span>
                  <span className="text-neutral-600">Workplace safety assessments and audits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-600 font-bold mr-2">•</span>
                  <span className="text-neutral-600">Safety equipment procurement and maintenance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-600 font-bold mr-2">•</span>
                  <span className="text-neutral-600">Safety training programs and certification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-600 font-bold mr-2">•</span>
                  <span className="text-neutral-600">Compliance consultation and implementation</span>
                </li>
              </ul>
            </div>

            <div className="order-first lg:order-last">
              <img
                src="https://media.istockphoto.com/id/879813920/photo/male-and-female-industrial-engineers-talk-with-factory-worker-while-using-laptop-they-work-at.jpg?b=1&s=612x612&w=0&k=20&c=8b3B11-t-NEuUM3BXiOXYsWjshifoJVXcw8-QE5wdY0="
                alt="Safety Solutions"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-first lg:order-first">
              <img
                src="https://images.pexels.com/photos/243138/pexels-photo-243138.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Energy Solutions"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>

            <div>
              <SectionTitle
                title="Energy Solutions"
                subtitle="Just Tranzact Energy Ltd. offers efficient and sustainable energy products and services."
              />

              <p className="text-neutral-600 mb-4">
                With expertise across the oil and gas value chain, we provide reliable fuel supply, logistics, and energy infrastructure tailored to meet both conventional and renewable energy demands. Our solutions are built to improve energy efficiency, enhance compliance, and contribute to long-term sustainability goals.              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-accent-600 font-bold mr-2">•</span>
                  <span className="text-neutral-600">Fuel supply and management solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-600 font-bold mr-2">•</span>
                  <span className="text-neutral-600">Energy efficiency consultations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-600 font-bold mr-2">•</span>
                  <span className="text-neutral-600">Renewable energy integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-600 font-bold mr-2">•</span>
                  <span className="text-neutral-600">Energy consumption monitoring and optimization</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Safety Shop"
                subtitle="Portwest Safety Shop offers premium safety gear and equipment through our specialized retail outlet. "
              />

              <p className="text-neutral-600 mb-4">
                Created to combat the rise of counterfeit products and educate buyers, the shop allows customers to physically examine and compare authentic Portwest gear. Our team provides tailored consultations to help individuals and organizations select the right protective equipment for their unique safety needs.              </p>

              <ul className="space-y-2 mb-6">
                <em>Our offerings include:</em> <br />
                <li className="flex items-start">
                  <span className="text-accent-600 font-bold mr-2">•</span>
                  <span className="text-neutral-600">Wide range of Portwest safety equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-600 font-bold mr-2">•</span>
                  <span className="text-neutral-600">Personalized safety gear consultations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-600 font-bold mr-2">•</span>
                  <span className="text-neutral-600">Corporate ordering and customization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-600 font-bold mr-2">•</span>
                  <span className="text-neutral-600">Safety equipment demonstrations and fittings</span>
                </li>
              </ul>
            </div>

            <div className="order-first lg:order-last">
              <img
                src="https://orionsafety.ca/wp-content/uploads/2021/04/1.jpg"
                alt="Safety Shop"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Enhance Your Safety and Energy Management?
          </h2>
          <p className="text-lg text-neutral-200 mb-8 max-w-3xl mx-auto">
            Our team of experts is ready to help you find the perfect solutions for your specific needs. Contact us today to get started.
          </p>
          <button
            onClick={() => window.location.href = '/contact'}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-primary-700 bg-white hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </PageWrapper>
  );
};

export default ServicesPage;