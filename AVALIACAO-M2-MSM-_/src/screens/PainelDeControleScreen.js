import { View } from "react-native"
import Interruptor from "../componentes/Interruptor"

export default function PainelDeControleScreen(){
  return (
    <View>
        <Interruptor nome={'Sala'}/>
        <Interruptor nome={'Quarto'}/>
        <Interruptor nome={'Cozinah'}/>
    </View>
  )
}