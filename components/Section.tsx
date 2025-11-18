
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">{title}</h2>
      <div className="text-gray-300">
        {children}
      </div>
    </section>
  );
};

export default Section;
