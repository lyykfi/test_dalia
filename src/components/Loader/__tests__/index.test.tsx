import React from "react";
import { shallow } from 'enzyme';
import Loader from "..";

describe('Loader component', () => {
    it('should render', () => {
        const loaderComponent = shallow(<Loader />);

        const loader = loaderComponent.find('.loader');
        expect(loader.length).toBe(1);
    });
});