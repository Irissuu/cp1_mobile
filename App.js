import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";

export default function App() {
  const [nome, setNome] = useState("");
  const [valorOriginal, setValorOriginal] = useState("");
  const [porcentagem, setPorcentagem] = useState("");
  const [resultado, setResultado] = useState(null);

  function calcular() {
    if (nome === "" || valorOriginal === "" || porcentagem === "") {
      return; 
    }

    let valor = Number(valorOriginal);
    let aumento = (valor * Number(porcentagem)) / 100;
    let novoValor = valor + aumento;

    setResultado({
      nome,
      valorOriginal: valor,
      porcentagem,
      aumento,
      novoValor,
    });
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/calculadoraFofa.png")} 
        style={styles.imagem}
      />


      <Text style={styles.titulo}>Calculadora de Aumento</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do produto"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Valor original"
        value={valorOriginal}
        onChangeText={setValorOriginal}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Porcentagem de aumento"
        value={porcentagem}
        onChangeText={setPorcentagem}
        keyboardType="numeric"
      />

     

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECBFE8",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  }
});
