import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'
import Education from './education'
import Experience from './experience';
import BlockchainExperience from './blockchain-experience'

export class Resume extends Component {
    render() {

        return (
            <div>

                <Grid>
                    <Cell col={4}>
                        <div className="resume-left-col" style={{ textAlign: "left" }}>

                            <div className="profile-summary">

                                <h4 style={{ color: 'grey' }}>Profile Summary</h4>
                                <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                                <p>Blockchain Developer (Ethereum/Solidity) with about 6 months of experience in the Blockchain technology space.
                                Experienced Software Development professional with 4 years of experience in web application development using Microsoft technology stack (.Net).
                                </p>

                            </div>

                            <div className="skills">

                                <h4 style={{ color: 'grey' }}>Skills</h4>
                                <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />

                                <p>Ethereum</p>
                                <p>Solidity</p>
                                <p>JavaScript</p>
                                <p>Node.js</p>

                            </div>

                        </div>
                    </Cell>


                    <Cell className="resume-right-col" col={8}>
                        <div className="education-experience">

                            <div className="experience">
                                <h3>Experience</h3>
                                <Experience
                                    startYear={"Sep 2018"}
                                    endYear={"Present"}
                                    jobTitle={"Blockchain Developer"}
                                    companyName={"Self"}
                                    jobDescription={<BlockchainExperience />}
                                />

                                <Experience
                                    startYear={"May 2018"}
                                    endYear={"Aug 2018"}
                                    jobTitle={"Technology Analyst"}
                                    companyName={"Infosys Ltd."}
                                    jobDescription={" Worked on Robotic Process Automation "}
                                />

                                <Experience
                                    startYear={"Dec 2016"}
                                    endYear={"May 2018"}
                                    jobTitle={"Software Developer"}
                                    companyName={"Infovision Labs (IVL)"}
                                    jobDescription={"Designed and developed an in-house product as solution to Human Resource Activities in the organization."}
                                />

                                <Experience
                                    startYear={"April 2014"}
                                    endYear={"May 2016"}
                                    jobTitle={"System Engineer "}
                                    companyName={"Nihilent Technologies"}
                                    jobDescription={"Developed and maintained a Windows Desktop Application for South African Breweries."}
                                />

                                <hr style={{ borderTop: '3px solid #e22947' }} />
                            </div>

                            <div className="education">
                                <h3>Education</h3>

                                <Education
                                    startYear={2004}
                                    endYear={2008}
                                    universityName={"Sant Gadge Baba Amravati University"}
                                    degree={"B.E. - Computer Science"}
                                />

                                <Education
                                    startYear={2009}
                                    endYear={2012}
                                    universityName={"University of Pune"}
                                    degree={"MBA - Marketing"}
                                />

                                <hr style={{ borderTop: '3px solid #e22947' }} />
                            </div>

                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }

}




export default Resume