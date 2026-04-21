"use client"
import { useState } from 'react';
import Link from 'next/link';
import { HeaderItem } from '../../../../types/menu';
import { usePathname } from 'next/navigation';

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname()
  const handleMouseEnter = () => {
    if (item.submenu) {
      setSubmenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setSubmenuOpen(false);
  };

  return (
    <div
      className={`relative ${item.label === "Faqs" ? 'xl:block lg:hidden block' : null}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={item.href} className={ ` py-3 text-base flex font-normal hover:text-LightApricot dark:hover:text-LightApricot dark:hover:text-primary ${path === item.href ? 'text-LightApricot dark:text-LightApricot' : ' text-white dark:text-white '} ${path.startsWith(`/${item.label.toLowerCase()}`) ? 'text-LightApricot! dark:text-LightApricot' : null} `}>
        {item.label}
        {item.submenu && (
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 10l5 5l5-5" />
          </svg>
        )}
      </Link>
      {submenuOpen && (
        <div className="absolute py-2 top-8 left-0 mt-0.5 w-60 bg-white dark:bg-darkmode shadow-lg dark:shadow-darkmd rounded-lg">
          {item.submenu?.map((subItem, index) => (
            <Link key={index} href={subItem.href} className={`block px-4 py-2 text-black dark:text-white hover:bg-AliceBlue dark:hover:bg-darklight ${path === subItem.href ? "bg-primary text-white hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white" : null}`}>
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderLink;
