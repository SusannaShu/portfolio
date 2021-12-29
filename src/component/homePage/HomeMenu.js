import React, { Component } from 'react'
import { Grid, Menu, Header,Segment } from 'semantic-ui-react'
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  Link
} from "react-router-dom";

// import HomePage from '../homePage/HomePage';
// import MyArtPage from '../myArtPage/MyArtPage'
// import ClothesSharingPage from '../clothesSharingPage/clothesSharingPage'
// import FashionShowPage from '../fashionShowPage/FashionShowPage'






export default class HomeMenu extends Component {
  state = { activeItem: 'name' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  

  render() {
    const { activeItem } = this.state
    return (
    <div style={{backgroundColor:'rgba(255,255,255,.5)', paddingTop:40, paddingBottom:50}}>
      <Grid>
        <Grid.Column stretched width={12}>
          
            <Header style={{fontSize:80, position:'absolute', top:40, left:50}}>
            Susanna Shu
            </Header>
          
        </Grid.Column>

        <Grid.Column width={4}>
          <Menu fluid vertical tabular='right'>
            <Menu.Item style={{fontSize:20, fontWeight:'bold'}}
              as={Link} to='/'
              name='Home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
            <Menu.Item style={{fontSize:20, fontWeight:'bold'}}
              as={Link} to='/myart'
              name='My Art'
              active={activeItem === 'myart'}
              onClick={this.handleItemClick}
            />
            <Menu.Item style={{fontSize:20, fontWeight:'bold'}}
              as={'a'} href='https://www.sheyoufashion.com/#/'
              name='Clothes Sharing'
              active={activeItem === 'clothessharing'}
              onClick={this.handleItemClick}
            />
            <Menu.Item style={{fontSize:20, fontWeight:'bold'}}
              as={Link} to='/fashionshow'
              name='Fashion Show'
              active={activeItem === 'fashionshow'}
              onClick={this.handleItemClick}
            />
          </Menu>

        
        </Grid.Column>
      </Grid>

      {/* <Router>
          <Switch>
            <Route path="/">
              <HomePage/>
            </Route>
            <Route path="/myart">
              <MyArtPage/>
            </Route>
            <Route path="/clothessharing">
              <ClothesSharingPage/>
            </Route>
            <Route path="/fashionshow">
              <FashionShowPage/>
            </Route>

          </Switch>
        
      </Router> */}
      </div>
    )
  }
}