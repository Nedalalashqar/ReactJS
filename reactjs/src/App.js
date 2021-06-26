import React from 'react';
import Header from './Component/Header';
import Main from './Component/Main';
import Footer from './Component/Footer';
import SelectedBeast from './Component/SelectedBeast'
import 'bootstrap/dist/css/bootstrap.min.css';
import Horns from './Horns.json'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hornsData:Horns,
            show:false,
            modData:{},
        }
    }

    shwoen = (data) => {
        this.setState({
            show:true,
            modData:data,
        }) 
    }

    handleClose = () => {
        this.setState({
            show: false
        })
    }

    render() {
        return (
            <div style={{background:'red'}}>
                <Header />
                <Main
                    selectMod={this.shwoen } 
                    data={this.state.hornsData}
                />
                <SelectedBeast
                    Exit={this.handleClose} 
                    showdata={this.state.show } 
                    modData={this.state.modData}
                />
                <Footer />
            </div>
        )
    }
}
export default App;
