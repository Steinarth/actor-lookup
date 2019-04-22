import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MoviesByActorContainer from './MoviesByActorContainer';
import Movie from '../Movie/Movie';


import React from 'react';
import { expect } from 'chai';

describe('<MoviesByActorContainer />', () => {
    beforeEach(() => {
        // enzyme config ....
        configure({ adapter: new Adapter() });
    });

    it('Should render the movieContainer div without a problem', () => {
        const wrapper = shallow(<MoviesByActorContainer
                            movies={[ ]}
                        />);

        expect(wrapper.find('div.movieContainer')).to.have.lengthOf(1);
    });

    it('Should render 3 movies given three correctly formatted movies', () => {
        const wrapper = shallow(<MoviesByActorContainer
                            movies={[ 
                                {id:1,poster_path:"http://some-url.com",title:'best movie in the galaxy',description:"this movie happens in space where there are alot of people playing with lightsabers and more things"},
                                {id:2,poster_path:"http://some-url-2.com",title:'Dogs are also people',description:"A documentary on how dogs feel things such as joy, laughter and sadness just as humans do"},
                                {id:3,poster_path:"http://some-url-3.com",title:'Toothpick in the wild',description:"A documentary about how to survive in the wild with just a toothpick"}
                            ]}
                        />);

        expect(wrapper.find(Movie)).to.have.lengthOf(3);
    });

    it('Should NOT render movies missing the poster (no one wants to see that ...)', () => {
        const wrapper = shallow(<MoviesByActorContainer
                            movies={[ 
                                {id:1,title:'best movie in the galaxy',description:"this movie happens in space where there are alot of people playing with lightsabers and more things"},
                                {id:2,poster_path:"http://some-url-2.com",title:'Dogs are also people',description:"A documentary on how dogs feel things such as joy, laughter and sadness just as humans do"},
                                {id:3,poster_path:"http://some-url-3.com",title:'Toothpick in the wild',description:"A documentary about how to survive in the wild with just a toothpick"}
                            ]}
                        />);

        expect(wrapper.find(Movie)).to.have.lengthOf(2);
    });


});