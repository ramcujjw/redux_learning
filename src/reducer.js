import { INCREMENT, DECREMENT} from "./action";
// import reducer from './reducer';
const counterReducer=(state=0,action)=>{ //the action is gonna check the  type
    switch(action.type){
        case INCREMENT:return state+1
        case DECREMENT:return state-1
            default:return state
    }
}
export default counterReducer;