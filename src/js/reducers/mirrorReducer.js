const mirrorReducer = (state={}, action) => {
    console.log(action);
    switch(action.type) {
        case 'updateMyInput': 
            return Object.assign({},state,{
                myInput: action.myInput || '',
                revInput: action.myInput ? action.myInput.split('').reverse().join('') : ''
            });
        default:
            return state;
    }
}

export default mirrorReducer;