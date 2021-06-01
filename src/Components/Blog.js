import BlogPost from './BlogPost.js'
import { useState, useEffect } from 'react'

const Blog = () => {
  const [blogPost, setBlogPost] = useState({
    title: '',
    image: '',
    imgAlt: '',
    body: ''
  })

  const getBlog = () => {
    setBlogPost({
      title: 'Test Blog Post',
      image: 'https://socialmedia4us.files.wordpress.com/2018/01/blog.jpg',
      imgAlt: 'placeholder image',
      body: 'This is placeholder text for a blog post'
    })
  }

  useEffect(() => {
    getBlog()
  }, [])

  return(
    <div>
      <BlogPost {...blogPost}/>
    </div>
  )
}

export default Blog;