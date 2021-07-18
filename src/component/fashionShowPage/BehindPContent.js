import React from 'react'
import BackgroundImage from '../BackgroundImg'
import {Header, Container, Icon} from 'semantic-ui-react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


class ParallaxContent extends React.Component{
    render(){
        return<div>
            <Header style={{ fontSize:130, color:'white'}}> 
                All Materials Are recycled from Fashion Studio Left-overs
            </Header>
    </div>
    }
}

export default ParallaxContent