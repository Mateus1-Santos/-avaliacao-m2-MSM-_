import React, {useState} from "react";
import { View, Text, Switch, StyleSheet, Button } from "react-native";

const Interruptor = (props) => {
  const [ligado, setLigado] = useState(false);

  return (
    <View style={styles.container}>
      <Text>{props.nome} { ligado ? 'Ligado' : 'Desligado'}</Text>
      <Button title={ ligado? 'Desligado':'Ligado' } onPress={() =>setLigado(!ligado) }/>
    </View>
) 

}
const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        backgroundColor: '#75727a',
      },
    });
    
export default Interruptor;