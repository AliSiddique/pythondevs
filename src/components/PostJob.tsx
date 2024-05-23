'use client';
import React from 'react';
import { toast } from 'sonner';
import { nanoid } from 'nanoid';
import JobEntries from './JobEntries';
import { useEffect } from 'react';
import { UploadButton } from '@/lib/uploadthing';
import { UploadDropzone } from '@uploadthing/react';
import { useState } from 'react';
import { Tag, TagInput } from '@/components/ui/tag-input';
import { zodResolver } from '@hookform/resolvers/zod';
import '@uploadthing/react/styles.css';
import { draftToMarkdown } from 'markdown-draft-js';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from './ui/button';
import { loadStripe } from '@stripe/stripe-js';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Switch } from './ui/switch';
import RichTextEditor from './ui/RichTextEditor';

const formSchema = z.object({
  company_name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  company_email: z.string().email(),
  company_website: z.string().url(),
  company_linkedin: z.string().url(),
  company_industry: z.string(),
  company_description: z.string(),
  jobTitle: z.string(),
  jobType: z.string(),
  jobLocation: z.string(),
  jobDescription: z.string(),
  jobSalary: z.string(),
  color: z.string().optional(),
  remote: z.boolean().default(false),
  company_logo: z.string().optional(),
  applyLink: z.string(),
  tags: z.array(
    z.object({
      id: z.string(),
      text: z.string(),
    })
  ),
});

