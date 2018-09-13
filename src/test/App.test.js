/**
 * @jest-environment node
 */

import React from 'react';
import App from '../App';
import {mount} from 'enzyme';

test('should render title', () => {
    setPath('/');
    const app = mount(<App/>);

    expect(app.find('.App-title').text()).toEqual("Lean Coffee Machine");
});

test('should render board when visting /boards URL', () => {
    setPath('/board');
    const app = mount(<App persistenceAdaptor={new MockRepository()}/>);

    expect(app.find('.App-title').text()).toEqual("Lean Coffee Machine");
    expect(app.find('.board').length).toEqual(1)
    expect(app.find('.card').length).toEqual(2)
});

function setPath(path) {
    jsdom.reconfigure({ "url": `http://localhost${path}` });
}

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

