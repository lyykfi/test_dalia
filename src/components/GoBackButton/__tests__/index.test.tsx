import React from "react";
import { shallow } from 'enzyme';
import GoBackButton from "..";

describe('GoBackButton component', () => {
    it('should render', () => {
      const goBackButton = shallow(<GoBackButton />);
  
      const button = goBackButton.find('Button');
      expect(button.length).toBe(1);
    });
  });