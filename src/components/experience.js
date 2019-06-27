import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'



export class Experience extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h5 style={{ margin: "0px 1em 0px 0px", display: "inline", fontFamily:"Oxygen" }}>
                        {this.props.jobTitle} -
                         <h5 style={{ margin: "0px 0px 0px 0px", display: "inline", }}>
                            {this.props.companyName}
                        </h5>
                    </h5>

                    <p> {this.props.jobDescription} </p>
                </Cell>
            </Grid>
        )
    }
}

export default Experience
