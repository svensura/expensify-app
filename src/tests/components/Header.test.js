import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';


test('should render Header correctly', () => {
  const wrapper = shallow(<Header startLogout={() => { }} />);
  expect(wrapper).toMatchSnapshot();
});


test('should call startLogout on button click', () => {
  const startLogout = jest.fn();              // spy defined
  const wrapper = shallow(<Header startLogout={startLogout} />); //define startLogout as the spy just defined
  wrapper.find('button').simulate('click')
  expect(startLogout).toHaveBeenCalled();
});