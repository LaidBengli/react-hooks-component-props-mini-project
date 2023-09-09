import React from 'react'

const Article = ({post}) => {
    const date = post.date || "January 1, 1970"
  return (
    <article>
        <h3>{post.title}</h3>
        <small>{date}</small>
        <p>{post.preview}</p>
    </article>
  )
}

export default Article