import { createStore } from 'redux';

/*
const incrementCounter = (payload = {}) => ({
    type: 'INCREMENT',
    incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
});
*/

/*
const incrementCounter = ({ incrementBy } = {}) => ({
    type: 'INCREMENT',
    incrementBy: typeof incrementBy === 'number' ? incrementBy : 1
});
*/

/*
const incrementCounter = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});
*/

const incrementCounter = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCounter = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCounter = ({ counter = 0} = {}) => ({
    type: 'SET',
    counter
});

const resetCounter = () => ({
    type: 'RESET'
})

const store = createStore((state = { counter: 0 }, action) => {
    switch (action.type) {
        case 'DECREMENT':
            return {
                counter: state.counter - action.decrementBy
            };
        case 'INCREMENT':
            return {
                counter: state.counter + action.incrementBy
            };
        case 'SET':
            return {
                counter: action.counter
            }
        case 'RESET':
            return {
                counter: 0
            };
        default:
            return state;
    };
});

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(incrementCounter({ incrementBy: 5 }));

store.dispatch(incrementCounter());

store.dispatch(resetCounter());

store.dispatch(decrementCounter({ decrementBy: 100 }));

store.dispatch(setCounter({ counter: 200 }));