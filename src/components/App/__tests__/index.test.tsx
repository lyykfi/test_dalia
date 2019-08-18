import React from "react";
import App from "..";
import { shallow } from 'enzyme';

describe('App component', () => {
    it('should render', () => {
      const calculator = shallow(<App />);
  
      const routers = calculator.find('AppRouters');
      expect(routers.length).toBe(1);
    });
  });