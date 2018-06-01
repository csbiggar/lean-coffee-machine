/**
 * @jest-environment node
 */

import React from 'react';
import Card from '../Card';
import {shallow} from 'enzyme';

test('should have a title input field', () => {
    const card = shallow(<Card/>);

    expect(card.find('div').text()).toEqual("This is a new card");
    expect(card.find('.card-title').length).toEqual(1);
});
