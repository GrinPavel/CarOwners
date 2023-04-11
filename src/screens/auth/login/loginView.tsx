import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PhoneInputComponent from 'react-native-phone-input';

import {
  BackButton,
  Background,
  Button,
  Header,
  Logo,
  TextInput,
} from '../../../components/index';
import PhoneInput from '../../../components/PhoneInput';

import {theme} from '../../../core/theme';
import {Navigation} from '../../../types';

export type validateObject = {
  value: string;
  error: string;
};
interface ILoginProps {
  navigation: Navigation;
  phoneNumber: validateObject;
  code: validateObject;
  loading: boolean;
  otpLoading: boolean;
  isLoginAvailable: boolean;
  setPhoneNumber: React.Dispatch<React.SetStateAction<validateObject>>;
  setCode: React.Dispatch<React.SetStateAction<validateObject>>;
  login: () => void;
  sendOTPCode: () => void;
  //PhoneInputProps
  inputRef: React.Ref<PhoneInputComponent>;
  errorText?: string;
  initialCountry: string;
  onSelectCountry: (iso2: string) => void;
  onChangePhoneNumber: (phone: string) => void;
}

const LoginView = ({
  navigation,
  phoneNumber,
  code,
  initialCountry,
  inputRef,
  loading,
  otpLoading,
  isLoginAvailable,
  onSelectCountry,
  onChangePhoneNumber,
  setCode,
  login,
  sendOTPCode,
}: ILoginProps): JSX.Element => (
  <KeyboardAwareScrollView
    keyboardShouldPersistTaps="handled"
    showsVerticalScrollIndicator={false}>
    <Background>
      <BackButton goBack={() => navigation.navigate('Onboarding')} />
      <Logo />
      <Header>Welcome back.</Header>

      <PhoneInput
        errorText={phoneNumber.error}
        initialCountry={initialCountry || undefined}
        inputRef={inputRef}
        value={phoneNumber.value}
        onChange={onChangePhoneNumber}
        onSelectCountry={onSelectCountry}
      />

      {isLoginAvailable && (
        <TextInput
          secureTextEntry
          error={!!code.error}
          errorText={code.error}
          label="Code"
          returnKeyType="done"
          value={code.value}
          onChangeText={text => setCode(prev => ({...prev, value: text}))}
        />
      )}

      <Button
        loading={isLoginAvailable ? loading : otpLoading}
        mode="contained"
        onPress={isLoginAvailable ? login : sendOTPCode}>
        {isLoginAvailable ? 'Login' : 'Send OTP'}
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  </KeyboardAwareScrollView>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
});

export default LoginView;
