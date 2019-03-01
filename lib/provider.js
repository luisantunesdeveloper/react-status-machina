'use strict';

import { Component } from 'react';
import { StatusMachinaContext } from './context';

// from https://reactjs.org/docs/context.html#classcontexttype
class StatusMachinaProvider extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let value = this.context;
    /* perform a side-effect at mount using the value of MyContext */
  }
  componentDidUpdate() {
    let value = this.context;
    /* ... */
  }
  componentWillUnmount() {
    let value = this.context;
    /* ... */
  }
  render() {
    let value = this.props.context || StatusMachinaContext;
    /* render something based on the value of MyContext */
  }
}

export { StatusMachinaProvider };
