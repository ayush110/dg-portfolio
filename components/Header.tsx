import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Header = () => {
  const { pathname } = useRouter()
  return (
    <header className="flex items-center py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            {
              <div
                className={`rounded-lg font-medium text-gray-900  dark:text-gray-100  sm:pr-4 ${
                  pathname === '/' ? 'underline' : ''
                }`}
              >
                home
              </div>
            }
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center text-base leading-5">
        <div className="hidden sm:block">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className={`rounded-lg p-1 font-medium text-gray-900  dark:text-gray-100  sm:p-4 ${
                pathname === link.href ? 'underline' : ''
              }`}
            >
              {link.title}
            </Link>
          ))}
        </div>
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
