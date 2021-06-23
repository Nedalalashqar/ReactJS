import React, { Component } from 'react'
import Form from "react-bootstrap/Form";


class Forms extends Component {
    render() {
        return (
            <div>
                <Form.Label>How Many Horne?</Form.Label>
                    <Form.Control as="select" onChange={(e)=>this.props.result(e.target.value)}>
                        <option value='All'>All</option>
                        <option value='1'>one</option>
                        <option value='2'>two</option>
                        <option value='3'>three</option>
                        <option value='100'>wow</option>
                    </Form.Control>
                
            </div>
        )
    }
}

export default Forms
