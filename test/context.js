'use strict';

import test from 'tape';
import { StatusMachinaContext } from '../lib/context';

test('context', t => {
  t.isNot(
    StatusMachinaContext,
    undefined,
    'StatusMachinaContext is not undefined'
  );

  t.end();
});
