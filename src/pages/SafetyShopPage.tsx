import React from 'react';
import PageWrapper from '../components/Layout/PageWrapper';
import HeroBanner from '../components/Common/HeroBanner';
import SectionTitle from '../components/Common/SectionTitle';
import ShowroomTour from '../components/SafetyShop/ShowroomTour';
import FAQAccordion from '../components/SafetyShop/FAQAccordion';
import Button from '../components/Common/Button';
import { faqs } from '../assets/data';
import { Store, AlertCircle } from 'lucide-react';

const SafetyShopPage: React.FC = () => {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <HeroBanner
        title="Portwest Safety Shop"
        subtitle="Premium Portwest safety gear and equipment available through our specialized retail outlet with expert guidance."
        primaryButtonText="Visit Our Showroom"
        primaryButtonAction={() => {
          const showroomSection = document.getElementById('showroom-tour');
          if (showroomSection) {
            showroomSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        backgroundImage="https://www.isonandco.com.au/wp-content/uploads/2016/01/safety-equipment1.jpg"
      />

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="About Our Safety Shop"
                subtitle="Our Portwest Safety Shop offers a wide range of premium safety gear and equipment, backed by expert guidance to ensure you find the right solutions for your needs."
              />

              <p className="text-neutral-600 mb-4">
                Designed as both a retail outlet and education hub, the shop empowers customers to see, feel, and compare authentic Portwest products firsthand. With counterfeit safety gear flooding the market, we provide clarity and confidence by showcasing only certified, high-quality equipment.              </p>

              <p className="text-neutral-600 mb-4">
                Whether you're outfitting an entire team or shopping for individual protection, our specialists are here to help you make informed, compliant choices—every time.              </p>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-primary-700 mb-4">Why Shop With Us</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow border border-neutral-100">
                    <div className="flex items-start">
                      <div className="bg-primary-100 rounded-full p-2 mr-3">
                        <Store className="h-5 w-5 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-primary-700 mb-1">Expert Guidance</h4>
                        <p className="text-sm text-neutral-600">
                          Knowledgeable staff to help you find the perfect safety solutions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow border border-neutral-100">
                    <div className="flex items-start">
                      <div className="bg-primary-100 rounded-full p-2 mr-3">
                        <Store className="h-5 w-5 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-primary-700 mb-1">Premium Products</h4>
                        <p className="text-sm text-neutral-600">
                          High-quality Portwest gear that meets or exceeds safety standards.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow border border-neutral-100">
                    <div className="flex items-start">
                      <div className="bg-primary-100 rounded-full p-2 mr-3">
                        <Store className="h-5 w-5 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-primary-700 mb-1">Custom Ordering</h4>
                        <p className="text-sm text-neutral-600">
                          Corporate accounts and customization options available.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow border border-neutral-100">
                    <div className="flex items-start">
                      <div className="bg-primary-100 rounded-full p-2 mr-3">
                        <Store className="h-5 w-5 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-primary-700 mb-1">Try Before You Buy</h4>
                        <p className="text-sm text-neutral-600">
                          In-store demonstrations and fittings for key safety equipment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-first lg:order-last">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Q1crI5bGRRO00SKBsSSRJuFvDzOugbwWgw&s"
                alt="Safety Shop"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Showroom Tour */}
      <section id="showroom-tour" className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            title="Take a Tour of Our Showroom"
            subtitle="Get a glimpse of our state-of-the-art showroom featuring a wide range of Portwest safety products."
            centered
          />

          <div className="mt-12">
            <ShowroomTour />
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block mb-6">
            <AlertCircle className="h-16 w-16 text-accent-500 mx-auto" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Online Store Coming Soon!
          </h2>
          <p className="text-lg text-neutral-200 mb-8 max-w-3xl mx-auto">
            We're working on bringing our full range of safety products online. Sign up to be notified when our e-commerce platform launches.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-accent-500"
              />
              <Button
                variant="secondary"
                className="rounded-l-none"
              >
                Notify Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our Portwest Safety Shop and products."
            centered
          />

          <div className="mt-12 max-w-3xl mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Visit Our Shop"
                subtitle="Come see our extensive range of safety products in person and get expert advice from our team."
              />

              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="font-bold text-primary-700 mb-1">Address</h3>
                  <p className="text-neutral-600">
                    10th Floor C-Wing, Foreshore Towers No2<br />
                    Osborne Road, Ikoyi<br />
                    Lagos, Nigeria
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-primary-700 mb-1">Opening Hours</h3>
                  <p className="text-neutral-600">
                    Monday - Friday: 9:00 AM - 5:30 PM<br />
                    Saturday: 10:00 AM - 3:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-primary-700 mb-1">Contact</h3>
                  <p className="text-neutral-600">
                    Phone: <a href="tel:+2348176620323" className="text-primary-600 hover:underline">+2348176620323</a><br />
                    Email: <a href="mailto:Info@justtranzactlimited.com" className="text-primary-600 hover:underline">Info@justtranzactlimited.com</a>
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  variant="primary"
                  onClick={() => window.open('https://www.google.com/maps/place/Foreshore+Towers', '_blank')}
                >
                  Get Directions
                </Button>
              </div>
            </div>

            <div>
              {/* Google Map */}
              <div className="aspect-w-16 aspect-h-9 h-96 bg-neutral-200 rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7277083770874!2d3.4334439!3d6.4432572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4cc4b1b09cd%3A0x710a6562e2a87669!2sForeshore%20Towers!5e0!3m2!1sen!2sus!4v1661528891702!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default SafetyShopPage;