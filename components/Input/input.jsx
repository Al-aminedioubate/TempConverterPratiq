import { TextInput } from "react-native";
import {s} from "./input.style";
import { View } from "react-native";

export function Input(){
   return(
        <View style={s.container}>
            <TextInput style={s.txt} placeholder="Entrer la temperature ici..." maxLength={4} keyboardType="numeric"/>
        </View>
   ); 
}