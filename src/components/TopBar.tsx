import * as React from 'react';
import { FC } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

export const TopBar: FC<{}> = () => {
  return (
    <div className="fixed bg-transparent z-10 w-full">
      <div className="container h-24 mx-auto px-5 flex items-center">
        <Link to="/" className="flex group">
          <div className="rounded-full w-16 h-16 overflow-hidden bg-white border border-black">
            <StaticImage
              className="relative top-2"
              src="https://s3.amazonaws.com/bkdev.co/logo.jpg"
              alt="Logo - Brooklyn Bridge"
              loading="eager"
              width={75}
              height={50}
            />
          </div>
          <h1 className="font-sans text-2xl ml-5 text-white font-bold border-b-2 border-transparent group-hover:border-theme-lighter-green transition-colors transition-border-b group-hover:text-theme-lighter-green">
            BROOKLYN
            <br />
            DEVELOPMENT CO.
          </h1>
        </Link>
        <ul className="flex flex-grow justify-end text-white font-bold text-lg">
          <li className="mx-4">
            <a
              href="#services"
              className="px-2 py-1 border-b-2 border-transparent hover:border-theme-lighter-green transition-colors transition-border-b hover:text-theme-lighter-green">
              SERVICES
            </a>
          </li>
          <li className="mx-4">
            <a
              href="#testimonials"
              className="px-2 py-1 border-b-2 border-transparent hover:border-theme-lighter-green transition-colors transition-border-b hover:text-theme-lighter-green">
              TESTIMONIALS
            </a>
          </li>
          <li className="mx-4">
            <a
              href="#past-projects"
              className="px-2 py-1 border-b-2 border-transparent hover:border-theme-lighter-green transition-colors transition-border-b hover:text-theme-lighter-green">
              PAST PROJECTS
            </a>
          </li>
        </ul>
        <a
          href="https://calendly.com"
          target="_blank"
          rel="noopener noreferrer">
          <button
            type="button"
            className="mx-4 px-5 py-2 bg-white shadow-2xl font-bold text-lg text-gray-800 rounded-full transition-colors border border-gray-800 hover:bg-theme-lighter-green hover:text-gray-600 hover:border-gray-600">
            SCHEDULE FREE CONSULTATION
          </button>
        </a>
      </div>
    </div>
  );
};
