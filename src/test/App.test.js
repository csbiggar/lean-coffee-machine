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

test('add button should display new cards', () => {
    const app = mount(<App/>);

    expect(app.find(".card").length).toEqual(0);

    let addCardButton = app.find('#add-a-card');
    expect(addCardButton.text()).toEqual("Add a card");

    addCardButton.simulate('click');
    expect(app.find(".card").length).toEqual(1);

    addCardButton.simulate('click');
    expect(app.find(".card").length).toEqual(2);
});

test('should store card title in state', () => {
    const app = mount(<App/>);

    app.find('#add-a-card').simulate('click');
    app.find(".card-editor").first()
        .simulate('change', {target: {value: 'new title'}});

    expect(app.state('cards')[0].content).toEqual('new title');

});

test('should make editable card read only on blur ', () => {
    const appState = {cards: [{content: "some content", cardId: "1", editable: true}]};
    const app = mount(<App/>);

    app.setState(appState);

    expect(app.find(".card-editor").length).toEqual(1);


    app.find(".card-editor").simulate('blur');

    expect(app.find(".card-editor").length).toEqual(0);

});