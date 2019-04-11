import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Navbar from './Navbar';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { expect } from 'chai';

describe('<Navbar />', () => {
    beforeEach(() => {
        // enzyme config ....
        configure({ adapter: new Adapter() });
    });

    it('Should render the navbar div', () => {
        const wrapper = shallow(<Navbar />);
        expect(wrapper.find('div')).to.have.lengthOf(1);
    });

    it('Should render the NavLink inside the navbar div', () => {
        const wrapper = shallow(<Navbar />);
        expect(wrapper.find(NavLink)).to.have.lengthOf(1);
    });
});