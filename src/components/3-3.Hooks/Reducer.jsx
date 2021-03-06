import React, { useReducer } from 'react'

export default function State() {
    const initialState = {count :0, name: 'yukyung'};

    function reducer(state, action) {
        switch(action.type){
            case 'reset':
                return {initialState};
            case 'increment':
                return {count: state.count+1 ,name:'amy'};
            case 'decrement':
                return {count: state.count-1, name:'jimmy'};
            default:
                throw new Error();
        }
    }
    
    const [state, dispatch] = useReducer(reducer, initialState)
    
    return (
        <div>
            Count: {state.count}
            Name: {state.name}
            <button onClick={()=> dispatch({type:'reset'})}>reset</button>
            <button onClick={()=> dispatch({type:'decrement'})}>-</button>
            <button onClick={()=> dispatch({type:'increment'})}>+</button>
        </div>
    )
}
