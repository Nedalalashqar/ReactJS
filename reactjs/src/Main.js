
import React from 'react';
import HornedBeast from './HornedBeast';
import { CardColumns,Row} from 'react-bootstrap';
// import Horns from './Horns.json'
import FormFilter from './FormFilter';
// import CardColumns from "react-bootstrap/CardColumns";


class Main extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
        filteredData : this.props.Horns,
        }
    }

    filterResult = (value) => {
        let newFilteredData = [];
        this.props.Horns.forEach((beast) => {
            switch(value) {
                case "One":
                    if (beast.horns === 1) {
                        newFilteredData.push(beast);
                    }
                    break;
                case "Tow":
                    if (beast.horns === 2) {
                        newFilteredData.push(beast);
                    }
                    break;
                case "Three":
                    if (beast.horns === 3) {
                        newFilteredData.push(beast);
                    }
                    break;
    
                case "More":
                    if (beast.horns === 100) {
                        newFilteredData.push(beast);
                    }
                    break;
                default:
                    newFilteredData.push(beast);
            }
        })  
        this.setState({
            filteredData : newFilteredData,
          })
    }

    render() {
        return ( 
            <Row>
                <FormFilter filterResult = {this.filterResult} />
                <CardColumns style={{display: 'flex', flexWrap: 'wrap' }}>
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
            </Row>
        )
    }

}

export default Main;