import React from 'react';
import {wp, hp} from '../../utils/dimension';
import {colors} from '../../themes';
import * as rn from 'react-native';
import {Icons} from '../../components';
import fontsize from '../../themes/fontsize';
import {appName, dummyText, SignupDeviceTools, signUpTools} from '../../utils';

const SignupVia = ({Logo, name, isDarkMode, onPressSignUpMode}) => {
  return (
    <rn.TouchableOpacity
      activeOpacity={0.5}
      style={styles.signUpViaView}
      onPress={onPressSignUpMode}>
      <Logo color={isDarkMode ? colors.white : colors.black} />
      <rn.Text
        style={[
          styles.signupViaNameTextStyle,
          {color: isDarkMode ? colors.white : colors.black},
        ]}>{`Signup with ${name}`}</rn.Text>
    </rn.TouchableOpacity>
  );
};

const SignupDevice = ({Logo, isDarkMode, onPressSignUpMode}) => {
  return (
    <rn.TouchableOpacity
      style={styles.signUpDeviceViaView}
      activeOpacity={0.5}
      onPress={onPressSignUpMode}>
      <Logo color={isDarkMode ? colors.white : colors.black} />
    </rn.TouchableOpacity>
  );
};

const SignToolsContainer = ({isDarkMode, onPressSignupViaMode}) => {
  return (
    <rn.View style={styles.signupToolContainerView}>
      {signUpTools.map((tool, index) => (
        <SignupVia
          key={index}
          Logo={tool.Logo}
          name={tool.name}
          isDarkMode={isDarkMode}
          onPressSignUpMode={onPressSignupViaMode}
        />
      ))}
      <rn.View style={styles.signupDeviceToolContainerView}>
        {SignupDeviceTools.map((device, index) => (
          <SignupDevice
            key={index}
            Logo={device.Logo}
            isDarkMode={isDarkMode}
            onPressSignUpMode={onPressSignupViaMode}
          />
        ))}
      </rn.View>
      <rn.Text style={styles.alreadyAccountTextStyle}>
        <rn.Text
          style={[
            styles.alreadyAccountTextStyle,
            {color: isDarkMode ? colors.white : colors.secondaryFont},
          ]}>
          {'Already have an account? '}
        </rn.Text>
        <rn.Text style={styles.loginTextStyle}>{'Login'}</rn.Text>
      </rn.Text>
    </rn.View>
  );
};

const ImageView = ({isDarkMode}) => {
  return (
    <rn.View style={styles.signupImageViewContainer}>
      <Icons.AppLogo width={wp(100)} height={hp(100)} />
      <rn.Text
        style={[
          styles.appNameTextStyle,
          {color: isDarkMode ? colors.white : colors.black},
        ]}>
        {appName}
      </rn.Text>
      <rn.Text
        style={[
          styles.descTextStyle,
          {color: isDarkMode ? colors.white : colors.secondaryFont},
        ]}>
        {dummyText}
      </rn.Text>
    </rn.View>
  );
};

const SignupScreen = ({navigation}) => {
  const isDarkMode = rn.useColorScheme() === 'dark';

  const onPressSignupViaMode = () => {
    navigation.navigate('languageSelectionScreen');
  };
  return (
    <rn.View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? colors.black : colors.white},
      ]}>
      <ImageView isDarkMode={isDarkMode} />
      <SignToolsContainer
        isDarkMode={isDarkMode}
        onPressSignupViaMode={onPressSignupViaMode}
      />
    </rn.View>
  );
};

const styles = rn.StyleSheet.create({
  container: {
    flex: 1,
    gap: wp(10),
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  signupImageViewContainer: {
    flex: 1,
    rowGap: wp(20),
    alignItems: 'center',
    justifyContent: 'center',
  },

  appNameTextStyle: {
    fontSize: fontsize.appTitle,
  },
  descTextStyle: {
    textAlign: 'center',
    color: colors.secondaryFont,
    fontSize: fontsize.descriptionSize,
  },
  alreadyAccountTextStyle: {
    textAlign: 'center',
    fontSize: fontsize.descriptionSize,
  },

  loginTextStyle: {
    fontSize: fontsize.descriptionSize,
    color: colors.themePrimary,
  },

  signupToolContainerView: {
    flex: 1,
    paddingHorizontal: wp(20),
    rowGap: wp(20),
  },

  signupDeviceToolContainerView: {
    flexDirection: 'row',
    columnGap: wp(20),
    justifyContent: 'center',
  },

  signUpViaView: {
    padding: wp(15),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.borderColor,
    borderRadius: wp(10),
    borderWidth: 1,
  },

  signUpDeviceViaView: {
    padding: wp(10),
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.borderColor,
    borderRadius: wp(5),
    borderWidth: 1,
    justifyContent: 'center',
  },

  signupViaNameTextStyle: {
    textAlign: 'center',
    flex: 1,
    color: colors.primaryFont,
    fontSize: fontsize.secondaryHeading,
  },
});
export default SignupScreen;
