import { useState } from 'react';
import Link from 'next/link';
import { HeaderItem } from '../../../../types/menu';
import { usePathname } from 'next/navigation';

const MobileHeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleToggle = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const path = usePathname();

  return (
    <div className="relative w-full">
      <Link
      href={item.href}
        onClick={item.submenu ? handleToggle : undefined}
        className={`flex items-center justify-between w-full py-2 px-3 rounded-md text-black dark:text-white focus:outline-hidden ${path == item.href ? 'bg-primary text-white! dark:bg-primary dark:text-white' : null} ${path.startsWith(`/${item.label.toLowerCase()}`) ? "bg-primary text-white! dark:bg-primary dark:text-white" : null}`}
      >
        {item.label}
        {item.submenu && (
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 10l5 5l5-5" />
          </svg>
        )}
      </Link>
      {submenuOpen && item.submenu && (
        <div className="bg-white dark:bg-darkmode p-2 w-full">
          {item.submenu.map((subItem, index) => (
            <Link key={index} href={subItem.href} className={`block py-2 px-3 text-gray-500 hover:bg-gray-200 ${path === subItem.href ? 'text-primary!' : null}`}>
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;