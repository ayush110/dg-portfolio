import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import Link from 'next/link'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects | ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Just some of the things I've worked on. Check out my{' '}
            <Link className="underline underline-offset-4" href={siteMetadata.github}>
              github
            </Link>{' '}
            for more!
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                skills={d.skills}
                href={d.href}
                github={d.github}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
