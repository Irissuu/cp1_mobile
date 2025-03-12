import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Insira o valor original de um produto e a porcentagem de aumento, e o sistema deve calcular e exibir o novo valor do produto após o aumento.</Text>
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECBFE8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem: {
    resizeMode: "center",
    width: 350
  },
  input: {
    backgroundColor: 'white',
    width: 300,
    borderRadius: 7,
    paddingLeft: 10,
    borderWidth: 3,
    borderColor: '#915da1',
    fontSize: 15
  }
});
