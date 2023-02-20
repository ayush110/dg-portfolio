import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import Icon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'

interface Skill {
  name: string
  icon: ReactNode
}

interface Job {
  company: string
  title: string
  date: string
  responsibilities: string[]
}

const jobs: Job[] = [
  {
    company: 'STX Next',
    title: 'Javascript developer',
    date: '04.2022 – Present',
    responsibilities: [
      'Working on maintaining and developing a mobile application',
      'Creating a chrome extension',
      'Working on a fin-tech project',
      'Integrating with payment systems',
      'Creating an MVP of the project',
      'Assisting and advising other team members',
      'Technical consultation with the client',
      'Working with foreign clients in different time zones',
      'Code reviews, refactoring, testing.',
    ],
  },
]

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = content

  return (
    <>
      <PageSEO title={`about • ${name}`} description={`about me • ${name}`} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            about me
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            {/* <Image
              src={avatar}
              alt="avatar"
              width={192}
              height={192}
              className="h-48 w-48 rounded-full"
            /> */}
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>

            <div className="flex space-x-3 pt-6">
              <Icon kind="mail" href={`mailto:${email}`} />
              <Icon kind="github" href={github} />
              <Icon kind="linkedin" href={linkedin} />
              <Icon kind="twitter" href={twitter} />
            </div>
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
            <section>{children}</section>

            <section>
              <h2>💼 Experience</h2>
              {jobs.map(({ company, title, date, responsibilities }) => (
                <Job
                  key={company}
                  company={company}
                  title={title}
                  date={date}
                  responsibilities={responsibilities}
                />
              ))}
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

const Skill = ({ icon: Icon, name }) => {
  return (
    <div className="dark:bg-darkPrimary hover:dark:bg-darkSecondary flex origin-center transform items-center justify-center gap-4 rounded-sm border border-gray-300 px-4 transition duration-300 hover:border-gray-500 dark:border-neutral-700 hover:dark:border-neutral-500 sm:justify-start md:origin-top">
      <div className="pointer-events-none relative select-none transition group-hover:scale-110">
        <Icon className="h-8 w-8 fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400" />
      </div>
      <p className="pointer-events-none select-none text-sm font-semibold">{name}</p>
    </div>
  )
}

const Job = ({ company, title, date, responsibilities }: Job) => {
  return (
    <div className="mb-16">
      <h3 className="m-0">{title}</h3>
      <div className="dark:text-white">{company}</div>
      <div className="text-sm">{date}</div>
      <div className="mt-4 dark:text-white">My job responsibilities:</div>
      <ul>
        {responsibilities.map((responsibility) => (
          <li key={responsibility}>{responsibility}</li>
        ))}
      </ul>
    </div>
  )
}