export default function PostJob() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      company_logo: "https://hirewise.lexingtonthemes.com/logos/github.svg",
      jobTitle: 'Software Engineer',
      company_name: 'SaasUnderOne',
      jobSalary: '120,000',
      jobLocation: 'San Francisco, CA',
      jobType: 'Full-time',
      
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const {
      company_name,
      company_website,
      company_industry,
      company_logo,
      company_description,
      company_linkedin,
      jobTitle,
      jobType,
      jobLocation,
      jobSalary,
      jobDescription,
      applyLink,
      color,
      company_email,
      remote,
      tags,
    } = values;
    const response = await fetch(`/api/post-job`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        company_name,
        company_website,
        company_logo,
        company_industry,
        company_description,
        company_linkedin,
        title: jobTitle,
        type: jobType,
        location: jobLocation,
        salary: jobSalary,
        description: jobDescription,
        apply_link: applyLink,
        color,
        company_email,
        remote,
        tags,
      }),
    });

    const data = await response.json();
    const stripePromise = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
    );
    if (stripePromise)
      await stripePromise.redirectToCheckout({ sessionId: data.id });
    if (response.ok) {
      toast.success('Job posted successfully');
    } else {
      toast.error('Failed to post job');
    }
  }
  return (
    <div>
      <dl className='mx-auto mt-8 w-full max-w-6xl items-start gap-8 text-left text-sm lg:grid-cols-3 md:grid-cols-1 px-8 py-5'>
        
        <div className=' grid w-full grid-cols-1 gap-12 lg:grid-cols-2'>
          <div>
            <div className='lg:col-span-full'>
              <p className='text-xl tracking-tighter text-black lg:text-2xl'>
                Post a job
              </p>

              <p className='mt-4 text-base text-slate-500'>
                Fill in the details below to post a job on our platform. Once
                you&apos;ve submitted the form, you&apos;ll be redirected to
                complete the payment process.
              </p>
            </div>
            <div className='mt-12 grid grid-cols-1 gap-4'>
              <JobEntries
                company={form.watch('company_name')}
                companyLogo={form.watch('company_logo') ?? 'https://hirewise.lexingtonthemes.com/logos/github.svgp'}
                position={form.watch('jobTitle')}
                url={form.watch('company_website')}
                type={form.watch('jobType')}
                salary={form.watch('jobSalary')}
                location={form.watch('jobLocation')}
                color={form.watch('color')}
                apply_link={form.watch('applyLink')}
                id={nanoid()}
                title={form.watch('jobTitle')}
              />
            </div>
          </div>
          <div>
            <div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className=' rounded-3xl border shadow-2xl shadow-slate-500/10 '
                >
                  <div>
                    <div className='grid max-w-2xl grid-cols-1 divide-y sm:grid-cols-6'>
                      <div className='col-span-full grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 p-8 sm:grid-cols-6'>
                        <div className='sm:col-span-full'>
                          <label
                            htmlFor='email'
                            className='block text-sm font-medium leading-6 text-slate-900'
                          >
                            Company email
                          </label>
                          <div className='mt-2'>
                            <FormField
                              control={form.control}
                              name='company_email'
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      placeholder='ali@saasunderone.com'
                                      {...field}
                                      className='block w-full rounded-lg border-0 bg-white py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                                    />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
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
                            <FormField
                              control={form.control}
                              name='jobTitle'
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      placeholder='Software Engineer'
                                      {...field}
                                      className='block w-full rounded-lg border-0 bg-white py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                                    />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
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
                            <FormField
                              control={form.control}
                              name='jobType'
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      placeholder='Full-time'
                                      {...field}
                                      className='block w-full rounded-lg border-0 bg-white py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                                    />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
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
                            <FormField
                              control={form.control}
                              name='jobLocation'
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      placeholder='San Francisco, CA'
                                      {...field}
                                      className='block w-full rounded-lg border-0 bg-white py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                                    />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                        <div className='sm:col-span-full'>
                          <label
                            htmlFor='salary'
                            className='block text-sm font-medium leading-6 text-slate-900'
                          >
                            Job salary
                          </label>
                          <div className='mt-2'>
                            <FormField
                              control={form.control}
                              name='jobSalary'
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      placeholder='120,000'
                                      {...field}
                                      className='block w-full rounded-lg border-0 bg-white py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                                    />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                        <div className='col-span-full'>
                          <div className='mt-2'>
                            <FormField
                              control={form.control}
                              name='jobDescription'
                              render={({ field }) => (
                                <FormItem>
                                  <Label>Job Description</Label>
                                  <FormControl>
                                    <RichTextEditor
                                      onChange={(draft) =>
                                        field.onChange(draftToMarkdown(draft))
                                      }
                                      ref={field.ref}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
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
                            <FormField
                              control={form.control}
                              name='company_name'
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      placeholder='SaasUnderOne'
                                      {...field}
                                      className='block w-full rounded-lg border-0 bg-white py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                                    />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
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
                            <FormField
                              control={form.control}
                              name='company_website'
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      placeholder='https://saasunderone.com'
                                      {...field}
                                      className='block w-full rounded-lg border-0 bg-white py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                                    />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                        <div className='sm:col-span-3'>
                          <label
                            htmlFor='company_industry'
                            className='block text-sm font-medium leading-6 text-slate-900'
                          >
                            Company industry
                          </label>
                          <div className='mt-2'>
                            <FormField
                              control={form.control}
                              name='company_industry'
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      placeholder='Software Development'
                                      {...field}
                                      className='block w-full rounded-lg border-0 bg-white py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                                    />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
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
                            <FormField
                              control={form.control}
                              name='company_linkedin'
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      placeholder='https://linkedin.com/in/shadcn'
                                      {...field}
                                      className='block w-full rounded-lg border-0 bg-white py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                                    />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                        <div className='col-span-full'>
                          <div className='mt-2'>
                            <FormField
                              control={form.control}
                              name='company_description'
                              render={({ field }) => (
                                <FormItem>
                                  <Label>Company Description</Label>
                                  <FormControl>
                                    <RichTextEditor
                                      onChange={(draft) =>
                                        field.onChange(draftToMarkdown(draft))
                                      }
                                      ref={field.ref}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>

                        <div className='col-span-full'>
                          <label
                            htmlFor='applyLink'
                            className='block text-sm font-medium leading-6 text-slate-900'
                          >
                            Apply Link
                          </label>
                          <div className='mt-2'>
                            <FormField
                              control={form.control}
                              name='applyLink'
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      placeholder='https://saasunderone.com/careers'
                                      {...field}
                                      className='block w-full rounded-lg border-0 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                                    />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                        <div className='col-span-full'>
                          <label
                            htmlFor='companyDescription'
                            className='block text-sm font-medium leading-6 text-slate-900'
                          >
                            Tags
                          </label>
                          <div className='mt-2'>
                            <FormField
                              control={form.control}
                              name='tags'
                              render={({ field }) => (
                                <FormItem className='flex flex-col items-start'>
                                  <FormControl>
                                    <TagInput
                                      {...field}
                                      placeholder='Enter a topic'
                                      tags={(field.value as Tag[]) ?? []}
                                      className='sm:min-w-[450px]'
                                      setTags={(newTags) => {
                                        form.setValue(
                                          'tags',
                                          newTags as Tag[]
                                        );
                                      }}
                                    />
                                  </FormControl>
                                  <FormDescription>
                                    These are the topics that you&apos;re
                                    interested in.
                                  </FormDescription>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <div className='col-span-full grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 pt-8 sm:grid-cols-6'>
                            <div className='sm:col-span-3'>
                              <label
                                htmlFor='color'
                                className='block text-sm font-medium leading-6 text-slate-900'
                              >
                                Company Color
                              </label>
                              <FormField
                                control={form.control}
                                name='color'
                                render={({ field }) => (
                                  <FormItem>
                                    <FormControl>
                                      <Input
                                        type='color'
                                        {...field}
                                        className='block w-full rounded-lg border-0 bg-white py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                                      />
                                    </FormControl>

                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            <div className='sm:col-span-3 '>
                              <label
                                htmlFor='remote'
                                className='block text-sm font-medium leading-6 text-slate-900'
                              >
                                Remote
                              </label>
                              <FormField
                                control={form.control}
                                name='remote'
                                render={({ field }) => (
                                  <FormItem>
                                    <FormControl>
                                      <Switch
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                      />
                                    </FormControl>

                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>

                          <div className='col-span-full items-start justify-start pt-3'>
                            <label
                              htmlFor='companyDescription'
                              className='block text-sm font-medium leading-6 text-slate-900'
                            >
                              Company Logo
                            </label>
                            <div className='col-span-1 mt-2'>
                              <FormField
                                control={form.control}
                                name='company_logo'
                                render={({ field }) => (
                                  <FormItem>
                                    <FormControl>
                                      <UploadButton
                                        endpoint='imageUploader'
                                        className='block text-sm font-medium leading-6 text-slate-900'
                                        onClientUploadComplete={(res) => {
                                          form.setValue(
                                            'company_logo',
                                            res[0].url
                                          );
                                        }}
                                        onUploadError={(error: Error) => {
                                          // Do something with the error.
                                          alert(`ERROR! ${error.message}`);
                                        }}
                                      />
                                    </FormControl>

                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-span-full p-8'>
                        <Button
                          type='submit'
                          className='z-50 inline-flex w-full items-center justify-center rounded-full  px-5 py-3 text-center text-sm text-white duration-200 hover:bg-purple-50 hover:text-purple-500 focus:outline-none focus:ring-0 focus:ring-purple-500 focus:ring-offset-2 bg-[#4584b6] md:focus:ring-2'
                        >
                          Submit
                        </Button>
                        <p className='mt-4 text-center text-xs text-slate-500'>
                          By clicking the button, you agree to our{' '}
                          <a href='#' className=' hover:underline'>
                            Terms of Service
                          </a>{' '}
                          and{' '}
                          <a href='#' className=' hover:underline'>
                            Privacy Policy
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </dl>
    </div>
  );
}
