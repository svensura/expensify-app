import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should add expense', () => {
    const expense = {
        id: '1234',
        description: 'expense',
        note: 'expense',
        amount: 1234,
        createdAt: moment(0)
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        ...expenses,
        expense
    ]);
});

test('should edit expense by id', () => {
    const update = {
        description: 'expense',
        note: 'expense',
        amount: 1234,
        createdAt: moment(0)
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        update
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        expenses[0],
        {
            id: expenses[1].id,
            description: 'expense',
            note: 'expense',
            amount: 1234,
            createdAt: moment(0)
        }, 
        expenses[2]
    ]);
});

test('should not edit expense by id if id not found', () => {
    const update = {
        description: 'expense',
        note: 'expense',
        amount: 1234,
        createdAt: moment(0)
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        update
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should setup default expense values', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        expenses[0],
        expenses[2]
    ]);
});

test('should not remove expense by id if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should setup default expense values', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});