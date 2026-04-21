import Blog from '@/components/SharedComponent/Blog'
import { getAllPosts, getPostBySlug, getPostSlugs } from '@/utils/markdown'
import markdownToHtml from '@/utils/markdownToHtml'
import { format } from 'date-fns'
import Image from 'next/image'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slugs = getPostSlugs()
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ''),
  }))
}

export async function generateMetadata({ params }: any) {
  const data = await params
  const posts = getAllPosts(['title', 'date', 'excerpt', 'coverImage', 'slug'])
  const post = getPostBySlug(data.slug, [
    'title',
    'author',
    'content',
    'metadata',
  ])

  const siteName = process.env.SITE_NAME || 'Your Site Name'
  const authorName = process.env.AUTHOR_NAME || 'Your Author Name'

  if (post) {
    const metadata = {
      title: `${post.title || 'Single Post Page'} | ${siteName}`,
      author: authorName,
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: false,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
    }

    return metadata
  } else {
    return {
      title: 'Not Found',
      description: 'No blog article has been found',
      author: authorName,
      robots: {
        index: false,
        follow: false,
        nocache: false,
        googleBot: {
          index: false,
          follow: false,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
    }
  }
}

export default async function Post({ params }: any) {
  const data = await params
  const posts = getAllPosts(['title', 'date', 'excerpt', 'coverImage', 'slug'])
  const post = getPostBySlug(data.slug, [
    'title',
    'author',
    'authorImage',
    'content',
    'coverImage',
    'date',
  ])

  const content = await markdownToHtml(post.content || '')

  return (
    <>
      <section className='dark:bg-darkmode py-20'>
        <div className='container'>
          <div className='grid md:grid-cols-12 grid-cols-1 items-center'>
            <div className='col-span-8'>
              <div className='flex flex-col sm:flex-row'>
                <span className='text-base text-SlateBlue pr-7 border-r border-solid border-BorderLine dark:border-dark_border w-fit dark:text-white/50'>
                  {format(new Date(post.date), 'dd MMM yyyy')}
                </span>
                <span className='text-base text-SlateBlue sm:pl-7 pl-0 w-fit dark:text-white/50'>
                  13 Comments
                </span>
              </div>
              <h2 className='text-secondary pt-7 text-[40px] leading-[3rem] font-bold dark:text-white'>
                {post.title}
              </h2>
            </div>
            <div className='flex lg:justify-center justify-start items-center gap-6 col-span-4 pt-4 md:pt-0'>
              <Image
                src={post.authorImage}
                alt='image'
                className='rounded-full'
                width={84}
                height={84}
                quality={100}
                style={{ width: 'auto', height: 'auto' }}
              />
              <div>
                <span className='text-[22px] leading-[2rem] text-primary'>
                  Silicaman
                </span>
                <p className='text-xl text-SlateBlue dark:text-darktext'>
                  Author
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='dark:bg-darkmode pt-0 pb-20'>
        <div className='container'>
          <div className='flex flex-wrap justify-center'>
            <div className='w-full'>
              <div className='mb-[60px] h-[300px] md:h-[400px] lg:h-[750px]'>
                <Image
                  src={post.coverImage}
                  alt='image'
                  width={1300}
                  height={0}
                  priority={false}
                  style={{ width: '100%', height: '100%' }}
                  className='h-full w-full object-cover object-center rounded-lg'
                />
              </div>
              <div className='-mx-4 flex flex-wrap'>
                <div className='w-full px-4 lg:w-8/12'>
                  <div className='blog-details xl:pr-10'>
                    <div dangerouslySetInnerHTML={{ __html: content }}></div>
                  </div>
                </div>
                <div className='w-full px-4 lg:w-4/12'>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='bg-LightSoftBlue dark:bg-darklight! lg:py-40 py-16 lg:pb-40 pb-28 -mb-28'>
        <Blog />
      </div>
    </>
  )
}
