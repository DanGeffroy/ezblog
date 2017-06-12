import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import $ from "jquery/dist/jquery.min.js";
import Markdown from 'react-remarkable';
import articles from './articles.json';

var tags = []
            .concat
            .apply([], articles
              .map(article => article.tags))
            .filter((elem, index, self) => index === self.indexOf(elem));

const Home = () => (
  <div>
  <div className="title-hide homepage">
    <h1 className="article-title">ezblog</h1>
    <h3 className="article-date">a front end only blog</h3>
    <div className="spacer"></div>
     <Link className="btn-white" to={`/ezblog/articles/`}>
       see articles here
     </Link>
  </div>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Article = ({ match }) => (

  <div>
  <div className="title-hide">
    <h1 className="article-title">{match.params.articleTitle}</h1>
    <h3 className="article-date">{articles.filter(article => {
               return match.params.articleTitle === article.title ? article : null;
            })[0].date}</h3>
  </div>

    <div className="header-article">
    </div>
    <div className="markdown-body container">
     <Markdown source={articles.filter(article => {
                return match.params.articleTitle === article.title ? article : null;
             })[0].text}/>
    </div>
  </div>
)
const ArticlesListFiltered = ({ match }) => (
  <div>
    <h2>Articles</h2>
    <ul className="articles-list">
    {articles.filter(article => article.tags.includes(match.params.tag)).map(function(article) {
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
const ArticlesList = ({ match }) => (
  <div>
    <h2>Articles</h2>
    <ul className="articles-list">
    {articles.map(function(article) {
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

const NotFound = () => (
  <div>
    <div className="glitch_word_box">
      <div className="line"></div>
      <h2 id="word" className="glitch-title glitch_word0">404</h2>
      <h2 id="word1" className="glitch-title glitch_word1">404</h2>
      <h2 id="word2" className="glitch-title glitch_word2">404</h2>
    </div>
    <h1 className="page-not-found">Page not found</h1>

  </div>
)

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

const BasicExample = () => (
  <Router>
    <div>
      <nav className="nav-fixed">
        <ul>
          <li><Link to="/ezblog/">Home</Link></li>
          <li><Link to="/ezblog/about">About</Link></li>
          <li><Link to="/ezblog/articles">Articles</Link></li>
        </ul>
      </nav>
      <Route component={ScrollToTop} />
      <Route exact path="/ezblog/" component={Home}/>
      <Route path="/ezblog/about" component={About}/>
      <Route path="/ezblog/articles" component={Articles}/>
      <Route path={`/ezblog/article/:articleTitle`} component={Article}/>
    </div>
  </Router>
)


$(window).scroll(function(){

  if($(this).scrollTop() > 400){
    $('.title-hide').css({'transform': 'scale(0.20)'});
    $('.title-hide').css({'opacity': '0'});
  }
  else if($(this).scrollTop() > 300){
    $('.title-hide').css({'transform': 'scale(0.40)'});
    $('.title-hide').css({'opacity': '0.40'});
  }
  else if($(this).scrollTop() > 200){
    $('.title-hide').css({'transform': 'scale(0.60)'});
    $('.title-hide').css({'opacity': '0.60'});
  }
  else if($(this).scrollTop() > 100){
    $('.title-hide').css({'transform': 'scale(0.80)'});
    $('.title-hide').css({'opacity': '0.80'});
  }
  else{
  	$('.title-hide').css({'transform': 'scale(1)'});
    $('.title-hide').css({'opacity': '1'});
  }
});
export default BasicExample
