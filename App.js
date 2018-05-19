import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends React.Component {
  state = {item: null};
  render() {
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
  input: {
    height: 40
  },
});
