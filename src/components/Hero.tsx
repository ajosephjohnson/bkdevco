import * as React from 'react';
import { FC } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export const Hero: FC<{}> = () => {
  return (
    <div className="relative after:bg-gradient-to-b after:from-theme-light-green after:absolute after:w-full after:h-full after:top-0">
      <StaticImage
        src="https://s3.amazonaws.com/bkdev.co/hero-banner-desktop.jpg"
        alt="Brooklyn Bridge - Hero banner image"
        layout="fullWidth"
        loading="eager"
      />
      <div className="absolute flex justify-center items-center top-0 h-full w-full z-10">
        <div className="text-white pt-20">
          <p className="font-serif text-center text-4xl">
            <em>
              <q>
                The greatness of a community
                <br />
                is most accurately measured by the
                <br />
                compassionate actions of its members.
              </q>
            </em>
          </p>
          <br />
          <br />
          <p className="font-sans text-xl font-bold text-right">
            - CORETTA SCOTT KING
          </p>
        </div>
      </div>
    </div>
  );
};
