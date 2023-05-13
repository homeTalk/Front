import { StyleSheet, Text, View } from 'react-native';
import UpperBar from './Components/UpperBar';
import BottomBar from './Components/BottomBar';
import Main from './Screen/Main/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <UpperBar />
        <Main />
      <BottomBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
