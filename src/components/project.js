import React, { Component } from 'react'
import { Card, CardTitle, CardText, CardActions, Button} from 'react-mdl'



export class Project extends Component {
    render() {
        return (
                <Card col={3} shadow={5} style={{ minWidth: '320px', height: '320px', margin: 'auto' }}>
                    <img src={require('../images/' + this.props.projectName + '.jpg')} className="project-pic" alt="" />
                    <CardTitle expand style={{ color: '#fff', background: 'bottom right 15% no-repeat #46B6AC' }}>{this.props.projectName}</CardTitle>

                    <CardText>
                        {this.props.projectDescription}
                    </CardText>
                    <CardActions border>
                        <Button colored>
                            <a href="http://www.github.com/adityabnawandar" target="_blank" rel="noopener noreferrer">Github</a>
                        </Button>
                    </CardActions>
                </Card>

        )
    }
}

export default Project