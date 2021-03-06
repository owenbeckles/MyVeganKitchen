// constants
const GET_PLAN = 'recipe/GET_PLAN';
const ALL_PLANS = 'recipe/ALL_PLANS';


// thunks
const getPlan = (plan) => {
    return {
        type: GET_PLAN,
        payload: plan,
    }
}

const allPlans = (plan) => {
    return {
        type: ALL_PLANS,
        payload: plan,
    }
}


export const getIndividualMealPlan = (id) => async (dispatch) => {
    const res = await fetch(`/api/plans/${id}`, {
        method: 'GET'
    });
    const data = await res.json();
    if (data.errors) {
        return data;
    }
    dispatch(getPlan(data));
}

export const getAllPlans = () => async (dispatch) => {
    const res = await fetch('/api/plans/', {
        method: 'GET',
    });
    const data = await res.json();
    if (data.errors) {
        return data;
    }
    dispatch(allPlans(data.plan));
}

const initialState = {};

export default function mealPlanReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case GET_PLAN:
            newState = Object.assign({}, state);
            action.payload.forEach(plan => {
                newState[plan.id] = plan;
            });
            return newState;
        case ALL_PLANS:
            newState = Object.assign({}, state);
            action.payload.forEach(plan => {
                newState[plan.id] = plan;
            });
            return newState;
        default:
            return state;
    }
};

