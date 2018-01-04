import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import CharacterCell from './CharacterCell';

export default class CharacterList extends Component {

    mock = [{ id: 1, name: 'asdasd' }, { id: 1, name: 'asdasd' }, { id: 1, name: 'asdasd' }, { id: 1, name: 'asdasd' }];

    render() {

        this.props.navigation.setParams({title: 'CharacterList'});

        return (
            <View>
                <FlatList
                    data={this.mock}
                    renderItem={({ item, index }) => this.renderItem(item, index)}
                    keyExtractor={(item, index) => index}
                    extraData={this.props}
                />
            </View>
        )
    } 

    renderItem(item, index) {
        return <CharacterCell item={item} />
    }

}