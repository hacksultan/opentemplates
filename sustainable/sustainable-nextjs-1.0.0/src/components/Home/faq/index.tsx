'use client'
import { useState } from 'react'
import { accordionData } from '../../../app/api/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const FaqQuestion = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const pathname = usePathname()
  console.log(pathname)

  return (
    <>
      <section className='dark:bg-darkmode pt-40 pb-20'>
        <div className='container'>
          <div>
            <div className='flex flex-col gap-y-8'>
              <h2 className='text-secondary dark:text-white text-center'>
                Frequently asked questions
              </h2>
              <div className='overflow-hidden relative z-10 lg:w-770 w-full m-auto bg-white rounded-2xl shadow-light-shadwo dark:shadow-none dark:border dark:border-solid dark:border-dark_border'>
                {accordionData.map((item, index) => (
                  <div
                    key={index}
                    className={`accordion__item ${
                      activeIndex === index ? 'accordion__item--active' : ''
                    }`}>
                    <button
                      className='accordion__btn flex justify-between items-center w-full text-xl font-bold text-left cursor-pointer p-8 border-none outline-hidden bg-white dark:bg-darklight text-secondary dark:text-white hover:bg-AliceBlue dark:hover:bg-darkmode group'
                      onClick={() => toggleAccordion(index)}>
                      <span className='text-20 font-bold'>{item.title}</span>
                      <span className='rounded-full rotate-0 group-active:rotate-180 transition-width opacity-90'>
                        {activeIndex === index ? (
                          <svg
                            className='icon-minus'
                            width='14'
                            height='2'
                            viewBox='0 0 14 2'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                              d='M14 1.99799H0V-0.00201416H14V1.99799Z'
                              className='icon-fill'
                            />
                          </svg>
                        ) : (
                          <svg
                            className='icon-plus'
                            width='14'
                            height='14'
                            viewBox='0 0 14 14'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                              d='M14 7.99805H8V13.998H6V7.99805H0V5.99805H6V-0.00195312H8V5.99805H14V7.99805Z'
                              className='icon-fill'
                            />
                          </svg>
                        )}
                      </span>
                    </button>

                    <div className='accordion__content font-light max-h-0 opacity-0 overflow-hidden translate-x-4 dark:bg-darkmode'>
                      <p className='text-SlateBlue dark:text-darktext font-normal text-base px-7 py-4'>
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}

                <div className='accordion__item accordion__item--static text-center bg-AliceBlue dark:bg-darklight py-8'>
                  <p className='text-secondary dark:text-white font-normal text-base text-center pb-2'>
                    Still have questions?
                  </p>
                  <Link
                    href='/'
                    className='text-primary dark:text-darkprimary text-base font-normal hover:text-black dark:hover:text-LightApricot'>
                    Contact our support team
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FaqQuestion
