import React from 'react';
import Header from '../Header/Header';
import SeachBox from '../SearchBox/searchbox';
import './App.css';



class App extends React.Component {

    state = {
        headerText: 'Lets Find a new name!',
    };
    render (){
        return (
            <div>
                <Header headTitle={this.state.headerText} />
                <SeachBox />
                
            </div>
        )

    }
}

export default App