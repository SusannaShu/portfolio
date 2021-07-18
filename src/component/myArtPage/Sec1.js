import React from 'react'
import BackgroundImage from '../BackgroundImg'
import {Header, Icon} from 'semantic-ui-react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import Parallax from '../Parallax';
  import ParallaxFree1 from '../ParallaxFree1'

class Sec1 extends React.Component{
    render(){
        var pictures=document.getElementsByClassName("pictures");
        pictures.onmouseover=function(){
            this.circular=true;
        }
        pictures.onmouseout=function(){
            this.circular=true;
        }


        return<div>
            {/* <Parallax image='https://i.loli.net/2020/11/07/7D2I6RoGEwJXh9q.jpg' strength='200' />

            <Parallax image='https://i.loli.net/2020/11/07/Ed9waxocND6qitI.jpg'
             strength='200' styl={{position:'absolute',top:49.71, left:861.91}}
             /> */}




         <div >

             <ParallaxFree1 strength='200'  image="https://i.loli.net/2020/11/21/2Zey4pic3HaRD7g.png"/>
            
              {/* <div circular="false"  className="pictures" style={{position:'absolute'}}>
                 <BackgroundImage image='https://i.loli.net/2020/11/07/7D2I6RoGEwJXh9q.jpg'/>
             </div> */}

             {/* <div circular="false"  className="pictures" style={{position:'absolute', top:49.71, left:861.91}}>
                 <BackgroundImage image='https://i.loli.net/2020/11/07/Ed9waxocND6qitI.jpg'/>
             </div>

             <div circular="false"  className="pictures" style={{position:'absolute', top:524, left:745}}>
                 <BackgroundImage image='https://i.loli.net/2020/11/07/9xC1lihSPrD7mZ8.jpg'/>
             </div>

             <div circular="false"  className="pictures" style={{position:'absolute', top:404.23, left:974.57, opacity:0.5}}>
                 <BackgroundImage image='https://i.loli.net/2020/11/09/gsGF5SXyqKlkWEU.jpg'/>
             </div> */}


            
             <div>
             <Link to="/myart/project1">
             <Header style={{fontSize:70, position:'absolute', top:400, left:980, color:'white'}}>
             Project 1
             </Header>
             <br/>
             <Header style={{fontSize:50, position:'absolute', top:500, left:980, color:'white'}}>
             WOMEN 2020
             </Header>
             <br />
             

             <Icon name='arrow right' size='huge' inverted style={{position:'absolute', top:650, left:980, color:'white'}} />

             </Link>
             </div>


             </div>
            
        </div> 
    }
}

export default Sec1;
