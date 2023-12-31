import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { useRouter } from 'next/router'
import Footer from './Footer'

const Header = () => {
  const { pathname } = useRouter()

  // Check if the user is on the home page
  const isHomePage = pathname === '/'

  return (
    <header className="relative flex pt-10 dark:font-thin sm:py-10">
      <div className="flex items-center">
        <div>
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="flex items-center justify-between">
              <div
                className={`rounded-lg pr-6 text-gray-900 dark:text-gray-100 ${
                  isHomePage ? 'font-bold dark:font-normal' : ''
                }`}
              >
                home
              </div>
              {typeof siteMetadata.headerTitle === 'string' ? (
                <div className="hidden h-6 text-2xl sm:block">{siteMetadata.headerTitle}</div>
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
                className={`rounded-lg p-6 text-gray-900 dark:text-gray-100 ${
                  pathname === link.href ? 'font-bold dark:font-normal' : ''
                }`}
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="flex">
            <ThemeSwitch />
          </div>
        </div>
      </div>

      {/* Conditionally render the Footer only on the home page */}
      {isHomePage && (
        <div className="absolute top-10 right-0">
          <Footer />
        </div>
      )}

      <MobileNav />
    </header>
  )
}

export default Header
