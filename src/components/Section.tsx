import * as React from 'react';
import { FC } from 'react';

export const Section: FC<{ sectionHeading: string; className: string }> = ({
  children,
  sectionHeading,
  className,
}) => {
  return (
    <div
      className={'bg-theme-primary-green' + (className ? ` ${className}` : '')}>
      <div className="relative -top-2 h-4 w-4 bg-white transform rotate-45 mx-auto"></div>
      <h2 className="pb-11 pt-11 text-center text-4xl font-serif font-bold">
        {sectionHeading}
      </h2>
      {children}
    </div>
  );
};
