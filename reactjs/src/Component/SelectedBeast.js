import React, { Component } from 'react'
import { Card, Modal, Button } from 'react-bootstrap'

class SelectedBeast extends Component {
    render() {
        return (
            <>
                <Modal show={this.props.showdata}  >
                    <Modal.Header>
                        <Modal.Title style={{ alignItems: 'center' }}>{this.props.modData.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Card style={{ width: "70%", height: "100%", marginLeft: "7vh" }} bg={'warning'}>
                            <Card.Img width={150}
                                height={250} src={this.props.modData.img_url} alt={this.props.title} />
                            <Card.Body>

                                <Card.Text>
                                    {this.props.modData.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.Exit}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}
export default SelectedBeast;