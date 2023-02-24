import { NativeStackScreenProps } from "@react-navigation/native-stack";
// import { Movie } from "./data";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Home: undefined;
  Conversation: undefined;
  EditProfile: undefined;
  Login: undefined;
  SignIn: undefined;
  Profile: undefined;
  Onboarding: undefined;
  // Detail: { movie: Movie };
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
