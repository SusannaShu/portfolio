import React from 'react'
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import HomePage from './component/homePage/HomePage';
import MyArtPage from './component/myArtPage/MyArtPage'
// import ClothesSharingPage from './component/clothesSharingPage/clothesSharingPage'
import FashionShowPage from './component/fashionShowPage/FashionShowPage'


import Project1 from './component/myArtPage/Project1'
import Project2 from './component/myArtPage/Project2'
import Project3 from './component/myArtPage/Project3'
import Project4 from './component/myArtPage/Project4'

// import ReactDOM from "react-dom";

import BehindClothes from './component/fashionShowPage/BehindClothesPage'
import TheirStories from './component/fashionShowPage/TheirStoriesPage'





class App extends React.Component{
  render(){
    return<div> 
      
      <Router>
        
          <Switch>
            <Route exact path="/">
              <HomePage/>
            </Route>
            <Route exact path="/myart">
              <MyArtPage/>
            </Route>
            {/* <Route exact path="/clothessharing">
              <ClothesSharingPage/>
            </Route> */}
            <Route exact path="/fashionshow">
              <FashionShowPage/>
            </Route>

          </Switch>

          <Switch>
{/* 
          <Route exact path="/myart">
            <MyArtPage />
          </Route> */}

          <Route exact path="/myart/project1">
            <Project1 />
          </Route>

          <Route exact path="/myart/project2">
            <Project2 />
          </Route>
          <Route exact path="/myart/project3">
            <Project3 />
          </Route>

          <Route exact path="/myart/project4">
            <Project4 />
          </Route>
          </Switch>

          <Switch>

          <Route exact path="/fashionshow/behindtheclothes">
            <BehindClothes />
          </Route>

          <Route exact path="/fashionshow/theirstories">
            <TheirStories />
          </Route>
          
          </Switch>
        
      </Router>
      
    </div>
  }
}

// ReactDOM.render(
//   <Router>
//     <MyArtPage/>
//   </Router>,
//   document.getElementById("root")
// );

export default App;