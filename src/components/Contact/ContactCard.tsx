import React from 'react';
import { ContactCardProps } from '../../types';
import { Building, Phone, Mail } from 'lucide-react';

const ContactCard: React.FC<ContactCardProps> = ({
  logo,
  company,
  address,
  phone,
  email,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col items-center mb-6">
        <div className="text-primary-600 mb-3">
          {logo}
        </div>
        <h3 className="text-xl font-bold text-primary-700">{company}</h3>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-start">
          <Building className="h-5 w-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
          <div>
            <div className="text-sm font-medium text-neutral-700 mb-1">Address</div>
            <div className="text-neutral-600 text-sm">{address}</div>
          </div>
        </div>
        
        <div className="flex items-start">
          <Phone className="h-5 w-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
          <div>
            <div className="text-sm font-medium text-neutral-700 mb-1">Phone</div>
            <a 
              href={`tel:${phone}`} 
              className="text-primary-600 hover:underline text-sm"
            >
              {phone}
            </a>
          </div>
        </div>
        
        <div className="flex items-start">
          <Mail className="h-5 w-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
          <div>
            <div className="text-sm font-medium text-neutral-700 mb-1">Email</div>
            <a 
              href={`mailto:${email}`} 
              className="text-primary-600 hover:underline text-sm"
            >
              {email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;