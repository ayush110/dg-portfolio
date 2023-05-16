import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import Image from '@/components/Image'
import avatar from 'public/static/images/avatar.jpeg'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import { sortedBlogPost, allCoreContent } from 'pliny/utils/contentlayer'
import { InferGetStaticPropsType } from 'next'
import { allBlogs } from 'contentlayer/generated'
import type { Blog } from 'contentlayer/generated'
import { CiMail } from 'react-icons/ci'
import { CiLinkedin } from 'react-icons/ci'
import { CiTwitter } from 'react-icons/ci'

const MAX_DISPLAY = 3

export const getStaticProps = async () => {
  const sortedPosts = sortedBlogPost(allBlogs) as Blog[]
  const posts = allCoreContent(sortedPosts)

  return { props: { posts } }
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.author} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">{HeroSection}</div>
    </>
  )
}

export const HeroSection = (
  <section className="flex">
    <div className="space-y-2 pt-6 pb-8 md:max-w-2xl md:space-y-4">
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
        ayush shah
      </h1>
      <br></br>

      <p className="shrink  text-lg leading-7 text-gray-900  dark:text-gray-100">
        Welcome! I'm a second year{' '}
        <Link
          className="underline underline-offset-4"
          href="https://uwaterloo.ca/systems-design-engineering/about-systems-design-engineering/what-systems-design-engineering"
        >
          systems design engineering
        </Link>{' '}
        student at UWaterloo who loves to learn and build things.
      </p>
      <p className="  shrink text-lg leading-7 text-gray-900 dark:text-gray-100">
        I often think and{' '}
        <Link className="underline underline-offset-4" href="/blog">
          write
        </Link>{' '}
        about tech and personal growth. My current mission is to leverage my interests in robotics,
        machine learning and climate to impact the world.
      </p>
      <p className="  shrink text-lg leading-7 text-gray-900 dark:text-gray-100">
        Currently interning at{' '}
        <Link className="underline underline-offset-4" href="https://miovision.com/">
          Miovision
        </Link>{' '}
        - helping build communities with better mobility. In the past I worked with Geotab, BMO, and
        STEM Fellowship.
      </p>

      <div>
        <div className="flex">
          <p className=" flex shrink text-lg leading-7 text-gray-900 dark:text-gray-100">
            Want to work together? Reach out &rarr; &nbsp;
          </p>
          <div className="flex">
            <Link href={`mailto:${siteMetadata.email}`}>
              <CiMail size={32} />
            </Link>
            <Link href={siteMetadata.linkedin}>
              <CiLinkedin size={32} />
            </Link>
            <Link href={siteMetadata.twitter}>
              <CiTwitter size={32} />
            </Link>
          </div>
        </div>
      </div>
    </div>

    <div className=" hidden  items-center  justify-center  md:flex md:shrink-0 md:grow">
      <Image
        src={avatar}
        alt="avatar"
        width={192}
        height={192}
        className="h-48 w-48 rounded-full "
      />
    </div>
  </section>
)
/*
export const RecentPosts = ({ posts }: { posts: Omit<Blog, 'body' | '_raw' | '_id'>[] }) => {
  return (
    <section className="pt-8">
      <h2 className="mb-3 text-3xl font-bold leading-8 tracking-tight">Recent posts</h2>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {!posts.length && 'No posts found.'}
        {posts.slice(0, MAX_DISPLAY).map((post) => {
          const { slug, date, title, summary, tags } = post
          return (
            <li key={slug} className="py-12">
              <article>
                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                    </dd>
                  </dl>
                  <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold leading-8 tracking-tight">
                          <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                            {title}
                          </Link>
                        </h2>
                        <div className="flex flex-wrap">
                          {tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>
                      </div>
                      <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                        {summary}
                      </div>
                    </div>
                    <div className="text-base font-medium leading-6">
                      <Link
                        href={`/blog/${slug}`}
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label={`Read "${title}"`}
                      >
                        Read more &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
*/
