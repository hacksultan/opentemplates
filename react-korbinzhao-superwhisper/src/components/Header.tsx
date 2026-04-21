import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="relative">
      <nav className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="text-xl font-bold">SuperWhisper</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#features" className="text-sm font-semibold leading-6 text-gray-900">Features</a>
          <a href="#pricing" className="text-sm font-semibold leading-6 text-gray-900">Pricing</a>
          <a href="#faq" className="text-sm font-semibold leading-6 text-gray-900">FAQ</a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900 mr-6">Download</a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Sign in</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
