import React from 'react';
import HornedBeast from './HornedBeast'
import { Row } from 'react-bootstrap'
import Horns from './Horns.json'
import Form from "react-bootstrap/Form";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
            horns:'all',
            arr:Horns,
        }
        this.filter = this.filter.bind(this);
    }
    filter (event) {
        event.preventDefault();
        
        this.setState({
            horns:event.target.value,
        }) 
        if(event.target.value !== 'all'){
            this.setState({
                arr:Horns.filter(a => a.horns === event.target.value)
            })
        }else{
            this.setState({
                arr:Horns,
            })
        }
    }
    render() {
            return (
                <>
                    <div className='container' >
                    
                        <Form >
                            <Form.Group controlId="exampleForm.SelectCustom">
                                <Form.Label>how many horns?</Form.Label>
                                <Form.Control as="select" custom name='select1' onChange={this.filter}>
                                   <option value='all'>all</option>
                                    <option value='1'>one</option>
                                    <option value='2'>two</option>
                                    <option value='3'>three</option>
                                    <option value='100'>Wow..</option> 
                                </Form.Control>
                            </Form.Group>
                        </Form>
                        <Row xs={1} md={3} className="g-4">
                            {this.props.data.map((item, idx) => 
                                <HornedBeast
                                    title={item.title}
                                    img_url={item.image_url}
                                    description={item.description}
                                    modal={this.props.selectMod}
                                    key={idx.toString()}
                                />
                            )}
                        </Row>
                    </div>
                </>
            )
    }
}
export default Main;