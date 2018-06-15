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

test('add button should create a new card and focus on it', () => {
    const app = mount(<App/>);

    expect(app.find(".card").length).toEqual(0);

    let addCardButton = app.find('#add-a-card');
    expect(addCardButton.text()).toEqual("Add a card");

    addCardButton.simulate('click');
    expect(app.find(".card").length).toEqual(1);

    expect(app.find(".card-editor").matchesElement(document.activeElement)).toBeTruthy();

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

test('should make editable card read-only on blur', () => {
    const appState = {cards: [{content: "some content", cardId: "1", editable: true}]};
    const app = mount(<App/>);

    app.setState(appState);

    expect(app.find(".card-detail").length).toEqual(0);
    expect(app.find(".card-editor").length).toEqual(1);

    app.find(".card-editor").simulate('blur');

    expect(app.find(".card-editor").length).toEqual(0);

    expect(app.find(".card-detail").length).toEqual(1);
    expect(app.find(".card-detail").text()).toEqual("some content")
});

test('should make read-only card editable and focused on click', () => {
    const appState = {cards: [{content: "some content", cardId: "1", editable: false}]};
    const app = mount(<App/>);

    app.setState(appState);

    expect(app.find(".card-detail").length).toEqual(1);

    expect(app.find(".card-editor").length).toEqual(0);

    app.find(".card").simulate('click');


    let cardEditor = app.find(".card-editor");
    expect(cardEditor.length).toEqual(1);
    expect(cardEditor.text()).toEqual("some content");

    expect(cardEditor.matchesElement(document.activeElement)).toEqual(true);

    expect(app.find(".card-detail").length).toEqual(0);
});