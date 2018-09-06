/**
 * @jest-environment node
 */

import React from 'react';
import Board from '../Board';
import {mount} from 'enzyme';

test('add button should create a new card and focus on it', () => {
    const app = mount(<Board/>);

    expect(app.find(".card").length).toEqual(0);

    let addCardButton = app.find('#add-a-card');
    expect(addCardButton.text()).toEqual("Add a card");

    addCardButton.simulate('click');
    expect(app.find(".card").length).toEqual(1);

    expect(app.find(".card-editor").matchesElement(document.activeElement)).toBeTruthy();

    addCardButton.simulate('click');
    expect(app.find(".card").length).toEqual(2);
});

test('should store card text in state', () => {
    const app = mount(<Board/>);

    app.find('#add-a-card').simulate('click');
    app.find(".card-editor").first()
        .simulate('change', {target: {value: 'new text'}});

    expect(app.state('cards')[0].content).toEqual('new text');

});

test('should make editable card read-only on blur', () => {
    const appState = {cards: [{content: "some content", cardId: "1", editable: true}]};
    const app = mount(<Board/>);

    app.setState(appState);

    expect(app.find(".card-detail").length).toEqual(0);
    expect(app.find(".card-editor").length).toEqual(1);

    app.find(".card-editor").simulate('blur');

    expect(app.find(".card-editor").length).toEqual(0);

    expect(app.find(".card-detail").length).toEqual(1);
    expect(app.find(".card-detail").text()).toEqual("some content")
});

test('should remove empty editable card on blur', () => {
    const appState = {cards: [{content: "", cardId: "1", editable: true}]};
    const app = mount(<Board/>);

    app.setState(appState);

    expect(app.find(".card-editor").exists()).toBe(true);

    app.find(".card-editor").simulate('blur');

    expect(app.find(".card").exists()).toBe(false);

});

test('should make read-only card editable and focused on click', () => {
    const appState = {cards: [{content: "some content", cardId: "1", editable: false}]};
    const app = mount(<Board/>);

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

test('should load persisted cards', () => {
    const adaptor = new MockRepository();
    const app = mount(<Board persistenceAdaptor={adaptor}/>);
    expect(app.state().cards.length).toEqual(2)
});

test('should persist changes to existing card on blur', () => {
    const adaptor = new MockRepository();
    adaptor.saveCard = jest.fn()

    const app = mount(<Board persistenceAdaptor={adaptor}/>);

    app.find(".card").first().simulate('click');
    app.find(".card-editor").first()
        .simulate('change', {target: {value: 'more stuff'}});
    app.find(".card-editor").simulate('blur');

    expect(adaptor.saveCard).toHaveBeenCalledWith({
        content: "more stuff",
        cardId: "1"
    });
});


class MockRepository {
    load() {
        return [
            {content: "xxxxx", cardId: "1", editable: false},
            {content: "yyyy", cardId: "2", editable: false}
        ]

    }

    saveCard() {

    }
}
