import React, { Component } from 'react'
import { Menu, Segment, Header } from 'semantic-ui-react'
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  Link
} from "react-router-dom";

export default class OtherMenu extends Component {
  state = { activeItem: 'myart' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item
            as={Link} to='/'
            name='Home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
            style={{ size: 40 }}
          />
          <Menu.Item
            as={Link} to='/myart'
            name='My Art'
            active={activeItem === 'myart'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={'a'} href='https://www.sheyoufashion.com/#/'
            name='Clothes Sharing'
            active={activeItem === 'clothessharing'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link} to='/fashionshow'
            name='Fashion Show'
            active={activeItem === 'fashionshow'}
            onClick={this.handleItemClick}
          />


          <Menu.Menu position='right'as={Link} to='/' >
            <Segment style={{paddingTop:5,paddingBottom:0,marginTop:0,marginBottom:0,marginRight:10}}>
            <Header as='h2' >
              Susanna Shu
            </Header>
            </Segment>
            
          </Menu.Menu>
        </Menu>
      </Segment>
    )
  }
}