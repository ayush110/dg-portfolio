import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { useRouter } from 'next/router'

const Header = () => {
  const { pathname } = useRouter()
  return (
    <header className="flex items-center pt-10 sm:py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            {
              <div
                className={`rounded-lg pr-4 font-medium  text-gray-900  dark:text-gray-100 ${
                  pathname === '/' ? 'underline underline-offset-8' : ''
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
        <div className="">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className={`rounded-lg  p-5 font-medium  text-gray-900  dark:text-gray-100 ${
                pathname === link.href ? 'underline underline-offset-8' : ''
              }`}
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex">
          <ThemeSwitch />
        </div>
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
