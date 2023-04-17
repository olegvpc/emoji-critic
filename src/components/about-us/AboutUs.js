import React from 'react';
import './AboutUs.css';
import SiteHistory from "./SiteHistory";
import SiteMission from "./SiteMission";
import { Route, Link, useRouteMatch } from "react-router-dom";

function AboutUs () {
    const { url, path} = useRouteMatch()
  return (
    <div className="about-us">
      {/*<p>*/}
      {/* Здесь вы можете узнать больше о нашей миссии и истории появления нашего приложения.*/}
      {/*</p>*/}
      <ul>
        <li>
            <Link to={`${url}/site-history`}>История сайта</Link>
        </li>
        <li>
            <Link to={`${url}/site-mission`}>Миссия сайта</Link>
        </li>
      </ul>
        <Route path={`${path}/site-history`}>
          <SiteHistory />
        </Route>
        <Route path={`${path}/site-mission`}>
        <SiteMission />
      </Route>
    </div>
  )
}

export default AboutUs;