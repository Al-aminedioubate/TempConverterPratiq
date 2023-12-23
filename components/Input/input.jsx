import { TextInput } from "react-native";
import {s} from "./input.style";
import { View } from "react-native";

export function Input(){
   return(
        <View>
            <TextInput style={s.btn} placeholder="Entrer la temperature ici..." maxLength={4} keyboardType="numeric"/>
        </View>
   ); 
}