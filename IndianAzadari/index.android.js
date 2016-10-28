//'use strict';
import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,TabBarIOS, NavigatorIOS
} from 'react-native';

import { Provider } from 'react-redux';
import App from './src/containers/App';
import configStore from './src/store/configureStore';
const store = configStore();

class pegoldnative extends Component {
	constructor (props) {
	    super(props);
	}
	render(){
		return (
			<Provider store={store}>
		        {<App />}
		    </Provider>
		)
	}
}

AppRegistry.registerComponent('pegoldnative', () => pegoldnative);