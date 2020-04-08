import { ACTION_SET_ACTIVITY } from './actionTypes';

export const setActivity = activity => ({
    type: ACTION_SET_ACTIVITY,
    payload: {
        activity
    }
});




