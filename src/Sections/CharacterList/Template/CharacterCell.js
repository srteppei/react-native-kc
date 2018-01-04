import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

export default class CharacterCell extends Component {

    static defaultProps = {
        item: {},
        onSelect: () => { }
    }

    render() {

        const { item } = this.props;

        const id = item.id ? item.id : 'This item has not ID';
        const name = item.name ? item.name : 'This item has not name';

        return (
            <TouchableOpacity>
                <View>
                    <Text>{id}</Text>
                    <Text>{name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

}