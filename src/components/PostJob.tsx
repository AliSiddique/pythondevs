"use client"
import React from 'react';
import { toast } from 'sonner';
import { nanoid } from 'nanoid'
import JobEntries from './JobEntries';
import { useEffect } from 'react';
import { UploadButton } from '@/lib/uploadthing';
import { UploadDropzone } from '@uploadthing/react';
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { Tag, TagInput } from './ui/tag-input';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from './ui/button';
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
type Props = {};
const FormSchema = z.object({
  topics: z.array(
    z.object({
      id: z.string(),
      text: z.string(),
    })
  ),
});


 export default function PostJob({}: Props) {
    const [color, setColor] = React.useState('')
    const [company_name, setCompany_name] = React.useState('Apple')
    const [company_email, setCompany_email] = React.useState('alisiddique10@hotmail.com')
    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
    });
  
    const [tags, setTags] = React.useState<Tag[]>([]);
  
    const { setValue } = form;
  
    function onSubmit(data: z.infer<typeof FormSchema>) {
      toast("hi");
    }
    const [company_website, setCompany_website] = React.useState('https://apple.com')
    const [company_industry, setCompany_industry] = React.useState('Software')
    const [company_description, setCompany_description] = React.useState('A great company to work for')
    const [company_logo, setCompany_logo] = React.useState('')
    const [company_linkedin, setCompany_linkedin] = React.useState('https://linkedin.com/company/apple')
    const [job_title, setJob_title] = React.useState('Backend Developer')
    const [job_type, setJob_type] = React.useState('Mid-level')
    const [job_location, setJob_location] = React.useState('California, USA')
    const [job_salary, setJob_salary] = React.useState('120,000')
    const [job_description, setJob_description] = React.useState('Need a backend developer to work on our new project')
    const [job_apply_link, setJob_apply_link] = React.useState('https://apple.com/jobs/1')
    const [remote, setRemote] = React.useState(false)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const response = await fetch('/api/post-job', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                company_name,
                company_website,
                company_industry,
                company_description,
                company_logo,
                company_linkedin,
                job_title,
                job_type,
                job_location,
                job_salary,
                job_description,
                job_apply_link,
                color,
                company_email,
                remote,

            }),
        })
        if (response.ok) {
            toast.success('Job posted successfully')
        } else {
            toast.error('Failed to post job')
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
              <JobEntries
                    company={company_name}
                    companyLogo={company_logo}
                    position={"Software Engineer"}
                    url={"https://hirewise.lexingtonthemes.com/jobs/2"}
                    type={"Full-time"}
                    salary={"$120,000"}
                    location={"San Francisco, CA"}
                    color={color}
                    setColor={setColor}
                    />
            </div>
          </div>
          <div>
            <div>
              <form
                onSubmit={handleSubmit}
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

                      <div className='sm:col-span-full'>
                        <label
                          htmlFor='email'
                          className='block text-sm font-medium leading-6 text-slate-900'
                        >
                         Company email
                        </label>
                        <div className='mt-2'>
                          <input
                            type='email'
                            value={company_email}
                            onChange={(event) => setCompany_email(event.target.value)}
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
                            value={job_title}
                            onChange={(event) => setJob_title(event.target.value)}
                            name='job-title'
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
                            value={job_type}
                            onChange={(event) => setJob_type(event.target.value)}
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
                            value={job_location}
                            onChange={(event) => setJob_location(event.target.value)}
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
                            value={job_salary}
                            onChange={(event) => setJob_salary(event.target.value)}
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
                            value={job_description}
                            onChange={(event) => setJob_description(event.target.value)}
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
                            value={company_name}
                            onChange={(event) => setCompany_name(event.target.value)}
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
                            value={company_website}
                            onChange={(event) => setCompany_website(event.target.value)}
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
                            value={company_industry}
                            onChange={(event) => setCompany_industry(event.target.value)}
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
                            value={company_linkedin}
                            onChange={(event) => setCompany_linkedin(event.target.value)}

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
                            value={company_description}
                            onChange={(event) => setCompany_description(event.target.value)}
                            rows={3}
                            className='block w-full rounded-lg border-0 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                          ></textarea>
                        </div>
                      </div>
                      <div className='col-span-full'>
                        <label
                          htmlFor='companyDescription'
                          className='block text-sm font-medium leading-6 text-slate-900'
                        >
                         Apply link
                        </label>
                        <div className='mt-2'>
                          <input
                            id='company-description'
                            name='companyDescription'
                            value={job_apply_link}
                            onChange={(event) => setJob_apply_link(event.target.value)}
                            className='block w-full rounded-lg border-0 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                          />
                        </div>
                      </div>
                      <Switch
      checked={remote}
      onChange={setRemote}
      className={classNames(
        remote ? 'bg-indigo-600' : 'bg-gray-200',
        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={classNames(
          remote ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
        )}
      />
    </Switch>
                      <input 
                            type="color" 
                            value={color} 
                            onChange={(event) => setColor(event.target.value)} 
                            />
           

 {/* <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          setCompany_logo(res[0].url);
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      /> */}

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
      <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 flex flex-col items-start"
              >
                <FormField
                  control={form.control}
                  name="topics"
                  render={({ field }) => (
                    <FormItem className="flex flex-col items-start">
                      <FormLabel className="text-left">Topics</FormLabel>
                      <FormControl>
                        <TagInput
                          {...field}
                          placeholder="Enter a topic"
                          tags={tags}
                          className="sm:min-w-[450px]"
                          setTags={(newTags) => {
                            setTags(newTags);
                            setValue("topics", newTags as [Tag, ...Tag[]]);
                          }}
                        />
                      </FormControl>
                      <FormDescription>
                        These are the topics that you&apos;re interested in.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
    </div>
  );
}

