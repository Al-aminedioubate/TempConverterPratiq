import { ImageBackground, Text, View } from "react-native";
import coldImg from "./assets/cold.png";
import hotImg from "./assets/hot.png";

import { s } from "./app.style";

export default function App() {
  return (
    <ImageBackground source={coldImg} style={s.container}>
      <View>
        <Text>Lamine</Text>
      </View>
    </ImageBackground>
  );
}
