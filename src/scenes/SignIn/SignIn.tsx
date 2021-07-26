import React, {useRef} from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput as RNTextInput
} from "react-native";
import {TextInput, Button} from 'react-native-paper';
import {COLORS} from "@styles";
import Logo from "@images/logo.png";
import {useForm, Controller, SubmitHandler} from "react-hook-form";
import {formValidation} from "@assets";
import {StackNavigationProp} from "@react-navigation/stack";
import {AuthStackParams, SigninFormValues} from "@types";
import {useActions} from "@state";
import {DismissKeyboardProvider, SplashProvider} from "@components";

type AuthStackNavigationProp = StackNavigationProp<AuthStackParams, "SignIn">;
type Props = {
  navigation: AuthStackNavigationProp;
};

function SignIn({navigation}: Props) {
  const inputRef = useRef<RNTextInput>(null)
  const {testSignEvent} = useActions().user;
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SigninFormValues>({resolver: formValidation.loginResolver});

  const onLogin: SubmitHandler<SigninFormValues> = (data) => {
    //1. call overmind login
    //2. on success overmind will trigger conditional rendering of AppStack
    console.log("logging in");
    //TODO Dev
    testSignEvent('in');
  };

  const onForgotPassword = () => {
    console.log("navigate to forgot password");
  };

  const onBecomeCustomer = () => {
    navigation.navigate("SignUp");
  };

  return (
    <SplashProvider>
      <DismissKeyboardProvider>
        <View style={styles.container}>
          <Image style={styles.logo} source={Logo} />
          <Text style={[styles.font, styles.titleText]}>Sign In</Text>
          <View style={{width: "100%", height: 50, marginBottom: 20}}>
            <Controller
              control={control}
              name="email"
              defaultValue=""
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  mode="outlined"
                  label="email"
                  keyboardType="email-address"
                  onSubmitEditing={() => inputRef !== null && inputRef.current?.focus()}
                  returnKeyType="next"
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                />
              )}
            />
          </View>
          <View style={{width: "100%", height: 50, marginBottom: 20}}>
            <Controller
              control={control}
              name="password"
              defaultValue=""
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  ref={inputRef}
                  mode="outlined"
                  label='password'
                  secureTextEntry={true}
                  returnKeyType="send"
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  onSubmitEditing={handleSubmit(onLogin)}
                  value={value}
                />
              )}
            />
          </View>
          <Button onPress={onForgotPassword} style={{margin: 10}} >
            <Text style={[styles.font, styles.link]}>Forgot Your Password?</Text>
          </Button>
          <Button
            onPress={handleSubmit(onLogin)}
            mode='contained'
            style={styles.buttonStyle}
          >
            SIGN IN
          </Button>
          <View style={styles.customerGroup}>
            <Button
              onPress={onBecomeCustomer}
            >
              BECOME A CUSTOMER
            </Button>
          </View>
        </View>
      </DismissKeyboardProvider>
    </SplashProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingTop: "10%",
    paddingLeft: 25,
    paddingRight: 25,
    justifyContent: "center",
    alignItems: 'center'
  },
  logo: {
    alignSelf: "center",
    margin: 40,
  },
  signinContainer: {
    backgroundColor: "white",
    padding: 10,
    flex: 1,
  },
  textInput: {
    color: "white",
  },
  headerText: {
    fontSize: 20,
  },
  inputBoxStyle: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 15,
    paddingBottom: 15,
    width: "100%",
    textAlign: "left",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  boxShadow: {
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.bodyText,
    width: "100%",
    height: 55,
    padding: 10,
    backgroundColor: COLORS.white,
    marginTop: 5,
    marginBottom: 20,
  },
  label: {
    color: COLORS.lightGreen,
    fontSize: 14,
  },
  font: {},
  titleText: {
    fontSize: 20,
    fontWeight: "800",
    color: COLORS.mainText,
    textAlign: "center",
    marginBottom: 20,
  },
  simpleText: {
    margin: 5,
    fontSize: 16,
    textAlign: "center",
  },
  link: {
    textDecorationLine: "underline",
    fontSize: 15,
    textAlign: "center",
    color: COLORS.lightGreen,
  },
  containerButton: {
    marginTop: 20,
    marginLeft: 0,
    width: "100%",
  },
  buttonStyle: {
    width: '70%',
  },
  socialSigninButton: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 40,
    flexDirection: "row",
    justifyContent: "center",
  },
  customerGroup: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  distance: {
    top: 25,
  },
});

export default SignIn;
