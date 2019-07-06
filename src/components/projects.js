import React, { Component } from 'react'
import { Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton, Tab, Tabs, Grid, Cell } from 'react-mdl'
import { } from 'react-mdl'
import Project from './project'


export class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 }
    }

    returnCard = (objJSON) => {

        const projects = Object.values(objJSON);
        var projectsList = projects.map(
            (project, index) =>
                    <Project key={index} projectName={project.projectName} projectDescription={project.projectDescription} />
        )
        return (projectsList)
    }

    toggleCategories = () => {
        const arrReact = [
            {
                projectName: 'todo-app',
                projectDescription: " Sample Description "
            },
            {
                projectName: 'react-project-2',
                projectDescription: " Sample Description "
            },
            {
                projectName: 'react-project-3',
                projectDescription: " Sample Description "
            },
        ];


        const arrNode = [
            {
                projectName: 'node-project-1',
                projectDescription: " Sample Description "
            },
            {
                projectName: 'node-project-2',
                projectDescription: " Sample Description "
            },
            {
                projectName: 'node-project-3',
                projectDescription: " Sample Description "
            },
        ];

        const arrSolidity = [
            {
                projectName: 'solidity-project-1',
                projectDescription: ""
            },
            {
                projectName: 'solidity-project-2',
                projectDescription: ""
            },
            {
                projectName: 'solidity-project-3',
                projectDescription: ""
            },
        ];


        if (this.state.activeTab === 0) {
            return (<div className="projects-grid">{this.returnCard(arrReact)}</div>);
        }
        else if (this.state.activeTab === 1) {
            return (<div className="projects-grid">{this.returnCard(arrSolidity)}</div>);
        }
        else if (this.state.activeTab === 2) {
            return (<div className="projects-grid">{this.returnCard(arrNode)}</div>);
        }
    }


    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React-Redux</Tab>
                    <Tab>Solidity/DApps</Tab>
                    <Tab>Node.js</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        {this.toggleCategories()}
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects