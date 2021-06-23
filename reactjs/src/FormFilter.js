import React, { Component } from 'react';
import Form from "react-bootstrap/Form";


class FormFilter extends React.Component {
  
    render() {
        return (
            <div>
            <Form.Select  onChange={(e) => this.props.filterResult(e.target.value)} as="select">
                <option value="All">All</option>
                <option value="One">One</option>
                <option value="Tow">Tow</option>
                <option value="Three">Three</option>
                <option value="More">More</option>
            </Form.Select>
            </div>
        )
    }
}
export default FormFilter;