import { Text, View } from "react-native";

export default function conta(valorOriginal, valorAumento) {
    return (
        <View>
            <Text> Valor Original:{props.valorOriginal} </Text>
            <Text> Porcentagem de aumento:{props.valorAumento} </Text>
            <Text> Desconto</Text>
            <Text>{valorOriginal + valorAumento}</Text>
        </View>
    )
}