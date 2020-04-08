import React from 'react';
import { connect } from 'react-redux';
import { setActivity } from '../redux/actions';
import CatDetail from './catDetail';

const CatList = ({ cats, setActivity }) => {
    const catsArray = Object.keys(cats);
    return (
        <>
            {catsArray.map((catId, index) => {
                return(
                    <CatDetail key={`cat-${index}`} 
                        cat={{
                            catId, name: cats[catId].name, 
                            activity: cats[catId].activity
                        }}
                    />
                )
            })}
        </>
    )
}

const mapStateToProps = state => {
    const { cats } = state;
    return cats;
}

export default connect(
    mapStateToProps,
    { setActivity }
)(CatList);
