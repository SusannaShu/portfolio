import React from 'react'
// import BackgroundImage from '../BackgroundImg'
import {Header, Icon} from 'semantic-ui-react'
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link
  } from "react-router-dom";
  import ParallaxFree4 from '../ParallaxFree4'

import 'semantic-ui-css/semantic.css'

class Sec4 extends React.Component{
    render(){
        return<div>
            <ParallaxFree4 strength="-100" image="https://i.loli.net/2020/11/11/P3ThmSr9qtY2vXG.jpg"/>
                        {/* project 4 */}
                        {/* <div style={{position:'absolute',top:2894}}>
                <BackgroundImage image='https://i.loli.net/2020/11/11/P3ThmSr9qtY2vXG.jpg'/>
            </div>

            <div style={{position:'absolute',top:3542, left: 394}}>
                <BackgroundImage image='https://i.loli.net/2020/11/11/DwZfYRdlI5SoqWB.jpg'/>
            </div>
             */}
            <div>
            <Link to="/myart/project4">
            <Header style={{fontSize:70, position:'absolute', top:2485, left:410, color:'white'}}>
            Project 4 Dystopia
            </Header>
            
            <Icon name='arrow right' size='huge' inverted style={{position:'absolute', top:2495, left:1269}} />
            </Link>
            </div>


        </div>
    }
}

export default Sec4