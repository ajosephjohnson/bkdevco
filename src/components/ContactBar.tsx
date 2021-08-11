import * as React from 'react';
import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SOCIAL_MEDIA_LINKS } from '../social-media-links';

const FA_ICON_NAMES = {
  facebook: 'facebook-f',
  instagram: 'instagram',
  twitter: 'twitter',
  linkedIn: 'linkedin-in',
} as const;

export const ContactBar: FC<{}> = () => {
  return (
    <div className="bg-theme-primary-green font-sans text-2xl font-bold">
      <address className="h-14 w-1/2 mx-auto flex justify-around items-center not-italic">
        <a
          className="hover:opacity-80 transition-opacity text-white py-1 px-1"
          href="mailto:alan@bkdev.co"
          rel="noopener noreferrer"
          target="_blank">
          <FontAwesomeIcon icon="envelope" className="mr-2 relative top-px" />
          alan@bkdev.co
        </a>
        <a
          className="hover:opacity-80 transition-opacity text-white py-1 px-1"
          href="tel:+1-347-508-5787"
          rel="noopener noreferrer"
          target="_blank">
          <FontAwesomeIcon icon="phone-alt" className="mr-2 relative top-px" />
          (347) 508-5787
        </a>
        <div className="flex w-48 justify-between text-theme-primary-green">
          {(
            Object.keys(FA_ICON_NAMES) as Array<keyof typeof FA_ICON_NAMES>
          ).map(socialMediaType => (
            <a
              key={socialMediaType}
              className="hover:opacity-80 transition-opacity py-1 px-1"
              href={SOCIAL_MEDIA_LINKS[socialMediaType]}
              rel="noopener noreferrer"
              target="_blank">
              <div className="w-8 h-8 flex justify-center items-center bg-white rounded-full">
                <FontAwesomeIcon
                  icon={['fab', FA_ICON_NAMES[socialMediaType]]}
                />
              </div>
            </a>
          ))}
        </div>
      </address>
    </div>
  );
};
