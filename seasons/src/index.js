import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    // Similar to a constructor (Thanks to Babel)
    state = {
        lat: null,
        errMessage: ''
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }), 
            err => this.setState({ errMessage: err.message })
        );
    }

    // Helper method for rendering on terms of conditional logic
    renderContent() {
        if (this.state.errMessage && !this.state.lat) {
            return <div>Error: {this.state.errMessage}</div>;
        }

        if (!this.state.errMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }

        return <Spinner message="Please accept location request" />
    }

    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));