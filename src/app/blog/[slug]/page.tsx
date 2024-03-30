import React from 'react';
import { getPostBySlug } from '../../../lib/mdx/index';
import Navbar from '@/components/Constants/Navbar';
import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/AuthOptions';

type Props = {
  params: {
    slug: string;
  };
};

const getPageContent = async (slug: string) => {
  const { meta, content } = await getPostBySlug(slug);
  return { meta, content };
};

export async function generateMetadata({ params }: Props) {
  try {
    const { meta, content }: any = await getPageContent(params.slug);

    if (!meta) {
      return {
        title: '404',
        description: 'Page not found',
      };
    }

    return {
      title: meta.title,
      description: meta.description,
    };
  } catch (e) {
    console.log(e);
  }
}
export default async function page({ params }: Props) {
  const slug = params.slug;
  const { meta, content }: any = await getPageContent(slug);

  return (
    <div>
      <Navbar  />
      <div className='text-align  prose mx-auto max-w-3xl bg-white px-6 py-32 text-base leading-7 text-gray-700 lg:px-8'>
        <Image
          src={meta.featuredImage}
          className='h-52 w-full rounded-lg object-cover'
          alt={meta.title + ' image'}
          width={500}
          height={500}
        />
        {content}
      </div>
    </div>
  );
}
