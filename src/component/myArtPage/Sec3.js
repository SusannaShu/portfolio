import React from 'react'
import BackgroundImage from '../BackgroundImg'
import {Header, Icon} from 'semantic-ui-react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
import ParallaxFree3 from '../ParallaxFree3'
import 'semantic-ui-css/semantic.css'

class Sec3 extends React.Component{
    render(){
        return<div>
            {/* project 3 */}

            <ParallaxFree3 strength="200" image='https://i.loli.net/2020/11/21/pQzqFBVU8K1Pw7o.png'/>
            {/* <div style={{position:'absolute',top:1356}}>
                <BackgroundImage image='https://i.loli.net/2020/11/11/yR9vo1Zw6QXsHqu.jpg'/>
            </div>

            <div style={{position:'absolute',top:2199}}>
                <BackgroundImage image='https://i.loli.net/2020/11/11/4kxJaiwPH9Eevjg.jpg'/>
            </div> */}

            <div>
            <Link to="/myart/project3">
            <Header style={{fontSize:70, position:'absolute', top:1554.5, left:1125.5, color:'white'}}>
            Project 3
            </Header>
            <br/>
            <Header style={{fontSize:50, position:'absolute', top:1654.5, left:1125.5, color:'white'}}>
            SCAR
            </Header>
            <br />
            
            <Icon name='arrow right' size='huge' inverted style={{position:'absolute', top:2550, left:1125.5}} />
            </Link>
            </div>

        </div>
    }
}

export default Sec3