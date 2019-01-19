'use strict'

import React, { Component } from 'react';
import { font_icons } from '../images';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../../node_modules/react-native-vector-icons/glyphmaps/icomoon.json';
const IconMoon = createIconSetFromIcoMoon(icoMoonConfig);

import PropTypes from 'prop-types';

class MiIcon extends Component {

	static propTypes = {
		name: PropTypes.string,
		size: PropTypes.number,
		color: PropTypes.string,
		style: PropTypes.any,
		font: PropTypes.string
	};

	static defaultProps = {
		name	: font_icons['default'],
		size	: 16,
		color   : 'black',
		style   : {},
		font	: 'icomoon'
	};

	constructor(props) {
		super(props);
		this.state = {
			name  : ( font_icons[this.props.name] ) ? this.props.name : 'default',
			size  :this.props.size,
			color :this.props.color,
			style :this.props.style,
			font  :this.props.font
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState( {
			name  : ( font_icons[nextProps.name] ) ? nextProps.name : 'default',
			size  : nextProps.size,
			color : nextProps.color,
			style : nextProps.style,
			font  : nextProps.font
		});
	}
		
  render() {
    if (this.state.font == 'icomoon') {
      return (
				<IconMoon name={font_icons[this.state.name]} size={this.state.size} color={this.state.color} style={this.state.style}/>
      );
    }else return null;
  }

}

module.exports = MiIcon;
