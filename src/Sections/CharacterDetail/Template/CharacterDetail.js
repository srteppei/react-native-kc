import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, Image } from 'react-native';

import * as Color from '../../../Commons/style/Colors'

// Redux
import { connect } from 'react-redux'

class CharacterDetail extends Component {

    render() {
        
        const { character } = this.props;

        const description = character.description ? character.description : 'Character without description'
        const image = character.thumbnail ? { uri: character.thumbnail.path + '.' + character.thumbnail.extension } : null;

        return (
            <ScrollView style={style.container}>
                <Image style={style.image} source={image} resizeMode={'cover'} />
                <Text style={style.description}> {description} </Text>
            </ScrollView>
        )
    }

}

const style = StyleSheet.create({
    container: {
        backgroundColor: Color.blue
    },
    image: {
        width: '100%',
        height: 200
    },
    description: {
        margin: 10,
        padding: 20,
        backgroundColor: Color.white
    }
})

const mapStateToProps = (state) => {
    return {
        character: state.default.item,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetail)