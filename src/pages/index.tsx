import * as React from 'react';
import { FC } from 'react';
import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import { ContactBar } from '../components/ContactBar';
import { Welcome } from '../components/Welcome';
import { Services } from '../components/Services';
import 'tailwindcss/tailwind.css';
import '../fa-icons';

const IndexPage: FC<{}> = () => (
  <Layout>
    <Hero />
    <ContactBar />
    <Welcome />
    <Services />
  </Layout>
);

export default IndexPage;
