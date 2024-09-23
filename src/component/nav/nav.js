import { Component } from 'react'
// import { connect } from 'react-redux';
// import { setActiveItem } from '../../actions/navigationActions';
import { Link, withRouter } from 'react-router-dom'
import './nav.css'
import { Icon } from 'semantic-ui-react'

class Nav extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isDropdownVisible: false,
      isMobileView: window.innerWidth < 600
    }
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    this.setState({ isMobileView: window.innerWidth < 600 })
  }

  toggleDropdown = () => {
    this.setState(prevState => ({
      isDropdownVisible: !prevState.isDropdownVisible
    }))
  }

  render () {
    const { isDropdownVisible, isMobileView } = this.state

    const { location } = this.props // Destructure location from props
    const menuItems = [
      { name: 'Home', path: '/', external: false },
      { name: 'Works', path: '/Works', external: false },
      { name: 'Sketchbook', path: '/Drawings', external: false },
      { name: 'About', path: '/About', external: false },
      { name: 'SUSU', path: 'https://sheyoufashion.com', external: true }
    ]

    return (
      <div>
        <header id='masthead'>
          {isMobileView && (
            <div className='menu-icon' onClick={this.toggleDropdown}>
              <Icon link name='list' className='icon' size='large'/>
            </div>
          )}
          <nav
            className={`anchor-nav ${
              isMobileView && isDropdownVisible ? 'visible' : ''
            }`}
          >
            {menuItems.map(item =>
              item.external ? (
                <a
                  key={item.name}
                  href={item.path}
                  className='anchor'
                  style={{
                    color:
                      location.pathname === item.path
                        ? 'rgb(255,23,136)'
                        : 'white'
                  }}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className='anchor'
                  style={{
                    color:
                      location.pathname === item.path
                        ? 'rgb(255,23,136)'
                        : 'white'
                  }}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>
        </header>
      </div>
    )
  }
}

export default withRouter(Nav)
