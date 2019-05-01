import React from 'react';
import { shallow } from 'enzyme'
import moment from 'moment';

import { ExpenseListFilters } from '../../comp/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(<ExpenseListFilters
        filters={filters}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
    />);
});

test('SHOULD RENDER <ExpenseListFilters /> CORRECTLY', () => {
    expect(wrapper).toMatchSnapshot();
});

test('SHOULD RENDER <ExpenseListFilters /> CORRECTLY WITH altFilters', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('SHOULD HANDLE TEXT CHANGE', () => {
    const value = 'example';
    wrapper.find('input').simulate('change', {
        target: {
            value
        }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('SHOULD SORT BY DATE', () => {
    wrapper.setProps({
        filters: altFilters
    });
    const value = 'date'
    wrapper.find('select').simulate('change', {
        target: {
            value
        }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('SHOULD SORT BY AMOUNT', () => {
    const value = 'amount'
    wrapper.find('select').simulate('change', {
        target: {
            value
        }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('SHOULD HANDLE DATE CHANGE', () => {
    const startDate = moment(0).subtract(3, 'months');
    const endDate = moment(0).add(3, 'months');
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('SHOULD HANDLE DATE FOCUS CHANGE', () => {
    const calendarFocused = 'startDate';
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});