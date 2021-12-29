import React from 'react'
// import BackgroundImg from'../BackgroundImg'
import Parallax from '../Parallax'
// import Hi from './Hi'
import HomeMenu from './HomeMenu'

class HomePage extends React.Component{
    render(){
        return<div className='loli-bg'>
            <HomeMenu/>
            <Parallax strength={0} />
            
            </div>
    }
}

export default HomePage;
