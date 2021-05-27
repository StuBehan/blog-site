import useBlogPosts from '../Hooks/UseBlogPosts.js'

const BlogPreview = () => {
  const [blogPosts] = useBlogPosts()

  return (
    <div className='blog-preview'>
      <ul>
        {blogPosts.map((post, index) => (
          <li key={`prev-${index}`}>
            <h1>{post.title}</h1>
            <img src={post.image} alt={post.imgAlt}/>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlogPreview;