import React, { Component } from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

export default class CharacterCell extends Component {

    static defaultProps = {
        item: {},
        onSelect: () => { }
    }

    render() {

        const { item, onSelect} = this.props;
        const id = item.id ? item.id : 'This item has not ID';
        const name = item.name ? item.name : 'This item has not name';
        const image = item.thumbnail ? { uri: item.thumbnail.path + '.' + item.thumbnail.extension } : null;
        return (
            <TouchableOpacity style={style.container} onPress={() => onSelect(item)}>
                <Image style={style.image} source={image} resizeMode={'contain'} />
                <Text style={style.name}>{name}</Text>
            </TouchableOpacity>
        )
    }
}

const style = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    image: {
        flex: 1,
        height: 100
    },
    name: {
        flex: 3,
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})