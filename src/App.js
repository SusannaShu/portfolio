import React from 'react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from './component/homePage/HomePage'
import WorksPage from './component/worksPage/WorksPage'
import DrawingsPage from './component/drawings/DrawingsPage'
import AboutMePage from './component/about me/AboutMePage'

class App extends React.Component {
  render () {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/'>
              <HomePage/>
            </Route>
            <Route path='/Works'>
              <WorksPage/>
            </Route>
            <Route path='/Drawings'>
              <DrawingsPage/>
            </Route>
            <Route path='/About'>
              <AboutMePage/>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
