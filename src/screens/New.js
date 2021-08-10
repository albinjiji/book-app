import React from 'react';
import { View, 
        StyleSheet, 
        Text, 
        ScrollView, 
        TextInput, 
        TouchableOpacity } from 'react-native';

import Book from './Book';        

export default class Home extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            noteArray: [],
            noteText: '',
            noteAuthor: '',
            noteRating: '',
        }
    }

    render(){

        let notes = this.state.noteArray.map(( val, key)=>{
            return <Book key={key} keyval={key} val={val}
            deleteMethod={ ()=> this.deleteNote(key) } />
        });

        return(
            <View  style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Books</Text>
                </View>
                <ScrollView style={styles.scrollContainer}>
                    {notes}
                </ScrollView>
                <View style={styles.footer}>
                    <TextInput 
                        style={styles.textIn}
                        onChangeText={(noteText) => this.setState({noteText})}
                        value={this.state.noteText}
                        placeholder='Book name'
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent'>
                        
                    </TextInput>
                    <TextInput 
                        style={styles.textAuth}
                        onChangeText={(noteAuthor) => this.setState({noteAuthor})}
                        value={this.state.noteAuthor}
                        placeholder='Author Name'
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent'>
                        
                    </TextInput>
                    <TextInput 
                        style={styles.textRate}
                        onChangeText={(noteRating) => this.setState({noteRating})}
                        value={this.state.noteRating}
                        placeholder='Rating'
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent'>
                        
                    </TextInput>

                </View>
                <TouchableOpacity onPress={ this.addNote.bind(this) } style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        )
    }

    addNote(){
        if (this.state.noteText) {
            this.state.noteArray.push({
                'note': this.state.noteText,
                'auth': this.state.noteAuthor,
                'rate': this.state.noteRating,
            });
            this.setState({ noteText: '' });
            this.setState({noteAuthor: ''});
            this.setState({ noteRating: ''});
        }
    }

    deleteNote(key){
        this.state.noteArray.splice(key, 1);
        this.setState({ noteArray: this.state.noteArray })
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    headerText: {
        fontSize: 20,
        color: 'white',
        padding: 26,
    },
    header: {
        backgroundColor: '#E91E63',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd',
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
    },
    textIn: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth: 2,
        borderTopColor: '#ededed',
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#E91E63',
        width: 90,
        height: 90,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24,
    },
    textAuth: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth: 2,
        borderTopColor: '#ededed',
    },
    textRate: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth: 2,
        borderTopColor: '#ededed',
    },
})