import React from 'react'
import { Parallax, } from 'react-parallax';
import { Header} from 'semantic-ui-react'

 
class Parall extends React.Component{
    render(){
        const p=this.props
        const image=p.image
        const content=p.content
        const high=p.height
        const strength=p.strength
        const styl=p.styl

        return<Parallax 
            bgImage={image}
            strength={strength}
            style={styl}>
                
            
            <div >
            <Header textAlign='center' style={{fontSize:70,color:'green'}}>
            {content}
            </Header>
            </div>
            

            <div style={{ height:400} }/>
        </Parallax>
    
}
    
} 

export default Parall