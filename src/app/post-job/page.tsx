import React from 'react';
import { db } from '../../../prisma/client';
import { toast } from 'sonner';
import { nanoid } from 'nanoid'

type Props = {};

const getJobPost = async () => {
  const jobPost = await db.jobPost.findMany();
  return jobPost;
};

async function page({}: Props) {
  async function uploadJob(formData: FormData) {
    'use server';
    if (!formData) return;
    try {
      await db.jobPost.create({
        data: {
          title:"title",
          department: formData.get('department') as string,
          type: "type",
          location: "location",
          salary: 130,
          description: "formData.get('description') as string,",
          company_name: "formData.get('companyName') as string",
          company_website: "formData.get('companyWebsite') as string",
          company_logo: "formData.get('companyLogo') as string",
          linkedin_in: "formData.get('linkedin') as string",
          company_description: "formData.get('companyDescription') as string",
          email: "formData.get('email') as string",
          featured: false, // Add the missing 'featured' property
        },
      });
      console.log('Job posted successfully');
    } catch (error) {
      console.error('Failed to post job', error);
    }
  }

  return (
    <div>
      <dl className='mx-auto max-w-6xl mt-8 w-full items-start gap-8 text-left text-sm lg:grid-cols-3'>
        <div className=' grid w-full grid-cols-1 gap-12 lg:grid-cols-2'>
          <div>
            <div className='lg:col-span-full'>
              <p className='text-xl font-normal tracking-tighter text-black lg:text-2xl'>
                Find your next candidate
              </p>

              <p className='mt-4 text-base text-slate-500'>
                Unlock a vast array of exceptional talent and propel your
                company's success to new heights of achievement.
              </p>
            </div>
            <div className='mt-12 grid grid-cols-1 gap-4'>
              <div className=' rounded-3xl border p-8 shadow-2xl shadow-slate-500/10 '>
                <div className='gap-3 lg:inline-flex lg:items-center'>
                  <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-purple-700 via-purple-500 to-purple-300 text-white'>
                    1
                  </div>
                  <p className='mt-4 text-base font-medium text-black lg:mt-0'>
                    Add job poster details
                  </p>
                </div>

                <p className='mt-2 text-sm text-slate-500'>
                  Capture essential details about the job poster, including
                  their name, contact information, and any specific
                  requirements.
                </p>
              </div>
              <div className=' rounded-3xl border p-8 shadow-2xl shadow-slate-500/10 '>
                <div className='gap-3 lg:inline-flex lg:items-center'>
                  <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-purple-700 via-purple-500 to-purple-300 text-white'>
                    1
                  </div>

                  <p className='mt-4 text-base font-medium text-black lg:mt-0'>
                    Add all details
                  </p>
                </div>
                <p className='mt-2 text-sm text-slate-500'>
                  Include comprehensive information about the job itself, such
                  as the job title, description, requirements or
                  responsibilities.
                </p>
              </div>
              <div className=' rounded-3xl border p-8 shadow-2xl shadow-slate-500/10 '>
                <div className='gap-3 lg:inline-flex lg:items-center'>
                  <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-purple-700 via-purple-500 to-purple-300 text-white'>
                    3
                  </div>

                  <p className='mt-4 text-base font-medium text-black lg:mt-0'>
                    Add company details
                  </p>
                </div>
                <p className='mt-2 text-sm text-slate-500'>
                  Provide in-depth information about the company posting the
                  job, including the company name, industry, location, website,
                  size, culture.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <form
                action={uploadJob}
                className=' rounded-3xl border shadow-2xl shadow-slate-500/10 '
              >
                <div>
                  <div className='grid max-w-2xl grid-cols-1 divide-y sm:grid-cols-6'>
                    <div className='col-span-full grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 p-8 sm:grid-cols-6'>
                      {/* <div className='sm:col-span-3'>
                        <label
                          htmlFor='email'
                          className='block text-sm font-medium leading-6 text-slate-900'
                        >
                          Job title
                        </label>
                        <div className='mt-2'>
                          <input
                            type='text'
                            name='first-name'
                            id='first-name'
                            className='block w-full rounded-lg border-0 bg-white py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                          />
                        </div>
                      </div> */}

                      <div className='sm:col-span-3'>
                        <label
                          htmlFor='email'
                          className='block text-sm font-medium leading-6 text-slate-900'
                        >
                         Email
                        </label>
                        <div className='mt-2'>
                          <input
                            type='email'
                            name='email'
                            id='last-name'
                            className='block w-full rounded-lg border-0 bg-white py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                          />
                        </div>
                      </div>
                    </div>

                    <div className='col-span-full grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 p-8 sm:grid-cols-6'>
                      <div className='sm:col-span-full'>
                        <label
                          htmlFor='title'
                          className='block text-sm font-medium leading-6 text-slate-900'
                        >
                          Job title
                        </label>
                        <div className='mt-2'>
                          <input
                            type='text'
                            name='job-title'
                            className='block w-full rounded-lg border-0 bg-white py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                          />
                        </div>
                      </div>
                      <div className='sm:col-span-3'>
                        <label
                          htmlFor='department'
                          className='block text-sm font-medium leading-6 text-slate-900'
                        >
                          Job department
                        </label>
                        <div className='mt-2'>
                          <input
                            type='text'
                            name='department'
                            id='job-department'
                            className='block w-full rounded-lg border-0 bg-white py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                          />
                        </div>
                      </div>

                      <div className='sm:col-span-3'>
                        <label
                          htmlFor='type'
                          className='block text-sm font-medium leading-6 text-slate-900'
                        >
                          Job type
                        </label>
                        <div className='mt-2'>
                          <input
                            type='text'
                            name='type'
                            id='job-type'
                            className='block w-full rounded-lg border-0 bg-white py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                          />
                        </div>
                      </div>
                      <div className='sm:col-span-3'>
                        <label
                          htmlFor='location'
                          className='block text-sm font-medium leading-6 text-slate-900'
                        >
                          Job location
                        </label>
                        <div className='mt-2'>
                          <input
                            type='text'
                            name='location'
                            id='job-location'
                            className='block w-full rounded-lg border-0 bg-white py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                          />
                        </div>
                      </div>
                      <div className='sm:col-span-3'>
                        <label
                          htmlFor='salary'
                          className='block text-sm font-medium leading-6 text-slate-900'
                        >
                          Job salary
                        </label>
                        <div className='mt-2'>
                          <input
                            type='text'
                            name='salary'
                            id='job-salary'
                            className='block w-full rounded-lg border-0 bg-white py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                          />
                        </div>
                      </div>
                      <div className='col-span-full'>
                        <label
                          htmlFor='description'
                          className='block text-sm font-medium leading-6 text-slate-900'
                        >
                          Description
                        </label>
                        <div className='mt-2'>
                          <textarea
                            id='description'
                            name='description'
                            rows={3}
                            className='block w-full rounded-lg border-0 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <div className='col-span-full grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 p-8 sm:grid-cols-6'>
                      <div className='sm:col-span-3'>
                        <label
                          htmlFor='companyName'
                          className='block text-sm font-medium leading-6 text-slate-900'
                        >
                          Company name
                        </label>
                        <div className='mt-2'>
                          <input
                            type='text'
                            name='companyName'
                            id='company-name'
                            className='block w-full rounded-lg border-0 bg-white py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                          />
                        </div>
                      </div>

                      <div className='sm:col-span-3'>
                        <label
                          htmlFor='companyWebsite'
                          className='block text-sm font-medium leading-6 text-slate-900'
                        >
                          Company website
                        </label>
                        <div className='mt-2'>
                          <input
                            type='text'
                            name='companyWebsite'
                            id='company-website'
                            className='block w-full rounded-lg border-0 bg-white py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                          />
                        </div>
                      </div>
                      <div className='sm:col-span-3'>
                        <label
                          htmlFor='companyLogo'
                          className='block text-sm font-medium leading-6 text-slate-900'
                        >
                          Company industry
                        </label>
                        <div className='mt-2'>
                          <input
                            type='text'
                            name='companyLogo'
                            id='company-industry'
                            className='block w-full rounded-lg border-0 bg-white py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                          />
                        </div>
                      </div>
                      <div className='sm:col-span-3'>
                        <label
                          htmlFor='linkedin'
                          className='block text-sm font-medium leading-6 text-slate-900'
                        >
                          Linkedin Profile
                        </label>
                        <div className='mt-2'>
                          <input
                            type='text'
                            name='linkedin'
                            id='linkedin'
                            className='block w-full rounded-lg border-0 bg-white py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                          />
                        </div>
                      </div>
                      <div className='col-span-full'>
                        <label
                          htmlFor='companyDescription'
                          className='block text-sm font-medium leading-6 text-slate-900'
                        >
                          Company Description
                        </label>
                        <div className='mt-2'>
                          <textarea
                            id='company-description'
                            name='companyDescription'
                            rows={3}
                            className='block w-full rounded-lg border-0 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className='col-span-full p-8'>
                      <button
                        type='submit'
                        className='inline-flex w-full items-center justify-between rounded-full bg-purple-500 px-5 py-3 text-sm leading-4 text-white duration-200 hover:bg-purple-50 hover:text-purple-500 focus:outline-none focus:ring-0 focus:ring-purple-500 focus:ring-offset-2 md:focus:ring-2'
                      >
                        Submit <span>&rarr;</span>
                      </button>
                      <p className='mt-4 text-center text-xs text-slate-500'>
                        We will get back to you in less than 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </dl>
    </div>
  );
}

export default page;
