import React from 'react';
import { connect } from 'react-redux';
import { eat } from '../redux/actions';
import { play } from '../redux/actions';
import { nap } from '../redux/actions';

const Activity = ({ activity, eat, play, nap }) => (
    <>
        <h1>What's the Cat Doing?</h1>
        <p>The cat is { activity }</p>
        <button onClick={() => eat()}>Eating</button>
        <button onClick={() => play()}>Playing</button>
        <button onClick={() => nap()}>Napping</button>
    </>
)

//connect connects us to redux, parameters include things we want(mapStateToProps) from connect and things we want to do(mapDispatchToProps) from connect

const mapStateToProps = state => {
    const { activity } = state;
    return activity;
}

export default connect(
     mapStateToProps, //mapStateToProps
     { eat, play, nap } //mapDispatchToProps
     )(Activity);


