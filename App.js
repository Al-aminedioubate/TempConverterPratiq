import { ImageBackground, Text, View } from "react-native";
import coldImg from "./assets/cold.png";
import hotImg from "./assets/hot.png";

import { s } from "./app.style";

import { TemperatureDisplay } from "./components/temperatureDisplay/temperatureDisplay";
import { ButtonConvert } from "./components/ButtonConvert/ButtonConvert";
import { Input } from "./components/Input/input";

export default function App() {
  return (
    <ImageBackground source={coldImg} style={s.container}>
      <View style={s.workspace}>
        <TemperatureDisplay></TemperatureDisplay>
        <Input></Input>
        <ButtonConvert></ButtonConvert>
      </View>
    </ImageBackground>
  );
}
