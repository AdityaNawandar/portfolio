import React, { Component } from 'react'
import { List, ListItem, ListItemContent, Grid, Cell } from 'react-mdl'


export class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid ui-gradient-atlas">


                    <Cell col={12}>
                        <h2 style={{fontFamily:"Anton"}}>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem style={{textAlign:"center"}}>
                                    <ListItemContent className="contact-list-item">
                                        <i className="fa fa-map-marker" style={{ fontSize: "1.9em" }} aria-hidden="true"></i>
                                        Pimple Saudagar, Pune
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="contact-list-item">
                                        <i className="fa fa-mobile" aria-hidden="true"></i>
                                        8888894352
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="contact-list-item">
                                        <i className="fa fa-envelope-o" style={{ fontSize: "1.6em" }} aria-hidden="true"></i>
                                        nawandaraditya60@gmail.com
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>

                    </Cell>

                </Grid>
            </div>
        )
    }
}

export default Contact