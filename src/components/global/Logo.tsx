import Image from 'next/image';
import Link from 'next/link';

import { press_start_2p } from '@/constants/fonts';
export default function Logo() {
  return (
    <Link
      href="/"
      className="logo flex items-center"
    >
      <Image
        src="/icon-red.png"
        alt="icon"
        width="45"
        height="45"
        className="w-auto"
      />
      {/* <p className={`${press_start_2p.className} text-sm text-red-600`}>Dunk Web</p> */}
    </Link>
  );
}
