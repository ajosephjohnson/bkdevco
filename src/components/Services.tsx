import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { FC } from 'react';
import { Section } from './Section';

export const Services: FC<{}> = () => {
  return (
    <Section sectionHeading="SERVICES" className="text-white">
      <div className="flex h-96">
        <div className="w-1/2 h-96 flex flex-col justify-around">
          <FontAwesomeIcon icon="code" className="mx-auto" />
          <h3 className="mx-auto">WEB DEVELOPMENT</h3>
        </div>
        <div className="w-1/2 pl-10">
          <ul>
            <CheckmarkListItem>
              Custom websites for those needing advanced UI / UX features
            </CheckmarkListItem>
            <CheckmarkListItem>
              Website performance optimization
            </CheckmarkListItem>
            <CheckmarkListItem>
              Custom backend integrations with partner APIs, automation scripts,
              and marketing pixel customizations
            </CheckmarkListItem>
          </ul>
        </div>
      </div>
    </Section>
  );
};

const CheckmarkListItem: FC<{}> = ({ children }) => {
  return (
    <li>
      <FontAwesomeIcon icon="check" />
      {children}
    </li>
  );
};
