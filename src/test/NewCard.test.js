/**
 * @jest-environment node
 */

import React from 'react';
import NewCard from '../App';
import {shallow} from 'enzyme';

test('should have a title input filed', () => {
    const newCard = shallow(<NewCard/>);

    expect(newCard.find('.new-card-title').length).toEqual(1);
});
