import React from 'react';
import {wp, hp} from '../utils/dimension';
import {colors} from '../themes';
import * as rn from 'react-native';
import {Icons} from '../components';
import {fontsize} from '../themes';
const Button = ({label = '', isEmpty = false, onTouchButton = () => {}}) => {
  const isDarkMode = rn.useColorScheme() === 'dark';

  const onPresButton = () => {
    if (onTouchButton) {
      onTouchButton();
    }
  };
  return (
    <rn.TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.container,
        {
          backgroundColor: !isEmpty
            ? colors.themePrimary
            : isDarkMode
            ? colors.black
            : colors.white,
        },
      ]}
      onPress={onPresButton}>
      <rn.Text
        style={[
          styles.buttonLabelTextStyle,
          {
            color: !isEmpty
              ? colors.white
              : isDarkMode
              ? colors.white
              : colors.black,
          },
        ]}>
        {label}
      </rn.Text>
    </rn.TouchableOpacity>
  );
};

const styles = rn.StyleSheet.create({
  container: {
    flex: 1,
    height: wp(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.themePrimary,
    borderWidth: 1,
    borderRadius: wp(10),
  },

  buttonLabelTextStyle: {color: colors.white, fontSize: fontsize.buttonText},
});
export default Button;
