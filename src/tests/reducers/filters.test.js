import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should set sortBy to \'amount\'', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to \'date\'', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')      
    }
    const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' });
    expect(state.sortBy).toBe('date');
});

test('should set endDate filter', () => {
    const endDate = moment(0).add(2, 'months');
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', update: endDate });
    expect(state.endDate).toBe(endDate);
});

test('should set startDate filter', () => {
    const startDate = moment(0).add(2, 'months');
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', update: startDate });
    expect(state.startDate).toBe(startDate);
});

test('should set text filter', () => {
    const action = {
        type: 'EDIT_TEXT_FILTER',
        update: 'asdf'
    };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe('asdf');
});

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});