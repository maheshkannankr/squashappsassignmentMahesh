import React from 'react';
import * as rn from 'react-native';
import {Icons} from '../components';
import fontsize from '../themes/fontsize';
import {colors, fontfamily} from '../themes';
import {hp, wp} from '../utils/dimension';

const BackNavHeader = ({pageTitle, navigation}) => {
  const isDarkMode = rn.useColorScheme() === 'dark';

  const onPressBackIcon = () => {
    navigation.goBack();
  };

  return (
    <rn.View style={styles.titleContainer}>
      <rn.TouchableOpacity onPress={onPressBackIcon}>
        <Icons.LeftArrow color={isDarkMode ? colors.white : colors.black} />
      </rn.TouchableOpacity>
      <rn.Text
        style={[
          styles.titleTextStyle,
          {color: isDarkMode ? colors.white : colors.primaryFont},
        ]}>
        {pageTitle}
      </rn.Text>
    </rn.View>
  );
};

const styles = rn.StyleSheet.create({
  titleContainer: {
    height: hp(80),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(10),
  },

  titleTextStyle: {
    flex: 1,
    textAlign: 'center',
    fontFamily: fontfamily.fBold,
    fontSize: fontsize.headingSize,
  },
});
export default BackNavHeader;
