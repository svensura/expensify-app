import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup addExpense action object with provided data', () => {
    const expenseData = {
        description: 'Some description',
        note: 'Some note',
        amount: 1234,
        createdAt: 10000
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup addExpense action object with default data', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});

test('should setup editExpense action object', () => {
    const update = {
        description: 'A new description',
        note: 'A new note'
    };
    const action = editExpense('1234', update);
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '1234',
        update: {
            description: 'A new description',
            note: 'A new note'
        }
    });
});

test('should setup removeExpense action object', () => {
    const action = removeExpense({ id: '1234' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '1234'
    });
});
