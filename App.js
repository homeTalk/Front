import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';
import UpperBar from './Components/UpperBar';
import BottomBar from './Components/BottomBar';
import Main from './Screen/Main/Main';
import Mission from './Screen/Mission/Mission';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <View style={styles.container}>
          <UpperBar />
            {/* <Main /> */}
            <Mission />
          <BottomBar />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
