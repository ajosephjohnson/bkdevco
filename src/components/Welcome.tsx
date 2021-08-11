import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { FC } from 'react';

export const Welcome: FC<{}> = () => {
  return (
    <div className="flex justify-around items-center h-80 w-3/5 mx-auto">
      <span className="text-9xl text-theme-primary-green">{'{'}</span>
      <StaticImage
        className="rounded-full"
        src="https://s3.amazonaws.com/bkdev.co/me.png"
        alt="Me. Alan Johnson. Profile picture."
        loading="eager"
        width={200}
      />
      <span className="text-2xl text-center">
        <p className="font-serif">
          <b>Hi 👋 - I’m Alan.</b>
        </p>
        <br />
        <p className="font-sans">
          I’d love to help you acquire more
          <br /> paying customers by{' '}
          <strong className="text-theme-primary-green">
            improving the <br />
            online presence of your business.
          </strong>
        </p>
      </span>
      <span className="text-9xl text-theme-primary-green">{'}'}</span>
    </div>
  );
};
