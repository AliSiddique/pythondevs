
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
 
<Hero 
title='Find your dream job'
description='Search for your next job from our database of over 1000+ jobs'

/>
    
      {/* <FeaturedJobs /> */}
      <LatestJobs />
<JobPosting />
 
    </div>
  );
}

export default page;
