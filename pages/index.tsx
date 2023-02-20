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

const MAX_DISPLAY = 3

export const getStaticProps = async () => {
  const sortedPosts = sortedBlogPost(allBlogs) as Blog[]
  const posts = allCoreContent(sortedPosts)

  return { props: { posts } }
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {HeroSection}
        <RecentPosts posts={posts} />
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="Wszystkie posty"
          >
            All posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}

export const HeroSection = (
  <section className="flex">
    <div className="space-y-2 pt-6 pb-8 md:max-w-2xl md:space-y-4">
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
        ayush shah
      </h1>
      <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
        {siteMetadata.description}
      </p>
      <p className="text-justify text-lg leading-7 text-gray-900 dark:text-gray-100 ">
        Welcome to my personal wiki - a digital space filled with all the cool things I've done and
        thoughts I've had. Whether you're here to explore my projects, read my musings, or just
        stalk me, I'm thrilled to have you here. This website is my virtual playground, where I
        showcase my inner weirdness and unleash my creativity on the world.
      </p>
      <div>
        <Link
          href={`/about`}
          className="text-primary-500  hover:text-primary-600 dark:hover:text-primary-400"
          aria-label={`Read about me`}
        >
          Learn more about me &rarr;
        </Link>
      </div>
    </div>

    <div className="hidden items-center  justify-center md:flex  md:grow">
      <Image
        src={avatar}
        alt="avatar"
        width={192}
        height={192}
        className="h-48 w-48 rounded-full"
      />
    </div>
  </section>
)

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
