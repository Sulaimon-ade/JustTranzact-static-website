import React, { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  const [showPrompt, setShowPrompt] = useState(true);
  const phoneNumber = '2348176620323'; // your WhatsApp number
  const message = "Hello! 👋 I’d like to know more about your services.";
  const encodedMessage = encodeURIComponent(message);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPrompt(true);
    }, 15000); // show again after 15 seconds if closed

    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setShowPrompt(false);
  };

  return (
    <>
      {/* Chat prompt bubble */}
      {showPrompt && (
        <div className="fixed bottom-24 right-6 bg-white shadow-lg border border-neutral-200 rounded-lg p-3 flex items-center space-x-2 animate-fade-in z-50">
          <p className="text-sm text-neutral-700">
            💬 Need help? Chat with us on WhatsApp!
          </p>
          <button
            onClick={handleClose}
            className="text-neutral-500 hover:text-neutral-700"
          >
            <X size={16} />
          </button>
        </div>
      )}

      {/* Floating WhatsApp icon */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 animate-bounce-slow z-50"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      {/* Tailwind keyframe animations */}
      <style>
        {`
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 2.5s infinite;
          }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.5s ease-in-out;
          }
        `}
      </style>
    </>
  );
};

export default FloatingWhatsApp;