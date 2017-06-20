import React from 'react';
// eslint-disable-next-line
import {  BrowserRouter as Router,  Route,  Link} from 'react-router-dom';
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
export default Home;
