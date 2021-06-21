import React from 'react';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'


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
    render() {
        return (
            <div className='beast'>
                <div class="col-sm-3 col-md-2">
                <Card style={{ width: '30rem' }}>
                    <Card.Img onClick={this.addVote} variant="top" src={this.props.img_url} alt={this.props.title} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                    </Card.Body>
                    <Button variant="primary"> 💛 {this.state.Votes}</Button>
                    <br/>
                </Card>
                </div>
            </div>
        )
    }
}

export default HornedBeast;
