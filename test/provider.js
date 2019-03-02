'use strict';

import test from 'tape';
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { StateMachine } from 'status-machina';

import { StatusMachinaProvider } from '../lib/provider';

configure({ adapter: new Adapter() });

const config = onS1 => ({
  s1: {
    on: onS1,
  },
});

test('provider', t => {
  const onS1 = args => {
    console.log('on s1', args);
  };
  const myConfig = config(onS1);
  const store = new StateMachine(myConfig, 's1');
  const wrapper = shallow(<StatusMachinaProvider store={store} />);
  t.isNot(
    wrapper.props().value.store,
    undefined,
    'StatusMachinaProvider store is not undefined'
  );
  t.end();
});
