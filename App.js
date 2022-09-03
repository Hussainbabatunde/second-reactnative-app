import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Startgame from './screen/startgame';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number"/>
      <Startgame word= "Start a new game"/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex: 1
  }
});
