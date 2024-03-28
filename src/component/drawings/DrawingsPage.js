import React from 'react'
import Nav from '../nav/nav.js'

class DrawingPage extends React.Component { 
    constructor (props) {
        super(props)
        this.state = {
        }
      }
    
      componentDidMount () { }
    
    
    render () {
    return (
      <div>
       <Nav/>
        
        <div>DrawingPage</div>
      </div>
    )
  }}

export default DrawingPage
