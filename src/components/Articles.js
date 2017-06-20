import React from 'react';
// eslint-disable-next-line
import {  BrowserRouter as Router,  Route,  Link} from 'react-router-dom';
import articles from '../articles.json';
import ArticlesListFiltered from './ArticlesListFiltered.js'
import ArticlesList from './ArticlesList.js'
var tags = []
            .concat
            .apply([], articles
              .map(article => article.tags))
            .filter((elem, index, self) => index === self.indexOf(elem));
const Articles = ({ match }) => (
  <div>
    <h4>All tags</h4>
    <ul className="tags">
    {tags.map(function(tag) {
       return <li key={tag}>
         <Link className="tag" to={`/ezblog/articles/${tag}`}>
           {tag}
         </Link>
       </li>
      })}
    </ul>
    <Route path={`${match.url}/:tag`} component={ArticlesListFiltered}/>
    <Route exact path={match.url} component={ArticlesList}/>
  </div>
)
export default Articles;
