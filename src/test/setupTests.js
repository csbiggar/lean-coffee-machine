import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import {JSDOM} from 'jsdom';

import 'jest-localstorage-mock';

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
global.jsdom = jsdom;
const { window } = jsdom;
global.window = window;
window.localStorage = localStorage;
global.document = window.document;