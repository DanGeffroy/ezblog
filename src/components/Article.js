import React from 'react';
import articles from '../articles.json';
import $ from "jquery/dist/jquery.min.js";
import Markdown from 'react-remarkable';
function scrollToArticle(){
  $('html, body').animate({
            scrollTop: $(".markdown-body").offset().top
        }, 800);
}
const Article = ({ match }) => (

  <div>
  <div className="title-hide">
    <h1 className="article-title">{match.params.articleTitle}</h1>
    <h3 className="article-date">{articles.filter(article => {
               return match.params.articleTitle === article.title ? article : null;
            })[0].date}</h3>
  </div>
  <div className="arrow-container animated fadeInDown" onClick={scrollToArticle}>
      <div className="arrow-2">
        <i className="fa fa-angle-down"></i>
      </div>
      <div className="arrow-1 animated hinge infinite zoomIn"></div>
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

export default Article;
