import React from 'react'
// import BackgroundImage from '../BackgroundImg'
import {Header, Icon} from 'semantic-ui-react'
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link
  } from "react-router-dom";
  
import ParallaxFree3 from '../ParallaxFree3'
import 'semantic-ui-css/semantic.css'

class Sec3 extends React.Component{
    render(){
        return<div>
            {/* project 3 */}

            <ParallaxFree3 strength="200" image='https://i.loli.net/2020/11/21/pQzqFBVU8K1Pw7o.png'/>
           

            <div>
            <Link to="/myart/project3">
            <Header style={{fontSize:70, position:'absolute', top:1600.5, left:1025.5, color:'white'}}>
            Project 
            </Header>
            <br/>
            <Header style={{fontSize:50, position:'absolute', top:1700.5, left:1025.5, color:'white'}}>
            SCAR
            </Header>
            <br />
            
            <Icon name='arrow right' size='huge' inverted style={{position:'absolute', top:1850, left:1025.5}} />
            </Link>
            </div>

        </div>
    }
}

export default Sec3