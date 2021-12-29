import React from 'react'
import { Parallax} from 'react-parallax';

 
class Parall extends React.Component{
    render(){
        const p=this.props
        const image=p.image
        const content=p.content
        // const background=p.background
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
                    background: `rgba(105,105,105, ${percentage * 1})`,
                    left: '20%',
                    top: '10%',
                    width: percentage * 700,
                    height: percentage * 500,
                }}
            />
            )}
             > 
                
            
            <div >
                {content}
            
            </div>
            

            <div style={{ height:1000} }/>
        </Parallax>
    
}
    
} 

export default Parall