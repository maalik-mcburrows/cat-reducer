import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setName} from '../redux/actions';

class UpdateName extends Component {
    state = {
        textInput: ''
    }

    handleChange = e => {
        this.setState({
            textInput: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.setName(this.state.textInput);
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type='text' onChange={this.handleChange} placeholder='New Name' />
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default connect(
    null,
    { setName }
)(UpdateName);