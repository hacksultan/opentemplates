import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { boxData } from '../../../app/api/data'
import { getImgPath } from '@/utils/imagePath'

const CardBox = () => {
  return (
    <>
      <section className='bg-AliceBlue dark:bg-darkmode py-20'>
        <div className='container'>
          <div className='flex md:flex-nowrap flex-wrap items-stretch justify-center gap-8'>
            <div className='flex items-stretch flex-col gap-8 w-full'>
              <div className='mb-4'>
                <h2 className='text-secondary dark:text-white max-w-446'>
                  Work done by us to grow your revenue
                </h2>
                <p className='text-SlateBlue dark:text-darktext text-base font-normal py-9 max-w-408'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elited do
                  eiusmod tempor incididunt.
                </p>
                <div className=''>
                  <Link href='/' className='btn'>
                    <div className='flex items-center gap-3'>
                      <p>Get Started</p>
                      <i className="bg-no-repeat bg-contain w-4 h-3 inline-block" style={{ backgroundImage: `url(${getImgPath('/images/build-amazing/right-arrow.svg')})` }}></i>
                    </div>
                  </Link>
                </div>
              </div>
              {boxData.map((item, index) => {
                if (index % 2 === 1) {
                  return (
                    <div
                      key={index}
                      className={
                        index === 1
                          ? "relative"
                          : ''
                      }
                      style={index === 1 ? { '--work-line-bg': `url(${getImgPath('/images/work-grow/work-line.png')})` } as React.CSSProperties : undefined}
                      data-aos='fade-up'
                      data-aos-delay={`${(index + 1) * 200}`}
                      data-aos-duration='1000'>
                      <div className='relative rounded-14 overflow-hidden'>
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={0}
                          height={0}
                          quality={100}
                          layout='responsive'
                          sizes='100vh'
                        />
                        <div className='absolute sm:top-10 top-6 sm:left-10 left-6 group'>
                          <h5 className='sm:text-[26px] leading-[2.11rem] text-20 text-white pb-6 font-bold max-w-356'>
                            {item.title}
                          </h5>
                          <Link
                            href={`/portfolio/${item.slug}`}
                            className='flex items-center gap-3 text-white sm:text-base text-sm font-normal group-hover:opacity-60'>
                            Learn More
                            <i className="bg-no-repeat bg-contain w-4 h-3 inline-block transform transition-transform duration-300 ease-in-out group-hover:translate-x-1" style={{ backgroundImage: `url(${getImgPath('/images/build-amazing/right-arrow.svg')})` }}></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                }
                return null
              })}
            </div>
            <div className='flex items-stretch flex-col gap-8 w-full'>
              {boxData.map((item, index) => {
                if (index % 2 === 0) {
                  return (
                    <div
                      key={index}
                      className=''
                      data-aos='fade-up'
                      data-aos-delay={`${(index + 1) * 200}`}
                      data-aos-duration='1000'>
                      <div className='relative rounded-14 overflow-hidden'>
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={0}
                          height={0}
                          quality={100}
                          layout='responsive'
                          sizes='100vh'
                        />
                        <div className='absolute sm:top-10 top-6 sm:left-10 left-6 group'>
                          <h5 className='sm:text-[26px] leading-[2.11rem] text-20 text-white pb-6 font-bold max-w-356'>
                            {item.title}
                          </h5>
                          <Link
                            href={`/portfolio/${item.slug}`}
                            className='flex items-center gap-3 text-white sm:text-base text-sm font-normal group-hover:opacity-60'>
                            Learn More
                            <i className="bg-no-repeat bg-contain w-4 h-3 inline-block transform transition-transform duration-300 ease-in-out group-hover:translate-x-1" style={{ backgroundImage: `url(${getImgPath('/images/build-amazing/right-arrow.svg')})` }}></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                }
                return null
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CardBox
