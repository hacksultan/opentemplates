import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getImgPath } from '@/utils/imagePath'

const ContactForm = () => {
  return (
    <>
      <section className='dark:bg-darkmode pt-0 md:pb-24 pb-10'>
        <div className='container'>
          <div className='grid lg:grid-cols-12 grid-cols-1 md:gap-20 gap-10'>
            <div className='md:col-span-6 col-span-1'>
              <h2 className='max-w-277 sm:text-[40px] sm:leading-[3rem] text-[28px] leading-[2.25rem] font-bold text-secondary dark:text-white mb-9'>
                Get Online Consultation
              </h2>
              <form className='flex flex-wrap w-full m-auto justify-between'>
                <div className='sm:flex gap-3 w-full'>
                  <div className='mx-0 my-2.5 flex-1'>
                    <label
                      htmlFor='first-name'
                      className='pb-3 inline-block text-base text-SlateBlue dark:text-darktext'>
                      First Name*
                    </label>
                    <input
                      id='first-name'
                      className='w-full text-base px-4 rounded-lg py-2.5 border-BorderLine dark:border-dark_border border-solid dark:text-white  dark:bg-darkmode border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:border-solid focus:outline-0'
                      type='text'
                    />
                  </div>
                  <div className='mx-0 my-2.5 flex-1'>
                    <label
                      htmlFor='last-name'
                      className='pb-3 inline-block text-base text-SlateBlue dark:text-darktext'>
                      Last Name*
                    </label>
                    <input
                      id='last-name'
                      className='w-full text-base px-4 py-2.5 rounded-lg border-BorderLine dark:border-dark_border border-solid dark:text-white  dark:bg-darkmode border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:border-solid focus:outline-0'
                      type='text'
                    />
                  </div>
                </div>
                <div className='sm:flex gap-3 w-full'>
                  <div className='mx-0 my-2.5 flex-1'>
                    <label
                      htmlFor='email'
                      className='pb-3 inline-block text-base text-SlateBlue dark:text-darktext'>
                      Email address*
                    </label>
                    <input
                      id='email'
                      type='email'
                      className='w-full text-base px-4 py-2.5 rounded-lg border-BorderLine dark:border-dark_border border-solid dark:text-white  dark:bg-darkmode border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:border-solid focus:outline-0'
                    />
                  </div>
                  <div className='mx-0 my-2.5 flex-1'>
                    <label
                      htmlFor='Specialist'
                      className='pb-3 inline-block text-base text-SlateBlue dark:text-darktext'>
                      Specialist*
                    </label>
                    <select
                      id='Specialist'
                      className='w-full text-base px-4 py-2.5 rounded-lg border-BorderLine dark:text-white border-solid dark:bg-darkmode border transition-all duration-500 focus:border-primary dark:focus:border-primary dark:border-dark_border focus:border-solid focus:outline-0'>
                      <option value=''>Choose a specialist</option>
                      <option value='Baking &amp; Pastry'>
                        Choose a specialist
                      </option>
                      <option value='Exotic Cuisine'>Exotic Cuisine</option>
                      <option value='French Desserts'>French Desserts</option>
                      <option value='Seafood &amp; Wine'>
                        Choose a specialist
                      </option>
                    </select>
                  </div>
                </div>
                <div className='sm:flex gap-3 w-full'>
                  <div className='mx-0 my-2.5 flex-1'>
                    <label
                      htmlFor='date'
                      className='pb-3 inline-block text-base text-SlateBlue dark:text-darktext'>
                      Date*
                    </label>
                    <input
                      id='date'
                      className='w-full text-base px-4 rounded-lg  py-2.5 outline-hidden dark:text-white dark:bg-darkmode border-BorderLine border-solid border transition-all duration-500 focus:border-primary dark:focus:border-primary dark:border-dark_border focus:border-solid focus:outline-0'
                      type='date'
                    />
                  </div>
                  <div className='mx-0 my-2.5 flex-1'>
                    <label
                      htmlFor='time'
                      className='pb-3 inline-block text-base text-SlateBlue dark:text-darktext'>
                      Time*
                    </label>
                    <input
                      id='time'
                      className='w-full text-base px-4 rounded-lg py-2.5 border-BorderLine outline-hidden dark:text-white dark:bg-darkmode border-solid border transition-all duration-500 focus:border-primary dark:focus:border-primary dark:border-dark_border focus:border-solid focus:outline-0'
                      type='time'
                    />
                  </div>
                </div>
                <div className='mx-0 my-2.5 w-full'>
                  <Link
                    href='#'
                    className='bg-primary rounded-lg text-white py-4 px-8 mt-4 inline-block hover:bg-blue-700'
                    type='submit'>
                    Make an appointment
                  </Link>
                </div>
              </form>
            </div>
            <div className='sm:col-span-6 col-span-1'>
              <Image
                src={getImgPath('/images/contact/contact.jpg')}
                alt='Contact'
                width={0}
                height={0}
                quality={100}
                sizes='100vh'
                className='bg-no-repeat bg-contain rounded-lg w-526 h-650'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactForm
