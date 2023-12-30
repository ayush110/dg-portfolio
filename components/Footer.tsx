import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'
import { BsSpotify } from 'react-icons/bs'

export default function Footer() {
  return (
    <footer>
      <div className="text-xs text-zinc-400 ">
        <div className=" text-right">
          <Link
            className=" hover:text-black dark:hover:text-white"
            href={`mailto:${siteMetadata.email}`}
          >
            {siteMetadata.email}
          </Link>

          <Link
            className="flex items-center justify-end text-right hover:text-black dark:hover:text-white"
            href={siteMetadata.spotify}
          >
            a side of chai
            <BsSpotify className="ml-1 " />
          </Link>
          <Link
            className="flex justify-end   hover:text-black dark:hover:text-white "
            href={siteMetadata.linkedin}
          >
            linkedin
          </Link>
          <Link
            className=" flex justify-end  hover:text-black dark:hover:text-white"
            href={siteMetadata.twitter}
          >
            twitter
          </Link>
          <Link
            className="justify-end   hover:text-black dark:hover:text-white"
            href={siteMetadata.github}
          >
            github
          </Link>
        </div>
      </div>
    </footer>
  )
}
