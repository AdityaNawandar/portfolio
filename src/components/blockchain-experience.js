import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import BlockchainProjects from './blockchain-projects';


export class BlockchainExperience extends Component {
    render() {
        return (
            <div>
                <BlockchainProjects projectName={"Crypto Exchange"} 
                projectDescription={"Building a decentralized cryptocurrency exchange from scratch."} 
                projectDuration={""}
                />
                
                <BlockchainProjects projectName={"Cryptocurrency and ICO with Solidity"} 
                projectDescription =
                {"Created and designed a fully-compliant ERC20 Token on the Ethereum Platform."
                    + "Wrote an ICO Smart Contract and deployed on Rinkeby Test Network."
                }
                projectDuration={""}
                />

                <BlockchainProjects projectName={"Practical Blockchain and Smart Contracts"} 
                projectDescription={"Developed a working model of a conceptual blockchain out of vanilla JavaScript and Nodejs."
                +	"Built an election DApp with two contestants who could be voted for, on Ethereum."
                +	"Built an attractive web-based front end using HTML and JavaScript."
                } 
                projectDuration={""}
                />

                <BlockchainProjects projectName={"Blockchain and Cryptocurrency from Scratch"} 
                projectDescription={"Created a basic blockchain and cryptocurrency from scratch as a POC."} 
                projectDuration={""}
                />
            </div>
        )
    }
}

export default BlockchainExperience