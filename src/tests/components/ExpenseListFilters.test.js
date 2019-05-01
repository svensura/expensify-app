import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  )
})

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseListFilters with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  })
  expect(wrapper).toMatchSnapshot();
})

test('should handle text change', () => {
    const value = 'New text'
    const newFilter = {
        value
    }
    wrapper.find('input').simulate('change', {
        target: newFilter
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
})

test('should handle sort by Date', () => {
    const newFilter = {
        value: 'date'
    }
    wrapper.setProps({
        filters: altFilters
      })
      
    wrapper.find('select').simulate('change', {
        target: newFilter
    })
    expect(sortByDate).toHaveBeenCalled
})

test('should handle sort by Date', () => {
    const newFilter = {
        value: 'amount'
    }
    wrapper.setProps({
        filters: altFilters
      })
      
    wrapper.find('select').simulate('change', {
        target: newFilter
    })
    expect(sortByAmount).toHaveBeenCalled
})

test('should set new date on date change', () => {
    const startDate = moment(0).subtract(3, 'days')
    const endDate = moment(0)
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate })
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test('should set calender focus on change', () => {
    const focused = 'endDate'
    // expect(wrapper.state('calendarFocused')).toBe(false)
    wrapper.find('DateRangePicker').prop('onFocusChange')(focused)
    expect(wrapper.state('calendarFocused')).toBe(focused)
})
