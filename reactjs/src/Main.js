
import React from 'react';
import HornedBeast from './HornedBeast'
import {Container, CardGroup,Card,Row} from 'react-bootstrap'
import Horns from './Horns.json'

class Main extends React.Component {

    // constructor(props) {
    //     super(props);
    // }
    
    render() {
        return ( 
            <Row>
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
            </Row>
        )
    }

}

export default Main;