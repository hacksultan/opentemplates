'use client'
import { useReducer, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { getImgPath } from '@/utils/imagePath'

const Preferred = () => {
  const [activeTab, setActiveTab] = useState('monthly')

  const initialTabConfig = {
    planType: 'monthly',
    basicPrice: 9,
    professionalPrice: 18,
    duration: 'month',
  }
  interface State {
    planType: string
    basicPrice: number
    professionalPrice: number
    duration: string
  }
  interface Action {
    type: string
    payload: {
      duration: string
      basicPrice: number
      professionalPrice: number
    }
  }

  function reducer(tabConfig: State, action: Action) {
    switch (action.type) {
      case 'monthly':
        return {
          ...tabConfig,
          planType: action.type,
          basicPrice: action.payload.basicPrice,
          professionalPrice: action.payload.professionalPrice,
          duration: action.payload.duration,
        }
        break
      case 'annually':
        return {
          ...tabConfig,
          planType: action.type,
          basicPrice: action.payload.basicPrice,
          professionalPrice: action.payload.professionalPrice,
          duration: action.payload.duration,
        }
        break
      default:
        return tabConfig
    }
  }

  const [tabConfig, dispatch] = useReducer(reducer, initialTabConfig)

  const pathname = usePathname()
  console.log(pathname)

  return (
    <>
      <section
        className={`" dark:bg-darkmode " ${
          pathname === '/' ? 'py-20' : '-mt-52 pt-72'
        }`}>
        <div className='container'>
          <div data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
            <h2 className='text-secondary dark:text-white text-center'>
              Choose your preferred plan
            </h2>
            <p className='text-base font-normal text-SlateBlue dark:text-darktext max-w-585 text-center m-auto py-6'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <div className='text-center pb-16'>
              <ul className='inline-flex items-center bg-AliceBlue dark:bg-darklight rounded-xl'>
                <li className='m-2'>
                  <button
                    className={`text-base font-normal text-secondary dark:text-white py-3 px-7 rounded-xl ${
                      tabConfig.planType === 'monthly'
                        ? 'bg-white dark:bg-primary dark:text-white'
                        : ''
                    }`}
                    onClick={() =>
                      dispatch({
                        type: 'monthly',
                        payload: {
                          duration: 'month',
                          basicPrice: 9,
                          professionalPrice: 18,
                        },
                      })
                    }>
                    Monthly
                  </button>
                </li>
                <li className='m-2'>
                  <button
                    className={`text-base font-normal text-secondary dark:text-white py-3 px-7 rounded-xl ${
                      tabConfig.planType === 'annually'
                        ? 'bg-white dark:bg-primary dark:text-white'
                        : ''
                    }`}
                    onClick={() =>
                      dispatch({
                        type: 'annually',
                        payload: {
                          duration: 'year',
                          basicPrice: 100,
                          professionalPrice: 210,
                        },
                      })
                    }>
                    Annually
                  </button>
                </li>
              </ul>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7'>
              <div
                data-aos='fade-up'
                data-aos-delay='200'
                data-aos-duration='1000'
                className='col-span-1 shadow-plan_shadwo rounded-2xl'>
                <div className='relative h-full'>
                  <div className='h-full bg-primary rounded-2xl overflow-hidden'>
                    <img
                      src={getImgPath('/images/price-plan/plan-image.png')}
                      alt=''
                      className='h-full'
                    />
                  </div>
                  <div className='pt-9 px-8 absolute z-3 top-0'>
                    <p className='text-white sm:text-3xl text-[22px] leading-[2rem] font-normal'>
                      Choosing yearly plan gives you{' '}
                      <span className='font-bold'>big 35% discount</span>
                    </p>
                    <p className='text-xl font-normal text-white pt-5'>
                      This week 3,569 people have signed up with us
                    </p>
                  </div>
                </div>
              </div>
              <div
                data-aos='fade-up'
                data-aos-delay='400'
                data-aos-duration='1000'
                className='col-span-1 shadow-plan_shadwo rounded-2xl dark:bg-darklight'>
                <div className='flex grow flex-col p-6 sm:p-8'>
                  <span className='text-[22px] leading-[2rem] font-bold text-SlateBlue dark:text-darktext pb-3'>
                    Basic
                  </span>
                  <div>
                    <span className='text-5xl font-bold text-secondary dark:text-white'>
                      {`$${tabConfig.basicPrice}`}
                      <span className='text-base font-normal text-SlateBlue dark:text-darktext'>
                        {`/${tabConfig.duration}`}
                      </span>
                    </span>
                  </div>
                  <p className='text-SlateBlue dark:text-darktext opacity-75 text-base pt-6 border-b border-solid border-BorderLine dark:border-dark_border pb-5'>
                    Best for people who have the startup / freelancing
                  </p>
                  <ul className='flex flex-col grow gap-5 pt-6'>
                    <li className='flex items-center gap-5'>
                      <svg
                        width='25'
                        height='25'
                        viewBox='0 0 25 25'
                        fill='#F3FAFF'
                        className='dark:fill-black'
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

                      <span className='text-base text-SlateBlue dark:text-darktext font-normal'>
                        Monthly service fee
                      </span>
                    </li>
                    <li className='flex items-center gap-5'>
                      <svg
                        width='25'
                        height='25'
                        viewBox='0 0 25 25'
                        fill='#F3FAFF'
                        xmlns='http://www.w3.org/2000/svg'
                        className='dark:fill-black'>
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

                      <span className='text-base text-SlateBlue dark:text-darktext font-normal'>
                        Direct debits
                      </span>
                    </li>
                    <li className='flex items-center gap-5'>
                      <svg
                        width='25'
                        height='25'
                        viewBox='0 0 25 25'
                        fill='#F3FAFF'
                        className='dark:fill-black'
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
                      <span className='text-base text-SlateBlue dark:text-darktext font-normal'>
                        Online payments
                      </span>
                    </li>
                    <li className='flex items-center gap-5'>
                      <svg
                        width='25'
                        height='25'
                        viewBox='0 0 25 25'
                        fill='#F3FAFF'
                        className='dark:fill-black'
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
                      <span className='text-base text-SlateBlue dark:text-darktext font-normal'>
                        Deposits to Savers
                      </span>
                    </li>
                    <li className='flex items-center gap-5'>
                      <svg
                        width='25'
                        height='25'
                        viewBox='0 0 25 25'
                        fill='#F3FAFF'
                        className='dark:fill-black'
                        xmlns='http://www.w3.org/2000/svg'>
                        <circle cx='12.5' cy='12.5' r='12.5' />
                        <g clipPath='url(#clip0_7_848)'>
                          <path
                            d='M13.4912 12.5001L16.8562 9.13494C16.9488 9.0423 16.9999 8.91872 17 8.78694C17 8.65508 16.9489 8.53135 16.8562 8.43886L16.5613 8.14406C16.4686 8.0512 16.345 8.00035 16.2131 8.00035C16.0814 8.00035 15.9578 8.0512 15.8651 8.14406L12.5001 11.509L9.13502 8.14406C9.04246 8.0512 8.9188 8.00035 8.78695 8.00035C8.65524 8.00035 8.53159 8.0512 8.43902 8.14406L8.144 8.43886C7.952 8.63086 7.952 8.94316 8.144 9.13494L11.509 12.5001L8.144 15.865C8.05137 15.9578 8.00037 16.0814 8.00037 16.2132C8.00037 16.345 8.05137 16.4685 8.144 16.5613L8.43895 16.8561C8.53151 16.9488 8.65524 16.9998 8.78688 16.9998C8.91873 16.9998 9.04239 16.9488 9.13495 16.8561L12.5001 13.4911L15.865 16.8561C15.9578 16.9488 16.0813 16.9998 16.213 16.9998H16.2132C16.345 16.9998 16.4686 16.9488 16.5613 16.8561L16.8561 16.5613C16.9487 16.4686 16.9998 16.345 16.9998 16.2132C16.9998 16.0814 16.9487 15.9578 16.8561 15.8651L13.4912 12.5001Z'
                            fill='#2F73F2'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_7_848'>
                            <rect
                              width='9'
                              height='9'
                              fill='white'
                              transform='translate(8 8)'
                            />
                          </clipPath>
                        </defs>
                      </svg>

                      <span className='text-base text-SlateBlue dark:text-darktext font-normal'>
                        International transaction fees
                      </span>
                    </li>
                  </ul>
                  <Link
                    href='#'
                    className='btn mt-12 py-3 rounded-lg text-center'>
                    Try free for 14 days
                  </Link>
                </div>
              </div>
              <div
                data-aos='fade-up'
                data-aos-delay='600'
                data-aos-duration='1000'
                className='col-span-1 shadow-plan_shadwo rounded-2xl dark:bg-darklight'>
                <div className='flex grow flex-col p-6 sm:p-8'>
                  <span className='text-[22px] leading-[2rem] font-bold text-SlateBlue dark:text-darktext pb-3'>
                    Professional
                  </span>
                  <div>
                    <span className='text-5xl font-bold text-secondary dark:text-white'>
                      {`$${tabConfig.professionalPrice}`}
                      <span className='text-base font-normal text-SlateBlue dark:text-darktext'>
                        {`/${tabConfig.duration}`}
                      </span>
                    </span>
                  </div>
                  <p className='text-SlateBlue dark:text-darktext opacity-75 text-base pt-6 border-b border-solid border-BorderLine dark:border-dark_border pb-5'>
                    Best for professionals who need more features
                  </p>
                  <ul className='flex flex-col grow gap-5 pt-6'>
                    <li className='flex items-center gap-5'>
                      <svg
                        width='25'
                        height='25'
                        viewBox='0 0 25 25'
                        fill='#F3FAFF'
                        className='dark:fill-black'
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

                      <span className='text-base text-SlateBlue dark:text-darktext font-normal'>
                        Monthly service fee
                      </span>
                    </li>
                    <li className='flex items-center gap-5'>
                      <svg
                        width='25'
                        height='25'
                        viewBox='0 0 25 25'
                        fill='#F3FAFF'
                        className='dark:fill-black'
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

                      <span className='text-base text-SlateBlue dark:text-darktext font-normal'>
                        Direct debits
                      </span>
                    </li>
                    <li className='flex items-center gap-5'>
                      <svg
                        width='25'
                        height='25'
                        viewBox='0 0 25 25'
                        fill='#F3FAFF'
                        className='dark:fill-black'
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
                      <span className='text-base text-SlateBlue dark:text-darktext font-normal'>
                        Online payments
                      </span>
                    </li>
                    <li className='flex items-center gap-5'>
                      <svg
                        width='25'
                        height='25'
                        viewBox='0 0 25 25'
                        fill='#F3FAFF'
                        className='dark:fill-black'
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
                      <span className='text-base text-SlateBlue dark:text-darktext font-normal'>
                        Deposits to Savers
                      </span>
                    </li>
                    <li className='flex items-center gap-5'>
                      <svg
                        width='25'
                        height='25'
                        viewBox='0 0 25 25'
                        fill='#F3FAFF'
                        className='dark:fill-black'
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

                      <span className='text-base text-SlateBlue dark:text-darktext font-normal'>
                        International transaction fees
                      </span>
                    </li>
                  </ul>
                  <Link
                    href='#'
                    className='btn mt-12 py-3 rounded-lg text-center'>
                    Try free for 14 days
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

export default Preferred
