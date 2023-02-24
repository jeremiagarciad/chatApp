import { View, ViewStyle } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type TContainerView = {
  children: React.ReactElement | JSX.Element;
  style?: ViewStyle;
};

export default function ContainerView({ children, ...props }: TContainerView) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
      {...props}
    >
      {children}
    </View>
  );
}
