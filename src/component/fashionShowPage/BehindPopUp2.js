import Raect from 'react'
import { Popup} from 'semantic-ui-react';
import BackgroundImage from '../BackgroundImg'
// import FashionMenu from './ShowMenu'
// import Parallax from './BehindParallax'
// import BehindPContent from './BehindPContent'
// import BehindClothesText1 from './BehindClothesText1';
// import ParallaxFree1 from './ParallaxFree1'


class BehindPopUp2 extends Raect.Component{
    render(){
        return<div>
                           {/* page2 */}
            <Popup
            trigger={
                <div style={{position:'absolute', top:1300, left:700}}>
                <BackgroundImage name='face' image='https://i.loli.net/2020/11/14/LojXFMiD14Vd3Hu.png'/>
            </div>}
            >
            <Popup.Content> 
                <p>
                    On this dress I drew faces with "flaws", and tell people it is ok to not be perfect
                </p>
                </Popup.Content>
            </Popup>

            <Popup
            trigger={
                <div style={{position:'absolute', top:1200, left:1197}}>
                <BackgroundImage name='shine with words' image='https://i.loli.net/2020/11/14/UNgZWhbf2DBzxFy.png'/>
            </div>}
            >
            <Popup.Content> 
                <p>
                Using the luminous fabric covered with insulting critics often said to women,
                 I try to picture that people's opinion can not stop girls from shining
                </p>
                </Popup.Content>
            </Popup>
            
            <Popup
            trigger={
                <div style={{position:'absolute', top:1400, left:990}}>
                <BackgroundImage name='burn' image='https://i.loli.net/2020/11/14/3mIUzxSfh1jkgty.png'/>
            </div>}
            >
            <Popup.Content> 
                <p>
                this combination is from a story of a women in middle east who is burned
                and drgged by ropes after being beaten to death by men, because they think she
                insulted the Koran
                </p>
                </Popup.Content>
            </Popup>

            <Popup
            trigger={
            <div style={{position:'absolute', top:742, left:403}}>
            <BackgroundImage name='shine' image='https://i.loli.net/2020/11/14/F36CaQRfz9E1LpO.png'/>
        </div>}
            >
            <Popup.Content> 
                <p>
                This look also want the girls to shine like diamond
                </p>
                </Popup.Content>
            </Popup>


        </div>
    }
}

export default BehindPopUp2