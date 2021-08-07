import * as React from 'react';
import { FC } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

export const TopBar: FC<{}> = () => {
  return (
    <div className="bg-theme-primary-green border-b border-gray-400">
      <div className="container h-24 mx-auto px-5 flex items-center">
        <Link to="/" className="flex group">
          <div className="rounded-full w-16 h-16 overflow-hidden bg-white border border-black">
            <StaticImage
              className="relative top-2"
              src="../images/logo.jpg"
              alt="Logo - Brooklyn Bridge"
              width={75}
              height={50}
            />
          </div>
          <h1 className="font-sans text-2xl ml-5 text-white font-bold border-b-2 border-transparent group-hover:border-white">
            BROOKLYN
            <br />
            DEVELOPMENT CO.
          </h1>
        </Link>
        <ul className="flex flex-grow justify-end text-white font-bold text-lg">
          <li className="mx-4">
            <a
              href="#services"
              className="px-2 py-1 border-b-2 border-transparent hover:border-white">
              SERVICES
            </a>
          </li>
          <li className="mx-4">
            <a
              href="#testimonials"
              className="px-2 py-1 border-b-2 border-transparent hover:border-white">
              TESTIMONIALS
            </a>
          </li>
          <li className="mx-4">
            <a
              href="#past-projects"
              className="px-2 py-1 border-b-2 border-transparent hover:border-white">
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
            className="mx-4 px-5 py-2 bg-white shadow-2xl font-bold text-lg text-gray-800 rounded-full transition-colors border border-gray-800 hover:bg-theme-light-green hover:text-gray-900 hover:border-gray-900">
            SCHEDULE FREE CONSULTATION
          </button>
        </a>
      </div>
    </div>
  );
};
