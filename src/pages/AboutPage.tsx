import React from 'react';
import PageWrapper from '../components/Layout/PageWrapper';
import HeroBanner from '../components/Common/HeroBanner';
import SectionTitle from '../components/Common/SectionTitle';
import Timeline from '../components/About/Timeline';
import TeamProfile from '../components/About/TeamProfile';
import { teamMembers, timelineItems } from '../assets/data';

const AboutPage: React.FC = () => {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <HeroBanner
        title="About Just Tranzact"
        subtitle="Learn more about our journey, our mission, and the team behind our success."
        backgroundImage="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Our Company"
                subtitle="Just Tranzact was founded with a vision to provide integrated solutions that address both safety and energy needs of businesses across various industries."
              />

              <p className="text-neutral-600 mb-4">
                We operate at the intersection of innovation, safety, and sustainability, offering a wide range of services that include the procurement and distribution of certified personal protective equipment (PPE), advanced fire and security systems, as well as oil and gas logistics and renewable energy solutions.              </p>

              <p className="text-neutral-600 mb-4">
                With a strong commitment to quality, regulatory compliance, and customer satisfaction, we collaborate closely with clients to deliver customized, reliable, and efficient solutions that protect people, assets, and the environment.              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-primary-700 mb-2">Our Mission</h3>
                  <p className="text-neutral-600">
                    To provide integrated safety and energy solutions that enhance efficiency, compliance, and sustainability.
                  </p>
                </div>

                <div className="bg-neutral-50 p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-primary-700 mb-2">Our Vision</h3>
                  <p className="text-neutral-600">
                    To be the leading provider of comprehensive safety and energy management solutions globally.
                  </p>
                </div>
              </div>
            </div>

            <div className="order-first lg:order-last">
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Just Tranzact team"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            title="Our Journey"
            subtitle="Explore the key milestones in our company's history that have shaped who we are today."
            centered
          />

          <div className="mt-12">
            <Timeline items={timelineItems} />
          </div>
        </div>
      </section>

      {/* Team Section
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            title="Meet Our Team"
            subtitle="Our dedicated professionals bring decades of experience and expertise to deliver the best solutions for our clients."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {teamMembers.map((member) => (
              <TeamProfile
                key={member.id}
                name={member.name}
                role={member.role}
                bio={member.bio}
                imageUrl={member.imageUrl}
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* Values Section */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            title="Our Core Values"
            subtitle="These principles guide everything we do and define how we interact with our clients, partners, and community."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-primary-700 mb-3">Integrity</h3>
              <p className="text-neutral-600">
                We conduct our business with the highest ethical standards and transparency.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-primary-700 mb-3">Excellence</h3>
              <p className="text-neutral-600">
                We strive for excellence in everything we do, from products to customer service.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-primary-700 mb-3">Innovation</h3>
              <p className="text-neutral-600">
                We continuously seek innovative solutions to address evolving challenges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-primary-700 mb-3">Sustainability</h3>
              <p className="text-neutral-600">
                We are committed to promoting sustainable practices in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default AboutPage;
