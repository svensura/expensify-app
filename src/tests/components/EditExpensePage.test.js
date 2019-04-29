import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

// let addExpense, history, wrapper;

// beforeEach(() => {
//   editExpense = jest.fn();
//   history = { push: jest.fn() };
//   wrapper = shallow(<EditExpensePage editExpense={editExpense} history={history} />);
// });

test('should render EditExpensePage correctly', () => {
    const editExpense = jest.fn();
    const history = { push: jest.fn() };
    const wrapper = shallow(<EditExpensePage editExpense={editExpense} history={history} />);
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
    const editExpense = jest.fn();
    const history = { push: jest.fn() };
    const wrapper = shallow(<EditExpensePage editExpense={editExpense} history={history} expense={expenses[1]} />);
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
});

test('should handle removeExpense', () => {
    const removeExpense = jest.fn();
    const history = { push: jest.fn() };
    const wrapper = shallow(<EditExpensePage removeExpense={removeExpense} history={history} expense={expenses[1]}/>);
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith(expenses[1].id);
});
