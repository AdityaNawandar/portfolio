import React, { Component } from 'react'


export class BlockchainProjects extends Component {
    render() {
        return (
            <div>
                <h5>{this.props.projectName} - <h6 style={{display:"inline"}}>{this.props.projectDuration}</h6></h5>
                <p>{this.props.projectDescription}</p>
            </div>
        )
    }
}

export default BlockchainProjects