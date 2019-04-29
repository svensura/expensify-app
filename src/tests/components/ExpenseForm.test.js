import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseForm wtih expense data correctly', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>);
    expect(wrapper).toMatchSnapshot()
})

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot()   // snapshot before...
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    })
    expect(wrapper.state('error')).toBe(true)
    expect(wrapper).toMatchSnapshot()    // and after the form changes
})

test('should set description on input change', () => {
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot()   // snapshot before...
    const value = 'New Description'
    wrapper.find('input').at(0).simulate('change', {
       target: { value }
    })
    expect(wrapper.state('description')).toBe(value)
    expect(wrapper).toMatchSnapshot()    // and after the form changes
})

test('should set note on textarea change', () => {
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot()   // snapshot before...
    const value = 'New Note'
    wrapper.find('textarea').at(0).simulate('change', {
       target: { value }
    })
    expect(wrapper.state('note')).toBe(value)
    expect(wrapper).toMatchSnapshot()    // and after the form changes
})

test('should set amount on valid input change', () => {
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot()   // snapshot before...
    const value = '23.50'
    wrapper.find('input').at(1).simulate('change', {
       target: { value }
    })
    expect(wrapper.state('amount')).toBe(value)
    expect(wrapper).toMatchSnapshot()    // and after the form changes
})

test('should not set amount on invalid input change', () => {
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot()   // snapshot before...
    const value = '12.122'
    wrapper.find('input').at(1).simulate('change', {
       target: { value }
    })
    expect(wrapper.state('amount')).toBe('')
    expect(wrapper).toMatchSnapshot()    // and after the form changes
})

test('should call onSubmit prop for valid submission', () => {
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    })
    expect(wrapper.state('error')).toBe(false)
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        "amount": expenses[0].amount, 
        "createdAt": expenses[0].createdAt, 
        "description": expenses[0].description,  
        "note": expenses[0].note
    })
})

test('should set new date on date change', () => {
    const now = moment()
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toBe(now)
})

test('should set calender focus on change', () => {
    const focused = true
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper.state('calendarFocused')).toBe(false)
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused })
    expect(wrapper.state('calendarFocused')).toBe(focused)
})