import React from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends React.Component {
  state = {items: []};
  render() {
    let content = <Text>Keine Einträge im Tagebuch</Text>
    if (this.state.items.length > 0) {
      content = (
        <FlatList
        style = {styles.list}
        data = {this.state.items}
        renderItem = {({item}) => <Text>{item.text}</Text>}
        keyExtractor = {item => item.date}
        />
      );
    }
    return (
      <View style={styles.container}>
        <Text> {this.state.item || 'Keine Einträge im Tagebuch'}</Text>
        <TextInput style={styles.input} placeholder = "Tagebucheintrag erstellen" 
        returnKeyType = "done"
        //Use onChangeText for refresh the text in real time
        //onChangeText={(item) => this.setState({item})}/>

        //Use onSubmitEditing for refresh the text after pushing the Enter-Button 
        onSubmitEditing = {event => this.setState({ item: event.nativeEvent.text})}/>      
      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  list: {
    marginTop: 24
  },
  input: {
    height: 40
  }
});
