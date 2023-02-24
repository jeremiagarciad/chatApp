import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import React from "react";

type TButtonProps = {
  text: string;
  onPress: () => void;
  buttonStyle: StyleProp<TextStyle>;
};

export default function Button({ text, onPress, buttonStyle }: TButtonProps) {
  return (
    <TouchableOpacity
      style={[buttonStyle]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={{ fontSize: 28 }}>{text}</Text>
    </TouchableOpacity>
  );
}
