import React from 'react';
import PageWrapper from '../components/Layout/PageWrapper';
import HeroBanner from '../components/Common/HeroBanner';
import SectionTitle from '../components/Common/SectionTitle';
import ContactForm from '../components/Contact/ContactForm';
import ContactCard from '../components/Contact/ContactCard';
import { ShieldCheck, Zap, Store } from 'lucide-react';

const ContactPage: React.FC = () => {
  const handleFormSubmit = (data: { name: string; email: string; message: string }) => {
    console.log('Form submitted:', data);
    // In a real app, this would send the data to a server
  };

  return (
    <PageWrapper>
      {/* Hero Section */}
      <HeroBanner
        title="Contact Us"
        subtitle="Get in touch with our team to discuss how we can help with your safety and energy needs."
        backgroundImage="https://media.istockphoto.com/id/622911554/photo/bright-blue-background-or-glossy-texture-of-paper-and-plastic.jpg?b=1&s=612x612&w=0&k=20&c=CIP8nOt8ZoKUSCFZ6h5dcJkSCejjDNM4HXVDYftuDqc="
      />

      {/* Contact Form and Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            title="Get In Touch"
            subtitle="We're here to help with all your safety and energy management needs. Reach out to the appropriate division or use our general contact form."
            centered
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {/* Contact Cards */}
            <div className="space-y-8">
              <ContactCard
                logo={<ShieldCheck className="h-8 w-8" />}
                company="Just Tranzact Ltd."
                address="10th Floor C-Wing, Foreshore Towers No2, Osborne Road, Ikoyi, Lagos, Nigeria"
                phone="+2348078012228"
                email="Info@justtranzactlimited.com"
              />
              
              <ContactCard
                logo={<Zap className="h-8 w-8" />}
                company="Just Tranzact Energy Ltd."
                address="10th Floor C-Wing, Foreshore Towers No2, Osborne Road, Ikoyi, Lagos, Nigeria"
                phone="+2348078012228"
                email="Info@justtranzactlimited.com"
              />
              
              <ContactCard
                logo={<Store className="h-8 w-8" />}
                company="Portwest Safety Shop"
                address="10th Floor C-Wing, Foreshore Towers No2, Osborne Road, Ikoyi, Lagos, Nigeria"
                phone="+2348078012228"
                email="Info@justtranzactlimited.com"
              />
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm onSubmit={handleFormSubmit} />
              
              {/* Support Info */}
              <div className="bg-primary-50 rounded-lg p-6 mt-8">
                <h3 className="text-xl font-bold text-primary-700 mb-4">Customer Support Hours</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-primary-600 mb-2">General Inquiries</h4>
                    <p className="text-neutral-600">
                      Monday - Friday: 9:00 AM - 5:30 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-primary-600 mb-2">Technical Support</h4>
                    <p className="text-neutral-600">
                      Monday - Friday: 8:00 AM - 8:00 PM<br />
                      Saturday: 9:00 AM - 5:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h4 className="font-medium text-primary-600 mb-2">Emergency Support</h4>
                  <p className="text-neutral-600">
                    For urgent matters outside regular business hours, please call our emergency hotline at 
                    <a href="tel:+2348023143245" className="text-primary-600 font-medium ml-1 hover:underline">
                      +2348023143245
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            title="Our Location"
            subtitle="Visit us at our headquarters in Lagos, where all our divisions are conveniently located to serve your safety and energy needs."
            centered
          />
          
          <div className="mt-12 h-96 rounded-lg overflow-hidden shadow-md">
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
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            title="Contact FAQs"
            subtitle="Find answers to common questions about contacting and working with Just Transact."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-700 mb-3">What information should I provide when contacting you?</h3>
              <p className="text-neutral-600">
                To help us assist you more efficiently, please include your name, company name, contact details, and a clear description of your requirements or inquiry.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-700 mb-3">How quickly can I expect a response?</h3>
              <p className="text-neutral-600">
                We aim to respond to all inquiries within 24 business hours. For urgent matters, please call our dedicated phone lines for immediate assistance.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-700 mb-3">Can I schedule a consultation?</h3>
              <p className="text-neutral-600">
                Yes, we offer free consultations to discuss your specific needs. Please mention in your message that you'd like to schedule a consultation, and our team will arrange it.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-700 mb-3">Do you offer site visits?</h3>
              <p className="text-neutral-600">
                Yes, we provide on-site assessments to better understand your requirements and provide tailored solutions. This service is available for businesses within Nigeria.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-700 mb-3">How can I get a quote?</h3>
              <p className="text-neutral-600">
                You can request a quote through our contact form, specifying your requirements. For more complex needs, we may arrange a consultation to ensure accuracy.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-700 mb-3">Do you work with international clients?</h3>
              <p className="text-neutral-600">
                Yes, while our physical operations are based in Lagos, Nigeria, we work with international clients on consultancy, product sourcing, and remote support services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default ContactPage;
