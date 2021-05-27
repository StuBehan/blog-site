import { useEffect, useState } from 'react';

const useBlogPosts = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  const fetchBlogPosts = async () => {
    await fetch(`http:://localhost:8082/api/blogs`, {
      method: 'GET'
    })
    .then(response => {
      setBlogPosts(response.json())
    })
  }

  useEffect(()=> {
    fetchBlogPosts()
  }, [])

  return blogPosts
}

export default useBlogPosts;