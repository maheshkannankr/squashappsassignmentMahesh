import React from 'react';
import * as rn from 'react-native';
import {Icons} from '../components';
import fontsize from '../themes/fontsize';
import {colors} from '../themes';
import {wp} from '../utils/dimension';
import useBackHandler from '../utils/backbuttonhandler';

const BackNavHeader = ({pageTitle}) => {
  const isDarkMode = rn.useColorScheme() === 'dark';

  const onPressBackIcon = useBackHandler();

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
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(10),
  },

  titleTextStyle: {
    flex: 1,
    textAlign: 'center',
    fontWeight: '900',
    fontSize: fontsize.headingSize,
  },
});
export default BackNavHeader;
