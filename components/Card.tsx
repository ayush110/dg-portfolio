import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, skills, href, github }) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div
      className={`${
        imgSrc && 'h-full'
      }  overflow-hidden rounded-2xl border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {imgSrc ? (
        <Image
          alt={title}
          src={imgSrc}
          className="rounded-2xl object-cover object-center"
          width={1175}
          height={711}
        />
      ) : null}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        <div className=" mt-[12px]  flex-wrap items-center ">
          {skills?.map((skill) => (
            <div className=" text-tiny text-custom_black-800 border-custom_black-500 mr-4 mb-2 inline-block   rounded-full border py-[2px] px-[12px]">
              <p>{skill}</p>
            </div>
          ))}
        </div>
        <div className="mt-[12px] flex items-center">
          {href && (
            <Link
              href={href}
              className="text-tiny  mr-[30px] flex cursor-pointer items-center rounded-sm py-[2px] font-medium"
              aria-label={`Demo Link to ${title}`}
            >
              Demo &rarr;
            </Link>
          )}
          {github && (
            <Link
              href={github}
              className="text-tiny  mr-[30px] flex cursor-pointer items-center rounded-sm py-[2px] font-medium"
              aria-label={`Demo Link to ${title}`}
            >
              Codebase &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  </div>
)

export default Card
