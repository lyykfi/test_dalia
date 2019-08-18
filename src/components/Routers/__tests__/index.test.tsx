import React from "react";
import { shallow } from 'enzyme';
import AppRouters from "..";

describe('AppRouters component', () => {
    it('should render', () => {
        jest.mock("data/routers", () => {
            return [
                {
                    component: jest.fn(),
                    exact: true,
                    path: "/",
                },
                {
                    component: jest.fn(),
                    path: "/survey/:id",
                },
            ]
        });

        const routers = shallow(<AppRouters />);

        const routersList = routers.find('Route');
        expect(routersList.length).toBe(2);
    });
});