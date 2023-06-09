import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { hitSlop, theme } from '../../core/theme';
import styles from './style';

type Props = {
  goBack: () => void;
};

const BackButton = ({ goBack }: Props) => (
  <TouchableOpacity hitSlop={hitSlop} style={styles.container} onPress={goBack}>
    <Icon color={theme.colors.black} name="arrow-left" size={24} />
  </TouchableOpacity>
);

export default memo(BackButton);
