import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

class Visible extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible : this.props.visible
    }

  }

  componentWillReceiveProps(nextProps) {
    this.setState( { visible:nextProps.visible } );
  }

  render() {

    if (!this.state.visible) {
      return null;
    }

    return  this.props.children;

  }
}

Visible.propTypes = {
  visible: PropTypes.oneOfType([
    PropTypes.bool
    ,PropTypes.number
  ]).isRequired
}

export default Visible;
