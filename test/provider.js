'use strict';

import test from 'tape';
import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { StatusMachinaProvider } from '../lib/provider';

configure({ adapter: new Adapter() });

test('shallow', t => {
  const wrapper = shallow(<StatusMachinaProvider />);
  console.log(wrapper);
  t.end();
});
