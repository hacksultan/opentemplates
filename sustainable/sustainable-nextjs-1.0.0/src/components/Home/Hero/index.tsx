import Image from 'next/image'
import { getImgPath } from '@/utils/imagePath'

const Hero = () => {
  return (
    <>
      <section className="relative overflow-x-clip top-0 bg-primary circalanimat" style={{ '--work-line-bg': `url(${getImgPath('/images/work-grow/work-line.png')})` } as React.CSSProperties}>
        <div className='banner-shap it-wrapper'>
          <div className='container py-20'>
            <div className='flex flex-wrap'>
              <div
                className='pb-3 sm:pb-0 md:w-2/3 w-full relative z-1'
                data-aos='fade-right'
                data-aos-delay='200'
                data-aos-duration='1000'>
                <h1 className='text-white relative max-w-473'>
                  Amazingly fexible, customizable and easy to use
                </h1>
                <button className='bg-white text-base font-normal text-primary py-3 px-12 rounded-lg mb-16 mt-8 transition-all duration-0.4s hover:bg-secondary hover:text-white'>
                  Get Started
                </button>
                <div className='flex items-center mb-8'>
                  <svg
                    className='w-4 h-4 text-LightApricot ms-1'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 22 20'>
                    <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                  </svg>
                  <svg
                    className='w-4 h-4 text-LightApricot ms-1'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 22 20'>
                    <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                  </svg>
                  <svg
                    className='w-4 h-4 text-LightApricot ms-1'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 22 20'>
                    <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                  </svg>
                  <svg
                    className='w-4 h-4 text-LightApricot ms-1'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 22 20'>
                    <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                  </svg>
                  <svg
                    className='w-4 h-4 ms-1 text-LightApricot'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 22 20'>
                    <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                  </svg>
                </div>
                <p className='text-base font-normal text-white leading-7 pb-11 max-w-408'>
                  It’s easy to set up and the support experience is the best and
                  unparalleled comparatively.
                </p>
                <div className='flex items-center gap-6'>
                  <div>
                    <Image
                      src={getImgPath('/images/hero/wise_white.png')}
                      alt='logo'
                      width={0}
                      height={0}
                      quality={100}
                      layout='responsive'
                      sizes='100vh'
                      className='w-20! h-5!'
                    />
                  </div>
                  <div>
                    <Image
                      src={getImgPath('/images/hero/google_white.png')}
                      alt='logo'
                      width={0}
                      height={0}
                      quality={100}
                      layout='responsive'
                      sizes='100vh'
                      className=' h-5!'
                    />
                  </div>
                  <div>
                    <Image
                      src={getImgPath('/images/hero/pay_white.png')}
                      alt='logo'
                      width={0}
                      height={0}
                      quality={100}
                      layout='responsive'
                      sizes='100vh'
                      className=' h-5!'
                    />
                  </div>
                  <div>
                    <Image
                      src={getImgPath('/images/hero/stripe_white.png')}
                      alt='logo'
                      width={0}
                      height={0}
                      quality={100}
                      layout='responsive'
                      sizes='100vh'
                      className='w-14! h-5!'
                    />
                  </div>
                </div>
              </div>
              <div
                className="md:w-1/4 w-full md:-ml-16 -ml-0 relative z-1"
                style={{ 
                  '--grid-line-bg': `url(${getImgPath('/images/hero/grid-line.png')})`,
                  '--circal-bg': `url(${getImgPath('/images/hero/circal.png')})`
                } as React.CSSProperties}
                data-aos='fade-left'
                data-aos-delay='200'
                data-aos-duration='1000'>
                <form>
                  <h6 className='text-white sm:text-[26px] leading-[2.11rem] text-xl font-bold pb-5'>
                    Start the project
                  </h6>
                  <div className='grid md:grid-cols-2 grid-cols-1 gap-4 items-center mb-6'>
                    <div className='col-span-1'>
                      <input
                        type='text'
                        id='firstName'
                        className='bg-white text-darkmode text-base rounded-lg block w-full p-2.5 dark:bg-darkmode dark:placeholder:gray-400 dark:text-white focus:outline-0 focus:ring-1 focus:ring-secondary dark:focus:ring-white'
                        placeholder='First name'
                        required
                      />
                    </div>
                    <div className='col-span-1'>
                      <input
                        type='text'
                        id='lastName'
                        className='bg-white text-darkmode text-base rounded-lg dark:bg-darkmode block w-full p-2.5 dark:placeholder:gray-400 dark:text-white focus:outline-0 focus:ring-1 focus:ring-secondary dark:focus:ring-white'
                        placeholder='Last name'
                        required
                      />
                    </div>
                    <div className='md:col-span-2 col-span-1'>
                      <input
                        type='text'
                        id='company'
                        className='bg-white text-darkmode text-base rounded-lg block w-full p-2.5 dark:bg-darkmode dark:placeholder:gray-400 dark:text-white focus:outline-0 focus:ring-1 focus:ring-secondary dark:focus:ring-white'
                        placeholder='youremail@website.com'
                        required
                      />
                    </div>
                    <div className='md:col-span-2 col-span-1'>
                      <input
                        type='text'
                        id='country'
                        className='bg-white text-darkmode text-base rounded-lg block w-full p-2.5 dark:bg-darkmode dark:placeholder:gray-400 dark:text-white focus:outline-0 focus:ring-1 focus:ring-secondary dark:focus:ring-white'
                        placeholder='Country'
                        required
                      />
                    </div>
                    <div className='md:col-span-2 col-span-1'>
                      <textarea
                        id='message'
                        rows={4}
                        className='bg-white block p-2.5 w-full text-base text-darkmode rounded-lg dark:bg-darkmode dark:placeholder:gray-400 dark:text-white focus:outline-0 focus:ring-1 focus:ring-secondary dark:focus:ring-white'
                        placeholder='Write your thoughts here...'></textarea>
                    </div>
                  </div>
                  <div className='flex items-start mb-6'>
                    <div className='flex items-center h-5'>
                      <input
                        id='remember'
                        type='checkbox'
                        value=''
                        className='w-4 h-4 border border-gray-300 rounded-sm checked:accent-LightApricot bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:outline-0'
                        required
                      />
                    </div>
                    <label className='ms-2 text-base font-normal text-white dark:text-gray-300'>
                      I have read and acknowledge the{' '}
                      <a
                        href='#'
                        className='text-white underline dark:text-white'>
                        Terms and Conditions
                      </a>
                      .
                    </label>
                  </div>
                  <button
                    type='submit'
                    className='text-secondary bg-LightApricot hover:bg-secondary focus:ring-4 hover:text-white focus:outline-hidden focus:ring-blue-300 font-normal rounded-lg text-base w-full px-5 py-2.5 text-center  transition-all duration-0.4s'>
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
