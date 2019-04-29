import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters'
import moment from 'moment'

test('should generate set start date action object', () => {
    const action = setStartDate( moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    })
})

test('should generate set end date action object', () => {
    const action = setEndDate( moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    })
})

test('should generate text filter with provided values', () => {
    const text = 'TestText'
    const action =setTextFilter(text)
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'TestText'
    })
})

test('should generate text filter with default values', () => {
    const text = ''
    const action =setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('sgenerate set amount-sorting action object', () => {
    const action =sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('sgenerate set date-sorting action object', () => {
    const action =sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})