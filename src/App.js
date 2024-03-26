import React from 'react'
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import HomePage from './component/homePage/HomePage';
// import ClothesSharingPage from './component/clothesSharingPage/clothesSharingPage'
import FashionShowPage from './component/fashionShowPage/FashionShowPage'

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
         
            <Route exact path="/fashionshow">
              <FashionShowPage/>
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