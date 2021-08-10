import * as React from 'react';
import { FC } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

export const TopBar: FC<{}> = () => {
  return (
    <div className="fixed bg-transparent z-20 w-full font-sans">
      <div className="container px-5 h-24 mx-auto flex items-center">
        <Link to="/" className="px-1 py-1 transition-opacity hover:opacity-90">
          <StaticImage
            src="https://s3.amazonaws.com/bkdev.co/logo-branding-white.png"
            alt="Main logo - Brooklyn Development Co."
            loading="eager"
            height={75}
          />
        </Link>
        <ul className="flex flex-grow justify-end text-white font-bold text-lg">
          <li className="mx-4">
            <a
              href="#services"
              className="px-2 py-1 border-b-2 border-transparent hover:border-white transition hover:opacity-90">
              SERVICES
            </a>
          </li>
          <li className="mx-4">
            <a
              href="#testimonials"
              className="px-2 py-1 border-b-2 border-transparent hover:border-white transition hover:opacity-90">
              TESTIMONIALS
            </a>
          </li>
          <li className="mx-4">
            <a
              href="#past-projects"
              className="px-2 py-1 border-b-2 border-transparent hover:border-white transition hover:opacity-90">
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
            className="ml-4 px-5 py-2 bg-white shadow-2xl font-bold text-lg text-gray-800 rounded-full transition-opacity border border-gray-800 hover:opacity-90">
            SCHEDULE FREE CONSULTATION
          </button>
        </a>
      </div>
    </div>
  );
};
