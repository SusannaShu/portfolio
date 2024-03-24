import React, { Component } from 'react'
import { Menu, Segment, Header, Dropdown } from 'semantic-ui-react'
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  Link
} from 'react-router-dom'

export default class Nav extends Component {
  state = { activeItem: 'myart' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render () {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item
            as={Link}
            to='/'
            name='Home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
            style={{ size: 40 }}
          />{' '}
          <Menu.Item
            as={Link}
            to='/myart'
            name='Arts'
            active={activeItem === 'myart'}
            onClick={this.handleItemClick}
          />{' '}
          <Dropdown item text='Works'>
            {/* 四个竖着的板块 */}{' '}
            <Dropdown.Menu>
              <Dropdown.Item> Fashion Projects </Dropdown.Item>{' '}
              <Dropdown.Item> Tech Projects </Dropdown.Item>{' '}
              <Dropdown.Item> Art Projects </Dropdown.Item>{' '}
              <Dropdown.Item> Paintings </Dropdown.Item>{' '}
            </Dropdown.Menu>{' '}
          </Dropdown>{' '}
          <Menu.Item
            as={'a'}
            href='https://www.sheyoufashion.com/#/'
            name='Clothes Sharing'
            active={activeItem === 'clothessharing'}
            onClick={this.handleItemClick}
          />{' '}
          <Menu.Item
            as={Link}
            to='/fashionshow'
            name='Fashion Show'
            active={activeItem === 'fashionshow'}
            onClick={this.handleItemClick}
          />{' '}
          <Menu.Menu position='right' as={Link} to='/'>
            <Segment
              style={{
                paddingTop: 5,
                paddingBottom: 0,
                marginTop: 0,
                marginBottom: 0,
                marginRight: 10
              }}
            >
              <Header as='h2'> Susanna Shu </Header>{' '}
            </Segment>{' '}
          </Menu.Menu>{' '}
        </Menu>{' '}
      </Segment>
    )
  }
}
