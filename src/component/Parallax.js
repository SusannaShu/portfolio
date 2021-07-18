import React from 'react'
import { Parallax, Container} from 'react-parallax';

 
class Parall extends React.Component{
    render(){
        const p=this.props
        const image=p.image
        const content=p.content
        const imgcontent=p.imgcontent
        const high=p.height
        const strength=p.strength
        const styl=p.styl

        return<Parallax 
            bgImage={image}
            strength={strength}
            blur={styl}>
                
            
            <div >
                {content}
                <img src={imgcontent}/>
            </div>
            

            <div style={{ height:600} }/>
        </Parallax>
    
}
    
} 

export default Parall