import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { PageWrapperProps } from '../../types';

const PageWrapper: React.FC<PageWrapperProps> = ({ children, className = '' }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={`flex-grow pt-16 ${className}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageWrapper;