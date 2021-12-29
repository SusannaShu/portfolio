import React from 'react'
// import BackgroundImage from '../BackgroundImg'
import {Header,Segment} from 'semantic-ui-react'


class ParallaxContent extends React.Component{
    render(){
        return<div >
            {/* <div style={{position:'absolute', top:190, left:380, opacity:0.5}}>
                <BackgroundImage image='https://i.loli.net/2020/11/14/ViqQZE28LnvCdbk.jpg'/>
            </div> */}
<Segment style={{backgroundColor:'black', opacity:0.5,position:'relative', top:150, paddingTop:100, paddingBottom:100}}>

</Segment>
                <Header style={{fontSize:30, position:'absolute', top:175, left:200, color:'white'}}>
                A Fashion Show About Feminism
                </Header>
            <br/>
                <Header style={{fontSize:15, position:'absolute', top:220, left:200, color:'white'}}>
                This First part of the video is from Weibo 
                </Header>
            <br/>
                <Header style={{fontSize:15, position:'absolute', top:240, left:200, color:'white'}}>
                “be a lady they said”，The second part is the recording of SheYu Fashion Show in July, 6, 2020
                </Header>
                
    </div>
    }
}

export default ParallaxContent