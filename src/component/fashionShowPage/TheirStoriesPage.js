import Raect from 'react'
import { Header,Icon} from 'semantic-ui-react';

import ParallaxStories from './ParallaxStories'
import Parallax from '../Parallax'



class TheirStoriesPage extends Raect.Component{
    render(){
        return<div>
            
                    
                    <ParallaxStories strength={200}  image={'https://thefertilechickonline.com/wp-content/uploads/2017/08/download-19.jpeg'}/>
                    <a href="https://www.sohu.com/a/375331757_120052319">
                    <Header  style={{fontSize:50,color:'white', position:'absolute', top:130,left:150}}>
                        No Period Shaming
                    </Header>
                    <Icon name='arrow right' size='huge' inverted style={{position:'absolute', top:130, left:1050, color:'white'}} />
                    </a>



                   <ParallaxStories strength={200}  image={'https://i.loli.net/2020/11/14/4XEQawoJpfBqHxD.jpg'}/>
                   <a href="https://www.huffpost.com/entry/powerful-art-exhibit-powerfully-answers-the-question-what-were-you-wearing_n_59baddd2e4b02da0e1405d2a">
                   <Header  style={{fontSize:50,color:'white', position:'absolute', top:390,left:150}}>
                                Art Exhibit Powerfully Answers The Question : 
                                <br/>
                            What Were You Wearing?
                    </Header>
                    <Icon name='arrow right' size='huge' inverted style={{position:'absolute', top:460, left:1050, color:'white'}} />
                   </a>


                    <ParallaxStories strength={200}  image={'http://www.youngfeminist.eu/wp-content/uploads/2016/08/gender_stereotypes_1_0.jpg'}/>
                    <a href="https://www.sohu.com/a/375331757_120052319">
                    <Header  style={{fontSize:50,color:'white', position:'absolute', top:720,left:150}}>
                        Gender Stereotype
                    </Header>
                    <Icon name='arrow right' size='huge' inverted style={{position:'absolute', top:720, left:1050, color:'white'}} />
                    </a>


                    <ParallaxStories strength={200}  image={'https://bahaiteachings.org/wp-content/uploads/2013/05/Domestic-Violence.jpg'}/>
                    <a href="https://weibo.com/6861547519/JorV5bSeq?type=comment#_rnd1605348665295">
                    <Header  style={{fontSize:50,color:'white', position:'absolute', top:1020,left:150}}>
                        Domestic Violence: Lamu Case
                        </Header>
                    
                    <Icon name='arrow right' size='huge' inverted style={{position:'absolute', top:1020, left:1050, color:'white'}} />
                    </a>

                    <a href="https://www.douban.com/group/topic/163860647/?type=rec">
                    <ParallaxStories strength={200}  image={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605971605015&di=e6ee0accecccba3f10806d067178aa5d&imgtype=0&src=http%3A%2F%2Fimg.rednet.cn%2F2020%2F03-09%2Fd3697196-f505-4684-a492-26421cf2ea4e.jpg'}/>
                    <Header  style={{fontSize:50,color:'white', position:'absolute', top:1290,left:150}}>
                        Female workers In the Covid
                    </Header>
                    <Icon name='arrow right' size='huge' inverted style={{position:'absolute', top:1320, left:1050, color:'white'}} />
                    </a>


                    <Parallax strength={-100} image={"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607851065359&di=1aabe392e38faeb5339b2d8fe671dec2&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fb2de9c82d158ccbfc438812419d8bc3eb1354123.jpg"}/>
                    
                    
                     {/* <Parallax strength={200} content={'What Were You Weaing'} image={'https://i.loli.net/2020/11/14/4XEQawoJpfBqHxD.jpg'}/>

                    <Parallax strength={200} content={'Domestic Violence'} image={'https://i.loli.net/2020/11/14/db9oLyFVjgS2lsO.jpg'}/>

                    <Parallax strength={200} content={'Domestic Violence'}image={'https://i.loli.net/2020/11/14/i8v5pH1NKayFPzn.jpg'}/>

                    <Parallax strength={200} image={'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3365358438,4208652564&fm=11&gp=0.jpg'}/>

                    <Parallax strength={200} image={'https://img2.doubanio.com/view/group_topic/l/public/p243638243.webp'}/> */}

                   


        </div>
    }
}

export default TheirStoriesPage