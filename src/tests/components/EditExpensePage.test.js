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
    const startEditExpense = jest.fn();  // spy defined
    const history = { push: jest.fn() };
    const wrapper = shallow(<EditExpensePage startEditExpense={startEditExpense} history={history} />);
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
    const startEditExpense = jest.fn();   
    const history = { push: jest.fn() };
    const wrapper = shallow(<EditExpensePage startEditExpense={startEditExpense} history={history} expense={expenses[1]} />);
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
});

test('should handle startRemoveExpense', () => {
    const startRemoveExpense = jest.fn();
    const history = { push: jest.fn() };
    const wrapper = shallow(<EditExpensePage startRemoveExpense={startRemoveExpense} history={history} expense={expenses[1]}/>);
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[1].id);
});
