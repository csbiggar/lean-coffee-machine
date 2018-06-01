/**
 * @jest-environment node
 */

import React from 'react';
import Card from '../Card';
import {shallow} from 'enzyme';

test('should display a card', () => {
    const card = shallow(<Card title="this is a title"/>);

    expect(card.find('div').text()).toEqual("This is a new card");
    expect(card.find('.card-title').length).toEqual(1);
    expect(card.find('.card-title').prop("value")).toEqual("this is a title");
});
