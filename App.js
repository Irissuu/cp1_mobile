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

}