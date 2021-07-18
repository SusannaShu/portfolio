import BackgroundImage from '../BackgroundImg'
import React from'react'
import Project1 from './Project1'
import Project2 from './Project2'
import Project3 from './Project3'
import Project4 from './Project4'

import OtherMenu from './OtherMenu'
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class ProjectPage extends React.Component{ 
    

    render(){
        const p=this.props
        const gallery=p.gallery
        return<div>
            <OtherMenu/>
            {gallery}
            <BackgroundImage image='https://i.loli.net/2020/11/12/fgTzcx2wJqWlhNP.jpg'/>

        </div>
    }
}
ReactDOM.render(
    <Router>
      <ProjectPage/>
    </Router>,
    document.getElementById("root")
  );

export default ProjectPage