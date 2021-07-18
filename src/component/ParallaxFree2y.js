import React from 'react'
import { Parallax, Container} from 'react-parallax';

 
class Parall extends React.Component{
    render(){
        const p=this.props
        const image=p.image
        const content=p.content
        const background=p.background
        const strength=p.strength
        const styl=p.styl

        return<Parallax 
            bgImage={image}
            strength={strength}
            style={styl}
            renderLayer={percentage => (
            <div
                style={{
                    position: 'absolute',
                    background: `rgba(245,222,179, ${percentage * 1})`,
                    left: '0%',
                    top: '50%',
                    width: percentage * 500,
                    height: percentage * 500,
                }}
            />
            )}
             > 
                
            
            <div >
            <img src={content}/>
            
            </div>
            

            <div style={{ height:600} }/>
        </Parallax>
    
}
    
} 

export default Parall