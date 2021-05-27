const BlogPost = ({ title, body,  image, imgAlt }) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt={imgAlt}/>
      <p>{body}</p>
    </div>
  )
}

export default BlogPost;