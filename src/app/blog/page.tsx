import { getAllPosts } from '../../lib/mdx/index';

import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/AuthOptions';
import Navbar from '@/components/Constants/Navbar';
import Footer from '@/components/Constants/Footer';
export const metadata = {
  title: 'Blogs',
  description: 'Blogs for university life and accomodation',
};
export default async function Home() {
  const posts = await getAllPosts();

  const session = await getServerSession(authOptions);
  return (
    <div>
      <Navbar session={session} />

      <section className='body-font text-gray-600'>
        <div className='container mx-auto max-w-7xl px-5 py-24'>
          <h1 className='title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl'>
            Blogs
          </h1>
          <div className='-m-4 flex flex-wrap'>
            {posts.map((blog: any) => (
              <div className='p-4 md:w-1/3'>
                <div className='h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60'>
                  <img
                    className='w-full object-cover object-center md:h-36 lg:h-48'
                    src={blog.meta.featuredImage}
                    alt='blog'
                  />
                  <div className='p-6'>
                    <h1 className='title-font mb-3 text-lg font-medium text-gray-900'>
                      {blog.meta.title}
                    </h1>
                    <p className='mb-3 leading-relaxed'>
                      {blog.meta.description}
                    </p>
                    <div className='flex flex-wrap items-center '>
                      <Link
                        href={`/blog/${blog.meta.slug}`}
                        className='inline-flex items-center text-green-500 md:mb-2 lg:mb-0'
                      >
                        Read
                        <svg
                          className='ml-2 h-4 w-4'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          strokeWidth='2'
                          fill='none'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M5 12h14'></path>
                          <path d='M12 5l7 7-7 7'></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
