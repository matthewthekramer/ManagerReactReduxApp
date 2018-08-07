import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';


class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAumGMb5X_MxataOd7veDUMhdS-rPl6ImI',
      authDomain: 'manager-6fbc5.firebaseapp.com',
      databaseURL: 'https://manager-6fbc5.firebaseio.com',
      projectId: 'manager-6fbc5',
      storageBucket: 'manager-6fbc5.appspot.com',
      messagingSenderId: '489662916435'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />

      </Provider>
    );
  }
}

export default App;
