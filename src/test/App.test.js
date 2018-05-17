/**
 * @jest-environment node
 */

import React from 'react';
import App from '../App';
import {shallow} from 'enzyme';

test('should render title', () => {
    const app = shallow(<App/>);

    expect(app.find('.App-title').text()).toEqual("Lean Coffee Machine");
});

test('should show add button', () => {
    const app = shallow(<App/>);

    expect(app.find(".new-card").length).toEqual(0);

    let addCardButton = app.find('#add-a-card');

    expect(addCardButton.text()).toEqual("Add a card");

    addCardButton.simulate('click');

    expect(app.find(".new-card").length).toEqual(1);

});