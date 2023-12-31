import Link from '@/components/Link'

export default function Current() {
  return (
    <div className=" shrink    text-gray-900 dark:text-gray-100 ">
      <p className="mb-2 text-2xl">Currently I'm</p>
      <ul className="ml-4 list-disc font-light leading-snug">
        <li>
          Exploring climate tech at{' '}
          <Link className="underline underline-offset-4" href="https://www.floodbase.com/">
            Floodbase
          </Link>{' '}
          (seeded by Google)
        </li>
        <li>
          Diving deep into the robotics and embedded world - follow my journey{' '}
          <Link className="underline underline-offset-4" href="/">
            here
          </Link>{' '}
        </li>
        <li>
          Catching up on my{' '}
          <Link className="underline underline-offset-4" href="/">
            reading log
          </Link>{' '}
        </li>
      </ul>
    </div>
  )
}
