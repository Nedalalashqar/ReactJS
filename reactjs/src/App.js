import React from 'react';
import Hedaer from './Hedaer';
import Main from './Main';
import Footer from './Footer';

class App extends React.Component{
    render(){
        return(
            <div>
            <Hedaer/>
            <Main/>
            <Footer/>
            </div>
        )
    }
}
export default App;
