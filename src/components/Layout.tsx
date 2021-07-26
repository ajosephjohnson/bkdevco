import * as React from 'react';
import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { TopBar } from './TopBar';

export const Layout: FC<{}> = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Brooklyn Development Co.</title>
      </Helmet>
      <TopBar />
      {children}
    </>
  );
};
