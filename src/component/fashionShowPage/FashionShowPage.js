import React from 'react'
import FashionMenu from './ShowMenu'
// import BackgroundImage from '../BackgroundImg'
import Video from './Video'
import Parallax from '../Parallax'
import ParallaxContent from './ParallaxContent'
import {Container} from 'semantic-ui-react'
import LinkContent from './LinkContent'
// import BehindParallax from'./BehindParallax'

class FashionShowPage extends React.Component{
    render(){
        return<div>
            <FashionMenu/>
            <Parallax strength={200} styl={3} content={<ParallaxContent/>} image='https://i.loli.net/2020/11/12/1S6ZMwxBirshLjq.jpg'/>

            {/* <div style={{position:'absolute', top:1050 }}>
                <BackgroundImage image='https://i.loli.net/2020/11/14/W6zFUXxHLRec5QV.jpg'/>
            </div> */}

            <Container fluid style={{position:'absolute', top:720}}>
             <Video/>
             </Container>


             <Container fluid style={{ position:"absolute", top:1530} }>
            <Parallax  strength={-100} content={<LinkContent/>} image='https://i.loli.net/2020/11/14/tQzkUVmFjfhol6i.jpg'/>
            </Container>

            <LinkContent/>
            
            </div>
    }
}

export default FashionShowPage;