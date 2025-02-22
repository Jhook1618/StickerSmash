import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";

type Props = {
  imgSource: string;
};

export default function ImageViewer({ imgSource }: Props) {
  return <Image source={imgSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 540,
    borderRadius: 18,
  },
});
