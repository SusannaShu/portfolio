import Raect from 'react'
import {Container} from 'semantic-ui-react';
// import BackgroundImage from '../BackgroundImg'
import FashionMenu from './ShowMenu'
import Parallax from './BehindParallax'
import BehindPContent from './BehindPContent'
import BehindClothesText1 from './BehindClothesText1';
import ParallaxFree1 from './ParallaxFree1'
import BehindPopUp1 from './BehindPopUp1'
import ParallaxFree2 from './ParallaxFree2'
import BehindPopUp2 from './BehindPopUp2'
import BehindClothesText2 from './BehindClothesText2'


class BehindClothesPage extends Raect.Component{
    render(){
        return<div>
            <FashionMenu/>
             
           
            <ParallaxFree1 content={<BehindPopUp1/>} image="https://i.loli.net/2020/11/21/xuw8AJcHpasbPWz.png"/>

        
            <BehindClothesText1/> 

            <ParallaxFree2  image="https://i.loli.net/2020/11/21/xuw8AJcHpasbPWz.png"/>
            <BehindPopUp2/>

            <BehindClothesText2/>


                <Container fluid style={{ position:"absolute", top:1930} }>
                <Parallax strength={-200} content={<BehindPContent/>} image={'https://i.loli.net/2020/11/14/wezLO6uUYNpDb3i.jpg'} />
                </Container>
        </div>
    }
}

export default BehindClothesPage