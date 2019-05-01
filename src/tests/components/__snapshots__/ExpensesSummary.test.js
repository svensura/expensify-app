import React from 'react';
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../../components/ExpensesSummary'


test('should render ExpensesSummary correctly with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpensesSummary correctly with two expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={7654434}/>)
  expect(wrapper).toMatchSnapshot()
})