import * as React from 'react';
import { FC } from 'react';
import { Helmet } from 'react-helmet';
import 'tailwindcss/tailwind.css';

const IndexPage: FC<{}> = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Brooklyn Development Co.</title>
        <link rel="canonical" href="http://bkdev.co/" />
      </Helmet>
      <div>Hello world</div>
    </>
  );
};

export default IndexPage;
