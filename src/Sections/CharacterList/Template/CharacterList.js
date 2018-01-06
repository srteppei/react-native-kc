import React, { Component } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux'
import CharacterCell from './CharacterCell';

import { connect } from 'react-redux';
import * as CharacterActions from '../Redux/Action';
import * as Colors from '../../../Commons/style/Colors';

class CharacterList extends Component {
    
    componentWillMount () {
        this.props.navigation.setParams({title: 'CharacterList'});
        this.props.fetchCharactersList();
    }

    render() {
        return (
            <View style={style.container}>
                <FlatList
                    data={this.props.characterList}
                    renderItem={({ item, index }) => this.renderItem(item, index)}
                    keyExtractor={(item, index) => index}
                    extraData={this.props}
                />
            </View>
        )
    } 

    renderItem(item, index) {
        return <CharacterCell item={item} onSelect={(character) => this.props.updateSelected(character)}/>
    }

}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.blue
    }
});

const mapStateToProps = (state) => {
    return {
        characterList: state.default.characterList
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchCharactersList: () => {
            dispatch(CharacterActions.fetchCharacterList())
        },
        updateSelected: (character) => {
            dispatch(CharacterActions.updateCharacterSelected(character));
            console.log(character);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList)