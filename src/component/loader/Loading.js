import React from 'react'
import { Icon } from 'semantic-ui-react'
import './loading.css'

class Loader extends React.Component {
    
    constructor (props) {
        super(props)
        this.state = {
        }
      }
    
      componentDidMount () { }
    
    
    render () {
    return (
        <div className="loading-container">
        <Icon name='heart' size='huge' color='pink' className="heart icon loading-icon"/>
      </div>
    )
  }
}

export default Loader
