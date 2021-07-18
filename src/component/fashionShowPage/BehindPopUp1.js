import Raect from 'react'
import { Popup, Container, Header} from 'semantic-ui-react';
import BackgroundImage from '../BackgroundImg'
import FashionMenu from './ShowMenu'
import Parallax from './BehindParallax'
import BehindPContent from './BehindPContent'
import BehindClothesText1 from './BehindClothesText1';
import ParallaxFree1 from './ParallaxFree1'


class BehindClothesPage extends Raect.Component{
    render(){
        return<div>
            <Header style={{fontSize:70, position:'absolute', top:30, left: 350}}>
                What inspires me?
            </Header>

            {/* page1 */}
            <Popup
            trigger={
            <div style={{position:'absolute', top:90, left:23}}>
                <BackgroundImage name='rose wedding' image='https://i.loli.net/2020/11/14/6UmXrCQRZ1VjleY.png'/>
            </div>}
            >
            <Popup.Content> 
                <p>The bears and roses on the left side of the garmnet shows the traditional
                    image presenting girls, while the suit on the other side show the image
                     of women in the new era
                </p>
                </Popup.Content>
            </Popup>

            <Popup
            trigger={
            <div style={{position:'absolute', top:90, left:1208}}>
                <BackgroundImage name='be a lady' image='https://i.loli.net/2020/11/14/Uk4bQ3uF5wBoYIt.png'/>
            </div>}
            >
            <Popup.Content> 
                <p>
                    Repeating the theme:"Be A Lady They Said"
                </p>
                </Popup.Content>
            </Popup>

            <Popup
            trigger={
                <div style={{position:'absolute', top:630, left:52}}>
                <BackgroundImage name='she is' image='https://i.loli.net/2020/11/14/dwv93IiJEtKFjAm.png'/>
            </div>}
            >
            <Popup.Content> 
                <p>
                    She is someone, a person, not just plays the role of mom, wife, and sister
                </p>
                </Popup.Content>
            </Popup>


            <Popup
            trigger={
                <div style={{position:'absolute', top:630, left:1208}}>
                <BackgroundImage name='yarn' image='https://i.loli.net/2020/11/14/BbATWqs2lLf7U3C.png'/>
            </div>}
            >
            <Popup.Content> 
                <p>
                    The white yarn represents the wedding dress, aiming to say people have
                    options, like they can choose to have children or do not have them. The more common and comfortable 
                    shirt underneath creates a sense of contradiction to express the concept of diversity
                </p>
                </Popup.Content>
            </Popup>

            <Popup
            trigger={
                <div style={{position:'absolute', top:220, left:205}}>
                <BackgroundImage name='tampoo' image='https://i.loli.net/2020/11/14/MHIzlJdnFiPmBKv.png'/>
            </div>}
            >
            <Popup.Content> 
                <p>
                    I used packaging of tampoons to tell audience that their body and physiological phenomena 
                    are nothing to be ashamed of
                </p>
                </Popup.Content>
            </Popup>
            
            <Popup
            trigger={
                <div style={{position:'absolute', top:42, left:1000}}>
                <BackgroundImage name='body' image='https://i.loli.net/2020/11/14/p4BzrJiI3WEkNyX.png'/>
            </div>}
            >
            <Popup.Content> 
                <p>
                    By sewing dolls, whose shapes are based on parts of human body, on the cloak,
                     I try to uphold no body-shaming
                </p>
                </Popup.Content>
            </Popup>
            
            <Popup
            trigger={
                <div style={{position:'absolute', top:430, left:662}}>
                <BackgroundImage name='rainbow' image='https://i.loli.net/2020/11/14/LgqM9HCaYXF1KzP.png'/>
            </div>}
            >
            <Popup.Content> 
                <p>
                    The color of the dress is inspired by the rainbow flag of
                    LGBT community
                </p>
                </Popup.Content>
            </Popup>
            
           

        </div>
    }
}

export default BehindClothesPage