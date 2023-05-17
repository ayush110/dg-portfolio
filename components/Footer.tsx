import siteMetadata from '@/data/siteMetadata'
import Icon from '@/components/social-icons'
import Link from 'next/link'
import { CiMail, CiLinkedin, CiTwitter } from 'react-icons/ci'
import { BsGithub, BsLinkedin, BsMailbox, BsSpotify, BsTwitch, BsTwitter } from 'react-icons/bs'
import { MdMail } from 'react-icons/md'

export default function Footer() {
  return (
    <footer>
      <div className="text-grey my-16 flex flex-col items-center text-xs text-gray-400 hover:text-black dark:hover:text-white">
        <div className="flex ">
          <Link
            className="mr-4 flex inline-flex items-center "
            href={`mailto:${siteMetadata.email}`}
          >
            {siteMetadata.email}
          </Link>

          <Link className="mx-4 inline-flex items-center " href={siteMetadata.linkedin}>
            <BsLinkedin className="mr-1 mt-1" /> shah-ayush
          </Link>
          <Link className=" mx-4 flex inline-flex items-center " href={siteMetadata.twitter}>
            <BsTwitter className="mr-1 mt-1" /> ayushshah110
          </Link>
          <Link className="mx-4 flex inline-flex items-center " href={siteMetadata.spotify}>
            <BsSpotify className="mr-1 mt-1" /> A Side of Chai
          </Link>
          <Link className=" mx-4 flex inline-flex items-center " href={siteMetadata.github}>
            <BsGithub className="mr-1 mt-1" /> ayush110
          </Link>
        </div>
      </div>
    </footer>
  )
}
