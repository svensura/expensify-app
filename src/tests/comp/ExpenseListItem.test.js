import React from 'react';
import { shallow } from 'enzyme';

import ExpenseListItem from '../../comp/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('SHOULD RENDER <ExpenseListItem /> WITH expenses[0]', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});