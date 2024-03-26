import React from 'react'
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import HomePage from './component/homePage/HomePage';




class App extends React.Component{
  render(){
    return<div> 
      
      <Router>
        
          <Switch>
            <Route exact path="/">
              <HomePage/>
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