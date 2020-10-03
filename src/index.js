import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner';

class App extends React.Component { //this is a class based component
  // constructor(props) { 
    //super(props); //p termos a certeza q o react.component é called usamos o super
  
    //this is the only time we do direct assignment to this.state
    //this.state = { lat: null, errorMessage: '' }; //n sabemos o q é a latitude agr
  //} todo este constructor for substituido pelo state
 
  state = { lat:null, errorMessage:''};

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude}),
      err => this.setState({ errorMessage: err.message }),
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>

    }

    if(!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>
    }

    return <Spinner message="Please accept location request" />;
  }

  render() {
    return (
      <div className="border red">{this.renderContent()}</div>
    )
  }
} 

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);