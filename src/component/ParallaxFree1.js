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
            alt='...'
            renderLayer={percentage => (
            <div
                style={{
                    position: 'absolute',
                    background: `rgba(255, 125, 0, ${percentage * 1})`,
                    left: '60%',
                    top: '50%',
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