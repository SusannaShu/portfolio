import Raect from 'react'
import { Header,Icon} from 'semantic-ui-react';

import ParallaxStories from './ParallaxStories'
import FashionMenu from './ShowMenu'
import Foot from '../Foot';


class TheirStoriesPage extends Raect.Component{
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    render(){
        return<div>
            
                    <FashionMenu/>
                    <ParallaxStories strength={200}  image={'https://s2.loli.net/2021/12/30/zaRTX3FkZdPmJEw.png'}/>
                    <a href="https://www.sohu.com/a/375331757_120052319">
                    <Header  style={{fontSize:50,color:'white', position:'absolute', top:200,left:150}}>
                        No Period Shaming
                    </Header>
                    <Icon name='arrow right' size='huge' inverted style={{position:'absolute', top:200, left:1050, color:'white'}} />
                    </a>



                   <ParallaxStories strength={200}  image={'https://i.loli.net/2020/11/14/4XEQawoJpfBqHxD.jpg'}/>
                   <a href="https://www.huffpost.com/entry/powerful-art-exhibit-powerfully-answers-the-question-what-were-you-wearing_n_59baddd2e4b02da0e1405d2a">
                   <Header  style={{fontSize:50,color:'white', position:'absolute', top:460,left:150}}>
                                Art Exhibit Powerfully Answers The Question : 
                                <br/>
                            What Were You Wearing?
                    </Header>
                    <Icon name='arrow right' size='huge' inverted style={{position:'absolute', top:530, left:1050, color:'white'}} />
                   </a>


                    <ParallaxStories strength={200}  image={'http://www.youngfeminist.eu/wp-content/uploads/2016/08/gender_stereotypes_1_0.jpg'}/>
                    <a href="https://www.sohu.com/a/375331757_120052319">
                    <Header  style={{fontSize:50,color:'white', position:'absolute', top:790,left:150}}>
                        Gender Stereotype
                    </Header>
                    <Icon name='arrow right' size='huge' inverted style={{position:'absolute', top:790, left:1050, color:'white'}} />
                    </a>


                    <ParallaxStories strength={200}  image={'https://bahaiteachings.org/wp-content/uploads/2013/05/Domestic-Violence.jpg'}/>
                    <a href="https://weibo.com/6861547519/JorV5bSeq?type=comment#_rnd1605348665295">
                    <Header  style={{fontSize:50,color:'white', position:'absolute', top:1090,left:150}}>
                        Domestic Violence: Lamu Case
                        </Header>
                    
                    <Icon name='arrow right' size='huge' inverted style={{position:'absolute', top:1090, left:1050, color:'white'}} />
                    </a>

                    <a href="https://www.douban.com/group/topic/163860647/?type=rec">
                    <ParallaxStories strength={200}  image={'https://s2.loli.net/2021/12/30/J3j2YByQWXrc6xO.jpg'}/>
                    <Header  style={{fontSize:50,color:'white', position:'absolute', top:1360,left:150}}>
                        Female workers In the Covid
                    </Header>
                    <Icon name='arrow right' size='huge' inverted style={{position:'absolute', top:1390, left:1050, color:'white'}} />
                    </a>


                    
                    
                     {/* <Parallax strength={200} content={'What Were You Weaing'} image={'https://i.loli.net/2020/11/14/4XEQawoJpfBqHxD.jpg'}/>

                    <Parallax strength={200} content={'Domestic Violence'} image={'https://i.loli.net/2020/11/14/db9oLyFVjgS2lsO.jpg'}/>

                    <Parallax strength={200} content={'Domestic Violence'}image={'https://i.loli.net/2020/11/14/i8v5pH1NKayFPzn.jpg'}/>

                    <Parallax strength={200} image={'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3365358438,4208652564&fm=11&gp=0.jpg'}/>

                    <Parallax strength={200} image={'https://img2.doubanio.com/view/group_topic/l/public/p243638243.webp'}/> */}

                   

                    <Foot/>
        </div>
    }
}

export default TheirStoriesPage