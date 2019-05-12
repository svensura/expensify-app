import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';
import { startLogin } from '../../actions/auth';

test('should correctly render LoginPage', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});


test('should call startLogin on button click', () => {
  const startLogin = jest.fn();  // spy defined
  const wrapper = shallow(<LoginPage startLogin={startLogin} />);    //define startLogin as the spy just defined
  wrapper.find('button').simulate('click')
  expect(startLogin).toHaveBeenCalled();
});