import * as React from 'react';
import { FC } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export const Hero: FC<{}> = () => {
  return (
    <div className="relative -top-56 after:bg-gradient-to-b after:from-theme-light-green after:absolute after:top-56 after:w-full after:h-5/6">
      <StaticImage
        src="https://s3.amazonaws.com/bkdev.co/bridge-hero-grayscale.jpg"
        alt="Brooklyn Bridge - Hero Image"
        layout="fullWidth"
        loading="eager"
      />
    </div>
  );
};
