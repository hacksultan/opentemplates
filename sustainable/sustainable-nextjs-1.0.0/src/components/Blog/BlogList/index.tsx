import React from 'react'
import BlogCard from '@/components/SharedComponent/Blog/blogCard'
import { getAllPosts } from '@/utils/markdown'

const BlogList: React.FC = () => {
  const posts = getAllPosts(['title', 'date', 'excerpt', 'coverImage', 'slug'])

  return (
    <section
      className='flex flex-wrap justify-center dark:bg-darkmode py-20'
      id='blog'>
      <div className='container'>
        <div className='grid grid-cols-12 gap-7'>
          {posts.map((blog, i) => (
            <div
              key={i}
              className='w-full lg:col-span-4 md:col-span-6 col-span-12'
              data-aos='fade-up'
              data-aos-delay='200'
              data-aos-duration='1000'>
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogList
