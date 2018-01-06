import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';

import * as Colors from './Commons/style/Colors'

// Components
import CharacterList from './Sections/CharacterList/Template/CharacterList';
import CharacterDetail from './Sections/CharacterDetail/Template/CharacterDetail';
// Components

// REDUX
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from './Sections/CharacterList/Redux/Reducer' // Nuestros reducers TODO: Implement reducers
const reducer = combineReducers(reducers) // Combinamos nuestros reducers
const store = createStore( // Creamos el store con:
  reducer, // Nuestros reducer
  applyMiddleware(thunk) // Nuestro middleware redux-thunk
)
// REDUX

export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Router>
          <Scene key="root">
            <Scene
              key={'CharacterList'}
              component={CharacterList}
              navigationBarStyle={style.navBar}
              titleStyle={style.titleStyle}
            />
            <Scene
              key={'CharacterDetail'}
              component={CharacterDetail}
              navigationBarStyle={style.navBar}
              titleStyle={style.titleStyle}
              navBarButtonColor={Colors.white}
            />
          </Scene>
        </Router>
      </Provider>
    );
  }
}

const style = StyleSheet.create({
  navBar: {
    backgroundColor: Colors.red,
  },
  titleStyle: {
    color: Colors.white
  }
})