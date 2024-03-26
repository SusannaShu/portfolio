import React from 'react'
import { Segment,Grid,Header} from 'semantic-ui-react'




class Foot extends React.Component {
  constructor(props){
    super(props)
    this.state = { 
     
  }
 }
  
  componentDidMount() {
    
  }


  render() {
 


    return <Segment placeholder >
        <Grid>
            <Grid.Row centered divided>
                <Grid.Column width={6}>
                Copyright @SusannaShu
                </Grid.Column>
                <Grid.Column width={6}>
                    <Header>
                        Contact Me
                    </Header>
                    <p>
                        US mobile:360-202-2983
                        Chinese Mobile:17308079166
                    </p>
                    <p>
                        E-mail:susanna.xinshu@gmail.com
                    </p>
                </Grid.Column>
            
            </Grid.Row>
        </Grid>
        
    </Segment>
    
  }
}

export default Foot