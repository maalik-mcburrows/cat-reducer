import React from 'react';
import { connect } from 'react-redux';
import { setActivity } from '../redux/actions';


const Activity = ({ name, activity, setActivity }) => (
    <>
        <h1>What's the Cat Doing?</h1>
        <p>{ name } is { activity }</p>
        <button onClick={() => setActivity('eating')}>Eating</button>
        <button onClick={() => setActivity('playing')}>Playing</button>
        <button onClick={() => setActivity('napping')}>Napping</button>
    </>
)

//connect connects us to redux, parameters include things we want(mapStateToProps) from connect and things we want to do(mapDispatchToProps) from connect

const mapStateToProps = state => {
    const { activity } = state;
    return activity;
}

export default connect(
     mapStateToProps, //mapStateToProps
     { setActivity } //mapDispatchToProps
     )(Activity);


