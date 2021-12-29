import React from 'react'
// import BackgroundImage from '../BackgroundImg'
import { Grid, GridColumn, Header, Icon, Segment } from 'semantic-ui-react'


class ParallaxContent extends React.Component {
    render() {
        return <div >
            {/* <div style={{position:'absolute', top:190, left:380, opacity:0.5}}>
                <BackgroundImage image='https://i.loli.net/2020/11/14/ViqQZE28LnvCdbk.jpg'/>
            </div> */}
            <Segment style={{ backgroundColor: 'black', opacity: 0.5, position: 'relative', top: 150, paddingTop: 100, paddingBottom: 100 }}>

            </Segment>
            <Grid>
                <Grid.Row columns={2}>
                    <Grid.Column width={10}>
                        <Header style={{ fontSize: 30, position: 'absolute', top: -30, left: 200, color: 'white' }}>
                            A Fashion Show About Feminism
                        </Header>
                        <Header style={{ fontSize: 15, position: 'absolute', top: 20, left: 200, color: 'white' }}>
                            This First part of the video is from Weibo
                        </Header>
                        <Header style={{ fontSize: 15, position: 'absolute', top: 40, left: 200, color: 'white' }}>
                            “be a lady they said”，The second part is the recording of SheYu Fashion Show in July, 6, 2020
                        </Header>
                    </Grid.Column>
                    <GridColumn width={4}>
                        <Icon name='arrow down' size='huge' inverted/>
                    </GridColumn>
                </Grid.Row>
            </Grid>


        </div>
    }
}

export default ParallaxContent