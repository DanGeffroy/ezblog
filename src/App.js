import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Markdown from 'react-remarkable';
import articles from './articles.json';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Article = ({ match }) => (
  <div>
    <h3>{match.params.articleTitle}</h3>
    <div className="markdown-body">
     <Markdown source={articles.filter(article => {
                return match.params.articleTitle === article.title ? article : null;
             })[0].text}/>
    </div>
  </div>
)

const Articles = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
    {articles.map(function(article) {
       return <li  key={article.id}>
         <Link to={`${match.url}/${article.title}`}>
           {article.title}
         </Link>
       </li>
      })}
    </ul>

    <Route path={`${match.url}/:articleTitle`} component={Article}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/article">Article</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/article" component={Articles}/>
    </div>
  </Router>
)
export default BasicExample
