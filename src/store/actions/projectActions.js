export const createProject = (project) => {
    return (dispatch, getState, {getFirebase}) => {
        // make async call to database
        dispatch({ type: 'CREATE_PROJECT', project})
    }
}