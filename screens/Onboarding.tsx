import React from "react";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import ContainerView from "../components/ContainerView";
import Button from "../components/Button";

import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

type Props = NativeStackScreenProps<RootStackParamList, "Onboarding">;

export default function Onboarding({ navigation }: Props) {
  return (
    <ContainerView
      style={{
        flex: 1,
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingTop: 38,
        backgroundColor: Colors.primary_blue,
      }}
    >
      <>
        <Ionicons name="chatbubbles-outline" size={200} color={Colors.white} />
        <Text
          style={{
            fontSize: 24,
            color: Colors.white,
            fontFamily: Fonts["poppins-bold"],
          }}
        >
          Chat
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: Colors.white,
            fontFamily: Fonts["poppins-semiBold"],
          }}
        >
          Free and Amazing!
        </Text>

        <Button
          buttonStyle={{
            position: "absolute",
            bottom: 20,
            right: "auto",
            left: "auto",
            width: "100%",
            padding: 24,
            backgroundColor: Colors.white,
            borderRadius: 16,
            justifyContent: "center",
            alignItems: "center",
          }}
          text="Skip"
          onPress={() => navigation.navigate("Login")}
        />
      </>
    </ContainerView>
  );
}
