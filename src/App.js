
import React, { Component } from 'react';
import { } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';

// Components
import CharacterList from './Sections/CharacterList/Template/CharacterList';
// Components

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key={'CharacterList'}
            component={CharacterList}
          />
        </Scene>
      </Router>
    );
  }
}