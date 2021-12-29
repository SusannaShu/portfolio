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
                        phonenumber:17308079166
                    </p>
                    <p>
                        e-mail:1181456762@qq.com
                    </p>
                </Grid.Column>
            
            </Grid.Row>
        </Grid>
        
    </Segment>
    
  }
}

export default Foot