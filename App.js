//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={[styles.container,styles.borders,{borderColor:'blue'}]}>
      <Text style={{color:'white'}}>Hola Mundo</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  borders:{
    borderWidth:5,
    borderRadius:30

  }
});
