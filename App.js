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

      <Button title="Calcular" onPress={calcular} color="#915da1" />

      {resultado && (
        <View style={styles.resultado}>
          <Text>Produto: {resultado.nome}</Text>
          <Text>Valor Original: R$ {resultado.valorOriginal}</Text>
          <Text>Porcentagem de Aumento: {resultado.porcentagem}%</Text>
          <Text>Valor do Aumento: R$ {resultado.aumento}</Text>
          <Text>Novo Valor: R$ {resultado.novoValor}</Text>
        </View>
      )}

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
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    backgroundColor: "white",
    width: 300,
    borderRadius: 7,
    paddingLeft: 10,
    borderWidth: 3,
    borderColor: "#915da1",
    fontSize: 15,
    height: 40,
    marginBottom: 10,
  },
  resultado: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#f2c7dc",
    borderRadius: 7,
    width: "100%",
    alignItems: "center",
  },
});
