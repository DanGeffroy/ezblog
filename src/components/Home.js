import React from 'react';

// eslint-disable-next-line
import {  BrowserRouter as Router,  Route,  Link} from 'react-router-dom';
const Home = () => (
  <div>
  <div className="title-hide homepage">
    <img src={"./logo.png"} alt="logo of the app" className="app-logo"></img>
    <div className="spacer"></div>
     <Link className="btn-white" to={`/ezblog/articles/`}>
       see articles here
     </Link>
  </div>
  </div>
)
export default Home;
