import * as React from 'react';
import { FC } from 'react';

export const Section: FC<{ sectionHeading: string }> = ({
  children,
  sectionHeading,
}) => {
  return (
    <div className="bg-theme-primary-green">
      <div className="relative -top-2 h-4 w-4 bg-white transform rotate-45 mx-auto"></div>
      <h2 className="pb-11 pt-11 text-center text-white text-4xl font-serif font-bold">
        {sectionHeading}
      </h2>
      {children}
    </div>
  );
};
