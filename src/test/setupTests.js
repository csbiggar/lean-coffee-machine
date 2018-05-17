import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import {JSDOM} from 'jsdom';

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;
global.window = window;
global.document = window.document;