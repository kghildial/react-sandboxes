// NOTE: Commented code depicts the previous changes with the fetchUser action creator individually exported and used

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { fetchUser } from '../actions';


class UserHeader extends Component {
    // componentDidMount() {
    //     this.props.fetchUser(this.props.userId);
    // }

    
    render() {
        // const user = this.props.users.find(user => user.id === this.props.userId);
        
        if (!this.props.user) {
            return null;
        }

        return (
            <div className="header">{this.props.user.name}</div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId) };
};
    
export default connect(mapStateToProps, /*{ fetchUser }*/)(UserHeader);