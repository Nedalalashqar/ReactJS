
import React from 'react';
import HornedBeast from './HornedBeast'
import Horns from './Horns.json'

class Main extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return ( 
            <div>
                {
                    Horns.map(item => {
                        return (
                            <HornedBeast
                                title={item.title}
                                img_url={item.image_url}
                                description={item.description}
                            />
                        )
                    })
                }
            </div>
        )
    }

}

export default Main;