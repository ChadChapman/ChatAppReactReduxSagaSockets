import * as types from '../constants/ActionTypes'

const messages = (state= [], action) => {
    switch(action.type){
        case types.MESSAGE_RECEIVED:
        case types.ADD_MESSAGE:
            return state.concat([
                {
                    message: action.message,
                    action: action.author,
                    id: action.id
                }
            ]);

        default: return state;
    }
};

export default messages