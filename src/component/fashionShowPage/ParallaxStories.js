import React from 'react'
import { Parallax, Container, } from 'react-parallax';
import {Header} from 'semantic-ui-react'

 
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
                    background: `rgba(0,0,0, ${percentage * 1})`,
                    left: '10%',
                    top: '20%',
                    width: percentage * 1200,
                    height: percentage * 200,
                }}
            />
            )}
             > 
                
            
            <div >
            
            </div>
            

            <div style={{ height:300} }/>
        </Parallax>
    
}
    
} 

export default Parall