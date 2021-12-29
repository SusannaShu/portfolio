import React from 'react'
// import BackgroundImg from'../BackgroundImg'
import Parallax from '../Parallax'
// import Hi from './Hi'
import HomeMenu from './HomeMenu'
import Foot from '../Foot'

class HomePage extends React.Component{
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    render(){
        return<div className='loli-bg'>
            <HomeMenu/>
            <Parallax strength={0} />
            <Foot/>
            </div>
    }
}

export default HomePage;
