import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Movie from './Movie';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import React from 'react';
import { expect } from 'chai';

describe('<Movie />', () => {
    beforeEach(() => {
        // enzyme config ....
        configure({ adapter: new Adapter() });
    });

    it('Should render the Card container div without a problem', () => {
        const wrapper = shallow(<Movie 
                                imageUrl="http://some-url-2.com"
                                title='Dogs are also people'
                                description="A documentary on how dogs feel things such as joy, laughter and sadness just as humans do"
                        />);

        expect(wrapper.find(Card)).to.have.lengthOf(1);
    });

    it('Should render the image and description', () => {
        const wrapper = shallow(<Movie 
                                imageUrl="http://some-url-2.com"
                                title='Dogs are also people'
                                description="A documentary on how dogs feel things such as joy, laughter and sadness just as humans do"
                        />);

        // image ...
        expect(wrapper.find(CardMedia)).to.have.lengthOf(1);
        // body ...
        expect(wrapper.find(CardContent)).to.have.lengthOf(1);

    });


});