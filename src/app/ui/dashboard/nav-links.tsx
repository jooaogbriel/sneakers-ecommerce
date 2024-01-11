'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { 
    name: 'Home', 
    href: '/dashboard' },
  {
    name: 'Collections',
    href: '/dashboard/collections',
  },
  { name: 'Men', 
    href: '/dashboard/men' 
  },
  { name: 'Women', 
    href: '/dashboard/women' 
  },
  { name: 'About', 
    href: '/dashboard/about' 
  },
  { name: 'Contact', 
    href: '/dashboard/contact' 
  },

];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 p-3 text-sm font-medium md:hover:text-primary md:flex-none md:justify-start md:p-2 md:px-3',
              {
                '': pathname === link.href,
              },
            )}
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
