import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SearchContainer from '../SearchContainer/SearchContainer';
import TextField from '@material-ui/core/TextField';

import React from 'react';
import { NavLink } from 'react-router-dom';
import { expect } from 'chai';

describe('<SearchContainer />', () => {
    beforeEach(() => {
        // enzyme config ....
        configure({ adapter: new Adapter() });
    });

    it('Should render the searchbar div without a problem', () => {
        const wrapper = shallow(<SearchContainer />);
        expect(wrapper.find('div.searchBarContainer')).to.have.lengthOf(1);
    });

    it('Should render the TextField from material-ui without a problem', () => {
        const wrapper = shallow(<SearchContainer />);
        expect(wrapper.find(TextField)).to.have.lengthOf(1);
    });
});