import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCat } from '../redux/actions';

class AddCat extends Component {
    state = {
        petName: '',
        activity: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: [e.target.value]
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { petName, activity } = this.state;
        this.props.addCat({ name:petName, activity })
        this.setState({
            petName: '',
            activity: ''
        })
    }

    render() {
        const { petName, activity } = this.state;
        return(
            <form onSubmit={this.handleSubmit}>
                <input value={petName} type="text" name="petName" placeholder="Cat's Name" onChange={this.handleChange}></input>
                <select name="activity" value={activity} onChange={this.handleChange}>
                    <option defaultValue>Choose an Activity</option>
                    <option value="eating">Eating</option>
                    <option value="napping">Napping</option>
                    <option value="sleeping">Sleeping</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default connect(null, { addCat })(AddCat);