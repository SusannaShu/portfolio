import React from 'react'
import { Parallax} from 'react-parallax';

 
class Parall extends React.Component{
    render(){
        const p=this.props
        const image=p.image
        const content=p.content
        // const high=p.height
        const strength=p.strength
        const styl=p.styl

        return<Parallax 
        bgImage={image}
        strength={strength}
        blur={styl}>
                
            
            <div >
                {content}
            
            </div>
            

            <div style={{ height:200} }/>
        </Parallax>
    
}
    
} 

export default Parall