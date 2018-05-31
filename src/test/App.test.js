/**
 * @jest-environment node
 */

import React from 'react';
import App from '../App';
import {shallow, mount} from 'enzyme';

test('should render title', () => {
    const app = shallow(<App/>);

    expect(app.find('.App-title').text()).toEqual("Lean Coffee Machine");
});

test('add button should display new card', () => {
    const app = mount(<App/>);

    expect(app.find(".new-card").length).toEqual(0);

    let addCardButton = app.find('#add-a-card');
    expect(addCardButton.text()).toEqual("Add a card");

    addCardButton.simulate('click');
    expect(app.find(".new-card").length).toEqual(1);
});

test('should create a card with a title', () => {
    const app = mount(<App/>);

    app.find('#add-a-card').simulate('click')
    app.find(".new-card-title").first()
        .simulate('change', {target: {value: 'new title'}})

    expect(app.state('card').title).toEqual('new title');

});