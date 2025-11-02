import React, { useState } from 'react';
import Button from '../Common/Button';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validate = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      const { name, email, message } = formData;

      // Construct WhatsApp message
      const whatsappMessage = `Hello, good day! My name is ${name}. My email is ${email}. I would like to know more about your services. Here's my message:\n\n${message}`;

      // Encode message for URL
      const encodedMessage = encodeURIComponent(whatsappMessage);

      // Your business WhatsApp number (in international format, no '+')
      const phoneNumber = '2348176620323';

      // Redirect to WhatsApp
      window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');

      // Reset form and show success message
      setFormData({ name: '', email: '', message: '' });
      setSubmitSuccess(true);

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 ${
            errors.name ? 'border-error-500' : 'border-neutral-300'
          }`}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-error-500">{errors.name}</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 ${
            errors.email ? 'border-error-500' : 'border-neutral-300'
          }`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-error-500">{errors.email}</p>
        )}
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 ${
            errors.message ? 'border-error-500' : 'border-neutral-300'
          }`}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-error-500">{errors.message}</p>
        )}
      </div>

      <div>
        <Button type="submit" variant="primary" fullWidth>
          Send Message
        </Button>

        {submitSuccess && (
          <p className="mt-3 text-sm text-success-600 text-center">
            Redirecting to WhatsApp...
          </p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
