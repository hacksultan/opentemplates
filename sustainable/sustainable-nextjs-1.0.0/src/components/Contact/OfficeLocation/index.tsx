import React from 'react'
import Link from 'next/link'

const Location = () => {
  const breadcrumbLinks = [
    { href: '/', text: 'Home' },
    { href: '/contact', text: 'Contact' },
  ]
  return (
    <>
      <section className='md:py-24 py-10 dark:bg-darkmode'>
        <div className='container'>
          <div className=''>
            <div className='grid lg:grid-cols-9 md:grid-cols-6 grid-cols-1 gap-30 border-b border-solid border-BorderLine dark:border-dark_border pb-11'>
              <div className='col-span-3'>
                <h2 className='text-secondary dark:text-white max-w-219 sm:text-[40px] sm:leading-[3rem] text-[28px] leading-[2.25rem] font-bold'>
                  Pune Head Office
                </h2>
              </div>
              <div className='col-span-3'>
                <p className='sm:text-2xl text-xl text-secondary dark:text-darktext font-normal max-w-266 leading-8'>
                  4292 Mapleview Drive Greenfield Zip code 38230
                </p>
              </div>
              <div className='col-span-3'>
                <Link
                  href='mailto:headoffice@sustainable.com'
                  className='sm:text-2xl text-xl text-secondary dark:text-darkprimary font-medium underline dark:hover:text-white hover:text-primary'>
                  headoffice@sustainable.com
                </Link>
                <Link
                  href='tel:731-621-5503'
                  className='sm:text-2xl text-xl text-secondary dark:text-primary flex items-center gap-2 hover:text-opacity-100 w-fit dark:hover:text-white hover:text-primary'>
                  <span className='text-lightPrimary'>Call</span>731-621-5503
                </Link>
              </div>
            </div>
            <div className='grid lg:grid-cols-9 md:grid-cols-6 grid-cols-1 gap-30 pt-12'>
              <div className='col-span-3'>
                <h2 className='text-secondary dark:text-white max-w-219 sm:text-[40px] sm:leading-[3rem] text-[28px] leading-[2.25rem] font-bold'>
                  Bengaluru Office
                </h2>
              </div>
              <div className='col-span-3'>
                <p className='sm:text-2xl text-xl text-secondary dark:text-darktext font-normal max-w-266 leading-8'>
                  3502 Marcus Street Geraldine Zip code 35974
                </p>
              </div>
              <div className='col-span-3'>
                <Link
                  href='mailto:Office@sustainable.com'
                  className='sm:text-2xl text-xl text-secondary dark:text-darkprimary font-medium underline dark:hover:text-white hover:text-primary'>
                  Office@sustainable.com
                </Link>
                <Link
                  href='tel:731-235-7993'
                  className='sm:text-2xl text-secondary dark:text-primary text-xl flex items-center gap-2 w-fit dark:hover:text-white hover:text-primary'>
                  <span className='text-lightPrimary'>Call</span>731-235-7993
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Location
