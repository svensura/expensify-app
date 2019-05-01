import React from 'react';
import { shallow } from 'enzyme';

import DashboardPage from '../../comp/DashboardPage';

test('SHOULD RENDER <DashboardPage /> CORRECTLY', () => {
    const wrapper = shallow(<DashboardPage />);
    expect(wrapper).toMatchSnapshot();
});