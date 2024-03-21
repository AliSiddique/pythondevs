import FeaturedJobs from '@/components/FeaturedJobs';
import Hero from '@/components/Hero';
import JobPosting from '@/components/JobPosting';
import LatestJobs from '@/components/LatestJobs';
import React from 'react';

type Props = {};

function page({}: Props) {
  return (
    <div>
 
<Hero />
    
      <FeaturedJobs />
      <LatestJobs />
<JobPosting />
 
    </div>
  );
}

export default page;
