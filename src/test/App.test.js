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
