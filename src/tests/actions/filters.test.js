import moment from 'moment';
import { editTextFilter, setEndDate, setStartDate, sortByAmount, sortByDate } from '../../actions/filters';

test('should return editTextFilter action object with provided data', () => {
    const action = editTextFilter('macbook pro');
    expect(action).toEqual({
        type: 'EDIT_TEXT_FILTER',
        update: 'macbook pro'
    });
});

test('should return editTextFilter action object with default data', () => {
    const action = editTextFilter();
    expect(action).toEqual({
        type: 'EDIT_TEXT_FILTER',
        update: ''
    });
});

test('should return setEndDate action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        update: moment(0)
    });
});

test('should return setStartDate action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        update: moment(0)
    });
});

test('should return sortByAmount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('should return sortByDate action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});