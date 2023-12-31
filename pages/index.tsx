import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Current from '@/components/Current'

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.author} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">{HeroSection}</div>
    </>
  )
}

export const HeroSection = (
  <section className="flex">
    <div className="space-y-2 pt-6 pb-8 md:max-w-3xl md:space-y-4">
      <h1 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 selection:text-transparent dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-8xl md:leading-14 xl:text-9xl">
        ayush shah
      </h1>
      <br></br>
      <div className=" shrink text-2xl font-light leading-7  text-gray-900 dark:text-gray-100 md:max-w-xl">
        <p className="mb-8">
          Welcome! I'm a third year{' '}
          <Link
            className="bg-emerald-900/25 dark:bg-cyan-900/40 "
            href="https://uwaterloo.ca/systems-design-engineering/about-systems-design-engineering/what-systems-design-engineering"
          >
            {' '}
            Systems Design Engineering
          </Link>{' '}
          student at the University of Waterloo.
        </p>
        <p className="mb-8">I love solving problems and making things.</p>
        <p>
          Reach out at{' '}
          <Link
            className="bg-emerald-900/25 dark:bg-cyan-900/40 "
            href="mailto:{ayush110shah@gmail.com}"
          >
            {' '}
            ayush110shah@gmail.com!
          </Link>
        </p>
      </div>
      <div>
        <hr className="mt-20 mb-12 w-96"></hr>
        <Current />
      </div>
    </div>
  </section>
)
