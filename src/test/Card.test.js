/**
 * @jest-environment node
 */

import React from 'react';
import Card from '../Card';
import {shallow} from 'enzyme';

test('should display editable card', () => {
    const card = shallow(<Card content="this is a title" cardId="3" editable={true}/>);

    expect(card.find('.card-id').text()).toEqual("#3");
    expect(card.find('.card-editor').length).toEqual(1);
    expect(card.find('.card-editor').prop("value")).toEqual("this is a title");
});

test('should display pretty card', () => {
    const card = shallow(<Card content="this is a title" cardId="3" editable={false}/>);

    expect(card.find('.card-id').text()).toEqual("#3");
    expect(card.find('.card-editor').length).toEqual(0);
});
