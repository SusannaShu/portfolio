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
                    background: `rgba(128,0,0, ${percentage * 1})`,
                    left: '70%',
                    top: '30%',
                    width: percentage * 500,
                    height: percentage * 500,
                }}
            />
            )}
             > 
                
            
            <div >
            
            </div>
            

            <div style={{ height:600} }/>
        </Parallax>
    
}
    
} 

export default Parall