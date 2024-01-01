import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import pastExperiencesData from '@/data/pastExperiencesData'
import { PageSEO } from '@/components/SEO'
import Link from 'next/link'
import { BsGithub, BsBoxArrowUpRight } from 'react-icons/bs'

export default function Projects() {
  return (
    <>
      <PageSEO title={`code | ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <div className=" shrink text-2xl leading-7  text-gray-900 dark:text-gray-100 md:max-w-xl">
            <p className="mb-8">Past Experiences</p>
          </div>
          <div className=" dark:font-light sm:pt-10">
            {pastExperiencesData.map((d) => (
              <div key={d.title} className="mb-8 sm:flex">
                {' '}
                <Link
                  className="w-1/5 underline underline-offset-4"
                  href={d.href ? d.href : '/code'}
                >
                  {d.title}
                </Link>{' '}
                <p className="sm:w-4/5">{d.description}</p>
              </div>
            ))}
          </div>
          <div className=" shrink pt-5 text-2xl leading-7  text-gray-900 dark:text-gray-100 md:max-w-xl">
            <p className="">Fun Projects</p>
          </div>

          <ul className="ml-8 list-disc pt-5 leading-snug dark:font-light">
            {projectsData.map((d) => (
              <li key={d.title} className="">
                <div key={d.title} className="flex items-center">
                  {d.title}{' '}
                  {d.href && (
                    <Link className="mx-2" href={d.href}>
                      <BsBoxArrowUpRight />
                    </Link>
                  )}
                  {d.github && (
                    <Link className="mx-2" href={d.github}>
                      <BsGithub />
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
