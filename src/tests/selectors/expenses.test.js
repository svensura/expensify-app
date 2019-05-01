import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

test('should return the expenses filtered: sortByAmount', () => {
    const filter = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filter);
    expect(result).toEqual([
        expenses[0],
        expenses[1],
        expenses[2]
    ]);
});

test('should return the expenses filtered: sortByDate', () => {
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filter);
    expect(result).toEqual([
        expenses[1],
        expenses[0],
        expenses[2]
    ]);
});

test('should return the expenses filtered: endDate', () => {
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    };
    const result = selectExpenses(expenses, filter);
    expect(result).toEqual([
        expenses[0],
        expenses[2]
    ]);
});

test('should return the expenses filtered: startDate', () => {
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectExpenses(expenses, filter);
    expect(result).toEqual([
        expenses[1],
        expenses[0]
    ]);
});

test('should return the expenses filtered: text', () => {
    const filter = {
        text: '13',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filter);
    expect(result).toEqual([
        expenses[0],
        expenses[2]
    ]);
});