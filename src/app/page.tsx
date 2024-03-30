
import FeaturedJobs from '@/components/FeaturedJobs';
import Hero from '@/components/Hero';
import JobPosting from '@/components/JobPosting';
import LatestJobs from '@/components/LatestJobs';
import React from 'react';
import axios from 'axios';
import { db } from '../../prisma/client';

type Props = {};

async function page({}: Props) {


  return (
    <div>
 
<Hero />
    
      {/* <FeaturedJobs /> */}
      <LatestJobs />
<JobPosting />
 
    </div>
  );
}

export default page;
