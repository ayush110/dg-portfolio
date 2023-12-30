import { useState } from 'react'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  return (
    <div className="hidden">
      <nav className="fixed ">
        {headerNavLinks.map((link) => (
          <div key={link.title} className="px-12 ">
            <Link
              href={link.href}
              className="  text-gray-900 dark:text-gray-100"
              onClick={onToggleNav}
            >
              {link.title}
            </Link>
          </div>
        ))}
      </nav>
    </div>
  )
}

export default MobileNav
