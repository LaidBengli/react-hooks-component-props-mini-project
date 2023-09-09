import React from 'react'
import Article from './Article'

const ArticleList = ({articles}) => {
  return (
   <main>
     {articles.map((article) =>(
        <Article key={article.id} post = {article} />
     ))}
   </main>
  )
}

export default ArticleList