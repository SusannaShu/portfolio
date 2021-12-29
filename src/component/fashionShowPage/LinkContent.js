import React from 'react'
import BackgroundImage from '../BackgroundImg'
import {Header, Icon} from 'semantic-ui-react'
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link
  } from "react-router-dom";
//   import ParallaxFree1 from './ParallaxFree1'


class ParallaxContent extends React.Component{
    render(){
        return<div>
            
           
            
            <div style={{position:'absolute', top:1600, opacity:0.5}}>
                <BackgroundImage image='https://i.loli.net/2020/11/14/b6C7SRfNJ1ADEI4.jpg'/>
            </div>

            <Link to="/fashionshow/behindtheclothes">
            <div>
                <Header style={{fontSize:70, position:'absolute', top:1660, left: 350, color:'white'}}>
                Behind the Clothes
                </Header>
                <Icon name='arrow right' size='huge' inverted style={{position:'absolute', top:1670, left:1050, color:'white'}} />
             </div>
             </Link>
             
            <div style={{position:'absolute', top:1860, opacity:0.5}}>
                <BackgroundImage image='https://i.loli.net/2020/11/14/xFKkTGZfgIBwMrS.jpg'/>
            </div>

            <Link to="/fashionshow/theirstories">
            <div>
                <Header style={{fontSize:70, position:'absolute', top:1920, left: 450, color:'white'}}>
                Their Stories
                </Header>
                <Icon name='arrow right' size='huge' inverted style={{position:'absolute', top:1920, left:1050, color:'white'}} />
             </div>
             </Link>
    </div>
    }
}

export default ParallaxContent