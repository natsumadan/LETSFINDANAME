import React from 'react';
import Header from '../Header/Header';
import Results from '../Results/Results';
import SeachBox from '../SearchBox/searchbox';
import './App.css';


const name = require('@rstacruz/startup-name-generator');


class App extends React.Component {

    state = {
        headerText: 'Lets Find a new name!',
        headerExpanded: true,
        suggestedNames: [],
    };

    handelInputChange = (inputText) => {

        this.setState({headerExpanded: !inputText, 
            suggestedNames: inputText ? name(inputText): [] 
        });
    }

    render (){
        return (
            <div>
                <Header headerExpanded={this.state.headerExpanded} 
                headTitle={this.state.headerText} />
                <SeachBox onInputChange={this.handelInputChange} />
                <Results suggestedNames={this.state.suggestedNames}/>

            </div>
        )

    }

}

export default App