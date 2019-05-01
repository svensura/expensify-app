import React from 'react';
import { shallow } from 'enzyme';

import { ExpenseList } from '../../comp/ExpenseList';
import expenses from '../fixtures/expenses';

test('SHOULD RENDER <ExpenseList /> WITH expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});

test('SHOULD RENDER <ExpenseList /> WITH EMPTY MESSAGE', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});