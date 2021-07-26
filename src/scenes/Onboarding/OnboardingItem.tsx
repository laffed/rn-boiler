import { COLORS } from "@styles";
import React from "react";
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  StyleSheet,
} from "react-native";
import { OnboardingObj } from "./onboardingData";

type Props = {
  item: OnboardingObj;
};

function OnboardingItem({ item }: Props) {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />
      <View style={{ flex: 0.2 }}>
        <Text style={[styles.title]}>{item.title}</Text>
        <Text style={[styles.body]}>{item.body}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "800",
    fontSize: 28,
    marginBottom: 10,
    color: COLORS.mainText,
    textAlign: "center",
  },
  body: {
    fontWeight: "300",
    color: COLORS.bodyText,
    textAlign: "center",
    paddingHorizontal: 64,
  },
});

export default OnboardingItem;
