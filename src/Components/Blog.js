import BlogPost from './BlogPost.js'
import { useState } from 'react'

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
      image: '',
      imgAlt: '',
      body: ''
    })
  }

  return(
    <div>
      <BlogPost />
    </div>
  )
}

export default Blog;