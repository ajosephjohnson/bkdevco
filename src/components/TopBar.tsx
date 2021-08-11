import * as React from 'react';
import { FC } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { useScrollPosition } from '../hooks';

const SECTION_NAV_LINKS = ['services', 'testimonials', 'past-projects'];

export const TopBar: FC<{}> = () => {
  const { y: windowYPosition } = useScrollPosition();

  // For every 2px scrolled the top bar gains 1% of opacity until fully opaque.
  const backgroundOpacity =
    windowYPosition <= 200
      ? `bg-opacity-${
          windowYPosition === 0 ? 0 : Math.floor(windowYPosition / 2)
        }`
      : 'bg-opacity-100 shadow-2xl';

  return (
    <div
      className={
        'fixed bg-theme-primary-green z-20 w-full font-sans transition-box-shadow duration-500 ' +
        backgroundOpacity
      }>
      <div className="container px-5 h-24 mx-auto flex items-center">
        <Link to="/" className="px-1 py-1 transition-opacity hover:opacity-80">
          <MemoizedLogoImage />
        </Link>
        <ul className="flex flex-grow justify-end text-white font-bold text-lg">
          {SECTION_NAV_LINKS.map(id => (
            <li className="mx-4" key={id}>
              <a
                href={`#${id}`}
                className="px-2 py-1 border-b-2 border-transparent hover:border-white transition hover:opacity-80">
                {id.split('-').join(' ').toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://calendly.com"
          target="_blank"
          rel="noopener noreferrer">
          <button
            type="button"
            className="ml-4 px-5 py-2 bg-white shadow-2xl font-bold text-lg text-gray-800 rounded-full transition-opacity border border-gray-800 hover:opacity-80">
            SCHEDULE FREE CONSULTATION
          </button>
        </a>
      </div>
    </div>
  );
};

const LogoImage: FC<{}> = () => (
  <StaticImage
    src="https://s3.amazonaws.com/bkdev.co/logo-branding-white.png"
    alt="Main logo - Brooklyn Development Co."
    loading="eager"
    height={75}
  />
);

/**
 * Memozied to eliminate initial flicker on state change due to scroll handler
 */
const MemoizedLogoImage: FC<{}> = React.memo(LogoImage);
