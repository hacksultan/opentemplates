import React from 'react'
import Link from 'next/link'
import { cardData } from '../../../app/api/data'
import { getImgPath } from '@/utils/imagePath'

const BuildAmazing = ({ isSpace }: { isSpace: boolean }) => {
  return (
    <>
      <section className={`${isSpace ? '' : ''} dark:bg-darkmode pt-40 pb-20`}>
        <div className='container'>
          <div className='grid lg:grid-cols-2 grid-cols-1 items-center'>
            <div
              className='col-span-1 lg:pb-0 pb-7'
              data-aos='fade-right'
              data-aos-delay='200'
              data-aos-duration='1000'>
              <h2 className='text-secondary dark:text-white max-w-420 pb-8'>
                Build amazing websites and landing pages with ease using
                Sustaniable
              </h2>
              <p className='text-base font-normal text-SlateBlue dark:text-darktext max-w-408'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elited do
                eiusmod tempor incididunt.
              </p>
              <div className='pt-6 flex flex-col gap-y-5'>
                <div className='flex items-center gap-2'>
                  <svg
                    width='25'
                    height='25'
                    viewBox='0 0 25 25'
                    fill='#F3FAFF'
                    className='dark:fill-primary/20 fill-primary/20'
                    xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='12.5' cy='12.5' r='12.5' />
                    <g clipPath='url(#clip0_7_836)'>
                      <path
                        d='M17.7444 8.79787C17.4041 8.45708 16.8514 8.45729 16.5106 8.79787L10.9577 14.351L8.48961 11.883C8.14881 11.5422 7.59639 11.5422 7.2556 11.883C6.9148 12.2238 6.9148 12.7762 7.2556 13.117L10.3405 16.202C10.5108 16.3722 10.7341 16.4576 10.9574 16.4576C11.1807 16.4576 11.4042 16.3725 11.5745 16.202L17.7444 10.0319C18.0852 9.69131 18.0852 9.13865 17.7444 8.79787Z'
                        fill='#2F73F2'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_7_836'>
                        <rect
                          width='11'
                          height='11'
                          fill='white'
                          transform='translate(7 7)'
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <span className='text-base font-normal text-SlateBlue dark:text-darktext'>
                    Easy Drag & Drop
                  </span>
                </div>
                <div className='flex items-center gap-2'>
                  <svg
                    width='25'
                    height='25'
                    viewBox='0 0 25 25'
                    fill='#F3FAFF'
                    className='dark:fill-primary/20 fill-primary/20'
                    xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='12.5' cy='12.5' r='12.5' />
                    <g clipPath='url(#clip0_7_836)'>
                      <path
                        d='M17.7444 8.79787C17.4041 8.45708 16.8514 8.45729 16.5106 8.79787L10.9577 14.351L8.48961 11.883C8.14881 11.5422 7.59639 11.5422 7.2556 11.883C6.9148 12.2238 6.9148 12.7762 7.2556 13.117L10.3405 16.202C10.5108 16.3722 10.7341 16.4576 10.9574 16.4576C11.1807 16.4576 11.4042 16.3725 11.5745 16.202L17.7444 10.0319C18.0852 9.69131 18.0852 9.13865 17.7444 8.79787Z'
                        fill='#2F73F2'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_7_836'>
                        <rect
                          width='11'
                          height='11'
                          fill='white'
                          transform='translate(7 7)'
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <span className='text-base font-normal text-SlateBlue dark:text-darktext'>
                    Powered by Elementor
                  </span>
                </div>
                <div className='flex items-center gap-2'>
                  <svg
                    width='25'
                    height='25'
                    viewBox='0 0 25 25'
                    fill='#F3FAFF'
                    className='dark:fill-primary/20 fill-primary/20'
                    xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='12.5' cy='12.5' r='12.5' />
                    <g clipPath='url(#clip0_7_836)'>
                      <path
                        d='M17.7444 8.79787C17.4041 8.45708 16.8514 8.45729 16.5106 8.79787L10.9577 14.351L8.48961 11.883C8.14881 11.5422 7.59639 11.5422 7.2556 11.883C6.9148 12.2238 6.9148 12.7762 7.2556 13.117L10.3405 16.202C10.5108 16.3722 10.7341 16.4576 10.9574 16.4576C11.1807 16.4576 11.4042 16.3725 11.5745 16.202L17.7444 10.0319C18.0852 9.69131 18.0852 9.13865 17.7444 8.79787Z'
                        fill='#2F73F2'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_7_836'>
                        <rect
                          width='11'
                          height='11'
                          fill='white'
                          transform='translate(7 7)'
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <span className='text-base font-normal text-SlateBlue dark:text-darktext'>
                    Create new sections
                  </span>
                </div>
              </div>
              <div className='mt-8'>
                <Link href='/' className='btn inline-flex items-center gap-3'>
                  Get Started
                  <i className="bg-no-repeat bg-contain w-4 h-3 inline-block" style={{ backgroundImage: `url(${getImgPath('/images/build-amazing/right-arrow.svg')})` }}></i>
                </Link>
              </div>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-7'>
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className='group'
                  data-aos='fade-up'
                  data-aos-delay={`${(index + 1) * 200}`}
                  data-aos-duration='1000'>
                  <div className='shadow-light_shadwo dark:shadow-darkmd p-8 rounded-14 group-hover:cursor-pointer'>
                    <i
                      className='bg-no-repeat w-10 h-10 inline-block'
                      style={{ backgroundImage: `url(${card.iconUrl})` }}></i>
                    <h6 className='text-[22px] leading-[2rem] font-bold text-secondary dark:text-white max-w-200 pt-3'>
                      {card.title}
                    </h6>
                    <p className='text-14 text-SlateBlue dark:text-darktext font-normal max-w-200 pt-3 pb-7'>
                      {card.description}
                    </p>
                    <Link
                      href={card.link}
                      className='text-primary text-base font-normal flex items-center gap-3 transition-all group'>
                      Get Started
                      <i
                        className='bg-no-repeat bg-contain w-4 h-3 inline-block transform transition-transform duration-300 ease-in-out group-hover:translate-x-1'
                        style={{
                          backgroundImage: `url(${getImgPath('/images/build-amazing/right-arrow-blue.svg')})`,
                        }}></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BuildAmazing
