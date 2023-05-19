import React from 'react';

import {
  Background,
  Button,
  Header,
  Logo,
  Paragraph,
} from '../../../components/index';

interface OnboardingProps {
  navigateToLogin: () => void;
  navigateToRegistration: () => void;
}

const Onboarding = ({
  navigateToLogin,
  navigateToRegistration,
}: OnboardingProps): JSX.Element => (
  <Background>
    <Logo />
    <Header>Car Owners</Header>

    <Paragraph>
      The easiest way to collect information about your cars.
    </Paragraph>
    <Button mode="contained" onPress={navigateToLogin}>
      Login
    </Button>
    <Button mode="outlined" onPress={navigateToRegistration}>
      Sign Up
    </Button>
  </Background>
);

export default Onboarding;
