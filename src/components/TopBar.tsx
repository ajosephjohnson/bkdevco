import * as React from 'react';
import { FC } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export const TopBar: FC<{}> = () => {
  return (
    <div className="font-mono h-24 bg-green flex items-center border-b border-gray-400">
      <div className="rounded-full w-16 h-16 ml-5 mr-5 overflow-hidden bg-white border border-black">
        <StaticImage
          className="relative top-2"
          src="../images/logo.jpg"
          alt="Logo - Brooklyn Bridge"
          width={75}
          height={50}
        />
      </div>
      <h1 className="font-sans text-3xl text-white font-semibold tracking-wider">
        BROOKLYN DEVELOPMENT CO.
      </h1>
    </div>
  );
};
