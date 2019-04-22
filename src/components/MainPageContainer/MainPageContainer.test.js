import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MainPageContainer from './MainPageContainer';
import SearchContainer from '../SearchContainer/SearchContainer';
import ActorContainer from '../ActorContainer/ActorContainer';
import MoviesByActorContainer from '../MoviesByActorContainer/MoviesByActorContainer';

import React from 'react';
import { NavLink } from 'react-router-dom';
import { expect } from 'chai';

describe('<MainPageContainer />', () => {
    beforeEach(() => {
        // enzyme config ....
        configure({ adapter: new Adapter() });
    });

    it('Should render the MainPageContainer, with SearchContainer', () => {
        const wrapper = shallow(<MainPageContainer />);
        expect(wrapper.find(SearchContainer)).to.have.lengthOf(1);
    });

    it('Should render ActorContainer and MoviesByActorContainer  if already searched and found someActor ', () => {
        const wrapper = shallow(<MainPageContainer />);
        wrapper.setState({ searched: true })

        expect(wrapper.find(ActorContainer)).to.have.lengthOf(1);
        expect(wrapper.find(MoviesByActorContainer)).to.have.lengthOf(1);

    });

    it('Should NOT render ActorContainer and MoviesByActorContainer  if not already searched for actor ', () => {
        const wrapper = shallow(<MainPageContainer />);
        wrapper.setState({ searched: false })

        expect(wrapper.find(ActorContainer)).to.have.lengthOf(0);
        expect(wrapper.find(MoviesByActorContainer)).to.have.lengthOf(0);

    });
});