const initState = {
    projects: [
        {id: '1', text: 'blah blah blah'},
        {id: '2', text: 'blah blah blah'},
        {id: '3', text: 'blah blah blah'}
      ]
}

const commentReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_COMMENT':
            console.log('created project', action.comment);
            return state;
        case 'CREATE_COMMENT_ERROR':
            console.log('created project error', action.err);
            return state;
        default:
            return state
    }
    
}


export default commentReducer