import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'


export class LandingPage extends Component {
    render() {
        return (
            <div className="div-full-width">
                <Grid className="grid-landing-page ui-gradient-atlas">
                    <Cell col={12}>
                        {/* <img src="https://cdn.pixabay.com/photo/2016/06/15/16/16/man-1459246__180.png" className="my-pic" alt="" /> */}
                        <img src={require('../images/me1.jpg')} className="my-pic" alt="" />
                        <div className="landing-page-banner">
                            <h1>Blockchain Developer</h1>
                            <hr />
                            <p>Ethereum | Solidity | JavaScript | Node.js | React | HTML/CSS | Asp.Net </p>

                            <div className="social-links" style={{ textAlign: "center" }}>

                                <a href="https://www.linkedin.com/in/aditya-nawandar-56988725/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                <a href="https://github.com/adityabnawandar" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                            </div>

                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage
