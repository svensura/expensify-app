import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('should setup default filtervalues', () => {

    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount', () => {

    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const action = { type: 'SORT_BY_DATE' }
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
    const text = 'test'
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: text })
    expect(state.text).toBe(text)
})

test('should set start date', () => {
    const date = moment(0)
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', date: date })
    expect(moment(state.startDate)).toEqual(date)
})

test('should set end date', () => {
    const date = moment(0)
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', date: date })
    expect(moment(state.endDate)).toEqual(date)
})