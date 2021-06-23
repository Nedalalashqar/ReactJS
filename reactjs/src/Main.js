
import React from 'react';

import HornedBeast from './HornedBeast'
import { Container, CardGroup, Card, Row } from 'react-bootstrap'
// import Horns from './Horns.json'
import CardColumns from "react-bootstrap/CardColumns";
import Forms from "./Forms";

class Main extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    constructor(props) {
        super(props)
        this.state = {
            filteredData: this.props.Horns,
        }
    }
    result = (value) => {
        let newFilteredData = [];

        this.props.Horns.forEach((beast) => {
            switch (value) {
                case '1':

                    if (beast.horns === 1) {
                        newFilteredData.push(beast);
                    }
                    break;

                case '2':

                    if (beast.horns === 2) {
                        newFilteredData.push(beast);
                    }
                    break;

                case '3':

                    if (beast.horns === 3) {
                        newFilteredData.push(beast);
                    }
                    break;


                case '100':

                    if (beast.horns === 100) {
                        newFilteredData.push(beast);
                    }
                    break;
                default:
                    newFilteredData.push(beast);
            }

        })
        this.setState({
            filteredData: newFilteredData,
        })

    }

    render() {
        return (
            <Row>

                <Forms result={this.result} />
                <CardColumns style={{ display: 'flex', flexWrap: 'wrap' }}>
     {
                        this.props.data.map(item => {
                            return (
                                <HornedBeast
                                    title={item.title}
                                    img_url={item.image_url}
                                    description={item.description}
                                    modal={this.props.selectMod}



                                />
                            )
                        })
                    }
                </CardColumns>

            </Row >

        )
    }

}

export default Main;