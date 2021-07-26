import React, {useState, useEffect, useRef} from "react";
import {View, FlatList, StyleSheet, Animated} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import {AuthStackParams} from "@types";
import {onBoardingData} from "./onBoardingData";
import OnboardingItem from "./OnboardingItem";
import {Paginator} from "@components";
import NextButton from "./NextButton";
import {useAppState, useActions} from "@state";

type NavProp = StackNavigationProp<AuthStackParams, "Onboarding">;

function Onboarding({navigation}: {navigation: NavProp}) {
  const {showOnboarding} = useAppState().app;
  const {setShowOnboarding} = useActions().app;
  const [currIndex, setCurrIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList>(null);

  const viewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<any>}) => {
      setCurrIndex(viewableItems[0].index);
    }
  ).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const scrollTo = async () => {
    if (currIndex < onBoardingData.length - 1) {
      slidesRef?.current?.scrollToIndex({index: currIndex + 1});
    } else {
      await setShowOnboarding(false);
      navigation.navigate("SignIn");
    }
  };

  useEffect(() => {
    if (!showOnboarding) {
      navigation.navigate("SignIn");
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={{flex: 3}}>
        <FlatList
          data={onBoardingData}
          renderItem={({item}) => <OnboardingItem item={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id.toString()}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false}
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <Paginator data={onBoardingData} scrollX={scrollX} />
      <NextButton
        percentage={(currIndex + 1) * (100 / onBoardingData.length)}
        scrollTo={scrollTo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Onboarding;
