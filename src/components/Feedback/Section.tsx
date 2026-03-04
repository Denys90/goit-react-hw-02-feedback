import React from 'react';

type SectionProps = {
  title?: string;
  children: React.ReactNode;
};

const Section = ({ title, children }: SectionProps) => {
  return (
    <div>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
};

export default Section;
