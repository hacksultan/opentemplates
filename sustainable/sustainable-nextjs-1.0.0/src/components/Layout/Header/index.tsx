'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useContext, useEffect, useRef, useState } from 'react'
import { headerData } from '../Header/Navigation/menuData'
import Image from 'next/image'
import HeaderLink from '../Header/Navigation/HeaderLink'
import MobileHeaderLink from '../Header/Navigation/MobileHeaderLink'
import Signin from '@/components/Auth/SignIn'
import SignUp from '@/components/Auth/SignUp'
import { useTheme } from 'next-themes'
import { Icon } from '@iconify/react/dist/iconify.js'
import { SuccessfullLogin } from '@/components/Auth/AuthDialog/SuccessfulLogin'
import { FailedLogin } from '@/components/Auth/AuthDialog/FailedLogin'
import { UserRegistered } from '@/components/Auth/AuthDialog/UserRegistered'
import AuthDialogContext from '@/app/context/AuthDialogContext'
import { getImgPath } from '@/utils/imagePath'

const Header: React.FC = () => {
  const pathUrl = usePathname()
  const { theme, setTheme } = useTheme()

  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)

  const navbarRef = useRef<HTMLDivElement>(null)
  const signInRef = useRef<HTMLDivElement>(null)
  const signUpRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    setSticky(window.scrollY >= 80)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      signInRef.current &&
      !signInRef.current.contains(event.target as Node)
    ) {
      setIsSignInOpen(false)
    }
    if (
      signUpRef.current &&
      !signUpRef.current.contains(event.target as Node)
    ) {
      setIsSignUpOpen(false)
    }
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [navbarOpen, isSignInOpen, isSignUpOpen])

  useEffect(() => {
    if (isSignInOpen || isSignUpOpen || navbarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isSignInOpen, isSignUpOpen, navbarOpen])

  const authDialog = useContext(AuthDialogContext)

  return (
    <>
      <header
        className={`sticky h-24 top-0 py-1 z-50 w-full bg-primary transition-all ${
          sticky
            ? 'shadow-lg dark:shadow-darkmd bg-primary dark:bg-primary'
            : 'shadow-none'
        }`}>
        <div className='container mx-auto flex items-center justify-between p-6'>
          <Link href='/'>
            <Image
              src={getImgPath('/images/logo/logo.svg')}
              alt='logo'
              width={160}
              height={50}
              style={{ width: 'auto', height: 'auto' }}
              quality={100}
            />
          </Link>
          <ul className='hidden lg:flex grow items-center justify-center gap-6'>
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </ul>
          <div className='flex items-center xl:gap-4 lg:gap-2 gap-2'>
            <button
              aria-label='Toggle theme'
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className='flex h-8 w-8 items-center justify-center text-body-color duration-300 dark:text-white'>
              <svg
                viewBox='0 0 16 16'
                className={`hidden h-6 w-6 dark:block ${
                  !sticky && pathUrl === '/' && 'text-white'
                }`}>
                <path
                  d='M4.50663 3.2267L3.30663 2.03337L2.36663 2.97337L3.55996 4.1667L4.50663 3.2267ZM2.66663 7.00003H0.666626V8.33337H2.66663V7.00003ZM8.66663 0.366699H7.33329V2.33337H8.66663V0.366699V0.366699ZM13.6333 2.97337L12.6933 2.03337L11.5 3.2267L12.44 4.1667L13.6333 2.97337ZM11.4933 12.1067L12.6866 13.3067L13.6266 12.3667L12.4266 11.1734L11.4933 12.1067ZM13.3333 7.00003V8.33337H15.3333V7.00003H13.3333ZM7.99996 3.6667C5.79329 3.6667 3.99996 5.46003 3.99996 7.6667C3.99996 9.87337 5.79329 11.6667 7.99996 11.6667C10.2066 11.6667 12 9.87337 12 7.6667C12 5.46003 10.2066 3.6667 7.99996 3.6667ZM7.33329 14.9667H8.66663V13H7.33329V14.9667ZM2.36663 12.36L3.30663 13.3L4.49996 12.1L3.55996 11.16L2.36663 12.36Z'
                  fill='#FFFFFF'
                />
              </svg>
              <svg
                viewBox='0 0 23 23'
                className={`h-8 w-8 text-dark dark:hidden ${
                  !sticky && pathUrl === '/' && 'text-white'
                }`}>
                <path d='M16.6111 15.855C17.591 15.1394 18.3151 14.1979 18.7723 13.1623C16.4824 13.4065 14.1342 12.4631 12.6795 10.4711C11.2248 8.47905 11.0409 5.95516 11.9705 3.84818C10.8449 3.9685 9.72768 4.37162 8.74781 5.08719C5.7759 7.25747 5.12529 11.4308 7.29558 14.4028C9.46586 17.3747 13.6392 18.0253 16.6111 15.855Z' />
              </svg>
            </button>
            <Link
              href='#'
              className='hidden lg:block bg-white border border-primary text-primary px-4 py-2 rounded-lg hover:bg-black hover:text-white'
              onClick={() => {
                setIsSignInOpen(true)
              }}>
              Sign In
            </Link>
            {isSignInOpen && (
              <div
                ref={signInRef}
                className='fixed ml-0! top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50'>
                <div className='relative mx-auto w-full max-w-md overflow-hidden rounded-lg bg-white px-8 py-14 text-center dark:bg-secondary'>
                  <button
                    onClick={() => setIsSignInOpen(false)}
                    className=' hover:bg-BorderLine dark:hover:bg-border p-1 rounded-full absolute -top-5 -right-3 mr-8 mt-8'
                    aria-label='Close Sign In Modal'>
                    <Icon
                      icon='ic:round-close'
                      className='text-2xl dark:text-white'
                    />
                  </button>
                  <Signin
                    signInOpen={(value: boolean) => setIsSignInOpen(value)}
                  />
                </div>
              </div>
            )}
            <Link
              href='#'
              className='hidden lg:block bg-LightApricot text-black px-4 py-2 rounded-lg hover:bg-black hover:text-white'
              onClick={() => {
                setIsSignUpOpen(true)
              }}>
              Sign Up
            </Link>
            {isSignUpOpen && (
              <div
                ref={signUpRef}
                className='fixed top-0 ml-0! left-0 w-full h-full bg-black/50 flex items-center justify-center z-50'>
                <div className='relative mx-auto w-full max-w-md overflow-hidden rounded-lg bg-white px-8 py-14 text-center dark:bg-darklight'>
                  <button
                    onClick={() => setIsSignUpOpen(false)}
                    className=' hover:bg-BorderLine dark:hover:bg-border p-1 rounded-full absolute -top-5 -right-3 mr-8 mt-8'
                    aria-label='Close Sign In Modal'>
                    <Icon
                      icon='ic:round-close'
                      className='text-2xl dark:text-white'
                    />
                  </button>
                  <SignUp
                    signUpOpen={(value: boolean) => setIsSignUpOpen(value)}
                  />
                </div>
              </div>
            )}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className='block lg:hidden p-2 rounded-lg'
              aria-label='Toggle mobile menu'>
              <span className='block w-6 h-0.5 bg-white dark:bg-white'></span>
              <span className='block w-6 h-0.5 bg-white dark:bg-white mt-1.5'></span>
              <span className='block w-6 h-0.5 bg-white dark:bg-white mt-1.5'></span>
            </button>
          </div>
        </div>
        {navbarOpen && (
          <div className='fixed top-0 left-0 w-full h-full bg-black/50 z-40' />
        )}

        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white dark:bg-darkmode shadow-lg transform transition-transform duration-300 max-w-64 ${
            navbarOpen ? 'translate-x-0' : 'translate-x-full'
          } z-50`}>
          <div className='flex items-center justify-between p-4'>
            <h2 className='text-lg font-bold text-black dark:text-white'>
              Menu
            </h2>
            <button
              onClick={() => setNavbarOpen(false)}
              aria-label='Close mobile menu'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='dark:text-white'>
                <path
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <nav className='flex flex-col items-start p-4'>
            {headerData.map((item, index) => (
              <MobileHeaderLink key={index} item={item} />
            ))}
            <div className='mt-4 flex flex-col gap-4 w-full'>
              <Link
                href='#'
                className='bg-white border border-primary text-primary px-4 py-2 rounded-lg hover:bg-black hover:text-white'
                onClick={() => {
                  setIsSignInOpen(true)
                  setNavbarOpen(false)
                }}>
                Sign In
              </Link>
              <Link
                href='#'
                className='bg-LightApricot text-black px-4 py-2 rounded-lg hover:bg-black hover:text-white'
                onClick={() => {
                  setIsSignUpOpen(true)
                  setNavbarOpen(false)
                }}>
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
        {/* Successsful Login Alert */}
        <div
          className={`fixed top-6 end-1/2 translate-x-1/2 z-50 ${
            authDialog?.isSuccessDialogOpen == true ? 'block' : 'hidden'
          }`}>
          <SuccessfullLogin />
        </div>
        {/* Failed Login Alert */}
        <div
          className={`fixed top-6 end-1/2 translate-x-1/2 z-50 ${
            authDialog?.isFailedDialogOpen == true ? 'block' : 'hidden'
          }`}>
          <FailedLogin />
        </div>
        {/* User registration Alert */}
        <div
          className={`fixed top-6 end-1/2 translate-x-1/2 z-50 ${
            authDialog?.isUserRegistered == true ? 'block' : 'hidden'
          }`}>
          <UserRegistered />
        </div>
      </header>
    </>
  )
}

export default Header
