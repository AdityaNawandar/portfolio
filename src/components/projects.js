import React, { Component } from 'react'
import { Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton, Tab, Tabs, Grid, Cell } from 'react-mdl'
import { } from 'react-mdl'

export class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 }
    }

    returnCard = (projectName, projectDescription) => {
        return (
            <div>
                <Card shadow={5} style={{ minWidth: '320px', height: '320px', margin: 'auto' }}>
                    <CardTitle expand style={{ color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC' }}>{projectName}</CardTitle>
                    <CardText>
                        {projectDescription}
                    </CardText>
                    <CardActions border>
                        <Button colored>
                            <a href="http://www.github.com/adityabnawandar" target="_blank" rel="noopener noreferrer">Github</a>
                        </Button>
                    </CardActions>
                </Card></div>
        )
    }

    toggleCategories = () => {
        if (this.state.activeTab === 0) {
            return (this.returnCard("Node.js", "This is a Node Project"));
        }
        else if (this.state.activeTab === 1) {
            return (this.returnCard("React", "This is a React Project"))
        }
        else if (this.state.activeTab === 2) {
            return (this.returnCard("Others", "This is Other Project"))
        }
    }


    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Node.js</Tab>
                    <Tab>React</Tab>
                    <Tab>Others</Tab>
                </Tabs>
                <Grid className="projects-grid">
                    <Cell col={12}>
                        <div>{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects