const currentRunDetails = (state = {}, action) => {
    switch(action.type) {
        case('SET_CURRENT_RUN_DETAILS'):
            return action.payload
        default:
            return state;
    }
}

export default currentRunDetails;