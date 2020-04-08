import React from 'react';
import { connect } from 'react-redux';
import { setActivity } from '../redux/actions';

const CatDetail = ({ cat, setActivity }) => {
    const { catId, name, activity } = cat;
    return (
        <li>
            {name} is {activity}
            <button onClick={() => setActivity({id: catId, activity: 'eating'})}>Eating</button>
            <button onClick={() => setActivity({id: catId, activity: 'playing'})}>Playing</button>
            <button onClick={() => setActivity({id: catId, activity: 'napping'})}>Napping</button>
        </li>
    )
}

export default connect(null, { setActivity })(CatDetail);