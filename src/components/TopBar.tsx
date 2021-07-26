import * as React from 'react';
import { FC } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export const TopBar: FC<{}> = () => {
  return (
    <div className="font-mono h-20 bg-green">
      <StaticImage
        className="rounded-full"
        src="../images/logo.jpg"
        alt="Logo image - Brooklyn Bridge"
        width={50}
        height={50}
      />
      Brooklyn Development Co.
    </div>
  );
};
