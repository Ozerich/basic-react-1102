import React from 'react'
import Article from './article'
import useAccordion from '../custom-hooks/accordion'

export default function ArticleList({ articles }) {
  const { openItemId, toggleOpenItem } = useAccordion()

  const articleItems = articles.map((article) => (
    <li key={article.id}>
      <Article
        article={article}
        onBtnClick={toggleOpenItem(article.id)}
        isOpen={article.id === openItemId}
      />
    </li>
  ))

  return <ul>{articleItems}</ul>
}

//import AccodrionComponent from './accordion-component'
/*
import accordion from '../decorators/accordion'

function ArticleList({ articles, toggleOpenArticle, openArticleId }) {
    const articleItems = articles.map((article) => (
      <li key={article.id}>
        <Article
          article={article}
          onBtnClick={toggleOpenArticle(article.id)}
          isOpen={article.id === openArticleId}
        />
      </li>
    ))

    return <ul>{articleItems}</ul>
}

export default accordion(ArticleList)
*/
