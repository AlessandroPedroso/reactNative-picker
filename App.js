import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

export default function App() {
  const [carroSelecionado, setCarroSelecionado] = useState(0);
  const [carros, setCarros] = useState([
    {
      key: 1,
      nome: "Golf 1.6",
      valor: 62.555,
    },
    {
      key: 2,
      nome: "Saveiro 1.6",
      valor: 29.325,
    },
    {
      key: 3,
      nome: "Gol 1.0",
      valor: 25.222,
    },
    {
      key: 4,
      nome: "BMW 120I",
      valor: 125.222,
    },
    {
      key: 5,
      nome: "Uno 1.0",
      valor: 25.222,
    },
  ]);

  let carrosItem = carros.map((value, key) => {
    return <Picker.Item key={key} value={key.toString()} label={value.nome} />;
  });

  return (
    <View style={styles.container}>
      <Picker
        style={styles.stylePicker}
        selectedValue={carroSelecionado}
        onValueChange={(itemValue, itemIndex) => setCarroSelecionado(itemValue)}
      >
        {carrosItem}
        {/* <Picker.Item key={0} value="0" label="Golf 1.6" />
        <Picker.Item key={1} value="1" label="Saveiro 1.6" />
        <Picker.Item key={2} value="2" label="Gol 1.0" /> */}
      </Picker>

      <Text style={styles.carros}>Carro: {carros[carroSelecionado].nome}</Text>
      <Text style={styles.carros}>
        R$: {carros[carroSelecionado].valor.toFixed(2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 135,
  },
  stylePicker: {
    width: "auto",
  },
  carros: {
    marginTop: 15,
    fontSize: 25,
  },
});
