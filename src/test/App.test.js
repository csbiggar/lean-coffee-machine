/**
 * @jest-environment node
 */

import React from 'react';
import App from '../App';
import {mount} from 'enzyme';

test('should render title', () => {
    const app = mount(<App/>);

    expect(app.find('.App-title').text()).toEqual("Lean Coffee Machine");
});
