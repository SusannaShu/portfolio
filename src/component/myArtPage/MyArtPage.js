import React from 'react'
import Sec1 from './Sec1'
import Sec2 from './Sec2'
import Sec3 from './Sec3'
import Sec4 from './Sec4'
import Foot from '../Foot'

import OtherMenu from './ArtMenu'



class MyArtPage extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {

        return <div>
            
            <OtherMenu />
            
            <Sec1 />
            <Sec2 />
            <Sec3 />
            <Sec4 />


            <Foot />
        </div>


    }
}



export default MyArtPage

