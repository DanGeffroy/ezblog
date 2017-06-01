import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import $ from "jquery/dist/jquery.min.js";
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
  <div className="title-hide">
    <h1 classname="article-title">{match.params.articleTitle}</h1>
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

const Articles = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
    {articles.map(function(article) {
       return <li  key={article.id}>
         <Link to={`article/${article.title}`}>
           {article.title}
         </Link>
       </li>
      })}
    </ul>

    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

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
