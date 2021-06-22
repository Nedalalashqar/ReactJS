import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Image } from 'react-bootstrap'


const styles = {
    myCoolButton: {
        paddingTop: "10vh",
        paddingBottom: "10vh",
        paddingRight: "10vw",
        paddingLeft: "10vw"
    }
}



class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Votes: 0,
        }
    }



    addVote = () => {
        this.setState({
            Votes: this.state.Votes + 1,
        })
    }

    click = () => {
        this.props.modal({
            title: this.props.title,
            img_url: this.props.img_url,
            description: this.props.description
        })
    }


    render() {
        return (
            <Col xs={12} sm={9} xl={3} style={{ paddingTop: "8vh", paddingLeft: "8vh" }} >
                <Card style={{ width: "60%", height: "100%" }} bg={'success'}>
                    <Card.Img width={150} height={250} onClick={this.click} variant="top" src={this.props.img_url} alt={this.props.title} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                    </Card.Body>
                    
                        <Button style={{ width: "40%", marginLeft: "10vh" }} variant="primary"> 💛 {this.state.Votes}</Button>
                        <Button  style={{ width: "40%", marginTop: "4vh", marginBottom:'2vh', marginLeft: "8vh" }} variant="light" onClick={this.addVote}> Vote </Button>
                   

                </Card>
            </Col>
        )
    }
}

export default HornedBeast;


