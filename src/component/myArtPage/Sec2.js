import React from 'react'
import BackgroundImage from '../BackgroundImg'
import {Header, Icon} from 'semantic-ui-react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

import 'semantic-ui-css/semantic.css'

import ParallaxFree2 from '../ParallaxFree2y'

class Sec2 extends React.Component{
    render(){
        return<div>
            {/* project 2 */}
            {/* <div style={{position:'absolute',top:1000}}>
                <BackgroundImage image='https://i.loli.net/2020/11/10/lOapbXtM3Eqhcj8.jpg'/>
            </div>

            <div style={{position:'absolute',top:1223, left: 631}}>
                <BackgroundImage image='https://i.loli.net/2020/11/10/nEN74DlgcziLKRd.jpg'/>
            </div>

            <div style={{position:'absolute',top:1516, left: 91.91, opacity:0.5}}>
                <BackgroundImage image='https://i.loli.net/2020/11/10/sLT2c9MiSmZ5Oy1.jpg'/>
            </div> */}

            <ParallaxFree2 strength='-100'  image="https://i.loli.net/2020/11/21/NILG8EegikmntzW.png"/>

            <div> 
            <Link to="/myart/project2">
            <Header style={{fontSize:70, position:'absolute', top:1086.79, left:137.5, color:'#338FCC'}}>
            Project 2
            </Header>
            <br/>
            <Header style={{fontSize:50, position:'absolute', top:1186.79, left:137.5, color:'#33AECC'}}>
            Virtual Hug
            </Header>
            <br />
            
            <Icon name='arrow right' size='huge' inverted style={{position:'absolute', top:1308, left:138, color:'#33AECC'}} />
            </Link>
            </div>

        </div>
    }
}

export default Sec2