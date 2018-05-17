/**
 * @jest-environment node
 */

import React from 'react';
import NewCard from '../NewCard';
import {shallow} from 'enzyme';

test('should have a title input filed', () => {
    const newCard = shallow(<NewCard/>);

    expect(newCard.find('div').text()).toEqual("This is a new card");
    expect(newCard.find('.new-card-title').length).toEqual(1);
});
