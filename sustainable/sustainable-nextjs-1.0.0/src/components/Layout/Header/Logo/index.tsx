import Image from 'next/image';
import Link from 'next/link';
import { getImgPath } from '@/utils/imagePath';

const Logo: React.FC = () => {

  return (
    <Link href="/" className='sm:max-w-56 max-w-44'>
      <Image
        src={getImgPath("/images/logo/logo-dark.svg")}
        alt="logo"
        width={160}
        height={50}
        style={{ width: 'auto', height: 'auto' }}
        quality={100}
        className='dark:hidden'
      />
      <Image
        src={getImgPath("/images/logo/logo.svg")}
        alt="logo"
        width={160}
        height={50}
        style={{ width: 'auto', height: 'auto' }}
        quality={100}
        className='dark:block hidden'
      />
    </Link>
  );
};

export default Logo;
