import React from 'react';
import ReactDOM from 'react-dom';

import { Example } from './Example';
import LegacyTimer from './LegacyTimer';

ReactDOM.render(
  <LegacyTimer />,
  document.querySelector('#root')
);