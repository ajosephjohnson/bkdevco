import * as React from 'react';
import { FC } from 'react';
import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import { ContactBar } from '../components/ContactBar';
import 'tailwindcss/tailwind.css';
import '../icons';

const IndexPage: FC<{}> = () => {
  return (
    <Layout>
      <Hero />
      <ContactBar />
    </Layout>
  );
};

export default IndexPage;
