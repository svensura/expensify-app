import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should setup default expenses state', () => {

    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('should remove an expenses by id', () => {

    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([ expenses[0], expenses[2] ])
})

test('should not remove an expenses if wrong id', () => {

    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add an expenses', () => {
    const newExpense = {
        id: '4',
        description: 'Food',
        note: '',
        amount: 2500,
        createdAt: moment(0).add(2, 'days').valueOf()
      }

    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, newExpense])
})


test('should edit an expenses', () => {
    const id ='1'
    const updates = {
        description: 'Beer',
        notes: 'Drinks'
      }

    const action = {
        id,
        type: 'EDIT_EXPENSE',
        updates
    }
    const state = expensesReducer(expenses, action)
    expect(state[0].description).toBe('Beer')
    expect(state[0].notes).toBe('Drinks')
})

test('should not edit an expenses if wrong id', () => {
    const id ='-1'
    const updates = {
        description: 'Beer',
        notes: 'Drinks'
      }

    const action = {
        id,
        type: 'EDIT_EXPENSE',
        updates
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses) // nothing has changed
})