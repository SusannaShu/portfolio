import React from 'react'
import { Image } from 'semantic-ui-react'

class BackgroundImage extends React.Component{
  render(){
      const p=this.props
      const image=p.image
      const name=p.name
      
return<Image src={image} />
  }
}

export default BackgroundImage