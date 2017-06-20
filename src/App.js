import React from 'react'
import {  BrowserRouter as Router,  Route,  Link} from 'react-router-dom';

import Home from './components/Home.js'
import About from './components/About.js'
import Article from './components/Article.js'
import Articles from './components/Articles.js'

import ScrollToTop from './animation/ScrollToTop.js'
import './animation/ScrollScale.js';

const AppRouter = () => (
  <Router>
    <div>
      <input type="checkbox" id="menu-toggle"/>
      <label id="trigger" htmlFor="menu-toggle"></label>
      <label id="burger" htmlFor="menu-toggle"></label>
      <ul id="menu">
        <li><Link to="/ezblog/">Home</Link></li>
        <li><Link to="/ezblog/about">About</Link></li>
        <li><Link to="/ezblog/articles">Articles</Link></li>
      </ul>
      <Route component={ScrollToTop} />
      <Route exact path="/ezblog/" component={Home}/>
      <Route path="/ezblog/about" component={About}/>
      <Route path="/ezblog/articles" component={Articles}/>
      <Route path={`/ezblog/article/:articleTitle`} component={Article}/>
    </div>
  </Router>
)

export default AppRouter
