import { TouchableOpacity } from "react-native";
import {s} from "./ButtonConvert.style";
import { Text } from "react-native";
import { View } from "react-native";

export function ButtonConvert(){
    return(
        <View style={s.container}>
            <TouchableOpacity style={s.btn}>
                <Text style={s.txt}>Convertir</Text>
            </TouchableOpacity>
        </View>
        
    );
}
  
    
