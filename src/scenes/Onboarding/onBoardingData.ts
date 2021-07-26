import cooking from "@images/undraw_cooking.png";
import eating from "@images/undraw_eating_together.png";
import gardening from "@images/undraw_gardening.png";
import groceries from "@images/undraw_online_groceries.png";
import {ImageSourcePropType} from "react-native";

export type OnboardingObj = {
  id: number;
  title: string;
  body: string;
  image: ImageSourcePropType;
};

export const onBoardingData: OnboardingObj[] = [
  {
    id: 0,
    title: "Welcome!",
    body: "...to the Baldor experience.",
    image: cooking,
  },
  {
    id: 1,
    title: "Only The Best Ingredients",
    body: "We source only the best ingredients. From local quality farms straight to your kitchen.",
    image: gardening,
  },
  {
    id: 2,
    title: "Shop Easy",
    body: "Baldor makes it super simple to source ingredients for your resturaunt.",
    image: groceries,
  },
  {
    id: 3,
    title: "Baldor Trust",
    body: "We take the hassle out of sourcing so you can focus on your patrons!",
    image: eating,
  },
];
