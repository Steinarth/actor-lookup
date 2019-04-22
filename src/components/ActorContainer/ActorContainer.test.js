import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ActorContainer from './ActorContainer';

import React from 'react';
import { expect } from 'chai';

describe('<ActorContainer />', () => {
    beforeEach(() => {
        // enzyme config ....
        configure({ adapter: new Adapter() });
    });

    it('Should render the actorContainer div without a problem', () => {
        const wrapper = shallow(<ActorContainer 
                            imageUrl="http://link-to-image"
                            name="benedict cumberbatch"
                            biography="a strong and capable man has acted a dragon ...."
                            birthday="26.05.94.2019"
                        />);

        expect(wrapper.find('div.actorContainer')).to.have.lengthOf(1);
    });

    it('Should render the image div without problem', () => {
        const wrapper = shallow(<ActorContainer 
            imageUrl="http://link-to-image"
            name="benedict cumberbatch"
            biography="a strong and capable man has acted a dragon ...."
            birthday="26.05.94.2019"
        />);
        expect(wrapper.find('div.actorPicture')).to.have.lengthOf(1);
        expect(wrapper.find('div.image')).to.have.lengthOf(1);
    });

    it('Should render the info props correctly', () => {
        const wrapper = shallow(<ActorContainer 
            imageUrl="http://link-to-image"
            name="benedict cumberbatch"
            biography="a strong and capable man has acted a dragon ...."
            birthday="26.05.94.2019"
        />);
        expect(wrapper.find('h2')).to.have.lengthOf(1);
        expect(wrapper.find('p')).to.have.lengthOf(3);
    });

});