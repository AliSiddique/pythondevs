import React from 'react';
import Navbar from '../Constants/Navbar';
import Footer from '../Constants/Footer';
import Hero from '../Hero';
import Stats from '../Stats';
import Features from '../Features';
import Testimonials from '../Testimonials';
import Pricing from '../Pricing';
import FAQ from '../FAQ';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/AuthOptions';
import FeaturedJobs from '../FeaturedJobs';

type Props = {};

export default async function LandingpageOne({}: Props) {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <Navbar session={session} />
      <Hero />
      <FeaturedJobs />
      <Stats />
      <Features />
      <Testimonials />
      <Pricing session={session} />
      <FAQ />
      <Footer />
    </div>
  );
}
