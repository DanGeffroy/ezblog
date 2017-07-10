import React from 'react';
// eslint-disable-next-line
import {  BrowserRouter as Router,  Route,  Link} from 'react-router-dom';
import articles from '../articles.json';
const ArticlesListFiltered = ({ match }) => (
  <div>
    <h2>Articles</h2>
    <ul className="articles-list">
    {
     articles.filter(article => article.tags.includes(match.params.tag)).map(function(article) {
       return <li key={article.id}>
         <h3><Link className="articles-list-link"to={`/ezblog/article/${article.title}`}>
           {article.title}
         </Link></h3>
         <ul className="tags">
         {article.tags.map(function(tag) {
            return <li key={tag}>
              <Link className="tag" to={`/ezblog/articles/${tag}`}>
                {tag}
              </Link>
            </li>
           })}
         </ul>
         <p className="article-preview">{article.preview}</p>
         <div className="right-align">
           <Link className="read-more"to={`/ezblog/article/${article.title}`}>
             read more
           </Link>
         </div>
         <hr/>
       </li>
      })}
    </ul>
  </div>
)
export default ArticlesListFiltered;
