'use client'
import React from 'react'
import { count } from '@/app/api/data'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Counter = () => {
  const pathname = usePathname()
  console.log(pathname)

  return (
    <section className={`dark:bg-darkmode py-20`}>
      <div className='container'>
        <div className='flex flex-wrap items-center md:justify-between justify-center md:gap-0 gap-9'>
          {count.map((item, index) => (
            <div
              key={index}
              className='flex flex-col items-center gap-4'
              data-aos='fade-up'
              data-aos-delay={`${index * 200}`}
              data-aos-duration='1000'>
              <Image
                src={item.icon}
                alt='icon'
                width={30}
                height={30}
                unoptimized
              />
              <span className='text-5xl font-bold text-secondary dark:text-white'>
                {item.value}
              </span>
              <p className='text-20 text-SlateBlue font-normal text-center max-w-72 w-full dark:text-darktext'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Counter
