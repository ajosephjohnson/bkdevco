import * as React from 'react';
import { FC } from 'react';
import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import 'tailwindcss/tailwind.css';

const IndexPage: FC<{}> = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export default IndexPage;
