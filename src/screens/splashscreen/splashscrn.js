import React, {useEffect} from 'react';
import {wp, hp} from '../../utils/dimension';
import {colors} from '../../themes';
import * as rn from 'react-native';
import {Icons} from '../../components';
import fontsize from '../../themes/fontsize';
import {appName} from '../../utils';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('signupScreen');
    }, 3000);
  }, []);
  const isDarkMode = rn.useColorScheme() === 'dark';
  return (
    <rn.View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? colors.black : colors.white},
      ]}>
      <Icons.AppLogo width={wp(100)} height={hp(100)} />
      <rn.Text
        style={[
          styles.appNameTextStyle,
          {color: isDarkMode ? colors.white : colors.black},
        ]}>
        {appName}
      </rn.Text>
    </rn.View>
  );
};

const styles = rn.StyleSheet.create({
  container: {
    flex: 1,
    gap: hp(16),
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  appNameTextStyle: {
    fontSize: fontsize.appTitle,
  },
});
export default SplashScreen;
