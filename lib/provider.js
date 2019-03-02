'use strict';

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StatusMachinaContext } from './context';

// from https://reactjs.org/docs/context.html#classcontexttype
class StatusMachinaProvider extends Component {
  constructor(props) {
    super(props);
    const { store } = props;
    if (store) {
      this.state = {
        store,
      };
    }
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
    const Context = this.props.context || StatusMachinaContext;
    /* render something based on the value of MyContext */
    return <Context.Provider value={this.state} />;
  }
}

StatusMachinaProvider.propTypes = {
  store: PropTypes.object.isRequired,
};

export { StatusMachinaProvider };
